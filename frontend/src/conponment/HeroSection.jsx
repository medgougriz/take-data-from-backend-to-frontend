export default function User({ user }) {
    return(
        <div>
            <img src={user.icon} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.description}</p>
        </div>
    )
}