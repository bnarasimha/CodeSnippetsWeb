set -x;
export NODE_ENV=$1; 
cd main; 
sudo rm -r node_modules; 
unzip -o ~/artifacts/main/deploy.zip; 
sudo chmod 777 node_modules; 
npm install; 
pm2 delete main;
pm2 start server.js --name main;