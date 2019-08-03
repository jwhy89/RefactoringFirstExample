// var fs=require('fs');
// var dataI=fs.readFileSync('invoice.json', 'utf8');
// // var invoice=JSON.parse(dataI);
// let invoice = JSON.parse(fs.readFileSync('invoice.json').toString());
// // console.log(invoice);

// var dataP=fs.readFileSync('play.json');
// // var play=JSON.parse(dataP);
// var plays = JSON.parse(fs.readFileSync('play.json').toString());
// // console.log(play);

invoice = {
    customer: 'BigCo',
    performances: [{
            "playID": "hamlet",
            "audience": 55
        },
        {
            "playID": "asLike",
            "audience": 35
        },
        {
            "playID": "othello",
            "audience": 40
        }
    ]
}

// console.log('invoice', invoice);

plays = {
    hamlet: {
        "name": "Hamlet",
        "type": "tragedy"
    },
    asLike: {
        "name": "As You Like It",
        "type": "comedy"
    },
    othello: {
        "name": "Othello",
        "type": "tragedy"
    }
}

// console.log('play', play);


// function statement() {

//     // let invoice = JSON.parse(fs.readFileSync('invoice.json').toString());
//     let totalAmount = 0;
//     let volumeCredits = 0;
//     console.log('in function statement invoice', invoice);
//     console.log('in function statement play', plays);

//     let result = `Statement for ${invoice.customer}\n`;
//     const format = new Intl.NumberFormat("en-US", {
//         style: "currency",
//         currency: "USD",
//         minimumFractionDigits: 2
//     }).format;

//     for (let perf of invoice.performances) {
//         const play = plays[perf.playID];
//         let thisAmount = 0;

//         switch (play.type) {
//             case "tragedy":
//                 thisAmount = 40000;
//                 if (perf.audience > 30) {
//                     thisAmount += 1000 * (perf.audience - 30);
//                 }
//                 break;
//             case "comedy":
//                 thisAmount = 30000;
//                 if (perf.audience > 20) {
//                     thisAmount += 10000 + 500 * (perf.audience - 20);
//                 }
//                 thisAmount += 300 * perf.audience;
//                 break;
//             default:
//                 throw new Error(`unknown type: ${play.type}`);
//         }

//         // add volume credits
//         volumeCredits += Math.max(perf.audience - 30, 0);
//         // add extra credit for every ten comedy attendees
//         if ("comedy" === play.type) volumeCredits += Math.floor(perf.audience / 5);

//         // print line for this order
//         result += `  ${play.name}: ${format(thisAmount/100)} (${perf.audience} seats)\n`;
//         totalAmount += thisAmount;
//     }
//     result += `Amount owed is ${format(totalAmount/100)}\n`;
//     result += `You earned ${volumeCredits} credits\n`;
//     return result;
// }

// EXTRACTED FUNCTION
function amountFor(perf, play) {
    let thisAmount = 0;
    switch (play.type) {
        case "tragedy":
            thisAmount = 40000;
            if (perf.audience > 30) {
                thisAmount += 1000 * (perf.audience - 30);
            }
            break;
        case "comedy":
            thisAmount = 30000;
            if (perf.audience > 20) {
                thisAmount += 10000 + 500 * (perf.audience - 20);
            }
            thisAmount += 300 * perf.audience;
            break;
        default:
            throw new Error(`unknown type: ${play.type}`);
    }
    return thisAmount;
}

// New statment function
function statementTwo() {
    let totalAmount = 0;
    let volumeCredits = 0;
    let result = `Statement for ${invoice.customer}\n`;
    const format = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2
    }).format;
    for (let perf of invoice.performances) {
        const play = plays[perf.playID];
        let thisAmount = amountFor(perf, play);

        // add volume credits
        volumeCredits += Math.max(perf.audience - 30, 0);
        // add extra credit for every ten comedy attendees
        if ("comedy" === play.type) volumeCredits += Math.floor(perf.audience / 5);

        // print line for this order
        result += `  ${play.name}: ${format(thisAmount/100)} (${perf.audience} seats)\n`;
        totalAmount += thisAmount;
    }
    result += `Amount owed is ${format(totalAmount/100)}\n`;
    result += `You earned ${volumeCredits} credits\n`;
    return result;
}

// console.log('statement', statement());

console.log('statement', statementTwo());