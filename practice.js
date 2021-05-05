// let g = 10;
// let obj = {
//     a: 'apple',
//     b: [4.13, [3, 3.14], 'banana', {}],
//     c: {
//         d: 'dad',
//         e: [undefined, 'delicious'],
//         f: [97, 'e4', {
//             g
//         }]
//     }
// };
// console.log(obj.c.f[0]);
// console.log(obj.a + obj.b[1][0]);
// console.log(obj.b[2] +' ' + obj.c.e[1]);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arr1 = arr
            .filter(x => x % 2 == 0)
            .map(x => x ** 2);   

console.log(arr1);