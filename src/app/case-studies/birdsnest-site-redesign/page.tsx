import React from "react";
import { Metadata } from 'next';

import {HeroBanner} from "@/app/components/HeroBanner/HeroBanner";
import {KeyPoints} from "@/app/components/CaseStudies/KeyPoints"
import {Cards} from "@/app/components/Cards/Cards";
import {Card} from "@/app/components/Cards/Card";

export const metadata: Metadata = {
    title: 'Birdsnest UX-led Site Redesign Case Study | Ashlie Webb',
    description: 'Driving measurable results through UX-led improvements across key shopping journeys.',
};

export default function BirdsnestCaseStudy() {

    return (
        <main className="case-study">
            <HeroBanner
                title="Birdsnest: UX-Led Site Redesign & Optimisation"
                breadcrumb="<ul class='breadcrumbs'>
                    <li><a href='/'><span class='material-symbols-outlined'>
cottage</span></a></li>
                    <li><a href='/portfolio'>Portfolio</a></li>
                    <li>Case Study</li>
                    </ul>"
                description="<p>Driving measurable results through UX-led improvements across key shopping journeys.</p>"
                imageUrl="/case-studies/birdsnest-logo.png"
                imageAlt="Birdsnest"
                imageWidth={200}
                imageHeight={37}
            >
            </HeroBanner>
            <KeyPoints
                project="Birdsnest UX-led Site Redesign & Optimisation"
                role="UX Designer"
                timeline="2020 – 2022"
                tools="Adobe XD, Hotjar, Google Analytics, New Relic"
                users="Fashion-forward online shoppers, mobile-first users, Birdsnest customer support teams"
                responsibilities="UX research & strategy, UI design, wireframing, prototyping, stakeholder facilitation, accessibility design, developer collaboration"
            >
            </KeyPoints>
            <Cards
                heading="Project highlights"
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
                    title="UX-led site evolution"
                    description="Phased redesign approach driven by research, not a one-time overhaul."
                    icon="content_paste_search"
                ></Card>
                <Card
                    title="Insights-driven decisions"
                    description="Combined analytics, surveys, and support feedback to guide design priorities."
                    icon="ballot"
                ></Card>
                <Card
                    title="Mobile-first navigation"
                    description="Simplified menu and layout for easier mobile access and use."
                    icon="signpost"
                ></Card>
                <Card
                    title="Performance & Conversion gains"
                    description="Cut mobile load times by 2.5s and increased mobile conversions by 21%."
                    icon="speed"
                ></Card>
                <Card
                    title="Accessible, cohesive design"
                    description="Refreshed colours and components for better accessibility and consistency."
                    icon="accessible_forward"
                ></Card>
                <Card
                    title="Cross-team collaboration"
                    description="Partnered with devs, agency, and stakeholders for aligned, feasible delivery."
                    icon="handshake"
                ></Card>
            </Cards>
            <section className="section case-study-summary">
                <h2 className="heading heading2">Project Summary</h2>
                <p>I worked across several key projects at Birdsnest as a UX designer, contributing to a series of
                    improvements aimed at making the site faster, easier to navigate, and more accessible for customers.
                    Rather than a single redesign, this was an iterative, UX-led approach to optimising the entire
                    shopping experience—especially for mobile users.</p>
                <p>My role focused on research, user-centred design, and frontend collaboration, working closely
                    alongside internal developers and an external e-commerce agency, as well as product leads and
                    stakeholders. Together, we delivered significant performance gains and UX enhancements across core
                    areas like navigation, product selection, and checkout.</p>
            </section>

            <section className="section case-study-problem">
                <h2 className="heading heading2">Problem or Opportunity</h2>
                <p>The Birdsnest site had grown organically over time, with new features and updates added as needed—but
                    without a cohesive strategy for mobile users or performance optimisation. While the desktop
                    experience offered rich functionality, many of these features weren’t easily accessible on mobile
                    devices, where an increasing share of the customer base was shopping.</p>
                <p>Navigation was unclear, key features like wishlists were difficult to find, and page load
                    times—particularly on mobile—were slow enough to impact the shopping experience. Combined, these
                    issues created friction across the entire customer journey: discovery, selection, and checkout.</p>
                <p>The opportunity was to take a holistic, UX-led approach to improving the site’s performance,
                    usability, and accessibility—removing obstacles, clarifying pathways, and ensuring that mobile
                    customers could enjoy the full feature set without compromise.</p>
            </section>

            <section className="section case-study-research">
                <h2 className="heading heading2">Research & Insights</h2>
                <p>Our approach to research combined <strong>quantitative data</strong> from analytics and heatmaps
                    with <strong>qualitative insights</strong> gathered through user surveys and internal feedback.</p>
                <p>We used tools like <strong>Google Analytics</strong>, <strong>Hotjar heatmaps</strong>, and <strong>New
                    Relic performance monitoring</strong> to understand how customers were navigating the site, where
                    they were dropping off, and which areas of the mobile experience were causing frustration. A
                    customer survey also highlighted one of the top issues: many users felt the site was difficult to
                    use on a mobile device, citing poor wayfinding and slow loading as key barriers.</p>
                <p>Internally, we engaged with the customer service team and product owners to surface additional
                    insights—particularly around common support queries and features that customers struggled to find on
                    their own.</p>
                <p>Together, these findings helped us pinpoint the key areas for improvement:</p>
                <ul>
                    <li><strong>Improved performance and faster page load times</strong>, especially on mobile</li>
                    <li><strong>Faster access to popular features</strong> like Wishlists and order tracking</li>
                    <li><strong>Simplified, mobile-first navigation</strong></li>
                    <li><strong>Clearer pathways through product discovery and checkout</strong></li>
                </ul>
                <p>These insights shaped the design decisions that followed and ensured that improvements were grounded
                    in real user needs.</p>
            </section>

            <section className="section case-study-design">
                <h2 className="heading heading2">Design Process</h2>
                <p>This was not a single redesign project but a <strong>strategic, phased approach</strong> to improving
                    the Birdsnest site section by section—guided by UX research, business priorities, and customer
                    feedback.</p>
                <p>We began by identifying key areas of the site that needed improvement, including:</p>
                <ul>
                    <li><strong>Homepage and category pages</strong></li>
                    <li><strong>Product pages, outfits, and capsules</strong></li>
                    <li><strong>Wishlist and account management</strong></li>
                    <li><strong>Style Profile questionnaire and recommendations page</strong></li>
                    <li><strong>Returns process</strong></li>
                </ul>
                <p>Alongside these core areas, we also addressed <strong>site-wide elements</strong>:</p>
                <ul>
                    <li>Mobile-first <strong>navigation</strong>, header, and footer redesign</li>
                    <li>A refreshed <strong>colour palette</strong> and accessible component design system</li>
                    <li>Consistent UX patterns for interactions, messaging, and layout</li>
                </ul>
                <p>The strategy was to focus on <strong>one section at a time</strong>, allowing us to deliver improvements iteratively while ensuring cohesion across the site. Each redesign phase was informed by customer data, internal feedback, and usability best practices.</p>
                <p>As the UX designer, I led <strong>wireframing and prototyping using Adobe XD</strong>, facilitating design reviews and presenting interactive prototypes to internal stakeholders and business owners. I held regular stakeholder meetings throughout each phase to review progress, gather feedback, and secure sign-off from the business.</p>
                <p>Throughout the process, I collaborated closely with both internal developers and an external e-commerce agency to ensure technical feasibility, smooth handover, and a cohesive user experience across the site.</p>
                <p>Prototyping, usability feedback, and accessibility were baked into the process at each stage, ensuring that improvements were not only visually cohesive but also easy to use and performant across devices.</p>
            </section>

            <section className="section case-study-design">
                <h2 className="heading heading2">Outlook & Impact</h2>
                <p>
                    The phased, UX-led redesign delivered measurable improvements across key parts of the Birdsnest site, particularly for mobile users—where customer engagement and conversion were most impacted by the previous experience.
                </p>
                <p>Key outcomes included:</p>
                <ul>
                    <li>Improved mobile page load time by 2.5 seconds, significantly enhancing usability and reducing drop-off rates</li>
                    <li>Achieved a 21% uplift in mobile conversion rates, demonstrating clear commercial impact from UX improvements</li>
                    <li>Enabled full feature parity between mobile and desktop, giving mobile shoppers seamless access to key tools like Wishlists and order tracking</li>
                    <li>Simplified navigation and site structure, helping customers more easily discover products and explore the full range of offerings</li>
                    <li>Improved accessibility and visual consistency through a refreshed colour palette and shared design system, supporting a more inclusive user experience</li>
                    <li>Notable reduction in support queries related to product discovery and feature use, with positive feedback from both customers and internal teams</li>
                </ul>
                <p>
                    Beyond these tangible metrics, the redesign also helped establish a more structured, UX-led design practice within the business—introducing clearer processes for user-centred decision-making and collaboration between design, development, and stakeholders.
                </p>

            </section>

            <section className="section case-study-design">
                <h2 className="heading heading2">Reflections</h2>
                <p>
                    This project reinforced the power of iterative, user-centred design—and the importance of taking time to understand where the real friction points lie, rather than jumping straight into solutions.
                </p>
                <p>
                    One of the biggest lessons was that meaningful UX work doesn’t always come from a complete redesign. By breaking the work into focused, well-scoped phases, we were able to deliver consistent improvements that had a real and measurable impact, while avoiding disruption to the live site.
                </p>
                <p>
                    It also reminded me how valuable it is to maintain strong relationships between design, development, and the business. Regular check-ins, open communication, and collaborative problem-solving helped build trust across the teams and ensured that each piece of the project stayed aligned with both customer needs and business goals.
                </p>
                <p>
                    Finally, this work highlighted that accessibility and performance are not extras—they’re core to the user experience. Prioritising these elements from the start not only improved usability but also directly contributed to commercial success.
                </p>

            </section>

            <section className="section case-study-design">
                <h2 className="heading heading2">Personal Insights</h2>
                <p>
                    This project gave me a broader, more holistic view of how a business operates across its many departments—from warehouse and customer service through to marketing, buying, and technology. It reinforced how deeply connected design decisions are to the day-to-day work of these teams, and the value of bringing their perspectives into the process.
                </p>
                <p>
                    I also gained meaningful exposure to a diverse range of users—not only the customers themselves but also the internal teams who support them. Engaging directly with staff and hearing feedback through customer service channels helped me better understand the full ecosystem of the user experience and the importance of designing with that bigger picture in mind.
                </p>

            </section>
        </main>

    );
}
