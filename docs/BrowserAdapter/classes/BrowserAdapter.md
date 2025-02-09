[**Browser Adapter Documentation v0.0.2**](../../README.md)

***

[Browser Adapter Documentation](../../modules.md) / [BrowserAdapter](../README.md) / BrowserAdapter

# Class: BrowserAdapter

Defined in: [browser-adapter/src/BrowserAdapter.ts:39](https://github.com/stonemjs/browser-adapter/blob/4c992e1c0dfba4d1029b4789eb682027ed7245ee/src/BrowserAdapter.ts#L39)

Browser Adapter for Stone.js.

The `BrowserAdapter` provides seamless integration between Stone.js applications
and the Browser environment. It processes incoming events from Browser,
transforms them into `IncomingBrowserEvent` instances, and returns a `BrowserResponse`.

This adapter ensures compatibility with Browser's execution model and
abstracts the event handling process for Stone.js developers.

## Template

The type of the raw event received from Browser.

## Template

The type of the response to send back to Browser.

## Template

The Browser execution context type.

## Template

The type of the processed incoming event.

## Template

Options used to create an incoming event.

## Template

The type of the outgoing response after processing.

## Template

Context type specific to the adapter.

## Example

```typescript
import { BrowserAdapter } from '@stone-js/browser-adapter';

const adapter = BrowserAdapter.create({...});

await adapter.run();
```

## See

[Stone.js Documentation](https://stone-js.com/docs)

## Extends

- `Adapter`\<[`BrowserEvent`](../../declarations/type-aliases/BrowserEvent.md), [`BrowserResponse`](../../declarations/type-aliases/BrowserResponse.md), [`BrowserContext`](../../declarations/type-aliases/BrowserContext.md), `IncomingBrowserEvent`, `IncomingBrowserEventOptions`, `OutgoingBrowserResponse`, [`BrowserAdapterContext`](../../declarations/type-aliases/BrowserAdapterContext.md)\>

## Constructors

### new BrowserAdapter()

> `protected` **new BrowserAdapter**(`options`): [`BrowserAdapter`](BrowserAdapter.md)

Defined in: core/dist/index.d.ts:2631

Create an Adapter.

#### Parameters

##### options

`AdapterOptions`\<`IncomingBrowserEvent`, `OutgoingBrowserResponse`\>

Adapter options.

#### Returns

[`BrowserAdapter`](BrowserAdapter.md)

#### Inherited from

`Adapter< BrowserEvent, BrowserResponse, BrowserContext, IncomingBrowserEvent, IncomingBrowserEventOptions, OutgoingBrowserResponse, BrowserAdapterContext >.constructor`

## Properties

### blueprint

> `protected` `readonly` **blueprint**: `IBlueprint`\<`any`\>

Defined in: core/dist/index.d.ts:2623

#### Inherited from

`Adapter.blueprint`

***

### handlerResolver

> `protected` `readonly` **handlerResolver**: `AdapterEventHandlerResolver`\<`IncomingBrowserEvent`, `OutgoingBrowserResponse`\>

Defined in: core/dist/index.d.ts:2624

#### Inherited from

`Adapter.handlerResolver`

***

### hooks

> `protected` `readonly` **hooks**: `AdapterHooks`

Defined in: core/dist/index.d.ts:2622

#### Inherited from

`Adapter.hooks`

***

### logger

> `protected` `readonly` **logger**: `ILogger`

Defined in: core/dist/index.d.ts:2621

#### Inherited from

`Adapter.logger`

## Methods

### afterHandle()

> `protected` **afterHandle**(`eventHandler`, `context`): `Promise`\<`void`\>

Defined in: core/dist/index.d.ts:2681

Hook that runs after handling each event.

#### Parameters

##### eventHandler

`AdapterEventHandlerType`\<`IncomingBrowserEvent`, `OutgoingBrowserResponse`\>

Action handler to be run.

##### context

[`BrowserAdapterContext`](../../declarations/type-aliases/BrowserAdapterContext.md)

The event context.

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Adapter.afterHandle`

***

### beforeHandle()

> `protected` **beforeHandle**(`eventHandler`): `Promise`\<`void`\>

Defined in: core/dist/index.d.ts:2674

Hook that runs before handling each event.

#### Parameters

##### eventHandler

`AdapterEventHandlerType`\<`IncomingBrowserEvent`, `OutgoingBrowserResponse`\>

Action handler to be run.

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Adapter.beforeHandle`

***

### eventListener()

> `protected` **eventListener**(`eventHandler`, `rawEvent`, `executionContext`): `Promise`\<`unknown`\>

Defined in: [browser-adapter/src/BrowserAdapter.ts:114](https://github.com/stonemjs/browser-adapter/blob/4c992e1c0dfba4d1029b4789eb682027ed7245ee/src/BrowserAdapter.ts#L114)

Processes an incoming Browser event.

This method transforms the raw Browser event into a Stone.js `IncomingBrowserEvent`,
processes it through the pipeline, and generates a `RawResponse` to send back.

#### Parameters

##### eventHandler

`AdapterEventHandlerType`\<`IncomingBrowserEvent`, `OutgoingBrowserResponse`\>

##### rawEvent

[`BrowserEvent`](../../declarations/type-aliases/BrowserEvent.md)

The raw Browser event to be processed.

##### executionContext

`Window` & *typeof* `globalThis`

The Browser execution context for the event.

#### Returns

`Promise`\<`unknown`\>

A promise resolving to the processed `RawResponse`.

***

### executeHooks()

> `protected` **executeHooks**(`hook`, `context`?): `Promise`\<`void`\>

Defined in: core/dist/index.d.ts:2695

Execute lifecycle hooks.

#### Parameters

##### hook

keyof `AdapterHooks`

The hook to execute.

##### context?

[`BrowserAdapterContext`](../../declarations/type-aliases/BrowserAdapterContext.md)

The event context.

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Adapter.executeHooks`

***

### makePipelineOptions()

> `protected` **makePipelineOptions**(): `PipelineOptions`\<[`BrowserAdapterContext`](../../declarations/type-aliases/BrowserAdapterContext.md), `IAdapterEventBuilder`\<`RawResponseOptions`, `IRawResponseWrapper`\<`unknown`\>\>\>

Defined in: core/dist/index.d.ts:2701

Create pipeline options for the Adapter.

#### Returns

`PipelineOptions`\<[`BrowserAdapterContext`](../../declarations/type-aliases/BrowserAdapterContext.md), `IAdapterEventBuilder`\<`RawResponseOptions`, `IRawResponseWrapper`\<`unknown`\>\>\>

The pipeline options for transforming the event.

#### Inherited from

`Adapter.makePipelineOptions`

***

### onInit()

> `protected` **onInit**(): `Promise`\<`void`\>

Defined in: [browser-adapter/src/BrowserAdapter.ts:96](https://github.com/stonemjs/browser-adapter/blob/4c992e1c0dfba4d1029b4789eb682027ed7245ee/src/BrowserAdapter.ts#L96)

Initializes the adapter and validates its execution context.

Ensures the adapter is running in a Browser environment. If not, it
throws an error to prevent misuse.

#### Returns

`Promise`\<`void`\>

#### Throws

If executed outside a Browser context (e.g., node).

#### Overrides

`Adapter.onInit`

***

### onPrepare()

> `protected` **onPrepare**(`eventHandler`): `Promise`\<`void`\>

Defined in: core/dist/index.d.ts:2668

Hook that runs before preparing the event context.

#### Parameters

##### eventHandler

`AdapterEventHandlerType`\<`IncomingBrowserEvent`, `OutgoingBrowserResponse`\>

Action handler to be run.

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Adapter.onPrepare`

***

### onTerminate()

> `protected` **onTerminate**(`eventHandler`, `context`): `Promise`\<`void`\>

Defined in: core/dist/index.d.ts:2688

Hook that runs after running the action handler.

#### Parameters

##### eventHandler

`AdapterEventHandlerType`\<`IncomingBrowserEvent`, `OutgoingBrowserResponse`\>

Action handler to be run.

##### context

[`BrowserAdapterContext`](../../declarations/type-aliases/BrowserAdapterContext.md)

The event context.

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Adapter.onTerminate`

***

### prepareResponse()

> `protected` **prepareResponse**(`eventHandler`, `context`): `Promise`\<`IAdapterEventBuilder`\<`RawResponseOptions`, `IRawResponseWrapper`\<`unknown`\>\>\>

Defined in: core/dist/index.d.ts:2716

Prepare the response for the event handler.

#### Parameters

##### eventHandler

`AdapterEventHandlerType`\<`IncomingBrowserEvent`, `OutgoingBrowserResponse`\>

The event handler to prepare the response for.

##### context

[`BrowserAdapterContext`](../../declarations/type-aliases/BrowserAdapterContext.md)

The event context.

#### Returns

`Promise`\<`IAdapterEventBuilder`\<`RawResponseOptions`, `IRawResponseWrapper`\<`unknown`\>\>\>

The raw response wrapper.

#### Inherited from

`Adapter.prepareResponse`

***

### resolveErrorHandler()

> `protected` **resolveErrorHandler**(`error`): `IAdapterErrorHandler`\<[`BrowserEvent`](../../declarations/type-aliases/BrowserEvent.md), `unknown`, `Window` & *typeof* `globalThis`\>

Defined in: core/dist/index.d.ts:2708

Get the error handler for the given error.

#### Parameters

##### error

`Error`

The error to get the handler for.

#### Returns

`IAdapterErrorHandler`\<[`BrowserEvent`](../../declarations/type-aliases/BrowserEvent.md), `unknown`, `Window` & *typeof* `globalThis`\>

The error handler.

#### Inherited from

`Adapter.resolveErrorHandler`

***

### run()

> **run**\<`ExecutionResultType`\>(): `Promise`\<`ExecutionResultType`\>

Defined in: [browser-adapter/src/BrowserAdapter.ts:71](https://github.com/stonemjs/browser-adapter/blob/4c992e1c0dfba4d1029b4789eb682027ed7245ee/src/BrowserAdapter.ts#L71)

Executes the adapter and provides an Browser-compatible handler function.

The `run` method initializes the adapter and listens for incoming Browser events.
It processes these events, generates a response, and sends it back to the Browser.

#### Type Parameters

• **ExecutionResultType** = `undefined`

#### Returns

`Promise`\<`ExecutionResultType`\>

#### Throws

If used outside the Browser environment.

#### Overrides

`Adapter.run`

***

### sendEventThroughDestination()

> `protected` **sendEventThroughDestination**(`eventHandler`, `context`): `Promise`\<`unknown`\>

Defined in: core/dist/index.d.ts:2658

Incoming message listener.

#### Parameters

##### eventHandler

`AdapterEventHandlerType`\<`IncomingBrowserEvent`, `OutgoingBrowserResponse`\>

##### context

[`BrowserAdapterContext`](../../declarations/type-aliases/BrowserAdapterContext.md)

The event context.

#### Returns

`Promise`\<`unknown`\>

Platform-specific output.

#### Inherited from

`Adapter.sendEventThroughDestination`

***

### create()

> `static` **create**(`options`): [`BrowserAdapter`](BrowserAdapter.md)

Defined in: [browser-adapter/src/BrowserAdapter.ts:59](https://github.com/stonemjs/browser-adapter/blob/4c992e1c0dfba4d1029b4789eb682027ed7245ee/src/BrowserAdapter.ts#L59)

Creates an instance of the `BrowserAdapter`.

This factory method allows developers to instantiate the adapter with
the necessary configuration options, ensuring it is correctly set up for
Browser usage.

#### Parameters

##### options

`AdapterOptions`\<`IncomingBrowserEvent`, `OutgoingBrowserResponse`\>

The configuration options for the adapter, including
                 handler resolver, error handling, and other settings.

#### Returns

[`BrowserAdapter`](BrowserAdapter.md)

A fully initialized `BrowserAdapter` instance.
