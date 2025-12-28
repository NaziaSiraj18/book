import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Physical Intelligence',
    icon: '🤖',
    description: (
      <>
        Explore how AI systems interact with the physical world, combining perception,
        learning, and action in complex environments.
      </>
    ),
  },
  {
    title: 'Humanoid Design',
    icon: '🦾',
    description: (
      <>
        Understand the principles behind humanoid robot design, biomechanics,
        and control systems that mimic human movement.
      </>
    ),
  },
  {
    title: 'Sensorimotor Learning',
    icon: '🧠',
    description: (
      <>
        Discover how robots learn to coordinate sensing and motor capabilities
        through advanced machine learning techniques.
      </>
    ),
  },
];

function Feature({icon, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <div className={styles.featureIcon}>{icon}</div>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
