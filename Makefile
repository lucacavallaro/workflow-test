deploy:
	act -W .github/workflows/deploy.yml workflow_dispatch --artifact-server-path ./artifacts
