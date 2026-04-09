import QRCode from "qrcode";

const url = "https://bemorehuman.co.in/pamp";

QRCode.toFile("poster-qr.png", url, {
  width: 1200,
  margin: 2
})
.then(() => {
  console.log("QR code generated!");
})
.catch(err => {
  console.error(err);
});