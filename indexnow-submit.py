#!/usr/bin/env python3
"""IndexNow submission script for Caugia.
Notifies Bing, Yandex, Seznam, Naver (and indirectly Google discovery) about URL changes.
Run after significant content updates.

Usage: python3 indexnow-submit.py
"""
import os
import json
import urllib.request
import urllib.error

KEY = "8ecf891723b5b8031ac89c7921befe84"
HOST = "www.caugia.com"
KEY_LOCATION = f"https://{HOST}/{KEY}.txt"
ENDPOINT = "https://api.indexnow.org/IndexNow"

# Build URL list from sitemap.xml (all canonical + hreflang alternates)
import re

ROOT = os.path.dirname(os.path.abspath(__file__))
sitemap_path = os.path.join(ROOT, "sitemap.xml")
with open(sitemap_path) as f:
    content = f.read()

urls = set()
# Canonical <loc> entries
urls.update(re.findall(r'<loc>(https://www\.caugia\.com/[^<]*)</loc>', content))
# Hreflang alternates
urls.update(re.findall(r'<xhtml:link[^>]*href="(https://www\.caugia\.com/[^"]*)"', content))

urls = sorted(urls)
print(f"Submitting {len(urls)} URLs to IndexNow...")

payload = {
    "host": HOST,
    "key": KEY,
    "keyLocation": KEY_LOCATION,
    "urlList": urls,
}

req = urllib.request.Request(
    ENDPOINT,
    data=json.dumps(payload).encode("utf-8"),
    headers={"Content-Type": "application/json; charset=utf-8"},
    method="POST",
)
try:
    with urllib.request.urlopen(req, timeout=30) as resp:
        print(f"Status: {resp.status} {resp.reason}")
        print(f"Body: {resp.read().decode()[:400]}")
except urllib.error.HTTPError as e:
    print(f"HTTP Error: {e.code} {e.reason}")
    print(f"Body: {e.read().decode()[:400]}")
except urllib.error.URLError as e:
    print(f"URL Error: {e.reason}")
