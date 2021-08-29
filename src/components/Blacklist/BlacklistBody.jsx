import React, { useState } from "react";
import BlacklistModal from "./BlacklistModal";
import CreateButton from "./CreateButton";
import List from "./List";

function BlacklistBody() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <CreateButton onClick={() => showModal()} />
      <List />

      <BlacklistModal
        isModalVisible={isModalVisible}
        handleCancel={handleCancel}
        handleOk={handleOk}
      />
    </>
  );
}

export default BlacklistBody;
