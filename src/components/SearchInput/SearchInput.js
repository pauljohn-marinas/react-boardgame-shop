import React from "react";
import "./SearchInput.css";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function SearchInput({
  games,
  filter,
  handleSearch,
  handlePlayers,
  handleTime,
}) {
  const filteredPlayers = [
    ...new Map(games.map((game) => [game.players, game])).values(),
  ];
  const filteredTime = [
    ...new Map(games.map((game) => [game.time, game])).values(),
  ];

  return (
    <div className="search-input d-flex align-center">
      <div className="input-container d-flex align-center">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search ..."
          value={filter.search}
          onChange={handleSearch}
        />
      </div>
      <div className="select-container mr-2">
        <select
          className="first-child"
          value={filter.time}
          onChange={handleTime}
        >
          <option value="">Playing Time </option>
          {filteredTime.map((game, id) => (
            <option key={id} value={game.time}>
              {game.time}
            </option>
          ))}
        </select>
        <ArrowDropDownIcon />
      </div>
      <div className="select-container">
        <select value={filter.no_players} onChange={handlePlayers}>
          <option value="">Number of Players</option>
          {filteredPlayers.map((game, id) => (
            <option key={id} value={game.players}>
              {game.players}
            </option>
          ))}
        </select>
        <ArrowDropDownIcon />
      </div>
    </div>
  );
}

export default SearchInput;
