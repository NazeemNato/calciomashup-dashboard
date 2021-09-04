import React, { useRef } from "react";
import { Modal, Select, Form, notification } from "antd";
import {
  GET_TEAMS,
  GET_BLACKLISTS,
  CREATE_BLACKLIST,
  GET_REQUESTS,
  GET_STATUS,
} from "../../query";
import { useQuery, useMutation } from "@apollo/client";

const { Option } = Select;

function BlacklistModal({ isModalVisible, handleOk, handleCancel }) {
  const formRef = useRef();
  const { data, loading } = useQuery(GET_TEAMS);
  const [createBlacklist, { loading: mloading }] =
    useMutation(CREATE_BLACKLIST);

  const onFinish = async (value) => {
    const { team1, team2 } = value;
    await createBlacklist({
      variables: {
        makeBlacklistMashupT1: team1,
        makeBlacklistMashupT2: team2,
      },
      refetchQueries: [
        { query: GET_BLACKLISTS },
        { query: GET_REQUESTS },
        { query: GET_STATUS },
      ],
    });
    formRef.current.resetFields();
    handleCancel();
  };

  return (
    <>
      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        closable={false}
      >
        <Form onFinish={onFinish} ref={formRef}>
          <Form.Item
            name="team1"
            rules={[{ required: true, message: "Please select team 1" }]}
            disabled={loading}
          >
            <Select
              style={{ width: "100%" }}
              placeholder="Select team 1"
              required
              showSearch
              size="large"
              disabled={loading}
              loading={loading}
              allowClear
              filterOption={(input, option) =>
                option.title.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {data &&
                data.teams.map((e) => (
                  <Option key={e.id} value={e.id} title={e.name}>
                    {e.name}
                  </Option>
                ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="team2"
            rules={[{ required: true, message: "Please select team 2" }]}
            disabled={true}
          >
            <Select
              style={{ width: "100%" }}
              placeholder="Select team 2"
              required
              showSearch
              disabled={loading}
              loading={loading}
              size="large"
              allowClear
              filterOption={(input, option) =>
                option.title.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {data &&
                data.teams.map((e) => (
                  <Option key={e.id} value={e.id} title={e.name}>
                    {e.name}
                  </Option>
                ))}
            </Select>
          </Form.Item>
          <button
            disabled={mloading}
            className="uppercase text-xl w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-400 active:bg-indigo-600 font-bold transition duration-150 ease-in-out"
          >
            {mloading ? <span className="loader">⚽</span> : "Create Request"}
          </button>
        </Form>
      </Modal>
    </>
  );
}

export default BlacklistModal;
