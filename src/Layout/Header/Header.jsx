import React from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

export default function Header() {
  return (
    <div className={cx("container")}>
      <div className={cx("content")}>
        <button>Tạo mới</button>
        <span>Hi! Nhân</span>
      </div>
    </div>
  );
}
