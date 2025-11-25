
function calculate(){
    let m1 = Number(document.getElementById("marks1").value);
    let m2 = Number(document.getElementById("marks2").value);
    let m3 = Number(document.getElementById("marks3").value);
    let m4 = Number(document.getElementById("marks4").value);
    let m5 = Number(document.getElementById("marks5").value);

    let total = m1 + m2 + m3 + m4 + m5;
    let percentage = (total / 500) * 100;
    let average = total / 5;

    let grade = "";
    if(percentage >= 80){
        grade = 'A+';
    } else if(percentage >= 70){
        grade = 'A';   
    } else if(percentage >= 60){
        grade = 'B';   
    } else if(percentage >= 50){
        grade = 'C';  
    } else if (percentage >=40){
        grade = 'D';     
    } else {
        grade = 'Fail';
    }

    document.getElementById("totalMarks").innerHTML = "Total marks: " + total;
    document.getElementById("percentage").innerHTML = "Percentage: " + percentage.toFixed(2) + "%";
    document.getElementById("average").innerHTML = "Average: " + average;
    document.getElementById("grade").innerHTML = "Grade: " + grade;

}