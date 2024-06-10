import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

const modules = import.meta.glob('/src/pages/**/[a-z[]*.tsx', { eager: true })

const pages = Object.keys(modules)
  .filter(
    (key) =>
      !key.includes('/src/pages/index') && !key.includes('/src/pages/not-found')
  )
  .map((key) => {
    const path = key
      .replace(/\/src\/pages|app|index|\.tsx$/g, '')
      .replace(/\[\.{3}.+\]/, '*')

    const compPath =
      path[path.length - 1] === '/' ? path.substring(0, path.length - 1) : path

    return {
      path: path.replace(/\[(.+)\]/, ':$1'),
      Component: React.lazy(
        () => import(/* @vite-ignore */ `../pages${compPath}`)
      )
    }
  })

const routes = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        Component: React.lazy(() => import('@/pages'))
      },
      ...pages
    ]
  },
  {
    path: '*',
    Component: React.lazy(() => import('@/pages/not-found'))
  }
])

export default routes
