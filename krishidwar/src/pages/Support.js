import React from 'react';
import styles from './Support.module.css'; // Updated import for CSS module

function Support() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles['left-side']}>
          <div className={styles.details}>
            <i className="fas fa-map-marker-alt"></i>
            <div className={styles.topic}>Address</div>
            <div className={styles['text-one']}>Surkhet, NP12</div>
            <div className={styles['text-two']}>Birendranagar 06</div>
          </div>
          <div className={styles.details}>
            <i className="fas fa-phone-alt"></i>
            <div className={styles.topic}>Phone</div>
            <div className={styles['text-one']}>+0098 9893 5647</div>
            <div className={styles['text-two']}>+0096 3434 5678</div>
          </div>
          <div className={styles.details}>
            <i className="fas fa-envelope"></i>
            <div className={styles.topic}>Email</div>
            <div className={styles['text-one']}>support@krishidwar.com</div>
            <div className={styles['text-two']}>info@krishidwar.com</div>
          </div>
        </div>
        <div className={styles['right-side']}>
          <div className={styles['topic-text']}>Send us a message</div>
          <p>If you have any queries or need assistance related to our services, feel free to reach out to us through the form below. We are here to help you.</p>
          <form>
            <div className={styles['input-box']}>
              <input type="text" placeholder="Enter your name" required />
            </div>
            <div className={styles['input-box']}>
              <input type="email" placeholder="Enter your email" required />
            </div>
            <div className={`${styles['input-box']} ${styles['message-box']}`}>
              <textarea placeholder="Enter your message" required></textarea>
            </div>
            <div className={styles.button}>
              <input type="submit" value="Send Now" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Support;
