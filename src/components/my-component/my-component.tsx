import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @Prop({ reflect: true }) fill?: 'outline';


  render() {
    const { fill } = this;
    console.log('Render fill prop:', fill)
    return <div>Fill Mode: {fill}</div>;
  }
}
