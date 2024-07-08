import { Link } from "react-router-dom";

const CharacterByHero = ({ alter_ego, characters }) => {
  // if (alter_ego === characters) return <></>;
  // return <p>{characters}</p>;
  return alter_ego === characters ? <></> : <p>{characters}</p>;
};
export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImageurl = `/assets/heroes/${id}.jpg`;
  const characterBy = <p>{characters}</p>;
  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4 ">
            <img src={heroImageurl} className="card-img" alt={superhero} />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>
              {/* 3 variantes para que no se repitan los actores en un mismo personaje
              {alter_ego !== characters && characterBy}
              {alter_ego !== characters && <p>{characters}</p>} */}
              <CharacterByHero alter_ego={alter_ego} characters={characters} />
              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>
              <Link to={`/hero/${id}`}>More...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
