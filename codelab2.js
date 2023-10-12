function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var alamat = document.getElementById("alamat").value;
  
    if (name === "" || email === "" || alamat === "") {
      alert("All fields must be filled out");
      return false;
    } else {
      alert("Nama Anda: " + name + "\n\nEmail: " + email + "\n\nAlamat: " + alamat);
    }
  
    return true;
  }