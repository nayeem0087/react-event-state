import './UserCard.css'
export default function UserCard({user}){
    return (
        <div className="user">
            <h4>Name: {user.name}</h4>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
        </div>
    )
}