// saya pakai extension "code runner" untuk menjalankan kode dengan short-cut "ctrl + alt + n"

let DumbWaysJos = ["DumbWaysJos", 21.1, 50000, 20000]
let DumbWaysMantap = ["DumbWaysMantap", 30, 80000, 40000]

function hitungVoucher(voucher, value) {
    let chosenVoucher = voucher.slice(0,1)
    let disc = voucher.slice(1,2)
    let min = voucher.slice(2,3)
    let max = voucher.slice(3,4)

    console.log("uang awal adalah "+ value +" dan akan menggunakan voucher "+ chosenVoucher);

    if (value >= min) {
        let discount = (value / 100) * disc
        console.log("diskonnya "+ disc +"%");
        console.log("setelah didiskon seharusnya "+ (value - discount));
        if (discount > max) {
            discount = max
            console.log("tapi maksimal diskonnya adalah "+ discount);
        }
        let result = value - discount
        console.log("total yang harus dibayar setelah menggunakan voucher menjadi "+ result);
    } else {
        let result = value
        console.log("karena tidak mencukupi syarat menggunakan voucher, hasilnya tetap "+ result);
    }
}
hitungVoucher(DumbWaysMantap, 1000000)

console.log(""); //kalau vouchernya di dalam array??

DumbWaysJos = 0
DumbWaysMantap = 1
const vouchers = [
    {
        name: "DumbWaysJos",
        discount: 21.1,
        minimal: 50000,
        maximal: 20000
    },{
        name: "DumbWaysMantap",
        discount: 30,
        minimal: 80000,
        maximal: 40000
    }
]

function hitungVoucher2(voucher, value) {
    let chosenVoucher = vouchers[voucher]
    console.log("uang awal adalah "+ value +" dan akan menggunakan voucher "+ chosenVoucher.name);

    let disc = chosenVoucher.discount
    let min = chosenVoucher.minimal
    let max = chosenVoucher.maximal

    if (value >= min) {
        let discount = (value / 100) * disc
        console.log("diskonnya "+ disc +"%");
        console.log("setelah didiskon seharusnya "+ (value - discount));
        if (discount > max) {
            discount = max
            console.log("tapi maksimal diskonnya adalah "+ discount);
        }
        let result = value - discount
        console.log("total yang harus dibayar setelah menggunakan voucher menjadi "+ result);
    } else {
        let result = value
        console.log("karena tidak mencukupi syarat menggunakan voucher, hasilnya tetap "+ result);
    }
}
hitungVoucher2(DumbWaysJos, 100000)