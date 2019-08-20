import React from "react";
import Film from "./Film";

const Character = props => {
  return (
    <div>
      <li>{props.character.name}</li>
      <p>{props.character.height}</p>
      <p>{props.character.mass}</p>
      <p>{props.character.hair_color}</p>
      <p>{props.character.skin_color}</p>
      <ul>
        {this.props.films.map(films => {
          return <Film key={films.title} film={films} />;
        })}
      </ul>
    </div>
  );
};

export default Character;
