import styled from 'styled-components'

export const ContactForm = styled.form`
 max-width: 547px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: ${({ theme }) => theme.primaryColor};

  textarea {
    resize: none;
    margin: 16px 0;
  }
  }
`
