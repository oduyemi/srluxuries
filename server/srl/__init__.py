from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
from flask_cors import CORS


load_dotenv(".env.local") 


starter = Flask(__name__, instance_relative_config=True)
starter.config["SQLALCHEMY_DATABASE_URI"] = "mysql+mysqlconnector://root@localhost/srldb"
db = SQLAlchemy(starter)

CORS(starter)

from srl import userroutes