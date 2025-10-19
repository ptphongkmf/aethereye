/* @refresh reload */
import { render } from "solid-js/web";
import App from "./app.tsx";
import "./style.css";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

render(() => <App />, root);
