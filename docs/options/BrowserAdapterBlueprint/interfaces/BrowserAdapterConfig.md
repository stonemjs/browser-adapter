[**Browser Adapter Documentation v0.0.2**](../../../README.md)

***

[Browser Adapter Documentation](../../../modules.md) / [options/BrowserAdapterBlueprint](../README.md) / BrowserAdapterConfig

# Interface: BrowserAdapterConfig

Defined in: [browser-adapter/src/options/BrowserAdapterBlueprint.ts:26](https://github.com/stonemjs/browser-adapter/blob/4c992e1c0dfba4d1029b4789eb682027ed7245ee/src/options/BrowserAdapterBlueprint.ts#L26)

Represents the BrowserAdapterConfig configuration options for the application.

## Extends

- `Partial`\<`AppConfig`\>

## Properties

### adapter?

> `optional` **adapter**: `Partial`\<`AdapterConfig`\>

Defined in: core/dist/index.d.ts:500

Current Adapter configurations for the application.
This key allow you to specify the current adapter with the alias key.

#### Inherited from

`Partial.adapter`

***

### adapters

> **adapters**: [`BrowserAdapterAdapterConfig`](BrowserAdapterAdapterConfig.md)[]

Defined in: [browser-adapter/src/options/BrowserAdapterBlueprint.ts:27](https://github.com/stonemjs/browser-adapter/blob/4c992e1c0dfba4d1029b4789eb682027ed7245ee/src/options/BrowserAdapterBlueprint.ts#L27)

Adapter configurations for the application.

#### Overrides

`Partial.adapters`

***

### aliases?

> `optional` **aliases**: `Record`\<`string`, `any`\>

Defined in: core/dist/index.d.ts:535

Class aliases to be registered when the application starts.
These aliases provide shorthand references to commonly used classes.

#### Inherited from

`Partial.aliases`

***

### application?

> `optional` **application**: `MetaApplication`

Defined in: core/dist/index.d.ts:552

The main application entry point module in declarative context.
It is the class decorated with the @StoneApp() decorator.
Note: It does not exist in imperative context.

#### Inherited from

`Partial.application`

***

### browser

> **browser**: `object`

Defined in: [browser-adapter/src/options/BrowserAdapterBlueprint.ts:28](https://github.com/stonemjs/browser-adapter/blob/4c992e1c0dfba4d1029b4789eb682027ed7245ee/src/options/BrowserAdapterBlueprint.ts#L28)

#### cookie

> **cookie**: `object`

##### cookie.options

> **options**: `CookieOptions`

***

### builder?

> `optional` **builder**: `BuilderConfig`

Defined in: core/dist/index.d.ts:495

Configuration options for building the application, including middleware and pipe priorities.

#### Inherited from

`Partial.builder`

***

### debug?

> `optional` **debug**: `boolean`

Defined in: core/dist/index.d.ts:479

Determines if the application is in debug mode.
When enabled, detailed error messages with stack traces will be shown.

#### Inherited from

`Partial.debug`

***

### env?

> `optional` **env**: `Environment`

Defined in: core/dist/index.d.ts:474

The current environment in which the application is running.
Possible values are development, production, and test.

#### Inherited from

`Partial.env`

***

### fallback\_locale?

> `optional` **fallback\_locale**: `string`

Defined in: core/dist/index.d.ts:491

The fallback locale used when a translation for the default locale is unavailable.

#### Inherited from

`Partial.fallback_locale`

***

### handler?

> `optional` **handler**: `MixedEventHandler`\<`IncomingEvent`, `OutgoingResponse`\>

Defined in: core/dist/index.d.ts:546

The main handler function for the application.
This is the main function that handles incoming requests.
Every Stone.js application must have an handler function.

#### Inherited from

`Partial.handler`

***

### kernel?

> `optional` **kernel**: `KernelConfig`

Defined in: core/dist/index.d.ts:508

Global middleware settings for the application kernel.

#### Inherited from

`Partial.kernel`

***

### listeners?

> `optional` **listeners**: `MetaEventListener`[]

Defined in: core/dist/index.d.ts:521

Event listeners to be automatically registered when the application starts.
This allows you to specify functions to listen for specific events.

#### Inherited from

`Partial.listeners`

***

### liveConfigurations?

> `optional` **liveConfigurations**: `MixedConfiguration`\<`any`\>[]

Defined in: core/dist/index.d.ts:558

Live configurations are loaded at each request.
By default, configurations are loaded once when the application starts.
This is useful for defining dynamic configurations that do not require a restart to apply changes.

#### Inherited from

`Partial.liveConfigurations`

***

### locale?

> `optional` **locale**: `string`

Defined in: core/dist/index.d.ts:487

The default locale for the application.

#### Inherited from

`Partial.locale`

***

### logger?

> `optional` **logger**: `LoggerConfig`

Defined in: core/dist/index.d.ts:512

Logging settings, including the logger instance and error reporting configurations.

#### Inherited from

`Partial.logger`

***

### name?

> `optional` **name**: `string`

Defined in: core/dist/index.d.ts:469

The name of the application.

#### Inherited from

`Partial.name`

***

### providers?

> `optional` **providers**: `MixedServiceProvider`\<`IncomingEvent`, `OutgoingResponse`\>[]

Defined in: core/dist/index.d.ts:530

Service providers to be automatically loaded for each request to the application.

#### Inherited from

`Partial.providers`

***

### secret?

> `optional` **secret**: `string`

Defined in: core/dist/index.d.ts:540

A secret key used for encryption purposes throughout the application.
This key should be kept secure.

#### Inherited from

`Partial.secret`

***

### services?

> `optional` **services**: `MetaService`[]

Defined in: core/dist/index.d.ts:516

Services to be automatically registered when the application starts.

#### Inherited from

`Partial.services`

***

### subscribers?

> `optional` **subscribers**: `MixedEventSubscriber`[]

Defined in: core/dist/index.d.ts:526

Subscribers to be automatically registered when the application starts.
Subscribers are used for handling and responding to events.

#### Inherited from

`Partial.subscribers`

***

### timezone?

> `optional` **timezone**: `string`

Defined in: core/dist/index.d.ts:483

The default timezone for the application.

#### Inherited from

`Partial.timezone`
