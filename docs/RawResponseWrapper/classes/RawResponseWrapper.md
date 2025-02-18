[**Browser Adapter Documentation v0.0.2**](../../README.md)

***

[Browser Adapter Documentation](../../modules.md) / [RawResponseWrapper](../README.md) / RawResponseWrapper

# Class: RawResponseWrapper

Defined in: [browser-adapter/src/RawResponseWrapper.ts:11](https://github.com/stonemjs/browser-adapter/blob/c3427cc529e8929bb73bcc39b402c0bfd995379e/src/RawResponseWrapper.ts#L11)

Wrapper for generic raw responses.

The `RawResponseWrapper` is responsible for encapsulating a raw response
and returning it in a structure that aligns with the Stone.js framework's requirements.
It implements the `IRawResponseWrapper` interface, ensuring compatibility with the framework.

## Implements

- `IRawResponseWrapper`\<[`BrowserResponse`](../../declarations/type-aliases/BrowserResponse.md)\>

## Methods

### respond()

> **respond**(): `Promise`\<`unknown`\>

Defined in: [browser-adapter/src/RawResponseWrapper.ts:61](https://github.com/stonemjs/browser-adapter/blob/c3427cc529e8929bb73bcc39b402c0bfd995379e/src/RawResponseWrapper.ts#L61)

Constructs and returns the raw response.

The `respond` method generates and returns the raw response based on
the provided options. The response is returned as-is, allowing for
maximum flexibility in defining its structure.

#### Returns

`Promise`\<`unknown`\>

A `RawResponse` object containing the response options.

#### Example

```typescript
const responseWrapper = RawResponseWrapper.create({ body: 'Hello, world!' });
const response = responseWrapper.respond();
console.log(response); // { body: 'Hello, world!' }
```

#### Implementation of

`IRawResponseWrapper.respond`

***

### create()

> `static` **create**(`options`): [`RawResponseWrapper`](RawResponseWrapper.md)

Defined in: [browser-adapter/src/RawResponseWrapper.ts:31](https://github.com/stonemjs/browser-adapter/blob/c3427cc529e8929bb73bcc39b402c0bfd995379e/src/RawResponseWrapper.ts#L31)

Factory method to create an instance of `RawResponseWrapper`.

This method initializes the wrapper with a set of partial response options.

#### Parameters

##### options

[`RawBrowserResponseOptions`](../../declarations/interfaces/RawBrowserResponseOptions.md)

Partial options to configure the raw response.

#### Returns

[`RawResponseWrapper`](RawResponseWrapper.md)

A new instance of `RawResponseWrapper`.

#### Example

```typescript
const responseWrapper = RawResponseWrapper.create({
  body: { message: 'Success' },
  statusCode: 200,
});

const response = responseWrapper.respond();
console.log(response); // { body: { message: 'Success' }, statusCode: 200 }
```
