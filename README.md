# Movie Recommendation
42913 ass3 by Group 30 - Enjoy!

## Must run both backend and frontend!



### Backend ！【important】

To set up the backend, you must use an environment running _**Python 3.7**_. We recommend using anaconda to create an environment to handle this. 

Then follow the steps as below.

```bash
##### From your python 3.7 environment #####

cd MovieRecommendation # Enter folder containing files
cd backend  # Enter backend folder
unzip 'model&data.zip'  # Or use unarchiver of your choice
# If using anaconda, run conda install menuinst before next step
pip install -r requirements.txt # Install packages to your python 3.7 environment
python manage.py runserver 
```



### Frontend 【important】

The frontend can be accessed by visiting http://group30rovierecommendation.s3-website-ap-southeast-2.amazonaws.com however it is recommended 
that you run it locally due to issues with public and private network compatibilities. If running using this service
it is recommended you run it on non-chrome based browsers (i.e. FireFox) _**The backend must still be run locally.**_

Alternatively you can set up the frontend locally however, node and npm must be installed on your machine

```bash
cd frontend
npm install
serve -s dist
```

Then visit http://localhost:3000 and enjoy!




