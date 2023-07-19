window.onload= showStudents;
function FormSumbit(){
    if(Validate()){
       
       let students=localStorage.getItem('students');
    if(students === null){
        students = [];
    }else{
        students= JSON.parse(students);
    }
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var email = document.getElementById("email");
    var dob = document.getElementById("dob")
    var specializationArray = document.getElementsByClassName('specialization');
    var specialization = [];
    for (var i = 0; specializationArray[i]; ++i) {
        if (specializationArray[i].checked) {
            specialization.push(specializationArray[i].value);
        }
    }
    var website= document.getElementById("website");
    gender = document.querySelector('input[name="gender"]:checked');
    const studentObj = {
        first_name: fname.value,
        last_name: lname.value,
        email:email.value,
        skill:specialization,
        gender:gender,
        website:website.value,
        dob:dob.value,

    }
   
    students.push(studentObj);
    localStorage.setItem('students', JSON.stringify(students));
    showStudents();
    }
}
function Validate(){
    var gender;
      var specialization = [];
    gender = document.querySelector('input[name="gender"]:checked');
    if (gender === null) {
        window.alert("Gender required!");
        gender.focus();
        return false;
    }
    
    var specializationArray = document.getElementsByClassName('specialization');
    for (var i = 0; specializationArray[i]; ++i) {
        if (specializationArray[i].checked) {
            specialization.push(specializationArray[i].value);
        }
    }
    if (specialization == "") {
        alert("Specialization required!");
        return false;
    }
    return true;
}
const notesDiv = document.getElementById('students');
function showStudents(){
    let notesHTML = '';
    let students= localStorage.getItem('students');
    console.log(students)
    if(students === null){
        return;
    }else{
        students= JSON.parse(students);
    }
    for(let i=0; i<students.length; i++){
        notesHTML += `<div class="box-shadow">
                    <span>First Name:</span>
                    <span class="title">${students[i].first_name === "" ? 'First Name' : students[i].first_name}</span>
                    <br>
                    <span>Last Name:</span>
                    <span class="title">${students[i].last_name === "" ? 'First Name' : students[i].last_name}</span>
                    <br>
                    <span>DOB:</span>
                    <span class="title">${students[i].dob === "" ? 'First Name' : students[i].dob}</span>
                    <br>
                    <span>Website:</span>
                    <span class="title">${students[i].website === "" ? 'First Name' : students[i].website}</span>
                    <br>
                    <span>Gender:</span>
                    <span class="title">${students[i].gender === "" ? 'First Name' : students[i].gender[0]}</span>
                    <br>
                    <span>Skills:</span>
                    <span class="title">${students[i].skill === "" ? 'First Name' : students[i].skill}</span>
                

                </div>
        `
    }
    notesDiv.innerHTML = notesHTML;
}