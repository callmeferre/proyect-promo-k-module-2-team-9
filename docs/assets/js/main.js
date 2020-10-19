"use strict";const fr=new FileReader,uploadBtn=document.querySelector(".js__profile-trigger"),fileField=document.querySelector(".js__profile-upload-btn"),profileImage=document.querySelector(".js__profile-image"),profilePreview=document.querySelector(".js__profile-preview");function getImage(e){const t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t)}function writeImage(){profileImage.style.backgroundImage=`url(${fr.result})`,profilePreview.style.backgroundImage=`url(${fr.result})`}function fakeFileClick(){fileField.click()}uploadBtn.addEventListener("click",fakeFileClick),fileField.addEventListener("change",getImage);const header1=document.querySelector(".js-header1"),header2=document.querySelector(".js-header2"),header3=document.querySelector(".js-header3"),content1=document.querySelector(".js-content1"),content2=document.querySelector(".js-content2"),content3=document.querySelector(".js-content3");function collapse1(){content1.classList.toggle("collapsed"),content1.classList.contains("collapsed")||(content2.classList.add("collapsed"),content3.classList.add("collapsed"))}function collapse2(){content2.classList.toggle("collapsed"),content2.classList.contains("collapsed")||(content1.classList.add("collapsed"),content3.classList.add("collapsed"))}function collapse3(){content3.classList.toggle("collapsed"),content3.classList.contains("collapsed")||(content1.classList.add("collapsed"),content2.classList.add("collapsed"))}header1.addEventListener("click",collapse1),header2.addEventListener("click",collapse2),header3.addEventListener("click",collapse3);const inputList=document.querySelectorAll(".js-field");let data={fullname:"Nombre Apellido",job:"Front-end developer",email:"#",phone:"#",linkedin:"#",github:"#"};const previewText=document.querySelectorAll(".js-preview-text");console.log(previewText);const nameInit=previewText[0].innerHTML;console.log("Esto es nameInit "+nameInit);const jobInit=previewText[1].innerHTML;function getInfo(e){data[e.currentTarget.id]=e.currentTarget.value,"fullname"===e.currentTarget.id?""!==e.currentTarget.value?previewText[0].innerHTML=data.fullname:previewText[0].innerHTML=nameInit:"job"===e.currentTarget.id&&(""!==e.currentTarget.value?previewText[1].innerHTML=data.job:previewText[1].innerHTML=jobInit)}console.log("Esto es jobInit "+jobInit);for(const e of inputList)e.addEventListener("keyup",getInfo);