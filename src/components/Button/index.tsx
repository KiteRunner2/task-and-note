import React from 'react'
import classNames from 'classnames'
import './index.css'
type Props = {
  children?: React.ReactNode
  onClick?: any
  type: 'primary' | 'secondary'
}
function Button(props: Props) {
  const classes = classNames('button',{primary: props.type === 'primary',secondary: props.type === 'secondary'})
  return (
    <button onClick={props.onClick} className={classes}>
      {props.children}
    </button>
  )
}

export default Button
