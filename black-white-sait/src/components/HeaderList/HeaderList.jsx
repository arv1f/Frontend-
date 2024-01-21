import './HeaderList.css'
import Button from '../Button/Button'
import WindowHeader from '../WindowHeader/WindowHeadrer'

export default function HeaderList({ DivTextColor, active, onChange }) {

  return(
    <>
      <WindowHeader DivTextColor={DivTextColor}></WindowHeader>
      {DivTextColor == '#242424' &&
      <ul style={{position:'absolute', width:'100%', left:'0', margin:'0', top:'-10px'}}>
      <Button isActive={active=='dopMain'} onClick={() => onChange('dopMain')} where={0}>Дополнительная информация</Button>
      <Button isActive ={active == 'main'} onClick={() => onChange('main')}    where={0}>Основная информация</Button>
      
      </ul>}
    </>
  )
}