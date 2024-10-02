"use client";
import { gql, useQuery } from "@apollo/client";
import React from "react";

const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      name
      capital
      currency
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Countries</h1>
      <ul>
        {data.countries.map((country: any) => (
          <li key={country.code}>
            <strong>{country.name}</strong> (Capital: {country.capital},
            Currency: {country.currency})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
