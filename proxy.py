from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

def id2url(base:str, id_:str) -> str:
    url = "https://tiermaker.com/images"
    print(base, id_)
    if "/" not in base:
        print("if")
        url += f"/chart/chart/{base}/{id_}"
    else:
        print("else")
        url += f"/{base}/{id_}"
    print(url)
    url =  url.replace("\\/", "/")
    print(url, end="\n")
    return url

@app.route('/proxy', methods=['GET'])
def proxy():
    url = request.args.get('url')
    if not url:
        return jsonify({'error': 'URL manquante'}), 400
    try:
        response = requests.get(
            url + "&" + "&".join([key + "=" + request.args[key] for key in request.args.keys() if key != "url"]), 
            headers={
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:123.0) Gecko/20100101 Firefox/123.0", 
                # "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8", 
                # "Accept-Language": "fr,fr-FR;q=0.8,en-US;q=0.5,en;q=0.3", 
                # "Accept-Encoding": "gzip, deflate, br"
            },
            allow_redirects=False)

        response_headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept',
        }

        data = eval(response.content.decode("utf8"))
        content = [{"id":i+1, "url": id2url(data[0], v)} for i, v in enumerate(data[1:])]

        return jsonify({'content': content}), 200, response_headers
    except requests.exceptions.RequestException as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='localhost', port=5432)
