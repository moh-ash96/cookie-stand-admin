import Head from "../components/Head";
import Header from "../components/Header";
import { useState } from "react";
import userName from "./index"

export default function overview() {
    const [title, setTitle] = useState('Overview')
    const [link, setLink] = useState('/')
    const [anchorTitle, setAnchorTitle] = useState('Return to Main Page')
    // const [username, setUserName] =useState(userName)
    return (
        <div>
            <Head title={title} />
            <div className="w-screen h-screen bg-green-100 " >
                <Header link={link} anchorTitle={anchorTitle} header={title} />
            </div>

        </div>
    )
    
}