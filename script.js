var btn = document.getElementById("btn");
var txtBox = document.getElementById("txt");
var radhe = document.getElementById("radhe");
var decrease = document.getElementById("decrease");
var radheji = document.getElementById("radheji");
var value = txtBox.innerHTML;


radheji.addEventListener("click", function click(){
    txtBox.innerHTML = "<h3>Radhe Radhe</h3>";
})

btn.addEventListener("click", function click(){
      ++value;
      txtBox.innerHTML = value;
  } 
)

decrease.addEventListener("click", function click(){

      --value;
      txtBox.innerHTML = value ;
  } 
)
