import {HeroBanner} from "@/app/components/HeroBanner/HeroBanner";
import React from "react";

export default function Contact() {
    return (
        <>
            <HeroBanner
                introtext="Product Designer • UX & UI • Design Systems"
                title={`About Ashlie`}
                description={`<p>Ashlie Webb is a designer and front-end developer who blends thoughtful UX with clean, intuitive design. With over 15 years of experience across e-commerce, branding, and digital products, her work is grounded in real-world needs and a belief that design should always serve people first.</p>
                <p>Based in regional NSW, Ashlie works remotely with clients across Australia and is available for regular onsite collaboration in Canberra and Sydney. While she works comfortably across digital tools and remote workflows, she values the depth and connection of in-person collaboration and is equally confident facilitating workshops or contributing independently from a distance. She adjusts her approach to suit the needs of the project and the people involved.</p>
                <p>She brings a calm, collaborative presence to every project, working across UX strategy, interface design, and front-end implementation. When she’s not sketching flows or tweaking layout grids, she’s tinkering with natural skincare formulas, exploring creative side projects, or getting lost in a good story.</p>
                <p>Ashlie welcomes genuine opportunities to collaborate or contribute. If you're reaching out about work, please include details to help her understand how she might be a good fit.</p>`}
                ctaLink="mailto:greetings@ashliewebb.com"
                ctaLabel="Let's connect"
                imageUrl="/illustration-web-designer-idea.svg"
                imageAlt="Web Design ideas"
                imageWidth={400}
                imageHeight={400}
                >
            </HeroBanner>
        </>
    );
}
