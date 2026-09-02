import re

files = [
    "src/app/pages/auth/login/login.ts",
    "src/app/pages/auth/register/register.ts",
    "src/app/pages/products/product-form/product-form.ts",
    "src/app/pages/products/product-list/product-list.ts"
]

for filepath in files:
    if os.path.exists(filepath):
        with open(filepath, "r") as f:
            content = f.read()
        
        # Remover NavbarComponent y FooterComponent de las importaciones y sus líneas de import de TS si es necesario
        content = content.replace(", NavbarComponent", "").replace("NavbarComponent,", "").replace("NavbarComponent", "")
        content = content.replace(", FooterComponent", "").replace("FooterComponent,", "").replace("FooterComponent", "")
        
        with open(filepath, "w") as f:
            f.write(content)

print("¡Imports de componentes limpios!")
