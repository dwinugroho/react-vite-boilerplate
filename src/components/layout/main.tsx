import React from 'react'

import { Navbar } from './navbar'

export const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <main className='flex-1'>{children}</main>
    </div>
  )
}
