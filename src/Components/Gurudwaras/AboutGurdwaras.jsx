import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const AboutGurudwaras = () => {
  return (
    <section className="pt-16 px-6 md:px-16 bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-6 uppercase">
          About Gurudwaras
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 leading-relaxed">
          A <strong className="text-orange-500">Gurudwara</strong> (meaning "Door to the Guru") is not just a place of worship for Sikhs —
          it is a sanctuary of peace, equality, and selfless service.
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto space-y-12 text-center">
        {[
          {
            title: '🍲 Langar: The Free Community Kitchen',
            content: 'Langar is a free meal served at every Gurudwara, prepared and served by volunteers. Everyone sits together — rich or poor — as equals.',
          },
          {
            title: '🤝 A Place for All',
            content: 'Whether you seek peace, want to serve the community, or simply need a warm meal — you are welcome.',
          },
          {
            title: '🙏 Why Visit a Gurudwara?',
            content: [
              'To reflect and connect spiritually',
              'To experience equality and humility',
              'To serve others and be part of something meaningful',
              'To enjoy devotional music and teachings',
            ],
            list: true,
          },
        ].map((section, index) => (
          <motion.div
            key={section.title}
            className="text-left"
            custom={index + 1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-semibold text-orange-400 mb-3 text-center">
              {section.title}
            </h3>
            {section.list ? (
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 text-center">
                {section.content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-700 dark:text-gray-300 text-center">{section.content}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutGurudwaras;
