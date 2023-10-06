import React, { useState } from 'react'
import './Buttons.css'

const Buttons = () => {

    const [result, setResult] = useState("");

    const onClick = (event) => {
        setResult(result.concat(event.target.value))
    }
    const reset = () => {
        setResult("")
    }
    const answer = () => {
        try {
          setResult(eval(result).toString());
        } catch (error) {
          setResult(result);
        }
    }

  return (
    <div className='calci'>
      <input type="text" id='answer' placeholder='0' value={result} onChange={answer} />
      <input type="button" value='AC' className='button btn1' onClick={reset} />
      <input type="button" value='DL' className='button btn1' onClick={e => setResult(result.slice(0,-1))} />
      <input type="button" value='(' className='button btn2' onClick={onClick} />
      <input type="button" value=')' className='button btn2' onClick={onClick} />
      <input type="button" value='%' className='button btn2' onClick={onClick} />
      <input type="button" value='+' className='button btn2' onClick={onClick} />
      <input type="button" value='7' className='button' onClick={onClick} />
      <input type="button" value='8' className='button' onClick={onClick} />
      <input type="button" value='9' className='button' onClick={onClick} />
      <input type="button" value='-' className='button btn2' onClick={onClick} />
      <input type="button" value='4' className='button' onClick={onClick} />
      <input type="button" value='5' className='button' onClick={onClick} />
      <input type="button" value='6' className='button' onClick={onClick} />
      <input type="button" value='*' className='button btn2' onClick={onClick} />
      <input type="button" value='1' className='button' onClick={onClick} />
      <input type="button" value='2' className='button' onClick={onClick} />
      <input type="button" value='3' className='button' onClick={onClick} />
      <input type="button" value='/' className='button btn2' onClick={onClick} />
      <input type="button" value='0' className='button' onClick={onClick} />
      <input type="button" value='.' className='button btn2' onClick={onClick} />
      <input type="button" value='=' className='button btn' onClick={answer}/>
    </div>
  )
}

export default Buttons
