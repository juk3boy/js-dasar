// var jmlAngkot = 10;
// var noAngkot = 1;

// while (noAngkot <= jmlAngkot) {
//     console.log('Angkot no. ' + noAngkot + ' beroperasi dengan baik');

//     noAngkot++;
// };

// Membuat Perulangan II

// var jmlAngkot = 10;
// var angkotBeroperasi = 8;
// var noAngkot = 1;

// while (noAngkot <= angkotBeroperasi) {
//     console.log('Angkot no.' + noAngkot + ' beropersi dengan baik');

//     noAngkot++;

// }
// for (noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
//     console.log('Angkot no.' + noAngkot + ' sedang tidak beroperasi');
// }


// Belajar if else

// var jmlAngkot = 10;
// var angkotBeroperasi = 6;


// for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
//     if (noAngkot <= 6) {
//         console.log('Angkot no.' + noAngkot + ' angkot beroperasi dengan baik.');
//     } else {
//         console.log('Angkot no.' + noAngkot + ' angkot sedang tidak beroperasi');
//     }
// }


// Belajar else if

// var jmlAngkot = 10;
// var angkotBeroperasi = 6;


// for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
//     if (noAngkot <= 6) {
//         console.log('Angkot no.' + noAngkot + ' angkot beroperasi dengan baik.');
//     } else {
//         console.log('Angkot no.' + noAngkot + ' angkot sedang tidak beroperasi');
//     }
// }

// CASE GANJIL GENAP

// var angka = prompt('Masukan angka :');

// if (angka % 2 == 0) {
//     alert(angka + ' merupakan bilangan GENAP');
// } else if (angka % 2 == 1) {
//     alert(angka + ' meruapakan bilangan GANJIL');
// } else {
//     alert(angka + ' yang anda masukan bukan angka');
// }

// CASE 4

// var jmlAngkot = 10;
// var angkotBeroperasi = 6;


// for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {

//     if (noAngkot <= 6) {
//         console.log('Angkot no.' + noAngkot + ' angkot beroperasi dengan baik.');

//     } else if (noAngkot == 8) {
//         console.log('Angkot no.' + noAngkot + ' angkot sedang lembur');

//     } else {
//         console.log('Angkot no' + noAngkot + ' sedang tidak beroperasi');
//     }

// }


// CASE 5 (angkot 8 & 9 lembur)

// var jmlAngkot = 10;
// var angkotBeroperasi = 6;


// for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {

//     if (noAngkot <= angkotBeroperasi) {
//         console.log('Angkot no.' + noAngkot + ' angkot beroperasi dengan baik.');

//     } else if (noAngkot == 8 || noAngkot == 9) {
//         console.log('Angkot no.' + noAngkot + ' angkot sedang lembur.');

//     } else {
//         console.log('Angkot no.' + noAngkot + ' sedang tidak beroperasi.');
//     }

// }


// CASE 5 (angkot 8 & 9 lembur & 5 lembur)

var jmlAngkot = 10;
var angkotBeroperasi = 6;


for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {

    if (noAngkot <= angkotBeroperasi && noAngkot != 5) {
        console.log('Angkot no.' + noAngkot + ' angkot beroperasi dengan baik.');

    } else if (noAngkot == 8 || noAngkot == 9 || noAngkot == 5) {
        console.log('Angkot no.' + noAngkot + ' angkot sedang lembur.');

    } else {
        console.log('Angkot no.' + noAngkot + ' sedang tidak beroperasi.');
    }

}




