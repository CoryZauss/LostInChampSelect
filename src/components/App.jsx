import React, { useState, useEffect } from "react";
import axios from "axios";
import AccountLookup from "./AccountLookup.jsx";

const App = () => {
  const [summoner, setSummoner] = useState({});
  const [sumId, setSumId] = useState("");

  useEffect(() => {
    if (summoner.name) {
      getAccount();
    }
  }, [summoner]);

  //* get account and set the id
  async function getAccount() {
    try {
      const { data } = await axios.get("/api/account", {
        params: { name: summoner.name, tag: summoner.tag },
      });
      setSumId(data.puuid)
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <h3>Lost in Champ Select?</h3>
      <AccountLookup setsummoner={setSummoner} />
    </>
  );
};

export default App;
