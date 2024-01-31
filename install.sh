echo "Would you like to install the node.js server npm will need to be installed for this? (yes/no)"
read answer

if [ "$answer" = "yes" ]; then

elif [ "$answer" = "no" ]; then

else
  echo "Invalid input. Please enter 'yes' or 'no'."
fi