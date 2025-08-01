import React from "react";
import {HeroBanner} from "@/app/components/HeroBanner/HeroBanner";
import {Cards} from "@/app/components/Cards/Cards";
import {Card} from "@/app/components/Cards/Card";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Portfolio of Work with Case Studies | Ashlie Webb',
    description: 'Creating seamless user experiences through design & code.',
};

export default function Portfolio() {
    return (
        <>
            <HeroBanner
                introtext="Product Designer • UX & UI • Design Systems"
                title={`Creating seamless user experiences through design & code`}
                description={`<p>Ashlie cares deeply about the full user journey—from intuitive interfaces to clean, maintainable code. Her portfolio includes projects where she’s contributed as a frontend developer, a UX/UI designer, or both, always with a focus on clarity, usability, and thoughtful execution.</p>`}
                imageUrl="/illustration-website-design-layout.svg"
                imageAlt="Designer building a website"
                imageWidth={400}
                imageHeight={400}
                // ctaLink="/AshlieWebb_UXPortfolio.pdf"
                // ctaLabel={`Ashlie's UX Portfolio (PDF)`}
                // ctaTarget={`_blank`}
            >
            </HeroBanner>
            <Cards
                heading="Case studies"
                grid={2}
                cardStyle="squareCard"
                bgAlt={false}
            >
                <Card
                    title="Cow & Coconut: Building a Brand with Purpose"
                    subtitle="Brand Identity • UX & UI Design • Marketing"
                    link="/case-studies/cow-and-coconut"
                    linkTitle="View Cow & Coconut case study"
                    image="/case-studies/cow-and-coconut/candc-mobile-website-mockup.jpg"
                    imageSquare="/case-studies/cow-and-coconut/candc-mobile-website-mockup-square.jpg"
                    imageAlt="Cow & Coconut: Building a Brand with Purpose"
                    imageWidth={800}
                    imageHeight={450}
                ></Card>
                <Card
                    title="Symphony3: Shaping a Website That Supports Service and Strategy"
                    subtitle="UX Strategy • UI Design • Frontend Dev"
                    link="/case-studies/symphony3-website-redesign"
                    linkTitle="View Symphony3 case study"
                    image="/case-studies/symphony3/symphony3-redesign-website-mockup.jpg"
                    imageSquare="/case-studies/symphony3/symphony3-redesign-website-mockup-square.jpg"
                    imageAlt="Symphony3: Shaping a Website That Supports Service and Strategy"
                    imageWidth={800}
                    imageHeight={450}
                ></Card>
                <Card
                    title="Symphony3: Enabling Faster Builds Through a White Label Design System"
                    subtitle="UX Strategy • UI Design • Frontend Dev"
                    link="/case-studies/symphony3-white-label"
                    linkTitle="View Symphony3 case study"
                    image="/case-studies/symphony3/symphony3-white-label-website-mockup.jpg"
                    imageSquare="/case-studies/symphony3/symphony3-white-label-website-mockup-square.jpg"
                    imageAlt="Symphony3: Enabling Faster Builds Through a White Label Design System"
                    imageWidth={800}
                    imageHeight={450}
                ></Card>
                <Card
                    title="Birdsnest: UX-Led Site Redesign & Optimisation"
                    subtitle="UX Research & Strategy • UI Design • Wireframing & Prototyping"
                    link="/case-studies/birdsnest-site-redesign"
                    linkTitle="View birdsnest case study"
                    image="/case-studies/birdsnest/birdsnest-redesign-website-mockup.jpg"
                    imageSquare="/case-studies/birdsnest/birdsnest-redesign-website-mockup-square.jpg"
                    imageAlt="Birdsnest: UX-Led Site Redesign & Optimisation"
                    imageWidth={800}
                    imageHeight={450}
                ></Card>
                <Card
                    title="Birdsnest: Crafting a Seamless Navigation Experience"
                    subtitle="UX Research • Wireframing & Prototyping • Accessiblity Design"
                    link="/case-studies/birdsnest-mobile-first-navigation"
                    image="/case-studies/birdsnest/birdsnest-mobile-navigation-mockup.jpg"
                    imageSquare="/case-studies/birdsnest/birdsnest-mobile-navigation-mockup-square.jpg"
                    imageAlt="Birdsnest: Crafting a Seamless Navigation Experience"
                    imageWidth={800}
                    imageHeight={450}
                ></Card>
                <Card
                    title="Birdsnest: Improving Returns to Support a Customer‑First Approach"
                    subtitle="UX Research • UX & UI Design • Journey Optimisation"
                    link="/case-studies/birdsnest-online-return-process"
                    linkTitle="View birdsnest case study"
                    image="/case-studies/birdsnest/birdsnest-returns-process-mockup.jpg"
                    imageSquare="/case-studies/birdsnest/birdsnest-returns-process-mockup-square.jpg"
                    imageAlt="Birdsnest: Improving Returns to Support a Customer‑First Approach"
                    imageWidth={800}
                    imageHeight={450}
                ></Card>
            </Cards>

            <Cards
                heading="Portfolio work"
                grid={2}
                cardStyle="squareCard"
                bgAlt={false}
            >
                <Card
                    title="Cow & Coconut: Connection through content"
                    subtitle="Lead magnet design • Editorial layout • 2024"
                    description="A gentle lead generator designed with purpose—blending mindful content and warm visual storytelling."
                    image="/case-studies/cow-and-coconut/candc-winter-eco-guide-mockup.jpg"
                    imageSquare="/case-studies/cow-and-coconut/candc-winter-eco-guide-mockup-square.jpg"
                    imageAlt="Cow & Coconut: Winter Eco Living Guide"
                    imageWidth={800}
                    imageHeight={450}
                    link="https://cdn.shopify.com/s/files/1/0645/4588/2344/files/GUIDE_Winter_2025_v3.pdf?v=1750327077"
                    linkTitle="View the Winter Eco Living Guide at Cow & Coconut"
                    linkText="View the Winter Eco Living Guide"
                    linkTarget="_blank"
                ></Card>
                <Card
                    title="Golden Plains: Simplifying Services for a Regional Council"
                    subtitle="Frontend • Drupal website build • 2021"
                    description="Local council website to connect multiple systems and improve UX for users."
                    image="/case-studies/symphony3/golden-plains-website-mockup.jpg"
                    imageSquare="/case-studies/symphony3/golden-plains-website-mockup-square.jpg"
                    imageAlt="Golden Plains Shire Council website"
                    imageWidth={800}
                    imageHeight={450}
                    link="https://www.goldenplains.vic.gov.au"
                    linkTitle="View Golden Plains Shire Council website"
                    linkText="View Golden Plains Shire Council website"
                    linkTarget="_blank"
                ></Card>
                <Card
                    title="Geofabrics: Engineering a Better Experience"
                    subtitle="Frontend • Drupal website build • 2021"
                    description="Manufacturing industry website showcasing services and materials, as well as professional education."
                    image="/case-studies/symphony3/geofabrics-website-mockup.jpg"
                    imageSquare="/case-studies/symphony3/geofabrics-website-mockup-square.jpg"
                    imageAlt="Geofabrics: Engineering a Better Experience"
                    imageWidth={800}
                    imageHeight={450}
                    link="https://www.geofabrics.co"
                    linkTitle="View Geofabrics website"
                    linkText="View Geofabrics website"
                    linkTarget="_blank"
                ></Card>
                <Card
                    title="Paintback: Giving Paint a Second Life"
                    subtitle="Frontend • Drupal website build • 2020"
                    description="Charity website providing paint recycling services, as well as education and awareness."
                    image="/case-studies/symphony3/symphony3-white-label-website-mockup.jpg"
                    imageSquare="/case-studies/symphony3/symphony3-white-label-website-mockup-square.jpg"
                    imageAlt="Paintback: Giving Paint a Second Life"
                    imageWidth={800}
                    imageHeight={450}
                    link="https://www.paintback.com.au"
                    linkTitle="View Paintback website"
                    linkText="View Paintback website"
                    linkTarget="_blank"
                ></Card>
                <Card
                    title="Puddleduck Crossing: A Playful Brand for Crochet Toys"
                    subtitle="Logo Design • Brand identity • 2020"
                    description="A cosy, handcrafted logo for a small business bringing joy through crochet toys and keepsakes."
                    image="/case-studies/puddleduck-crossing/puddleduck-crossing-logo.jpg"
                    imageSquare="/case-studies/puddleduck-crossing/puddleduck-crossing-logo-square.jpg"
                    imageAlt="Puddleduck Crossing Logo Design"
                    imageWidth={800}
                    imageHeight={450}
                ></Card>
                <Card
                    title="Digital Snow: Branding for a Boutique Ecomm Agency"
                    subtitle="Logo Design • Brand identity • 2019"
                    description="A refined brandmark developed for a small agency focused on digital strategy and online retail."
                    image="/case-studies/digital-snow/digital-snow-logo-mockup.jpg"
                    imageSquare="/case-studies/digital-snow/digital-snow-logo-mockup-square.jpg"
                    imageAlt="Puddleduck Crossing Logo Design"
                    imageWidth={800}
                    imageHeight={450}
                ></Card>
            </Cards>

            {/*<Cards grid={2}>*/}
            {/*    <Card title={`Birdsnest`} description={`Women's fashion store with a strong online presence and award-winning customer service`} subtext={`frontend, feature contribution, bigcommerce, 2022-2024`} link={`www.birdsnest.com.au`}></Card>*/}
            {/*    <Card title={`Cow & Coconut`} description={`Online eco store showcasing natural skincare and an eco-friendly lifestyle`} subtext={`ux design, frontend, shopify, 2019-2024`} link={`www.cowandcoconut.com.au`}></Card>*/}
            {/*    <Card title={`Symphony3`} description={`Agency helping organisations create simple connected customer experiences`} subtext={`ux design, frontend, drupal website build, 2022`} link={`www.symphony3.com`}></Card>*/}
            {/*    <Card title={`Golden Plains Shire Council`} description={`Local council website to connect multiple systems and improve UX for users`} subtext={`frontend, drupal website build, 2021`} link={`www.goldenplains.vic.gov.au`}></Card>*/}
            {/*    <Card title={`Futuremap Portal`} description={`A tool used to help Australian manufacturers understand their position and growth potential`} subtext={`frontend, drupal website build, 2021`} link={`www.symphony3.com/insights/imcrc`}></Card>*/}
            {/*    <Card title={`Geofabrics`} description={`Manufacturing industry website showcasing services and materials, as well as professional education`} subtext={`frontend, drupal website build, 2021`} link={`geofabrics.co`}></Card>*/}
            {/*    <Card title={`Paintback`} description={`Charity website providing paint recycling services, as well as education and awareness`} subtext={`frontend, drupal website build, 2020`} link={`paintback.com.au`}></Card>*/}
            {/*    <Card title={`Birdsnest`} description={`Women's fashion store with a strong online presence and award-winning customer service`} subtext={`ux design, frontend, long-term strategy, rebuild and feature contribution, 2016-2020`} link={`birdsnest.com.au`}></Card>*/}
            {/*    <Card title={`My World Of Work`} description={`Skills Development Scotland’s (SDS) award-winning careers advice and information service`} subtext={`frontend, frontend rebuild and workflow strategy, feature contribution, 2015`}></Card>*/}
            {/*    <Card title={`Missguided`} description={`Award-winning international online fashion retailer based in the UK`} subtext={`frontend, feature contribution, 2014 and 2015-16`}></Card>*/}
            {/*    <Card title={`Session Digital`} description={`E-commerce specialists and Magento Gold Partner based in the UK`} subtext={`frontend, feature contribution, 2013`}></Card>*/}
            {/*</Cards>*/}

            {/*<Text copy={`*/}
            {/*    <h2>A highlight of successful, slightly older projects</h2>*/}
            {/*    <p className={styles.portfolioItem}><strong>Bathtub Gin</strong><br/>*/}
            {/*        Unique online store selling organic artisan jam</p>*/}

            {/*    <p className={styles.portfolioItem}><strong>Acubody</strong><br/>*/}
            {/*        London-based natural therapies business</p>*/}

            {/*    <p className={styles.portfolioItem}><strong>Russian Team Room</strong><br/>*/}
            {/*        Iconic New York restaurant</p>*/}

            {/*    <p className={styles.portfolioItem}><strong>Grizzly Guitar</strong><br/>*/}
            {/*        Guitar repairs and services</p>*/}

            {/*    <p className={styles.portfolioItem}><strong>BR Guest Hospitality</strong><br/>*/}
            {/*        Restaurants and bars in the United States</p>*/}

            {/*    <p className={styles.portfolioItem}><strong>Dos Caminos</strong><br/>*/}
            {/*        Mexican restaurant with online booking</p>*/}

            {/*    <p className={styles.portfolioItem}><strong>Alexander Hotels</strong><br/>*/}
            {/*        Luxury boutique hotels near London</p>*/}

            {/*    <p className={styles.portfolioItem}><strong>Wafi Mall Dubai</strong><br/>*/}
            {/*        Dubai’s best shopping mall for luxury shopping with over 350 shops</p>`}*/}
            {/*></Text>*/}
        </>
    )
}
