var tanya = true;
while (tanya) {
    var p = prompt('pilih : gajah, semut, orang');

    //menagkap pilihan computer
    // membangkitkan bilangan random
    var comp = Math.random();

    if (comp < 0.34) {
        comp = 'gajah';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }

    // menentukan rules
    var hasil = '';
    if (p == comp) {
        hasil = 'SERI';
    } else if (p == 'gajah') {
        // if (comp == 'orang') {
        //     hasil = 'MENANG';
        // } else {
        //     hasil = 'KALAH';
        // }

        // kita bisa menggunakan iternary sbb :

        hasil = (comp == 'orang') ? 'MENANG' : 'KALAH';

    } else if (p == 'orang') {
        hasil = (comp == 'gajah') ? 'KALAH' : 'MENANG';
    } else if (p == 'semut') {
        hasil = (comp == 'orang') ? 'KALAH' : 'MENANG';
    } else {
        hasil = 'Memasukkan pilihan yang salah !!';
    }


    //tampilkan hasilny 

    alert('Kamu memilih : ' + p + ' dan komputer memilih ' + comp + ' \n maka hasilnya : kamu ' + hasil);

    tanya = confirm('lagi ?');

}

alert('Terimakasih sudah bermain');