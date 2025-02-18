[**Browser Adapter Documentation v0.0.2**](../../README.md)

***

[Browser Adapter Documentation](../../modules.md) / [BrowserErrorHandler](../README.md) / BrowserErrorHandler

# Class: BrowserErrorHandler

Defined in: [browser-adapter/src/BrowserErrorHandler.ts:14](https://github.com/stonemjs/browser-adapter/blob/c3427cc529e8929bb73bcc39b402c0bfd995379e/src/BrowserErrorHandler.ts#L14)

Class representing an BrowserErrorHandler.

## Implements

- `IAdapterErrorHandler`\<[`BrowserEvent`](../../declarations/type-aliases/BrowserEvent.md), [`BrowserResponse`](../../declarations/type-aliases/BrowserResponse.md), [`BrowserContext`](../../declarations/type-aliases/BrowserContext.md)\>

## Constructors

### new BrowserErrorHandler()

> **new BrowserErrorHandler**(`options`): [`BrowserErrorHandler`](BrowserErrorHandler.md)

Defined in: [browser-adapter/src/BrowserErrorHandler.ts:22](https://github.com/stonemjs/browser-adapter/blob/c3427cc529e8929bb73bcc39b402c0bfd995379e/src/BrowserErrorHandler.ts#L22)

Create an BrowserErrorHandler.

#### Parameters

##### options

[`BrowserErrorHandlerOptions`](../interfaces/BrowserErrorHandlerOptions.md)

BrowserErrorHandler options.

#### Returns

[`BrowserErrorHandler`](BrowserErrorHandler.md)

## Methods

### handle()

> **handle**(`error`, `context`): `Promise`\<`unknown`\>

Defined in: [browser-adapter/src/BrowserErrorHandler.ts:37](https://github.com/stonemjs/browser-adapter/blob/c3427cc529e8929bb73bcc39b402c0bfd995379e/src/BrowserErrorHandler.ts#L37)

Handle an error.

#### Parameters

##### error

`Error`

The error to handle.

##### context

`AdapterErrorContext`\<[`BrowserEvent`](../../declarations/type-aliases/BrowserEvent.md), `unknown`, `Window` & *typeof* `globalThis`\>

The context of the adapter.

#### Returns

`Promise`\<`unknown`\>

The raw response.

#### Implementation of

`IAdapterErrorHandler.handle`
