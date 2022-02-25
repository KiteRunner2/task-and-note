import React from 'react'
import './index.css'

type PropsType = {
  type: 'text' | 'password'
  value: string
  onInputChange: React.ChangeEventHandler
  placeholder: string
}

function TextInput(props: PropsType) {
  return (
    <input
      type={props.type}
      value={props.value}
      onChange={props.onInputChange}
      className="input-style"
      placeholder={props.placeholder}
    />
  )
}

export default TextInput
