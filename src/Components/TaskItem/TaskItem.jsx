import React from "react";
import classNames from "classnames/bind";
import styles from "./TaskItem.module.scss";
import { CgDetailsMore } from "react-icons/cg";
import { BsPencil } from "react-icons/bs";
import Modal from "../Modal/Modal";

const cx = classNames.bind(styles);

export default function TaskItem({ element, parentValue }) {
  return (
    <Modal value={element} parentValue={parentValue}>
      <div className={cx("items", element.warning, element.status)}>
        <div className={cx("title-item")}>
          <div>{element.title}</div>
          <div className={cx("edit")}>
            <BsPencil />
          </div>
        </div>
        {element.description && (
          <div className={cx("detail")}>
            <CgDetailsMore />
          </div>
        )}
      </div>
    </Modal>
  );
}
