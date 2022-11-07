let person = prompt ("İsminizi giriniz:");

  if (person.length > 0) {
  document.querySelector("h2>strong").innerHTML = person;
  function display_cr() {
    let refresh = 1000;
    myTime = setTimeout('display_ct()', refresh);
  }
    function display_ct() {
      let x = new Date();
      document.getElementById('ct').innerHTML = x;
      display_cr();
    }
    
}
   else if (person.length <= 0) {
  document.querySelector('h2').innerHTML = "Lütfen saati görmek için sayfayı yenileyip isminizi giriniz!"
}



