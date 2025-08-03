import {HeroBanner} from "@/app/components/HeroBanner/HeroBanner";
import React from "react";

export default function Contact() {
    return (
        <>
            <HeroBanner
                title={`About Ashlie`}
                description={`<p>Need something here....</p>`}
                // ctaLink="mailto:greetings@ashliewebb.com" ctaLabel={"Email Ashlie"}
                imageUrl="/illustration-web-designer-idea.svg"
                imageAlt="Web Design ideas"
                imageWidth={400}
                imageHeight={400}
                >
            </HeroBanner>
        </>
    );
}
