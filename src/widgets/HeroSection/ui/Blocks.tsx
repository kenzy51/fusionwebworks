import React from 'react';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';
import styles from './Home.module.css';

export const Blocks = () => {
  return (
    <>
      <div className={styles.description}>
        <div></div>
      </div>
      <div className={styles.center}>
        <h1>Fusion Web</h1>
      </div>
      <div className={styles.grid}>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>
            Automate <span>-&gt;</span>
          </h2>
          <p>Your great business ideas</p>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <h2>
            Trust <span>-&gt;</span>
          </h2>
          <p>To our approach in building great automation</p>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Discover and immerse in our projects</p>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h2>
            Inspire <span>-&gt;</span>
          </h2>
          <p>By our proficiency in this field</p>
        </motion.div>
      </div>
    </>
  );
};