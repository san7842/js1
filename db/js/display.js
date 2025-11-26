async function dataDisplay(){
    let api="http://localhost:3000/products";
    const myobj=await fetch(api);
    const myData=await myobj.json();

    let Table=`<table border="1" width="600" align="center" bgcolor="pink">
    <tr>
    <th>product</th>
        <th>price</th>
            <th>city</th>
                <th>contact</th>
                </tr>
    `
    myData.map((key)=>{
        Table+=`
        <tr>
    <td>${key.name}</td>
        <td>${key.price}</td>
            <td>${key.city}</td>
                <td>${key.contact}</td>
                </tr>`
    })
    Table+="</table>";
    document.getElementById("demo").innerHTML=Table;
}

dataDisplay();