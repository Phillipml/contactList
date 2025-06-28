import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/Contact'

type ContactState = {
  items: Contact[]
}

const initialState: ContactState = {
  items: [
    {
      id: 1,
      fullName: 'João Silva',
      email: 'joao.silva@email.com',
      phone: '(11) 99999-9999',
      favorite: true
    },
    {
      id: 2,
      fullName: 'Maria Santos',
      email: 'maria.santos@email.com',
      phone: '(11) 88888-8888',
      favorite: false
    },
    {
      id: 3,
      fullName: 'Pedro Oliveira',
      email: 'pedro.oliveira@email.com',
      phone: '(11) 77777-7777',
      favorite: true
    },
    {
      id: 4,
      fullName: 'Ana Costa',
      email: 'ana.costa@email.com',
      phone: '(11) 66666-6666',
      favorite: false
    }
  ]
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      )
    },
    edit: (state, action: PayloadAction<Contact>) => {
      const contactIndex = state.items.findIndex(
        (c) => c.id === action.payload.id
      )
      if (contactIndex >= 0) {
        state.items[contactIndex] = action.payload
      }
    },
    register: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
      const findContact = state.items.find(
        (contact) =>
          contact.fullName.toLowerCase() ===
          action.payload.fullName.toLowerCase()
      )
      if (findContact) {
        alert('Já existe um contato com esse nome')
      } else {
        const lastContact = state.items[state.items.length - 1]
        const newContact = {
          ...action.payload,
          id: lastContact ? lastContact.id + 1 : 1
        }
        state.items.push(newContact)
      }
    },
    toggleFavorite: (state, action: PayloadAction<number>) => {
      const contactIndex = state.items.findIndex((c) => c.id === action.payload)
      if (contactIndex >= 0) {
        state.items[contactIndex].favorite = !state.items[contactIndex].favorite
      }
    }
  }
})

export const { remove, edit, register, toggleFavorite } = contactsSlice.actions

export default contactsSlice.reducer
