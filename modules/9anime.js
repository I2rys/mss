"use strict";

// Main
module.exports = {
    domain: "9anime.gg",
    find($, body){
        const result = JSON.parse(body).data
        
        return result.length
    }
}