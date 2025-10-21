import { Metadata } from 'next';
import {HeroBanner} from "@/app/components/HeroBanner/HeroBanner";
import {Card} from "@/app/components/Cards/Card";
import {Cards} from "@/app/components/Cards/Cards";
import React from "react";
import {KeyPoints} from "@/app/components/CaseStudies/KeyPoints";
import {Image} from "@/app/components/Image/Image";

export const metadata: Metadata = {
    title: 'Cow & Coconut: Building a Brand with Purpose | Ashlie Webb Designs',
    description: 'Case study for the Cow & Coconut brand and website design project.',
};

export default function CowAndCoconutCaseStudy() {
    return (
        <main className="case-study">
            <HeroBanner
                title="Cow & Coconut: Building a Brand with Purpose"
                breadcrumb="<ul class='breadcrumbs'>
                    <li><a href='/'><span class='material-symbols-outlined'>
cottage</span></a></li>
                    <li><a href='/portfolio'>Portfolio</a></li>
                    <li>Case Study</li>
                    </ul>"
                description="<p>Combining design thinking and marketing insight to craft intuitive, feel-good brand experiences that build trust and engagement.</p>"
                imageUrl="/case-studies/cow-and-coconut/mockup-laptop-mobile-cow-and-coconut.png"
                imageAlt="Cow & Coconut"
                imageWidth={400}
                imageHeight={400}
            >

            </HeroBanner>
            <KeyPoints
                project="Cow & Coconut Brand & Website"
                role="Founder / Digital Design & Owner"
                timeline="2019 – Ongoing"
                tools="Shopify, Klaviyo, Figma, Photoshop"
                users="Eco-conscious shoppers, gift buyers, local customers"
                responsibilities="Brand identity, UX/UI design, marketing, web development, operations"
            >
            </KeyPoints>
            <Cards
                heading="Project highlights"
                copy="A hands-on blend of design, development, and business operations to bring a thoughtful, feel-good brand to life."
                grid={3}
                cardStyle="roundedCard"
                bgAlt={false}
                headerCenter={true}
                ctaLink="https://www.cowandcoconut.com.au"
                ctaLabel="View Cow & Coconut website"
                ctaStyle="cardCTAButton"
                ctaTarget="_blank"
            >
                <Card
                    title="Purpose-driven brand identity"
                    description="Created a purpose-driven brand identity from the ground up, including logo, colour palette, typography, and brand voice."
                    icon="nest_eco_leaf"
                ></Card>
                <Card
                    title="Conversion-focused Shopify website"
                    description="Designed and developed a conversion-focused Shopify website, balancing education, product discovery, and ease of use."
                    icon="storefront"
                ></Card>
                <Card
                    title="Email marketing through Klaviyo"
                    description="Built and managed email marketing through Klaviyo, with strong engagement and consistently high open rates."
                    icon="mark_email_read"
                ></Card>
                <Card
                    title="Personalised customer service"
                    description="Maintained direct customer relationships, handling communications and service with a friendly, human approach."
                    icon="handshake"
                ></Card>
                <Card
                    title="Curated product range"
                    description="Curated a product range that aligns with intentional, feel-good living, supporting sustainable choices without the overwhelm."
                    icon="potted_plant"
                ></Card>
            </Cards>
            <section className="section case-study-summary">
                <h2 className="heading heading2">Project summary</h2>
                <p>Cow & Coconut was born from a simple but powerful idea: that the things we use every day—on our skin, in our homes, and with our families—shouldn’t harm the planet or our bodies. The vision was to create an eco-conscious brand that felt approachable, honest, and enjoyable to engage with, while offering products that support intentional living.</p>
                <p>As the founder, I took on every aspect of building Cow & Coconut from the ground up: brand identity, marketing, website design and development, product curation, and day-to-day operations. Without the luxury of a large team or budget, I relied on a mix of UX and design best practices, personal insight, and a clear sense of the values I wanted the brand to represent.</p>
                <p>This project brought together my skills in UX, frontend development, e-commerce strategy, and content design—woven together by purpose.</p>
            </section>

            {/*<Image*/}
            {/*    image="/case-studies/candc-mobile-website-mockup.jpg"*/}
            {/*    imageSquare="/case-studies/candc-mobile-website-mockup-square.jpg"*/}
            {/*    imageAlt=""*/}
            {/*    caption="Caption here"*/}
            {/*>*/}
            {/*</Image>*/}

            <section className="section case-study-problem">
                <h2 className="heading heading2">The challenge</h2>
                <p>The eco retail space is filled with brands that can often feel clinical, overwhelming, or greenwashed. My challenge was to create something different—something that felt human, welcoming, and built on trust.</p>
                <p>The goal was to design a shopping experience that:</p>
                <ul>
                    <li>Encouraged discovery without overwhelm</li>
                    <li>Felt genuine and personal—not mass-produced or pushy</li>
                    <li>Supported smooth, straightforward purchasing across devices</li>
                    <li>Reflected the brand values through both content and design</li>
                </ul>
                <p>At the same time, I needed to balance creative ideals with the practical needs of running a small retail business—handling stock management, customer service, and marketing while growing the brand sustainably.</p>
            </section>

            <section className="section case-study-research">
                <h2 className="heading heading2">Approach & Process</h2>
                <p>With no large-scale research budget or audience data to lean on, my approach centred around:</p>
                <ul>
                    <li>Best-practice UX and e-commerce design principles</li>
                    <li>Personal experience as both business owner and customer advocate</li>
                    <li>Ongoing adjustments based on anecdotal customer feedback and lived experience running the shop</li>
                </ul>
                <p>Key steps included:</p>
                <ul>
                    <li>Crafting the <strong>brand identity</strong>—logo, colour palette, typography, and voice—focused on warmth, care, and intention</li>
                    <li>Designing and building the <strong>Shopify website</strong>, with clear product categorisation, mobile-first design, and thoughtful content to support decision-making</li>
                    <li>Writing <strong>website copy</strong> that balanced product education with an approachable, conversational tone</li>
                    <li>Managing <strong>email marketing through Klaviyo</strong>, using targeted, thoughtful campaigns rather than high-volume sends</li>
                    <li>Handling <strong>customer communication directly</strong>, bringing a human voice to every interaction</li>
                    <li>Continuously reviewing and iterating on product offerings, content, and marketing based on personal insights and customer feedback</li>
                </ul>
            </section>
            <section className="section">
                <h2 className="heading heading2">Digital Marketing & Engagement Strategy</h2>
                <p>Beyond designing Cow & Coconut&rsquo;s brand identity, I developed a digital engagement strategy focused on visibility, education, and community trust.</p>
                <p>This included:</p>
                <ul>
                    <li><strong>SEO optimisation</strong> through long-form blog articles and structured metadata, boosting organic discovery.</li>
                    <li><strong>Email campaigns</strong> in Klaviyo, structured around educational campaigns (&ldquo;Winter Eco Living Guide&rdquo;, &ldquo;Ritual Reset for Winter Skin&rdquo;), plus brand stories, back in stock and sales campaigns, all with an average open rate of 33%.</li>
                    <li><strong>Social content planning</strong> across Instagram and Facebook, integrating lifestyle imagery, local community features, and behind-the-scenes storytelling.</li>
                    <li><strong>Content scheduling</strong> and <strong>analytics tracking</strong> using Meta Business Suite and Shopify insights to monitor conversion behaviour, referral traffic, and seasonal trends.</li>
                </ul>
                <p>This approach strengthened audience loyalty, enhanced online visibility, and positioned Cow & Coconut as a trusted voice in sustainable living. By weaving storytelling-driven content and community partnerships into the broader strategy, the brand built an authentic connection with its audience — creating a blueprint for a data-informed, values-driven marketing strategy.</p>
            </section>

            <section className="section case-study-design">
                <h2 className="heading heading2">Outcome & Impact</h2>
                <p>
                    While Cow & Coconut remains a small, independent business, the brand has built a reputation for being <strong>thoughtful, easy to engage with, and genuine in its mission</strong>.
                </p>
                <ul>
                    <li><strong>Positive feedback about the brand experience</strong> is regularly shared by customers, noting its friendly tone and curated feel</li>
                    <li>The Shopify site continues to serve as a <strong>reliable, easy-to-use platform for product sales and seasonal updates</strong></li>
                    <li>Email campaigns maintain <strong>strong open rates</strong>, reflecting a genuinely engaged audience</li>
                    <li>The brand identity provides a <strong>strong foundation for future growth</strong>, with flexibility to evolve product ranges and deepen the storytelling around sustainability and self-care</li>
                </ul>
                <p>
                    Most importantly, the experience has helped build trust with the audience—not through big claims or flashy campaigns, but through consistent, intentional communication and thoughtful design.
                </p>
            </section>

            <Image
                image="/case-studies/cow-and-coconut/candc-pos-idle-screen.jpg"
                imageSquare="/case-studies/cow-and-coconut/candc-pos-idle-screen.jpg"
                imageAlt="Cow & Coconut POS Idle Screen"
                caption="POS Idle Screen branded for in-store experience"
            >
            </Image>
            <Image
                image="/case-studies/cow-and-coconut/candc-winter-eco-guide-mockup.jpg"
                imageSquare="/case-studies/cow-and-coconut/candc-winter-eco-guide-mockup-square.jpg"
                imageAlt="Cow & Coconut POS Idle Screen"
                caption="Winter Eco Living Guide – Lead Generator"
            >
            </Image>

            <section className="section">
                <h2 className="heading heading2">Reflections</h2>
                <p>Cow & Coconut has been as much a personal journey as it has been a business project. It has given me the opportunity to apply my UX, design, and development skills in a truly holistic way—connecting strategy, execution, and operations all under one roof.</p>
                <p>It’s taught me how to balance <strong>creative ideals with commercial realities</strong>, and how much power there is in small, meaningful details. I’ve learned that purpose-led design is not about perfection—it’s about staying clear on your values, listening well, and being willing to adapt.</p>
                <p>And while this project may not have scaled as quickly as I first hoped, it has become a space where I can experiment, grow, and share a piece of work that reflects what matters to me.</p>
            </section>

        </main>

    );
}
