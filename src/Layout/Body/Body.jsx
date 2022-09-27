import React from "react";
import classNames from "classnames/bind";
import styles from "./Body.module.scss";
import Task from "../../Components/Task/Task";

const cx = classNames.bind(styles);

export default function Body() {
  const listTasks = [
    {
      title: "Need do",
      task: [
        {
          title: "1Hoc VueJs",
          status: "done",
          description: "",
          warning: "easy",
        },
      ],
    },
    {
      title: "Da xong",
      task: [
        {
          title: "Hoc VueJs1",
          status: "done",
          description: "VueJS",
          warning: "danger",
        },
        {
          title: "Hoc ReactJs2",
          status: "done",
          description: "",
          warning: "normal",
        },
        {
          title: "Hoc NodeJs3",
          status: "notdone",
          description: "NodeJS",
          warning: "easy",
        },
        {
          title: "Hoc Angular4",
          status: "Chưa xong",
          description: "Angular",
          warning: "normal",
        },
        {
          title: "Hoc NodeJs3",
          status: "notdone",
          description: "NodeJS",
          warning: "easy",
        },
        {
          title: "Hoc Angular4",
          status: "Chưa xong",
          description: "Angular",
          warning: "normal",
        },
        {
          title: "Hoc Angular4",
          status: "Chưa xong",
          description: "Angular",
          warning: "normal",
        },
        {
          title: "Hoc NodeJs3",
          status: "notdone",
          description: "NodeJS",
          warning: "easy",
        },
        {
          title: "Hoc Angular4",
          status: "Chưa xong",
          description: "Angular",
          warning: "normal",
        },
        {
          title: "Hoc Angular4",
          status: "Chưa xong",
          description: "Angular",
          warning: "normal",
        },
        {
          title: "Hoc NodeJs3",
          status: "notdone",
          description: "NodeJS",
          warning: "easy",
        },
        {
          title: "Hoc Angular4",
          status: "Chưa xong",
          description: "Angular",
          warning: "normal",
        },
      ],
    },
    {
      title: "todolist",
      task: [
        {
          title: "Hoc VueJs1",
          status: "notdone",
          description: "VueJS",
          warning: "normal",
        },
        {
          title: "Hoc ReactJs2",
          status: "done",
          description: "ReactJS",
          warning: "danger",
        },
        {
          title: "Hoc NodeJs3",
          status: "notdone",
          description: "NodeJS",
          warning: "easy",
        },
        {
          title: "Hoc Angular4",
          status: "Chưa xong",
          description: "",
          warning: "normal",
        },
      ],
    },
  ];
  return (
    <div className={cx("container")}>
      <div className={cx("content")}>
        {listTasks?.map((items) => {
          return <Task items={items} key={items.title} />;
        })}
      </div>
    </div>
  );
}
