const HASH_COLOR = 2020000;

export const idIntoColor = function (id: number) {
    const color = ((id * HASH_COLOR) & 0xffffff).toString(16).toUpperCase();
    return '#' + '000000'.substring(0, 6 - color.length) + color;
};
