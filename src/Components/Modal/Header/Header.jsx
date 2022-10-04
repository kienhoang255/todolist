import React, { useState } from "react";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";

import { BsPencil } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { MdSubtitles } from "react-icons/md";

const cx = classNames.bind(styles);

export default function Header({
  toggleModal,
  openTitle,
  isOpen,
  propagation,
  value,
  cardTitle,
  title,
  setNewTitle,
}) {
  const handleOnClick = (e) => {
    isOpen = true;
    openTitle(true);
    propagation(e);
  };

  return (
    <div className={cx("header")}>
      <div className={cx("header-title")} onClick={handleOnClick}>
        <div className={cx("title-main")}>
          <span className={cx("icon")}>
            <MdSubtitles />
          </span>
          <div className={cx("content-title")}>
            {isOpen ? (
              <input
                type="text"
                className={cx("text")}
                autoFocus
                value={title}
                onFocus={(e) => e.target.select()}
                onChange={(e) => setNewTitle(e.target.value)}
              ></input>
            ) : (
              <div className={cx("title")}>
                {title ? title : value.title}
                <BsPencil style={{ margin: "0px 10px" }} />
              </div>
            )}
            <div className={cx("title-sub")}>
              from <a href="#">{cardTitle}</a>
            </div>
          </div>
        </div>
      </div>
      <span className={cx("header-close-btn")} onClick={toggleModal}>
        <AiOutlineClose />
      </span>
    </div>
  );
}
