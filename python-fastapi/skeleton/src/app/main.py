import os

from fastapi import FastAPI

app = FastAPI(title="${{ values.name }}")


@app.get("/")
def root() -> dict:
    return {
        "service": os.environ.get("SERVICE_NAME", "${{ values.name }}"),
        "description": "${{ values.description }}",
    }


@app.get("/health")
def health() -> dict:
    return {"status": "ok"}
