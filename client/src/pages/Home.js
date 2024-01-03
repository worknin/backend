import React, { useEffect } from "react";
import data from "../data/data.json";
import ApiService from "../services/ApiService";

export default function Home() {
  const options = {
    method: "GET",
    url: "https://covid-193.p.rapidapi.com/statistics",
    headers: {
      "X-RapidAPI-Key": "2ef93a6d0emsh8164d1cf626f19dp1c1881jsn52f9e648ad7b",
      "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
    },
  };

  useEffect(() => {
    ApiService.statistic(options).then(function (result) {
      console.log(result.response);
    });
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="text-2xl font-bold ">Home</h1>
        <div>Name : {data.name}</div>
        <div>Email : {data.email}</div>
        <div>Website : {data.website}</div>
        <div>
          <label>Country :</label>
          <select>
            {data.country.map((country) => {
              return (
                <option key={country.id} value={country.id}>
                  {country.name}
                </option>
              );
            })}
          </select>
        </div>
        <button>Button</button>
      </div>
    </>
  );
}
