set -x;
export NODE_ENV=$1; 
cd main; 
sudo rm -r node_modules; 
sudo unzip -o ~/artifacts/main/deploy.zip; 
sudo chmod 777 node_modules; 
npm install; 