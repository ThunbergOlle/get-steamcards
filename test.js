var steamcards = require('./index.js');
steamcards('76561198119106214').then(body => {
    var items = body.descriptions;
    for(var i = 0; i < items.length; i++){
        console.log(items[i].market_name);
    }
}).catch(err => console.log(err))