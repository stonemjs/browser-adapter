import { BROWSER_PLATFORM } from '../constants.mjs'
import { classLevelDecoratorChecker, merge } from '@stone-js/common'
import { browserAdapterOptions } from '@stone-js/browser-adapter/config'

/**
 * Interface for representing a Middleware.
 *
 * @typedef  Middlewareable
 * @property {Function} handle - Will be invoked by the pipeline.
 */

/**
 * Decorators, Useful for decorating classes.
 *
 * @author Mr. Stone <evensstone@gmail.com>
 *
 * @namespace Decorators
 */

/**
 * Browser options.
 *
 * @typedef  {Object} adapterOptions
 * @property {string} [alias]
 * @property {boolean} [default]
 * @property {Object} [middleware]
 * @property {string} [targetSelector]
 * @property {(Object[]|string[])} [events]
 * @property {(Middlewareable[]|string[])} [middleware.input]
 * @property {(Middlewareable[]|string[])} [middleware.output]
 */

/**
 * Browser adapter Decorator: Useful for customizing classes to ensure applications run smoothly on specific platforms.
 *
 * @author Mr. Stone <evensstone@gmail.com>
 *
 * @memberOf Decorators
 * @param  {adapterOptions} [options]
 * @return {Function}
 */
export const BrowserAdapter = (options = {}) => {
  return (target) => {
    classLevelDecoratorChecker(target)

    const metadata = {
      adapters: [
        merge(browserAdapterOptions.adapters[0], {
          app: {
            adapter: {
              default: options.default ?? false,
              events: options.events ?? [],
              targetSelector: options.targetSelector,
              alias: options.alias ?? BROWSER_PLATFORM
            },
            mapper: {
              input: {
                middleware: options.middleware?.input ?? []
              },
              output: {
                middleware: options.middleware?.output ?? []
              }
            }
          }
        })
      ]
    }

    target.$$metadata$$ = merge(target.$$metadata$$ ?? {}, metadata)

    return target
  }
}
