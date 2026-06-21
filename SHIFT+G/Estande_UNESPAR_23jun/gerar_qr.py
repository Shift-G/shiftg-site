#!/usr/bin/env python3
"""
Gera o QR code + cartaz A4 do estande Shift+G.
Uso:  python3 gerar_qr.py "https://seu-link-aqui"
Saídas: qr_estande.png  e  Cartaz_A4_QR.pdf  (+ preview cartaz_preview.png)
"""
import sys, base64
import qrcode
from qrcode.constants import ERROR_CORRECT_H
from weasyprint import HTML

URL = sys.argv[1] if len(sys.argv) > 1 else "https://SEU-LINK-AQUI"
BLUE = "#003FCD"

# ---- QR ----
qr = qrcode.QRCode(version=None, error_correction=ERROR_CORRECT_H, box_size=20, border=2)
qr.add_data(URL)
qr.make(fit=True)
img = qr.make_image(fill_color=BLUE, back_color="white").convert("RGB")
img.save("qr_estande.png")
qr_b64 = "data:image/png;base64," + base64.b64encode(open("qr_estande.png", "rb").read()).decode()

# ---- Cartaz A4 ----
poster = f"""<!DOCTYPE html><html><head><meta charset='utf-8'>
<style>
  @page{{ size:A4; margin:0; }}
  *{{ box-sizing:border-box; margin:0; padding:0; }}
  body{{ font-family:"Carlito","DejaVu Sans",sans-serif; color:#13182b; }}
  .p{{ width:210mm; height:297mm; padding:24mm 22mm; display:flex; flex-direction:column;
       text-align:center; align-items:center; }}
  .wm{{ font-weight:700; letter-spacing:.08em; font-size:24pt; color:{BLUE}; }}
  .wm .g{{ color:#13182b; }}
  .tl{{ font-size:10pt; color:#5b6172; letter-spacing:.04em; margin-top:2mm; }}
  .ey{{ margin-top:24mm; color:{BLUE}; font-weight:700; letter-spacing:.22em;
       text-transform:uppercase; font-size:12pt; }}
  h1{{ font-family:"Caladea","DejaVu Serif",serif; font-size:46pt; line-height:1.04;
       margin:6mm 0 4mm; letter-spacing:-.01em; }}
  h1 .ac{{ color:{BLUE}; }}
  .sub{{ font-size:15pt; color:#5b6172; max-width:150mm; line-height:1.4; }}
  .qrbox{{ margin:14mm 0 8mm; padding:8mm; border:2px solid {BLUE}; border-radius:8mm;
          background:#fff; box-shadow:0 10mm 24mm rgba(8,18,48,.10); }}
  .qrbox img{{ width:78mm; height:78mm; display:block; }}
  .scan{{ font-size:16pt; font-weight:700; }}
  .scan .ac{{ color:{BLUE}; }}
  .trust{{ margin-top:auto; padding-top:10mm; border-top:1.5px solid #e6e8ef; width:100%;
          font-size:11pt; color:#5b6172; letter-spacing:.02em; }}
  .trust b{{ color:{BLUE}; }}
</style></head><body>
  <div class="p">
    <div>
      <div class="wm">SHIFT<span class="g">+G</span></div>
      <div class="tl">Arquitetamos inteligência.</div>
    </div>
    <div class="ey">Material gratuito</div>
    <h1>Leve o guia de <span class="ac">IA</span><br>da Shift+G.</h1>
    <p class="sub">7 formas de usar inteligência artificial para crescer — e um plano de 30 dias. Grátis.</p>
    <div class="qrbox"><img src="{qr_b64}" alt="QR code"></div>
    <div class="scan">Aponte a câmera <span class="ac">→</span> deixe seu e-mail <span class="ac">→</span> receba o guia</div>
    <div class="trust">A única empresa de tecnologia do evento · <b>+50 mil vidas mapeadas com IA</b> · NearOne · ADERIS</div>
  </div>
</body></html>"""

HTML(string=poster).write_pdf("Cartaz_A4_QR.pdf")
print("OK -> qr_estande.png | Cartaz_A4_QR.pdf  | URL:", URL)
