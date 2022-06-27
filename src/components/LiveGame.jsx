import React, { useState, useEffect } from "react";

export default function LiveGame({ currentgame }) {
  return (
    <>
      <div>Live Game</div>
      <div>
        {currentgame.gameMode}
        {currentgame.participants && currentgame.participants.map((player) => {
          return (
            <div>
              {"player: "} {player.summonerName}
              {"champ ID: "} {player.championId}
            </div>
          );
        })}
      </div>
    </>
  );
}
