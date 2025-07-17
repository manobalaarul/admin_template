import zipfile
import os
import shutil

# Automatically detect current directory
current_dir = os.path.dirname(os.path.abspath(__file__))

# Set paths based on current location
input_folder = current_dir  # Same folder where script and ZIPs are placed
output_folder = os.path.join(current_dir, 'merged_templates')

# Create output folder if it doesn't exist
os.makedirs(output_folder, exist_ok=True)

def safe_copy(src, dest):
    base, ext = os.path.splitext(dest)
    counter = 1
    while os.path.exists(dest):
        dest = f"{base}_{counter}{ext}"
        counter += 1
    shutil.copy2(src, dest)

def extract_and_merge(zip_path, extract_to):
    with zipfile.ZipFile(zip_path, 'r') as zip_ref:
        temp_extract = os.path.join(extract_to, '__temp__')
        os.makedirs(temp_extract, exist_ok=True)
        zip_ref.extractall(temp_extract)

        for root, dirs, files in os.walk(temp_extract):
            for file in files:
                full_path = os.path.join(root, file)
                rel_path = os.path.relpath(full_path, temp_extract)
                target_path = os.path.join(extract_to, rel_path)
                os.makedirs(os.path.dirname(target_path), exist_ok=True)
                safe_copy(full_path, target_path)

        shutil.rmtree(temp_extract)

# Process all ZIP files in current folder
zip_files = [f for f in os.listdir(input_folder) if f.endswith('.zip')]
if not zip_files:
    print("⚠️ No ZIP files found in this directory.")
else:
    for file_name in zip_files:
        zip_path = os.path.join(input_folder, file_name)
        print(f"🔄 Extracting: {file_name}")
        extract_and_merge(zip_path, output_folder)

    print(f"\n✅ All templates merged into: {output_folder}")
