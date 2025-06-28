import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { remove, edit, toggleFavorite } from '../../store/reducers/contacts'
import Contact from '../../models/Contact'
import * as S from './styles'
import {
  SaveButton,
  CancRemoveButton,
  Button,
  Input,
  StarButton
} from '../../styles'

type Props = Contact

const ContactComponent = ({ id, fullName, email, phone, favorite }: Props) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [editedContact, setEditedContact] = useState({
    fullName,
    email,
    phone
  })

  const handleEdit = () => {
    if (isEditing) {
      dispatch(edit({ id, favorite, ...editedContact }))
      setIsEditing(false)
    } else {
      setIsEditing(true)
    }
  }

  const handleCancel = () => {
    setIsEditing(false)
    setEditedContact({ fullName, email, phone })
  }

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(id))
  }

  return (
    <S.Card>
      {isEditing ? (
        <S.EditForm>
          <Input
            type="text"
            value={editedContact.fullName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEditedContact({
                ...editedContact,
                fullName: e.target.value
              })
            }
            placeholder="Nome completo"
          />
          <Input
            type="email"
            value={editedContact.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEditedContact({ ...editedContact, email: e.target.value })
            }
            placeholder="E-mail"
          />
          <Input
            type="tel"
            value={editedContact.phone}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEditedContact({ ...editedContact, phone: e.target.value })
            }
            placeholder="Telefone"
          />
          <S.ButtonGroup>
            <SaveButton onClick={handleEdit}>Salvar</SaveButton>
            <CancRemoveButton onClick={handleCancel}>Cancelar</CancRemoveButton>
          </S.ButtonGroup>
        </S.EditForm>
      ) : (
        <>
          <S.ContactInfo>
            <S.NameContainer>
              <S.Name>{fullName}</S.Name>
              <StarButton
                onClick={handleToggleFavorite}
                title={favorite ? 'Desfavoritar' : 'Favoritar'}
              >
                {favorite ? '★' : '☆'}
              </StarButton>
            </S.NameContainer>
            <S.Email>{email}</S.Email>
            <S.Phone>{phone}</S.Phone>
          </S.ContactInfo>
          <S.ActionButtons>
            <Button onClick={handleEdit}>Editar</Button>
            <CancRemoveButton onClick={() => dispatch(remove(id))}>
              Remover
            </CancRemoveButton>
          </S.ActionButtons>
        </>
      )}
    </S.Card>
  )
}

export default ContactComponent
