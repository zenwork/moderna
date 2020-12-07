import { customElement, html, LitElement, property } from 'lit-element'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { default as style }                          from './modern-card.css'

/**
 *  @element modern-card
 *
 *  @attr {string} badge - card badge. should be one character.
 *
 *  @slot header - short header or title
 *  @slot body - short description
 */
@customElement('modern-card')
export class ModernCard extends LitElement {

  @property() badge = '!'
  static styles = [style]

  protected render(): unknown {
    return html`
        <div class="card-badge"><span>${this.badge}</span></div>
        <slot name="header" class="card-heading">title</slot>
        <slot name="body" class="card-body">Some content goes here</slot>

    `
  }
}
