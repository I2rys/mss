"use strict";

// Main
module.exports = {
    domain: "chia-anime.su",
    find($){
        const result = $('div[class="listupd"]').find("article")
        
        return result.length
    }
}