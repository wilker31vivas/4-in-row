    
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


export function resolve(array){
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const item1 = array[index][5]
        const item2 = array[index][4]
        const item3 = array[index][3]
        const item4 = array[index][2]

        const arrayCompleto = [item1, item2, item3, item4]

        const isTrue = arrayCompleto.every(item => item.filled === true);
        const isColor = arrayCompleto.every((item, _, arr) => item.color === arr[0].color);

        if(isTrue && isColor){
            return true
        } 
        // for (let i = 0; i < element.length; i++){
        //     console.log(element[i])
        // }
    }
    return false
}