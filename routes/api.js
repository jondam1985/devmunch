const axios = require("axios");
const express = require("express");
const call = express();


//Get user's commit from GitHub
call.get("/api/get-github-commits/:username", (req, res) => {
    let usernmane = req.params.username;
    res.send(
        axios.get(`https://api.github.com/users/${username}/repos`)
            .then(response => {
                let data = response.data;
                let repos = data.map(item => item.name);
                let urlArr = repos.map(item => `https://api.github.com/repos/${username}/${item}/contributors`);
                let requests = urlArr.map(url => axios.get(url));
                axios.all(requests)
                    .then(
                        axios.spread((...responses) => {
                            let allData = responses.map(item => item.data);
                            console.log(allData)
                            let commits = 0;
                            for (let i = 0; i < allData.length; i++) {
                                for (let j = 0; j < allData[i].length; j++) {
                                    if (allData[i][j].login === username) {
                                        commits += allData[i][j].contributions;
                                    }
                                }
                            }
                            return commits
                        })
                    )
            }))
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

call.get("/api/get-stack-rep/:userid", (req, res) => {
    let username = req.params.username;
    res.send(
        axios.get(`http://api.stackexchange.com/2.2/users/${userid}?site=stackoverflow`)
            .then(response => {
                let reputation = response.data.items[0].reputation;
                return reputation;
            })
    )
})