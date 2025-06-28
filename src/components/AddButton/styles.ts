import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Circle = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  text-decoration: none;
  color: ${({ theme }) => theme.secondaryColor};
  background-color: ${({ theme }) => theme.linkColor};
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  transition: all 0.2s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.secondaryColor};
    transform: scale(1.1);
  }
`
