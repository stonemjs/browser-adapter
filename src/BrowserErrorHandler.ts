import { BrowserContext, BrowserEvent, BrowserResponse } from './declarations'
import { IntegrationError, AdapterErrorContext, IAdapterErrorHandler, ILogger } from '@stone-js/core'

/**
 * BrowserErrorHandler options.
 */
export interface BrowserErrorHandlerOptions {
  logger: ILogger
}

/**
 * Class representing an BrowserErrorHandler.
 */
export class BrowserErrorHandler implements IAdapterErrorHandler<BrowserEvent, BrowserResponse, BrowserContext> {
  private readonly logger: ILogger

  /**
   * Create an BrowserErrorHandler.
   *
   * @param options - BrowserErrorHandler options.
   */
  constructor ({ logger }: BrowserErrorHandlerOptions) {
    if (logger === undefined) {
      throw new IntegrationError('Logger is required to create an BrowserErrorHandler instance.')
    }

    this.logger = logger
  }

  /**
   * Handle an error.
   *
   * @param error - The error to handle.
   * @param context - The context of the adapter.
   * @returns The raw response.
   */
  public async handle (error: Error, context: AdapterErrorContext<BrowserEvent, BrowserResponse, BrowserContext>): Promise<BrowserResponse> {
    this.logger.error(error.message, { error })
    return await context.rawResponseBuilder.build().respond()
  }
}
