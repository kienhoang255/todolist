import React from "react";
import ReactDOM from "react-dom";
import classNames from "classnames/bind";
import styles from "./Modal.module.scss";

const cx = classNames.bind(styles);

export default function Modal({ isShowModal, hideModal, title }) {
  const handlePropagation = (e) => {
    e.stopPropagation();
  };
  return isShowModal
    ? ReactDOM.createPortal(
        <>
          <div className={cx("container")} onMouseDown={hideModal}>
            <div className={cx("content")} onMouseDown={handlePropagation}>
              {title}
            </div>
            <div></div>
          </div>
        </>,
        document.body
      )
    : null;
}
