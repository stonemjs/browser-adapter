import { serialize } from 'cookie'
import { CookieOptions } from '../declarations'

/**
 * Class representing a Cookie.
 */
export class Cookie {
  readonly name: string
  readonly value: unknown
  readonly options: CookieOptions

  /**
   * Create a Cookie.
   * @param name - Cookie name.
   * @param value - Cookie value.
   * @param options - Cookie options.
   */
  static create (name: string, value: unknown, options: CookieOptions = {}): Cookie {
    return new this(name, value, options)
  }

  /**
   * @param name - Cookie name.
   * @param value - Cookie value.
   * @param options - Cookie options.
   */
  protected constructor (name: string, value: unknown, options: CookieOptions = {}) {
    this.name = name
    this.options = options
    this.value = !this.isValueSerialized(value) ? value : JSON.parse(value.replace('$$j$$:', ''))
  }

  /**
   * Set expiration date for the cookie.
   * @param value - Expiration date.
   */
  setExpires (value: Date): this {
    this.options.expires = value
    return this
  }

  /**
   * Set secure flag for the cookie.
   * @param value - Whether the cookie is secure.
   */
  setSecure (value: boolean): this {
    this.options.secure = value
    return this
  }

  /**
   * Serialize the cookie value.
   */
  serialize (): string {
    let value = this.value

    if (!this.isValueSerialized(value)) {
      value = typeof value === 'object' ? `$$j$$:${JSON.stringify(value)}` : String(value)
    }

    return serialize(this.name, String(value), this.options)
  }

  /**
   * Clone the cookie with new name, value, and options.
   * @param value - New cookie value.
   * @param options - New cookie options.
   * @returns A new cookie instance.
   */
  cloneWith (value: unknown, options: CookieOptions = {}): Cookie {
    return new Cookie(this.name, value, { ...this.options, ...options })
  }

  /**
   * Check if the value is serialized.
   * @param value - The value to check.
   */
  private isValueSerialized (value: unknown): value is string {
    return typeof value === 'string' && value.startsWith('$$j$$:')
  }
}
