
import { RawResponseWrapper } from './RawResponseWrapper'
import { BrowserAdapterError } from './errors/BrowserAdapterError'
import { IncomingBrowserEvent, IncomingBrowserEventOptions, OutgoingBrowserResponse } from '@stone-js/browser-core'
import { BrowserContext, BrowserEvent, BrowserResponse, BrowserAdapterContext, RawBrowserResponseOptions } from './declarations'
import { Adapter, AdapterEventBuilder, AdapterEventHandlerType, AdapterOptions, LifecycleAdapterEventHandler } from '@stone-js/core'

/**
 * Browser Adapter for Stone.js.
 *
 * The `BrowserAdapter` provides seamless integration between Stone.js applications
 * and the Browser environment. It processes incoming events from Browser,
 * transforms them into `IncomingBrowserEvent` instances, and returns a `BrowserResponse`.
 *
 * This adapter ensures compatibility with Browser's execution model and
 * abstracts the event handling process for Stone.js developers.
 *
 * @template BrowserEvent - The type of the raw event received from Browser.
 * @template BrowserResponse - The type of the response to send back to Browser.
 * @template BrowserContext - The Browser execution context type.
 * @template IncomingBrowserEvent - The type of the processed incoming event.
 * @template IncomingBrowserEventOptions - Options used to create an incoming event.
 * @template OutgoingBrowserResponse - The type of the outgoing response after processing.
 * @template BrowserAdapterContext - Context type specific to the adapter.
 *
 * @extends Adapter
 *
 * @example
 * ```typescript
 * import { BrowserAdapter } from '@stone-js/browser-adapter';
 *
 * const adapter = BrowserAdapter.create({...});
 *
 * await adapter.run();
 * ```
 *
 * @see {@link https://stone-js.com/docs Stone.js Documentation}
 */
export class BrowserAdapter extends Adapter<
BrowserEvent,
BrowserResponse,
BrowserContext,
IncomingBrowserEvent,
IncomingBrowserEventOptions,
OutgoingBrowserResponse,
BrowserAdapterContext
> {
  /**
   * Creates an instance of the `BrowserAdapter`.
   *
   * This factory method allows developers to instantiate the adapter with
   * the necessary configuration options, ensuring it is correctly set up for
   * Browser usage.
   *
   * @param options - The configuration options for the adapter, including
   *                  handler resolver, error handling, and other settings.
   * @returns A fully initialized `BrowserAdapter` instance.
   */
  static create (options: AdapterOptions<IncomingBrowserEvent, OutgoingBrowserResponse>): BrowserAdapter {
    return new this(options)
  }

  /**
   * Executes the adapter and provides an Browser-compatible handler function.
   *
   * The `run` method initializes the adapter and listens for incoming Browser events.
   * It processes these events, generates a response, and sends it back to the Browser.
   *
   * @throws {BrowserAdapterError} If used outside the Browser environment.
   */
  public async run<ExecutionResultType = undefined>(): Promise<ExecutionResultType> {
    await this.onInit()

    const eventHandler = this.handlerResolver(this.blueprint) as LifecycleAdapterEventHandler<IncomingBrowserEvent, OutgoingBrowserResponse>

    this.blueprint.get<string[]>('stone.adapter.events', []).forEach((eventName) => {
      /* eslint-disable-next-line @typescript-eslint/no-misused-promises */
      window.addEventListener(eventName, async (rawEvent: BrowserEvent) => {
        await this.eventListener(eventHandler, rawEvent, window)
      })
    })

    await this.onPrepare(eventHandler)

    return undefined as ExecutionResultType
  }

  /**
   * Initializes the adapter and validates its execution context.
   *
   * Ensures the adapter is running in a Browser environment. If not, it
   * throws an error to prevent misuse.
   *
   * @throws {BrowserAdapterError} If executed outside a Browser context (e.g., node).
   */
  protected async onInit (): Promise<void> {
    if (window === undefined) {
      throw new BrowserAdapterError('This `BrowserAdapter` must be used only in Browser context.')
    }

    await super.onInit()
  }

  /**
   * Processes an incoming Browser event.
   *
   * This method transforms the raw Browser event into a Stone.js `IncomingBrowserEvent`,
   * processes it through the pipeline, and generates a `RawResponse` to send back.
   *
   * @param rawEvent - The raw Browser event to be processed.
   * @param executionContext - The Browser execution context for the event.
   * @returns A promise resolving to the processed `RawResponse`.
   */
  protected async eventListener (
    eventHandler: AdapterEventHandlerType<IncomingBrowserEvent, OutgoingBrowserResponse>,
    rawEvent: BrowserEvent,
    executionContext: BrowserContext
  ): Promise<BrowserResponse> {
    const incomingEventBuilder = AdapterEventBuilder.create<IncomingBrowserEventOptions, IncomingBrowserEvent>({
      resolver: (options) => IncomingBrowserEvent.create(options)
    })

    const rawResponseBuilder = AdapterEventBuilder.create<RawBrowserResponseOptions, RawResponseWrapper>({
      resolver: (options) => RawResponseWrapper.create(options)
    })

    return await this.sendEventThroughDestination(eventHandler, {
      rawEvent,
      executionContext,
      rawResponseBuilder,
      incomingEventBuilder
    })
  }
}
