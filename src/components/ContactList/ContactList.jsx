import { ContactsItem, ButtonList } from '../style.styled'
import { useDispatch } from 'react-redux'
import { Delete } from '../../redux/slice'
import { useDeleteTodoMutation } from '../../redux/todos/todosSlice'

export default function ContactList({ visibal, click }) {
  const [data] = useDeleteTodoMutation()
  const dispatch = useDispatch()

  return (
    <ContactsItem>
      {visibal?.map((select) => (
        <li key={select.id}>
          {select.name}:{select.phone}
          <ButtonList onClick={() => data(select.id)}>delete</ButtonList>
        </li>
      ))}
    </ContactsItem>
  )
}
