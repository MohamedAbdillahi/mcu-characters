import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Badge from "./Badge";
import Layout from "./Layout";

const CharacterDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const location = useLocation();
  useEffect(() => {
    fetch(
      `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=6a85c8d6f249a662ea39e8012ee02359`
    )
      .then((res) => res.json())
      .then((res) => {
        setCharacter(res.data.results[0]);
        console.log(res.data.results[0]);
      })
      .catch((err) => console.log(err));
  }, [location]);


  return (
    <Layout>
      <div>
        <button
          onClick={() => navigate("/", { replace: true })}
          className="bg-slate-600 text-white px-4 py-1 rounded-md"
        >
          Back
        </button>
      </div>
      <div className="mt-8">
        <div className="text-gray-700 mb-6">
          <h1>
            <span className="font-bold mr-2 ">Name:</span>
            {character?.name}
          </h1>
          <h2>
            <span className="font-bold mr-2 ">Description:</span>{" "}
            {character?.description?.length === 0
              ? "No description found"
              : character?.description}
          </h2>
        </div>
        <div className="w-full lg:w-[750px] lg:h-[750px] overflow-hidden mx-auto mb-12">
          <img
            src={`${character.thumbnail?.path}.${character.thumbnail?.extension}`}
            className={"object-cover lg:w-[750px] lg:h-[750px]"}
            alt={character?.name}
          />
        </div>
        <div className="text-gray-700 mb-24">
          {character?.stories?.items?.length !== 0 && (
            <div className="mb-8">
              <h1 className="font-bold text-xl mb-4">Stories:</h1>
              {character?.stories?.items?.map((el) => (
                <Badge href={"#"} text={el.name} />
              ))}
            </div>
          )}
          {character?.events?.items?.length !== 0 && (
            <div className="mb-8">
              <h1 className="font-bold text-xl mb-4">Events:</h1>
              {character?.events?.items?.map((el) => (
                <Badge href={"#"} text={el.name} />
              ))}
            </div>
          )}

          {character?.series?.items?.length !== 0 && (
            <div className="mb-8">
              <h1 className="font-bold text-xl mb-4">Series:</h1>
              {character?.series?.items?.map((el) => (
                <Badge href={"#"} text={el.name} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CharacterDetails;
