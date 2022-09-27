import { useState } from "react";

const useModal = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  function toggleModal() {
    setIsShowModal(!isShowModal);
  }

  return { isShowModal, toggleModal };
};

export default useModal;
