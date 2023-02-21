import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
//import HomepageFeatures from '@site/src/components/HomepageFeatures';import clsx from "clsx";
import { Typography, Grid, Button } from "@material-ui/core";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
// import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTrail, animated, useSpring } from "@react-spring/web";
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import clsx from "clsx";
import styles from "./index.module.css";

/* function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
} */
/* 
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
 */

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const animatedHero = useSpring({
    opacity: 1,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateX(8em)" },
    config: { mass: 2, tension: 260, friction: 30 },
    delay: 600,
  });
  const animatedTexts = useTrail(5, {
    from: { opacity: 0, transform: "translateY(3em)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: {
      mass: 3,
      friction: 45,
      tension: 460,
    },
    delay: 200,
  });

  return (
    <Layout
      //title={` ${siteConfig.title}`}
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <Grid container spacing={2} style={{ padding: "5%" }} className="hero">
        {/*Personal Intro */}
        <Grid item xs={12} lg={6} className="homeIntro">
          <animated.div style={animatedTexts[0]}>
            <Typography variant="h1" gutterBottom>
              <Translate>Hello! I am</Translate>
              <span className="intro__name"> {siteConfig.title}</span>
              {/* <Typography variant="body2">
                <span>{siteConfig.tagline}</span>
              </Typography> */}
            </Typography>
          </animated.div>
          <animated.div style={animatedTexts[1]}>
            <Typography variant="body1">
              <Translate>
                A father of two, cloud engineer, and technology tinkerer. I've been lucky enough to be given 6 months of paternity leave by my employer in 2023. During the baby's nap time, I thought it might be
                cool to set myself another challenge to start a homelab that I can use to sharpen up some engineering skills. I've built this site to document my journey and share a thing or two while I expand my learning in all things technology. 
                Head on over to my blog or docs to see what I've been up to.
              </Translate>{" "} 
            </Typography>
          </animated.div>
          &nbsp;
{/*           <animated.p style={animatedTexts[3]}>
            <Button
              style={{ textTransform: "none" }}
              color="primary"
              variant="outlined"
              size="small"
              href={resume}
            >
              <Translate>My Resume</Translate>
            </Button>
          </animated.p> */}
          <SocialLinks animatedProps={animatedTexts[4]} />
        </Grid>
        <Grid item xs={12} lg={6} className="homeImg">
          {/* <img src={useBaseUrl(image)} className="image" /> */}
          <animated.img
            src={useBaseUrl("img/programming.svg")}
            style={animatedHero}
          />
        </Grid>
      </Grid>
    </Layout>
  );
}

function SocialLinks({ animatedProps, ...props }) {
  return (
    <animated.div className="social__links" style={animatedProps}>
      <Grid container spacing={2}>
{/*         <Grid item>
          <Typography display={"inline"} gutterBottom>
            Social Media:
          </Typography>
        </Grid> */}
        <Grid item>
          <a href="https://www.linkedin.com/in/kasjayatissa/">
            <FontAwesomeIcon icon={faLinkedin} size='2x' alignmentBaseline='center'/>
          </a>
        </Grid>
        <Grid item>
          <a href="https://github.com/kasjayatissa/home-lab">
            <FontAwesomeIcon icon={faGithub} size='2x'/>
          </a>
        </Grid>
      </Grid>
      
    </animated.div>
  );
}

export default Home;