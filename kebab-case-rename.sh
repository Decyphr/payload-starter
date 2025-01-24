#!/bin/bash

# Function to convert a given string to kebab-case
convert_to_kebab_case() {
  echo "$1" | sed -E 's/([a-z0-9])([A-Z])/\1-\L\2/g' | tr '[:upper:]' '[:lower:]'
}

# Function to rename files and directories
rename_to_kebab_case() {
    local dir="$1"

    # Iterate over all items in the directory
    for item in "$dir"/*; do
        [ -e "$item" ] || continue  # Skip if the directory is empty

        # Get the basename of the item
        local base_name=$(basename "$item")
        # Convert the name to kebab-case
        local kebab_name=$(convert_to_kebab_case "$base_name")

        # If the name has changed, rename the item
        if [ "$base_name" != "$kebab_name" ]; then
            mv "$item" "$(dirname "$item")/$kebab_name"
            item="$(dirname "$item")/$kebab_name" # Update the item path after renaming
        fi

        # If it's a directory, recursively process it
        if [ -d "$item" ]; then
            rename_to_kebab_case "$item"
        fi
    done
}

# Main script execution
if [ $# -ne 1 ]; then
    echo "Usage: $0 <directory>"
    exit 1
fi

# Ensure the provided path is a directory
if [ ! -d "$1" ]; then
    echo "Error: $1 is not a directory"
    exit 1
fi

# Start renaming
rename_to_kebab_case "$1"

echo "Renaming completed."
