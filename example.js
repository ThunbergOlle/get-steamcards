var steamid = 76561197991277900;
        var toText = steamid.toString(); //convert to string
        var lastChar = toText.slice(-2); //gets last character
        var baseChars = toText.slice(0, -2);
        var lastDigit = +(lastChar); //convert last character to number
        var newlast = lastDigit - 1;
        console.log(baseChars+newlast);