import React from 'react'
import { InputRe, Button, Form } from '../style.styled'
import { useState } from 'react'
import {
  useCreateTodoMutation,
  useGetfetchTodosQuery,
  useDeleteTodoMutation,
} from '../../redux/contact/todosSlice'

function ContackForm() {
  const [createTodo] = useCreateTodoMutation()

  let { data } = useGetfetchTodosQuery()
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const submitForm = ({ name }) => {
    if (test(name.toLowerCase())) {
      return alert(`${name} уже есть`)
    }
    createTodo({ name: name, phone: number })
  }

  const test = (dat) => {
    return data?.some((item) => {
      return item.name?.toLowerCase() === dat
    })
  }

  const inputChange = (e) => {
    if (e.target.name === 'name') {
      setName(e.target.value)
    }
    if (e.target.name === 'number') {
      setNumber(e.target.value)
    }
  }

  const hendlerSubmit = (e) => {
    e.preventDefault()

    submitForm({ name })

    setName('')
    setNumber('')
  }

  return (
    <Form action="" onSubmit={hendlerSubmit}>
      <label>
        Имя
        <InputRe
          type="text"
          name="name"
          value={name}
          onChange={inputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Имя"
        />
      </label>
      <label>
        <InputRe
          type="tel"
          name="number"
          value={number}
          onChange={inputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="телефон"
          required
        />
      </label>

      <Button type="submit">Поиск</Button>
    </Form>
  )
}

export default ContackForm
