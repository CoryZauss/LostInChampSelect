import React, { useState, useEffect } from "react";

export default function LiveGame({ currentgame }) {
  return (
    <>
      {typeof currentgame === "string" ? (
        <div>{currentgame}</div>
      ) : (
        <div>
          <div>
            {currentgame.gameMode}
            {currentgame.participants &&
              currentgame.participants.map((player) => {
                return (
                  <div key={player.summonerName}>
                    {"player: "} {player.summonerName}
                    {"  champ ID: "} {player.championId}
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
}
