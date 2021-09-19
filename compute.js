let namePointsMap = new Map(),
    timeStampPointsMap = new Map(),
    timeStampNameMap = new Map(),
    timeStampArray = new Array(),
    differenceNamePointsMap = new Map();
    resultTable = [];
// const { table } = require('console');
var fs = require('fs');
// var user = require(__dirname + '/transaction.json');


addTransaction = (name, points, timeStamp) =>{
    addNamePointsMap(name, points);
    addTimeStampPointsMap(timeStamp, points);
    addTimeStampNameMap(timeStamp, name);
    addTimeStampArray(timeStamp);
    sortTimeStampArray();
}

addNamePointsMap = (name, points) =>{
    if(namePointsMap.has(name)){
        namePointsMap.set(name, namePointsMap.get(name) + points);
    } else{
        namePointsMap.set(name, points);
    }
}
namePointsMapValue = (name) =>{
    return namePointsMap.get(name);
}

addTimeStampPointsMap = (timeStamp, points) =>{
    timeStampPointsMap.set(timeStamp, points);
}
timeStampPointsValue = (timeStamp) =>{
    return timeStampPointsMap.get(timeStamp);
}

addTimeStampNameMap = (timeStamp, name) =>{
    timeStampNameMap.set(timeStamp, name);
}
timeStampNameValue = (timeStamp) =>{
    return timeStampNameMap.get(timeStamp);
}

addTimeStampArray = (timeStamp) =>{
    timeStampArray.push(timeStamp);
}
timeStampArrayValue = (index) =>{
    timeStamptArray.get(index);
}

sortTimeStampArray = () =>{
    if(timeStampArray.length>1){
        timeStampArray.sort(function(a,b){
            return (a < b) ? -1: ((a>b) ? 1:0);
        });
    }
}

spendTransaction = (spendPoints) =>{
    let index = 0;
    let name, points;
    while(spendPoints > 0){
        timeStamp = timeStampArrayValue(index);
        name = timeStampNameValue(index);
        points = timeStampPointsValue(index);
        if(points > spendPoints){
            spendPoints -= spendPoints;
            points -= spendPoints;
            timeStampPointsMap(timeStamp, points);
            differenceNamePointsMap.set(name, spendPoints);
        } else{
            spendPoints -=points;
            timeStampPointsMap(timeStamp, 0);
            differenceNamePointsMap.set(name, points);
        }
        index++;
    }
    // let result = 
}

parseJSONFILE = () =>{
    fs.readFile('transaction.json', function(err, data){
        let obj = JSON.parse(user);
        addTransaction(obj.name, obj.points, obj.timeStamp);
    });
}

function stringJSONINPUT(input){
    var inputJSON = JSON.stringify(input);
    fs.writeFile('transaction.json', inputJSON, function(err){
        if(err) throw err;
        console.log('Saved!');
    });
}

acceptInput = () =>{
    let input = document.getElementById('add').value;
    // let obj = JSON.parse(input);
    // addTransaction(obj.name, obj.points, obj.timeStamp);
    addTransaction(input.name, input.points, input.timeStamp);
}

result = () =>{
    for(let key of differenceNamePointsMap){
        let results = JSON.stringify(key, -differenceNamePointsMap.get(key));
        document.getElementById("test").innerHTML = result + "\n";
        fs.appendFile('results.json', results + "\n");
    }
}

module.exports = {
    addTransaction,
    addNamePointsMap,
    addTimeStampPointsMap,
    addTimeStampNameMap,
    addTimeStampArray,
    sortTimeStampArray,
    namePointsMapValue,
    timeStampPointsValue,
    timeStampNameValue,
    timeStampArrayValue,
    spendTransaction,
    stringJSONINPUT
}


