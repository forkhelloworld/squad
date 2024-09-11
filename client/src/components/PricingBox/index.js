import React from 'react';
import styles from './PricingBox.module.scss';

const PricingBox = (props) => {
  return (
    <article className={styles['pricing-box']}>
      <header
        className={styles.header}
        style={{ border: `5px solid ${props.color}` }}
      >
        <h2 style={{ color: props.color }}>{props.header}</h2>
        <p className={styles.tagline}>{props.tagline}</p>
        <p
          style={{ color: props.color, textAlign: 'right' }}
          className={styles.price}
          color={props.color}
        >
          US${props.price}
        </p>
      </header>
      <section className={styles.details}>{props.children}</section>

      <button
        className={styles['start-button']}
        style={{ backgroundColor: props.color }}
      >
        Start
      </button>
    </article>
  );
};

export default PricingBox;
