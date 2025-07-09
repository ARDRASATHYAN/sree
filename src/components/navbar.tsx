'use client'

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export function NavigationMenuDemo() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    // { name: 'Home', path: '#/' },
    { name: 'About', path: '#about' },
     { name: 'Educations', path: '#educations' },
       { name: 'Skills', path: '#skills' },
    { name: 'Projects', path: '#projects' },
     { name: 'Experience', path: '#experience' },
    { name: 'Achievement', path: '#achievement' },
     { name: 'Additionalinfo', path: '#additionalinfo' },
    
    { name: 'Contact', path: '#contact' },
  ]

  return (
    <nav className="w-full px-6 py-4  fixed top-0 left-0 z-20 border-b border-white/10 backdrop-blur-md bg-black/50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold text-cyan-400">SREEVISHNU KP</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg font-medium">
          {navItems.map(({ name, path }) => (
            <li key={name}>
              <Link
                to={path}
                className="relative group text-white"
              >
                {name}
                <span className="absolute left-0 -bottom-1 h-[2px] w-full scale-x-0 origin-left bg-cyan-400 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden mt-4 space-y-4 text-lg font-medium px-2 ">
          {navItems.map(({ name, path }) => (
            <li key={name}>
              <a
                href={path}
                className="relative group text-white block"
                onClick={() => setMenuOpen(false)}
              >
                {name}
                <span className="absolute left-0 -bottom-1 h-[2px] w-full scale-x-0 origin-left bg-cyan-400 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
