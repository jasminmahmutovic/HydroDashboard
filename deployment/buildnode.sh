cd ..
echo "building frontend application"
npm run-script build
docker build -t hydro_dashboard:latest .
echo "done"