import styled from "styled-components";
import { Menu } from "antd";

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.backgroundColor || "#202020"};
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const SearchInput = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  padding: 8px;
  font-size: 16px;
  border-radius: 4px 0 0 4px;
  border: none;
`;
export const SearchButton = styled.button`
  background-color: #d42f24;
  color: ${(props) => props.textColor || "#fff"};
  cursor: pointer;
  border-radius: 4px;
  display: inline-block;
  border: 0;
  font-weight: bold;
  padding: 10px 20px;
  font-size: 15px;

  &:hover {
    background-color: #ff0000; /* Color de fondo en el hover */
    color: #ffffff; /* Color de texto en el hover */
  }
`;
export const DropdownMenu = styled(Menu)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #202020 !important;
  opacity: 0.8;

  .ant-dropdown-menu-item {
    color: white !important;

    &:hover {
      background-color: #ADD8E6 !important; // Azul claro
      color: black !important
    }
  }
`;
