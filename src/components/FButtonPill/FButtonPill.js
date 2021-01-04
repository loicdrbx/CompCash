import React, { Component } from 'react';
import './FButtonPill.css';

class FButtonPill extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var tg = '';
    if (this.props.newTab === true) {
      tg = '_blank';
    }

    var buttonClass = 'button-pill';
    if (this.props.style === 'dark') {
      buttonClass = buttonClass + ' ' + 'button-pill-dark';
    } else if (this.props.style === 'light') {
      buttonClass = buttonClass + ' ' + 'button-pill-light';
    } else if (this.props.style === 'darkOnLight') {
      buttonClass = buttonClass + ' ' + 'button-pill-darkOnLight';
    } else if (this.props.style === 'green') {
      buttonClass = buttonClass + ' ' + 'button-pill-green';
    }

    return (
      <a href={this.props.href} target={tg}>
        <button
          className={buttonClass}
          id={this.props.id}
          type={this.props.type}
        >
          {this.props.value} <span className="button-pill-arrow">&gt;</span>
        </button>
      </a>
    );
  }
}

export default FButtonPill;
