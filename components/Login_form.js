import { useState } from "react"
import Head from "../components/Head"

export default function LoginForm(props) {
    
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    
    function login(){
        props.state(username, password)
    }

    function user(event){
        setUserName(event.target.value)
    }

    function pass(event) {
        setPassword(event.target.value)
        
    }
    
    return (
        <div className="flex self-center justify-center w-full text-xl text-center h-4/6">
            <Head title="Login Page"/>
        <form  className="self-center w-8/12 px-8 pt-8 pb-8 bg-green-200 border border-green-600 rounded shadow-md">
                <div className="mb-4">
                    <label className="block mb-2 font-bold text-gray-700" for="username">
                        USER NAME
                    </label>
                    <input name="username" className="w-full px-3 py-5 leading-tight text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" onChange={user} />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 font-bold text-gray-700" for="password">
                        PASSWORD
                    </label>
                    <input name="password" className="w-full px-3 py-5 mb-3 leading-tight text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" onChange={pass} />
                </div>
                <div className="flex items-center justify-between">
                    <button type="submit" className="w-full px-4 py-5 font-bold text-black bg-green-500 rounded hover:bg-green-800 focus:outline-none focus:shadow-outline" type="button" onClick={login}>
                        Sign In
                    </button>
                </div>
         </form>
    </div>
    )
}
