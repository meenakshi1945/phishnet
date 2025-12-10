from fastapi import APIRouter, Body
from pydantic import BaseModel
from typing import Optional, Dict, Any
from app.core.heuristics import analyze_heuristics
from app.core.signatures import run_yara, run_clam_like
from app.core.ml_infer import infer_model

router = APIRouter()

class ScanRequest(BaseModel):
    url: Optional[str] = None
    html: Optional[str] = None
    js: Optional[str] = None

@router.post("/page")
async def scan_page(payload: ScanRequest):
    # 1. Gather content
    html = payload.html or ""
    js = payload.js or ""
    url = payload.url or ""

    # 2. Heuristics
    heuristics_report = analyze_heuristics(url=url, html=html, js=js)

    # 3. Signatures
    yara_matches = run_yara(html + js)
    clam_matches = run_clam_like(html + js)

    # 4. ML inference (feature extraction minimal stub)
    ml_score, ml_explain = infer_model(url=url, html=html)

    # 5. Aggregate result
    score = max(ml_score, heuristics_report.get("suspicion_score", 0))
    reasons = {
        "heuristics": heuristics_report.get("reasons"),
        "yara": yara_matches,
        "clam": clam_matches,
        "ml": ml_explain
    }

    result = {
        "url": url,
        "final_score": float(score),
        "reasons": reasons
    }
    return result
