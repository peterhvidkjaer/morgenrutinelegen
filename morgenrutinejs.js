function startMorgen() {
    const tasks = [
        { text: "Vask ansigt", color: "#8ecae6" },
        { text: "Børst tænder", color: "#ffb703" },
        { text: "Tag tøj på", color: "#219ebc" },
        { text: "Spis morgenmad", color: "#fb8500" },
        { text: "Find sko og jakke", color: "#ff5a5f" }
    ];

    document.getElementById("homePage").style.display = "none";

    document.body.innerHTML += `
        <div class="content" id="taskPage">
            <h1>Morgenrutine</h1>
            <div id="tasksContainer"></div>
            <button onclick="tilbageTilForside()" class="start-button">Tilbage til forsiden</button>
        </div>
    `;

    const tasksContainer = document.getElementById("tasksContainer");

    tasksContainer.style.display = "grid";
    tasksContainer.style.gridTemplateColumns = "1fr 1fr";
    tasksContainer.style.gap = "20px";
    tasksContainer.style.justifyItems = "center";
    tasksContainer.style.marginTop = "20px";

    tasks.forEach(task => {
        const taskBox = document.createElement("div");
        taskBox.classList.add("task-box");
        taskBox.style.backgroundColor = task.color;
        taskBox.textContent = task.text;
        taskBox.style.padding = "40px";
        taskBox.style.borderRadius = "50%";
        taskBox.style.fontSize = "24px";
        taskBox.style.width = "150px";
        taskBox.style.height = "150px";
        taskBox.style.display = "flex";
        taskBox.style.alignItems = "center";
        taskBox.style.justifyContent = "center";
        taskBox.style.cursor = "pointer";
        taskBox.style.color = "#fff";

        // Klik-hændelse med toggle-funktion og konfetti-animation
        taskBox.onclick = function() {
            if (taskBox.classList.contains("completed")) {
                // Fjern færdig-styling
                taskBox.classList.remove("completed");
                taskBox.textContent = task.text;
                taskBox.style.backgroundColor = task.color;
            } else {
                // Tilføj færdig-styling og vis konfetti
                taskBox.classList.add("completed");
                taskBox.textContent = "✔ " + task.text;
                taskBox.style.backgroundColor = "#38b000";
                konfettiAnimation(); // Start konfetti-animation
            }
        };

        tasksContainer.appendChild(taskBox);
    });
}

function tilbageTilForside() {
    document.getElementById("taskPage").remove();
    document.getElementById("homePage").style.display = "block";
}

// Funktion til at vise en konfetti-animation
function konfettiAnimation() {
    for (let i = 0; i < 30; i++) {
        const konfetti = document.createElement("div");
        konfetti.classList.add("konfetti");
        document.body.appendChild(konfetti);

        konfetti.style.left = `${Math.random() * 100}vw`;
        konfetti.style.animationDuration = `${Math.random() * 2 + 3}s`;
        konfetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

        setTimeout(() => {
            konfetti.remove(); // Fjern konfetti efter animation
        }, 5000);
    }
}

// Konfetti-styling
const style = document.createElement('style');
style.innerHTML = `
    .konfetti {
        position: fixed;
        width: 10px;
        height: 10px;
        top: 0;
        border-radius: 50%;
        opacity: 0.7;
        animation: fall linear forwards;
    }
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);