var router = require("express").Router();

require('dotenv').config()
const riotKey = process.env.RIOT_KEY
const axios = require('axios')

router.get('/account', async (req, res) => {
  let sum = req.query.name;
  let tag = req.query.tag;
  const { data } = await axios.get(
    `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${sum}/${tag}?api_key=${riotKey}`
  );
  res.send(data)
})

router.get('/matchHistory', async (req, res) => {
  let puuid = req.query.puuid
  const { data } = await axios.get(
    `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=5&api_key=${riotKey}`
  );

  res.send(data)
})

router.get('/singleMatch', async (req, res) => {
  const matchID = req.query.id
  const { data } = await axios.get(
    `https://americas.api.riotgames.com/lol/match/v5/matches/${matchID}?api_key=${riotKey}`
  );
  res.send(data)
})

module.exports = router;