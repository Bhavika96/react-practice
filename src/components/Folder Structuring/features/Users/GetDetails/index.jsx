import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserDetails } from "./routes";

const UserDetails = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const usersResponse = await getUserDetails(id);
      setUser(usersResponse);
    })();
  }, []);

  return (
    <>
      <p>{user.name}</p>
    </>
  );
};

export default UserDetails;