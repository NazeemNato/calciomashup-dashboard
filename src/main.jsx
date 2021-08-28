import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "tailwindcss/tailwind.css";
import 'antd/dist/antd.css';
import App from "./App";
import { ApolloProvider } from "@apollo/client";
import { client } from "./service/client";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
