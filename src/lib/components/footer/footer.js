import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { componentPropTypes, defaultComponentPropTypes } from '../../utils/componentPropTypes';
import styles from './footer.module.scss';

const currentYear = moment().year();

const Footer = ({ location, theme, menuItems, copyright }) => (
  <div className={styles[`theme-${theme}`]}>
    {!location.pathname.indexOf('/seatontheplane') > -1 && (
      <footer className={styles.footerBackground} role="contentinfo">
        <div className={styles.outerLinksContainer}>
          <div className={styles.innerLinksContainer}>
            <div className={styles.fullWidth}>
              <div className={`${styles.flex} ${styles.wrap}`}>
                {menuItems.map(columnMenu => (
                  <nav className={columnMenu.className || styles.navColumn} key={columnMenu.title}>
                    <h4 className={columnMenu.titleClassName || styles.navTitle}>
                      {columnMenu.title}
                    </h4>
                    <ul className={columnMenu.listClassName || styles.navList}>
                      {columnMenu.menu.map(item => (
                        <li className={styles.navItem} key={item.title}>
                          <a href={item.link} className={item.className || styles.link}>
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                ))}
              </div>
              <div className={`${styles.flex} ${styles.rightContainer}`}>
                <div className={`${styles.becomeFriend}`}>
                  <div className={`${styles.flex} ${styles.formContainer}`}>
                    <h4 className={styles.navTitle}>Become an AIME friend</h4>
                    <p className={styles.informativeParagraph}>Subscribe to our newsletter</p>
                    <form
                      acceptCharset="UTF-8"
                      action="https://formkeep.com/f/0f2fe2a1cd09"
                      method="POST"
                      className={styles.relative}
                    >
                      <input type="hidden" name="utf8" value="✓" />
                      <input
                        type="hidden"
                        name="submissionmessage"
                        value="footernewslettersubscription"
                      />
                      <input
                        id="subscribe"
                        className={styles.emailInput}
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        required
                      />
                      <button type="submit" className={styles.submitEmail} />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Copyright Section */}
        <div className={styles.copyrightContainer}>
          <div className={styles.maxWidthContainer}>
            <span className={styles.footerText}>{`${currentYear} © AIME`}</span>
            <div>
              <ul className={copyright.className || styles.footerLinksList}>
                {copyright.items &&
                  copyright.items.map(item => (
                    <li className={item.className || styles.footerLink} key={item.title}>
                      {item.link ? (
                        <a href={item.link} className={styles.link}>
                          {item.title}
                        </a>
                      ) : (
                        item.title
                      )}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )}
  </div>
);

Footer.propTypes = {
  ...componentPropTypes,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      className: PropTypes.string,
      titleClassName: PropTypes.string,
      listClassName: PropTypes.string,
      menu: PropTypes.arrayOf(
        PropTypes.shape({
          link: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          className: PropTypes.string,
        }),
      ).isRequired,
    }),
  ).isRequired,
  copyright: PropTypes.shape({
    className: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        className: PropTypes.string,
        title: PropTypes.string.isRequired,
        link: PropTypes.string,
      }),
    ),
  }),
};

Footer.defaultProps = {
  ...defaultComponentPropTypes,
  copyright: {
    item: [],
  },
};

export default Footer;
