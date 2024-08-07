    
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
export const wins = Array(69).fill(false)

export function resolveCol(array){
    for (let index = 0; index < array.length; index++) {

        const item1 = array[index][5]
        const item2 = array[index][4]
        const item3 = array[index][3]
        const item4 = array[index][2]
        const item5 = array[index][1]
        const item6 = array[index][0]

        const win1 = [item1, item2, item3, item4]
        const win2 = [item2, item3, item4, item5]
        const win3 = [item3, item4, item5, item6]

        function detectarWin(arrayWin){
            const isTrue = arrayWin.every(item => item.filled === true);
            const isColor = arrayWin.every((item, _, arr) => item.color === arr[0].color);
            if(isTrue && isColor){
                return true
            } 
        }

        if (detectarWin(win1) || detectarWin(win2) || detectarWin(win3)) {
            wins[0] = true;
        }
        
    }
    return false
}

export function resolveRowOne(array){
    for (let index = 0; index < array.length; index++) {

        const item1 = array[0][5]
        const item2 = array[1][5]
        const item3 = array[2][5]
        const item4 = array[3][5]
        const item5 = array[4][5]
        const item6 = array[5][5]
        const item7 = array[6][5]

        const win1 = [item1, item2, item3, item4]
        const win2 = [item4, item5, item6, item7]
        const win3 = [item2, item3, item4, item5]
        const win4 = [item3, item4, item5, item6]

        function detectarWin(arrayWin){
            const isTrue = arrayWin.every(item => item.filled === true);
            const isColor = arrayWin.every((item, _, arr) => item.color === arr[0].color);
            if(isTrue && isColor){
                return true
            } 
        }

        if (detectarWin(win1) || detectarWin(win2) || detectarWin(win3) || detectarWin(win4)) {
            wins[1] = true;
        }
        
    }
    return false
}

export function resolveRowTwo(array){
    for (let index = 0; index < array.length; index++) {

        const item1 = array[0][4]
        const item2 = array[1][4]
        const item3 = array[2][4]
        const item4 = array[3][4]
        const item5 = array[4][4]
        const item6 = array[5][4]
        const item7 = array[6][4]

        const win1 = [item1, item2, item3, item4]
        const win2 = [item4, item5, item6, item7]
        const win3 = [item2, item3, item4, item5]
        const win4 = [item3, item4, item5, item6]

        function detectarWin(arrayWin){
            const isTrue = arrayWin.every(item => item.filled === true);
            const isColor = arrayWin.every((item, _, arr) => item.color === arr[0].color);
            if(isTrue && isColor){
                return true
            } 
        }

        if (detectarWin(win1) || detectarWin(win2) || detectarWin(win3) || detectarWin(win4)) {
            wins[2] = true;
        }
        
    }
    return false
}