import { BROWSER_PLATFORM } from '../constants'
import { browserAdapterResolver } from '../resolvers'
import { CookieOptions } from '@stone-js/browser-core'
import { BrowserErrorHandler } from '../BrowserErrorHandler'
import { adapterConfigMiddleware } from '../middleware/configMiddleware'
import { AdapterConfig, AppConfig, StoneBlueprint } from '@stone-js/core'
import { MetaIncomingEventMiddleware } from '../middleware/IncomingEventMiddleware'

/**
 * Configuration interface for the Browser Adapter.
 *
 * Extends the `AdapterConfig` interface from the Stone.js framework and provides
 * customizable options specific to the Browser platform. This includes
 * alias, resolver, middleware, hooks, and various adapter state flags.
 */
export interface BrowserAdapterAdapterConfig extends AdapterConfig {
  /**
   * Browser-specific events that the adapter should listen for.
   */
  events: string[]
}

/**
 * Represents the BrowserAdapterConfig configuration options for the application.
 */
export interface BrowserAdapterConfig extends Partial<AppConfig> {
  adapters: BrowserAdapterAdapterConfig[]
  browser: {
    cookie: {
      options: CookieOptions
    }
  }
}

/**
 * Blueprint interface for the Browser Adapter.
 *
 * This interface extends `StoneBlueprint` and defines the structure of the
 * Browser adapter blueprint used in the Stone.js framework. It includes
 * a `stone` object with an array of `BrowserAdapterConfig` items.
 */
export interface BrowserAdapterBlueprint extends StoneBlueprint {
  stone: BrowserAdapterConfig
}

/**
 * Default blueprint configuration for the Browser Adapter.
 *
 * This blueprint defines the initial configuration for the Browser adapter
 * within the Stone.js framework. It includes:
 * - An alias for the Browser platform (`BROWSER_PLATFORM`).
 * - A default resolver function (currently a placeholder).
 * - Middleware, hooks, and state flags (`current`, `default`, `preferred`).
 */
export const browserAdapterBlueprint: BrowserAdapterBlueprint = {
  stone: {
    builder: {
      middleware: adapterConfigMiddleware
    },
    browser: {
      cookie: {
        options: {}
      }
    },
    adapters: [
      {
        hooks: {},
        current: false,
        default: false,
        platform: BROWSER_PLATFORM,
        resolver: browserAdapterResolver,
        middleware: [
          MetaIncomingEventMiddleware
        ],
        events: ['popstate', '@stonejs/router.navigate'],
        errorHandlers: {
          default: { module: BrowserErrorHandler, isClass: true }
        }
      }
    ]
  }
}
