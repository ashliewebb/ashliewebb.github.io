import {HeroBanner} from "@/app/components/HeroBanner/HeroBanner";
import {Cards} from "@/app/components/Cards/Cards";
import {Card} from "@/app/components/Cards/Card";
import {Pullquote} from "@/app/components/Pullquote/Pullquote";
import {Text} from "@/app/components/Text/Text";
import stylesGlobal from "@/app/page.module.scss";
import React from "react";

export default function Home() {
  return (
      <>
          <HeroBanner
              title="Bridging the gap between design & code"
              description="A great product isn’t just about how it looks—it’s about how it works, and Ashlie brings both perspectives to the table"
              ctaLink="/contact"
              ctaLabel="Hire Me"
              bg_image={true}
          ></HeroBanner>
          <Cards heading="Does this sound familar?" grid={2}>
            <Card
                title="Disconnected Design & Development"
                description="Designs look great in Figma or XD but don’t translate well into code."
            ></Card>
            <Card
                title="Inconsistent User Experience"
                description="When development and UX aren’t aligned, users get a clunky or frustrating experience."
            ></Card>
          </Cards>
          <Pullquote
              content="Hiring someone with design and coding experience means smoother collaboration and stronger execution—whether the role is frontend or UX/UI."
          ></Pullquote>
          <div>
              <ul className={`${stylesGlobal.ribbons} ${stylesGlobal.decoBorderBottom}`}>
                  <li>Does your frontend reflect the quality of your product?</li>
                  <li>Are your design and development teams truly aligned?</li>
                  <li>A smooth user experience isn’t a luxury—it’s an expectation.</li>
              </ul>
          </div>
          <Text
              border_bottom={true}
              copy="<h2>Introducing Ashlie</h2>
              <p>With a background in both frontend development and UX/UI design, Ashlie brings a well-rounded perspective to every project. She understands how design decisions impact code, and how development choices influence the user experience. This ability to bridge the gap between design and implementation results in polished, intuitive interfaces that don’t just look good—they work seamlessly.</p>
              <p>Throughout her career, Ashlie has worked on projects where this cross-disciplinary experience has added real value. By understanding both sides of the process, she helps teams collaborate more efficiently, reduce miscommunication, and deliver stronger, more cohesive products. Her approach goes beyond simply executing requirements—she thinks about how each element fits into the bigger picture and how it will be experienced by real users.</p>
              <p>Whether in a frontend development role or focused on UX/UI design, Ashlie brings the same thoughtful, user-centered mindset. Her ability to anticipate challenges across both design and development helps streamline workflows and reduce friction between teams.</p>
              <p>Ashlie thrives in environments that value clarity, attention to detail, and collaboration. With a deep appreciation for both the creative and technical aspects of product development, she offers a rare blend of skills that elevate digital experiences from concept to execution.</p>
              ">
          </Text>

      </>
  )
}
