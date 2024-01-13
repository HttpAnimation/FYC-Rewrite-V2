#!/bin/bash

# Default port
PORT=6558

# Function to display script usage
usage() {
    echo "Usage: $0 [-p PORT]"
    echo "Options:"
    echo "  -p PORT   Specify the port to use (default is 6558)"
    exit 1
}

# Function to stop the server on Ctrl+C
stop_server() {
    echo "Stopping server..."
    kill -TERM $PID
    exit 0
}

# Parse command line options
while getopts ":p:" opt; do
    case ${opt} in
        p)
            PORT=${OPTARG}
            ;;
        \?)
            echo "Invalid option: -$OPTARG" >&2
            usage
            ;;
        :)
            echo "Option -$OPTARG requires an argument" >&2
            usage
            ;;
    esac
done

# Get local IP address
IP=$(ip -4 addr show scope global | grep inet | awk '{print $2}' | cut -d'/' -f1)

# Display server information
echo "Server is running at http://$IP:$PORT/"
echo "To access from other devices on the same network, use the above URL."

# Start a simple web server
if command -v python3 &> /dev/null; then
    python3 -m http.server $PORT &
    PID=$!
elif command -v python &> /dev/null; then
    python -m SimpleHTTPServer $PORT &
    PID=$!
else
    echo "Error: Python not found. Please install Python to run the web server."
    exit 1
fi

# Trap Ctrl+C to stop the server
trap stop_server INT

# Wait for the server to finish
wait $PID
