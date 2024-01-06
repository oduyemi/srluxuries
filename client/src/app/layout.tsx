import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Modal from 'react-modal';


Modal.setAppElement('#root');

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SR Luxuries',
  description: 'Your go-to fashion plug',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}

        <Modal
           isOpen={isModalOpen}
           onRequestClose={closeModal}
           className="modal"
           overlayClassName="overlay"
       >
           <h2>Email Addresses</h2>
           <p>info@thesrluxuries.com</p>
           <p>support@thesrluxuries.com</p>
           <button onClick={closeModal}> X </button>
        </Modal>
      </body>
    </html>
  );
}