import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'Ana Souza',
      email: 'ana.souza@email.com',
      telefone: '(11) 99999-1111'
    },
    {
      id: 2,
      nome: 'Bruno Lima',
      email: 'bruno.lima@email.com',
      telefone: '(21) 98888-2222'
    },
    {
      id: 3,
      nome: 'Carla Martins',
      email: 'carla.martins@email.com',
      telefone: '(31) 97777-3333'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const index = state.itens.findIndex(
        (contato) => contato.id === action.payload.id
      )

      if (index >= 0) {
        state.itens[index] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const ultimoContato = state.itens[state.itens.length - 1]
      const novoId = ultimoContato ? ultimoContato.id + 1 : 1

      state.itens.push({ ...action.payload, id: novoId })
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions
export default contatosSlice.reducer
