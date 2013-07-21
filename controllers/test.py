
import MySQLdb as mysql
from os import getenv

db = mysql.connect( host    = getenv('MYSQL_HOST'),
                    user    = getenv('MYSQL_USER'),
                    passwd  = getenv('MYSQL_PASSWORD'),
                    db      = getenv('MYSQL_DATABASE') )

#
#   IMPORT YOUR CONTROLLER HERE
#
#   INSERT TESTING CODE HERE1
#
import actor

class request:
    def __init__(self, dict):
        self.form = dict 

a = request({"id":1, "gender":"Male", "height":60.1, "CompensationDesired":"None", "race":"White"})

print actor.save_actor(db, a)

db.close()
