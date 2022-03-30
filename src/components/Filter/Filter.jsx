import { InputRe, LabelName } from '../style.styled'
import { changeinput } from '../../redux/slice'
import { useDispatch, useSelector } from 'react-redux'

export default function Filter({ value, onChange }) {
  const dispatch = useDispatch()
  const changeFilter = (e) => {
    dispatch(changeinput(e.target.value))
  }

  return (
    <LabelName>
      Поиск по Имени
      <input
        type="text"
        value={value}
        onChange={changeFilter}
        placeholder="Поиск "
      />
    </LabelName>
  )
}
