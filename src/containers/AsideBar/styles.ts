import styled from 'styled-components'

export const Aside = styled.aside`
  padding: 16px;
  background-color: ${({ theme }) => theme.secondaryColor};
  height: 100vh;
  border-right: 1px solid ${({ theme }) => theme.tertiaryColor};
`
