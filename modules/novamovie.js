"use strict";

// Main
module.exports = {
    domain: "novamovie.net",
    find($){
        const result = $('div[class="movies-list movies-list-full"]').find("div").filter((index, element)=> element.attribs["data-movie-id"])
        
        return result.length
    }
}