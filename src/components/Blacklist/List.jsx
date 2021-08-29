import { useQuery } from "@apollo/client";
import React from "react";
import { GET_BLACKLISTS } from "../../query";
import Card from "./Card";

function List() {
  const { loading, data } = useQuery(GET_BLACKLISTS);
 
  return (
    <div className="grid gap-6 mt-8 mb-8 md:grid-cols-1 lg:grid-cols-3">
      {!data && loading && <div> loading </div>}
      {data &&
        !loading &&
        data.blacklistedClubs.map((e) => <Card key={e.id} data={e} />)}
    </div>
  );
}

export default List;
