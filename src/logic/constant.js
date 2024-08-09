// 0: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// 1: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// 2: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// 3: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// 4: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// 5: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// 6: (6) [{…}, {…}, {…}, {…}, {…}, {…}]

// 0: {filled: false, color: null}
// 1: {filled: false, color: null}
// 2: {filled: false, color: null}
// 3: {filled: false, color: null}
// 4: {filled: false, color: null}
// 5: {filled: true, color: 'blue'}
export const wins = [];

function detectarWin(arrayWin) {
  const isTrue = arrayWin.every((item) => item.filled === true);
  const isColor = arrayWin.every((item, _, arr) => item.color === arr[0].color);
  return isTrue && isColor;
}

//21 posibilidades
export function resolveCol(array) {
  for (let index = 0; index < array.length; index++) {
    const item1 = array[index][5];
    const item2 = array[index][4];
    const item3 = array[index][3];
    const item4 = array[index][2];
    const item5 = array[index][1];
    const item6 = array[index][0];

    const win1 = [item1, item2, item3, item4];
    const win2 = [item2, item3, item4, item5];
    const win3 = [item3, item4, item5, item6];

    if (detectarWin(win1) || detectarWin(win2) || detectarWin(win3)) {
      wins[0] = true;
    }
  }
  return false;
}

//24 posibilidades
export function resolveRow(array, rowNum) {
  for (let index = 0; index < array.length; index++) {
    const item1 = array[0][rowNum];
    const item2 = array[1][rowNum];
    const item3 = array[2][rowNum];
    const item4 = array[3][rowNum];
    const item5 = array[4][rowNum];
    const item6 = array[5][rowNum];
    const item7 = array[6][rowNum];

    const win1 = [item1, item2, item3, item4];
    const win2 = [item4, item5, item6, item7];
    const win3 = [item2, item3, item4, item5];
    const win4 = [item3, item4, item5, item6];

    if (
      detectarWin(win1) ||
      detectarWin(win2) ||
      detectarWin(win3) ||
      detectarWin(win4)
    ) {
      wins[1] = true;
    }
  }
  return false;
}

//12 posibilidades
export function resolveDiagonal(array) {
    const diagonals = [
      [5, 10, 15, 20],
      [11, 16, 21, 26],
      [17, 22, 27, 32],
      [23, 28, 33, 38],
      [4, 9, 14, 19],
      [3, 8, 13, 18],
      [41, 34, 27, 20],
      [35, 28, 21, 14],
      [29, 22, 15, 8],
      [23, 16, 9, 2],
      [40, 33, 26, 19],
      [39, 32, 25, 18]
    ];
  
    for (const diagonal of diagonals) {
      const winSet = diagonal.map(index => array[index]);
      if (detectarWin(winSet)) {
        wins[2] = true;
        return true; // Devuelve true cuando se detecta una victoria
      }
    }
  
    return false;
  }
  
