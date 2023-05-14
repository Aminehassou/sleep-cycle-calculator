from flask import Flask, jsonify
import datetime

def calculate_wake_up_times(num_cycles=6):
    sleep_cycle_duration = datetime.timedelta(minutes=90)
    falling_asleep_duration = datetime.timedelta(minutes=15)
    current_time = datetime.datetime.now()
    wake_up_times = [] 
    for i in range(1, num_cycles+1):
        wake_up_time = current_time + falling_asleep_duration + i*sleep_cycle_duration
        wake_up_times.append({'time': wake_up_time.strftime('%Y-%m-%d %I:%M %p'), 'cycles': i})

    return wake_up_times

app = Flask(__name__)

@app.route('/api/wake_up_times', methods=['GET'])
def get_wake_up_times():
    wake_up_times = calculate_wake_up_times()
    return jsonify(wake_up_times)

if __name__ == "__main__":
    app.run(debug=True)
