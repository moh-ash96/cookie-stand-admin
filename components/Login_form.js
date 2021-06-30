import { useState } from "react"

export default function LoginForm(props) {
    
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [loggedIn, setLoggedIn] = useState(false)
    
    function login(){
        props.state(username, password)
    }

    function user(event){
        console.log(event);
        setUserName(event.target.value)
    }

    function pass(event) {
        setPassword(event.target.value)
        
    }

    return (
    // <form className="flex flex-col w-full bg-green-300">
    //     <label for="username">USER NAME</label>
    //     <input type="text" name="username" id="username" placeholder="User Name"></input>
    //     <label for="password">PASSWORD</label>
    //     <input type="password" name="password" id="password" placeholder="password"></input>
    //     <button className="bg-green-700">SIGN IN</button>
    // </form>
    <div className="w-full max-w-xs">
        <form  className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700" for="username">
                        USER NAME
                    </label>
                    <input name="username" className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" onChange={user} />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-bold text-gray-700" for="password">
                        PASSWORD
                    </label>
                    <input name="password" className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" onChange={pass} />
                    <p className="text-xs italic text-red-500">Please choose a password.</p>
                </div>
                <div className="flex items-center justify-between">
                    <button type="submit" className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="button" onClick={login}>
                        Sign In
                    </button>
                </div>
         </form>
    </div>
    )
}