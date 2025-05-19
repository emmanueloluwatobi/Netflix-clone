import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  // Scroll function
  const cardsRef = useRef();
  // Api from TMDB website(Movie List >>> Now playing)
  const options = {
    method: "GET",  
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzgzMWVhN2I0ODI2NTc1YjliODExOTk2MGIwMDVjOSIsIm5iZiI6MTczMzc1MDk0Ni45OSwic3ViIjoiNjc1NmYwYTJkN2IxNjQzNGE4OWY2ZGE4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.UP8Cos-4jhVmbcZiQ5ouLXtU5z9XgkO0EnhYYaJT1g0",
    },
  };

  // Scroll function cont...
  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));
    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);
  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/netflixifyclone/player/${card.id}`} key={index} className="card">
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
              />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
