export default function User({ user }) {
    return(
        <div style={{display:"flex",justifyContent:"end",flexDirection:"column",alignItems:"center",gap:"10px"}}>
            <img src={user.icon} alt={user.name} height={"20px"} width={"20px"} />
            <h2>{user.name}</h2>
        </div>
    )
}