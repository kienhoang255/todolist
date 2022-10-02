import React, { useContext } from "react";
import classNames from "classnames/bind";
import styles from "./Body.module.scss";
import Task from "../../Components/Task/Task";
import { storeContext } from "../../store";
const cx = classNames.bind(styles);

export default function Body() {
  const [state] = useContext(storeContext);

  return (
    <div className={cx("container")}>
      <div className={cx("content")}>
        {state?.map((items, index) => {
          return <Task items={items} key={index} index={index} />;
        })}
      </div>
    </div>
  );
}
