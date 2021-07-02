import Link from 'next/link'

export default(
    function Header(props) {
        return(
            <header className= "flex justify-between px-10 py-10 bg-green-400 h-15 ">
            <h1 className="px-3 text-5xl font-bold">{props.header}</h1>
            <nav className="flex flex-row justify-around">
                {
                    props.user&&
                    <h2 className="p-3 mr-3 bg-green-100 rounded-lg" >{props.user}</h2>
                }

                <Link href={props.link}>
                    <a className="p-4 bg-green-100 rounded-lg" >{props.anchorTitle}</a>
                </Link>

            </nav>

            </header>)
    
    }
)
