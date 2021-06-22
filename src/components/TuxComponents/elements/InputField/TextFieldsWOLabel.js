import styled, { css } from "styled-components";
import { grey_text } from "../../utilities";
import { pop_reg } from "../../utilities/Type";

export const Wrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
  box-sizing: border-box;
  font-size: 14px;
  line-height: 21px;
  width: 280px;
  height: 48px;
  outline: none;
  border: 1px solid #666666;
  border-radius: 10px;
  padding: 1rem 0.7rem;
  color: ${grey_text};
  transition: 0.1s ease-out;
  &:focus {
    border-color: #366062;
    color: #366062;
    top: 0;
    transform: translateY(-50%) scale(0.9);
  }
  ${(props) =>
    props.focus &&
    css`
      border-color: #366062;
      border-color: #366062;
      color: #366062;
      top: 0;
    `}
`;