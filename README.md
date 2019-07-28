# Steamcards NPM
This npm module gets the steam trading cards from a users inventory.
It's done using the "request" modules and steams servers.

**Please update to the 2.0 version. It supports async functions.**

**Install**
```js
npm install steamcards --save
//--save is optional.
```

**Import**
```js
const steamcards = require('steamcards'); //Import the module
```

## Methods
```js
//This is the main method
steamcards(steam64id).then(body).catch(err)
```
- `steam64id`: This is the users steam64 id that's required for the request.

## Examples
This is the examples on how you can use this module.
### Display all the information
```js
steamcards('76561197977460688', then(body => {
    console.log(body);
}).catch(err => console.log(err));
```
**Output**
```json
{ "appid": 753,
       "classid": "184786686",
       "instanceid": "246376127",
       "currency": "0",
       "background_color": "",
       "icon_url": "'IzMF03bk9WpS"...........
```
There is of course lots of more information but this is just an example on what you will recieve as the output in the console.

---

###  Display all cards name
```js
steamcards('76561198119106214').then(body => {
    var items = body.descriptions;
    for(var i = 0; i < items.length; i++){
        console.log(items[i].market_name);
    }
}).catch(err => console.log(err))
```
**Output**
```
XCOM Assault Class
Chryssalid
Thin Man
XCOM Heavy Class
...
```

### Display name and descriptions of items
```js
steamcards('76561198119106214').then(body => {
    var items = body.descriptions;
    for(var i = 0; i < items.length; i++){
        var name = items[i].market_name;
        var desc = items[i].descriptions[0].value;
        //console.log(items[i].descriptions);
        console.log('Description: ' + desc + '\nItemname: ' + name);
    }
}).catch(err => console.log(err))
```
**Output**
```
Description: XCOM Assault Class Trading Card
Itemname: XCOM Assault Class
Description: XCOM: Enemy Unknown Chryssalid Trading Card
Itemname: Chryssalid
Description: XCOM: Enemy Unknown Thin Man Trading Card
Itemname: Thin Man
Description: XCOM: Enemy Unknown Heavy Class Trading Card
```

### Contribute
You can contribute on the [github](https://github.com/ThunbergOlle/get-steamcards) page.
If you want anything custom programmed then please contact me: olle.thunberg03@gmail.com


## License
MIT License

Copyright (c) 2018 Olle Thunberg

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
