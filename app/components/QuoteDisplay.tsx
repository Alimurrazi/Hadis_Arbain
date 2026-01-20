import { motion, AnimatePresence } from 'motion/react';

interface QuoteDisplayProps {
  quote: string;
  author: string;
}

export function QuoteDisplay({ quote, author }: QuoteDisplayProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={quote}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mx-auto px-4 h-full flex flex-col max-h-full overflow-y-auto"
      >
        <div className="flex-1 overflow-y-auto py-4 px-2">
          {/* Decorative top border */}
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-emerald-600"></div>
            <div className="mx-4 text-emerald-600 text-2xl">✦</div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-emerald-600"></div>
          </div>

          {/* Quote */}
          <blockquote className="relative">
            <div className="absolute -left-2 -top-2 text-4xl text-emerald-600/20" style={{ fontFamily: 'Cinzel, serif' }}>"</div>
            <p
              className="text-base md:text-l lg:text-xl text-gray-800 leading-relaxed relative z-10 px-4"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, whiteSpace: "pre-line" }}
            >
              {quote}
            </p>
            <div className="absolute -right-2 -bottom-2 text-4xl text-emerald-600/20" style={{ fontFamily: 'Cinzel, serif' }}>"</div>
          </blockquote>

          {/* Author */}
          <div className="mt-8 text-center">
            <div className="inline-block">
              <p
                className="text-lg md:text-xl text-emerald-700 italic font-semibold"
                style={{ fontFamily: 'Amiri, serif' }}
              >
                — {author}
              </p>
              <div className="mt-2 h-0.5 bg-gradient-to-r from-transparent via-emerald-600 to-transparent"></div>
            </div>
          </div>

          {/* Decorative bottom border */}
          <div className="flex items-center justify-center mt-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-emerald-600"></div>
            <div className="mx-4 text-emerald-600 text-2xl">✦</div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-emerald-600"></div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
