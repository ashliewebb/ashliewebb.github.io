import {HeroBanner} from "@/app/components/HeroBanner/HeroBanner";
import React from "react";
import {Text} from "@/app/components/Text/Text";

export default function Contact() {
    return (
        <>
            <HeroBanner
                title={`Let’s Work Together`}
                description={`<p>Ashlie is currently open to new opportunities in frontend development or UX/UI design—ideally with teams that value thoughtful digital experiences, clean code, and user-centered thinking.</p><p>Whether you’re hiring for a product team, building something new, or just want to start a conversation, feel free to reach out. She’s happy to connect, talk through your needs, or share more about how she works.</p><p>You can get in touch directly via <a href="mailto:greetings@ashliewebb.com">greetings@ashliewebb.com</a> or <a href="https://www.linkedin.com/in/ashliewebb/">Linkedin</a>. Looking forward to hearing from you!</p>`}
                ctaLink="mailto:greetings@ashliewebb.com" ctaLabel={"Email Ashlie"}></HeroBanner>
        </>
    );
}
