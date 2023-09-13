// ----------------------- Use server side component -------------------------

import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"

type User = {
  id: number
  name: string
  email: string
}

export default async function Profile() {
  const session = await getServerSession(authOptions)

  // if (!session) {
  //   redirect("/api/auth/signin")
  // }

  const users: User[] = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  ).then((res) => res.json())

  return (
    <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
      <div className={"flex flex-wrap gap-5"}>
        {users.map((user) => (
          <div
            key={user.id}
            style={{ border: "1px solid #ccc", textAlign: "center" }}
            className="border border-solid border-slate-500 w-60"
          >
            <img
              src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
              alt={user.name}
              className="w-full"
            />
            <h3>{user.name}</h3>
          </div>
        ))}
      </div>
    </main>
  )
}

// ----------------------- Use client side component -------------------------

// "use client"

// import { redirect } from "next/navigation"
// import { useSession } from "next-auth/react"
// import { cache, use } from "react"

// type User = {
//   id: number
//   name: string
//   email: string
// }

// const getUsers = cache(() =>
//   fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json())
// )

// export default function Profile() {
//   const { status } = useSession({
//     required: true,
//     // onUnauthenticated() {
//     //   redirect("/api/auth/signin")
//     // },
//   })

//   if (status === "loading") {
//     return <p>Loading....</p>
//   }

//   let users = use<User[]>(getUsers())

//   return (
//     <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
//       <div className={"flex flex-wrap gap-5"}>
//         {users.map((user) => (
//           <div
//             key={user.id}
//             style={{ border: "1px solid #ccc", textAlign: "center" }}
//             className="border border-solid border-slate-500 w-60"
//           >
//             <img
//               src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
//               alt={user.name}
//               className="w-full"
//             />
//             <h3>{user.name}</h3>
//           </div>
//         ))}
//       </div>
//     </main>
//   )
// }
