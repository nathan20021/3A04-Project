var express = require('express');
var router = express.Router();
const promptList = ["Favourite time of day.", "High and low today.", "High and low this week.", "Dream city to live in.", "Best and worst coffee chain.", 
"Thoughts on skinny jeans coming back in fashion.", "Last concert you've been to.", "Favourite meme.", "Recently listened to on Spotify/Apple music.",
"Thoughts on aliens.", "Favourite recent celebrity scandal.", "Money saving tips.", "Make assumptions about each other.", "Best month of the year.",
"Favourite emojis.", "Eyes closed, scroll and select a random picture from your gallery, explain the backstory.", "Favourite obscure Canadian thing.",
"Is AI good for humanity?", "Talk crap about someone, it won't get back to them.", "Essential grocery items."];
var randomIndex = Math.floor(Math.random() * promptList.length);
var randomPrompt = promptList[randomIndex];

/* GET random prompt. */
router.get('/', function(req, res, next) {
    res.send(randomPrompt);
  });

module.export = router;