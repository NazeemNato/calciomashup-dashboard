import React, { useRef, useState } from "react";
import { Select, Form, Input, notification } from "antd";
import { useQuery, useMutation } from "@apollo/client";
import { GET_TEAMS, UPDATE_TEAM } from "../../query";
const { Option } = Select;

function UpdateBody() {
  const formRef = useRef();

  const { data, loading } = useQuery(GET_TEAMS);
  const [selected, setSelected] = useState(false);
  const [updateTeam, { loading: mloading, data: mdata, error }] =
    useMutation(UPDATE_TEAM);

  const onFinish = async (value) => {
    const { id, image } = value;
    await updateTeam({
      variables: {
        updateTeamId: id,
        updateTeamContent: {
          image: image,
        },
      },
    });
    formRef.current.resetFields();
  };

  if (mdata) {
    notification.success({
      message: "Gooooooaaallllll ⚽",
      description: "Request submitted successfully",
    });
  }

  if (error) {
    notification.error({
      message: "Red card 🔴",
      description: "Something went wrong",
    });
  }
  return (
    <div className="mx-auto max-w-screen text-center py-10  mb-5 items-center relative">
      <div className="relative w-11/12 max-w-xl p-8 bg-white shadow-xl mx-auto rounded mb-10">
        <Form onFinish={onFinish} ref={formRef}>
          <Form.Item
            name="id"
            rules={[{ required: true, message: "Please select a team" }]}
            disabled={loading}
          >
            <Select
              style={{ width: "100%" }}
              placeholder="Select team"
              required
              showSearch
              size="large"
              disabled={loading}
              loading={loading}
              allowClear
              onSelece={(_) => setSelected(true)}
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
            name="image"
            rules={[{ required: true, message: "Please input image" }]}
            disabled={selected}
          >
            <Input
              placeholder="Update logo svg"
              required
              size="large"
              disabled={selected}
            />
          </Form.Item>
          <button
            disabled={mloading}
            className="uppercase text-xl w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-400 active:bg-indigo-600 font-bold transition duration-150 ease-in-out"
          >
            {mloading ? <span className="loader">⚽</span> : "Update image"}
          </button>
        </Form>
      </div>
    </div>
  );
}

export default UpdateBody;
