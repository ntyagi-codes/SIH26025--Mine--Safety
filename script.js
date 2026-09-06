// ===============================
// SENSOR DATA
// ===============================

const sensors = {

    "SN-001": {
        location: "Panel A — Zone 1",
        displacement: "3.20 mm",
        tilt: "1.20°",
        stress: "210 kPa",
        ai: "0.18 / 1.00",
        status: "SAFE"
    },

    "SN-002": {
        location: "Panel A — Zone 2",
        displacement: "6.80 mm",
        tilt: "2.40°",
        stress: "245 kPa",
        ai: "0.42 / 1.00",
        status: "WARNING"
    },

    "SN-003": {
        location: "Panel B — Zone 4",
        displacement: "17.46 mm",
        tilt: "8.72°",
        stress: "342 kPa",
        ai: "0.94 / 1.00",
        status: "CRITICAL"
    },

    "SN-004": {
        location: "Panel B — Zone 5",
        displacement: "4.10 mm",
        tilt: "1.50°",
        stress: "220 kPa",
        ai: "0.21 / 1.00",
        status: "SAFE"
    },

    "SN-005": {
        location: "Panel C — Zone 1",
        displacement: "5.70 mm",
        tilt: "1.80°",
        stress: "230 kPa",
        ai: "0.31 / 1.00",
        status: "SAFE"
    },

    "SN-006": {
        location: "Panel C — Zone 2",
        displacement: "9.40 mm",
        tilt: "3.80°",
        stress: "280 kPa",
        ai: "0.63 / 1.00",
        status: "WARNING"
    },

    "SN-007": {
        location: "Panel C — Zone 4",
        displacement: "19.20 mm",
        tilt: "9.10°",
        stress: "365 kPa",
        ai: "0.97 / 1.00",
        status: "CRITICAL"
    }

};


// ===============================
// SHOW SENSOR INFORMATION
// ===============================

function showSensor(sensorID) {

    const sensor = sensors[sensorID];

    document.getElementById("sensorName").innerText = sensorID;

    document.querySelector(".location").innerText =
        "📍 " + sensor.location;

    document.getElementById("displacement").innerText =
        sensor.displacement;

    document.getElementById("tilt").innerText =
        sensor.tilt;

    document.getElementById("stress").innerText =
        sensor.stress;

    document.getElementById("aiScore").innerText =
        sensor.ai;

    const status = document.getElementById("sensorStatus");

    status.innerText = sensor.status;

    // Change badge appearance
    if (sensor.status === "SAFE") {

        status.style.color = "#45dda4";
        status.style.borderColor = "#329c78";
        status.style.background = "rgba(50,200,150,.1)";

    }

    else if (sensor.status === "WARNING") {

        status.style.color = "#ffc34f";
        status.style.borderColor = "#a77b2c";
        status.style.background = "rgba(255,190,50,.1)";

    }

    else {

        status.style.color = "#ff6687";
        status.style.borderColor = "#b74765";
        status.style.background = "rgba(255,70,110,.1)";
    }
}


// ===============================
// LIVE TIME
// ===============================

function updateTime() {

    const now = new Date();

    const time =
        now.getHours().toString().padStart(2, "0")
        + ":" +
        now.getMinutes().toString().padStart(2, "0")
        + ":" +
        now.getSeconds().toString().padStart(2, "0");

    document.getElementById("time").innerText = time;
}

setInterval(updateTime, 1000);

updateTime();


// ===============================
// DEMO LIVE SENSOR UPDATE
// ===============================

function simulateSensorUpdate() {

    const displacement =
        (17 + Math.random() * 2).toFixed(2);

    document.getElementById("displacement").innerText =
        displacement + " mm";

}

setInterval(simulateSensorUpdate, 5000);


// ===============================
// ALERT BUTTON
// ===============================

function inspectAlert() {

    showSensor("SN-003");

    window.scrollTo({
        top: 250,
        behavior: "smooth"
    });

}


// ===============================
// NAVIGATION
// ===============================

const navItems =
    document.querySelectorAll(".nav-item");

navItems.forEach(item => {

    item.addEventListener("click", function () {

        navItems.forEach(nav =>
            nav.classList.remove("active")
        );

        this.classList.add("active");

    });

});
async function getSensorData() {
    const response = await fetch(
        "http://127.0.0.1:8000/sensor-data"
    );

    const data = await response.json();

    console.log(data);
}

getSensorData();