import React from 'react';
import PricingBox from '../../components/PricingBox';
import Header from '../../components/Header/Header';
import CONSTANTS from '../../constants';
import styles from './PricingPage.module.scss';
import img from './img';
const { PRICING_COLORS } = CONSTANTS;

const PricingPage = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.choose}>
          <div>
            <p style={{ fontWeight: 'bold', fontSize: '1.5em' }}>
              Pricing For
              <div className={styles['select-wrapper']}>
                <select
                  className={styles['custom-select']}
                  style={{ backgroundColor: PRICING_COLORS.MANAGED }}
                >
                  <option>Name</option>
                  <option>Logo</option>
                  <option>Tagline</option>
                  <option>Name and Logo</option>
                  <option>Name and Tagline</option>
                  <option>Name, Tagline and Logo</option>
                  <option>Name, Logo and Business Cards</option>
                  <option>Logo, Business Cards and Stationary</option>
                  <option>Logo and Tagline</option>
                  <option>Business Cards</option>
                  <option>Stationary</option>
                  <option>Product Feedback and Research</option>
                </select>
              </div>
            </p>
          </div>
          <img src={img} />
        </section>
        <section className={styles['pricing-section']}>
          <PricingBox
            color={PRICING_COLORS.BRONZE}
            header="Bronze"
            tagline="Branding on a budget"
            price="797"
          >
            <p>Includes 3 Contests (Name, Logo, Tagline)</p>
            <p>
              Prize to Winner - $405 ($135 for Name, $135 for Logo, $135 for
              Tagline) (Included)
            </p>
          </PricingBox>
          <PricingBox
            color={PRICING_COLORS.GOLD}
            header="Gold"
            tagline="More privacy and Trademark support"
            price="1247"
          >
            <p>Includes 3 Contests (Name, Logo, Tagline)</p>
            <p>
              Validation Services & Upgrades ($838 value)
              <ul>
                <li> Matching .com URL</li>
                <li> Instant Trademark Check (One Database)</li>
              </ul>
            </p>
            <p>Expected Entries , 600+ Name, 50+ Logo, 200+ Tagline</p>
            <p>Partial Refund Option</p>
          </PricingBox>
          <PricingBox
            color={PRICING_COLORS.PLATINUM}
            header="Platinum"
            tagline="More privacy and Trademark support"
            price="1247"
          >
            <p>Includes 3 Contests (Name, Logo, Tagline)</p>
            <p>
              Prize to Winner - $625 ($200 for Name, $225 for Logo, $200 for
              Tagline) (Included)
            </p>
            <p>
              Validation Services & Upgrades ($838 value)
              <ul>
                <li> Matching .com URL</li>
                <li> Instant Trademark Check (One Database)</li>
                <li> NDA and More Privacy</li>
                <li> Project Promotion (Basic)</li>
                <li> Comprehensive Trademark Research (1 Name, 1 Tagline)</li>
              </ul>
            </p>
            <p>Expected Entries , 600+ Name, 50+ Logo, 200+ Tagline</p>
            <p>Partial Refund Option</p>
          </PricingBox>
          <PricingBox
            color={PRICING_COLORS.MANAGED}
            header="Managed"
            tagline="More privacy and Trademark support"
            price="1247"
          >
            <p>Includes 3 Contests (Name, Logo, Tagline)</p>
          </PricingBox>
        </section>
      </main>
    </>
  );
};

export default PricingPage;
