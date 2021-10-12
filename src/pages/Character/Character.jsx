import React from "react";
import "./Character.css";
import { useCharacter } from "../../graphQLHooks/useCharacter";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Character = () => {
  const { id } = useParams();
  const { error, loading, data } = useCharacter(id);
  console.log({ error, loading, data });

  if (error) return <h1>Something Went Wrong !!</h1>;

  if (loading) return <h3>Loading Character Data ...</h3>;

  return (
    <>
      <Link to={"/"}>
        <h2>Home</h2>
      </Link>
      <div className="character__card">
        <img
          src={data.character.image}
          alt={data.character.name}
          width={500}
          height={500}
        />
        <div className="character__content">
          <h2>{data.character.name}</h2>
          <p>
            {data.character.species} / {data.character.gender}
          </p>
          <div className="character__episode">
            <h3>List of Episodes</h3>
            <ol>
              {data.character.episode.map((ep) => {
                return (
                  <li key={ep.episode}>
                    {ep.name} ({ep.episode})
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Character;
