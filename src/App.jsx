// HOOKS
import { useState, useEffect } from "react";

// COMPONENTS
import Header from "./components/Header/Header";
import CardContainer from "./components/CardContainer";
import { TextField } from "@mui/material";

// STYLES
import "./styles/main.scss"

function App() {

  const [isFirstInput, setIsFirstInput] = useState(true)

  const [TempQuery, setTempQuery] = useState("")
  const [query, setQuery] = useState("")

  function handleSumbit(event) {
    event.preventDefault()
    setQuery(TempQuery)
  }

  function handleChange(event) {
    setTempQuery(event.target.value)
  }

  useEffect(
    () => {
      if (query != "") {
        setIsFirstInput(false)
      }
    }, [query]
  )

  return (
    <>
      <Header>
        <h1 className="header-title">Food searcher</h1>
        <form className="header-form" onSubmit={handleSumbit}>
          <input type="text" onChange={handleChange} name="query" placeholder="Apple, Beef, Rice... " className="input"/>
          <input type="submit" value="Send" className="input-sumbit"/>
        </form>
      </Header>
      <main className="main">
        {!isFirstInput && <CardContainer query={query}/>}   
      </main>    
    </>
  );
}

export default App
