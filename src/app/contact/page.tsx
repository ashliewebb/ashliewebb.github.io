import {HeroBanner} from "@/app/components/HeroBanner/HeroBanner";
import React from "react";

export default function Contact() {
    return (
        <>
            <HeroBanner
                introtext="Product Design • UX/UI • Content & Engagement"
                title={`Let’s Work Together`}
                description={`<p>Ashlie is currently open to new opportunities in UX/UI design and front-end development—ideally with teams who value thoughtful digital experiences, clean code, and user-centred thinking.</p><p>Whether you're building something new, growing a product team, or just curious to connect, feel free to reach out. She's always happy to talk through your goals and explore how she might be able to contribute.</p><p>To help get the conversation off to a good start, please include a few details about the role, project, or team when you get in touch.</p><p>You can reach her directly at <a href="mailto:greetings@ashliewebb.com">greetings@ashliewebb.com</a> or via <a href="https://www.linkedin.com/in/ashliewebb/">Linkedin</a>. Looking forward to hearing from you.</p>`}
                ctaLink="mailto:greetings@ashliewebb.com" ctaLabel={"Email Ashlie"}
                imageUrl="/illustration-web-designer-idea.svg"
                imageAlt="Web Design ideas"
                imageWidth={400}
                imageHeight={400}
                >
            </HeroBanner>
        </>
    );
}
