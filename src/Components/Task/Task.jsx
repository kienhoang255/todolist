import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Task.module.scss";
import { BsPencil, BsThreeDots } from "react-icons/bs";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import { CgDetailsMore } from "react-icons/cg";
import Modal from "../Modal/Modal";
import useModal from "../../Hooks/useModal";
import ExpandPopUp from "../PopUp/ExpandPopUp";

const cx = classNames.bind(styles);

export default function Task({ items }) {
  const { isShowModal, toggleModal } = useModal({});
  const [addTask, setTask] = useState(false);

  const cardItem = items.task.map((card, key) => {
    return (
      <div className={cx("content-item")} key={key}>
        <div
          className={cx("items", card.warning, card.status)}
          // onClick={() => {
          //   toggleModal();
          // }}
        >
          <div className={cx("title-item")}>
            <div>{card.title}</div>
            <div className={cx("edit")}>
              <BsPencil />
            </div>
          </div>
          {card.description && (
            <div className={cx("detail")}>
              <CgDetailsMore />
            </div>
          )}
          <Modal
            isShowModal={isShowModal}
            // hideModal={toggleModal}
            title={card.title}
          />
        </div>
      </div>
    );
  });

  const expandBtn = () => {
    return (
      <ExpandPopUp>
        <span className={cx("expand-icon")}>
          <BsThreeDots />
        </span>
      </ExpandPopUp>
    );
  };

  const handleClose = () => {
    setTask(false);
  };

  return (
    <div className={cx("container")}>
      <div className={cx("title")}>
        <span>{items.title}</span>
        {expandBtn()}
      </div>
      <div className={cx("container-task")}>{cardItem}</div>

      <div className={cx("add-task")}>
        {addTask ? (
          <div className={cx("input-add-task")}>
            <textarea placeholder="Title..." />
            <div className={cx("add-new-task")}>
              <button>Thêm thẻ</button>
              <span onClick={handleClose}>
                <AiOutlineClose />
              </span>
            </div>
          </div>
        ) : (
          <div
            className={cx("add-btn")}
            onClick={() => {
              setTask(true);
            }}
          >
            <AiOutlinePlus />
            <span>Add</span>
          </div>
        )}
      </div>
    </div>
  );
}
