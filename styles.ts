import { css } from "lit";

export default css`
  :host {
    --main-color: black;
    --close-height: 60px;
    --open-height: 100000px;
    --close-border: 2px solid transparent;
    --open-border: 2px solid var(--main-color);
    --svg-dimensions: 36px;

    display: block;
    border: 2px solid black;
    overflow: hidden;
  }

  :host .drop-down-container {
    display: block;
    background-color: transparent;
    width: 100%;
    color: var(--main-color);
    text-align: left;
    border: none;
    overflow: hidden;
    cursor: pointer;
  }

  .drop-down--max-height {
    max-height: var(--open-height);
    transition: max-height 1.3s ease-in-out;
  }

  .drop-down--min-height {
    max-height: var(--close-height);
    transition: max-height .5s cubic-bezier(0, 1, 0, 1);
  }

  :host .drop-down-title {
    height: 40px;
    padding: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: border-bottom .3s linear;
  }

  .drop-down-title svg {
    min-width: var(--svg-dimensions);
    min-height: var(--svg-dimensions);
    width: var(--svg-dimensions);
    height: var(--svg-dimensions);
    margin-right: 16px;
    transform: rotate(-90deg);
    transition: transform .2s linear;
  }

  .caret-rotate svg {
    transform: rotate(0deg);
  }

  .drop-down-title--close {
    border-bottom: var(--close-border);
  }

  .drop-down-title--open {
    border-bottom: var(--open-border);
  }

  :host .drop-down-title h4 {
    font-weight: 700;
    font-size: 24px;
    margin: 0;
    min-width: calc(100% - 48px);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`