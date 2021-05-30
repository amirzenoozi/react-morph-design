import React from "react";
import { ReactNode } from "react";
import { Wrapper } from "./layput.style";


export interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Wrapper>
      <main>{children}</main>
    </Wrapper>
  );
};

export default Layout;
