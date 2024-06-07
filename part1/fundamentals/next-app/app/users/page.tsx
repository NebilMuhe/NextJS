import React from "react";
import UsersTable from "./UsersTable";

interface Props {
  searchParams: { sortOrder: string };
}

const UserPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>Users</h1>
      <UsersTable sortOrder={sortOrder} />
    </>
  );
};

export default UserPage;
