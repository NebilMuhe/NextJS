import Link from "next/link";
import React from "react";
import { sort } from "fast-sort";

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
}

const UsersTable = async ({ sortOrder }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    // cache: "no-store",
    // next: {
    //     revalidate: 10
    // }
  });
  const users: User[] = await res.json();
  const sortedValue = sort(users).asc(
    sortOrder === "email" ? (u) => u.email : (u) => u.name
  );

  return (
    <div>
      <table className="table tabs-bordered">
        <thead>
          <tr>
            <th>
              <Link href="?sortOrder=name">Name</Link>
            </th>
            <th>
              <Link href="?sortOrder=email">Email</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedValue.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
