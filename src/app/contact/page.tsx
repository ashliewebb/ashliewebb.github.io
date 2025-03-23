import {HeroBanner} from "@/app/components/HeroBanner/HeroBanner";
import React from "react";
import {Text} from "@/app/components/Text/Text";

export default function Skills() {
    return (
        <>
            <HeroBanner title={`Let’s Work Together`} description={`Ashlie is currently open to new opportunities in frontend development or UX/UI design—ideally with teams that value thoughtful digital experiences, clean code, and user-centered thinking.`} ctaLink="mailto:greetings@ashliewebb.com" ctaLabel={"Get In Touch"}></HeroBanner>
            <Text copy={`Whether you’re hiring for a product team, building something new, or just want to start a conversation, feel free to reach out. She’s happy to connect, talk through your needs, or share more about how she works.</p>You can get in touch using the form below or reach out directly via <a href="mailto:greetings@ashliewebb.com">greetings@ashliewebb.com</a> or <a href="https://www.linkedin.com/in/ashliewebb/">Linkedin</a>. Looking forward to hearing from you!`}></Text>
        </>
    );
}
