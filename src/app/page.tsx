import {HeroBanner} from "@/app/components/HeroBanner/HeroBanner";
import {Cards} from "@/app/components/Cards/Cards";
import {Card} from "@/app/components/Cards/Card";
import React from "react";

export default function Home() {
  return (
      <>
          <HeroBanner
              introtext="Product Design • UX Strategy • Content & Engagement"
              title="Design that connects — thoughtful digital experiences built for people and performance"
              description="<p>Ashlie Webb combines user-centred design with marketing strategy to craft clear, engaging experiences that build trust and drive results. Her process bridges insight, design, and storytelling — ensuring every interaction supports both the user’s needs and the brand’s goals.</p><p>With over 15 years in digital platforms and e-commerce, she brings a grounded, empathetic approach to design. The outcome is always the same: purposeful products that feel good to use and help brands grow with integrity.</p>"
              imageUrl="/illustration-website-design.svg"
              imageAlt="What is a designer illustration"
              imageWidth={400}
              imageHeight={400}
              ctaLink="/portfolio"
              ctaLabel="View selected work"
              // ctaLink2="/templates"
              // ctaLabel2="Explore Templates & Tools"
          ></HeroBanner>
          <Cards
              heading="Focus areas"
              grid={3}
              cardStyle="roundedCard"
              bgAlt={false}
              ctaLink="/skills"
              ctaLabel="View the full skills set"
              ctaStyle="cardCTAText"
          >
              <Card
                  title="UX Strategy & Research"
                  description="Understanding users and defining product direction through research, journey mapping, and insights."
                  icon="content_paste_search"
              ></Card>
              <Card
                  title="Design Thinking"
                  description="Solving problems through empathy, iteration, and practical, user-first ideas."
                  icon="cognition_2"
              ></Card>
              <Card
                  title="Interface & Visual Design"
                  description="Crafting clean, accessible interfaces that support clarity and consistency."
                  icon="gallery_thumbnail"
              ></Card>
          </Cards>
          <Cards
              heading="Recent work"
              grid={2}
              cardStyle="squareCard"
              bgAlt={false}
              ctaLink="/portfolio"
              ctaLabel="View full portfolio"
              ctaStyle="cardCTAButton"
          >
              <Card
                  title="Cow & Coconut: Building a Brand with Purpose"
                  subtitle="Brand Identity • UX & UI Design • Marketing"
                  link="/case-studies/cow-and-coconut"
                  linkTitle="View Cow & Coconut case study"
                  image="/case-studies/cow-and-coconut/candc-mobile-website-mockup.jpg"
                  imageSquare="/case-studies/cow-and-coconut/candc-mobile-website-mockup-square.jpg"
                  imageAlt="Cow & Coconut mobile website"
                  imageWidth={800}
                  imageHeight={450}
              ></Card>
              <Card
                  title="Birdsnest: UX-Led Site Redesign & Optimisation"
                  subtitle="UX Research & Strategy • UI Design • Wireframing & Prototyping"
                  link="/case-studies/birdsnest-site-redesign"
                  linkTitle="View birdsnest case study"
                  image="/case-studies/birdsnest/birdsnest-redesign-website-mockup.jpg"
                  imageSquare="/case-studies/birdsnest/birdsnest-redesign-website-mockup-square.jpg"
                  imageAlt="Birdsnest website redesign"
                  imageWidth={800}
                  imageHeight={450}
              ></Card>
          </Cards>
          {/*<Cards*/}
          {/*    heading="Templates & Tools for entrepreneurs"*/}
          {/*    copy="Digital templates and UI kits designed to save time, reduce friction, and keep the focus on what matters."*/}
          {/*    grid={2}*/}
          {/*    headerCenter={true}*/}
          {/*    cardStyle="squareCard"*/}
          {/*    bgAlt={true}*/}
          {/*    ctaLink="/templates"*/}
          {/*    ctaLabel="View templates"*/}
          {/*    ctaStyle="cardCTAButton"*/}
          {/*>*/}
          {/*    <Card*/}
          {/*        title="UX Strategy & Research"*/}
          {/*        description="Understand users and define product direction through research, journey mapping, and insights."*/}
          {/*    ></Card>*/}
          {/*    <Card*/}
          {/*        title="Design Thinking"*/}
          {/*        description="Solves problems through empathy, iteration, and practical, user-first ideas."*/}
          {/*    ></Card>*/}
          {/*</Cards>*/}
      </>
  )
}
