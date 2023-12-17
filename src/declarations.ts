import { RawResponseWrapper } from './RawResponseWrapper'
import { OutgoingBrowserResponse } from './events/OutgoingBrowserResponse'
import { AdapterContext, IAdapterEventBuilder, RawResponseOptions } from '@stone-js/core'
import { IncomingBrowserEvent, IncomingBrowserEventOptions } from './events/IncomingBrowserEvent'

/**
 * Represents a generic Browser event as a key-value pair.
 */
export type BrowserEvent<T = unknown> = CustomEvent<T> | Event | PopStateEvent

/**
 * Represents a generic Browser response as a key-value pair.
 */
export type BrowserResponse = Record<string, unknown>

/**
 * Represents the Browser execution context as a key-value pair.
 */
export type BrowserContext = typeof window

/**
 * Represents the context for the Browser Adapter.
 *
 * This interface extends `AdapterContext` and includes additional properties
 * specific to generic Browser events.
 */
export type BrowserAdapterContext = AdapterContext<
BrowserEvent,
BrowserResponse,
BrowserContext,
IncomingBrowserEvent,
IncomingBrowserEventOptions,
OutgoingBrowserResponse
>

/**
 * Represents the response builder for the Browser Adapter.
 */
export type BrowserAdapterResponseBuilder = IAdapterEventBuilder<RawResponseOptions, RawResponseWrapper>

/**
 * Http method
 */
export type HttpMethod = 'GET'

/**
 * Represents a route.
 */
export interface IRoute {
  params: Record<string, unknown>
  getParam: <TReturn = unknown>(name: string, fallback?: TReturn) => TReturn | undefined
}

/**
 * Enum representing possible values for the `SameSite` attribute in cookies.
 */
export enum CookieSameSite {
  Lax = 'lax',
  None = 'none',
  Strict = 'strict',
}

/**
 * Options for configuring a cookie.
 */
export interface CookieOptions {
  path?: string
  expires?: Date
  domain?: string
  maxAge?: number
  secure?: boolean
  httpOnly?: boolean
  sameSite?: CookieSameSite
}
