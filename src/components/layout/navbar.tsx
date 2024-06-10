import { SiGithub } from '@icons-pack/react-simple-icons'
import React from 'react'

import { KrafanLogo } from '../svg'
import { ThemeSwitcher } from '../theme-switcher'

export const Navbar: React.FC = () => {
  return (
    <nav className='container flex items-center justify-between py-6'>
      <KrafanLogo />
      <div className='flex items-center gap-6'>
        <ThemeSwitcher />
        <a href='https://github.com/dwinugroho/nextjs-typescript-tailwind'>
          <SiGithub />
        </a>
      </div>
    </nav>
  )
}
