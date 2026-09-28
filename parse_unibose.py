from html.parser import HTMLParser
import re

with open('unibose_home.html', encoding='utf-8') as f:
    html = f.read()

class SectionParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.tags = []
        self.current_tag = None
        self.texts = []
        self.headings = []
        self.in_script = False
        self.in_style = False

    def handle_starttag(self, tag, attrs):
        if tag in ['script', 'style', 'noscript']:
            self.in_script = True
        if tag in ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']:
            self.current_tag = tag

    def handle_endtag(self, tag):
        if tag in ['script', 'style', 'noscript']:
            self.in_script = False
        if tag in ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']:
            self.current_tag = None

    def handle_data(self, data):
        if not self.in_script:
            t = data.strip()
            if t:
                if self.current_tag:
                    self.headings.append((self.current_tag, t))
                self.texts.append(t)

p = SectionParser()
p.feed(html)

print("=== HEADINGS FOUND ===")
for h in p.headings:
    print(f"[{h[0].upper()}] {h[1]}")

print("\n=== SAMPLE TEXTS ===")
with open('unibose_texts.txt', 'w', encoding='utf-8') as f:
    for t in p.texts:
        f.write(t + '\n')

print("Wrote all texts to unibose_texts.txt. Total lines:", len(p.texts))
