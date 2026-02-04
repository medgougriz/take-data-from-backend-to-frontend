import { useState,useEffect } from 'react'
import axios from 'axios'
import Header from './conponment/Headere'
import HeroSection from './conponment/HeroSection'

function App() {
  const [name, setName] = useState("enter name")
  const [icon, setIcon] = useState("")
  const [line, setLine] = useState("")
  const [email, setEmail] = useState("enter email")
  const [description, setDescription] = useState("enter description")
  useEffect(() => {
    const dataPage = async () => {
      try {
        const response = await axios.get("/api/data")
        setName(response.data.name)
        setLine(response.data.line)
        setIcon(response.data.icon)
        setEmail(response.data.email)
        setDescription(response.data.description)
      }catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    dataPage()
  }, [])

  return (
    <>
      <Header user={{ name: name, icon: icon,line:line }} />
      <HeroSection user={{ name: name, icon: icon,email:email,description:description }} />
    </>
  )
}

export default App
