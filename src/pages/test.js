// pages/test.js
import { QRCode } from 'qrcode.react';

export default function Test() {
  return (
    <div>
      <h1>Test QR Code</h1>
      <QRCode value="https://www.google.com" size={256} />
    </div>
  );
}
