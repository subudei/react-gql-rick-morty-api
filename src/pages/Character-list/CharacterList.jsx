import React from "react";
import "./CharacterList.css";
import { Link } from "react-router-dom";
import { useCharacters } from "../../graphQLHooks/useCharacters";

const CharacterList = () => {
  const { error, loading, data } = useCharacters();

  //console.log({ error, loading, data });

  //   .error

  //   .loading

  //   .data
  if (loading) return <h3>Loading...</h3>;

  if (error) return <h1>Something went wrong!!!</h1>;

  return (
    <div className="character__card">
      {data.characters.results.map((character) => {
        return (
          <Link to={`/${character.id}`} key={character.id}>
            <img src={character.image} alt={character.name} />
            <h4>{character.name}</h4>
          </Link>
        );
      })}
    </div>
  );
};

export default CharacterList;
