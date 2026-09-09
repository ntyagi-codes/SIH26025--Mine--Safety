async function getSensorData() {
    try {
        const response = await fetch(
            "http://127.0.0.1:8000/sensor-data"
        );

        const data = await response.json();

        console.log("BACKEND DATA:", data);

        // Selected sensor values
        const tilt = document.getElementById("tilt");
        const displacement = document.getElementById("displacement");
        const stress = document.getElementById("stress");

        if (tilt) {
            tilt.textContent = data.tilt + "°";
        }

        if (displacement) {
            displacement.textContent = data.displacement + " mm";
        }

        if (stress) {
            stress.textContent = data.strain + " µε";
        }

    } catch (error) {
        console.error("Backend connection error:", error);
    }
}

getSensorData();
function showSensor(sensorId) {
    // Change selected sensor name
    document.getElementById("sensorName").textContent = sensorId;

    // Demo values for each sensor
    const sensors = {
        "SN-001": {
            displacement: 4.25,
            tilt: 1.20,
            stress: 210
        },

        "SN-002": {
            displacement: 5.10,
            tilt: 1.45,
            stress: 225
        },

        "SN-003": {
            displacement: 18.22,
            tilt: 8.72,
            stress: 342
        },

        "SN-004": {
            displacement: 3.80,
            tilt: 0.95,
            stress: 198
        },

        "SN-005": {
            displacement: 4.60,
            tilt: 1.10,
            stress: 205
        },

        "SN-006": {
            displacement: 11.30,
            tilt: 4.25,
            stress: 280
        },

        "SN-007": {
            displacement: 19.40,
            tilt: 9.10,
            stress: 365
        }
    };

    const sensor = sensors[sensorId];

    if (!sensor) return;

    document.getElementById("displacement").textContent =
        sensor.displacement + " mm";

    document.getElementById("tilt").textContent =
        sensor.tilt + "°";

    document.getElementById("stress").textContent =
        sensor.stress + " kPa";
}