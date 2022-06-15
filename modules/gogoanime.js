"use strict";

// Main
module.exports = {
    domain: "www1.gogoanime.sk",
    find($){
        const result = $('ul[class="items"]').find("li > div > a")
        
        return result.length
    }
}