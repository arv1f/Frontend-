import { useState } from 'react'
import './App.css'
import Button from './components/Button/Button'
import HeaderList from './components/HeaderList/HeaderList'
import './components/HeaderList/HeaderList.css'

function App() {
  const [divStyle, setDivStyle] = useState({backgroundColor: 'white'})
  const [divStyle2, setDivStyle2] = useState({backgroundColor: '#242424'})
  const [tab, setTab] = useState(null)
  const [flag, setFlag] = useState(false)
  let flagkflagy=false;

  function changeStyle() {
    
      flagkflagy=true;
      setFlag(true);
    
    setDivStyle({backgroundColor: divStyle.backgroundColor === '#242424' ? 'white':'#242424'});
    setDivStyle2({backgroundColor: divStyle2.backgroundColor === 'white' ? '#242424':'white'});
    
  }

  return (
  // <div className='divMain'>
  <div>
    {!flag && <h1 style={{color:'#242424', display:'block', width: '700px', position:'absolute'}}>Не нажимай на значок по центру</h1>}
    { (flag && divStyle.backgroundColor=='white') && <h1 style={{color:'#242424', display:'block', width: '700px', position:'absolute'}}>Ты чево надееелааал... <img src='https://sun9-42.userapi.com/impg/GE6WBVmFydBmPQG8k8wm93dlx4ZsznynmWpq9A/iUbqfq8pnOw.jpg?size=960x922&quality=96&sign=da41d895c1ea4fc06938bc1316b5071c&c_uniq_tag=7QmjWjG8mFQ5IppK9Wn49K1Vqe9-5O0-Vw8DIE5iuLc&type=album'></img> Нув се, теперь тебя придется убить(</h1>}
    <div className='divMainLeft' style={divStyle}>
      <div className='divMain'>
        <header>
          <HeaderList DivTextColor={divStyle.backgroundColor} active={tab} onChange={(current) => setTab(current)}></HeaderList>
          {  divStyle.backgroundColor=='#242424' && <Button  onClick={changeStyle} isActive={ divStyle.backgroundColor=='#242424'} where={'img'}><img src='src\image\png-transparent-yin-and-yang-yin-yang-miscellaneous-angle-text-transformed.png' style={{width:'120px', height:'80px', zIndex:'5'}}></img></Button> }
          { divStyle2.backgroundColor=='#242424' && <Button  onClick={changeStyle} isActive={divStyle2.backgroundColor=='#242424'} where={'img'}><img src='src\image\png-transparent-yin-and-yang-yin-yang-miscellaneous-angle-text-transformed.png' style={{width:'120px', height:'80px', transform: 'rotate(180deg)', zIndex:'5'}}></img></Button> }
          {    divStyle.backgroundColor=='white' && <hr style={{transform: 'rotate(90deg)', position: 'relevate'}}/>}
          {  divStyle.backgroundColor=='#242424' && <hr style={{transform: 'rotate(90deg)', position: 'relevate'}}/>}
          
          <div className='uldiv'>
            { tab == 'main'    && <>
              <label htmlFor="" style={{position:'absolute', fontSize:'50px',top:'-240px', color:'white'}}>Во-первых</label>
              <div className='lidiv' style={{position:'absolute', color:'white' }}>С учётом сложившейся международной обстановки, новая модель организационной деятельности, в своём классическом представлении, допускает внедрение форм воздействия. Предварительные выводы неутешительны: курс на социально-ориентированный национальный проект не оставляет шанса для первоочередных требований. Принимая во внимание показатели успешности, семантический разбор внешних противодействий способствует повышению качества соответствующих условий активизации. Приятно, граждане, наблюдать, как элементы политического процесса, превозмогая сложившуюся непростую экономическую ситуацию, своевременно верифицированы.</div>
            </>}
            { tab == 'dopMain' && <>
              <label htmlFor="" style={{position:'absolute', fontSize:'50px',top:'-240px', color:'white'}}>Во-вторых</label>
              <div className='lidiv' style={{position:'absolute', color:'white' }}>В рамках спецификации современных стандартов, базовые сценарии поведения пользователей рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. В целом, конечно, синтетическое тестирование способствует подготовке и реализации приоретизации разума над эмоциями. В частности, синтетическое тестирование не даёт нам иного выбора, кроме определения форм воздействия. Противоположная точка зрения подразумевает, что явные признаки победы институционализации представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть подвергнуты целой серии независимых исследований.</div>
            </>
            }
          </div> 
        </header>
      </div> 

    </div>
    <div className='divMainRight' style={divStyle2}>

    </div>
  </div>
  )
}

export default App
//Добавить Медленное прокручивание и медленное появление(осветление областей)