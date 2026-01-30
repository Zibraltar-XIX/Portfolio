echo "Updating portfolio"
git pull
echo "Installing dependencies"
npm ci
echo "Building project"
npm run build
echo "update nginx"
docker compose pull
echo "Restarting Docker containers"
docker compose up -d