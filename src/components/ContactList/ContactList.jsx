import { ContactsItem, ButtonList } from '../style.styled'

import {
  useDeleteTodoMutation,
  useGetfetchTodosQuery,
} from '../../redux/contact/todosSlice'

export default function ContactList({ filter }) {
  const [dataDelete] = useDeleteTodoMutation()
  const { data } = useGetfetchTodosQuery()
  console.log(data)
  const visibal = data?.filter((sel) => {
    return sel.name?.toLowerCase().includes(filter?.toLowerCase())
  })
  console.log(visibal)
  return (
    <ContactsItem>
      {visibal?.map(({ id, name, phone }) => (
        <li key={id}>
          {name}:{phone}
          <ButtonList onClick={() => dataDelete(id)}>delete</ButtonList>
        </li>
      ))}
    </ContactsItem>
  )
}
