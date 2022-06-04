import React,{useState} from 'react'
import Hero_Section from './Components/Hero_Section'
import Navbar from './Components/Navbar'
import Selected_Cards from './Components/Selected_Cards'

const App = () => {
  const [search_res, setSearch_res] = useState("fitness")
  function search_input(data){
    setSearch_res(data);
  }
  return (
    <div style={{background:"#171717"}}>
      <Navbar search_input={search_input}></Navbar>
      <Hero_Section></Hero_Section>
      <Selected_Cards search_res={search_res}></Selected_Cards>
    </div>
  )
}

export default App