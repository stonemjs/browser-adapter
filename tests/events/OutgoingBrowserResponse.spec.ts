import { OutgoingBrowserResponse, OutgoingBrowserResponseOptions } from '../../src/events/OutgoingBrowserResponse'

// Mock options for OutgoingBrowserResponse
const mockOptions: OutgoingBrowserResponseOptions = {}

// Create an instance of OutgoingBrowserResponse for testing

describe('OutgoingBrowserResponse', () => {
  let response: OutgoingBrowserResponse

  beforeEach(() => {
    response = OutgoingBrowserResponse.create(mockOptions)
  })

  it('should create an instance of OutgoingBrowserResponse', () => {
    expect(response).toBeInstanceOf(OutgoingBrowserResponse)
  })
})
