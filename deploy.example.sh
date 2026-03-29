#!/bin/bash

set -e

# Copy these values into a deploy.sh file (gitignored) and fill them in.
# Run: chmod +x deploy.sh && ./deploy.sh

#----------------- CONFIGURABLES -----------------
REMOTE_USER_HOST="[netid]@coewww.rutgers.edu"  # Replace "[netid]" with your netid
REMOTE_DIR="/www/www6/star"
BUILD_DIR="./dist"    # Name of the output directory after building the react app
DEPLOY_NAME="react-app"             # Name of the folder on the remote server
#----------------- END OF CONFIGURABLES -----------------

# Check that build directory exists
if [ ! -d "$BUILD_DIR" ]; then
  echo "Error: '${BUILD_DIR}' directory not found in current working directory."
  exit 1
fi

# Get just the folder name (e.g. "dist" from "./dist")
DIR_NAME=$(basename "$BUILD_DIR")

echo "Copying ${DIR_NAME} to remote..."
scp -r "$BUILD_DIR" "$REMOTE_USER_HOST:$REMOTE_DIR/"

echo "Removing old ${DEPLOY_NAME} and renaming ${DIR_NAME} to ${DEPLOY_NAME} on remote..."
ssh "$REMOTE_USER_HOST" "rm -rf $REMOTE_DIR/$DEPLOY_NAME && mv $REMOTE_DIR/$DIR_NAME $REMOTE_DIR/$DEPLOY_NAME"

echo "Done! Build deployed to $REMOTE_DIR/$DEPLOY_NAME"