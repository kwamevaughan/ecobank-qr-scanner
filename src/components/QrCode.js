// components/QrCode.js
import React, { useRef, useState } from 'react';
import QRCode from 'qrcode';

const QrCode = () => {
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState('');
  const url = 'https://site.gig.co.ke/ecobankfc2024';

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
  React.useEffect(() => {
    generateQRCode();
  }, []);

  return (
    <div className="qr-container">
      {qrCodeDataUrl ? (
        <>
          <img src={qrCodeDataUrl} alt="QR Code" />
          <p>Scan this QR code to go to Ecobank!</p>
          <button onClick={downloadQRCode}>Download QR Code</button>
        </>
      ) : (
        <p>Loading QR code...</p>
      )}
    </div>
  );
};

export default QrCode;
