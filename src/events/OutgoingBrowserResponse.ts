import { OutgoingResponse, OutgoingResponseOptions } from '@stone-js/core'

/**
 * Options for creating an Outgoing Browser Response.
 */
export interface OutgoingBrowserResponseOptions extends OutgoingResponseOptions {}

export class OutgoingBrowserResponse extends OutgoingResponse {
  static OUTGOING_BROWSER_RESPONSE = 'stonejs@outgoing_browser_response'

  /**
   * Constructor for OutgoingBrowserResponse.
   * Initializes headers and cookies based on the provided options.
   *
   * @param options - Options for the outgoing browser response.
   */
  constructor (options: OutgoingBrowserResponseOptions) {
    super({ ...options, type: OutgoingBrowserResponse.OUTGOING_BROWSER_RESPONSE })
  }
}
