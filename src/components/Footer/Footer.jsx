import React from 'react';

// components

import Icon from '../Icon/Icon';

// css

import styles from './Footer.module.scss';

const socialTitleStyles = [styles.contactsTitle, styles.socialTitle];

const Footer = () => (
  <footer className={styles.footer}>
    <h2 className={styles.title}>Contacts:</h2>
    <div className={styles.contactsContainer}>
      <div className={styles.contacts}>
        <p className={styles.contactsTitle}>Adress:</p>
        <p className={styles.adress}>Kudryashova str, 18, Kyiv, 02000</p>
      </div>
      <div className={styles.contacts}>
        <p className={styles.contactsTitle}>Tel. :</p>
        <a href="tel:+380443905457" className={styles.link}>
          +38-044-390-5457
        </a>
      </div>
      <div className={styles.contacts}>
        <p className={styles.contactsTitle}>Email:</p>
        <a href="mailto: fooddeliverysupport@gmail.com" className={styles.link}>
          fooddeliverysupport@gmail.com
        </a>
      </div>
      <div className={styles.contacts}>
        <p className={socialTitleStyles.join(' ')}>Social:</p>
        <div className={styles.socialContainer}>
          <a
            href="https://www.facebook.com/epamuniversityprograms/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="Facebook" className={styles.icon} />
          </a>
          <a
            href="https://www.instagram.com/epam_ukraine/?hl=uk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="Instagram" className={styles.icon} />
          </a>
          <a
            href="https://web.telegram.org/#/im?p=@epamuniprogua"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="Telegram" className={styles.icon} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
