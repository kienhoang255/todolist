import Tippy from "@tippyjs/react";
import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./ExpandPopUp.module.scss";
import "tippy.js/animations/scale.css";
import { actions, useStore } from "../../store";

const cx = classNames.bind(styles);

export default function ExpandPopUp({
  children,
  index,
  title,
  setOpenTippy,
  openTippy,
}) {
  const [rename, setRename] = useState(false);
  const [valueName, setValueName] = useState(title);
  const [state, dispatch] = useStore();

  const handleRemove = () => {
    dispatch(actions.removeCard(index));
    setOpenTippy(false);
  };

  const handleRename = () => {
    dispatch(actions.renameCard({ index: index, nameTitle: valueName }));
    setOpenTippy(false);
    setRename(!rename);
  };

  const handleFocus = (e) => e.target.select();
  return (
    <Tippy
      interactive={true}
      placement="bottom-start"
      visible={openTippy}
      onClickOutside={() => {
        setRename(false);
        setOpenTippy(false);
      }}
      content={
        <div className={cx("content")}>
          <span className={cx("header")}>Thao tác</span>
          <div className={cx("body")}>
            {rename ? (
              <>
                <input
                  type="text"
                  autoFocus
                  value={valueName}
                  onFocus={handleFocus}
                  onChange={(e) => {
                    setValueName(e.target.value);
                  }}
                />
                <button onClick={handleRename}>Xác nhận đổi tên</button>
              </>
            ) : (
              <button
                onClick={() => {
                  setRename(!rename);
                }}
              >
                Đổi tên
              </button>
            )}
            <button onClick={handleRemove}>Xóa</button>
          </div>
        </div>
      }
    >
      {children}
    </Tippy>
  );
}
