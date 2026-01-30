echo "Updating portfolio"
git pull
echo "Installing dependencies"
npm ci
echo "Building project"
npm run build
echo "Restarting Docker containers"
docker compose restart