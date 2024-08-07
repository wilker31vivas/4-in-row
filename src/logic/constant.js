    
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

const arrayCol = Array(7).fill(null).map(() => Array(6).fill(null).map(()=> ({filled : false, color : undefined})))

// array.forEach((element, index) => {
//     element.forEach((elem => console.log(elem)))
// });

export function resolve(array){

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const item1 = array[index][5]
        const item2 = array[index][4]
        const item3 = array[index][3]
        const item4 = array[index][2]

        if(
            item1.filled && item2.filled && item3.filled && item4.filled &&
            item1.color == item2.color && item3.color == item4.color
        ){
            return true
        } return false

        // for (let i = 0; i < element.length; i++){
        //     console.log(element[i])
        // }
        
    }
}