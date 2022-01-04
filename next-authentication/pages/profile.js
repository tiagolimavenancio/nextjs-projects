import { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((u) => {
        console.log("User: ", u);
        setUser(u);
      })
      .catch((err) => setUser(null));
  }, []);

  return (
    <div>
      {user && <h1>Welcome, {user.username}</h1>}
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(Profile);
