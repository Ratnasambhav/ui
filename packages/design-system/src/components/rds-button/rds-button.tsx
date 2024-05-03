import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core';

@Component({
  shadow: true,
  tag: 'rds-button',
  styleUrl: 'rds-button.css',
})
export class RdsButton {
  @Prop() loading: boolean = false;
  @Prop() disabled: boolean = false;
  @Prop() rounded: 'none' | 'sm' | 'md' | 'lg' | 'full';
  @Prop() variant: 'primary' | 'secondary' | 'ghost' = 'primary';

  @Event({
    eventName: 'clicked',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  clicked: EventEmitter;

  clickedHandler = () => this.clicked.emit();

  render() {
    return (
      <Host tabIndex={0} role="button">
        <button
          disabled={this.disabled}
          onClick={this.clickedHandler}
          class={{
            '--loading': this.loading,
            '--disabled': this.disabled,
            [`--${this.variant}`]: true,
            '--rounded': !Boolean(this.rounded),
            [`--rounded-${this.rounded}`]: Boolean(this.rounded),
          }}
        >
          <div part="inner">
            <slot name="item-start"></slot>
            <slot></slot>
            <slot name="item-end"></slot>
          </div>
        </button>
      </Host>
    );
  }
}
