import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";


import "./index.css";
import { RecoilRoot } from "recoil";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <RecoilRoot>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RecoilRoot>,
);
