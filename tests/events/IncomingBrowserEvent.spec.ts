import { CookieCollection } from '../../src/cookies/CookieCollection'
import { BrowserAdapterError } from '../../src/errors/BrowserAdapterError'
import { IncomingBrowserEvent, IncomingBrowserEventOptions } from '../../src/events/IncomingBrowserEvent'

// Mock options for IncomingBrowserEvent
const mockOptions: IncomingBrowserEventOptions = {
  locale: 'en',
  protocol: 'http',
  metadata: { username: 'Jonh' },
  queryString: 'param1=value1&param2=value2',
  url: new URL('http://localhost/test#title'),
  cookies: CookieCollection.create('test=value; anotherTest=anotherValue')
}

// Create an instance of IncomingBrowserEvent for testing

describe('IncomingBrowserEvent', () => {
  let event: IncomingBrowserEvent

  beforeEach(() => {
    event = IncomingBrowserEvent.create(mockOptions)
    vi.clearAllMocks()
  })

  it('should create an instance of IncomingBrowserEvent', () => {
    const event = IncomingBrowserEvent.create({ ...mockOptions, queryString: undefined, cookies: undefined, headers: new Headers() })
    // @ts-expect-error - Invalid router value for testing purposes
    event.setRouteResolver(() => ({ params: { env: 'test' } }))
    // @ts-expect-error - Invalid value for testing purposes
    event.url = { pathname: '%' }
    expect(event.params).toEqual({ env: 'test' })
    expect(event.decodedPathname).toBeUndefined()
    expect(event).toBeInstanceOf(IncomingBrowserEvent)
  })

  it('should correctly invoke getters', () => {
    expect(event.decodedPathname).toBe('/test')
    expect(event.host).toBe('localhost')
    expect(event.hash).toBe('#title')
    expect(event.hostname).toBe('localhost')
    expect(event.pathname).toBe('/test')
    expect(event.params).toBeUndefined()
    expect(event.path).toBe('/test')
    expect(event.scheme).toBe('http')
    expect(event.segments).toEqual(['', 'test'])
    expect(event.isSecure).toBe(false)
    expect(event.uri).toBe('http://localhost/test#title')
    expect(event.getRouteResolver()()).toBeUndefined()
    expect(event.getUserResolver()()).toBeUndefined()
    expect(event.getUser()).toBeUndefined()
    expect(event.getUri()).toBe('/test')
    expect(event.getUri(true)).toBe('http://localhost/test')
    expect(event.uriForPath('/api/v1/test')).toBe('http://localhost/api/v1/test')
    expect(event.query.get('param1')).toBe('value1')
    expect(event.hasCookie('test-cookie')).toBe(false)
    expect(event.getCookie('test-cookie')).toBeUndefined()
    expect(event.setUserResolver(() => ({ name: 'Stone' })).getUser()).toEqual({ name: 'Stone' })
  })

  it('should correctly invoke getters in some edge conditions', () => {
    const event = IncomingBrowserEvent.create({ ...mockOptions, headers: new Headers() })
    // @ts-expect-error - Accessing private property for testing purposes
    event.url = { pathname: '%', href: 'http://localhost/test#title' }
    expect(event.getUri(true)).toBe('http://localhost/')
  })

  describe('get', () => {
    it('should correctly return the value from the path params', () => {
      // @ts-expect-error - Invalid method value for testing purposes
      event.setRouteResolver(() => ({ getParam: () => 'Stone' }))
      expect(event.get('name')).toBe('Stone')
    })

    it('should correctly return the value from the query params', () => {
      const event = IncomingBrowserEvent.create({ ...mockOptions, queryString: '?name=Stone.js' })
      expect(event.get('name')).toBe('Stone.js')
    })

    it('should correctly return the value from the cookies', () => {
      const event = IncomingBrowserEvent.create({ ...mockOptions })
      expect(event.get<string>('test')).toBe('value')
    })

    it('should correctly return the value from the metadata', () => {
      const event = IncomingBrowserEvent.create({ ...mockOptions })
      expect(event.get<Record<string, string>>('username')).toBe('Jonh')
    })
  })

  it('should throw an error on invalid cookie name', () => {
    // @ts-expect-error - Invalid cookie name
    expect(() => event.getCookie(40)).toThrow(BrowserAdapterError)
    // @ts-expect-error - Invalid cookie name
    expect(() => event.hasCookie(40)).toThrow(BrowserAdapterError)
  })

  it('should throw an error if an invalid URL is provided', () => {
    expect(() => IncomingBrowserEvent.create({ ...mockOptions, url: 'invalid-url' as unknown as URL })).toThrow(BrowserAdapterError)
  })
})
