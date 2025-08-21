"use client";
import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    id: "question1",
    question: "Can I exchange my order if it’s not the right fit?",
    answer: (
      <>
        <strong className="text-ggreen">We are keen on satisfying our customers.</strong>  
        Yes, you can. <code>Terms and conditions apply</code>.
      </>
    ),
  },
  {
    id: "question2",
    question: "How do I use the size and style recommendation tool?",
    answer: (
      <>
        <strong className="text-ggreen">We take your measurements at registration.</strong>  
        Enter them when signing up and update when needed.
      </>
    ),
  },
  {
    id: "question3",
    question: "Can I return a product if I change my mind?",
    answer: (
      <>
        <strong className="text-ggreen">There are criterias for product return.</strong>  
        Request must be made within 48 hours in good condition.
      </>
    ),
  },
  {
    id: "question4",
    question: "How do I use the size and style recommendation tool?",
    answer: (
      <>
        <strong className="text-ggreen">In the case of tailor-to-fit designs.</strong> 
        We have made provision for you to upload your style image in your request
        form. You can also add other necessary details. When your request
        is received, you will be contacted for further detailing and 
        pricing, which is to foster a good understanding of what is to be done.
      </>
    ),
  },
  {
    id: "question5",
    question: " When can I expect my refund?",
    answer: (
      <>
       <strong className="text-ggreen">Almost immediately.</strong>
        We will provide a refund immediately upon the return of the product
        However, bank providers may take 3 to 10 business days to process
        the refund into the original mode of payment.
      </>
    ),
  },
  {
    id: "question6",
    question: "Can I change my delivery address?",
    answer: (
      <>
        <strong className="text-ggreen">Yes, you can.</strong> It is
        best to change the address before the delivery process begins.
        Before your order is been delivered, you will be contacted to
        verify your order and the delivery details.
      </>
    ),
  },
  {
    id: "question7",
    question: "Can I return my order if I change my mind?",
    answer: (
      <>
        <strong className="text-ggreen">Yes. Terms and conditions apply. </strong>
        There is room for returning your order, but provided that the product 
        has issues. Because of the sensivity of clothing and other fashion
        items, returning an order will be possible only when there is 
        an issue with the product.
      </>
    ),
  },
];

export const Questions: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("question1");

  const toggleQuestion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <Box maxWidth="md" className="mx-auto mb-10 px-4">
      {/* Header */}
      <Box className="text-center mb-10">
        <Typography variant="h6" className="uppercase tracking-widest text-tan font-semibold">
          FAQs
        </Typography>
        <Typography
          variant="h2"
          className="text-4xl md:text-5xl font-extrabold text-butter leading-tight"
        >
          Your
          <span className="text-[#39A9DB] pl-2">Questions</span>
        </Typography>
        <Typography variant="body1" className="text-brownie mt-2">
          Here are the things you need to know.
        </Typography>
      </Box>

      {/* FAQ List */}
      <Box className="space-y-4">
        {faqs.map((faq) => (
          <Box
            key={faq.id}
            className="rounded-2xl border border-tan bg-white shadow-md hover:shadow-lg transition-all duration-300"
          >
            {/* Question Button */}
            <button
              onClick={() => toggleQuestion(faq.id)}
              className="flex w-full items-center justify-between px-6 py-4 text-left text-lg font-medium text-neutral-800 transition hover:text-[#39A9DB] focus:outline-none"
            >
              {faq.question}
              <motion.span
                animate={{ rotate: openId === faq.id ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#39A9DB]"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </motion.span>
            </button>

            {/* Answer */}
            <AnimatePresence>
              {openId === faq.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <Box className="px-6 pb-4 text-neutral-700 text-base leading-relaxed">
                    {faq.answer}
                  </Box>
                </motion.div>
              )}
            </AnimatePresence>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
