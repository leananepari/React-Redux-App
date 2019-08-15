import React, { useState } from 'react';
import { Input } from 'semantic-ui-react'

function InputField(props) {
  const [input, setInput] = useState('')

  const handleChanges = (e) => {
    setInput(e.target.value)
  }

  return (
    <form style={{display: 'flex', alignItems: 'center'}}onSubmit={(e) => {e.preventDefault();
                            if (input !== '') {
                              props.getData();
                            }
                            setInput('');
                            }}>
      <Input
        type='text' 
        name="question" 
        value={input} 
        onChange={handleChanges}
      />
      <input style={{height: '38px', width: '70px', borderLeft: '0px solid transparent',
                     marginLeft: '-3px',borderRadius: '4px', fontSize: '16px', 
                     fonrWeight: '700', outline: 'none', background: '#438ef1', color: 'white'}} 
             type='submit' 
             value='?' 
      />
    </form>
  )
}

export default InputField;