import { Metadata } from 'next';
import {HeroBanner} from "@/app/components/HeroBanner/HeroBanner";
import {KeyPoints} from "@/app/components/CaseStudies/KeyPoints";
import React from "react";
import {Card} from "@/app/components/Cards/Card";
import {Cards} from "@/app/components/Cards/Cards";


export const metadata: Metadata = {
    title: 'Symphony3 Website Redesign Case Study | Ashlie Webb',
    description: 'Enhancing user experience, storytelling, and community engagement through thoughtful design and development.',
};

export default function S3WebsiteRedesignCaseStudy() {
    return (
        <>
            <HeroBanner
                title="Symphony3: Shaping a Website That Supports Service and Strategy"
                breadcrumb="<ul class='breadcrumbs'>
                    <li><a href='/'><span class='material-symbols-outlined'>
cottage</span></a></li>
                    <li><a href='/portfolio'>Portfolio</a></li>
                    <li>Case Study</li>
                    </ul>"
                description="<p>Enhancing user experience, storytelling, and community engagement through thoughtful design and development.</p>"
                imageUrl="/case-studies/mockup-laptop-mobile-symphony3-redesign.png"
                imageAlt="Symphony3"
                imageWidth={200}
                imageHeight={33}
            >
            </HeroBanner>
            <KeyPoints
                project="Symphony3 Website Redesign"
                role="UX/UI Designer and Frontend Developer"
                timeline="2022, 1–2 months"
                tools="Adobe XD, Drupal, StoryBrand framework, HTML, CSS, Twig"
                users="Corporate clients, local government, non-profit sector"
                responsibilities="UX strategy, UI design, wireframing, prototyping, frontend development (Drupal theme building)"
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
                    title="StoryBrand messaging strategy"
                    description="Applied the StoryBrand framework to shape clear, engaging homepage messaging and content flow."
                    icon="book_4"
                ></Card>
                <Card
                    title="UX/UI page design"
                    description="Designed and prototyped key page types for the website, including homepage, case studies, services, and articles."
                    icon="mobile_layout"
                ></Card>
                <Card
                    title="Frontend development in Drupal"
                    description="Took ownership of frontend development, building the site theme and components directly into Drupal using HTML, CSS, and Twig."
                    icon="code"
                ></Card>
                <Card
                    title="Content flexibility for marketing"
                    description="Improved content flexibility for the marketing team, enabling easier publishing and stronger community engagement."
                    icon="format_image_left"
                ></Card>
                <Card
                    title="Design aligned with business goals"
                    description="Supported business goals of storytelling, education, and lead generation through intentional UX and UI decisions."
                    icon="strategy"
                ></Card>
            </Cards>
            <section className="section case-study-summary">
                <h2 className="heading heading2">Project Summary</h2>
                <p>
                    Symphony3 is a digital agency specialising in building technology solutions for corporate and local government clients. The business had outgrown its previous website—built on an outdated Drupal platform—which no longer aligned with the evolving brand or with the modern white-label platform being delivered to their own clients.
                </p>
                <p>
                    I was brought in to lead the redesign and redevelopment of the Symphony3 website, combining UX and UI design with frontend development. A key focus was to improve the overall user experience and align the content strategy with business goals, while also refreshing the design to better reflect the agency’s current offering.
                </p>
                <p>
                    The new site needed to tell the company’s story more clearly, provide flexibility for internal content creators, and encourage stronger community engagement through articles, webinars, and case studies.
                </p>
            </section>

            {/*<Image*/}
            {/*    image="/case-studies/symphony3/symphony3-redesign-website-mockup.jpg"*/}
            {/*    imageSquare="/case-studies/symphony3/symphony3-redesign-website-mockup-square.jpg"*/}
            {/*    imageAlt=""*/}
            {/*    caption="Caption here"*/}
            {/*>*/}
            {/*</Image>*/}

            <section className="section case-study-problem">
                <h2 className="heading heading2">The challenge</h2>
                <p>
                    The previous site had several barriers to both user engagement and internal content management:
                </p>
                <ul>
                    <li>Built on an outdated Drupal setup, with limited flexibility for non-technical content updates</li>
                    <li>Lacked clear storytelling flow for products, services, and case studies</li>
                    <li>Didn’t reflect the newer white-label design system implemented for Symphony3’s client projects</li>
                    <li>Missed opportunities to build audience trust and engagement through consistent articles, learning content, and webinars</li>
                </ul>

                <p>
                    The business needed a site that could:
                </p>
                <ul>
                    <li>Tell their story clearly, using the StoryBrand approach</li>
                    <li>Support easier content creation by the marketing team</li>
                    <li>Deliver a modern, accessible user experience with clean, engaging design components</li>
                </ul>

            </section>

            <section className="section case-study-design">
                <h2 className="heading heading2">Approach & Process</h2>
                <p>
                    Working closely with one of the directors, I took ownership of both the UX design and the frontend build, ensuring that the design intent carried through to the final site.
                </p>
                <p>Key steps included:</p>
                <ul>
                    <li>Using the StoryBrand framework to map the homepage content flow, focusing on audience needs, product clarity, and value propositions</li>
                    <li>Reviewing competitor websites and industry leaders for inspiration and benchmarking</li>
                    <li>Designing the sitemap and content structure to support user journeys and business goals</li>
                    <li>Building a full prototype in Adobe XD, covering key page types including homepage, case studies, services, webinars, blog, and contact pages</li>
                    <li>Taking lead on frontend development using Drupal, integrating the design directly into the theme with HTML, CSS, and Twig templating</li>
                    <li>Ensuring the site was responsive, accessible, and easy to update, supporting the long-term content strategy for community-building</li>
                </ul>
                <p>
                    By combining design and development within the same role, I was able to maintain design integrity throughout the build and respond quickly to feedback or changes.
                </p>

            </section>

            <section className="section case-study-design">
                <h2 className="heading heading2">Outlook & Impact</h2>
                <p>
                    The redesigned website provided a much-needed refresh for Symphony3’s online presence—bringing both the design and content strategy up to date with the agency’s service offering and long-term goals.
                </p>
                <p>Key outcomes included:</p>
                <ul>
                    <li>Directors and team expressed strong positive feedback on the clarity of the design, user experience, and storytelling approach</li>
                    <li>The marketing team gained the ability to easily create and manage content through the updated Drupal platform, supporting their focus on community-building</li>
                    <li>The StoryBrand-led homepage provided a clear, audience-centred introduction to Symphony3’s services and approach</li>
                    <li>The site reflected Symphony3’s credibility and capability, positioning them confidently with their target market</li>
                </ul>

            </section>

            <section className="section case-study-design">
                <h2 className="heading heading2">Reflections</h2>
                <p>
                    This project gave me the opportunity to combine UX strategy with visual design and hands-on frontend development, building a site that not only looked good but worked well for both users and the internal team.
                </p>
                <p>
                    Owning both the design and development allowed me to ensure that design intent translated cleanly into the final build, without compromise. It also deepened my understanding of how content management systems like Drupal can empower non-technical teams to create, manage, and maintain content with ease.
                </p>
                <p>
                    The project reinforced how important it is to balance clarity and simplicity—not just in layouts, but in the way products, services, and stories are communicated. Designing for both usability and storytelling helped the brand reposition itself as knowledgeable, engaged, and approachable.
                </p>

            </section>
        </>
    );
}
