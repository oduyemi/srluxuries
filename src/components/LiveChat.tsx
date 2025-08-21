"use client";
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export const WhatsAppChatButton: React.FC = () => {
  const phoneNumber = '+2349159999965'; 
  const message = 'Hello. I just visited your website. I’d like to find make inquiries about your services.';

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366',
        border: 'none',
        borderRadius: '50%',
        padding: '16px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
        zIndex: 1000,
        cursor: 'pointer',
      }}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={24} color="#fff" />
    </button>
  );
};