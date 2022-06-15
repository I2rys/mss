"use strict";

// Main
module.exports = {
    domain: "moviesjoy.to",
    find($){
        const result = $('div[class="film_list-wrap"]').find("div > div > img")
        
        return result.length
    }
}