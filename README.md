# platform-templates

Шаблоны Backstage Software Templates внутренней платформы разработчика.

- `catalog-info.yaml` — Location, который регистрируется в каталоге Backstage.
- `nodejs-express/` — сервис на Node.js (Express).
- `python-fastapi/` — сервис на Python (FastAPI).

В каждом шаблоне: `template.yaml` (параметры и шаги: проверка имени, генерация репозитория, регистрация в GitOps,
регистрация в каталоге) и `skeleton/` (код сервиса, Dockerfile, CI-workflow, `catalog-info.yaml`).

Репозиторий публикуется из монорепо автора скриптом `tools/publish-platform-repos.sh`; правки вносятся в монорепо,
а не напрямую здесь.
