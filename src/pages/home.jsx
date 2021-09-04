import React from "react";
import Layout from "../components/Common/Layout";
import Body from "../components/Home/Body";
import Status from "../components/Home/Status";
export default function Home() {
  return (
    <Layout>
      <Status />
      <Body />
    </Layout>
  );
}
