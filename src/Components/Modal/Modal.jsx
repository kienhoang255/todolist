import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Modal.module.scss";
import Header from "./Header/Header";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";

const cx = classNames.bind(styles);

export default function Modal({
  children,
  setOpen,
  value,
  parentValue,
  index,
}) {
  const [openChangeTitle, setOpenChangeTitle] = useState(false);
  const [openChangeDes, setOpenChangeDes] = useState(false);

  const [newTitle, setNewTitle] = useState(value.title);
  const [newDescription, setNewDescription] = useState(value.description);
  const [newStatus, setNewStatus] = useState(value.status);
  const [newWarning, setNewWarning] = useState(value.warning);

  const [isOpen, setIsOpen] = useState(false);

  const cardTitle = parentValue.title_card;
  const handleStopPropagation = (e) => {
    e.stopPropagation();
  };

  function toggleModal() {
    handleDefault();
    setIsOpen(!isOpen);
    setNewTitle(value.title);
    setNewStatus(value.status);
    setNewDescription(value.description);
    setNewWarning(value.warning);
  }

  const task = {
    title: newTitle,
    status: newStatus,
    description: newDescription,
    warning: newWarning,
  };

  const handleDefault = () => {
    if (openChangeTitle || openChangeDes) {
      setOpenChangeTitle(false);
      setOpenChangeDes(false);
    }
  };

  const onConfirm = () => {
    // value.title = newTitle;
    // value.description = newDescription;
    // value.status = newStatus;
    // value.warning = newWarning;
    // console.log(newTitle, newDescription, newStatus, newWarning);
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
            <Header
              value={value}
              toggleModal={toggleModal}
              isOpen={openChangeTitle}
              openTitle={setOpenChangeTitle}
              propagation={handleStopPropagation}
              cardTitle={cardTitle}
              title={newTitle}
              setNewTitle={setNewTitle}
            />

            <Body
              index={index}
              value={value}
              parentValue={parentValue}
              isOpen={openChangeDes}
              openDes={setOpenChangeDes}
              description={newDescription}
              setNewDescription={setNewDescription}
              propagation={handleStopPropagation}
              toggleModal={toggleModal}
              setNewWarning={setNewWarning}
              newStatus={newStatus}
              setNewStatus={setNewStatus}
            />

            <Footer
              index={index}
              value={value}
              parentValue={parentValue}
              task={task}
              toggleModal={toggleModal}
              onConfirm={onConfirm}
              newTitle={newTitle}
              newStatus={newStatus}
              newDescription={newDescription}
              newWarning={newWarning}
            />
          </div>
        </div>
      )}
    </>
  );
}
