function Jumlahkan() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);

  if (isNaN(num1) || isNaN(num2)) {
    alert("Isi Angka berikut dengan Benar");
  } else {
    var hasil = num1 + num2;
    alert("Hasil penjumlahan: " + hasil);
  }
}

function Ulang() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
}
