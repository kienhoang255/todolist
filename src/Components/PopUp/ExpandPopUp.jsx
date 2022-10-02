import Tippy from "@tippyjs/react";
import React, { useContext, useState } from "react";
import classNames from "classnames/bind";
import styles from "./ExpandPopUp.module.scss";
import "tippy.js/animations/scale.css";
import { storeContext } from "../../store";

const cx = classNames.bind(styles);

export default function ExpandPopUp({ children, index, title }) {
  const [rename, setRename] = useState(false);
  const [valueName, setValueName] = useState(title);
  const [state, dispatch] = useContext(storeContext);
  const handleClear = () => {
    state.splice(index, 1);
    dispatch({ type: "delCard", data: state });
  };

  const handleRename = () => {
    state[index].title = valueName;
    dispatch({ type: "renameCard", data: state });
    setRename(!rename);
  };

  const handleFocus = (e) => e.target.select();
  return (
    <Tippy
      interactive={true}
      placement="bottom-start"
      trigger="click"
      onClickOutside={() => {
        setRename(false);
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
            <button onClick={handleClear}>Xóa</button>
          </div>
        </div>
      }
    >
      {children}
    </Tippy>
  );
}
