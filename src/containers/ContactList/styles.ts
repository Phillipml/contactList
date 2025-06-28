import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.primaryColor};
  margin-bottom: 32px;
  text-align: center;
`
