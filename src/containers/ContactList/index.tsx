import { useSelector } from 'react-redux'
import Contact from '../../components/Contact'
import type { RootReducer } from '../../store'
import * as S from './styles'

const ContactList = () => {
  const { items } = useSelector((state: RootReducer) => state.contacts)
  const { search, showFavorites } = useSelector(
    (state: RootReducer) => state.filter
  )

  const filteredContacts = items.filter((contact) => {
    if (showFavorites && !contact.favorite) {
      return false
    }

    const searchLower = (search || '').toLowerCase()
    return (
      contact.fullName.toLowerCase().includes(searchLower) ||
      contact.email.toLowerCase().includes(searchLower) ||
      contact.phone.includes(search || '')
    )
  })

  return (
    <S.Container>
      <S.Title>Lista de Contatos</S.Title>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} {...contact} />
      ))}
    </S.Container>
  )
}

export default ContactList
