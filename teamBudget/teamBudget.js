function addRow(event)
{
    let Title = document.getElementById("Title").value;
    let Desc = document.getElementById("Desc").value;
    let blogs = document.getElementById("blogs").value;
    event.preventDefault(); 
    // localStorage.clear();
    // console.log(Title, Desc, blogs);  
    // console.log("local Storage",localStorage);
    // let Object1 = [{
    //     "Title" : Title,
    //     "Desc" : Desc,
    //     "blogs" : blogs
    // },{"Title":"llk","Desc":"knkl","blogs":"hjhjkkj"}];

    // localStorage.setItem("rows",JSON.stringify(Object1));

    if(!localStorage.getItem("rows"))
    {
        let Object1 = [{
            "Title" : Title,
            "Desc" : Desc,
            "blogs" : blogs
        }];

        console.log("added first item : ",Object1);

        localStorage.setItem("rows",JSON.stringify(Object1));
    }
    else
    {
        console.log("before",JSON.parse(localStorage.getItem("rows")));

        let Object2 = {
            "Title" : Title,
            "Desc" : Desc,
            "blogs" : blogs
        };

        let currentRows = JSON.parse(localStorage.getItem("rows"));
        console.log("adding extra Row",Object2);
        currentRows.push(Object2);

        localStorage.setItem("rows",JSON.stringify(currentRows));
    }

    console.log("at the end pf adding : ",localStorage);
    // console.log(JSON.stringify(localStorage));
    // for(let i=0 ; i<JSON.parse(localStorage.getItem("rows")).length;i++)
    // {
    //     console.log(JSON.parse(localStorage.getItem("rows"))[i]);
    // }
}


function tableLoad(event)
{
    console.log("table load",event);
    event.preventDefault();
    var empTab = document.getElementById('BudgetTable');
    var rowCnt = empTab.rows.length;    // get the number of rows.
    console.log("Current Row Count : ",rowCnt);
  
    console.log(JSON.stringify(localStorage));
    let count = 0;
    for(let i=0 ; i<JSON.parse(localStorage.getItem("rows")).length;i++)
    {
        console.log("Adding Row : ",JSON.parse(localStorage.getItem("rows"))[i]);
        addNewRow(JSON.parse(localStorage.getItem("rows"))[i]);

        count += parseInt(JSON.parse(localStorage.getItem("rows"))[i]["blogs"]);
    }
    console.log("Complete Count : ",count);

    addTotalRow(count);
}

function addNewRow(row)
{
    var empTab = document.getElementById('BudgetTable');
    console.log()
    var rowCnt = empTab.rows.length;    // get the number of rows.
    var tr = empTab.insertRow(rowCnt); // table row.

    tr = empTab.insertRow(rowCnt);
    
    


     /////////Desc
     var td2 = document.createElement('td');          // TABLE DEFINITION.
     td2 = tr.insertCell(row["Desc"]);
 
     var ele2 = document.createElement('p');
     ele2.innerHTML = row["blogs"];
 
     td2.appendChild(ele2);
    
     /////////Desc
    var td1 = document.createElement('td');          // TABLE DEFINITION.
    td1 = tr.insertCell(row["Desc"]);

    var ele1 = document.createElement('p');
    ele1.innerHTML = row["Desc"];

    td1.appendChild(ele1);


    ////////Title
    var td = document.createElement('td');          // TABLE DEFINITION.
    td = tr.insertCell(row["Title"]);

    var ele = document.createElement('p');
    ele.innerHTML = row["Title"];

    td.appendChild(ele);
    // /////////blogs
    // var td2 = document.createElement('td');          // TABLE DEFINITION.
    // td2 = tr.insertCell(row["blogs"]);

    // var ele2 = document.createElement('p');
    // ele2.innerHTML = row["blogs"];

    // td2.appendChild(ele2);




    console.log("row to be added : ",tr);
}

function addTotalRow(count)
{
    var empTab = document.getElementById('BudgetTable');
    console.log()
    var rowCnt = empTab.rows.length;    // get the number of rows.
    var tr = empTab.insertRow(rowCnt); // table row.

    tr = empTab.insertRow(rowCnt);


    /////////Desc
    var td2 = document.createElement('td');          // TABLE DEFINITION.
    td2 = tr.insertCell("count1");

    var ele2 = document.createElement('p');
    ele2.innerHTML = count.toString();

    td2.appendChild(ele2);

    /////////Desc
    var td1 = document.createElement('td');          // TABLE DEFINITION.
    td1 = tr.insertCell("count2");

    var ele1 = document.createElement('p');
    ele1.innerHTML = " ";

    td1.appendChild(ele1);


    ////////Title
    var td = document.createElement('td');          // TABLE DEFINITION.
    td = tr.insertCell("count3");

    var ele = document.createElement('p');
    ele.innerHTML = "TOTAL BUDGET";

    td.appendChild(ele);
}




// var insert = document.getElementById('insertClient');
// insert.addEventListener('click', function() {
//   var table = document.getElementById('insert'),
//     Clientname = prompt("Enter "),
//     Projectname = prompt("Enter the filling"),
//     Budget = prompt("Enter the filling");

//   for (var r = 0; r < 1; r += 1) {
//     var x = document.getElementById('insertfirsttable').insertRow(r);
//     for (var c = 0; c < 10; c += 1) {
//       var y = x.insertCell(c);
//     }

//     table.rows[r].cells[0].innerHTML = itemType;
//     table.rows[r].cells[1].innerHTML = filling1;
//     table.rows[r].cells[2].innerHTML = filling2;
//     table.rows[r].cells[3].innerHTML = filling3;
//     table.rows[r].cells[4].innerHTML = stock;
//     table.rows[r].cells[5].innerHTML = minimum_Stock;
//     table.rows[r].cells[9].innerHTML = '<button id="sellbtn" style="width:102px; height: 25px; font-size:18px; cursor:pointer">Sell</button>';
//     table.rows[r].cells[9].style.width = "100px";
//     var sellBtn = document.getElementById("sellbtn");
//   }
//   //problem is here i guess
//   sellBtn.addEventListener("click", function() {
//     var sell = prompt("Enter the stock amount you're selling"),
//       total = stock - sell;
//     for (var t = 0; t < table; t += 1) {
//       for (var c = 0; c < table.cells.length; c += 1) {}
//       table.rows[t].cells[4].innerHTML = total;

//     }
//   });
// });

