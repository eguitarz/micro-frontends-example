import ReactDOM from 'react-dom';
import React from 'react';

class BlackBox extends HTMLElement {
  constructor() {
    super();
    console.log('init')
  }
  connectedCallback() {
    console.log('called', this.getAttributeNames(), this.childNodes)
    const mount = document.createElement('div');
    this.attachShadow({ mode: 'open' }).appendChild(mount);
    ReactDOM.render(<div>42 {this.childNodes[0].data} {this.getAttribute('name')}</div>, mount);
  }
}

customElements.define('black-box', BlackBox);