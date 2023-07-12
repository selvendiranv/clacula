function add()
{
    var a=parseInt(document.getElementById("n1").value);
    var b=parseInt(document.getElementById("n2").value);
    var c=a+b
    document.getElementById("add").innerHTML=c;

}

function sub()
{
    var a=parseInt(document.getElementById("n1").value);
    var b=parseInt(document.getElementById("n2").value);
    var c=a-b
    document.getElementById("sub").innerHTML=c;
}
function mul()
{
    var a=parseInt(document.getElementById("n1").value);
    var b=parseInt(document.getElementById("n2").value);
    var c=a*b
    document.getElementById("mul").innerHTML=c;
}
function div()
{
    var a=parseInt(document.getElementById("n1").value);
    var b=parseInt(document.getElementById("n2").value);
    var c=b/a
    document.getElementById("div").innerHTML=c;
}