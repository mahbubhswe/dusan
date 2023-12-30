import "./globals.css";
import Navbar from "./components/navbar";


export const metadata = {
  title: "DUSAN - Dhaka University Students Association of Nandail",
  description: "DUSAN - Dhaka University Students Association of Nandail",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
