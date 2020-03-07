const axios = require("axios");
const express = require("express");
const call = express();


//Get user's commit from GitHub
call.get("/api/get-github-events/:username", (req, res) => {
    let usernmane = req.params.username;
    res.send(
        axios.get(`https://api.github.com/users/${usernmane}/events`)
            .then(function (response) {
                return response.data;
            })
    )
});

call.get("/api/get-code-score/:username", (req, res) => {
    let username = req.params.username;
    res.send(
        axios.get(`https://www.codewars.com/api/v1/users/${username}`)
            .then(response => {
                let data = response.data.ranks.languages;
                let languages = Object.keys(data);
                let langScore = {};
                for (i of languages) {
                    langScore[i] = data[i].score;
                }
                return langScore;
            })
    )
});

call.get("/api/get-code-score/:username&:language", (req, res) => {
    let params = { username: req.params.username, language: req.params.language };
    res.send(
        axios.get(`https://www.codewars.com/api/v1/users/${params.username}`)
            .then(response => {
                let data = response.data.ranks.languages[params.language];
                if (!data) {
                    return console.log(0);
                }
                else {
                    return console.log(data.score);
                }
            })
    )
})

call.get("/api/get-stack-rep/:username", (req, res) => {
    let username = req.params.username;
    res.send(
        axios.get(`http://api.stackexchange.com/2.2/users?inname=${username}&site=stackoverflow`)
            .then(response => {
                return response.data;
            })
    )
})