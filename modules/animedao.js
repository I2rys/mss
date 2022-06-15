"use strict";

// Main
module.exports = {
    domain: "animedao.to",
    find($){
        const result = $('div[class="row"]').find("div > a > div")
        
        return result.length
    }
}