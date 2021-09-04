import { useQuery, useMutation } from "@apollo/client";
import React from "react";
import {
  GET_BLACKLISTS,
  DELETE_BLACKLIST,
  GET_REQUESTS,
  GET_STATUS,
} from "../../query";
import Card from "./Card";

function List() {
  const { loading, data } = useQuery(GET_BLACKLISTS);
  const [deleteBlacklist, { data: mdata }] = useMutation(DELETE_BLACKLIST);

  const onClick = async (id) => {
    console.log(id)
    await deleteBlacklist({
      variables: {
        deleteblacklistId: id,
      },
      refetchQueries: [
        { query: GET_REQUESTS },
        { query: GET_STATUS },
        { query: GET_BLACKLISTS },
      ],
    });
  };

  return (
    <div className="grid gap-6 mt-8 mb-8 md:grid-cols-1 lg:grid-cols-3">
      {!data && loading && <div> loading </div>}
      {data &&
        !loading &&
        data.blacklistedClubs.map((e) => (
          <Card key={e.id} data={e} onClick={() => onClick(e.id)} />
        ))}
    </div>
  );
}

export default List;
