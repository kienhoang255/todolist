import React, { useContext, useState } from "react";
import styles from "./Body.module.scss";
import classNames from "classnames/bind";

import { CgDetailsMore } from "react-icons/cg";
import { actions, storeContext } from "../../../store";

const cx = classNames.bind(styles);

export default function Body({
  index,
  isOpen,
  value,
  parentValue,
  openDes,
  propagation,
  toggleModal,
  description,
  setNewDescription,
  setNewWarning,
  newStatus,
  setNewStatus,
}) {
  const [state, dispatch] = useContext(storeContext);
  const [complete, setComplete] = useState(() => {
    if (newStatus === "uncompleted") return false;
    if (newStatus === "complete") return true;
  });
  const options = [
    { value: "normal", label: "Normal" },
    { value: "danger", label: "Danger" },
    { value: "highlight", label: "Highlight" },
  ];

  const handleOnClick = (e) => {
    openDes(true);
    propagation(e);
  };

  const onCancel = () => {
    openDes(false);
    setNewDescription(value.description);
  };

  const onSave = () => {
    openDes(false);
  };

  const onComplete = () => {
    if (newStatus === "uncompleted") {
      setNewStatus("complete");
      setComplete(true);
    } else {
      setNewStatus("uncompleted");
      setComplete(false);
    }
  };

  const onRemove = () => {
    var answer = window.confirm(`Bạn muốn xóa ${value.title}`);
    if (answer) {
      dispatch(
        actions.removeTask({
          parentValue: parentValue,
          index: index,
        })
      );
      toggleModal();
    } else {
      console.log(dispatch);
      return 0;
    }
  };

  return (
    <div className={cx("body")}>
      <div className={cx("body-content")} onClick={handleOnClick}>
        <div className={cx("body-description-icon")}>
          <CgDetailsMore style={{ fontSize: "24px", padding: "0 8px" }} />
          Mô tả
        </div>
        {isOpen ? (
          <>
            <textarea
              autoFocus
              value={description}
              placeholder="Thêm mô tả chi tiết hơn..."
              onFocus={(e) => e.target.select()}
              className={cx("body-description-text")}
              onChange={(e) => setNewDescription(e.target.value)}
            ></textarea>
            <div className={cx("body-description-action")}>
              <button className={cx("save-btn")} onMouseDown={onSave}>
                Lưu
              </button>
              <button className={cx("cancel-btn")} onMouseDown={onCancel}>
                Hủy
              </button>
            </div>
          </>
        ) : (
          <div className={cx("body-description-detail")}>
            {description
              ? description
              : value.description
              ? value.description
              : "Thêm mô tả chi tiết hơn..."}
          </div>
        )}
      </div>
      <div className={cx("body-sidebar")}>
        <select
          className={cx("select-warning")}
          defaultValue={value.warning}
          name="warning"
          id="warning"
          onChange={(e) => setNewWarning(e.target.value)}
        >
          {options.map((item, key) => {
            return (
              <option
                value={item.value}
                key={key}
                className={cx("select-warning-option", item.value)}
              >
                {item.label}
              </option>
            );
          })}
        </select>
        <button className={cx("complete-btn", newStatus)} onClick={onComplete}>
          {complete ? "Hoàn thành" : "Chưa hoàn thành"}
        </button>
        <button className={cx("delete-btn")} onClick={onRemove}>
          Xóa
        </button>
      </div>
    </div>
  );
}
