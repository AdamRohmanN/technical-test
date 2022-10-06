let dariSoal = [2,24,32,22,31,100,56,21,99,7,5,37,97,25,13,11]

function sortArray(arr) {
    let ganjil = []
    let genap = []

	let x = 0
    for (let i = 0; i < arr.length; i++) {
        let z = arr[x]

        if (z % 2 === 0) {
            genap.push(z)
        } else {
            ganjil.push(z)
        }

        x++;
    }

    console.log("Array: " + arr.toString());
    console.log("Ganjil: " + ganjil.toString());
    console.log("Genap: " + genap.toString());
}

sortArray(dariSoal)
