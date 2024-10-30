import { NavLink } from 'react-router-dom'
import viteLogo from '/vite.svg'
import { useState } from 'react'
import { Input } from 'postcss'

function Header() {

  const [menuState, setMenuState] = useState(false)

  return (
    <header className='flex justify-between bg-slate-500 rounded shadow-lg mt-2 md:px-8 items-center p-4 mx-4'>
        
        {/* {menuState? <div>
          <form action="">
            <label htmlFor="name">Name</label>
            <Input type="text" id="name" />
            <label htmlFor="password">Password</label>
            <Input type="password" id="password" />
            <label htmlFor="confirm-password">Confirm Password</label>
            <Input type="password" id="confirm-password" />
          </form>
        </div>:""} */}

        <img src={viteLogo} alt='Vite Logo' />
        <nav className='flex gap-4 font-bold lg:font-mono'>

          <NavLink to="/" className={({isActive}) => isActive ? 'underline decoration-sky-950':''}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'underline decoration-sky-950':''}>About</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'underline decoration-sky-950':''}>Contact</NavLink>
        </nav>
        <button className='bg-slate-300 px-4 py-2 rounded font-bold' onClick={() => setMenuState(!menuState)}>Log In</button>
      </header>
    
  )
}

export default Header