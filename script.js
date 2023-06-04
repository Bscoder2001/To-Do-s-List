console.log('Welcome to my profile');
let tableBody = document.getElementById('tableBody');
let add = document.getElementById('add');

let getAndUpdate = () => {
    let tit = document.getElementById('text').value;
    let desc = document.getElementById('textarea').value;
    if (localStorage.getItem('itemJson') == null) {
        itemJsonArray = [];
        itemJsonArray.push([tit, desc])
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray))
    }
    else {
        itemJsonArray = JSON.parse(localStorage.getItem('itemJson'));
        itemJsonArray.push([tit, desc])
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray))
    }
    update()
}

let update = () => {
    if (localStorage.getItem('itemJson') == null) {
        itemJsonArray = [];
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray))
    }
    else {
        itemJsonArray = JSON.parse(localStorage.getItem('itemJson'));
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArray))
    }

    let html = '';

    itemJsonArray.forEach((element, index) => {
        html += `<tr>
        <td>${index + 1}</td>
        <td>${element[0]} </td>
        <td>${element[1]}</td>
        <td><button onclick = deleted(${index})> Delete</button></td>
        </tr>`
    });

    tableBody.innerHTML = html;
}
update()
add.addEventListener('click', getAndUpdate)

let deleted = (itemDeleted)=>{
console.log('deleted', itemDeleted)
itemJsonArray = JSON.parse(localStorage.getItem('itemJson'));

//deletation of the index
itemJsonArray.splice(itemDeleted, 1);
localStorage.setItem('itemJson', JSON.stringify(itemJsonArray))
update();
};


let clear = document.getElementById('clear');

clear.addEventListener('click', ()=>{
    if(confirm('Do you really want to clear your list ?')){
        localStorage.clear();
        update();
    };
    
})