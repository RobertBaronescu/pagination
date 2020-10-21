
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
      for(let i =startIndex; i < stopIndex;i++) {
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



