# ${{ values.name }}

${{ values.description }}

Владелец: ${{ values.owner }}

## Разработка
```
npm ci
npm run lint
npm test
npm start   # http://localhost:8080/health
```

CI (`.github/workflows/ci.yaml`) собирает образ в GHCR и обновляет тег в GitOps-репозитории; деплой выполняет Argo CD.
