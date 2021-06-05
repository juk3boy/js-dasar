


// CASE 5 (angkot 8 & 9 lembur & 5 lembur)

// var jmlAngkot = 10;
// var angkotBeroperasi = 6;


// for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {

//     if (noAngkot <= angkotBeroperasi && noAngkot != 5) {
//         console.log('Angkot no.' + noAngkot + ' angkot beroperasi dengan baik.');

//     } else if (noAngkot == 8 || noAngkot == 9 || noAngkot == 5) {
//         console.log('Angkot no.' + noAngkot + ' angkot sedang lembur.');

//     } else {
//         console.log('Angkot no.' + noAngkot + ' sedang tidak beroperasi.');
//     }

// }

// jika kita menggunakan prompt(''); maka yang diinputkan oleh user yaitu berupa String, sedangkan jika kita menggunakan perbandingan === (sama dengan nya 3x) maka itu akan dianggap interger

// maka untuk mengatasinya kita harus menggunakan == (sama dengan 2x) karena ini yang diinput berupa string maupun interger akan dianggap sama

// jika ingin memaksa menggunakan prompt('')  maka kita harus bungkus si prompt tsb menjadi interger yaitu dengan parseInt(prompt('')); maka ini apa yang diinputkan user akan menjadi interger

var angka = prompt('Masukkan angka :');

switch (angka) {
    case 1:
        alert('Anda memasukan angka 1');
        break;
    case 2:
        alert('Anda memasukan angka 2');
        break;
    case 3:
        alert('Anda memasukan angka 3');
        break;
    default:
        alert('Angka yg anda masukkan salah !!');
        break;
}

// diatas case nya sama untuk var angka berupa prompt itu berupa string sedangkan pada switch case yaitu interger, maka harus dibungkus dengan  parseIn('promtp('))

// atau untuk angka nya dibuat string '1', '2'


