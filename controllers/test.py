
import  MySQLdb as mysql
from os import getenv

db = mysql.connect( host    = getenv('MYSQL_HOST'),
                    user    = getenv('MYSQL_USER'),
                    passwd  = getenv('MYSQL_PASSWORD'),
                    db      = getenv('MYSQL_DATABASE') )

#
#   IMPORT YOUR CONTROLLER HERE
#
#   INSERT TESTING CODE HERE
#
#


db.close()


