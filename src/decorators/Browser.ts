import deepmerge from 'deepmerge'
import { addBlueprint, classDecoratorLegacyWrapper, ClassType } from '@stone-js/core'
import { browserAdapterBlueprint, BrowserAdapterAdapterConfig } from '../options/BrowserAdapterBlueprint'

/**
 * Configuration options for the `Browser` decorator.
 * These options extend the default Browser adapter configuration.
 */
export interface BrowserOptions extends Partial<BrowserAdapterAdapterConfig> {}

/**
 * A Stone.js decorator that integrates the Browser Adapter with a class.
 *
 * This decorator modifies the class to seamlessly enable Browser as the
 * execution environment for a Stone.js application. By applying this decorator,
 * the class is automatically configured with the necessary blueprint for Browser.
 *
 * @template T - The type of the class being decorated. Defaults to `ClassType`.
 * @param options - Optional configuration to customize the Browser Adapter.
 *
 * @returns A class decorator that applies the Browser adapter configuration.
 *
 * @example
 * ```typescript
 * import { Browser } from '@stone-js/browser-adapter';
 *
 * @Browser({
 *   alias: 'MyBrowser',
 * })
 * class App {
 *   // Your application logic here
 * }
 * ```
 */
export const Browser = <T extends ClassType = ClassType>(options: BrowserOptions = {}): ClassDecorator => {
  return classDecoratorLegacyWrapper<T>((target: T, context: ClassDecoratorContext<T>): undefined => {
    // Never mutate the shared, module-level default blueprint: doing so leaked options
    // between decorated classes and duplicated events/middleware on repeated use. Build a
    // fresh per-decoration copy instead.
    const defaultAdapter = browserAdapterBlueprint.stone?.adapters?.[0] ?? {}
    const mergedAdapter = deepmerge(defaultAdapter, options)
    const mergedBlueprint = {
      ...browserAdapterBlueprint,
      stone: {
        ...browserAdapterBlueprint.stone,
        adapters: [mergedAdapter]
      }
    }

    addBlueprint(target, context, mergedBlueprint)
  })
}
