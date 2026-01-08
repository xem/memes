h1.innerHTML = year;

html = "";

for(i of files){
  if(i.endsWith("mp4") || i.endsWith("avi") || i.endsWith("3gp") || i.endsWith("flv")){
     html += "<br><br><br><br><br><br><br><video controls src='" + year + "/" + i + "'></video><br><br><a href='" + year + "/" + i + "'>download video</a>";
  }
  else {
    html += "<br><br><br><br><br><br><br><img src='" + year + "/" + i + "'>" + ((i.includes(" ")) ? ("<br><br><b>"+i.replace(/\..*?$/,"")+"</b>") : "");
  }
}

content.innerHTML += html;