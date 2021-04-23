function wzor1()
{
    var x=document.getElementById("x").value;
    var vt=document.getElementById("vt").value;
    var at=document.getElementById("at").value;
    var xt=0;
    xt=Number(x)+Number(vt)+((Number(at)*Number(at))/2);
    document.getElementById("1").innerHTML="x(t)="+xt;
}
function wzor2()
{
    var a=document.getElementById("at2").value;
    var s=0;
    s=(Number(a)*Number(a))/2;
    document.getElementById("2").innerHTML="s="+s;
}
function wzor3()
{
    var x=document.getElementById("x2").value;
    var vt=document.getElementById("vt2").value;
    var at=document.getElementById("at3").value;
    var xt=0;
    xt=Number(x)+Number(vt)-((Number(at)*Number(at))/2);
    document.getElementById("3").innerHTML="x(t)="+xt;
}
function wzor4()
{
    var x=document.getElementById("x3").value;
    var vt=document.getElementById("vt3").value;
    var xt=0;
    xt=Number(x)+Number(vt);
    document.getElementById("4").innerHTML="x(t)="+xt;
}
function wzor5()
{
    var F=document.getElementById("F").value;
    var s=document.getElementById("s").value;
    var W=0;
    W=Number(F)*Number(s);
    document.getElementById("5").innerHTML="W="+W;
}
function wzor6()
{
    var W=document.getElementById("W2").value;
    var t=document.getElementById("t").value;
    var P=0;
    P=Number(W)/Number(t);
    document.getElementById("6").innerHTML="P="+P;
}
function wzor7()
{
    var m=document.getElementById("m").value;
    var v=document.getElementById("v").value;
    var Ek=0;
    Ek=(   (   Number(v)*Number(v)  )*Number(m))/2;
    document.getElementById("7").innerHTML="Ek="+Ek;
}
function wzor8()
{
    var m=document.getElementById("m2").value;
    var g=document.getElementById("g").value;
    var h=document.getElementById("h").value;
    var Ep=0;
    Ep=Number(m)*Number(g)*Number(h);
    document.getElementById("8").innerHTML="Ep="+Ep;
}
function wzor9()
{
    var a=document.getElementById("a").value;
    var h=document.getElementById("h").value;
    var P=0;
    P=(Number(a)*Number(h))/2;
    document.getElementById("9").innerHTML="Pole="+P;

}
function wzor10()
{
    var r=document.getElementById("r").value;
    var P=0;
    P=(r*r)*3.1415;
    document.getElementById("11").innerHTML="P="+P;
}
function wzor11()
{
    var a=document.getElementById("a2").value;
    var b=document.getElementById("b2").value;
    var Obw=0;
    P= Number(a)*Number(b);
    Obw= Number(a)*2+Number(b)*2;
    document.getElementById("12").innerHTML="P="+P;
    document.getElementById("13").innerHTML="Obw="+Obw;
}
function wzor12()
{
    var a=document.getElementById("l").value;
    var P=0;
    var Obw=0;
    P=Number(a)*Number(a);
    Obw=Number(a)*4;
    document.getElementById("14").innerHTML="P="+P;
    document.getElementById("15").innerHTML="Obw="+Obw;
}

