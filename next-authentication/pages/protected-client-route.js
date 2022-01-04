import { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { useRouter } from "next/router";

function ProtectedClient() {
  const [user, setUser] = useState();
  const router = useRouter();

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((u) => setUser(u))
      // if there is no authenticated user, redirect to profile page
      .catch(() => router.push("/"));
  }, []);

  if (!user) return null;

  return <h1>Hello {user.username} from client route!</h1>;
}

export default ProtectedClient;
