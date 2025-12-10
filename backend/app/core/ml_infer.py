import onnxruntime as rt
import numpy as np
from typing import Tuple

MODEL_PATH = __file__.replace("ml_infer.py","../models/sample_model.onnx")

# Minimal deterministic feature extraction for demo
def extract_features(url: str, html: str) -> np.ndarray:
    url_len = len(url or "")
    html_len = len(html or "")
    ent = 0.0
    # simplified
    ent = (len(set(html)) / (html_len+1)) * 8
    return np.array([[url_len, html_len, ent]], dtype=np.float32)

def infer_model(url: str, html: str) -> Tuple[float, dict]:
    try:
        sess = rt.InferenceSession(MODEL_PATH)
        x = extract_features(url, html)
        name = sess.get_inputs()[0].name
        out = sess.run(None, {name: x})[0]
        score = float(out[0][0])
        explain = {"features": x.tolist()}
        return score, explain
    except Exception:
        # Fallback lightweight heuristic score
        return 0.45, {"fallback": True}
