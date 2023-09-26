import { useAuth0 } from "@auth0/auth0-react"

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className={styles.loggedContainer}>
        <h1>{user.name}</h1>
        <h2>{user.email}</h2>
        <img src={user.picture} alt={user.name} />
      </div>
    )
  )
}

export default Profile