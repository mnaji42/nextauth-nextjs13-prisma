import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import { RegisterForm } from "./form"

export default async function RegisterPage() {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect("/")
  }
  return (
    <div className="flex h-[70vh] justify-center items-center">
      <div>
        <h1 className="text-center mb-4 text-xl">Register</h1>
        <RegisterForm />
      </div>
    </div>
  )
}
