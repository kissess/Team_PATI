from flask import Flask, render_template, Response, request
from flask_cors import CORS
import cv2
import datetime
import numpy as np

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
    filename = f"./output_{datetime.datetime.now().strftime('%Y%m%d%H%M%S')}.mp4"
    #out = cv2.VideoWriter(filename, cv2.VideoWriter_fourcc(*'XVID'), 30, (640, 480))
    out = cv2.VideoWriter(filename, cv2.VideoWriter_fourcc(*'MJPG'), 30, (640, 480))

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

# react-webcam frame data -> flask server
@app.route('/capture_frame', methods=['POST'])
def capture_frame():
    global out

    image = request.get_data()
    print(f"Received frame: {len(image)} bytes")

    try:
        frame = cv2.imdecode(np.frombuffer(image, np.uint8), cv2.IMREAD_COLOR)
        
        # Check if the decoded frame is empty
        if frame is not None and not frame.empty():
            # Check if out object is available
            if out is not None:
                # Check if out object is opened
                if out.isOpened():
                    # Process and save frame
                    filename = f"frame_{datetime.datetime.now().strftime('%Y%m%d%H%M%S')}.jpg"
                    success = cv2.imwrite(filename, frame)

                    if success:
                        print(f"Saved frame as {filename}")
                    else:
                        print(f"Failed to save frame as {filename}")
                else:
                    print("VideoWriter is not opened.")
            else:
                print("VideoWriter is not available.")
        else:
            print("Decoded frame is empty.")
    except cv2.error as e:
        print(f"Error in image processing: {e}")

    return "Frame captured successfully"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)

