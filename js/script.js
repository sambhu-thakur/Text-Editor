
 updateText = ()=>{
   
  let text = document.getElementById("text-input").value;
  document.getElementById("text-output").innerText=text;
}

 makeBold = (elem)=>{
  
  elem.classList.toggle("active");
 let text = document.getElementById("text-output").classList.toggle("bold")

}

 makeItalic =(elem)=>{
  elem.classList.toggle("active");
   document.getElementById("text-output").classList.toggle("italic");
}

 makeUnderline = (elem)=>{
   
    elem.classList.toggle("active");
    // let text = document.getElementById("text-output").classList.toggle("underline");
    let formattedText = document.getElementById("text-output");
    if(formattedText.classList.contains("underline")){
      formattedText.classList.remove("underline");

    }else formattedText.classList.add("underline");
}

alignText =(elem, alignType)=>{
 
     elem.classList.toggle("active");
     document.getElementById("text-output").style.textAlign=alignType;
    let alignButton = document.getElementsByClassName("align");
    // for(let i = 0;i<buttonList.length;i++){
    //   buttonList[i].classList.remove("active");
    // }

    // iterating  using for of lopp
    // for (let button of alignButton) {
    //     button.classList.remove("active");
    // }

    // iteration usign map()
    alignButton.map((button)=>{
      button.classList.remove("active");
    })
    elem.classList.add("active");
     
}
