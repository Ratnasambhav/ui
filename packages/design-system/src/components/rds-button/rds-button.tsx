import { Component, h } from '@stencil/core';

@Component({
  tag: 'rds-button',
  shadow: true,
  styleUrl: 'rds-button.css',
})
export class RdsButton {
  render() {
    return (
      <button class="rounded px-2 py-1">
        <slot></slot>
      </button>
    );
  }
}
