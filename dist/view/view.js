'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * 生成视图
 */
var RenderClientPage = exports.RenderClientPage = function RenderClientPage(env) {
  if (env === 'development') {
    return '\n      <!DOCTYPE html>\n        <html lang="en">\n        <head>\n          <meta charset="UTF-8">\n          <meta name="viewport" content="width=device-width, initial-scale=1.0 user-scalable=0">\n          <meta http-equiv="X-UA-Compatible" content="ie=edge">\n          <title>\u753B\u62A5\u6D4B\u8BD5\u9875\u9762</title>\n        </head>\n        <body>\n          <div id="app"></div>\n          <script src="/devClient.bundle.js"></script>\n        </body>\n      </html>';
  }
  return '\n    <!DOCTYPE html>\n      <html lang="en">\n      <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0 user-scalable=0">\n        <meta http-equiv="X-UA-Compatible" content="ie=edge">\n        <title>\u753B\u62A5</title>\n      </head>\n      <body>\n        <div id="app"></div>\n        <script src="/common/common-manifest.js"></script>                \n        <script src="/common/common-reactlib.js"></script>        \n        <script src="/client/bundle-client.js"></script>\n      </body>\n    </html>';
};

var RenderManagePage = exports.RenderManagePage = function RenderManagePage(env) {
  if (env === 'development') {
    return '\n      <!DOCTYPE html>\n        <html lang="en">\n        <head>\n          <meta charset="UTF-8">\n          <meta name="viewport" content="width=device-width, initial-scale=1.0 user-scalable=0">\n          <meta http-equiv="X-UA-Compatible" content="ie=edge">\n          <title>\u753B\u62A5\u540E\u53F0\u6D4B\u8BD5\u9875\u9762</title>\n        </head>\n        <body>\n          <div id="app"></div>\n          <script src="/devClient.bundle.js"></script>\n        </body>\n      </html>';
  }
  return '\n    <!DOCTYPE html>\n      <html lang="en">\n      <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0 user-scalable=0">\n        <meta http-equiv="X-UA-Compatible" content="ie=edge">\n        <title>\u753B\u62A5\u540E\u53F0</title>\n      </head>\n      <body>\n        <div id="app"></div>\n        <script src="/devClient.bundle.js"></script>\n      </body>\n    </html>';
};
//# sourceMappingURL=view.js.map