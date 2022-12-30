
///***** for loader ************/

// this loading will run only when it takes time to load
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
    loader.style.display = "none";
});

// var loader = document.getElementById("preloader");
// var counter = 100;
// setInterval(function () {
//     counter--;
//     if (counter == 0) {
//         loader.style.display = "none";
//     }
// })


/******* for Navbar ********/

window.addEventListener("scroll", function () {
    this.document.getElementById("JSNAVBAR").style.backgroundColor = "black";
});



/***************** Why work with us *****************/

var H3 = document.getElementsByClassName("CauseH3");
var P = document.getElementsByClassName("CauseP");

var Cause1 = document.getElementsByClassName("Cause1");
var Img1 = document.getElementById("CauseImg1");
Cause1[0].addEventListener("mouseover",function(){

    H3[0].style.background = "linear-gradient(45deg, #131212, #111111, #0c0c0b)";
    H3[0].style.webkitTextFillColor = "transparent";
    H3[0].style.webkitBackgroundClip = "text";

    H3[1].style.background = "linear-gradient(45deg, #131212, #111111, #0c0c0b)";
    H3[1].style.webkitTextFillColor = "transparent";
    H3[1].style.webkitBackgroundClip = "text";

    P[0].style.background = "linear-gradient(45deg, #131212, #111111, #0c0c0b)";
    P[0].style.webkitTextFillColor = "transparent";
    P[0].style.webkitBackgroundClip = "text";

    Cause1[0].style.borderRadius = "3rem";
    Cause1[0].style.background = "linear-gradient(45deg, #ff0047, #85e966, #e9e934)";
    Cause1[0].style.color = "#020202";

    Img1.style.background = 'url("https://img.icons8.com/pastel-glyph/64/000000/last-24-hours.png")';
    Img1.style.backgroundPosition = 'center';
    Img1.style.backgroundSize = "cover";
    Img1.style.backgroundrepeat=  "no-repeat";
    
});
Cause1[0].addEventListener("mouseout",function(){

    H3[0].style.background = "linear-gradient(45deg, #ff0047, #85e966, #e9e934)";
    H3[0].style.webkitTextFillColor = "transparent";
    H3[0].style.webkitBackgroundClip = "text";

    H3[1].style.background = "linear-gradient(45deg, #ff0047, #85e966, #e9e934)";
    H3[1].style.webkitTextFillColor = "transparent";
    H3[1].style.webkitBackgroundClip = "text";

    P[0].style.background = "linear-gradient(45deg, #ff0047, #85e966, #e9e934)";
    P[0].style.webkitTextFillColor = "transparent";
    P[0].style.webkitBackgroundClip = "text";

    Cause1[0].style.borderRadius = "0rem";
    Cause1[0].style.background = "transparent";
    Cause1[0].style.color = "#020202";

    
    Img1.style.background = 'url("https://img.icons8.com/pastel-glyph/64/d7354b/last-24-hours.png")';
    Img1.style.width = "5rem";
    Img1.style.height = "5rem";
    Img1.style.backgroundPosition = "center";
    Img1.style.backgroundSize = "cover";
    Img1.style.backgroundRepeat = "no-repeat";
});

var Cause2 = document.getElementsByClassName("Cause2");
var Img2 = document.getElementById("CauseImg2");
Cause2[0].addEventListener("mouseover",function(){

    H3[2].style.background = "linear-gradient(45deg, #131212, #111111, #0c0c0b)";
    H3[2].style.webkitTextFillColor = "transparent";
    H3[2].style.webkitBackgroundClip = "text";

    H3[3].style.background = "linear-gradient(45deg, #131212, #111111, #0c0c0b)";
    H3[3].style.webkitTextFillColor = "transparent";
    H3[3].style.webkitBackgroundClip = "text";

    P[1].style.background = "linear-gradient(45deg, #131212, #111111, #0c0c0b)";
    P[1].style.webkitTextFillColor = "transparent";
    P[1].style.webkitBackgroundClip = "text";

    Cause2[0].style.borderRadius = "3rem";
    Cause2[0].style.background = "linear-gradient(45deg, #ff0047, #85e966, #e9e934)";
    Cause2[0].style.color = "#020202";

    Img2.style.background = 'url("https://img.icons8.com/external-itim2101-fill-itim2101/64/1A1A1A/external-money-currency-and-money-itim2101-fill-itim2101-1.png")';
    Img2.style.backgroundPosition = 'center';
    Img2.style.backgroundSize = "cover";
    Img2.style.backgroundrepeat=  "no-repeat";
    
});
Cause2[0].addEventListener("mouseout",function(){

    H3[2].style.background = "linear-gradient(45deg, #ff0047, #85e966, #e9e934)";
    H3[2].style.webkitTextFillColor = "transparent";
    H3[2].style.webkitBackgroundClip = "text";

    H3[3].style.background = "linear-gradient(45deg, #ff0047, #85e966, #e9e934)";
    H3[3].style.webkitTextFillColor = "transparent";
    H3[3].style.webkitBackgroundClip = "text";

    P[1].style.background = "linear-gradient(45deg, #ff0047, #85e966, #e9e934)";
    P[1].style.webkitTextFillColor = "transparent";
    P[1].style.webkitBackgroundClip = "text";

    Cause1[0].style.borderRadius = "0rem";
    Cause1[0].style.background = "transparent";
    Cause1[0].style.color = "#020202";

    Cause2[0].style.borderRadius = "0rem";
    Cause2[0].style.background = "transparent";
    Cause2[0].style.color = "#020202";
    
    Img2.style.background = 'url("https://img.icons8.com/external-itim2101-fill-itim2101/80/d7354b/external-money-currency-and-money-itim2101-fill-itim2101-1.png")';
    Img2.style.width = "5rem";
    Img2.style.height = "5rem";
    Img2.style.backgroundPosition = "center";
    Img2.style.backgroundSize = "cover";
    Img2.style.backgroundRepeat = "no-repeat";
});

var Cause3 = document.getElementsByClassName("Cause3");
var Img3 = document.getElementById("CauseImg3");
Cause3[0].addEventListener("mouseover",function(){

    H3[4].style.background = "linear-gradient(45deg, #131212, #111111, #0c0c0b)";
    H3[4].style.webkitTextFillColor = "transparent";
    H3[4].style.webkitBackgroundClip = "text";

    H3[5].style.background = "linear-gradient(45deg, #131212, #111111, #0c0c0b)";
    H3[5].style.webkitTextFillColor = "transparent";
    H3[5].style.webkitBackgroundClip = "text";

    P[2].style.background = "linear-gradient(45deg, #131212, #111111, #0c0c0b)";
    P[2].style.webkitTextFillColor = "transparent";
    P[2].style.webkitBackgroundClip = "text";

    Cause3[0].style.borderRadius = "3rem";
    Cause3[0].style.background = "linear-gradient(45deg, #ff0047, #85e966, #e9e934)";
    Cause3[0].style.color = "#020202";

    Img3.style.background = ' url("https://img.icons8.com/external-smashingstocks-detailed-outline-smashing-stocks/66/1A1A1A/external-services-business-management-smashingstocks-detailed-outline-smashing-stocks.png")';
    Img3.style.backgroundPosition = 'center';
    Img3.style.backgroundSize = "cover";
    Img3.style.backgroundrepeat=  "no-repeat";
    
});
Cause3[0].addEventListener("mouseout",function(){

    H3[4].style.background = "linear-gradient(45deg, #ff0047, #85e966, #e9e934)";
    H3[4].style.webkitTextFillColor = "transparent";
    H3[4].style.webkitBackgroundClip = "text";

    H3[5].style.background = "linear-gradient(45deg, #ff0047, #85e966, #e9e934)";
    H3[5].style.webkitTextFillColor = "transparent";
    H3[5].style.webkitBackgroundClip = "text";

    P[2].style.background = "linear-gradient(45deg, #ff0047, #85e966, #e9e934)";
    P[2].style.webkitTextFillColor = "transparent";
    P[2].style.webkitBackgroundClip = "text";

    Cause1[0].style.borderRadius = "0rem";
    Cause1[0].style.background = "transparent";
    Cause1[0].style.color = "#020202";

    Cause3[0].style.borderRadius = "0rem";
    Cause3[0].style.background = "transparent";
    Cause3[0].style.color = "#020202";

    
    Img3.style.background = 'url("https://img.icons8.com/external-smashingstocks-detailed-outline-smashing-stocks/80/d7354b/external-services-business-management-smashingstocks-detailed-outline-smashing-stocks.png")';
    Img3.style.width = "5rem";
    Img3.style.height = "5rem";
    Img3.style.backgroundPosition = "center";
    Img3.style.backgroundSize = "cover";
    Img3.style.backgroundRepeat = "no-repeat";
});


/******************* View more button ******************/
var flag = true;
var Morebutton = document.getElementsByClassName("ViewMoreButton"); 
Morebutton[0].addEventListener("click",function(){
    var data = document.getElementsByClassName("technologies2")[0];
    if(flag==true) {
        data.style.visibility = "visible";
        data.style.transform = "translateY(-5rem)";
        Morebutton[0].style.transform = "translateY(10rem)";
        Morebutton[0].innerHTML = "VIEW LESS <br> <img src=\"https:////img.icons8.com//metro//26//000000//sort-up.png\"//>";
        flag= false;
    }
    else {
        data.style.visibility = "hidden";
        data.style.transform = "translateY(0rem)";
        Morebutton[0].style.transform = "translateY(0rem)";
        Morebutton[0].innerHTML = "View More <br> <img src=\"https:////img.icons8.com//metro//26//000000//sort-down.png\"//>";
        flag= true;
    }
    

});


//******************* for clock *********
setInterval(function (){
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    //angles
    let hr = hour * 30 + min / 2;
    let mr = min * 6;
    let sr = sec * 6;

    document.getElementById("hourhand").style.transform = `rotate(${hr}deg)`;
    document.getElementById("minutehand").style.transform = `rotate(${mr}deg)`;
    document.getElementById("secondhand").style.transform = `rotate(${sr}deg)`;

}, 1000);


//  ************* for consultation form ***************

var FormSubmitButton = document.getElementById("SubmitButton");

FormSubmitButton.addEventListener("click",function(){
    var ConsultFormReff = document.getElementsByClassName("ConsultationForm");
    var UName = ConsultFormReff[0].UName.value;
    var UEmail = ConsultFormReff[0].Email.value;
    var Contact = ConsultFormReff[0].Number.value;
    var City = ConsultFormReff[0].City.value;
    var message = ConsultFormReff[0].Message.value;

    if(UName=="" || UEmail=="" || Contact=="" || City=="" || message==""){
        alert("All the fields are mandatory...!")
        return;
    }
    else {
        //Name validation
        var Validation = UName.match(/^([A-z]{5,15})$/);
        if(Validation==null){
            alert("Please enter a valid name...!");
            return;
        }
        var Validation = UEmail.match(/^([A-z 0-9]{5,15})(@)([A-z]{4,5})(.)([A-z]{2,3})$/);
        if(Validation==null){
            alert("Please enter a valid email...!");
            return;
        }
        var Validation = Contact.match(/^([1-9]{1})([0-9]{9})$/);
        if(Validation==null){
            alert("Please enter a valid contact number...!");
            return;
        }
    }
    var FormTitle = document.getElementById("FormTitle");
    FormTitle.style.display = "None";

    var FormPage = document.getElementById("MyCForm");
    FormPage.style.display = "None";

    // On Submission sucessfully using jquery
    var FormBox = $("#MyForm");
    FormBox.css("border-radius","50%");
    FormBox.append("<div id='FormSubmit'></div>");
    var FormSubmitBox = $("#FormSubmit");
    FormSubmitBox.append("<h1 class='TK'>Thank You </h1>");
    $(".TK").addClass("HOne");
    FormSubmitBox.append("<img src='https://i.gifer.com/XwI0.gif' width='180rem' height='180rem'>");
    FormSubmitBox.append("<h2 class='PK'> We will reach out you <br> within 24 hours</h2>");
    $(".PK").addClass("POne");
    FormSubmitBox.addClass("FormSubmitionClass");
    FormSubmitBox.append(`<a href="Start_Page.html"><button id="FBtn" style='height: 2rem; width: 6rem; background: black; color: pink; font-weight: 800;font-size: 1.3rem;'>OK</button><a>`);
    $(".FBtn").addClass("BOne");



});

// var labels = document.getElementsByTagName("label");
// var inputs = document.getElementsByTagName("input");
// for(var i=0; i<inputs.length; i++){
//     inputs[i].addEventListener("focus",function(){
//         for(var j=0; j<labels.length; j++){
//             labels[j].addClass("labelTransform");
//             console.log("kkl");
//         }
//     });
// }

// for popup
var popup = document.getElementsByClassName("popup");
var cross = document.getElementById("popupCross");
cross.addEventListener("click",function(){
    popup[0].style.display="none";
    console.log("Button clicked");
});

setTimeout(function(){
    popup[0].style.display = "block";
},10000);


// on close popup
window.addEventListener("unload",function(){
    alert("Are you sure ? ");
});
