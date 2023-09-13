"use client"

import { signIn, signOut } from "next-auth/react"
import Link from "next/link"

export const LoginButton = () => {
  return (
    <button
      className="mr-2 border border-black px-2 py-1 rounded-lg hover:bg-white"
      onClick={() => signIn()}
    >
      Sign in
    </button>
  )
}

export const RegisterButton = () => {
  return (
    <Link href="/register" className="mr-2 hover:underline">
      Register
    </Link>
  )
}

export const LogoutButton = () => {
  return (
    <button
      className="mr-2 border border-black px-2 py-1 rounded-lg hover:bg-white"
      onClick={() => signOut()}
    >
      Sign Out
    </button>
  )
}

export const ProfileButton = () => {
  return (
    <Link href="/profile" className="mr-2 hover:underline">
      Profile
    </Link>
  )
}
