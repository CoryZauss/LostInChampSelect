import React from 'react';

export default function AccountLookup({setname, setid}) {
  const search = (e) => {
    e.preventDefault();
    setname(e.target.sumName.value)
    setid(e.target.tagline.value)
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
