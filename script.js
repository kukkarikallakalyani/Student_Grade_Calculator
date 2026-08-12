function calculate() {

    let name = document.getElementById("name").value;

    let marks = [
        Number(document.getElementById("sub1").value),
        Number(document.getElementById("sub2").value),
        Number(document.getElementById("sub3").value),
        Number(document.getElementById("sub4").value),
        Number(document.getElementById("sub5").value)
    ];

    let total = marks.reduce((sum, mark) => sum + mark, 0);
    let percentage = total / 5;

    let grade;

    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    document.getElementById("result").innerHTML = `
        <strong>Student:</strong> ${name}<br>
        <strong>Total:</strong> ${total} / 500<br>
        <strong>Percentage:</strong> ${percentage}%<br>
        <strong>Grade:</strong> ${grade}
    `;
}