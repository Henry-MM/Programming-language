import re

COMMENTARY = r'#.*'

def preprocess(text):
    if re.search(COMMENTARY, text) is not None:
        text = re.sub(COMMENTARY, '', text) + '$'
        if text == '$':
            return ''
    return text.strip()