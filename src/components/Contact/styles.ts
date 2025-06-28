import styled from 'styled-components'

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ContactInfo = styled.div`
  flex: 1;
`

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`

export const Name = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.secondaryColor};
  margin: 0;
`

export const Email = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 4px;
`

export const Phone = styled.p`
  font-size: 14px;
  color: #666;
`

export const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
`

export const EditForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`

export const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`
