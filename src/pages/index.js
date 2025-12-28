import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import RainbowText from '@site/src/components/AnimatedText/RainbowText';
import Typewriter from '@site/src/components/AnimatedText/Typewriter';
import RainbowTypewriter from '@site/src/components/AnimatedText/RainbowTypewriter';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroInner}>
          <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
            <RainbowText speed="medium">{siteConfig.title}</RainbowText>
          </Heading>
          <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
            <Typewriter text={siteConfig.tagline} speed={50} />
          </p>
          <div className={styles.indexCtas}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              Start My Learning Journey
            </Link>
            <span className={styles.indexCtasGitHubButtonWrapper}>
              <iframe
                className={styles.indexCtasGitHubButton}
                src="https://ghbtns.com/github-btn.html?user=facebook&amp;repo=docusaurus&amp;type=star&amp;count=true&amp;size=large"
                width="170"
                height="30"
                title="GitHub stars"
              />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

function Showcase() {
  return (
    <div className={clsx(styles.showcaseContainer, 'padding-vert--lg')}>
      <div className="container">
        <div className="row">
          <div className="col col--4">
            <div className={clsx(styles.showcaseItem, styles.showcaseItemLeft)}>
              <div className={styles.showcaseItemImage}>
                <img src="img/robot-arm.png" alt="Robot Arm" />
              </div>
              <h3><RainbowText speed="fast">Advanced Control Systems</RainbowText></h3>
              <p>Implement sophisticated control algorithms for precise robotic movements.</p>
            </div>
          </div>
          <div className="col col--4">
            <div className={clsx(styles.showcaseItem, styles.showcaseItemCenter)}>
              <div className={styles.showcaseItemImage}>
                <img src="/* The `img` tags in the code snippet are used to display images on the
                webpage. Each `img` tag specifies the source of the image using the `src`
                attribute and provides alternative text for the image using the `alt`
                attribute. This allows the browser to render the image and provide a text
                description in case the image fails to load or for accessibility purposes. */
                img/neural-network.png" alt="Neural Network" />
              </div>
              <h3><RainbowText speed="fast">Deep Learning Integration</RainbowText></h3>
              <p>Leverage neural networks for perception and decision-making in robotics.</p>
            </div>
          </div>
          <div className="col col--4">
            <div className={clsx(styles.showcaseItem, styles.showcaseItemRight)}>
              <div className={styles.showcaseItemImage}>
                <img src="img/humanoid.png" alt="Humanoid Robot" />
              </div>
              <h3><RainbowText speed="fast">Humanoid Design Principles</RainbowText></h3>
              <p>Understand biomechanics and anthropomorphic design for human-like robots.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="An in-depth guide to building intelligent physical systems and humanoid robots">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <Showcase />
      </main>
    </Layout>
  );
}
