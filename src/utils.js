export const calculateMean = (arr) => {
    const sum = arr.reduce((acc, val) => acc + val, 0);
    return sum / arr.length;
};

export const calculateMedian = (arr) => {
    const sortedArr = arr.sort((a, b) => a - b);
    const mid = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) {
        return (sortedArr[mid - 1] + sortedArr[mid]) / 2;
    } else {
        return sortedArr[mid];
    }
};

export const calculateMode = (arr) => {
    const freqMap = {};
    arr.forEach((item) => {
        freqMap[item] = (freqMap[item] || 0) + 1;
    });
    let mode;
    let maxFreq = 0;
    for (const key in freqMap) {
        if (freqMap[key] > maxFreq) {
            mode = key;
            maxFreq = freqMap[key];
        }
    }
    return parseFloat(mode);
};
