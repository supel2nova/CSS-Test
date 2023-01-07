import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [pics, setPics] = useState([]);

  const fetchData = () => {
    axios
      .get("https://picsum.photos/v2/list")
      .then((response) => {
        setPics(response.data);
      })
      .catch((err) => alert(err));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="header">
        <p>Everyone photo</p>
        <p>
          <small> View all 2,724,700 </small>
        </p>
      </div>
      <div className="container-pics">
        {pics.map((pic, index) => (
          <div className="box" key={index}>
            <img src={pic.download_url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
