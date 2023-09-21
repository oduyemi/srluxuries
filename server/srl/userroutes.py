from flask import Blueprint, jsonify
from srl import starter, db

user_routes = Blueprint('user_routes', __name__)

@starter.route("/api/home", methods = ["GET"])
def get_home():
    return jsonify({"Hey": "World!"})

@starter.route("/api/collection", methods = ["GET"], strict_slashes = False)
def get_collection():
    return jsonify({"message": "Behold! Our collection. Feed on it."})