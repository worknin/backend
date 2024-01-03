import React, { useState, useEffect } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  /*useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);*/

  const submtFormToNotion = () => {
    console.log(name + ", " + phone);
    fetch("http://localhost:4000/submitFormToNotion", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        phone: phone,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success! ", data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container">
        <h1>Notion</h1>

        <p>Name</p>
        <input
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
        <p>Phone</p>
        <input
          type="text"
          id="phone"
          onChange={(e) => setPhone(e.target.value)}
        />

        <button onClick={submtFormToNotion}>Submit</button>
      </div>
    </>
  );
}
