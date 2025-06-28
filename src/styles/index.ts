import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    color: ${({ theme }) => theme.primaryColor};
  }

  body {
    background-color: ${({ theme }) => theme.bgColor};
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
  background-color: ${({ theme }) => theme.bgColor};
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.bgColor};
`

export const Title = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.primaryColor};
`

export const Input = styled.input`
  padding: 8px;
  margin: 8px 0;
  background-color: ${({ theme }) => theme.secondaryColor};
  border-radius: 8px;
  font-weight: bold;
  color: ${({ theme }) => theme.primaryColor};
  border: 1px solid ${({ theme }) => theme.tertiaryColor};
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.tertiaryColor};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.linkColor};
  }
`

export const Button = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: ${({ theme }) => theme.secondaryColor};
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.linkColor};
  border-radius: 8px;
  margin-right: 8px;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.secondaryColor};
  }
`

export const CancRemoveButton = styled(Button)`
  background-color: ${({ theme }) => theme.warning};
  color: white;

  &:hover {
    background-color: ${({ theme }) => theme.attention};
    color: white;
  }
`

export const SaveButton = styled(Button)`
  background-color: ${({ theme }) => theme.success};
  color: ${({ theme }) => theme.secondaryColor};

  &:hover {
    background-color: ${({ theme }) => theme.bgColor};
    color: white;
  }
`

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
  margin-bottom: 16px;
  cursor: pointer;
  font-size: 14px;
  color: ${({ theme }) => theme.primaryColor};
`

export const StarButton = styled.button`
  margin-bottom: 8px;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  color: ${({ theme }) => theme.attention};
  padding: 0;
  display: flex;
  align-items: center;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.2);
  }
`

export default GlobalStyle
