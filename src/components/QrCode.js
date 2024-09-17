// components/QrCode.js
import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode'; // Correct import for qrcode package

const QrCode = () => {
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState('');
  const url = 'https://www.google.com'; // Update to your desired URL

  // Generate QR Code PNG data URL
  const generateQRCode = async () => {
    try {
      const qrCodeUrl = await QRCode.toDataURL(url, { type: 'image/png' });
      setQrCodeDataUrl(qrCodeUrl);
    } catch (error) {
      console.error('Failed to generate QR code:', error);
    }
  };

  // Download QR Code PNG
  const downloadQRCode = () => {
    const link = document.createElement('a');
    link.href = qrCodeDataUrl;
    link.download = 'qrcode.png';
    link.click();
  };

  // Generate QR Code URL on component mount
  useEffect(() => {
    generateQRCode();
  }, []);

  return (
      <div className="qr-container">
        {qrCodeDataUrl ? (
            <>
              <img src={qrCodeDataUrl} alt="QR Code" />
              <p>Scan this QR code to go to Google!</p>
              <button onClick={downloadQRCode}>Download QR Code</button>
            </>
        ) : (
            <p>Loading QR code...</p>
        )}
      </div>
  );
};

export default QrCode;
