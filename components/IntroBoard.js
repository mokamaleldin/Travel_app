// components/IntroBoard.js
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroBoard({ onComplete }) {
  const [stage, setStage] = useState(0);

  const messages = ["Hello", "Hola","Bonjour","مرحبا ","Olá","Здравствуйте ","你好 ","こんにちは ","Merhaba","Hej","Hei" ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (stage < messages.length) {
        setStage(stage + 1);
      } else {
        onComplete();
      }
    }, 300); 

    return () => clearTimeout(timer);
  }, [stage]);

  return (
    <AnimatePresence>
      {stage < messages.length && (
        <motion.div
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: '0%', opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 flex items-center justify-center bg-black text-white font-bold text-4xl"
        >
          {messages[stage]}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
