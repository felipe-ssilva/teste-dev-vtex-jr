import React from "react";
import { HeaderContainer, HeaderLogo } from "./styles";
import Minicart from "../Minicart";

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderLogo to="/">Store</HeaderLogo>
      <Minicart />
    </HeaderContainer>
  );
};
