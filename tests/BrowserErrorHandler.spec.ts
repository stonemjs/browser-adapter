import { BrowserErrorHandler } from '../src/BrowserErrorHandler'
import { IntegrationError, AdapterErrorContext, ILogger } from '@stone-js/core'

describe('BrowserErrorHandler', () => {
  let mockLogger: ILogger
  let handler: BrowserErrorHandler
  let mockContext: AdapterErrorContext<any, any, any>

  beforeEach(() => {
    mockLogger = {
      error: vi.fn()
    } as unknown as ILogger

    mockContext = {
      rawEvent: {},
      rawResponseBuilder: {
        add: vi.fn().mockReturnThis(),
        build: vi.fn().mockReturnValue({
          respond: vi.fn().mockResolvedValue('response')
        })
      }
    } as unknown as AdapterErrorContext<any, any, any>

    handler = new BrowserErrorHandler({ logger: mockLogger })
  })

  test('should throw an IntegrationError if logger is not provided', () => {
    expect(() => new BrowserErrorHandler({ logger: undefined as any })).toThrowError(IntegrationError)
  })

  test('should handle an error and return a response with correct headers', async () => {
    const error = new Error('Something went wrong')
    const response = await handler.handle(error, mockContext)

    expect(mockLogger.error).toHaveBeenCalledWith('Something went wrong', { error })
    expect(response).toBe('response')
  })
})
