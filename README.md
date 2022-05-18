# Movie Recommendation
42913 ass3 - Enjoy!





### Set up a new App

```bash
 cd backend/apps
 django-admin startapp Movies
```



### Backend ！【important】

Please remember to change the absolute addresses of the model_knn.m and moviePivot.h5 directories in the backend/ folder to the backend/apps/globalvar.py file and update them to ensure that the datasets and smart models are imported.



### Frontend

```bash
cd frontend
npm install # If you haven't installed the packages yet
npm run serve

npm run build # for backend
```



### Run

```bash
cd backend
python manage.py runserver
```

then visit localhost:8080



