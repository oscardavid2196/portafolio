from pathlib import Path

import pdfplumber


pdf_path = Path(r"C:\Users\Oscar\Desktop\Oscar_David_Gaviria_Martinez_Desarrollador_Junior_NET..pdf")
output_path = Path(r"C:\Users\Oscar\Desktop\Portafolio\tmp\pdfs\cv-text.txt")

with pdfplumber.open(pdf_path) as pdf:
    pages = [f"--- PAGE {index + 1} ---\n{page.extract_text() or ''}" for index, page in enumerate(pdf.pages)]

output_path.write_text("\n\n".join(pages), encoding="utf-8")
print(len(pages))
