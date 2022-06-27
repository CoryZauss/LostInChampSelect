import React, { useState, useEffect } from "react";
import axios from 'axios';
import AccountLookup from "./AccountLookup.jsx";


const App = () => {
  const [sumName, setSumName] = useState({});
  const [sumId, setSumId] = useState("");

  return (
    <>
      <h3>Lost in Champ Select?</h3>
      <AccountLookup setname={setSumName} setid={setSumId} />
    </>
  );
};

export default App;
