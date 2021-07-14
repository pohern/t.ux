import styled, {css} from 'styled-components'
import { pop_bolder } from '../../utilities/Type'


export const HexBox = styled.input`
  width: 128px;
  height: 42px;
  border-radius: 5px;
  background: #323239;
  opacity: 0.7;
  color: #FFF;
  font: ${pop_bolder};
  line-height: 24px;
  font-size: 18px;
  padding-left: 10px;
  box-sizing: border-box;
  ${props => props.hover && css`
    opacity: 0.8;
  `}
  ${props => props.selected && css`
  opacity: 0.9;
  border: 1px solid #000000;
  `}
`