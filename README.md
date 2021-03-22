# it3038c-scripts
 This repository was created by Prateek Chellani for the IT3038C - Scripting Languages class, while at UC in the Spring semester of 2021. 
 The class will involve scripts created in Bash, Powershell, Python and NodeJS. 
 Feel free to leave feedback on how any of the scripts can be improved!
 Thanks

### LAB 8 Submission

The Script created in this Lab retrieves the top 25 most expensive players for each of the 20 Premier League clubs. It produces the output data in a dataframe, as shown below. 
The Data is scraped from Transfermarkt.co.uk

!["Demo by Prateek Chellani"](https://i.imgur.com/8esW3SN.mp4 )


### LAB 7 Submission

Here is how you can run a Python script that I created, which uses a plugin called pyodbc 
PYODBC is a python module that allows connecting to and accessing ODBC databases. ODBC stands for Open Database Connectivity and is the standard interface for accessing DB Management Systems. 

First, we want to set up a virtual environment, and install pyodbc.
```bash
virtualenv ~/venv/pyodbc
source ~/venv/scripts/bin/activate
pip install pyodbc
```
Now, find an image you want to use. It can be anything, really. In fact, if we're smart, we can do it all from the command line. 
Download an image from the internet and save it to your hard drive. 
Now, in Python, run the following code
```python
import pyodbc
connection_String = "(Driver={Your Driver};Server={YourServer};Database={YourDB};)"
pyodbc.connect(connection_String)
connection = pyodbc.connect(connection_String)

##This connects your Python Script to your DB

del connection

# This closes your connection
```

The syntax above will initiate and close a connection to your Database. It is essential to close your connection when you are done, to prevent security vulnerabilities such as SQL injection. One way to execute queries with pyodbc connected is to use the cursor. Assuming you followed the code above, you can insert these lines before you delete your connection. 

```python
myCursor = connection.cursor()
variable1 = myCursor.execute("Your SQL Here")


# The same can also be done by 

variable2 = connection.execute("Your SQL here")
```

It is important to understand how to commit statements. If you are only selecting/reading data from your database, you do not need to commit anything.
However, if you use an update/create table statement, or alter the database in any way, you should commit your changes. This can be done as follows

```python
connection.commit()

# Alternatively, if you do not wish to commit your changes, you can roll them back (revert them to last commit)

connection.rollback()

```

It is important to note that if you close a connection without committing, it will rollback to the last commit, and any uncommitted changes will be lost. 
Personally, I prefer to use pyodbc just to create connections to the database, and then use different modules (such as Pandas) to actually execute and read SQL, due to their advanced formatting options, however pyodbc works just as well!
As always, make sure you delete your connection. And when done, deactivate your VEnv
```bash
deactivate
```
