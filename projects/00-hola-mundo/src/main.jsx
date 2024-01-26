import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'));

const Button = ({ text }) => {
  return (
    <button>{text}</button>
  )
}
root.render(
  <React.Fragment>
    <Button text="Me gusta 0" />
    <Button text="Me gusta 1" />
    <Button text="Me gusta 2" />
  </React.Fragment>,
);
