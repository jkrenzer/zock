import { css } from 'lit-element';

export const base = css`
  :host {
      --mdc-theme-primary: GoldenRod;
      --mdc-theme-on-primary: DarkOliveGreen;
      --mdc-button-disabled-fill-color: darkseagreen;
      --mdc-button-disabled-ink-color: aliceblue;
      --primary-background-color: #111111;
      --secondary-background-color: #202020;
      --primary-text-color: #e1e1e1;
      --secondary-text-color: #9b9b9b;
  }

  :host h1 {
    font-family: 'sans-serif';
  }
  `;
