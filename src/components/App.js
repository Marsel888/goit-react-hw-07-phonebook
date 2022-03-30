import '../style.css'

import ContackForm from './contactForm/ContactForm'

import Filter from './Filter/Filter'
import ContactList from './ContactList/ContactList'
import { useSelector } from 'react-redux'

import { Oval } from 'react-loader-spinner'

function App() {
  let filter = useSelector((state) => state.user.filter)

  return (
    <>
      <ContackForm />
      <Filter value={filter} />

      <ContactList filter={filter} />
    </>
  )
}

export default App
