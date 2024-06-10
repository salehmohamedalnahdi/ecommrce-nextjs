import { Inter } from "next/font/google";
import "./style/globals.css";
import Link from "next/link";
import { FaShoppingCart } from 'react-icons/fa';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ecommerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <header >
      <div className="title-signup">
        <h1>Welcome To Ecommerce</h1>
        <Link  href="#">
            <h2>login</h2>
        </Link>
        <Link  href="#">
            <h2>signup</h2>
        </Link>
        <Link  href="/cart">
           <h2 className="text-xl text-blue-600" ><FaShoppingCart /></h2>
        </Link>
        </div>
       <div className="pages">
       <Link  href="/">
            <h2 >Home</h2>
        </Link>
        <Link  href="#">
            <h2>About</h2>
        </Link>
        <Link  href="/create">
            <h2>Create</h2>
        </Link>
       </div>
      </header>
        {children}
        <footer >
        <p>&copy; 2024</p>
      </footer>
      </body>
    </html>
  );
}
