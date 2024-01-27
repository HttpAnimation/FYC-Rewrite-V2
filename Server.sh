#!/bin/bash

# Default port number
default_port=6558

# Default log file path
default_log_file="server.log"

# Get local IP address
ip_address=$(hostname -I | awk '{print $1}')

# Function to check if a port is available
check_port() {
  local port=$1
  (exec 3<>/dev/tcp/localhost/$port) >/dev/null 2>&1
  if [ $? -eq 0 ]; then
    exec 3>&-
    exec 3<&-
    return 1
  else
    exec 3<&-
    return 0
  fi
}

# Function to display an error message for missing required options
display_missing_option_error() {
  local option_name=$1
  echo "Missing required option: -$option_name" >&2
  exit 1
}

# Parse command line arguments
while getopts "p:b:h" opt; do
  case ${opt} in
    p)
      port=$OPTARG
      ;;
    b)
      start_http_server=true
      ;;
    h)
      echo "Usage: ./start_server.sh [-p <port>] [-b] [-h]"
      echo "Options:"
      echo "  -p <port>                 Set the port number (default: $default_port)"
      echo "  -b                        Start an HTTP server"
      echo "  -h                        Display this help message"
      exit 0
      ;;
    *)
      echo "Invalid option: -$OPTARG" >&2
      exit 1
      ;;
  esac
done

if [ "$start_http_server" = true ]; then
  # Check if the specified port is available
  if ! check_port "$port"; then
    echo "Port $port is already in use. Please specify a different port."
    exit 1
  fi

  # Start the Python HTTP server command
  http_server_command="python3 -m http.server $port --bind $ip_address --directory ."

  # Redirect output to the log file
  http_server_command+=" > $default_log_file 2>&1 &"

  # Start the Python HTTP server in the background
  eval $http_server_command

  # Store the process ID of the server
  server_pid=$!

  # Check if the server started successfully
  if [ $? -ne 0 ]; then
    echo "Failed to start the server."
    exit 1
  fi

  echo "HTTP server started successfully."
  echo "Host: $(hostname)"
  echo "IP: $ip_address"
  echo "Port: $port"
  echo "Log file: $default_log_file"

  # Wait for the server to finish or until stopped manually
  wait $server_pid
else
  echo "No valid option provided. Use '-h' for help."
fi
