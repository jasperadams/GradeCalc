/**
 * Grader Calculator Project - Jasper Adams - 10/12/17.
 */
var grade = 0;
var final = 0;

function calculateCurrentGrade(){
    //homework
    var hg = document.getElementById("hg").value.split(", ");
    var h = getAverage(hg);
    var hw = document.getElementById("hw").value / 100;
    document.getElementById("hgrade").innerHTML = h.toFixed(1);
    document.getElementById("hgrade").style.backgroundColor = getColor(h);
    validateGrades(h);
    //quiz
    var qg = document.getElementById("qg").value.split(", ");
    var q = getAverage(qg);
    var qw = document.getElementById("qw").value / 100;
    document.getElementById("qgrade").innerHTML = q.toFixed(1);
    document.getElementById("qgrade").style.backgroundColor = getColor(q);
    validateGrades(q);
    //test
    var tg = document.getElementById("tg").value.split(", ");
    var t = getAverage(tg);
    var tw = document.getElementById("tw").value / 100;
    document.getElementById("tgrade").innerHTML = t.toFixed(1);
    document.getElementById("tgrade").style.backgroundColor = getColor(t);
    validateGrades(t);
    //midterm
    var mg = document.getElementById("mg").value.split(", ");
    var m = getAverage(mg);
    var mw = document.getElementById("mw").value / 100;
    document.getElementById("mgrade").innerHTML = m.toFixed(1);
    document.getElementById("mgrade").style.backgroundColor = getColor(m);
    validateGrades(m);
    //grade calculation
    grade = (h * hw) + (q * qw) + (t * tw) + (m * mw);
    document.getElementById("currentgrade").innerHTML = grade.toFixed(1);
    document.getElementById("currentgrade").style.backgroundColor = getColor(grade);
    if((hw + qw + tw + mw) !== 1){
        alert("Your weights do not add up to 100.");
    }
    return grade;
}

function validateGrades(x){
    if(x > 200){
        confirm("That grade's very high! Are you sure you that's right?");
    }
    if(isNaN(x)){
        x = 0;
    }
}

function calculateFinalGrade(){
    var desired = document.getElementById("finaldesired").value;
    var weight = document.getElementById("finalweight").value / 100;
    var needed = (desired - ((1 - weight) * calculateCurrentGrade())) / weight;
    final = needed.toFixed(1);
    document.getElementById("finalneeded").innerHTML = final;
    document.getElementById("finalneeded").style.backgroundColor = getColorOpposite(final);
}

function getAverage(str){
    var sum = 0;
    for(var i = 0; i < str.length; i++){
        sum += parseInt(str[i]);
    }
    return sum / str.length;
}

function getColor(x){
    if(x < 60){
        return "Salmon";
    }else if(x < 70){
        return "Orange";
    }else if(x < 80){
        return "Gold";
    }else if(x < 90){
        return "GreenYellow";
    }else{
        return "Aqua";
    }
}

function getColorOpposite(x){
    if(x < 60){
        return "Aqua";
    }else if(x < 70){
        return "GreenYellow";
    }else if(x < 80){
        return "Gold";
    }else if(x < 90){
        return "Orange";
    }else{
        return "Salmon";
    }
}



