import { Metadata } from 'next';
import {HeroBanner} from "@/app/components/HeroBanner/HeroBanner";
import {KeyPoints} from "@/app/components/CaseStudies/KeyPoints"
import React from "react";
import {Card} from "@/app/components/Cards/Card";
import {Cards} from "@/app/components/Cards/Cards";
import {Image} from "@/app/components/Image/Image";


export const metadata: Metadata = {
    title: 'Symphony3 White Label Drupal Platform Case Study | Ashlie Webb',
    description: 'Building a flexible, scalable component system to support client success across industries.',
};

export default function S3WhiteLabelCaseStudy() {
    return (
        <>
            <HeroBanner
                title="Symphony3: Enabling Faster Builds Through a White Label Design System"
                breadcrumb="<ul class='breadcrumbs'>
                    <li><a href='/'><span class='material-symbols-outlined'>
cottage</span></a></li>
                    <li><a href='/portfolio'>Portfolio</a></li>
                    <li>Case Study</li>
                    </ul>"
                description="<p>Building a flexible, scalable component system to support client success across industries.</p>"
                imageUrl="/case-studies/mockup-laptop-symphony3-whitelabel-redesign.png"
                imageAlt="Symphony3"
                imageWidth={200}
                imageHeight={33}
            >
            </HeroBanner>
            <KeyPoints
                project="Symphony3 White Label Drupal Platform"
                role="UX Designer and Frontend Developer"
                timeline="Ongoing (2020–22)"
                tools="Drupal, HTML, CSS, Twig"
                users="Corporate clients, local government, non-profit sector"
                responsibilities="UX strategy, design system, Drupal theme development, frontend build, UX consultation during client implementations"
            >
            </KeyPoints>
            <Cards
                heading="Project highlights"
                grid={3}
                cardStyle="roundedCard"
                bgAlt={false}
                headerCenter={true}
                ctaLink="https://www.symphony3.com"
                ctaLabel="View Symphony3 website"
                ctaStyle="cardCTAButton"
                ctaTarget="_blank"
            >
                <Card
                    title="Scalable component system"
                    description="Contributed to the creation of a scalable component system and flexible page layouts for multiple client websites."
                    icon="toys_and_games"
                ></Card>
                <Card
                    title="Frontend theme development"
                    description="Led frontend theme development in Drupal, building reusable Twig templates and CSS architecture."
                    icon="code"
                ></Card>
                <Card
                    title="Balanced UX and CMS usability"
                    description="Focused on both customer-facing UX and admin usability, ensuring content teams could easily manage and build pages."
                    icon="interactive_space"
                ></Card>
                <Card
                    title="UX support during rollouts"
                    description="Provided UX guidance and advice during client rollouts, shaping navigation and component use based on best practice."
                    icon="support_agent"
                ></Card>
                <Card
                    title="Collaboration on UI delivery"
                    description="Collaborated with UI designers to ensure design intent translated effectively into the final build."
                    icon="person_edit"
                ></Card>
            </Cards>
            <section className="section case-study-summary">
                <h2 className="heading heading2">Project Summary</h2>
                <p>
                    Symphony3 is a digital agency specialising in solutions for local government, corporate, and non-profit sectors. To support their growing client base, they developed a white-label Drupal platform—designed to streamline site delivery and maintain quality across a variety of implementations.
                </p>
                <p>
                    I contributed to the platform’s development over a two-year period, working across UX design, frontend development, and system architecture. My role focused on bringing the component library and layout system to life in Drupal, ensuring flexibility, usability, and consistency across client sites.
                </p>
                <p>
                    The goal was to provide a foundation that could scale across projects—supporting varied content structures while maintaining a cohesive experience for both end users and admin teams.
                </p>
            </section>

            <Image
                image="/case-studies/symphony3-white-label-website-mockup.jpg"
                imageSquare="/case-studies/symphony3-white-label-website-mockup-mobile.jpg"
                imageAlt=""
                caption="Caption here"
            >
            </Image>

            <section className="section case-study-problem">
                <h2 className="heading heading2">The challenge</h2>
                <p>
                    The platform needed to solve key challenges around consistency, flexibility, and efficiency:
                </p>
                <ul>
                    <li>Speed up site delivery while maintaining quality and design integrity</li>
                    <li>Support flexible content creation across a variety of client types and industries</li>
                    <li>Provide a component system that could handle multiple layout needs without requiring custom development each time</li>
                    <li>Ensure the system was usable for both customer-facing audiences and internal content teams managing their own site updates</li>
                </ul>
                <p>
                    This required a focus on reusability and adaptability, with components that could serve many purposes while staying consistent.
                </p>
            </section>

            <section className="section case-study-design">
                <h2 className="heading heading2">Approach & Process</h2>
                <p>
                    My work on the platform spanned both UX strategy and frontend development, collaborating closely with UI designers and product leads.
                </p>
                <p>Key steps included:</p>
                <ul>
                    <li>Supporting the planning and architecture of the component system, defining how components would function and interact</li>
                    <li>Leading frontend theme development using Drupal, building reusable Twig templates and scalable CSS structure</li>
                    <li>Ensuring component flexibility, with variations to support different content types and layouts</li>
                    <li>Working closely with UI designers to ensure that designs translated cleanly into the build, preserving intent and usability</li>
                    <li>Advising on UX best practices during client rollouts, offering guidance on navigation, information flow, and component use based on user needs and content goals</li>
                    <li>Considering admin experience throughout the build, making sure content editing and page building were intuitive for non-technical users</li>
                </ul>
            </section>

            <section className="section case-study-design">
                <h2 className="heading heading2">Outlook & Impact</h2>
                <p>
                    The platform successfully enabled faster and more consistent site delivery across Symphony3’s client base. It gave clients access to a robust component system that allowed them to create and update content independently—while staying within a cohesive design framework.
                </p>
                <p>Key outcomes included:</p>
                <ul>
                    <li>Improved content update capabilities for admin users, reducing dependency on developers</li>
                    <li>Stronger consistency across client sites, while supporting customisation where needed</li>
                    <li>Positive internal feedback on the flexibility and usability of the component system</li>
                    <li>A build process that respected design integrity while supporting real-world content needs</li>
                </ul>
                <p>
                    The platform was successfully applied across a range of client projects—each with their own specific requirements—demonstrating the flexibility and scalability of the system.
                </p>
            </section>

            <Cards
                heading="Selected Client Implementations"
                copy="As part of the White Label Drupal Platform project, I contributed to several client implementations—applying the flexible component system across a variety of industries and use cases. Each project leveraged the shared architecture while meeting its own unique content and engagement goals."
                grid={2}
                bgAlt={true}
                cardStyle="squareCard"
                ctaStyle="cardCTAText"
            >
                <Card
                    title="Golden Plains Shire Council"
                    descriptionHTML="<ul>
                    <li>Local government site focused on service accessibility for residents and community engagement</li>
                    <li>Applied the design system to deliver clear navigation and easy-to-update content sections for council services</li>
                    <li>Completed 2022</li>
                </ul>"
                    link="https://www.goldenplains.vic.gov.au"
                    linkTarget="_blank"
                    linkText="View Golden Plains Shire Council website"
                    linkTitle="View Golden Plains Shire Council website"
                    >
                </Card>
                <Card
                    title="Geofabrics"
                    descriptionHTML="<ul>
                    <li>Industrial product catalogue and resource hub for geosynthetic solutions</li>
                    <li>Supported flexible product detail layouts, downloadable resources, and structured information flow</li>
                    <li>Completed 2021</li>
                </ul>"
                    link="https://www.geofabrics.co"
                    linkTarget="_blank"
                    linkText="View Geofabrics website"
                    linkTitle="View Geofabrics website"
                >
                </Card>
                <Card
                    title="IMCRC Futuremap Portal"
                    descriptionHTML="<ul>
                    <li>Interactive portal offering self-assessment tools and digital readiness resources</li>
                    <li>Frontend development and theme implementation using the White Label system</li>
                    <li>Completed 2021</li>
                </ul>"
                    link="https://www.symphony3.com/insights/imcrc"
                    linkTarget="_blank"
                    linkText="View IMCRC Case Study"
                    linkTitle="View IMCRC Case Study"
                >
                </Card>
                <Card
                    title="Paintback"
                    descriptionHTML="<ul>
                    <li>Website for Paintback, an Australian not-for-profit dedicated to responsible paint recycling and waste management</li>
                    <li>Applied the component system to support structured storytelling, accessible service information, and program education</li>
                    <li>Completed 2020</li>
                </ul>"
                    link="https://www.paintback.com.au"
                    linkTarget="_blank"
                    linkText="View Paintback website"
                    linkTitle="View Paintback website"
                >
                </Card>
            </Cards>

            <section className="section case-study-design">
                <h2 className="heading heading2">Reflections</h2>
                <p>
                    This project was an opportunity to think beyond single-site builds and apply system thinking—considering how patterns, components, and layouts could scale across many use cases.
                </p>
                <p>
                    A key focus was on building component variations that worked across different client types—from government services to corporate information sites—while maintaining clarity and ease of use. I paid close attention to both end-user experience and the admin workflow, designing the system so that non-technical content teams could confidently manage their own pages.
                </p>
                <p>
                    Collaborating closely with UI designers also gave me the chance to ensure that design decisions were carried through thoughtfully into the final build, with flexibility where it mattered most.
                </p>
                <p>
                    The project reinforced the importance of designing not just for launch day, but for long-term adaptability and ease of maintenance—building a system that could evolve alongside client needs.
                </p>

            </section>
        </>
    );
}
