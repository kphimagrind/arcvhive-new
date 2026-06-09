import urllib.request
import re
from urllib.parse import urljoin

base = 'https://omong-omong.com/'
req = urllib.request.Request(base, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req, timeout=30) as r:
    html = r.read().decode('utf-8', errors='ignore')

urls = re.findall(r'<script[^>]+src=["\']([^"\']+)["\']', html)
for u in urls:
    if any(keyword in u for keyword in ('custom.js', 'mediumish.js', 'bootstrap.min.js', 'wowpopup', 'contact-form-7', 'um-')):
        full = urljoin(base, u)
        print('===', full)
        try:
            req2 = urllib.request.Request(full, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req2, timeout=30) as r2:
                txt = r2.read().decode('utf-8', errors='ignore')
            lines = txt.splitlines()
            for i, l in enumerate(lines[:200], 1):
                print(f'{i:03d}: {l}')
        except Exception as e:
            print('ERROR', e)
