import styled from 'styled-components'
import { colors } from '../../../../utils/design/colors'

export const Container = styled.button`
  height: 42px;
  padding: 0 24px;
  
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${colors.primary};
  border-radius: 8px;
  border: 0;

  color: #FFF;
  font-size: 16px;
  font-weight: regular;

  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    filter: brightness(0.7);
  }
`
