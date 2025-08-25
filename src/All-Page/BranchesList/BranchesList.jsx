import React from "react";
import useAxiosSecure from "../../CustomHooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import ProfileCard from "./Components/ProfileCard";

const BranchesList = () => {
  const axiosSecure = useAxiosSecure();
  const {
    isPending,
    isError,
    data: allUsers,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["allUser"],
    queryFn: async () =>
      await axiosSecure
        .get("/allUserInfo")
        .then((res) => {
          console.log("got user info from usersCollection");
          return res.data;
        })
        .catch((err) =>
          console.log("error getting data from usersCollection:", err)
        ),
  });
  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  if (isLoading) {
    return <span>Loading ...</span>;
  }
  console.log(allUsers);
  return (
    <div class="bg-gradient-to-br from-gray-950 via-gray-900 to-indigo-950 p-6">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allUsers.map((user) => (
          <ProfileCard user={user}></ProfileCard>
        ))}
      </div>
    </div>
  );
};

export default BranchesList;
