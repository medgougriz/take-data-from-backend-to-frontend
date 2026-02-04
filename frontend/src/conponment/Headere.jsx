import Nav from "./Nav";
import User from "./User";

export default function Header({ user }) {
  return (
    <header style={{backgroundColor:"gray"}}>
        <Nav user={user.line} />
        <User user={{ name: user.name, icon: user.icon }} />
    </header>
  )
}