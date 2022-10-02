import React, { useContext, useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Tippy from "@tippyjs/react";
import { ListContext } from "../../App";
import { type } from "@testing-library/user-event/dist/type";

const cx = classNames.bind(styles);

export default function Header() {
  const time = new Date();
  let hour = time.getHours();
  let message =
    hour < 12 ? "Good Morning" : hour < 17 ? "Good Afternoon" : "Good Evening";

  const [titleCard, setTitleCard] = useState();

  const toDoList = {
    title: `${titleCard}`,
    task: [
      {
        title: "",
        status: "",
        description: "",
        warning: "",
      },
    ],
  };

  const [popUp, setPopUp] = useState(false);
  const [state, dispatch] = useContext(ListContext);
  const handleOnClick = (e) => {
    if (state !== null) {
      dispatch({ type: "addCard", data: toDoList });
    } else {
      dispatch({ type: "addFirst", data: toDoList });
    }
    setTitleCard("");
    setPopUp(!popUp);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleOnClick(e);
    }
  };

  return (
    <div className={cx("container")}>
      <div className={cx("content")}>
        <div>
          <Tippy
            onClickOutside={() => {
              setPopUp(!popUp);
            }}
            visible={popUp}
            interactive={true}
            placement="bottom-start"
            content={
              <div className={cx("tippy")}>
                <input
                  type="text"
                  className={cx("tippy-text")}
                  value={titleCard}
                  onChange={(e) => {
                    setTitleCard(e.target.value);
                  }}
                  placeholder="Title"
                  onKeyDown={handleKeyDown}
                />
                <button className={cx("tippy-btn")} onClick={handleOnClick}>
                  Tạo
                </button>
              </div>
            }
          >
            <button
              className={cx("btn-create")}
              onClick={() => {
                setPopUp(true);
              }}
            >
              Tạo mới
            </button>
          </Tippy>
        </div>
        <div>{message}</div>
        <span>Hi! Nhân</span>
      </div>
    </div>
  );
}
