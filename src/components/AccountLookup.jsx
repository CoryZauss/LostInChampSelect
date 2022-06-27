import React from 'react';

export default function AccountLookup({setsummoner}) {
  const search = (e) => {
    e.preventDefault();
    setsummoner({
      name: e.target.sumName.value,
      tag: e.target.tagline.value || 'na1'
    })
  }

  return (
    <>
      <form onSubmit={search}>
        <input type="text" name="sumName" placeholder="Summoner Name"></input>
        <input type="text" name="tagline" placeholder="tagline(ex: #NA1)" />
        <button type="submit">Go</button>
      </form>
    </>
  );
}
