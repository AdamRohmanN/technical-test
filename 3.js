// saya pakai extension "code runner" untuk menjalankan kode dengan short-cut "ctrl + alt + n"

let dariSoal = [2,24,32,22,31,100,56,21,99,7,5,37,97,25,13,11]

function sortArray(arr) {
    let ganjil = []
    let genap = []

    let x = 0; let y = 1
    for (let i = 1; i < arr.length; i++) {
        let z = arr.slice(x, y)

        if (z % 2 === 0) {
            genap.push(z)
        } else {
            ganjil.push(z)
        }
        x++; y++
    }
    console.log("Array: " + arr.toString());
    console.log("Ganjil: " + ganjil.toString());
    console.log("Genap: " + genap.toString());
}
sortArray(dariSoal)