import urllib.request
import ssl
import re
import json

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

url = 'https://www.unibose.com/'
req = urllib.request.Request(url, headers=headers)
with urllib.request.urlopen(req, context=ctx) as r:
    html = r.read().decode('utf-8', errors='ignore')

with open('unibose_home.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Downloaded unibose_home.html, size:", len(html))

# Extract all images
img_urls = set()
for m in re.finditer(r'(?:src|srcSet|imageSrcSet)=["\']([^"\']+)["\']', html):
    val = m.group(1)
    for part in val.split(','):
        u = part.strip().split(' ')[0]
        if u.startswith('/_next/image/?url='):
            # decode url parameter
            import urllib.parse
            parsed = urllib.parse.parse_qs(urllib.parse.urlparse(u).query)
            if 'url' in parsed:
                img_urls.add(parsed['url'][0])
        elif u.startswith('http'):
            img_urls.add(u)
        elif u.startswith('/'):
            img_urls.add('https://www.unibose.com' + u)

print(f"Found {len(img_urls)} images:")
for u in sorted(img_urls):
    print("  ", u)

# Extract CSS files
css_files = re.findall(r'href=["\'](/_next/static/css/[^"\']+)["\']', html)
print(f"\nFound {len(css_files)} CSS files:")
for c in css_files:
    print("  ", 'https://www.unibose.com' + c)
