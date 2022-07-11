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
                      <div className="score">Score:{player.kills}/{player.deaths}/{player.assists} : KDA :{Math.floor(player.challenges.kda)}</div>
                      <div>damage per minute: {Math.floor(player.challenges.damagePerMinute)}</div>
                      <div>skillshots hit: {player.challenges.skillshotsHit}</div>
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
