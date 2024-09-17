// pages/index.js
import QrCode from '../components/QrCode';

export default function Home() {
  return (
    <div className="home">
      <h1>QR Code to Ecobank Fintech</h1>
      <QrCode />
    </div>
  );
}
