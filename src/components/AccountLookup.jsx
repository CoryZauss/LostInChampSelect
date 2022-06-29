import React, { useState } from "react";

export default function AccountLookup({ setsummoner }) {
  const [region, setRegion] = useState('NA1')

  const search = (e) => {
    e.preventDefault();
    setsummoner({
      name: e.target.sumName.value,
      region: region,
    });
  };

  const handleChange = (e) => {
    setRegion(e.target.value)
  }

  return (
    <>
      <form onSubmit={search}>
        <input type="text" name="sumName" placeholder="Summoner Name"></input>
        <select value={region} onChange={handleChange} >
          <option value="NA1">NA1</option>
          <option value="KR">KR</option>
          <option value="EUN1">EUN1</option>
          <option value="EUW1">EUW1</option>
          <option value="JP1">JP1</option>
          <option value="BR1">BR1</option>
          <option value="LA1">LA1</option>
          <option value="LA2">LA2</option>
          <option value="OC1">OC1</option>
          <option value="RU1">RU1</option>
          <option value="TR1">TR1</option>
        </select>
        <button type="submit">Go</button>
      </form>
    </>
  );
}
