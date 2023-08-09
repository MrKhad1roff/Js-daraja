var son = +prompt("Sonni kiriting: 👇");
var daraja = +prompt("Darajani kiriting: 👇");
var natija = 1;

if (isNaN(son) || isNaN(daraja)) {
  alert("Matn Emas Son kiriting ! 🙄");
}else if(son==0 || daraja==0){
    alert("0 sonini Kiritmang !")
}else {
    
  for (var i = 0; i < daraja; i++) {
    natija=natija*son;
  }

 alert(son + " ning " + daraja + " darajasi " + natija + " ga teng.");
}
