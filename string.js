
var doc1 = document.getElementById("first");
var doc2 = document.getElementById("second");


function welcome(){ 
    alert("Hello World");
    document.getElementById("output").innerHTML = "Hello World";
    return true;
}
function same(){
    var first = document.getElementById("first").value;
    var second = document.getElementById("second").value; 
    if (first === second){ 
        document.getElementById("output").innerHTML = "They Are the Same";
        
    }else{ 
        document.getElementById("output").innerHTML = "They are not the same";
    }
}
function wordLength(){ 
    var first = doc1.value.length; 
    var second = doc2.value.length; 
    output.innerHTML = "the length of the first word is " + first + " and the length of the second word is " + second;
    return true;
}

function capFirst(){
    output.innerHTML = doc1.value.charAt(0).toUpperCase() + doc1.value.slice(1).toLowerCase();
    output.innerHTML += " " + doc2.value.charAt(0).toUpperCase() + doc2.value.slice(1).toLowerCase();
    return true;
}

function capitalized(){ 
    output.innerHTML = doc1.value.toUpperCase();
    output.innerHTML += " " + doc2.value.toUpperCase();
    return true;
}

function vowels(){ 
    var l1 = doc1.value.charAt(0);
    var l2 = doc1.value.charAt(1);
    var l3 = doc1.value.charAt(2);
    var l4 = doc1.value.charAt(3);
    var l5 = doc1.value.charAt(4);
    var l6 = doc1.value.charAt(5);
    output.innerHTML = " "; 
    if (l1 !== "a" && l1 !== "e" )
} 
