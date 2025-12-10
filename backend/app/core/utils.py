# small utility functions if needed
import re
def safe_text(x):
    return re.sub(r"\s+", " ", (x or "")).strip()
