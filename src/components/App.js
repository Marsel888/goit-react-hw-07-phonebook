import '../style.css'

import ContackForm from './contactForm/ContactForm'

import Filter from './Filter/Filter'
import ContactList from './ContactList/ContactList'
import { useSelector } from 'react-redux'

import { useGetfetchTodosQuery } from '../redux/todos/todosSlice'

function App() {
  const { data } = useGetfetchTodosQuery()
  
  let fil = useSelector((state) => state.user.filter)

  const submitForm = ({ name, number }) => {
    if (test(name.toLowerCase())) {
      return alert(`${name} уже есть`)
    }
  }

  const test = (dat) => {
    return data?.some((item) => {
      return item.name?.toLowerCase() === dat
    })
  }
  const visibal = data?.filter((sel) => {
    return sel.name?.toLowerCase().includes(fil?.toLowerCase())
  })

  return (
    <>
      <ContackForm submitForm={submitForm} />

      <Filter value={fil} />

      <ContactList visibal={visibal} />
    </>
  )
}

export default App
