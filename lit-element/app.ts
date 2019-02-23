import {
  LitElement,
  html,
  css,
  customElement,
  TemplateResult, property
} from 'lit-element';

@customElement('my-element')
export class MyElement extends LitElement {
  static styles: any = css`
      .btn {
        display: block;
        position: relative;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: linear-gradient(125deg, rgba(255,0,0,1) 0%, rgba(255,186,0,1) 100%);
      }

      .btn::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-45%, -50%);
        width: 32px;
        height: 32px;
        background-size: contain;
      }

      .btn[jump]::after {
        animation: jump 800ms ease-out;
      }

      @keyframes jump {
        0%, 100% {
          top: 50%;
        }

        50% {
          top: -10%;
        }
      }

      .voice {
        margin-bottom: 30px;
        font-size: 16px;
        line-height: 100%;
        font-weight: 700;
        opacity: 0;
        transition: opacity 100ms 300ms ease-out;
      }
      
      .voice[active] {
        opacity: 1;
      }
  `;

  @property({type : String}) animal: any = '';
  @property({type : Boolean})active: any = false
  @property({type : Boolean})jump = false

  constructor() {
    super();
  }

  handleClick(): void {
    this.active = true
    this.jump = true
  }

  handleAnimationEnd(): void {
    this.jump = false
  }

  handleTransitionEnd(): void {
    this.active = false
  }

  render(): TemplateResult {
    return html`
<style>
.btn::after {
    background: url(${this.animal}) no-repeat;
}
</style>
<div id="voice" ?active="${this.active}" class="voice" @transitionend="${this.handleTransitionEnd}">＼ニャー／</div>
      <a href="javascript:void(0)" id="house" ?jump="${this.jump}" class="btn" @click="${this.handleClick}" @animationend="${this.handleAnimationEnd}"></a>
    `;
  }
}
