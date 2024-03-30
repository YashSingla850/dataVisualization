import data from "./data/Wine-Data.json"
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


export const getGamma = function (key) {

    const map = dataToMap();
    const arr = new Array();
    const arrobj = map.get(key);
    for (let val of arrobj) {
        arr.push((val.Ash * val.Hue) / val.Magnesium);
    }
    return arr;

}