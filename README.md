To START the app out of Docker container:

1) Open powershell inside the app folder
2) Type > docker build .
3) After the build process, powershell will print image_id                     // writing image sha256: IMAGE_ID
4) Use that IMAGE_ID to run next command > docker run -p 3000:80 IMAGE_ID      // this will publish the container on localhost port 3000


In order to STOP the app process:
5) inside the same app folder, open a new powershell and type > docker ps -a   // it shows all processes inside the container
6) Find a name of a container which says it is still running: "is running"     // auto generated CONTAINER_NAME

7) Type > docker stop CONTAINER_NAME





// API ENDPOINTS ///////////////////////////////////////////////////////////////////////////////

// LISTS

GET -All Data
    127.0.0.1:3000/     //returns whole database

GET -Default Shopping List
    127.0.0.1:3000/shopping-list  //returns main shopping list

// CATEGORIES

GET -All Categories
    127.0.0.1:3000/categories   //returns all categories

