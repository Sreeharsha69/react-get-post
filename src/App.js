import React, { useState } from "react";
import axios from "axios";
const App = () => {
  const getDataFromBackend = async () => {
    const response = await axios.post("http://localhost:8081/call");
    console.log(response.data);
    document.getElementById("para").innerHTML = response.data;
  };
  //post request - string
  const data = "Hello";
  const postDataFromFrontend = async () => {
    const response = await axios.post("http://localhost:8081/testpost", {
      data,
    });
    console.log(response.data);
    document.getElementById("para").innerHTML = response.data;
  };
  //get received form

  const postFormFromFrontend = async () => {
    const response = await axios.post("http://localhost:8081/testpost");
    console.log(response.data);
    document.getElementById("para").innerHTML = response.data;
  };
  //post request form
  const [formData, setFormData] = useState(" ");
  const postFormFromFrontend = async () => {
    const response = await axios.post("http://localhost:8081/testpost", {});
    console.log(response.data);
    document.getElementById("para").innerHTML = response.data;
  };
  return (
    <div className="App">
      <button onClick={getDataFromBackend}>get Data</button>
      <p id="para"></p>
      <br />
      <button onClick={postDataFromFrontend}>post Data</button>
      <p id="para"></p>
      <br />

      <form onSubmit={postDataFromFrontend}>
        <input
          type="text"
          name="formData"
          value={FormData}
          onChange={(e) => setFormData(e.target.value)}
        ></input>
        <input type="submit" value="testForm"></input>
      </form>
    </div>
  );
};

export default App;
