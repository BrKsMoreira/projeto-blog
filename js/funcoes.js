xmlhttp = new XMLHttpRequest();

xmlhttp.open("GET","xml/conteudo.xml",false);

xmlhttp.send();

xmlDoc = xmlhttp.responseXML;

x = xmlDoc.getElementsByTagName("postagem");

function funcaoconteudo()
{
    for(i = 1; i <=10; i++){

    document.write("<tr>" + 
    "<td>" + x[1].getAttribute("1") + "</td>" +
    "<td>B</td>" +
    "<td>C</td>" +
    "<td>D</td>" +
    "</tr>");
}
}