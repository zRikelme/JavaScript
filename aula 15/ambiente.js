 let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor e ${num[0]}`)
let pos = num.indexOf()
if(pos == -1) {
    console.log('O valor nao foi encontrado')
}
else {
    console.log(`O valor 4 esta na posição ${pos}`)
}