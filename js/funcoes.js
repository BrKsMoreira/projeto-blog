xmlhttp = new XMLHttpRequest();

xmlhttp.open("GET","xml/conteudo.xml",false);

xmlhttp.send();

xmlDoc = xmlhttp.responseXML;

x = xmlDoc.getElementsByTagName("postagem");

function funcaoConteudo()
{
    for(i = 0;i <= 2; i++)
    {

    document.write(
        "<tr>" + 
            "<td>" + x[i].getAttribute("codigo") + "</td>" +
            "<td>B</td>" +
            "<td>C</td>" +
            "<td>D</td>" +
        "</tr>");
    }
}