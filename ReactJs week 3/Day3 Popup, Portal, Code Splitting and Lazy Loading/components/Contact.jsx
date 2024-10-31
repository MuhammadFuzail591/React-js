/* eslint-disable react/jsx-key */
import { useState } from "react"


function Contact() {
  const [todosList, SetTodosList] = useState([])
  return (

    <>
    <div className="text-2xl px-4 text-center py-4">Here is the Contact component</div>
    <button onClick={() => {
      import ("../data").then((module) => SetTodosList(module.todos))
    }}>Show Data</button>
    <ul>
      {todosList.map((todo) => <li key={todo.id}>{todo.title}</li>)}
    </ul>
    </>
  )
}

export default Contact