// Create a currency converter function from taka to USD, CAD, POUND, EURO etc


function conv(taka,forcun){

    if(forcun=="USD"){
       return `${(taka/85).toFixed(2)} USD `;
    }
    else if(forcun=="CAD"){
       return `${(taka/67).toFixed(2)} CAD`;
    }
    else if(forcun=="POUND"){
       return (taka/113).toFixed(2) + " POUND";
    }
    else if(forcun=="EURO"){
       return `${(taka/95).toFixed(2)} EURO `;
    }
    else{
        return `plese enter valid currency`
    }
}

let nativeCurrency = parseInt(prompt("How much money do you convert ( only Bangladesh currency"));

let forregnCurrency = prompt("which countries's currency do you  convert (USD, CAD, POUND, EURO");

console.log(conv(nativeCurrency,forregnCurrency));