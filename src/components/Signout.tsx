"use client";
import React from 'react'
import { Button } from './ui/button'
import { signOut } from 'next-auth/react'

type Props = {}

function Signout({}: Props) {
  return (
    <Button onClick={() => signOut()} variant="ghost" className="w-full">

                    Sign Out
                    </Button>  )
}

export default Signout