import Tippy from "@tippyjs/react";
import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./ExpandPopUp.module.scss";
import "tippy.js/animations/scale.css";

const cx = classNames.bind(styles);

export default function ExpandPopUp({ children }) {
  return (
    <Tippy
      interactive={true}
      placement="bottom-start"
      trigger="click"
      content={
        <div className={cx("content")}>
          <span className={cx("header")}>Thao tác</span>
          <div className={cx("body")}>
            <button>Đổi tên</button>
            <button>Xóa</button>
          </div>
        </div>
      }
    >
      {children}
    </Tippy>
  );
}
