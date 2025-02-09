import { IRawResponseWrapper } from '@stone-js/core'
import { BrowserResponse, RawBrowserResponseOptions } from './declarations'

/**
 * Wrapper for generic raw responses.
 *
 * The `RawResponseWrapper` is responsible for encapsulating a raw response
 * and returning it in a structure that aligns with the Stone.js framework's requirements.
 * It implements the `IRawResponseWrapper` interface, ensuring compatibility with the framework.
 */
export class RawResponseWrapper implements IRawResponseWrapper<BrowserResponse> {
  /**
   * Factory method to create an instance of `RawResponseWrapper`.
   *
   * This method initializes the wrapper with a set of partial response options.
   *
   * @param options - Partial options to configure the raw response.
   * @returns A new instance of `RawResponseWrapper`.
   *
   * @example
   * ```typescript
   * const responseWrapper = RawResponseWrapper.create({
   *   body: { message: 'Success' },
   *   statusCode: 200,
   * });
   *
   * const response = responseWrapper.respond();
   * console.log(response); // { body: { message: 'Success' }, statusCode: 200 }
   * ```
   */
  static create (options: RawBrowserResponseOptions): RawResponseWrapper {
    return new this(options)
  }

  /**
   * Constructs an instance of `RawResponseWrapper`.
   *
   * This constructor is private and should not be called directly.
   * Use the `create` method to initialize an instance.
   *
   * @param options - Partial options for configuring the raw response.
   */
  private constructor (private readonly options: RawBrowserResponseOptions) {}

  /**
   * Constructs and returns the raw response.
   *
   * The `respond` method generates and returns the raw response based on
   * the provided options. The response is returned as-is, allowing for
   * maximum flexibility in defining its structure.
   *
   * @returns A `RawResponse` object containing the response options.
   *
   * @example
   * ```typescript
   * const responseWrapper = RawResponseWrapper.create({ body: 'Hello, world!' });
   * const response = responseWrapper.respond();
   * console.log(response); // { body: 'Hello, world!' }
   * ```
   */
  async respond (): Promise<BrowserResponse> {
    return await this.options?.render?.()
  }
}
