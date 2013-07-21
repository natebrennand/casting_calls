
#generating a secrete key for flask

Use the python REPL to create a random character string, this will allow flask to securely store user info in the cookie.

    import os
    print os.urandom(24)

then copy/paste this into your prod file

    export FLASK_SECRET='super random string'


