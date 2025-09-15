

function change(event){
   event.preventDefault();
const role = document.getElementById("role").value;
if(role=="student"){
window.location.href="student.html";
}
else if(role=="teacher"){


    window.location.href="teacher.html";
}
else{
    window.alert("PLease Select a role");
}

}
















