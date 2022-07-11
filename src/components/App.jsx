import React, { useState, useEffect } from "react";
import axios from "axios";
import AccountLookup from "./AccountLookup.jsx";
import LiveGame from "./LiveGame.jsx";
import MatchHistory from "./MatchHistory.jsx";

const App = () => {
  const [summoner, setSummoner] = useState({});
  const [account, setAccount] = useState({});
  const [live, setLive] = useState({});
  const [matchHistoryIds, setMatchHistoryIds] = useState([]);
  const [matchHistoryDetails, setMatchHistoryDetails] = useState([]);

  useEffect(() => {
    if (summoner.name) {
      getAccount();
    }
  }, [summoner]);

  useEffect(() => {
    console.log("getting live game");
    if (account.id) {
      getLiveGame();
    }
  }, [account.id]);

  //* get account and set the summoner id
  async function getAccount() {
    try {
      const { data } = await axios.get("/api/accountBySummonerName", {
        params: { name: summoner.name, region: summoner.region },
      });
      setAccount(data);
    } catch (err) {
      console.log(err);
    }
  }

  async function getLiveGame() {
    try {
      const { data } = await axios.get("/api/liveMatch", {
        params: {sumId: account.id, region: summoner.region}
      });
      setLive(data);
    } catch (err) {
      console.log(err);
    }
  }

  async function getMatchHistoryByPuuid() {
    try {
      const { data } = await axios.get("/api/matchHistoryByPuuid", {
        params: { puuid: account.puuid, region: summoner.region },
      });
      setMatchHistoryIds(data)
      getAllMatchsByMatchId(data)
    } catch (err) {
      console.log(err)
    }
  }

  async function getSingleMatchByMatchId(matchId) {
    try {
      const { data } = await axios.get("/api/singleMatch", {
        params: { id: matchId },
      });
      return data;
    } catch (err) {
      console.log(err)
    }
  }

  async function getAllMatchsByMatchId(IdArray) {
    try {
      const matchs = [];
      IdArray.map(match => {
        console.log(match)
        matchs.push(getSingleMatchByMatchId(match))
      })
      const results = await Promise.all(matchs)
      setMatchHistoryDetails(results)

    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <h3>Lost in Champ Select?</h3>
      {'Live Game'}
      <AccountLookup setsummoner={setSummoner} />
      {account.name && (
        <div>
          {account.name} {"lvl: "} {account.summonerLevel}
        </div>
      )}
      {account.id && <LiveGame currentgame={live} />}
      {account.id && <button onClick={getMatchHistoryByPuuid}>match history</button>}
      {matchHistoryIds.length > 0 && <MatchHistory history={matchHistoryDetails}/>}
    </>
  );
};

export default App;
