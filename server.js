const express = require('express')
const app = express()
const PORT = 8000
const breedStandard ={
    "american eskimo dog": {
        breedName: "American Eskimo Dog",
        breedHeight: "9 - 19 inches",
        breedDesBrief: "Small to medium sized nordic type dog. Fur is always white or white with bisuit cream. Head is wedge shaped with upright triangular ears"
    },

    "bichon frise": {
        breedName: "Bichon Frise",
        breedHeight: "9 - 11.5 inches",
        breedDesBrief: "Small, sturdy, white powder puff of a dog whose merry temperament is evidenced by his plumed tail carried jauntily over the back and his darkeyed inquisitive expression.",
    },
    "boston terrier":{
        breedName: "Boston Terrier",
        breedHeight: "15 - 17 inches",
        breedDesBrief: "Lively, highly intelligent, smooth coated, shortheaded, compactly built, short-tailed, well balanced dog, brindle, seal or black in color and evenly marked with white. The head is in proportion to the size of the dog and the expression indicates a high degree of intelligence"
    },
    "unknown": {

        breedName:"unknown",
        breedHeight: "unknown",
        breedDesBrief: "unknown"
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname +'/index.html')
})

app.get('/api/:dog',(request, response)=>{
    const breed = request.params.dog.toLowerCase()
    if( breedStandard[breed] ){
        response.json( breedStandard[breed] )
    } else{
        response.json(breedStandard[unknown])
    }
})

app.listen( PORT, () => {
    console.log(`The server is now running on ${PORT}.`)
})