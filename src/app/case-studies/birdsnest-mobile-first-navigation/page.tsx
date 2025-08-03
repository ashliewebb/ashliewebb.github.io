import { Metadata } from 'next';
import {HeroBanner} from "@/app/components/HeroBanner/HeroBanner";
import {KeyPoints} from "@/app/components/CaseStudies/KeyPoints"
import React from "react";
import {Card} from "@/app/components/Cards/Card";
import {Cards} from "@/app/components/Cards/Cards";


export const metadata: Metadata = {
    title: 'Birdsnest Mobile-First Navigation Redesign Case Study | Ashlie Webb',
    description: 'Redesigning the mobile shopping experience for a fashion-forward, customer-first brand.',
};

export default function BirdsnestMobileFirstNavCaseStudy() {
    return (
        <>
            <HeroBanner
                title="Birdsnest: Crafting a Seamless Navigation Experience"
                breadcrumb="<ul class='breadcrumbs'>
                    <li><a href='/'><span class='material-symbols-outlined'>
cottage</span></a></li>
                    <li><a href='/portfolio'>Portfolio</a></li>
                    <li>Case Study</li>
                    </ul>"
                description="<p>Redesigning the mobile shopping experience for a fashion-forward, customer-first brand.</p>"
                imageUrl="/case-studies/birdsnest/birdsnest-navigation-laptop-mobile-mockup.png"
                imageAlt="Birdsnest"
                imageWidth={800}
                imageHeight={450}
            >
            </HeroBanner>
            <KeyPoints
                project="Birdsnest Mobile-First Navigation Redesign"
                role="UX/UI Designer"
                timeline="2021"
                tools="UXPin, Adobe XD, Hotjar, Google Analytics"
                users="Mobile shoppers, fashion-focused customers, returning Birdsnest customers"
                responsibilities="Mobile UX audit, navigation redesign, prototyping, internal testing, stakeholder collaboration"
            >
            </KeyPoints>
            <Cards
                heading="Project highlights"
                copy="A focused redesign of Birdsnest’s mobile navigation, anchored in real user feedback and executed with care."
                grid={3}
                cardStyle="roundedCard"
                bgAlt={false}
                headerCenter={true}
                ctaLink="https://www.birdsnest.com.au"
                ctaLabel="View Birdsnest website"
                ctaStyle="cardCTAButton"
                ctaTarget="_blank"
            >
                <Card
                    title="Mobile-first navigation upgrade"
                    description="Reimagined site navigation with a mobile-first approach, improving clarity, accessibility, and feature visibility across all screen sizes."
                    icon="mobile_hand"
                ></Card>
                <Card
                    title="User-informed design"
                    description="Led a customer-wide survey and behaviour analysis to uncover frustrations and inform design priorities."
                    icon="ballot"
                ></Card>
                <Card
                    title="Smarter site structure"
                    description="Rebuilt both mobile and desktop menus with a clearer hierarchy and intuitive content grouping to support product discovery."
                    icon="signpost"
                ></Card>
                <Card
                    title="Conversion boost"
                    description="Delivered a 21% lift in mobile conversion after launch, validating the impact of improved usability and navigation flow."
                    icon="shopping_bag_speed"
                ></Card>
                <Card
                    title="Wishlist reinstated"
                    description="Brought the Wishlist feature into view on mobile and tablet, resulting in renewed engagement and customer delight."
                    icon="person_heart"
                ></Card>
                <Card
                    title="Team-aligned outcomes"
                    description="Collaborated closely with internal teams to validate the new structure and ensure alignment with brand and operational needs."
                    icon="sms"
                ></Card>
            </Cards>
            <section className="section case-study-summary">
                <h2 className="heading heading2">Project Summary</h2>
                <p>Birdsnest is known for its loyal customer base and personalised approach to online shopping. As mobile traffic grew, it became clear the site’s mobile navigation was falling short—both visually and functionally. I was brought in to reimagine how customers explored the site on smaller screens, with a focus on clarity, conversion, and brand alignment.</p>
                <p>The goal was simple: help people find what they’re looking for quickly and intuitively, while creating a mobile experience that felt as polished and supportive as the desktop version. By uncovering user frustrations and responding with practical, thoughtful design, the project delivered real business and customer impact.</p>
            </section>

            <section className="section case-study-problem">
                <h2 className="heading heading2">The challenge</h2>
                <p>Despite a strong brand and loyal following, Birdsnest’s mobile site was underperforming. The main issues included:</p>
                <ul>
                    <li>Cluttered layout and confusing navigation hierarchy</li>
                    <li>Inaccessible or missing features—like the Wishlist—on mobile</li>
                    <li>Slow load times, causing user frustration and dropped sessions</li>
                </ul>
                <p>We conducted a large-scale customer survey and paired that with analytics and heatmaps. The verdict was clear: mobile shoppers were struggling, and it was costing conversions. Internally, the team knew this was a missed opportunity—especially as mobile traffic had overtaken desktop.</p>
                <p>The challenge was not only to fix these usability issues, but to do so in a way that felt consistent with the brand’s tone: clear, personal, and customer-first.</p>
            </section>

            <section className="section case-study-research">
                <h2 className="heading heading2">Research & Insights</h2>
                <p>We gathered insights through a full customer survey, heatmaps, and analytics. Common issues included poor page performance, unclear navigation, and an inability to find key features.</p>
                <p>We analysed user behaviour to identify top-visited pages and most-used categories, and conducted internal interviews to gather feedback from staff and customer-facing teams. This gave us a clearer picture of friction points and where we were falling short in supporting customer goals on mobile devices.</p>
            </section>

            <section className="section case-study-design">
                <h2 className="heading heading2">Approach & Process</h2>
                <p>
                    To design an experience that worked, I started by mapping the existing navigation structure and identifying friction points.
                </p>
                <p>Key steps included:</p>
                <ul>
                    <li>Reviewing heatmaps and customer survey data to prioritise fixes</li>
                    <li>Auditing the existing menu and filter structure for accessibility and logic</li>
                    <li>Designing a simplified, mobile-first navigation hierarchy that surfaced top categories and pathways</li>
                    <li>Reintroducing key features (like the Wishlist) with persistent visibility across devices</li>
                    <li>Creating interactive prototypes and testing with internal teams for validation</li>
                    <li>Collaborating with developers to ensure design fidelity and performance on mobile</li>
                </ul>
                <p>
                    Tools used: UXPin (initial wireframes), Adobe XD (prototyping), Google Analytics & Hotjar (insights).
                </p>
            </section>

            <section className="section case-study-design">
                <h2 className="heading heading2">Outlook & Impact</h2>
                <p>
                    The redesign led to measurable improvements:
                </p>
                <ul>
                    <li>21% increase in mobile conversion rate</li>
                    <li>Clearer navigation pathways reduced user frustration and drop-offs</li>
                    <li>Fewer support tickets and customer complaints about usability</li>
                    <li>Users discovered previously hidden features like the Wishlist, which boosted engagement and satisfaction</li>
                </ul>
                <p>
                    One customer even wrote in to say she “finally found the Wishlist” on her phone—something that had previously gone unnoticed. For the business, this redesign unlocked a major growth lever: helping customers do what they came to do, faster and more easily.
                </p>
            </section>

            <section className="section case-study-design">
                <h2 className="heading heading2">Reflections</h2>
                <p>This project reminded me how powerful it is to listen closely—to customers, to data, and to the everyday moments that make or break an experience. The Wishlist feature wasn’t new, it just wasn’t findable. Sometimes, great UX is less about invention and more about visibility.</p>
                <p>It also reinforced that mobile-first isn’t just about responsive layouts—it’s about actual usability. Every tap, every scroll, every moment matters. Since then, I’ve carried this mindset into every mobile project: simplify, humanise, and support the path forward.</p>
            </section>
        </>
    );
}
