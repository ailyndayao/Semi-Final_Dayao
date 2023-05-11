

const colors = [
    "#f1f5f8",
    "#343a40",
    "#007bff",
    "#6f42c1",
    "#e83e8c",
    ];
    const btn = document.getElementById("btn");
    const color = document.querySelector(".color");
    
    btn.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
    color.textContent = colors[randomIndex];
    });


