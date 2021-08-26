import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_REQUESTS, DELETE_REQUEST } from "../query";
import Card from "./Card";

function Body() {
  const { loading, data } = useQuery(GET_REQUESTS);
  const [req, setReq] = useState(null);
  const [deleteRequest, { data: mdata, loading: mloading }] =
    useMutation(DELETE_REQUEST);

  useEffect(() => {
    if (data) {
      let pending = data?.requests;
      setReq([...pending].reverse());
    }
  }, [data]);

  const onClick = async (id) => {
    console.log(id);
    await deleteRequest({
      variables: {
        deleteRequestId: id,
      },
      refetchQueries: [{ query: GET_REQUESTS }],
    });
  };

  return (
    <div className="grid gap-6 mb-8 md:grid-cols-1 lg:grid-cols-3">
      {loading && !data && <div> Loading... </div>}
      {req &&
        !loading &&
        req.map((e) => (
          <Card data={e} key={e.id} onClick={() => onClick(e.id)} />
        ))}
    </div>
  );
}

export default Body;
