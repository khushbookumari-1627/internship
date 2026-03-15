async function addLead(){

let lead = {
name:document.getElementById("name").value,
email:document.getElementById("email").value,
source:document.getElementById("source").value,
status:document.getElementById("status").value,
notes:document.getElementById("notes").value
};

await fetch("http://localhost:5000/leads",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(lead)
});

loadLeads();
}

async function loadLeads(){

let res = await fetch("http://localhost:5000/leads");
let data = await res.json();

let list=document.getElementById("leadList");
list.innerHTML="";

data.forEach(l=>{
let li=document.createElement("li");
li.innerText=l.name+" | "+l.email+" | "+l.status;
list.appendChild(li);
});
}

loadLeads();