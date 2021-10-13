import React, { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";

const GET_CHARACTER_LOCATIONS = gql`
  query GetCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

const Search = () => {
  const [name, setName] = useState("");
  const [getLocations, { error, loading, data, called }] = useLazyQuery(
    GET_CHARACTER_LOCATIONS,
    {
      variables: {
        name,
      },
    }
  );

  // called  ???? new stuff !!!
  console.log({ called, error, loading, data });

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => getLocations()}>Search</button>
      {loading && <h3>Loading ...</h3>}
      {error && <h2 style={{ color: "red" }}>Something went wrong !!</h2>}
      {data && (
        <ul>
          {data.characters.results.map((character) => {
            return (
              <li key={character.location.name + Math.random()}>
                {character.location.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Search;
