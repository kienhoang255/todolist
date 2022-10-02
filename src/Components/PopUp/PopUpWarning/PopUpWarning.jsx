import Tippy from "@tippyjs/react";
import React from "react";
import classNames from "classnames/bind";
import styles from "./PopUpWarning.module.scss";

const cx = classNames.bind(styles);

export default function PopUpWarning({ children }) {
  return (
    <Tippy
      trigger="click"
      interactive={true}
      content={
        <div className={cx("content")}>
          <p className={cx("title")}>Chọn mức độ</p>
          <div className={cx("normal")}></div>
          <div className={cx("danger")}></div>
          <div className={cx("highlight")}></div>
        </div>
      }
    >
      {children}
    </Tippy>
  );
}
