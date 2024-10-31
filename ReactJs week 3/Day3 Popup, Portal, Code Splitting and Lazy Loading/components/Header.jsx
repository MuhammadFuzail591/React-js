import { NavLink } from 'react-router-dom'
import viteLogo from '/vite.svg'
import { useState } from 'react'
import Modal from './Modal'

function Header() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className='flex justify-between bg-slate-500 rounded shadow-lg mt-2 md:px-8 p-4 mx-4'>

        <img src={viteLogo} alt='Vite Logo' />
        <nav className='flex gap-4 font-bold lg:font-mono items-center'>

          <NavLink to="/" className={({isActive}) => isActive ? 'underline decoration-sky-950':''}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'underline decoration-sky-950':''}>About</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'underline decoration-sky-950':''}>Contact</NavLink>
          <div>
            <button className='bg-slate-300 px-4 py-2 rounded font-bold' onClick={() => setIsOpen(!isOpen)}>
              Log In
            </button>
            <Modal isOpen={isOpen} setIsOpen = {setIsOpen} header={<div className="text-xl font-bold">Sign In</div>} footer={<div className="flex justify-end gap-4">
          <button className="rounded-md bg-gray-300 px-6 py-2 font-semibold hover:bg-gray-400/80 active:bg-gray-400/60" onClick={() => setIsOpen(false)}>
            Cancel
          </button>
          <button className="rounded-md bg-blue-300 px-6 py-2 font-semibold hover:bg-blue-400/80 active:bg-blue-400/60">
            Sign In
          </button>
        </div>}>
            <div className="-mx-4 my-3 border-y px-4 py-4 flex flex-wrap gap-4">
          <input
            placeholder="Username"
            className="grow rounded border border-gray-600 px-2 py-1"
            type="text"
          />
          <input
            placeholder="Password"
            className="grow rounded border border-gray-600 px-2 py-1"
            type="password"
          />
          </div>
            </Modal>
          </div>
        </nav>
      </header>
    
  )
}

export default Header