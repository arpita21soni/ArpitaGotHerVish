from flask import Flask, request, jsonify
import csv
import os
from datetime import datetime

app = Flask(__name__)
CSV_FILE = 'rsvps.csv'

@app.route('/rsvp', methods=['POST'])
def rsvp():
    data = request.get_json()
    # Extract fields (customize as needed)
    name = data.get('name', '')
    email = data.get('email', '')
    attending = data.get('attending', '')
    guests = data.get('guests', '')
    message = data.get('message', '')
    timestamp = datetime.now().isoformat()

    file_exists = os.path.isfile(CSV_FILE)
    with open(CSV_FILE, 'a', newline='', encoding='utf-8') as csvfile:
        writer = csv.writer(csvfile)
        if not file_exists:
            writer.writerow(['Timestamp', 'Name', 'Email', 'Attending', 'Guests', 'Message'])
        writer.writerow([timestamp, name, email, attending, guests, message])
    return jsonify({'result': 'success'})

@app.route('/')
def home():
    return 'RSVP backend is running.'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
