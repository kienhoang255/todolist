import React, { useContext, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Task.module.scss";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import ExpandPopUp from "../PopUp/ExpandPopUp";
import Modal from "../Modal/Modal";
import TaskItem from "../TaskItem/TaskItem";
import { ListContext } from "../../App";

const cx = classNames.bind(styles);

export default function Task({ items, index }) {
  const [state, dispatch] = useContext(ListContext);
  const [newTask, setNewTask] = useState("");
  const [addTask, setTask] = useState(false);
  const task = {
    title: newTask,
    status: "uncompleted",
    description: "",
    warning: "normal",
  };
  const handleAddNewTask = (e) => {
    items.task.push(task);
    state[index].task = items.task;
    dispatch({ type: "doAll", data: state });
    setNewTask("");
    setTask(!addTask);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleAddNewTask(e);
  };

  const expandBtn = () => {
    return (
      <ExpandPopUp index={index} title={items.title}>
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

      <div className={cx("container-task")}>
        {items.task.map((card, key) => {
          return <TaskItem element={card} parentValue={items} key={key} />;
        })}
      </div>

      <div className={cx("add-task")}>
        {addTask ? (
          <div className={cx("input-add-task")}>
            <textarea
              placeholder="Title..."
              autoFocus
              value={newTask}
              onKeyDown={handleKeyDown}
              onChange={(e) => {
                setNewTask(e.target.value);
              }}
            />

            <div className={cx("btn-add-new")}>
              <button onClick={handleAddNewTask}>Thêm thẻ</button>
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
