from flask import Flask, after_this_request, json, jsonify, make_response, session, request, url_for

app = Flask(__name__)
app.secret_key = 'abc'


@app.before_first_request
def before_first_request():
    print('before first request')


@app.before_request
def before_request():
    print('before_request')

    @after_this_request
    def remember_language(response):
        response.set_cookie('user_lang', 'zh-cn')
        return response


@app.after_request
def after_quest(res):
    print('after_quest')
    return res


@app.teardown_request
def teardown_request(err):
    print('teardown_request')


@app.route('/')
def index():
    print(11111111111111111)

    @after_this_request
    def add_header(response):
        print('after_this_request')
        response.headers['X-Foo'] = 'Parachute'
        return response
    return 'index'


@app.route('/test/<name>')
@app.route('/test', defaults={'name': 'test case'})
@app.route('/test/', defaults={'name': 'test case'})
def test(name):
    return name


@app.route('/json')
def test_json():
    data = {'a': 1, 'b': 2}
    response = make_response(json.dumps(data))
    response.mimetype = 'application/json'
    return response


@app.route('/session')
def session1():
    session['logged_in'] = True
    test = '1111'
    return  request.args.get('next','defaults hello')


with app.test_request_context('/test_context'):
    print(request.method)

