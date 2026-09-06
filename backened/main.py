from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow our dashboard to communicate with the backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "message": "SIH26025 Backend is running!"
    }


@app.get("/sensor-data")
def get_sensor_data():
    return {
        "node": "N01",
        "tilt": 0.18,
        "displacement": 2.4,
        "strain": 1250,
        "temperature": 30.2,
        "humidity": 65,
        "battery": 87
    }
