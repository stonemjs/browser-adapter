[**Browser Adapter Documentation v0.0.2**](../../README.md)

***

[Browser Adapter Documentation](../../modules.md) / [declarations](../README.md) / RawBrowserResponseOptions

# Interface: RawBrowserResponseOptions

Defined in: [browser-adapter/src/declarations.ts:46](https://github.com/stonemjs/browser-adapter/blob/c3427cc529e8929bb73bcc39b402c0bfd995379e/src/declarations.ts#L46)

Represents options for configuring a raw browser response.

Extends the `RawResponseOptions` interface to include additional properties
for managing response rendering in the Browser.

## Extends

- `RawResponseOptions`

## Indexable

\[`k`: `string` \| `number` \| `symbol`\]: `unknown`

## Properties

### render()

> **render**: () => `Promiseable`\<`void`\>

Defined in: [browser-adapter/src/declarations.ts:50](https://github.com/stonemjs/browser-adapter/blob/c3427cc529e8929bb73bcc39b402c0bfd995379e/src/declarations.ts#L50)

The raw response object to send back to the Browser.

#### Returns

`Promiseable`\<`void`\>
