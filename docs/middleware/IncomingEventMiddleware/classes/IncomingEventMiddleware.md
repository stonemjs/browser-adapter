[**Browser Adapter Documentation v0.0.2**](../../../README.md)

***

[Browser Adapter Documentation](../../../modules.md) / [middleware/IncomingEventMiddleware](../README.md) / IncomingEventMiddleware

# Class: IncomingEventMiddleware

Defined in: [browser-adapter/src/middleware/IncomingEventMiddleware.ts:14](https://github.com/stonemjs/browser-adapter/blob/4c992e1c0dfba4d1029b4789eb682027ed7245ee/src/middleware/IncomingEventMiddleware.ts#L14)

Middleware for handling incoming events and transforming them into Stone.js events.

This class processes incoming HTTP requests, extracting relevant data such as URL, IP addresses,
headers, cookies, and more, and forwards them to the next middleware in the pipeline.

## Constructors

### new IncomingEventMiddleware()

> **new IncomingEventMiddleware**(`options`): [`IncomingEventMiddleware`](IncomingEventMiddleware.md)

Defined in: [browser-adapter/src/middleware/IncomingEventMiddleware.ts:25](https://github.com/stonemjs/browser-adapter/blob/4c992e1c0dfba4d1029b4789eb682027ed7245ee/src/middleware/IncomingEventMiddleware.ts#L25)

Create an IncomingEventMiddleware instance.

#### Parameters

##### options

Options containing the blueprint for resolving configuration and dependencies.

###### blueprint

`IBlueprint`

#### Returns

[`IncomingEventMiddleware`](IncomingEventMiddleware.md)

## Methods

### handle()

> **handle**(`context`, `next`): `Promise`\<[`BrowserAdapterResponseBuilder`](../../../declarations/type-aliases/BrowserAdapterResponseBuilder.md)\>

Defined in: [browser-adapter/src/middleware/IncomingEventMiddleware.ts:37](https://github.com/stonemjs/browser-adapter/blob/4c992e1c0dfba4d1029b4789eb682027ed7245ee/src/middleware/IncomingEventMiddleware.ts#L37)

Handles the incoming event, processes it, and invokes the next middleware in the pipeline.

#### Parameters

##### context

[`BrowserAdapterContext`](../../../declarations/type-aliases/BrowserAdapterContext.md)

The adapter context containing the raw event, execution context, and other data.

##### next

`NextPipe`\<[`BrowserAdapterContext`](../../../declarations/type-aliases/BrowserAdapterContext.md), [`BrowserAdapterResponseBuilder`](../../../declarations/type-aliases/BrowserAdapterResponseBuilder.md)\>

The next middleware to be invoked in the pipeline.

#### Returns

`Promise`\<[`BrowserAdapterResponseBuilder`](../../../declarations/type-aliases/BrowserAdapterResponseBuilder.md)\>

A promise that resolves to the processed context.

#### Throws

If required components are missing in the context.
