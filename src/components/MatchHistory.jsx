import React, { useState, useEffect } from "react";

export default function MatchHistory({ history }) {
  return (
    <>
      {history.length > 0 ? (
        history.map((game) => {
          return (
            <div key={game.info.gameId}>
              <div>{game.info.gameMode}</div>
              <div>
                {game.info.participants.map((player) => {
                  return (
                    <div key={player.summonerName}>
                      <div className="player">{player.summonerName}</div>
                      <div className="champ">{player.championName}</div>
                      ---------------------
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })
      ) : (
        <div>...Loading</div>
      )}
    </>
  );
}
