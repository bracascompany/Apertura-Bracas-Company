import os
import sys

def search_in_files(keyword, directory="src"):
    print(f"\n🔍 Buscando '{keyword}' en la carpeta '{directory}'...\n" + "─"*50)
    found_count = 0
    
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(('.ts', '.html', '.scss', '.css')):
                path = os.path.join(root, file)
                try:
                    with open(path, 'r', encoding='utf-8') as f:
                        for num, line in enumerate(f, 1):
                            if keyword.lower() in line.lower():
                                found_count += 1
                                print(f"📂 {path} (línea {num}):\n   ↳ {line.strip()}\n")
                except Exception:
                    pass
                    
    print("─"*50)
    print(f"✨ Búsqueda finalizada. Coincidencias encontradas: {found_count}\n")

if __name__ == "__main__":
    query = sys.argv[1] if len(sys.argv) > 1 else "hero"
    search_in_files(query)
