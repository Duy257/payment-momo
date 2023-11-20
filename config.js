const crypto = require('crypto');

const params = {
  accessKey: "F8BBA842ECF85",
  partnerCode: "MOMO",
  requestType: "captureMoMoWallet",
  notifyUrl: "https://momo.vn",
  returnUrl: "https://momo.vn",
  orderId: "MM1540456472575",
  amount: "150000",
  orderInfo: "SDK team.",
  requestId: "MM1540456472575",
  extraData: "email=abc@gmail.com",
  signature: "996ed81d68a1b05c99516835e404b2d0146d9b12fbcecbf80c7e51df51cac85e"
}



const defaultRequestBody = {
  "partnerCode": "MOMOBKUN20180529", //Require
  "requestId": "RE1696393612323",  //Require
  "orderId": "OD1696393612323",  //Require
  "amount": 10000,  //Require
  "lang": "vi",   //Require
  "subPartnerCode": "",
  "partnerName": "Duy Nguyễn",
  "storeId": "",
  "orderInfo": "Thanh toan hoa don OD1696393612323", //Require
  "orderGroupId": "",
  "redirectUrl": "https://webhook.site/04561cd2-489b-4982-9e68-5111a84a097a",  //Require
  "ipnUrl": "https://webhook.site/04561cd2-489b-4982-9e68-5111a84a097a",    //Require
  "requestType": "captureWallet",
  "extraData": "",
  "items": [
    {
      "id": "204727",
      "name": "YOMOST Bac Ha&Viet Quat 170ml",
      "description": "YOMOST Sua Chua Uong Bac Ha&Viet Quat 170ml/1 Hop",
      "category": "beverage",
      "imageUrl": "https://momo.vn/uploads/product1.jpg",
      "manufacturer": "Vinamilk",
      "price": 11000,
      "currency": 'VND',
      "quantity": 5,
      "unit": "hộp",
      "totalPrice": 55000,
    }
  ],
  "userInfo": {
    "name": "MoMo Developer V3",
    "phoneNumber": "0923441111",
    "email": "merchant.care@momo.vn"
  },
  "signature": "232cc5b7b748555cb32d66a3552092ba117ce88b0cd2508f684e00607fb44ba3"
}

const getRequestBody = () => {
  let partnerCode = "MOMO";
  let accessKey = "F8BBA842ECF85";
  let secretkey = "K951B6PE1waDMi640xX08PD3vg6EkVlz";
  let requestId = '1234567d81f32313';
  let orderId = '123456781d3f232';
  let orderInfo = "pay with MoMo";
  let redirectUrl = "https://learn-dev-v3.izteach.vn";
  let ipnUrl = "https://callback.url/notify";
  let lang = 'vi'
  let amount = "200000";
  let requestType = "captureWallet"
  let extraData = ""; //pass empty value if your merchant does not have stores
  let rawSignature = `accessKey=${accessKey}&amount=${amount}&extraData=${extraData}&ipnUrl=${ipnUrl}&orderId=${orderId}&orderInfo=${orderInfo}&partnerCode=${partnerCode}&redirectUrl=${redirectUrl}&requestId=${requestId}&requestType=${requestType}`
  console.log("--------------------RAW SIGNATURE----------------")
  console.log(rawSignature)
  //signature
  let signature = crypto.createHmac('sha256', secretkey)
    .update(rawSignature)
    .digest('hex');
  console.log("--------------------SIGNATURE----------------")
  console.log(signature)
  const requestBody = JSON.stringify({
    partnerCode: partnerCode,
    accessKey: accessKey,
    requestId: requestId,
    amount: amount,
    orderId: orderId,
    orderInfo: orderInfo,
    redirectUrl: redirectUrl,
    ipnUrl: ipnUrl,
    extraData: extraData,
    requestType: requestType,
    signature: signature,
    lang: 'vi'
  });
  return requestBody
}

module.exports = { params, getRequestBody, defaultRequestBody }