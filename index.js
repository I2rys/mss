(async()=>{
    "use strict";

    // Dependencies
    const { runJobs } = require("parallel-park")
    const request = require("request-async")
    const cheerio = require("cheerio")
    const _ = require("lodash")
    const fs = require("fs")

    // Variables
    const args = process.argv.slice(2)

    const modules = fs.readdirSync("./modules").map((module) => require(`./modules/${module}`))
    const links = ["https://novamovie.net/?s={{keyword}}", "https://allmoviesforyou.net/?s={{keyword}}", "https://animefreak.ws/search/?keyword={{keyword}}", "https://www1.gogoanime.sk/search.html?keyword={{keyword}}", "https://9anime.gg/my-ajax?limit=30&page=1&action=load_search_movie&keyword={{keyword}}", "https://animedao.to/search/?search={{keyword}}", "https://moviesjoy.to/search/{{keyword}}", "https://chia-anime.su/?s={{keyword}}"]

    // Main
    if(!args.length) return console.log("usage: node index.js <keyword>")

    await runJobs(
        links,
        async(link, index, max)=>{
            const domain = link.match(/([a-z0-9A-Z]\.)*[a-z0-9-]+\.([a-z0-9]{2,24})+(\.co\.([a-z0-9]{2,24})|\.([a-z0-9]{2,24}))*/g)[0]

            var response = await request(link.replace("{{keyword}}", args.slice(0).join(" ")), {
                headers: {
                    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.115 Safari/537.36"
                }
            })

            response = response.body

            const result = _.find(modules, { domain: domain }).find(cheerio.load(response), response)

            if(result && result !== "UNKNOWN"){
                console.log(`Domain: ${domain} | Found: ${result}`)
            }else if(result && result === "UNKNOWN"){
                console.log(`Domain: ${domain} | Found: Many`)
            }else{
                console.log(`Domain: ${domain} | Found: 0`)
            }
        }
    )

    console.log("Finished.")
})()