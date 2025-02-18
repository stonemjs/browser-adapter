[**Browser Adapter Documentation v0.0.2**](../../../README.md)

***

[Browser Adapter Documentation](../../../modules.md) / [decorators/Browser](../README.md) / Browser

# Function: Browser()

> **Browser**\<`T`\>(`options`): `ClassDecorator`

Defined in: [browser-adapter/src/decorators/Browser.ts:35](https://github.com/stonemjs/browser-adapter/blob/c3427cc529e8929bb73bcc39b402c0bfd995379e/src/decorators/Browser.ts#L35)

A Stone.js decorator that integrates the Browser Adapter with a class.

This decorator modifies the class to seamlessly enable Browser as the
execution environment for a Stone.js application. By applying this decorator,
the class is automatically configured with the necessary blueprint for Browser.

## Type Parameters

• **T** *extends* `ClassType` = `ClassType`

The type of the class being decorated. Defaults to `ClassType`.

## Parameters

### options

[`BrowserOptions`](../interfaces/BrowserOptions.md) = `{}`

Optional configuration to customize the Browser Adapter.

## Returns

`ClassDecorator`

A class decorator that applies the Browser adapter configuration.

## Example

```typescript
import { Browser } from '@stone-js/browser-adapter';

@Browser({
  alias: 'MyBrowser',
})
class App {
  // Your application logic here
}
```
