import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Tippy from "@tippyjs/react";
import { actions, useStore } from "../../store";
import { Button } from "react-bootstrap";

const cx = classNames.bind(styles);

export default function Header() {
  const [titleCard, setTitleCard] = useState("");

  const toDoList = {
    title_card: `${titleCard}`,
    task: [],
  };

  const [popUp, setPopUp] = useState(false);
  const [state, dispatch] = useStore();

  const handleOnClick = (e) => {
    dispatch(actions.addCard(toDoList));
    setTitleCard("");
    setPopUp(!popUp);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleOnClick(e);
    }
  };

  const handleExport = () => {
    const element = document.createElement("a");
    const file = new Blob([JSON.stringify(state)], {
      type: "text/plain;charset=utf-8",
    });

    element.href = URL.createObjectURL(file);
    element.download = "NewTodolist.txt";
    document.body.appendChild(element);
    element.click();
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
            <Button
              className={cx("btn-create")}
              onClick={() => {
                setPopUp(true);
              }}
            >
              Tạo mới
            </Button>
          </Tippy>
        </div>
        <div className="ms-2 ">
          <Button onClick={handleExport} className={cx("btn-create")}>
            Xuất file Text
          </Button>
        </div>
      </div>
    </div>
  );
}
