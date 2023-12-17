import { BROWSER_PLATFORM } from '../constants.mjs'
import { BrowserAdapter } from '@stone-js/browser-adapter'

/**
 * Browser adapter options.
 *
 * @returns {Object}
*/
export const browserAdapterOptions = {
  // Adapters namespace
  adapters: [{
    // App namespace
    app: {

      // Adapter options to be merged with global adapter options.
      adapter: {

        // Here you can define your adapter alias name
        alias: BROWSER_PLATFORM,

        // Here you can define your default adapter
        default: false,

        // Adapter class constructor.
        type: BrowserAdapter,

        // Dom event to listen to.
        // Only in browser
        events: [],

        // Use this to get the target selector where the eventlistener will be attached.
        // Only in browser
        targetSelector: []
      },

      // Adapter mapper options.
      mapper: {

        // Input mapper options.
        // Use this mapper for incomming platform event.
        input: {

          // Mapper class constructor.
          type: null,

          // Input mapper resolve
          resolver: null,

          // Input mapper middleware. Can be class constructor or alias.
          // Middleware must be registered before using it in the app middleware array.
          middleware: []
        },

        // Output mapper options.
        // Use this mapper for outgoing app response.
        output: {

          // Mapper class constructor.
          type: null,

          // Output mapper resolve
          resolver: null,

          // Output mapper middleware. Can be class constructor or alias.
          // Middleware must be registered before using it in the app middleware array.
          middleware: []
        }
      }
    }
  }]
}
