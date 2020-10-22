
function showPage(list ,page){
    let msg="";
 let startIndex=(page-1)*9;

 let stopIndex=(page)*9;

 if(stopIndex>list.length===false){
      for(let i=startIndex;i<stopIndex;i++){
          msg +=`<li class = "student-item cf">`;
          msg += `<div class = student-details>`;
          msg+=`<img class = "avatar" src = ${list[i]['picture']['medium']}>`;
          msg += `<h3> ${list[i]['name']['first']} ${list[i]['name']['last']}</h3> `;
          msg += `<span class = "email"> ${list[i]['email']} </span> `;
          msg += `</div>`;
          msg += `<div class = "joined-details">`;
          msg += `<span class = "date"> ${list[i]['registered']['date']}</span> `;
          msg += `</div>`;
          msg += `</li>`;
     }
 }else{
      for(let i =startIndex; i < list.length;i++) {
          msg +=`<li class = "student-item cf">`;
          msg += `<div class = student-details>`;
          msg+=`<img class = "avatar" src = ${list[i]['picture']['medium']}>`;
          msg += `<h3> ${list[i]['name']['first']} ${list[i]['name']['last']}</h3> `;
          msg += `<span class = "email"> ${list[i]['email']} </span> `;
          msg += `</div>`;
          msg += `<div class = "joined-details">`;
          msg += `<span class = "date"> ${list[i]['registered']['date']}</span> `;
          msg += `</div>`;
          msg += `</li>`;
      }

}
return msg;
}
function createButton(list){
    let linkList=document.querySelector(".link-list")
    let number=Math.floor(list.length/9);
    if(list.length%9!==0){
        number+=1;
    }
    for(let i=1;i<=number;i++){
        let button=document.createElement('BUTTON');
        let li=document.createElement('li');
        button.type="button";
        button.textContent=i;
        button.addEventListener("click" , () => {
            ul.innerHTML = showPage(data, i);
        })
        li.appendChild(button);

        linkList.appendChild(li);

    }


}
   let search=(data,text)=>{

        let objects=[];
        for (let i = 0 ; i < data.length;i++) {
            if (data[i]['name']['first'].toLowerCase().includes(text) || data[i]['name']['last'].toLowerCase().includes(text)) {
                objects.push(data[i]);
            }
         
        }

        return objects;
}

function removeChildren (parent, childArray) {
    for (let i = 0; i < childArray.length;i++) {
        parent.removeChild(childArray[i]);
    }

}





