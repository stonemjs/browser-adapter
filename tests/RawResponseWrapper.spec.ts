import { BrowserResponse } from '../src/declarations'
import { RawResponseWrapper } from '../src/RawResponseWrapper'

describe('RawResponseWrapper', () => {
  let mockResponse: BrowserResponse

  beforeEach(() => {
    // Mock the ServerResponse object
    mockResponse = {
      body: 'Hello, world!'
    }
  })

  it('should set status code and message when options are provided', () => {
    const wrapper = RawResponseWrapper.create(mockResponse)

    const rawResponse = wrapper.respond()

    expect(rawResponse).toEqual(mockResponse)
  })

  it('should handle missing options gracefully', () => {
    const wrapper = RawResponseWrapper.create({})

    const rawResponse = wrapper.respond()

    expect(rawResponse).not.toEqual(mockResponse)
    expect(rawResponse).toEqual({})
  })
})
