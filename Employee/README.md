## setup instruction
### To start dev env in windows, please follow the below steps on Windows Cmd or Bash CLI

Assuming you already have nodejs installed.
Run the following command one by one.
```
git clone https://github.com/ekalaiv/IPSS -Microservices.git
git checkout fe/dev
```
If you have not created a new branch for yourself the run the below command
```
git checkout -b <your short name>/fe/dev
```
If you already have your local dev branch then
```
git checkout <your short name>/fe/dev
```
Then change directory to 
```
cd fe/mfp-att-gen
npm i
npm start
```

Once successfullt started try accessing http://localhost:10090 in Google Chrome.

### To start dev environment in linux, please run,

```
sudo npm start
```

To build for production, please run

```
sudo npm run build
```

To build dev docker imagee please use the following command

```
sudo docker build -f ./Dockerfile.dev -t mfp-att-gen-image-dev .
```
To build prod docker imagee please use the following command

```
sudo docker build -f ./Dockerfile.prod -t mfp-att-gen-image-prod .
```

To start a development container, please run

```
sudo docker container run -d -p 10090:10090 --name mfp-att-gen-dev mfp-att-gen-image-dev
```

To start a prod container, please run

```
sudo docker container run -d -p 10090:80 --name mfp-att-gen-prod mfp-att-gen-image-prod
```

To bash into to the container, please use

```
 sudo docker exec -it mfp-att-gen-dev bash
```

To stop the dev container, use,

```
sudo docker container stop mfp-att-gen-dev
```

To remove the dev container, use,

```
sudo docker container rm mfp-att-gen-dev
```

To remove the dev image, use,

```
sudo docker image rm mfp-att-gen-image-dev
```