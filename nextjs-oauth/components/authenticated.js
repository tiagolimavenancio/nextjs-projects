import { signOut } from "next-auth/react";

export default function Authenticated({ user }) {
  return (
    <div>
      <p>You are authenticated {user.email}</p>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}
