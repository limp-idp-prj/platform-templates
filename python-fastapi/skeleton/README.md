# ${{ values.name }}

${{ values.description }}

Владелец: ${{ values.owner }}

## Разработка
```
pip install -r requirements-dev.txt
ruff check .
pytest
uvicorn app.main:app --app-dir src --port 8080   # http://localhost:8080/health
```

CI (`.github/workflows/ci.yaml`) собирает образ в GHCR и обновляет тег в GitOps-репозитории; деплой выполняет Argo CD.
