import Head from '../components/Head'
import Header from '../components/Header'
import Main from '../components/main'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Home() {

  const [title, setTitle] = useState('Cookie Stand Admin')
  const [branch, setBranch] = useState('0')
  const [link, setLink] = useState('/overview')
  const [anchorTitle, setAnchorTitle] = useState('Overview')

  
  return (
    <div className="flex flex-col items-center justify-center w-full h-full overflow-x-hidden text-2xl bg-green-100 ">
      <Head title={title}/>
      <div className="w-screen h-screen bg-green-100 " >
        <Header header={title} link={link} anchorTitle={anchorTitle}/>
        <Main title={title} setBranch={setBranch}></Main>
        <Footer branch={branch}/>
      </div>
    </div>
  )
}
