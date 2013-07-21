
##Potential Routes

    @app.route('/audition/create',      methods=['GET', 'POST'])
    @app.route('/audition/edit',        methods=['GET', 'PUT'])
    @app.route('/audition/delete',      methods=['GET', 'DELETE'])

    @app.route('/part/create',          methods=['GET', 'POST'])
    @app.route('/part/edit',            methods=['GET', 'PUT'])
    @app.route('/part/delete',          methods=['GET', 'DELETE'])

    @app.route('/production/create')
    @app.route('/production/edit',      methods=['GET', 'PUT'])
    @app.route('/production/delete',    methods=['GET', 'DELETE'])

    @app.route('/company/create',       methods=['GET', 'POST'])
    @app.route('/company/view')
    @app.route('/company/edit')

    @app.route('/account/view')
    @app.route('/account/edit',         methods=['GET', 'POST'])

    @app.route('/notfound')
    @app.route('/unauthorized')
    @app.route('/about')
    @app.route('/logout',               methods=['POST'])
    @app.route('/login',                methods=['POST'])
    @app.route('/')


