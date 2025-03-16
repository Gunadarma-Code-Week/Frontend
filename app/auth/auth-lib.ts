// import { cookies } from "next/headers";

// export default async function logout() {
//   const sessionCookie = await cookies().get("session");

//   if (sessionCookie) {
//     // Set the cookie with an expired date to effectively remove it
//     await cookies().set("session", "", {
//       path: "/", // Make sure the cookie is removed from the correct path
//       expires: new Date(0), // Expire the cookie immediately
//     });

//     console.log("Session cookie removed");
//   } else {
//     console.log("No session cookie to remove");
//   }
// }
