import { LitElement, html } from "lit";
import {customElement, property, state} from "lit/decorators";
import styles from "./styles";

@customElement("drop-down")
export class DropDown extends LitElement {
  @property({type: String}) "drop-down-title": string = "";  
  @state() isOpen: boolean = false;

  static styles = [styles];

  handleClick() {
    this.isOpen = !this.isOpen;
  }

  render() {
    return html`
      <button
        tabindex="0"
        role="button"
        aria-pressed="false"
        class="drop-down-container drop-down--${this.isOpen ? "max" : "min"}-height"
        @click="${this.handleClick}"
      >
        <div
          title="Open question/drop-down: ${this["drop-down-title"]}"
          class="
            drop-down-title
            drop-down-title--${this.isOpen ? "open" : "close"}
            ${this.isOpen ? "caret-rotate" : undefined}
          "
        >
          <svg part="icon" viewBox="0 0 24 24">
            <path fill="currentColor" d="M7,10L12,15L17,10H7Z" />
          </svg>
          <h4 part="title">${this["drop-down-title"]}</h4>
        </div>
        <slot></slot>
      </button>
    `
  }
}