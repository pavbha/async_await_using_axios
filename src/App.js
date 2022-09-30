import "./styles.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [value, SetValue] = useState([]);
  useEffect(() => {
    async function data() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log(response);
      SetValue(response.data);
    }
    data();
  });
  return (
    <div className="App">
      {value.map((post, id) => {
        return (
          // <card >
          <div key={id}>
            <h2 style={{ marginLeft: "10px" }}> {post.title}</h2>

            <p style={{ marginLeft: "30px", color: "blue" }}>{post.body}</p>
          </div>
          // </card>
        );
      })}
    </div>
  );
}
