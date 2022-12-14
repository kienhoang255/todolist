import React from "react";
import classNames from "classnames/bind";
import styles from "./Body.module.scss";
import Task from "../../Components/Task/Task";
import { useStore } from "../../store";

const cx = classNames.bind(styles);

export default function Body() {
  const [state, dispatch] = useStore();
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
