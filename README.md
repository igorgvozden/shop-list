///////// DOCKER-COMPOSE ////////////////////////////////////////////////////////

-----------------------------------
Start the App from Docker container
-----------------------------------
// open terminal in the shopping-list folder (where docker-compose.yaml file is):

    docker-compose up -d

--------------
Close the App
--------------
// type in terminal:

    docker-compose down

// to delete data volumes and Close the App:

    docker-compose down -v


/////////////////////////////////////////////////////////////////////////////////

/// BACKEND DOCKER //////////////////////////////////////////////////////////////

To START the app out of Docker container:

-------------------------------------------------------------------------------------------------------------------------------------
// 1) Open powershell inside the app folder
// 2) Type > docker build -t NAME:VERSION .    (docker build -t shoplist-node .)    // -t adds custom name to your image
-------------------------------------------------------------------------------------------------------------------------------------

3) After the build process, powershell will print image_id                     // writing image sha256: IMAGE_ID
4) Use that IMAGE_ID to run next command > docker run --rm -p 3000:80 IMAGE_ID      // this will publish the container on localhost port 3000

OR 4) docker run --name shoplist-backend --rm -d -p 3000:3000 shoplist-node

-------------------------------------------------------------------------------------------------------------------------------------
// 4) RUN BACKEND CONTAINER IN NETWORK
    docker run 
    --name shoplist-backend 
    --rm 
    -d 
    -p 3000:3000 
    --network levi9net 
    shoplist-node
-------------------------------------------------------------------------------------------------------------------------------------


In order to STOP the app process:
5) inside the same app folder, open a new powershell and type > docker ps -a   // it shows all processes inside the container
6) Find a name of a container which says it is still running: "is running"     // auto generated CONTAINER_NAME

7) Type > docker stop CONTAINER_NAME

/////// RUN THE APP LOCALLY ///////////////////////////////////////////////////////////

To start the app locally,
    1) start local mongoDB from terminal:
        mongod
        mongosh
            use DB

    2) open terminal in the app folder and type: 
    npm start


