import React, { useState, useEffect } from "react";
import axios from "axios";
import AccountLookup from "./AccountLookup.jsx";
import LiveGame from "./LiveGame.jsx"

const App = () => {
  const [summoner, setSummoner] = useState({});
  const [account, setAccount] = useState({});
  const [live, setLive] = useState({});

  useEffect(() => {
    if (summoner.name) {
      getAccount();
    }
  }, [summoner]);

  useEffect(() => {
    console.log('getting live game')
    if (account.id) {
      getLiveGame();
    }
  }, [account.id]);



  //* get account and set the id
  async function getAccount() {
    try {
      const { data } = await axios.get("/api/accountBySummonerName", {
        params: { name: summoner.name, region: summoner.region },
      });
      setAccount(data)
    } catch (err) {
      console.log(err);
    }
  }

  async function getLiveGame() {
    try {
      const { data } = await axios.get("/api/liveMatch", {
        params: {sumId: account.id, region: summoner.region}
      })
      setLive(data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <h3>Lost in Champ Select?</h3>
      <AccountLookup setsummoner={setSummoner} />
      {account.name && (
        <div>
      {account.name} {'lvl'} {account.summonerLevel}
        </div>)}
      {account.id && (
        <LiveGame currentgame={live}/>
      )}
    </>
  );
};

export default App;
