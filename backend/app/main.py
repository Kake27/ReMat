from fastapi import FastAPI
from app.routes import bins

app = FastAPI(title="ReMat Backend")

app.include_router(bins.router)

@app.get("/")
def root():
    return {"status": "Backend running"}
