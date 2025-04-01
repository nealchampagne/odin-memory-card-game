// Implement Fisher-Yates Shuffle for generic array
export const shuffle = arr => {

    let j;

    for (let i = arr.length - 1; i > 0; i--) {

        j = Math.floor(Math.random() * (i + 1));

        [ arr[i], arr[j] ] = [ arr[j], arr[i]];

    }

    let newArr = arr;

    return newArr;
};