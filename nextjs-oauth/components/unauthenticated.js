import { signIn } from "next-auth/react";

export default function Unauthenticated() {
  return (
    <div>
      <p>You are not authenticated</p>
      <button onClick={signIn}>Sign In</button>
    </div>
  );
}
