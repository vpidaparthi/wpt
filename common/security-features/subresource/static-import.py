# Lint as: python3
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import subresource

def main(request, response):
    handler = lambda: subresource.get_template("static-import.js.template") % ({
        'static_import_url': request.GET.first('import_url', '')
    })
    subresource.respond(request,
                        response,
                        payload_generator = hanler,
                        content_type = "application/javascript")
