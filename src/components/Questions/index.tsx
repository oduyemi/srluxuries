"use client";
import React, { useState } from "react";
import { Box, Typography, Divider } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    id: "q1",
    question: "Can I exchange my order if it’s not the right fit?",
    answer: (
      <>
        <strong className="text-ggreen">We are keen on satisfying our customers.</strong>{" "}
        Yes, you can exchange items. <code>Terms and conditions apply</code>.
      </>
    ),
  },
  {
    id: "q2",
    question: "How do I use the size and style recommendation tool?",
    answer: (
      <>
        <strong className="text-ggreen">We take your measurements at registration.</strong>{" "}
        Enter them when signing up and update them anytime.
      </>
    ),
  },
  {
    id: "q3",
    question: "Can I return a product if I change my mind?",
    answer: (
      <>
        <strong className="text-ggreen">Returns are possible under conditions.</strong>{" "}
        Requests must be made within 48 hours in good condition.  
        Due to the sensitivity of clothing, returns are accepted only when
        there’s a genuine issue with the product.
      </>
    ),
  },
  {
    id: "q4",
    question: "When can I expect my refund?",
    answer: (
      <>
        <strong className="text-ggreen">Almost immediately.</strong>  
        Refunds are initiated once we receive the product back.  
        Banks may take 3–10 business days to process it to your account.
      </>
    ),
  },
  {
    id: "q5",
    question: "Can I change my delivery address?",
    answer: (
      <>
        <strong className="text-ggreen">Yes, you can.</strong>  
        It’s best to update your address before the delivery process begins.  
        We’ll contact you to verify your order and delivery details.
      </>
    ),
  },
];

export const Questions: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("q1");

  const toggleQuestion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <Box maxWidth="md" className="mx-auto mb-16 px-4">
      {/* Header */}
      <Box className="text-center mb-12">
        <Typography
          variant="h6"
          className="uppercase tracking-[0.25em] text-tan font-semibold"
        >
          FAQs
        </Typography>
        <Typography
          variant="h2"
          className="text-4xl md:text-5xl font-extrabold text-butter leading-tight"
        >
          Your <span className="text-[#39A9DB]">Questions</span>
        </Typography>
        <Typography
          variant="body1"
          className="text-brownie mt-3 text-lg"
        >
          Everything you need to know, simplified.
        </Typography>
      </Box>

      {/* FAQ List */}
      <Box className="space-y-5">
        {faqs.map((faq) => (
          <Box
            key={faq.id}
            className="rounded-2xl border border-tan/40 bg-white/90 shadow-md hover:shadow-lg hover:border-[#39A9DB]/50 transition-all duration-300 backdrop-blur-sm"
          >
            {/* Question */}
            <button
              onClick={() => toggleQuestion(faq.id)}
              aria-expanded={openId === faq.id}
              className="flex w-full items-center justify-between px-6 py-5 text-left text-lg font-semibold text-neutral-800 transition hover:text-[#39A9DB] focus:outline-none"
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
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <Divider />
                  <Box className="px-6 py-4 text-neutral-700 text-base leading-relaxed">
                    <Typography variant="body1">{faq.answer}</Typography>
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
