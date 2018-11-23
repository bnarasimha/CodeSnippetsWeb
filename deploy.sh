set -x;
export NODE_ENV=$1; 
cd $1/main; 
# sudo rm -r node_modules; 
sudo unzip -o ~/artifacts/$1/main/deploy.zip; 
sudo chmod 777 node_modules; 
sudo chmod -R 777 app;
sudo npm install; 
gulp config;
pm2 delete $1main;
pm2 start server.js --name $1main;
