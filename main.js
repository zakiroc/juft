// for(let i = 0; i< 10;i++){
//     console.log("makaka",i+1);
// }
// const arr = ['BMW', 'MERS', 'MClaren', 'Ford-Mustang', 'Audi']
// for(let i = 0; i < arr.length ){
//     console.log();
// }

let num_1 = [2, 4, 9, 10, 45, 67, 8, 90];
let num_2 = [];
let num_3 = []

alert(`
    hozir biz sonlardan juft va toq sonlarga ajratamis :
    [2, 4, 9, 10, 45, 67, 8, 90]
    `)

let promt = prompt(`
    Son kiriting:
    1.juft
    2.toq

    `)

    if(promt==1){
        for(let i = 0; i< num_1.length; i++){
            if(num_1[i] % 2 == 0){
                // alert(array[i]);
                num_2.push(num_1[i])
            }
        }
        alert(num_2)
    }

    if(promt==2){
        for(let i = 0; i< num_1.length; i++){
            if(num_1[i] % 3 == 0){
                // alert(array[i]);
                num_3.push(num_1[i])
            }
        }
        alert(num_3)
    }


// console.log(num_1);
// console.log(num_2);

