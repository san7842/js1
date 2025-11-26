document.getElementById("btn1").addEventListener("click",dataSave);

async function dataSave(){
    let pname=document.getElementById("prname").value;
    let pprice=document.getElementById("prprice").value;
    let pcity=document.getElementById("prcity").value;
    let pcontact=document.getElementById("prcontact").value;

    let api="http://localhost:3000/products";
    const response=await fetch(api,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            "name":pname,
            "price":pprice,
            "city":pcity,
           "contact":pcontact 
        })
    })
        alert("Data succefully save!!1");
}