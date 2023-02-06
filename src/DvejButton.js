import { html, LitElement } from 'lit';
import {style} from './styles.js';
import {bgColors} from './bg_colors.js'

export class DvejButton extends LitElement {

  static styles = [style, bgColors];

  static properties = {
    text: { type: String },
    color: { type: String },
    size: { type: String }
  };

  constructor() {
    super();
    this.text = 'default';
    this.color = 'bg-default';
    this.size = 'default';
  }

  render() {
    return html`
    <button class="${this.size}, ${this.color}">${this.text}</button>
    `;
  }
}
