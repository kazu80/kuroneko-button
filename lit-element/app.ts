import {
  LitElement,
  html,
  customElement,
  property,
  TemplateResult
} from 'lit-element';

@customElement('my-element')
export class MyElement extends LitElement {
  @property()
  foo: string;

  constructor() {
    super();
    this.foo = 'foo';
  }

  render(): TemplateResult {
    return html`
      <p>${this.foo}</p>
    `;
  }
}
