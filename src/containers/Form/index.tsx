import { useState, type FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import {
  Input,
  MainContainer,
  SaveButton,
  Title,
  CheckboxLabel
} from '../../styles'
import { ContactForm } from './styles'
import { register } from '../../store/reducers/contacts'
import { useNavigate } from 'react-router-dom'

const Form = () => {
  const dispatch = useDispatch()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [favorite, setFavorite] = useState(false)
  const navigate = useNavigate()

  const contactRegister = (e: FormEvent) => {
    e.preventDefault()
    dispatch(register({ fullName, email, phone, favorite }))
    navigate('/')
  }

  return (
    <MainContainer>
      <Title>Novo Contato</Title>
      <ContactForm onSubmit={contactRegister}>
        <Input
          type="text"
          placeholder="Nome completo"
          value={fullName}
          onChange={({ target }) => setFullName(target.value)}
          required
        />
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          required
        />
        <Input
          type="tel"
          placeholder="Telefone"
          value={phone}
          onChange={({ target }) => setPhone(target.value)}
          required
        />
        <CheckboxLabel>
          <input
            type="checkbox"
            checked={favorite}
            onChange={({ target }) => setFavorite(target.checked)}
          />
          Marcar como favorito
        </CheckboxLabel>
        <SaveButton type="submit">Cadastrar</SaveButton>
      </ContactForm>
    </MainContainer>
  )
}

export default Form
