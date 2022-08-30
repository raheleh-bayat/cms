
$(document).ready(function(){
    $(".fit").click(function(){
        $(this).find(".change").toggle()
        $(this).find(".icon2").toggleClass('rB')
    });

    $(".decoration").find("a").on("click", (ev) => {
        let page = ev.target;
        fillContent($(page).data("page"))
    });

})  



function fillContent(page){
    $.ajax({
        url:"http://localhost:8000/dashboard.php?page="+page,
        success: function(data){
            if(page=="st"){
                createTable(data);
            }else{
                $(".container").html(data);
            }
        }
    });

}


function createTable(data){
    let table = "<table border=1>";
    for (let i=0;i<data.students.length;i++){
        table += "<tr>";
        table += "<td>"+data.students[i].firstName+"</td>";
        table += "<td>"+data.students[i].lastName+"</td>";
        table += "</tr>";
    }
    table += "</table>";
    $(".container").html(table);
}


function creatList(data){
    let list = "<p>";
    for(let i=0;i<data.list.length;i++){
        list +="salskdkjf";
        list += data.list[i];
        list += data.list[i]; 
    }
    
    
}