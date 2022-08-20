/*fetch("sidebar.json")
.then(function(responce){
    return responce.json();
})
.then(function(side){
    var placeholder=document.querySelector("#data-output");
    var out="";
    for(var sidebar of side){
        out +=`
          <tr>
             <td>${sidebar.number}</td>
             <td>${sidebar.students}</td>
             <td>${sidebar.studentEmailid}</td>
             <td>${sidebar.studentcontact}</td>
             
          </tr>
        `;
    }
    placeholder.innerHTML=out;
})*/
// /*http://192.168.43.180:8090/start/getAlldata
$(document).ready(function () {
    var table = $("#data-output");

    $.getJSON("sidebar.json", function (data) {
        $.each(data, function (key, value) {
            var trow = "<tr><td>" + value.id + "</td><td>" + value.com_name
                + "</td><td>" + value.mail + "</td><td>" + value.mob_no + "</td><td>" + value.created_at.toString().replace('T', ' ')
                + "</td><td>" + value.updated_at.toString().replace('T', ' ') + "</td></tr>";

            table.append(trow);


        });
    });
});
