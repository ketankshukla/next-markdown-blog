---
title: 'Transform Your Python Scripts into Text Files While Preserving Structure'
date: 'November 19, 2024'
excerpt: 'Effortlessly convert all your Python scripts into text files while preserving directory structure with this handy script! 🐍➡️📄'
cover_image: '/images/posts/python_to_text_image.jpg'
---

# 🚀 Transform Your Python Scripts into Text Files While Preserving Structure

Ever wanted to convert all your Python files into text files for documentation, sharing, or analysis purposes? This guide will walk you through a Python script that does exactly that! It scans through your directories, finds all `.py` files (excluding virtual environments), and copies them as `.txt` files into a new folder while maintaining the original directory structure.

---

## 📝 Table of Contents

- [Overview](#overview)
- [How It Works](#how-it-works)
    - [1. Finding Python Files](#1-finding-python-files)
    - [2. Creating Relative Paths](#2-creating-relative-paths)
    - [3. Preparing the Output Folder](#3-preparing-the-output-folder)
    - [4. Copying and Converting Files](#4-copying-and-converting-files)
- [Full Script](#full-script)
- [Running the Script](#running-the-script)
- [Conclusion](#conclusion)

---

## Overview

This script performs the following tasks:

1. **Searches** for all `.py` files in the current directory and subdirectories, skipping any `.venv` directories.
2. **Converts** each `.py` file to a `.txt` file.
3. **Copies** the converted files into a new folder named `python_to_text`, preserving the original directory structure.

---

## How It Works

Let's dive into each part of the script to understand how it achieves these tasks.

### 1. Finding Python Files 🔍

The script starts by importing the `os` module and defining a function to find all `.py` files.

```python
import os

def find_python_files(directory):
    py_files = []
    for root, dirs, files in os.walk(directory):
        # Skip .venv directory and its subdirectories
        if '.venv' in dirs:
            dirs.remove('.venv')

        # Skip if current directory is .venv or its subdirectory
        if '.venv' in root:
            continue

        for file in files:
            if file.endswith('.py'):
                py_files.append(os.path.join(root, file))
    return py_files
```

- **`os.walk(directory)`**: Traverses the directory tree.
- **Skipping `.venv` directories**: Ensures that virtual environment files are not processed.

### 2. Creating Relative Paths 📁

To maintain the directory structure, the script calculates the relative path of each Python file.

```python
def create_relative_path(original_path, base_path):
    # Convert absolute path to relative path
    relative_path = os.path.relpath(original_path, base_path)
    return relative_path
```

- **`os.path.relpath()`**: Generates a relative filepath from `base_path` to `original_path`.

### 3. Preparing the Output Folder 📂

Before copying files, the script checks if the output folder exists and creates it if necessary.

```python
# Get the current directory where the script is running
current_directory = os.getcwd()

# Create the output folder if it doesn't exist
output_folder = os.path.join(current_directory, 'python_to_text')
if not os.path.exists(output_folder):
    os.makedirs(output_folder)
```

- **`os.getcwd()`**: Gets the current working directory.
- **`os.makedirs(output_folder)`**: Creates the `python_to_text` folder.

### 4. Copying and Converting Files 📄➡️📄

The script iterates over each Python file, converts it to a text file, and copies it to the new directory.

```python
# Copy and save all .py files as .txt while preserving directory structure
for py_file in python_files:
    # Get the relative path of the Python file
    relative_path = create_relative_path(py_file, current_directory)

    # Create the corresponding directory structure in output folder
    relative_dir = os.path.dirname(relative_path)
    new_dir = os.path.join(output_folder, relative_dir)

    if not os.path.exists(new_dir):
        os.makedirs(new_dir)

    # Create the new txt file path
    txt_file_name = os.path.basename(py_file).replace('.py', '.txt')
    txt_file_path = os.path.join(new_dir, txt_file_name)

    # Copy content
    try:
        with open(py_file, 'r', encoding='utf-8') as source_file:
            content = source_file.read()
        with open(txt_file_path, 'w', encoding='utf-8') as target_file:
            target_file.write(content)
    except Exception as e:
        print(f"Error processing {py_file}: {str(e)}")

print('Process completed. Files have been copied to the python_to_text folder.')
```

- **Creating directories**: Uses `os.makedirs()` to mirror the original structure.
- **File conversion**:
    - Reads the content of each `.py` file.
    - Writes the content into a new `.txt` file in the output directory.
- **Exception handling**: Catches and reports any errors during file processing.

---

## Full Script

Here is the complete script for reference:

```python
import os

def find_python_files(directory):
    # [Function code as above]

def create_relative_path(original_path, base_path):
    # [Function code as above]

# [Rest of the script as above]
```

---

## Running the Script ▶️

1. **Save the script**: Copy the full script into a file named, for example, `py_to_txt_converter.py`.
2. **Navigate to your project directory**: Open your terminal and navigate to the directory containing your Python files.
3. **Run the script**:

   ```bash
   python py_to_txt_converter.py
   ```

4. **Check the output**: A new folder named `python_to_text` will be created, containing all your `.py` files converted to `.txt`, with the directory structure preserved.

---

## Conclusion 🎉

With this script, you can effortlessly convert and copy your Python files into text format, preserving the original organization. This can be incredibly useful for:

- **Documentation**: Sharing code in text format without the risk of execution.
- **Backup**: Keeping a plain text backup of your scripts.
- **Analysis**: Performing text analysis on your codebase.

Feel free to customize and enhance the script to suit your specific needs!

---

*Happy Coding!* 👩‍💻👨‍💻