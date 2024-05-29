function myFunction() {
  // Объявлять переменные
  var input, filter, ul, li, div, hr, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');
  
  for (i = 0; i < li.length; i++) {
    div = li[i].getElementsByTagName("div")[0];
    txtValue = div.textContent || div.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
