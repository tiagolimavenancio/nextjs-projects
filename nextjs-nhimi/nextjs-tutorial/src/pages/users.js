import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

function Users({ users }) {
  // const [users, setUsers] = useState([]);

  // const fetchUsers = async () => {
  // const response = await axios.get(
  //   "https://jsonplaceholder.typicode.com/users"
  // );
  //   const data = response.data;

  //   setUsers(data);
  // };

  // console.log({ users });

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  return (
    <div>
      {users.map((user) => (
        <div>
          <Link href="profile/[id]" as={`/profile/${user.id}`}>
            <a>{user.name}</a>
          </Link>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps(context) {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  const data = response.data;

  return {
    props: {
      users: data,
    },
  };
}

export default Users;
