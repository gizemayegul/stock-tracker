import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
const API_URL = import.meta.env.VITE_SERVER_URL;
console.log(API_URL);

function App() {
  const [data, setData] = useState<string>("");

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(API_URL);
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <>
      <h1>{data}</h1>
    </>
  );
}

export default App;
