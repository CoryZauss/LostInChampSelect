var router = require("express").Router();

require('dotenv').config()
const riotKey = process.env.RIOT_KEY
const axios = require('axios')

router.get('/accountByRiotId', async (req, res) => {
  const sum = req.query.name;
  const tag = req.query.tag;
  const { data } = await axios.get(
    `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${sum}/${tag}?api_key=${riotKey}`
  );
  res.send(data)
})

router.get('/accountBySummonerName', async (req, res) => {
  const sum = req.query.name;
  const region = req.query.region;
  const { data } = await axios.get(
    `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${sum}?api_key=${riotKey}`
  );
  res.send(data)
})

router.get('/matchHistory', async (req, res) => {
  const puuid = req.query.puuid
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

router.get('/liveMatch', async (req, res) => {
  const sumId = req.query.sumId
  const region = req.query.region;
  let data;
  try {
     await axios.get(
      `https://${region}.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/${sumId}?api_key=${riotKey}`
     )
    .then(game => data = game.data)
  } catch (err) {
    console.log('error getting live match')
    data = 'Summoner is not currently in game'
  } finally {
    res.send(data)
  }
})

module.exports = router;