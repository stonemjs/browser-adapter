import { BrowserAdapter } from '../src/BrowserAdapter'
import { RawResponseWrapper } from '../src/RawResponseWrapper'
import { AdapterEventBuilder, AdapterOptions } from '@stone-js/core'
import { BrowserAdapterError } from '../src/errors/BrowserAdapterError'
import { IncomingBrowserEvent, OutgoingBrowserResponse } from '@stone-js/browser-core'

vi.mock('../src/RawResponseWrapper', () => ({
  RawResponseWrapper: {
    create: vi.fn()
  }
}))

describe('BrowserAdapter', () => {
  let adapterOptions: AdapterOptions<IncomingBrowserEvent, OutgoingBrowserResponse>

  beforeEach(() => {
    adapterOptions = {
      hooks: {},
      blueprint: {
        get: vi.fn()
      },
      handlerResolver: vi.fn(),
      logger: {
        error: vi.fn()
      }
    } as any
  })

  it('should create an instance with correct https configuration', () => {
    const adapter = BrowserAdapter.create(adapterOptions)
    expect(adapter).toBeInstanceOf(BrowserAdapter)
  })

  it('should throw error when used outside the Browser context', async () => {
    const adapter = BrowserAdapter.create(adapterOptions)

    // @ts-expect-error - Simulate browser context
    global.window = undefined

    await expect(adapter.run()).rejects.toThrow(BrowserAdapterError)
  })

  it('should call the appropriate event listener on request', async () => {
    global.window = {} as any // Simulate browser context

    const adapter = BrowserAdapter.create(adapterOptions)

    RawResponseWrapper.create = vi.fn()
    IncomingBrowserEvent.create = vi.fn()
    AdapterEventBuilder.create = vi.fn((options) => options.resolver({}))

    adapterOptions.blueprint.get = vi.fn(() => ['@stonejs/router.navigate'])

    /* eslint-disable-next-line @typescript-eslint/no-misused-promises */
    window.addEventListener = vi.fn(async (eventName, listener) => {
      await listener(new Event('@stonejs/router.navigate'))
    })

    // @ts-expect-error
    adapter.sendEventThroughDestination = vi.fn()
    // @ts-expect-error
    adapter.onPrepare = vi.fn()

    const rawResponse = await adapter.run()

    expect(rawResponse).toBeUndefined()
    expect(window.addEventListener).toHaveBeenCalled()
    expect(AdapterEventBuilder.create).toHaveBeenCalled()
    expect(RawResponseWrapper.create).toHaveBeenCalledWith(expect.anything())
    expect(adapterOptions.blueprint.get).toHaveBeenCalledWith('stone.adapter.events', expect.any(Array))
    // @ts-expect-error
    expect(adapter.onPrepare).toHaveBeenCalled()
    // @ts-expect-error
    expect(adapter.sendEventThroughDestination).toHaveBeenCalled()
  })
})
