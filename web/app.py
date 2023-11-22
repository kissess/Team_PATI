# from ai_process import ai_module # 향후 ai테스트 코드를 변형할 것
# from flask_socketio import SocketIO # 주석처리 전 pip install flask-socketio
from select_exer import ExerciseData # 장바구기 데이터를 저장할 Class 모듈
import pyrebase # 파이어베이스 -> pip install pyrebase4
from flask import Flask, render_template, Response, request
from flask_cors import CORS
import cv2
import datetime
import numpy as np

firebaseConfig = {
    "apiKey": "AIzaSyCuT78jFNK-hzAjLqPONJd0QYMTMR0B5tQ",
    "authDomain": "postureflow-hallym.firebaseapp.com",
    "databaseURL": "https://postureflow-hallym-default-rtdb.firebaseio.com",
    "projectId": "postureflow-hallym",
    "storageBucket": "postureflow-hallym.appspot.com",
    "messagingSenderId": "693140317129",
    "appId": "1:693140317129:web:21945666e377c07cca7e18",
    "measurementId": "G-NRWY5CTGNC"
}

firebase = pyrebase.initialize_app(firebaseConfig)
db = firebase.database()

app = Flask(__name__, static_folder="static", static_url_path="/static")
CORS(app, origins='*')

out = None  # cv2.VideoWriter object

@app.route('/')
def index():
    return render_template("index.html")

# Exercise Start Endpoint
@app.route('/start_capture')
def start_capture():
    global out

    # Create a VideoWriter Object
    filename = f"./output_{datetime.datetime.now().strftime('%Y%m%d%H%M%S')}.avi"
    out = cv2.VideoWriter(filename, cv2.VideoWriter_fourcc(*'XVID'), 30, (640, 480))
    out.set(cv2.CAP_PROP_POS_FRAMES, 0)

    return f"Capture started successfully. Video will be saved as {filename}"

# Exercise Stop Endpoint
@app.route('/stop_capture', methods=['POST'])
def stop_capture():
    global out

    if out is not None:
        out.release()
        out = None
        return "Capture stopped successfully"
    else:
        return "No capture in progress"

    # 향후 생성된 운동 영상을 db에 저장 및 VOD를 제공하는 코드 작성
    # 아래에는 db에 저장하는 코드를 작성해야 할 듯...

# react-webcam frame data -> flask server
@app.route('/capture_frame', methods=['POST'])
def capture_frame():
    global out

    image = request.get_data()
    print(f"Received frame: {len(image)} bytes")

    # Pre-processing of data (Decoding Client frame data)
    frame = cv2.imdecode(np.frombuffer(image, np.uint8), cv2.IMREAD_COLOR)

    # using AI module input data is frame
    # process_frame(frame)

    # Save Client data as Viedo
    if out is not None:
        out.write(frame)

    return "Frame captured successfully"

# Basket EndPoint
@app.route('/엔드포인트명 정하기', methods=['POST'])
def save_exercise_data():
    data = request.json.get('exercise_data')

    # Validate input
    if not data:
        return "Exercise name and count are required", 400

    # Create exercise class
    exercise_data = ExerciseData(data['exercises'])

    # Save to the database (you need to implement this part)
    savedb_basket(exercise_data)

    return "Exercise data saved successfully"

# basket data saving db
def savedb_basket(exercise_data):
    for i, exercise in enumerate(exercise_data.exercises, start=1):
        db.child('customer_routine').child(f'ex{i}_name').set(exercise['name'])
        db.child('customer_routine').child(f'ex{i}_set').set(exercise['count'])

    print(f"Saving exercise data: {exercise_data.to_dict()} to the database")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
