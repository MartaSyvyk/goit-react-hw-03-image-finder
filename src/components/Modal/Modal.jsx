import css from '../../styles.module.css';
import { createPortal } from 'react-dom';
import React from 'react';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends React.Component {
componentDidMount() {

    window.addEventListener('keydown', this.handleClose )
}

componentWillUnmount() {
    window.removeEventListener('keydown', this.handleClose)
}

handleClose = event => {
        if (event.code === 'Escape' || event.target === event.currentTarget) {
            this.props.onClose();
        }
    }
  render() {
    return createPortal(
      <div className={css.Overlay} onClick={this.handleClose}>
        <div className={css.Modal}>
          <img src={this.props.url} alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}
