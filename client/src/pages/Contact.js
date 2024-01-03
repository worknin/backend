import React, { useState, useEffect } from "react";

export default function Contact() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <>
      <div className="container">
        <h1>Contact</h1>

        {typeof backendData.users === "undefined" ? (
          <p>Loading...</p>
        ) : (
          backendData.users.map((user, i) => <p key={i}>{user}</p>)
        )}
      </div>
    </>
  );
}
