window.addEventListener('load', (event) => {
  getAndSet();
});

function getAndSet(){
  var table = localStorage.getItem('Table');
  console.log(table);

  document.getElementById("tableInIndex").innerHTML = table;


}
















