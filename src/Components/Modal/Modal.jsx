import React, { useContext, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Modal.module.scss";
import { BsPencil } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { CgDetailsMore } from "react-icons/cg";
import { ListContext } from "../../App";
import { MdSubtitles } from "react-icons/md";
import PopUpWarning from "../PopUp/PopUpWarning/PopUpWarning";

const cx = classNames.bind(styles);

export default function Modal({ children, setOpen, value, parentValue }) {
  const [changeTitle, setChangeTitle] = useState(false);
  const [changeDescription, setChangeDescription] = useState(false);
  const [newTitle, setNewTitle] = useState(value.title);
  const [newDescription, setNewDescription] = useState(value.description);
  const [state, dispatch] = useContext(ListContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleStopPropagation = (e) => {
    e.stopPropagation();
  };
  const find = state
    .filter(
      (e) => e.title === parentValue.title && e.task === parentValue.task
    )[0]
    .task.filter((e) => e.title === value.title)[0];
  function toggleModal() {
    handleDefault();
    setIsOpen(!isOpen);

    console.log(value);
    console.log(find);
    // find.title = newTitle;
    if (find !== value) {
      dispatch({ type: "doAll", data: state });
      console.log("change");
    }
  }

  const handleDefault = () => {
    if (changeTitle === true || changeDescription === true) {
      setChangeTitle(false);
      setChangeDescription(false);
      value.title = newTitle;
      value.description = newDescription;
    }
  };

  const handleOnEnter = (e) => {
    if (e.key === "Enter") handleDefault(e);
  };

  const btnCancelModal = () => {
    console.log(find);
  };
  const btnConfirmModal = () => {
    toggleModal();
  };
  const btnCancelDescription = () => {
    setChangeDescription(true);
    setNewDescription(value.description);
  };
  const btnConfirmDescription = () => {
    setChangeDescription(false);
  };
  return (
    <>
      {children && <div onClick={toggleModal}>{children}</div>}
      {isOpen && (
        <div className={cx("container")} onMouseDown={toggleModal}>
          <div
            className={cx("content")}
            onMouseDown={handleStopPropagation}
            onClick={handleDefault}
          >
            <div className={cx("header")}>
              <div
                className={cx("header-title")}
                onClick={(e) => {
                  setChangeTitle(true);
                  handleStopPropagation(e);
                }}
              >
                {changeTitle ? (
                  <input
                    type="text"
                    className={cx("header-text")}
                    autoFocus
                    value={newTitle}
                    onFocus={(e) => e.target.select()}
                    onKeyDown={handleOnEnter}
                    onChange={(e) => {
                      setNewTitle(e.target.value);
                    }}
                  />
                ) : (
                  <div className={cx("title")}>
                    <div className={cx("title-main")}>
                      <MdSubtitles />
                      {value.title}
                    </div>
                    <span className={cx("title-sub")}>
                      trong danh sách <a href="#">{parentValue.title}</a>
                    </span>
                  </div>
                )}
                <div className={cx("pencil-btn")}>
                  <BsPencil />
                </div>
              </div>
              <span className={cx("header-btn")} onClick={toggleModal}>
                <AiOutlineClose />
              </span>
            </div>

            <div className={cx("body")}>
              <div
                className={cx("body-content")}
                onClick={(e) => {
                  setChangeDescription(true);
                  handleStopPropagation(e);
                }}
              >
                <div className={cx("body-description-icon")}>
                  <CgDetailsMore />
                  Mô tả
                </div>
                {changeDescription ? (
                  <>
                    <textarea
                      value={newDescription}
                      autoFocus
                      onFocus={(e) => e.target.select()}
                      onChange={(e) => {
                        setNewDescription(e.target.value);
                      }}
                      className={cx("body-description-text")}
                    ></textarea>
                    <div className={cx("body-description-action")}>
                      <button onClick={btnConfirmDescription}>Lưu</button>
                      <button onClick={btnCancelDescription}>Hủy</button>
                    </div>
                  </>
                ) : (
                  <div className={cx("body-description-detail")}>
                    {value.description}
                  </div>
                )}
              </div>
              <div className={cx("body-sidebar")}>
                <div className={cx("select-warning")}>
                  <PopUpWarning>
                    <div>Nhãn :</div>
                  </PopUpWarning>
                </div>
              </div>
            </div>
            <div className={cx("footer")}>
              <button className={cx("footer-cancel")} onClick={btnCancelModal}>
                Hủy
              </button>
              <button className={cx("footer-confirm")}>Xác nhận</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
