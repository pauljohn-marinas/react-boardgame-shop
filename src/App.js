import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import BoardGame from "./components/BoardGame/BoardGame";
import SearchInput from "./components/SearchInput/SearchInput";

function App() {
  const [games, setGames] = useState([
    {
      name: "Scrabble",
      image:
        "https://cmsassets.rationalcdn.com/blog/2019/03/second-steps-scrabble.png?fit=inside|800:700",
      players: "2 - 4 players",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus accumsan interdum.",
      time: "40 - 50 minutes",
    },
    {
      name: "Chess",
      image:
        "https://thumbs-prod.si-cdn.com/Ivddq7tvlApRi3JllICM0tEzyks=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/5e/20/5e20f146-9fe0-4937-9068-2ed746676d70/10-a-game-designer.jpg",
      players: "2 players",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus accumsan interdum.",
      time: "10 - 60 minutes",
    },
    {
      name: "Draughts",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/f1/CheckersStandard.jpg",
      players: "2 players",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus accumsan interdum.",
      time: "30 minutes - 2 hours",
    },
    {
      name: "Connect Four",
      image:
        "https://upload.wikimedia.org/wikipedia/en/7/79/Connect_4_Board_and_Box.jpg",
      players: "2 players",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus accumsan interdum.",
      time: "1 - 10 minutes",
    },
    {
      name: "Axis & Allies",
      image:
        "https://upload.wikimedia.org/wikipedia/en/5/57/AxisAndAlliesBox.jpg",
      players: "2 - 5 players",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus accumsan interdum.",
      time: "2 - 10+ hours",
    },
    {
      name: "Monopoly",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/78/Monopoly_board_on_white_bg.jpg",
      players: "2 - 8 players",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus accumsan interdum.",
      time: "20 minutes - 3 hours",
    },
    {
      name: "Backgammon",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/30/Backgammon_lg.png",
      players: "2 players",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus accumsan interdum.",
      time: "10 - 60 minutes",
    },
    {
      name: "Go",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/2/2a/FloorGoban.JPG",
      players: "2 players",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus accumsan interdum.",
      time: "10 - 60 minutes",
    },
  ]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [filter, setFilter] = useState({
    search: "",
    no_players: "",
    time: "",
  });
  useEffect(() => {
    setFilteredGames(
      games.filter((game) => {
        return (
          game.name.toLowerCase().startsWith(filter.search.toLowerCase()) &&
          game.time.includes(filter.time) &&
          game.players.includes(filter.no_players)
        );
      })
    );
  }, [filter, games]);
  const handleSearch = (e) => {
    const value = e.target.value;
    setFilter((prevState) => ({
      ...prevState,
      search: value,
    }));
  };
  const handlePlayers = (e) => {
    const value = e.target.value;
    setFilter((prevState) => ({
      ...prevState,
      no_players: value,
    }));
  };
  const handleTime = (e) => {
    const value = e.target.value;
    setFilter((prevState) => ({
      ...prevState,
      time: value,
    }));
  };
  return (
    <div className="content">
      <NavBar />
      <div className="container">
        <div className="filter">
          <SearchInput
            games={games}
            filter={filter}
            handleSearch={handleSearch}
            handlePlayers={handlePlayers}
            handleTime={handleTime}
          />
        </div>
        <div className="board-games">
          {filteredGames.map((game, id) => (
            <BoardGame
              key={id}
              name={game.name}
              image={game.image}
              description={game.description}
              players={game.players}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
