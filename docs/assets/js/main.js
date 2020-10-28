"use strict";const fr=new FileReader,uploadBtn=document.querySelector(".js__profile-trigger"),fileField=document.querySelector(".js__profile-upload-btn"),profileImage=document.querySelector(".js__profile-image"),profilePreview=document.querySelector(".js__profile-preview");function getImage(e){const t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t)}function writeImage(){data.photo=fr.result,profileImage.style.backgroundImage=`url(${fr.result})`,profilePreview.style.backgroundImage=`url(${fr.result})`}function fakeFileClick(){fileField.click()}uploadBtn.addEventListener("click",fakeFileClick),fileField.addEventListener("change",getImage);let data={name:"Nombre Apellido",job:"Front-end developer",phone:"#",email:"#",linkedin:"#",github:"#",photo:"url(../images/preview-default-NaN-team-monsters.jpg)",palette:1};const header1=document.querySelector(".js-header1"),header2=document.querySelector(".js-header2"),header3=document.querySelector(".js-header3"),content1=document.querySelector(".js-content1"),content2=document.querySelector(".js-content2"),content3=document.querySelector(".js-content3");function collapse1(){content1.classList.toggle("collapsed"),content1.classList.contains("collapsed")||(content2.classList.add("collapsed"),content3.classList.add("collapsed"))}function collapse2(){content2.classList.toggle("collapsed"),content2.classList.contains("collapsed")||(content1.classList.add("collapsed"),content3.classList.add("collapsed"))}function collapse3(){content3.classList.toggle("collapsed"),content3.classList.contains("collapsed")||(content1.classList.add("collapsed"),content2.classList.add("collapsed"))}header1.addEventListener("click",collapse1),header2.addEventListener("click",collapse2),header3.addEventListener("click",collapse3);const stick=document.querySelector(".js-stick"),previewName=document.querySelector(".js-preview-name"),iconList=document.querySelectorAll(".js-icon"),paletteCold=document.querySelector(".js-option1"),paletteWarm=document.querySelector(".js-option2"),paletteMild=document.querySelector(".js-option3"),paletteColdValue=parseInt(paletteCold.value),paletteWarmValue=parseInt(paletteWarm.value),paletteMildValue=parseInt(paletteMild.value);function selectPaletteCold(){data.palette=paletteColdValue,paintPalette()}function selectPaletteWarm(){data.palette=paletteWarmValue,paintPalette()}function selectPaletteMild(){data.palette=paletteMildValue,paintPalette()}function paintPalette(){if(1===data.palette){stick.classList.add("stick-border-cold"),stick.classList.remove("stick-border-mild"),stick.classList.remove("stick-border-warm"),previewName.classList.add("name-cold"),previewName.classList.remove("name-mild"),previewName.classList.remove("name-warm");for(const e of iconList)e.classList.add("icon-cold"),e.classList.remove("icon-mild"),e.classList.remove("icon-warm")}else if(2===data.palette){stick.classList.remove("stick-border-cold"),stick.classList.remove("stick-border-mild"),stick.classList.add("stick-border-warm"),previewName.classList.remove("name-cold"),previewName.classList.remove("name-mild"),previewName.classList.add("name-warm");for(const e of iconList)e.classList.remove("icon-cold"),e.classList.remove("icon-mild"),e.classList.add("icon-warm")}else if(3===data.palette){stick.classList.remove("stick-border-cold"),stick.classList.add("stick-border-mild"),stick.classList.remove("stick-border-warm"),previewName.classList.remove("name-cold"),previewName.classList.add("name-mild"),previewName.classList.remove("name-warm");for(const e of iconList)e.classList.remove("icon-cold"),e.classList.add("icon-mild"),e.classList.remove("icon-warm")}storeData()}paletteCold.addEventListener("click",selectPaletteCold),paletteWarm.addEventListener("click",selectPaletteWarm),paletteMild.addEventListener("click",selectPaletteMild);const inputList=document.querySelectorAll(".js-field"),previewText=document.querySelectorAll(".js-preview-text"),nameInit=previewText[0].innerHTML,jobInit=previewText[1].innerHTML,previewHref=document.querySelectorAll(".js-preview-href"),hrefInit="#";function getInfo(e){data[e.currentTarget.id]=e.currentTarget.value,paint(),storeData()}chargeData();for(const e of inputList)e.addEventListener("keyup",getInfo);function paint(){previewText[0].innerHTML=data.name||nameInit,previewText[1].innerHTML=data.job||jobInit,previewHref[0].href="tel:"+data.phone||"#",previewHref[1].href="mailto:"+data.email||"#",previewHref[2].href="https://"+data.linkedin||"#",previewHref[3].href="https://github.com/"+data.github||"#",profileImage.style.backgroundImage=`url(${data.photo})`||"url(../images/preview-default-NaN-team-monsters.jpg)"}const btnReset=document.querySelector(".js-reset");function handleReset(){data.name=nameInit,data.job=jobInit,data.phone="#",data.email="#",data.linkedin="#",data.github="#",data.photo="../assets/images/preview-default-NaN-team-monsters.jpg",data.palette=1;for(const e of inputList)e.value="";profileImage.style.backgroundImage="url(../assets/images/bg-yellow-NaN-monster.jpg)",profilePreview.style.backgroundImage="url(../assets/images/preview-default-NaN-team-monsters.jpg)",paintPalette(),paint(),storeData()}function storeData(){const e=JSON.stringify(data);localStorage.setItem("filledData",e)}function chargeData(){const e=localStorage.getItem("filledData"),t=JSON.parse(e);null!==t&&(data=t),paintPalette(),paint()}btnReset.addEventListener("click",handleReset);const submitButton=document.querySelector(".js-submit"),responseURL=document.querySelector(".js-response"),form=document.querySelector(".js-form");function sendData(){sendRequest(data)}function sendRequest(){fetch("https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/",{method:"POST",body:JSON.stringify(data),headers:{"content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){showURL(e)})).catch((function(e){console.log(e)}))}const hiddenBox=document.querySelector(".js-share-url"),inactiveButton=document.querySelector(".js-share");function showURL(e){e.success?(responseURL.innerHTML=e.cardURL,responseURL.href=e.cardURL,hiddenBox.classList.remove("hidden"),inactiveButton.classList.add("inactive"),submitButton.removeEventListener("click",sendRequest)):responseURL.innerHTML="ERROR:"+e.error}submitButton.addEventListener("click",sendRequest);