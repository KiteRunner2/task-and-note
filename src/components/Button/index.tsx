import React from 'react'
import classNames from 'classnames'
import './index.css'
type Props = {
  children?: React.ReactNode
  onClick?: any
}
function Button(props: Props) {
  return (
    <button onClick={props.onClick} className="button">
      {props.children}
    </button>
  )
}

export default Button
