import { Moon, Sun } from 'lucide-react'
import React from 'react'

import { Button } from '@/components/ui/button'

import { useTheme } from './theme-provider'

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  return (
    <Button
      variant='ghost'
      className='flex h-9 w-9 items-center justify-center p-0'
      type='button'
      aria-label='Toggle theme'
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
      }}
    >
      {mounted && theme === 'dark' && <Sun size={20} />}
      {mounted && theme === 'light' && <Moon size={20} />}
    </Button>
  )
}

export { ThemeSwitcher }
