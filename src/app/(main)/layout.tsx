import React from 'react'
import Provider from '../provider'
import Navbar from '@/components/Navbar'

type Props = {
    children:React.ReactNode
}

function Layout({
    children
}: Props) {
  return (
    <Provider>
        <Navbar/>
        {children}
    </Provider>
  )
}

export default Layout