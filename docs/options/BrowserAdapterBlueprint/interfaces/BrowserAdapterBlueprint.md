[**Browser Adapter Documentation v0.0.2**](../../../README.md)

***

[Browser Adapter Documentation](../../../modules.md) / [options/BrowserAdapterBlueprint](../README.md) / BrowserAdapterBlueprint

# Interface: BrowserAdapterBlueprint

Defined in: [browser-adapter/src/options/BrowserAdapterBlueprint.ts:42](https://github.com/stonemjs/browser-adapter/blob/c3427cc529e8929bb73bcc39b402c0bfd995379e/src/options/BrowserAdapterBlueprint.ts#L42)

Blueprint interface for the Browser Adapter.

This interface extends `StoneBlueprint` and defines the structure of the
Browser adapter blueprint used in the Stone.js framework. It includes
a `stone` object with an array of `BrowserAdapterConfig` items.

## Extends

- `StoneBlueprint`

## Indexable

\[`key`: `string`\]: `unknown`

## Properties

### stone

> **stone**: [`BrowserAdapterConfig`](BrowserAdapterConfig.md)

Defined in: [browser-adapter/src/options/BrowserAdapterBlueprint.ts:43](https://github.com/stonemjs/browser-adapter/blob/c3427cc529e8929bb73bcc39b402c0bfd995379e/src/options/BrowserAdapterBlueprint.ts#L43)

Application-level settings, including environment, middleware, logging, and service registration.

#### Overrides

`StoneBlueprint.stone`
