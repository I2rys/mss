"use strict";

// Main
module.exports = {
    domain: "allmoviesforyou.net",
    find($){
        const result = $('ul[class="MovieList Rows AX A04 B03 C20 D03 E20 Alt"]').find("li").filter((index, element)=> element.attribs.id)
        
        return result.length
    }
}