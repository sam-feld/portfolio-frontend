import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
// import { useEffect } from 'react'
// import { useState } from 'react'
// import { getUser } from '../../utils/api'
// import { User } from '../../utils/types'

export default function NavBar() {

    // const [isLoggedIn, setIsLoggedIn] = useState(false)
    // const [user, setUser] = useState<User | null>(null)

    // async function loadUser() {
    //     const user = await getUser(localStorage.getItem('TOKEN')!)
    //     setUser(user)
    // }

    // window.addEventListener('storage', () => {
    //     if (localStorage.getItem('TOKEN')) {
    //         setIsLoggedIn(true)
    //     }
    //     else {
    //         setIsLoggedIn(false)
    //     }
    // })

    // useEffect(() => {
    //     if (localStorage.getItem('TOKEN')) {
    //        setIsLoggedIn(true)
    //     }
    //     else {
    //         setIsLoggedIn(false)
    //     }
    // }, [])

    // useEffect(() => {
    //     if (isLoggedIn) {
    //         loadUser()
    //     }
    //     else {
    //         setUser(null)
    //     }
    // }, [isLoggedIn])

    // function logout() {
    //     localStorage.removeItem('TOKEN')
    //     window.dispatchEvent(new Event("storage"));
    //     setIsLoggedIn(false)
    // }

    // function createNavItems() {
    //     if (!isLoggedIn) {
    //         return (            
    //             <Link className={styles.login} to="/login">Login</Link>
    //         )
    //     }
    //     else if (isLoggedIn && !user) {
    //         return (
    //             <button className={styles.logout} onClick={logout}>Logout</button>
    //         )
    //     }
    //     else {
    //         return (
    //             <>
    //                 <p className={styles.name}>{`${user!.firstName} ${user!.lastName}`}</p>
    //                 <Link className={styles.cart} to="/cart">Cart</Link>
    //                 <button className={styles.logout} onClick={logout}>Logout</button>
    //             </>
    //         )
    //     }
    // }

    type HomeIconProps = {
        className?: string; // optional className prop
      };
      
      const HomeIcon: React.FC<HomeIconProps> = ({ className }) => (
        <svg
          className={className}
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M3 9.75L12 3l9 6.75V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.75z" />
        </svg>
      );

    return (
        <div className={styles.navbar}>
            <Link to="/"> <HomeIcon className={styles.logo} /> </Link>
            <div className={styles['nav-items-container']}>
                {/* { createNavItems() } - May add later */}
            </div>
        </div>
    )
}