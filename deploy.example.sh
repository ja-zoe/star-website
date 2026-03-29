#!/bin/bash

set -e

# Copy these values into a deploy.sh file (gitignored) and fill them in.
# Run: chmod +x deploy.sh && ./deploy.sh

#----------------- CONFIGURABLES -----------------
REMOTE_USER_HOST="[netid]@coewww.rutgers.edu"  # Replace "[netid]" with your netid
REMOTE_DIR="/www/www6/star"      
BUILD_DIR="./dist" # Name of the output directory after building react app
#----------------- END OF CONFIGURABLES -----------------

# Check that build directory exists
if [ ! -d "$BUILD_DIR" ]; then
  echo "Error: 'build' directory not found in current working directory."
  exit 1
fi

echo "Copying build directory to remote..."
scp -r "$BUILD_DIR" "$REMOTE_USER_HOST:$REMOTE_DIR/"

echo "Removing old react-app on remote..."
ssh "$REMOTE_USER_HOST" "rm -rf $REMOTE_DIR/react-app"

echo "Renaming build to react-app on remote..."
ssh "$REMOTE_USER_HOST" "mv $REMOTE_DIR/build $REMOTE_DIR/react-app"

echo "Done! Build deployed to $REMOTE_DIR/react-app"