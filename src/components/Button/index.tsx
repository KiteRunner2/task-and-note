import React from 'react'
import classNames from 'classnames'
import './index.css'
type Props = {
  children?: React.ReactNode
  onClick?: any
  type: 'primary' | 'secondary'
  disabled?: boolean
}
function Button(props: Props) {
  const classes = classNames('button', {
    primary: props.type === 'primary',
    secondary: props.type === 'secondary',
    disabled: props.disabled === true,
  })
  return (
    <button
      className={classes}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  )
}

export default Button
