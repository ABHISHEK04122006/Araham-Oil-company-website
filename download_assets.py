import urllib.request
import ssl
import os

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE
headers = {'User-Agent': 'Mozilla/5.0'}

os.makedirs('assets', exist_ok=True)

images_to_download = [
    ('banner.webp', 'https://static.unibose.com/img/2026/02/banner-01.webp'),
    ('technology.png', 'https://static.unibose.com/img/2026/01/Technology-scaled.png'),
    ('n-mer.png', 'https://static.unibose.com/img/2026/02/N-MER-2-1.png'),
    ('raas.png', 'https://static.unibose.com/img/2026/01/Raas-3.png'),
    ('indian-oil.svg', 'https://static.unibose.com/img/2025/08/indian-oil.svg'),
    ('cpcl.svg', 'https://static.unibose.com/img/2025/08/cpcl.svg'),
    ('quote.svg', 'https://static.unibose.com/img/2025/08/Quote-Logo.svg'),
    ('onboard-pump.png', 'https://static.unibose.com/img/2026/01/Onboard-Pump-Robot.png'),
    ('two-line-hydraulic.png', 'https://static.unibose.com/img/2026/03/Revolutionary-Two-Line-Hydraulic-Architecture-2.png'),
    ('vision-system.png', 'https://static.unibose.com/img/2026/01/ATEX-Zone-0-Vision-System-.png'),
    ('automated-handling.png', 'https://static.unibose.com/img/2026/01/Advanced-Automated-Handling-.png'),
    ('flat-bottom.svg', 'https://static.unibose.com/img/2025/08/Flat-Bottom-Storage-Tank.svg'),
    ('horizontal-tank.svg', 'https://static.unibose.com/img/2025/08/Horizontal-Storage-Tank.svg'),
    ('vertical-tank.svg', 'https://static.unibose.com/img/2025/08/Vertical-TankVessels.svg'),
    ('iocl-cert.png', 'https://static.unibose.com/img/2025/12/iocl-certificate.png'),
    ('cpcl-cert.png', 'https://static.unibose.com/img/2025/12/cpcl.png'),
    ('atex-cert.png', 'https://static.unibose.com/img/2025/12/EU-Type-ATEX-Zone-0-Camera-Certificate-AT0207053-X-ORIGINAL-CERTIFICATE.png')
]

for filename, url in images_to_download:
    dest = os.path.join('assets', filename)
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, context=ctx, timeout=15) as r:
            with open(dest, 'wb') as f:
                f.write(r.read())
        print(f"Downloaded {filename} ({os.path.getsize(dest)} bytes)")
    except Exception as e:
        print(f"Failed {filename} from {url}: {e}")
