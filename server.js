const express = require('express')
const { getRequestBody, defaultRequestBody, params } = require('./config')
const https = require('https');

const app = express()
const port = 3000


app.get('/', (req, res) => {
    const requestBody = getRequestBody()
    const options = {
        hostname: 'test-payment.momo.vn',
        port: 443,
        path: '/v2/gateway/api/create',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(requestBody)
        },
    }
    const request = https.request(options, response => {
        console.log(`Status: ${response.statusCode}`);
        console.log(`Headers: ${JSON.stringify(response.headers)}`);
        response.setEncoding('utf8');
        response.on('data', (body) => {
            console.log('Body: ');
            console.log(body);
            console.log('payUrl: ');
            console.log(JSON.parse(body).payUrl);
        });
        response.on('end', () => {
            res.send("hihi")
        });
    }
    )
    request.on('error', (e) => {
        console.log(`problem with request: ${e.message}`);
    });
    // write data to request body
    console.log("Sending....")
    request.write(requestBody);
    request.end();
})

app.post('/check', (req, res) => {
    console.log("🚀 ~ file: server.js:46 ~ app.post ~ req:", req)
    res.send('Hoàn tất thanh toán')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})