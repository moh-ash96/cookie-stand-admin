import Head from '../components/Head'
import Header from '../components/Header'
import Main from '../components/main'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Home() {

  const [title, setTitle] = useState('Cookie Stand Admin')
  const [location, setLocation] = useState()
  const [min, setMin] = useState()
  const [max, setMax] = useState()
  const [avg, setAvg] = useState()

  function createBranch(event) {
    event.preventDefault()
    setLocation(event.target.location.value)
    setMin(event.target.min.value)
    setMax(event.target.max.value)
    setAvg(event.target.avg.value)

    
  }
  return (
    <div className="flex flex-col items-center justify-center w-full h-full text-2xl">
      <Head title={title}/>
      <div className="container h-screen bg-green-100" >
        <Header header={title}/>
        <Main title={title} location={location} min={min} max={max} avg={avg} handler={createBranch}></Main>
      </div>
        <Footer/>
    </div>
  )
}
