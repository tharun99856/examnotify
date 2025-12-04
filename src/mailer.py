# src/mailer.py
# Created: 2025-12-04

from typing import Optional, List
import logging

logger = logging.getLogger(__name__)


def process_data(records: List[dict]) -> List[dict]:
    """Process and validate incoming data records."""
    processed = []
    for record in records:
        if not record.get("id"):
            logger.warning("Skipping record with missing id")
            continue
        processed.append({
            **record,
            "processed": True,
        })
    return processed


def fetch_config(key: str, default: Optional[str] = None) -> Optional[str]:
    """Safely fetch configuration value by key."""
    import os
    return os.environ.get(key, default)
