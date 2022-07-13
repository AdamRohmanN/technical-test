// saya pakai extension "code runner" untuk menjalankan kode dengan short-cut "ctrl + alt + n"

function bPrima(input) {
    let arr = ''

    for (i = 2; i <= input+1; i++) {
        if (i <= 5 && i % 4 !== 0) {
            arr += i + "  "
        } else if (i % 2 !== 0 && i % 3 !== 0) {
            arr += i + "  "
        } else {
            input++
        }
    }
    return arr + "\n"
}
function drawSikuSiku(input) {
    let baris = ''

    for (t = 1; t <= input; t++) {
        baris += bPrima(t)
    }
    console.log(baris);
}

drawSikuSiku(10) //gak akurat, tapi cukup mirip