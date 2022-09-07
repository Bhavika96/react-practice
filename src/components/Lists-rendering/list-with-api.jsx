import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const List_API = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response);
        setListData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <ul>
        {listData.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </>
  );
};
export default List_API;
