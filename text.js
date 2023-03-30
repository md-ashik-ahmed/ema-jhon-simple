setInterval(() => {
    const allbutton = document.getElementsByClassName("xuxwlft");
    for (const item of allbutton){
        if (item.innerText == "Cancel request"){
            item.click();
        }
    }
    
},2000);