import serial, time, random
import requests

API_URL = "http://localhost:5000/api/sensors"

arduino = serial.Serial('/dev/ttyACM0', 9600)
time.sleep(2)

while True:
    # Fake sensor data
    data = {
        "temperature": round(random.uniform(18, 28), 2),
        "turbidity": round(random.uniform(5, 25), 2),
        "depth": round(random.uniform(1, 5), 2)
    }
    requests.post(API_URL, json=data)
    time.sleep(5)
