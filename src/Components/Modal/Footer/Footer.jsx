import React, { useContext } from "react";
import styles from "./Footer.module.scss";
import classNames from "classnames/bind";
import { actions, storeContext } from "../../../store";

const cx = classNames.bind(styles);

export default function Footer({
  index,
  parentValue,
  toggleModal,
  newTitle,
  newDescription,
  newWarning,
  newStatus,
}) {
  const [state, dispatch] = useContext(storeContext);
  const handleOnConfirm = () => {
    dispatch(
      actions.renameTask({
        parentValue: parentValue,
        index: index,
        title: newTitle,
      })
    );
    dispatch(
      actions.changeDesTask({
        parentValue: parentValue,
        index: index,
        description: newDescription,
      })
    );
    dispatch(
      actions.changeStatusTask({
        parentValue: parentValue,
        index: index,
        status: newStatus,
      })
    );
    dispatch(
      actions.changeWarningTask({
        parentValue: parentValue,
        index: index,
        warning: newWarning,
      })
    );
    toggleModal();
  };
  const handleOnCancel = () => {
    toggleModal();
  };
  return (
    <div className={cx("footer")}>
      <button className={cx("footer-cancel")} onClick={handleOnCancel}>
        Hủy
      </button>
      <button className={cx("footer-confirm")} onClick={handleOnConfirm}>
        Xác nhận
      </button>
    </div>
  );
}
