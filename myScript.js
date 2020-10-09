const nodes = new LinkedList();
var currName = null;
var iSelected = -1;

//nodes.printList();
//values for city select in form
var values = [
  "Lahore",
  "Karachi",
  "Multan",
  "Islamabad",
  "Faislabad",
  "Quetta",
];

function createTable() {
  var tblHeaders = ["Name", "Gender", "Age", "City", "Action"];
  //create table
  var as = document.createElement("ASIDE");
  var tbl = document.createElement("TABLE");
  tbl.setAttribute("class", "table_class");
  tbl.setAttribute("id", "table1");
  tbl.appendChild(as);
  tbl.classList.add("wrap2");
  tbl.classList.add("myDIV2");

  document.body.appendChild(tbl);

  var tabl = document.getElementById("table1");
  var n = nodes.numberOfNodes();
  var i = 0;

  //creating table rows
  var tblRows = document.createElement("TR");
  var idRows = "tblR " + 0;
  tblRows.setAttribute("id", idRows);
  tabl.appendChild(tblRows);

  //Row wise ID's
  var rowID = document.getElementById(idRows);

  //table colums
  for (var j = 0; j < 5; j++) {
    //for the first row with row headers
    if (i == 0) {
      //column headers
      var tblHeader = document.createElement("TH");
      var idH = "tblH" + " 0 " + [j];
      tblHeader.setAttribute("id", idH);
      tabl.appendChild(tblHeader);
      var txt = document.createTextNode(tblHeaders[j]);
      tblHeader.appendChild(txt);
    }
  }
}

function populateTable() {
  var tabl = document.getElementById("table1");
  //Node
  var temp = nodes.tail;
  var n = nodes.numberOfNodes();
  //traverse linkedlist and get all table entries
  var i = n;
  var tblRows = document.createElement("TR");
  var idRows = "tblR" + [i];
  tblRows.setAttribute("id", idRows);
  tabl.appendChild(tblRows);

  //Row wise ID's
  var rowID = document.getElementById(idRows);

  //table colums
  for (var j = 0; j < 5; j++) {
    //column data
    if (i > 0 && j < 4) {
      //for name
      if (j == 0) {
        var tD1 = document.createElement("TD");
        var idT = "tbName " + i + " " + j;
        tD1.setAttribute("id", idT);
        rowID.appendChild(tD1);
        tD1.value = temp.Name;
        tD1.innerText = temp.Name;
      }
      //for gender
      else if (j == 1) {
        var tD2 = document.createElement("TD");
        var idT = "tbGender " + i + " " + j;
        tD2.setAttribute("id", idT);
        rowID.appendChild(tD2);
        tD2.value = temp.Gender;
        tD2.innerText = temp.Gender;
      }
      //for age
      else if (j == 2) {
        var tD3 = document.createElement("TD");
        var idT = "tbAge " + i + " " + j;
        tD3.setAttribute("id", idT);
        rowID.appendChild(tD3);
        tD3.value = temp.Age;
        tD3.innerText = temp.Age;
        // var txt3 = document.createTextNode(temp.Age);
        // txt3.setAttribute("id", "txt3");
        // tD3.appendChild(txt3);
      }
      //for city
      else if (j == 3) {
        var tD4 = document.createElement("TD");
        var idT = "tbCity " + i + " " + j;
        tD4.setAttribute("id", idT);
        rowID.appendChild(tD4);
        tD4.value = temp.City;
        tD4.innerText = temp.City;
        // var txt4 = document.createTextNode(temp.City);
        // txt4.setAttribute("id", "txt4");
        // tD4.appendChild(txt4);
      }
    }
    //update / remove
    if (i > 0 && j == 4) {
      var tD5 = document.createElement("input");
      var idD = "UpdateID" + " " + [i];
      tD5.setAttribute("id", idD);
      tD5.setAttribute("type", "button");
      tD5.setAttribute("value", "UPDATE");
      //send update id to clicked
      rowID.appendChild(tD5);
      tD5.classList.add("button2");

      //update on row clicked
      tD5.addEventListener("click", function () {
        document.getElementById("updateButton").disabled = false;
        document.getElementById("addButton").disabled = true;
        document.getElementById("nameField").value = document.getElementById(
          "tbName " + i + " " + 0
        ).value;
        currName = document.getElementById("tbName " + i + " " + 0).value;
        iSelected = i;

        document.getElementById("ageField").value = document.getElementById(
          "tbAge " + i + " " + 2
        ).value;
        var gen = 0;
        if (
          document.getElementById("tbGender " + i + " " + 1).value === "Male"
        ) {
          gen = 1;
          document.getElementById("maleID").checked = true;
          document.getElementById("femaleID").checked = false;
        } else {
          gen = 2;
          document.getElementById("maleID").checked = false;
          document.getElementById("femaleID").checked = true;
        }
        var city = document.getElementById("tbCity " + i + " " + 3).value;
        var sel = document.getElementById("selectCity");
        var j = 0;
        var option;
        for (const val of values) {
          option = document.getElementById("option " + j);
          if (option.value === city) {
            sel.selectedIndex = j;
            break;
          }
          j++;
        }
      });
      //document.getElementById("updateButton");
      var txt5 = document.createTextNode("UPDATE");
      tD5.appendChild(txt5);

      var txt6 = document.createTextNode(" / ");
      tD5.appendChild(txt6);

      var tD7 = document.createElement("Input");
      tD7.setAttribute("type", "Button");
      tD7.setAttribute("value", "REMOVE");
      var idD2 = "RemoveID" + [j];
      tD7.setAttribute("id", idD2);
      rowID.appendChild(tD7);
      tD7.classList.add("button2");

      tD7.addEventListener("click", function () {
        var c1 = document.getElementById("tblR" + [i]);
        tabl.removeChild(c1);
      });
    }
  }
}

function createForms() {
  var as = document.createElement("ASIDE");
  var form1 = document.createElement("FORM");
  form1.setAttribute("id", "form1");
  document.body.appendChild(form1);
  var frID = document.getElementById("form1");
  form1.classList.add("wrap");
  form1.classList.add("myDIV");
  form1.appendChild(as);
  //line break
  var lB = document.createElement("br");
  frID.appendChild(lB);

  //creating label
  var labl = document.createElement("LABEL");
  labl.appendChild(document.createTextNode("Name"));
  frID.appendChild(labl);

  //create name input field
  var inp = document.createElement("INPUT");
  inp.setAttribute("id", "nameField");
  inp.setAttribute("type", "text");
  inp.setAttribute("name", "Full Name");
  frID.appendChild(inp);

  //line break
  var lB2 = document.createElement("br");
  frID.appendChild(lB2);

  //creating label
  var labl2 = document.createElement("LABEL");
  labl2.appendChild(document.createTextNode("Gender:  "));
  frID.appendChild(labl2);
  //labl2.classList.add("wrap");

  //Male chkpoint
  var labl3 = document.createElement("LABEL");
  labl3.appendChild(document.createTextNode("Male"));
  frID.appendChild(labl3);

  //male radio button
  var inp2 = document.createElement("INPUT");
  inp2.setAttribute("id", "maleID");
  inp2.setAttribute("type", "radio");
  frID.appendChild(inp2);

  //feemale chkpoint
  var labl4 = document.createElement("LABEL");
  labl4.appendChild(document.createTextNode("Female"));
  frID.appendChild(labl4);

  //female radio button
  var inp3 = document.createElement("INPUT");
  inp3.setAttribute("id", "femaleID");
  inp3.setAttribute("type", "radio");
  frID.appendChild(inp3);

  //line break
  var lB3 = document.createElement("br");
  frID.appendChild(lB3);

  //age
  //creating label
  var labl5 = document.createElement("LABEL");
  labl5.appendChild(document.createTextNode("Age"));
  frID.appendChild(labl5);
  //labl5.classList.add("wrap");

  //create name input field
  var inp4 = document.createElement("INPUT");
  inp4.setAttribute("id", "ageField");
  inp4.setAttribute("type", "text");
  inp4.setAttribute("name", "AGE");
  frID.appendChild(inp4);

  //city

  //line break
  var lB4 = document.createElement("br");
  frID.appendChild(lB4);

  //age
  //creating label
  var labl6 = document.createElement("LABEL");
  labl6.appendChild(document.createTextNode("City"));
  frID.appendChild(labl6);
  //labl6.classList.add("wrap");

  //create city input field

  var inp5 = document.createElement("select");
  inp5.setAttribute("id", "selectCity");
  var i = 0;
  for (const val of values) {
    var option = document.createElement("option");
    option.setAttribute("id", "option " + i);
    option.value = val;
    option.text = val.charAt(0).toUpperCase() + val.slice(1);
    inp5.appendChild(option);
    i++;
  }

  frID.appendChild(inp5);

  //reset button
  //line break
  var lB5 = document.createElement("br");
  frID.appendChild(lB5);

  var inp6 = document.createElement("INPUT");
  inp6.setAttribute("id", "resetButton");
  inp6.setAttribute("type", "Button");
  inp6.setAttribute("value", "RESET");
  frID.appendChild(inp6);
  inp6.classList.add("button");
  //inp6.classList.add("wrap");

  //add button
  var inp7 = document.createElement("INPUT");
  inp7.setAttribute("id", "addButton");
  inp7.setAttribute("type", "Button");
  inp7.setAttribute("value", "ADD");
  frID.appendChild(inp7);
  inp7.classList.add("button");

  //update button
  var inp8 = document.createElement("INPUT");
  inp8.setAttribute("id", "updateButton");
  inp8.setAttribute("type", "Button");
  inp8.setAttribute("value", "UPDATE");
  frID.appendChild(inp8);
  inp8.classList.add("button");
}

//window.onload =
createTable();
createForms();

//one radio button at a time
var maleID1 = document.getElementById("maleID");
var femaleID1 = document.getElementById("femaleID");
maleID1.onchange = deselect;
femaleID1.onchange = deselect2;

//update disabled and reset button setting
var updateB = document.getElementById("updateButton");
updateB.disabled = true;
updateB.onclick = updateClicked;

function updateClicked() {
  var nameE = document.getElementById("nameField");
  var name = null;
  if (nameE.value != null) {
    name = nameE.value;
  }
  var ageE = document.getElementById("ageField");
  var age = null;
  if (ageE.value != null) {
    age = ageE.value;
  }
  var cityE = document.getElementById("selectCity");
  var city = null;
  if (cityE.value != null) {
    city = cityE.value;
  }
  var gender;
  if (document.getElementById("femaleID").checked == true) {
    gender = 1;
  } else if (document.getElementById("maleID").checked) {
    gender = 2;
  }

  if (name != null && age != null && city != null) {
    if (gender == 2) {
      var tName = document.getElementById("tbName " + iSelected + " " + 0);
      tName.innerText = name;

      var tAge = document.getElementById("tbAge " + iSelected + " " + 2);
      tAge.innerText = age;

      var tCity = document.getElementById("tbCity " + iSelected + " " + 3);
      tCity.innerText = city;

      var tGender = document.getElementById("tbGender " + iSelected + " " + 1);
      tGender.innerText = "Male";

      document.getElementById("addButton").disabled = false;
      document.getElementById("updateButton").disabled = true;
      clearForm();
    } else if (gender == 1) {
      var tName = document.getElementById("tbName " + iSelected + " " + 0);
      tName.innerText = name;

      var tAge = document.getElementById("tbAge " + iSelected + " " + 2);
      tAge.innerText = age;

      var tCity = document.getElementById("tbCity " + iSelected + " " + 3);
      tCity.innerText = city;

      var tGender = document.getElementById("tbGender " + iSelected + " " + 1);
      tGender.innerText = "Female";

      document.getElementById("addButton").disabled = false;
      document.getElementById("updateButton").disabled = true;
      clearForm();
    }
  }
}

//reset table
var resetB = document.getElementById("resetButton");
resetB.onclick = resetTable;

//add node event
var addButton = document.getElementById("addButton");
addButton.onclick = addClicked;

function deselect() {
  femaleID1.checked = false;
}

function deselect2() {
  maleID1.checked = false;
}

function addClicked() {
  var nameE = document.getElementById("nameField");
  var name = null;
  if (nameE.value != null) {
    name = nameE.value;
  }
  var ageE = document.getElementById("ageField");
  var age = null;
  if (ageE.value != null) {
    age = ageE.value;
  }
  var cityE = document.getElementById("selectCity");
  var city = null;
  if (cityE.value != null) {
    city = cityE.value;
  }
  var gender;
  if (document.getElementById("femaleID").checked == true) {
    gender = 1;
  } else if (document.getElementById("maleID").checked) {
    gender = 2;
  }

  //creating node
  if (name != null && age != null && city != null) {
    if (gender == 2) {
      nodes.addNewNode(name, "Male", age, city);
      populateTable();
      clearForm();
    } else if (gender == 1) {
      nodes.addNewNode(name, "Female", age, city);
      populateTable();
      clearForm();
    }
  }
}

function clearForm() {
  var name = document.getElementById("nameField");
  name.value = null;

  var gender = document.getElementById("femaleID");
  gender.checked = false;

  var gender = document.getElementById("maleID");
  gender.checked = false;

  var age = document.getElementById("ageField");
  age.value = null;

  var city = document.getElementById("selectCity");
  city.value = null;
}

function resetTable() {
  var table = document.getElementById("table1");
  var n = nodes.numberOfNodes();

  var i = 1;
  while (i <= n) {
    var c1 = document.getElementById("tblR" + [i]);
    table.removeChild(c1);
    i++;
  }
}
