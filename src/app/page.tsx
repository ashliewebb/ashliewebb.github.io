import {HeroBanner} from "@/app/components/HeroBanner/HeroBanner";
import {Cards} from "@/app/components/Cards/Cards";
import {Card} from "@/app/components/Cards/Card";
import React from "react";

export default function Home() {
  return (
      <>
          <HeroBanner
              introtext="Product Designer • UX & UI • Design Systems"
              title="Human-first digital products designed with intention"
              description="<p>From research and wireframes to polished interfaces, Ashlie Webb brings a calm, methodical approach to digital product design. Her background spans UX, UI, and front-end development—shaping user experiences that are clear, human, and ready to scale.</p><p>With 15+ years in e-commerce, digital platforms, and independent business, she designs with both empathy and practicality. The focus is always the same: useful products that feel good to use—and simple for teams to maintain.</p>"
              ctaLink="/portfolio"
              ctaLabel="View selected work"
              ctaLink2="/templates"
              ctaLabel2="Explore Templates & Tools"
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
              ctaLink="/focus"
              ctaLabel="View full portfolio"
              ctaStyle="cardCTAButton"
          >
              <Card
                  title="UX Strategy & Research"
                  description="Understand users and define product direction through research, journey mapping, and insights."
              ></Card>
              <Card
                  title="Design Thinking"
                  description="Solves problems through empathy, iteration, and practical, user-first ideas."
              ></Card>
              <Card
                  title="Interface & Visual Design"
                  description="Craft clean, accessible interfaces that support clarity and consistency."
              ></Card>
          </Cards>
          <Cards
              heading="Templates & Tools for entrepreneurs"
              copy="Digital templates and UI kits designed to save time, reduce friction, and keep the focus on what matters."
              grid={2}
              headerCenter={true}
              cardStyle="squareCard"
              bgAlt={true}
              ctaLink="/templates"
              ctaLabel="View templates"
              ctaStyle="cardCTAButton"
          >
              <Card
                  title="UX Strategy & Research"
                  description="Understand users and define product direction through research, journey mapping, and insights."
              ></Card>
              <Card
                  title="Design Thinking"
                  description="Solves problems through empathy, iteration, and practical, user-first ideas."
              ></Card>
          </Cards>
      </>
  )
}
