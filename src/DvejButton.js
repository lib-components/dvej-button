import { html, LitElement } from 'lit';
import {buttonStyle} from './button_styles.js';
import {bgColors} from './bg_colors.js'

export class DvejButton extends LitElement {

  static styles = [buttonStyle, bgColors];

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

    switch (this.size) {
      case "small":
        this.size = "padding:5px, 10px; font-size:.8rem;";
        break;
      case "big":
        this.size = "padding:15px, 15px; font-size:1.3rem;";
        break;
      default:
        this.size = "";
        break;
    }
    
    return html`
    <button @click=${this._onClick} class="${this.color}" style='${this.size}'>${this.text}</button>
    `;
  }

}