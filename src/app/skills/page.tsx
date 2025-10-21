import {HeroBanner} from "@/app/components/HeroBanner/HeroBanner";
import React from "react";
import {Card} from "@/app/components/Cards/Card";
import {Cards} from "@/app/components/Cards/Cards";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Skills of a Product Designer | Ashlie Webb',
    description: 'A practical mix of product thinking, design systems, and user-first strategy.',
};

export default function Skills() {
    return (
        <>
            <HeroBanner
                introtext="Product Design • UX/UI • Content & Engagement"
                title="A practical mix of product thinking, design systems, and user-first strategy"
                imageUrl="/illustration-website-content.svg"
                imageAlt="Web Designer designing layout"
                imageWidth={400}
                imageHeight={400}
            >
            </HeroBanner>
            <Cards
                grid={3}
                cardStyle="roundedCard"
                bgAlt={false}
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
                <Card
                    title="Wireframes & Prototyping"
                    description="Creating low- to high-fidelity mockups to define layout, flow, and functionality—often used for testing ideas before development."
                    icon="mobile_layout"
                ></Card>
                <Card
                    title="Design Systems"
                    description="Building and maintaining reusable UI components, tokens, and guidelines to create cohesive and scalable design across products or platforms."
                    icon="toys_and_games"
                ></Card>
                <Card
                    title="Accessibility & Usability"
                    description="Ensuring that products are easy to use for everyone—including those using assistive technologies—through clear interactions and inclusive design principles."
                    icon="accessible_forward"
                ></Card>
                <Card
                    title="Content Strategy & Design"
                    description="Combining messaging clarity with interface-aware design—helping users complete tasks through meaningful, well-structured content."
                    icon="format_image_left"
                ></Card>
                <Card
                    title="Information Architecture"
                    description="Organising content and navigation for clarity, helping users find what they need with minimal friction."
                    icon="signpost"
                ></Card>
                <Card
                    title="Interaction Design"
                    description="Shaping how products feel in motion—through animation, feedback, and micro-interactions that guide and reassure the user."
                    icon="quick_phrases"
                ></Card>
                <Card
                    title="Front-end Collaboration"
                    description="Working closely with developers (or writing production-ready code) to ensure designs are implemented accurately and efficiently."
                    icon="code"
                ></Card>
                <Card
                    title="Performance & SEO Optimisation"
                    description="Optimising for speed, semantic structure, and discoverability—balancing great design with technical performance and clean, accessible code."
                    icon="speed"
                ></Card>
                <Card
                    title="Product Thinking"
                    description="Connecting user needs with business goals—designing solutions that support long-term product growth."
                    icon="loyalty"
                ></Card>
            </Cards>
            {/*<Text copy={`<h2>UX & Visual Design</h2>*/}
            {/*<ul>*/}
            {/*    <li>Web design, UX/UI design</li>*/}
            {/*    <li>Adobe Creative Cloud, including Photoshop, Illustrator and XD</li>*/}
            {/*    <li>Creating workflow diagrams</li>*/}
            {/*    <li>Creating wireframes and interactive prototypes</li>*/}
            {/*    <li>Conducting heuristic reviews</li>*/}
            {/*    <li>Customer journey mapping</li>*/}
            {/*    <li>Writing user stories</li>*/}
            {/*    <li>User testing</li>*/}
            {/*    <li>Conducting customer surveys</li>*/}
            {/*</ul>*/}
            {/*<h2>Commerce</h2>*/}
            {/*<ul>*/}
            {/*    <li>Digital strategy for online retailers</li>*/}
            {/*    <li>Customer behaviour analysis</li>*/}
            {/*    <li>Web performance optimisation</li>*/}
            {/*    <li>Research and implement industry best practice, as well as current and upcoming trends</li>*/}
            {/*</ul>*/}
            {/*<h2>Technical</h2>*/}
            {/*<ul>*/}
            {/*    <li>HTML5, CSS3 and Sass</li>*/}
            {/*    <li>Javascript, including Node.js, React.js, Next.js, Webpack, and Gulp</li>*/}
            {/*    <li>SVG, font icons and embedded</li>*/}
            {/*    <li>Responsive web design, including mobile-first approach</li>*/}
            {/*    <li>Styleguide driven development, including OOCSS, Atomic design, Patternlab and Hologram</li>*/}
            {/*    <li>Templating languages, including Twig, Handlebars, Mustache, and Liquid</li>*/}
            {/*    <li>SEO, Structured Data, Google Tag Manager and Google Analytics</li>*/}
            {/*    <li>Performance analysis and optimisation</li>*/}
            {/*    <li>WC3 Standards, Usability and Accessibility guidelines</li>*/}
            {/*    <li>Git Version control</li>*/}
            {/*    <li>E-commerce theme development, including Shopify and BigCommerce</li>*/}
            {/*    <li>PHP Frameworks, including Magento, Drupal, Symfony 2 and Modx</li>*/}
            {/*    <li>Headless CMS with Prismic.io</li>*/}
            {/*    <li>Email newsletter development, including responsive layout and template building</li>*/}
            {/*</ul>*/}
            {/*<h2>Project Management &amp; Collaboration</h2>*/}
            {/*<ul>*/}
            {/*    <li>Cultivating a working environment of openness and collaboration</li>*/}
            {/*    <li>Strong understanding of agile methodologies</li>*/}
            {/*    <li>Strong understanding of scrum processes and ceremonies</li>*/}
            {/*    <li>Working with multiple departments and roles</li>*/}
            {/*</ul>`}></Text>*/}
        </>
    );
}
