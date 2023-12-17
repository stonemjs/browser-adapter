import {
  IBlueprint,
  AdapterHooks,
  AdapterResolver,
  defaultKernelResolver,
  defaultLoggerResolver
} from '@stone-js/core'
import { BrowserAdapter } from './BrowserAdapter'

/**
 * Adapter resolver for generic Browser adapter.
 *
 * Creates and configures an `BrowserAdapter` for handling generic events in Browser.
 *
 * @param blueprint - The `IBlueprint` providing configuration and dependencies.
 * @returns An `BrowserAdapter` instance.
 */
export const browserAdapterResolver: AdapterResolver = (blueprint: IBlueprint) => {
  const hooks = blueprint.get<AdapterHooks>('stone.adapter.hooks', {})
  const loggerResolver = blueprint.get('stone.logger.resolver', defaultLoggerResolver)
  const handlerResolver = blueprint.get('stone.kernel.resolver', defaultKernelResolver)

  return BrowserAdapter.create({
    hooks,
    blueprint,
    handlerResolver,
    logger: loggerResolver(blueprint)
  })
}
