const request = require('request'); //Module needed in order to make the request to the steam servers...

module.exports = async (steamid) => {
    return new Promise((resolve, reject) => {
        var appid = '753';
        if(typeof steamid == 'number'){
    
            reject("Steamid is not a string. Please parse it to a string in order to avoid misstakes.");
        } else {
        request({ //Sends the request.
            uri: '/inventory/'+steamid+'/'+appid+'/6',
            baseUrl: 'https://steamcommunity.com/',
            json: true
        }, function(err, res, body){
            if(err) reject(err);
            resolve(body);
        });
        
        }
    })

}