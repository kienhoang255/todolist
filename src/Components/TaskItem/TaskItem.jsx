import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./TaskItem.module.scss";
import { CgDetailsMore } from "react-icons/cg";
import { BsPencil } from "react-icons/bs";
import useModal from "../../Hooks/useModal";
import Modal from "../Modal/Modal";

const cx = classNames.bind(styles);

export default function TaskItem({ items }) {
  const _items = items.task;

  const handleOnClick = (e) => {
    toggleModal();
  };

  const { isShowModal, toggleModal } = useModal();
  const item = _items.map((e, key) => {
    return (
      <div
        key={key}
        className={cx("items", e.warning, e.status)}
        onClick={handleOnClick}
      >
        <div className={cx("title-item")}>
          <div>{e.title}</div>
          <div className={cx("edit")}>
            <BsPencil />
          </div>
        </div>
        <div className={cx("detail")}>
          <CgDetailsMore />
        </div>
        {/* <Modal
          isShowModal={isShowModal}
          hideModal={toggleModal}
          title={e.title}
        /> */}
      </div>
    );
  });

  return (
    <>
      <div className={cx("content")}>{item} </div>
    </>
  );
}
