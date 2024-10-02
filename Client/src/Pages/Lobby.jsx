import { useAuth } from '../context/AuthContext'


const Lobby = () => {

  const { logout, user } = useAuth() 
  
  return (
    <div onClick={logout}>
      LoBYY
      <h1>Bienbenido a tu lista de confianza {user.username}</h1>
    </div>
  )
}

export default Lobby
