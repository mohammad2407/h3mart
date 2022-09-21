import React from "react";
import styled from "styled-components";
import "../variable.css";

import { FiSearch } from "react-icons/fi";
export const Header = () => {
  return (
    <HeaderContainer>
      <img
        className="header__logo__img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqaq8SIGvD0RpgA90UF1BC8y0ra1TXTR1ibA&usqp=CAU"
        alt="Job Finder"
      />
      <SearchBox>
        <input
          type="text"
          className="header__input"
          placeholder="Search something (it doesn't work)"
        />
        <FiSearch className="header__searchIcon" />
      </SearchBox>

      <Login></Login>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  width: 100%;
  height: 78px;
  display: flex;
  flex: 1;
  align-items: center;
  background: var(--primary-headerbackground);
  position: static;
  z-index: 100;
  justify-content: space-evenly;
  margin-bottom:10px;
  .header__logo__img {
    width: fit-content;
    height: 60px;
    object-fit: contain;
    box-shadow: 4px 3px 0px 1px var(--primary-boxshadow);
  }
`;

const SearchBox = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  border-radius: 24px;
  .header__input {
    height: 12px;
    padding: 10px;
    width: 100%;
    border: none;
    outline: none;
  }

  .header__searchIcon {
    padding: 7px;
    height: 18px !important;
    background-color: var(--search-color);
  }
`;

const Login = styled.div`
  display: flex;
`;
