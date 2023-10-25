import React from "react";
import { useLoaderData, useParams } from "react-router";
const users = [
  {
    id: 1,
    name: "Furkan",
  },
  {
    id: 2,
    name: "Tuğrul",
  },
];
function User() {
  const { id } = useParams();

  return <div>{id}</div>;
}

export default User;
