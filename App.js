function add(){
    var x=document.getElementById("input1").value
    var y=document.getElementById("input2").value
    var z=parseInt(x)+parseInt(y)
    document.getElementById("output").value=z
}
function sub(){
    var x=document.getElementById("input1").value
    var y=document.getElementById("input2").value
    var z=parseInt(x)-parseInt(y)
    document.getElementById("output").value=z

}
function mul(){
    var x=document.getElementById("input1").value
    var y=document.getElementById("input2").value
    var z=parseInt(x)*parseInt(y)
    document.getElementById("output").value=z

}
function div(){
    var x=document.getElementById("input1").value
    var y=document.getElementById("input2").value
    var z=parseInt(x)/parseInt(y)
    document.getElementById("output").value=z
}
function clr(){
    console.log("shiwangee")
    document.getElementById("output").value=null
}