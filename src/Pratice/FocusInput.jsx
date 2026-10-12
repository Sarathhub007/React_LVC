import  { useRef } from 'react'

export default function FocusInput() {
  const intial=  useRef(null);


  function handleFocus(){
    intial.current.focus();
  }

  return (

    <div>
        <input ref={intial}
        placeholder='Enter your name'
        />

        <button onClick={handleFocus}>
            Focus input
        </button>
       
        
        
        </div>
  )
}
