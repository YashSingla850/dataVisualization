import data from "./data/Wine-Data.json"


//  this function help to seperate the alcohol class and put them into a map with [key(alcoholClass) : value ([object])];
export const dataToMap = function () {
    const map = new Map();
    data.forEach(function (val) {
        if (!map.get(val.Alcohol)) {
            map.set(val.Alcohol, []);
        }
        map.get(val.Alcohol).push(val);
    });

    return map;
}
// to get All the Flavanoid value from arr object
export const getFlavanoid = function (key) {
    const map = dataToMap();
    const arr = new Array();
    // console.log(map.get(key));
    const arrobj = map.get(key);
    for (let val of arrobj) {
        arr.push(val.Flavanoids);
    }
    return arr;
}

// to calculate gamma value for all the data alcohol class wise and put it in a arr

export const getGamma = function (key) {

    const map = dataToMap();
    const arr = new Array();
    const arrobj = map.get(key);
    for (let val of arrobj) {
        arr.push((val.Ash * val.Hue) / val.Magnesium);
    }
    return arr;

}