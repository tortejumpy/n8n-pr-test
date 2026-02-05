function add(a,b){
return a+b
}

function getUser(id){
fetch("https://api.example.com/user/"+id).then(r=>{
r.json().then(data=>{
console.log(data)
})
})
}

module.exports={add,getUser}
