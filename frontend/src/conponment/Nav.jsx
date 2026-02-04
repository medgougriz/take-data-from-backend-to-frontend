export default function Nav({user}) {
    return(
        <nav >
            <ul style={{display:"flex",gap:"20px",listStyleType:"none"}}>
                <li><a href={user}>Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    )
} 