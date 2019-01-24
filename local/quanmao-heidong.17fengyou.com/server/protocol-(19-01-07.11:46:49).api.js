
var client = window.client;
XHRMock.post(
    "https://quanmao-heidong.17fengyou.com/server/protocol?sessionId=a24506ffa83f4736828fb841400f7ef4E4C",
    function(req, resp) {
        resp = resp.status(200);resp = resp.header(':status', '200').header('date', 'Mon, 07 Jan 2019 03:46:49 GMT').header('server', 'Apache-Coyote/1.1').header('access-control-allow-origin', '*').header('access-control-allow-headers', 'Origin,X-Requested-With,Content-Type,Accept').header('access-control-allow-methods', 'GET,PUT,DELETE,POST');
        resp = resp.body('{"code":1}');
        return Promise.resolve(resp);
    }
);

// 请求元数据
// {
//     "startedDateTime": "2019-01-07T11:46:49.050+08:00",
//     "time": 54,
//     "request": {
//         "method": "POST",
//         "url": "https://quanmao-heidong.17fengyou.com/server/protocol?sessionId=a24506ffa83f4736828fb841400f7ef4E4C",
//         "httpVersion": "HTTP/2.0",
//         "cookies": [],
//         "headers": [
//             {
//                 "name": ":method",
//                 "value": "POST"
//             },
//             {
//                 "name": ":scheme",
//                 "value": "https"
//             },
//             {
//                 "name": ":path",
//                 "value": "/server/protocol?sessionId=a24506ffa83f4736828fb841400f7ef4E4C"
//             },
//             {
//                 "name": ":authority",
//                 "value": "quanmao-heidong.17fengyou.com"
//             },
//             {
//                 "name": "accept",
//                 "value": "*/*"
//             },
//             {
//                 "name": "content-type",
//                 "value": "application/x-www-form-urlencoded"
//             },
//             {
//                 "name": "content-length",
//                 "value": "42"
//             },
//             {
//                 "name": "accept-language",
//                 "value": "zh-cn"
//             },
//             {
//                 "name": "user-agent",
//                 "value": "Mozilla/5.0 (iPhone; CPU iPhone OS 12_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/16C101 MicroMessenger/7.0.1(0x17000120) NetType/WIFI Language/zh_CN"
//             },
//             {
//                 "name": "referer",
//                 "value": "https://servicewechat.com/wx6ffff35bc5a94176/6/page-frame.html"
//             },
//             {
//                 "name": "accept-encoding",
//                 "value": "br, gzip, deflate"
//             }
//         ],
//         "queryString": [
//             {
//                 "name": "sessionId",
//                 "value": "a24506ffa83f4736828fb841400f7ef4E4C"
//             }
//         ],
//         "postData": {
//             "mimeType": "application/x-www-form-urlencoded",
//             "params": [
//                 {
//                     "name": "{\"className\":\"ReqHeart\",\"time\":1546832808}",
//                     "value": ""
//                 }
//             ]
//         },
//         "headersSize": 14,
//         "bodySize": 42
//     },
//     "response": {
//         "_charlesStatus": "COMPLETE",
//         "status": 200,
//         "statusText": null,
//         "httpVersion": "HTTP/2.0",
//         "cookies": [],
//         "headers": [
//             {
//                 "name": ":status",
//                 "value": "200"
//             },
//             {
//                 "name": "date",
//                 "value": "Mon, 07 Jan 2019 03:46:49 GMT"
//             },
//             {
//                 "name": "server",
//                 "value": "Apache-Coyote/1.1"
//             },
//             {
//                 "name": "access-control-allow-origin",
//                 "value": "*"
//             },
//             {
//                 "name": "access-control-allow-headers",
//                 "value": "Origin,X-Requested-With,Content-Type,Accept"
//             },
//             {
//                 "name": "access-control-allow-methods",
//                 "value": "GET,PUT,DELETE,POST"
//             }
//         ],
//         "content": {
//             "size": 10,
//             "mimeType": null,
//             "text": "eyJjb2RlIjoxfQ==",
//             "encoding": "base64"
//         },
//         "redirectURL": null,
//         "headersSize": 163,
//         "bodySize": 10
//     },
//     "serverIPAddress": "118.25.165.32",
//     "cache": {},
//     "timings": {
//         "dns": -1,
//         "connect": -1,
//         "ssl": -1,
//         "send": 0,
//         "wait": 51,
//         "receive": 3
//     }
// }
