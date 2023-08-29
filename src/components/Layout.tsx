import React from "react";
import { LayoutCss } from "../style/SiderCss";

import Footer from "./Footer";

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <LayoutCss>
      <main>{props.children}</main>
      <Footer />
    </LayoutCss>
  );
};

export default Layout;
