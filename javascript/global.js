function addLoadEvent(func){                               
    var oldonload = window.onload;                         
    if(typeof window.onload != 'function'){                
        window.onload = func;
    }else{
        window.onload = function(){                       
            oldonload();
            func();
        }
    }
}

function insertAfter(newElement,targetElement){
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextElementSibling);
    }
}


function addClass(element,value){                                   
    if(!element.className){
        element.className = value;
    }else{
        newClassName = element.className;
        newClassName +=" ";
        newClassName += value;
        element.className = newClassName;
    }
}
function highlightPage(){
    
    if(!document.getElementById) return false;
    if(!document.getElementsByName) return false;
    if(!document.getElementById("navigation")) return false;
    
    var nav = document.getElementById("navigation");
    var links = document.getElementsByTagName("a");
    

    for(var i =0; i<links.length; i++){
        var linkurl = links[i].getAttribute("href");            
        var currenturl = document.location.href;                
        if(currenturl.indexOf(linkurl) != -1){
            links[i].className = "here";
            var linktext = links[i].lastChild.nodeValue.toLowerCase();  
            document.body.setAttribute("id",linktext);
        }
    }
}
addLoadEvent(highlightPage);                                   