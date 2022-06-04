import React from "react";
import { useQuery, gql } from "@apollo/client";
import "./CharacterList.css";
import { useCharacters } from "../hooks/useCharacters";
import { Link } from "react-router-dom";

export const CharacterList = () => {
  const { error, data, loading } = useCharacters();

  console.log({ error, loading, data });

  if (loading) return <div>Lading...</div>;
  if (error) return <div>Sometung wen wong</div>;

  return (
    <div className="CharacterList">
      {data.characters.results.map((character, index) => {
        return (
          <Link to={`/${character.id}`} key={index}>
            <img src={character.image} />
            <h3>{character.name}</h3>
          </Link>
        );
      })}
    </div>
  );
};
