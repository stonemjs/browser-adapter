import { BROWSER_PLATFORM } from '../constants'
import { browserAdapterResolver } from '../resolvers'
import { BrowserErrorHandler } from '../BrowserErrorHandler'
import { AdapterConfig, StoneBlueprint } from '@stone-js/core'
import { IncomingEventMiddleware } from '../middleware/IncomingEventMiddleware'

/**
 * Configuration interface for the Browser Adapter.
 *
 * Extends the `AdapterConfig` interface from the Stone.js framework and provides
 * customizable options specific to the Browser platform. This includes
 * alias, resolver, middleware, hooks, and various adapter state flags.
 */
export interface BrowserAdapterConfig extends AdapterConfig {
  /**
   * Browser-specific events that the adapter should listen for.
   */
  events: string[]
}

/**
 * Blueprint interface for the Browser Adapter.
 *
 * This interface extends `StoneBlueprint` and defines the structure of the
 * Browser adapter blueprint used in the Stone.js framework. It includes
 * a `stone` object with an array of `BrowserAdapterConfig` items.
 */
export interface BrowserAdapterBlueprint extends StoneBlueprint {
  stone: {
    adapters: BrowserAdapterConfig[]
  }
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
    adapters: [
      {
        platform: BROWSER_PLATFORM,
        resolver: browserAdapterResolver,
        middleware: [
          { priority: 0, pipe: IncomingEventMiddleware }
        ],
        hooks: {},
        events: ['popstate', '@stonejs/router.navigate'],
        errorHandlers: {
          default: BrowserErrorHandler
        },
        current: false,
        default: false
      }
    ]
  }
}
