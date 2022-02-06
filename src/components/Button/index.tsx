import React from 'react'
type Props = {
  children?: React.ReactNode
  onClick?: any
}
function Button(props: Props) {
  return (
    <div>
      <button onClick={props.onClick}>{props.children}</button>
    </div>
  )
}

export default Button
