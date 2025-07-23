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
                ctaLink="/AshlieWebb_UXPortfolio.pdf"
                ctaLabel={`Ashlie's UX Portfolio (PDF)`}
                ctaTarget={`_blank`}>
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
                    image="/case-studies/candc-mobile-website-mockup.jpg"
                    imageAlt="Cow & Coconut mobile website"
                    imageWidth={506}
                    imageHeight={337}
                ></Card>
                <Card
                    title="Symphony3: Shaping a Website That Supports Service and Strategy"
                    subtitle="UX Strategy • UI Design • Frontend Dev"
                    link="/case-studies/symphony3-website-redesign"
                    linkTitle="View Symphony3 case study"
                    image="/case-studies/candc-mobile-website-mockup.jpg"
                    imageAlt="Cow & Coconut mobile website"
                    imageWidth={506}
                    imageHeight={337}
                ></Card>
                <Card
                    title="Symphony3"
                    subtitle="UX Strategy • UI Design • Frontend Dev"
                    link="/case-studies/symphony3-white-label"
                    linkTitle="View Symphony3 case study"
                    image="/case-studies/candc-mobile-website-mockup.jpg"
                    imageAlt="Cow & Coconut mobile website"
                    imageWidth={506}
                    imageHeight={337}
                ></Card>
                <Card
                    title="Birdsnest: UX-Led Site Redesign & Optimisation"
                    subtitle="UX Research & Strategy • UI Design • Wireframing & Prototyping"
                    link="/case-studies/birdsnest-site-redesign"
                    linkTitle="View birdsnest case study"
                    image="/case-studies/candc-mobile-website-mockup.jpg"
                    imageAlt="Cow & Coconut mobile website"
                    imageWidth={506}
                    imageHeight={337}
                ></Card>
                <Card
                    title="Birdsnest: Crafting a Seamless Navigation Experience"
                    subtitle="UX Research • Wireframing & Prototyping • Accessiblity Design"
                    link="/case-studies/birdsnest-mobile-first-navigation"
                    image="/case-studies/candc-mobile-website-mockup.jpg"
                    imageAlt="Cow & Coconut mobile website"
                    imageWidth={506}
                    imageHeight={337}
                ></Card>
                <Card
                    title="Birdsnest: Improving Returns to Support a Customer‑First Approach"
                    subtitle="UX Research • UX & UI Design • Journey Optimisation"
                    link="/case-studies/birdsnest-online-return-process"
                    linkTitle="View birdsnest case study"
                    image="/case-studies/candc-mobile-website-mockup.jpg"
                    imageAlt="Cow & Coconut mobile website"
                    imageWidth={506}
                    imageHeight={337}
                ></Card>
            </Cards>

            <Cards
                heading="Portfolio work"
                grid={2}
                cardStyle="squareCard"
                bgAlt={false}
            >
                <Card
                    title="Cow & Coconut"
                    description="Building a Brand with Purpose"
                ></Card>
                <Card
                    title="Symphony3"
                    description="Website Redesign"
                    link="/case-studies/symphony3-website-redesign"
                    linkText="View case study"
                    linkTitle="View Symphony3 case study"
                ></Card>
                <Card
                    title="Symphony3"
                    description="White Label Drupal Platform"
                    link="/case-studies/symphony3-white-label"
                    linkText="View case study"
                    linkTitle="View Symphony3 case study"
                ></Card>
                <Card
                    title="Birdsnest"
                    description="UX-Led Site Redesign & Optimisation"
                    link="/case-studies/birdsnest-site-redesign"
                    linkText="View case study"
                    linkTitle="View birdsnest case study"
                ></Card>
                <Card
                    title="Birdsnest"
                    description="Mobile-First Navigation Redesign"
                    link="/case-studies/birdsnest-mobile-first-navigation"
                    linkText="View case study"
                    linkTitle="View birdsnest case study"
                ></Card>
                <Card
                    title="Birdsnest"
                    description="Online Return Process"
                    link="/case-studies/birdsnest-online-return-process"
                    linkText="View case study"
                    linkTitle="View birdsnest case study"
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
