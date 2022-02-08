date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
document.getElementById("demo").innerHTML = day + "/" + month + "/" + year;