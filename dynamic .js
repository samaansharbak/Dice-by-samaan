
function change(){

    var random1 = Math.floor(Math.random()*6)+1;
    var random2 = Math.floor(Math.random()*6)+1;

    var images1 = "dice"+random1+".svg";
    var images2 = "dice"+random2+".svg";

    var image1= "svg/"+images1;
    var image2= "svg/"+images2;

    document.getElementById("img1").setAttribute("src",image1);
    document.getElementById("img2").setAttribute("src",image2);
    
    document.querySelectorAll("#head p").forEach(p => p.style.display = "none");


    if(random1 > random2){
        document.getElementById("head").children[1].style.display="block"; 
    }
    else if (random2 > random1){
        document.getElementById("head").children[2].style.display="block";
    }
    else if (random1 == random2) {
        document.getElementById("head").children[3].style.display="block";
    }
    
}

