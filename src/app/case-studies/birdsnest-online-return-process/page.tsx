import { Metadata } from 'next';
import {HeroBanner} from "@/app/components/HeroBanner/HeroBanner";
import {KeyPoints} from "@/app/components/CaseStudies/KeyPoints"
import React from "react";
import {Card} from "@/app/components/Cards/Card";
import {Cards} from "@/app/components/Cards/Cards";


export const metadata: Metadata = {
    title: 'Birdsnest Online Return Process Case Study | Ashlie Webb',
    description: 'Redesigning the returns experience to reduce support load and empower customers.',
};

export default function BirdsnestOnlineReturnProcessCaseStudy() {
    return (
        <>
            <HeroBanner
                title="Birdsnest: Improving Returns to Support a Customer‑First Approach"
                breadcrumb="<ul class='breadcrumbs'>
                    <li><a href='/'><span class='material-symbols-outlined'>
cottage</span></a></li>
                    <li><a href='/portfolio'>Portfolio</a></li>
                    <li>Case Study</li>
                    </ul>"
                description="<p>Redesigning the returns experience to reduce support load and empower customers.</p>"
                imageUrl="/case-studies/birdsnest-logo.png"
                imageAlt="Birdsnest"
                imageWidth={200}
                imageHeight={37}
            >
            </HeroBanner>
            <KeyPoints
                project="Birdsnest Online Return Process"
                role="UX Designer"
                timeline="2017–18"
                tools="Adobe XD, stakeholder interviews, competitor benchmarking"
                users="Online fashion shoppers, Birdsnest Returns and Customer Service teams"
                responsibilities="UX research, wireframing, prototyping, cross-functional collaboration, process optimisation"
            >
            </KeyPoints>
            <Cards
                heading="Project highlights"
                copy="A focused redesign of Birdsnest’s mobile navigation, anchored in real user feedback and executed with care."
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
                    title="Returns flow redesign"
                    description="Simplified and clarified the online return process for customers."
                    icon="account_tree"
                ></Card>
                <Card
                    title="Customer-led improvements"
                    description="Added key exchange options and guidance based on common customer frustrations."
                    icon="voice_chat"
                ></Card>
                <Card
                    title="Conditional form logic"
                    description="Reduced friction with dynamic form fields tailored to user responses."
                    icon="flowsheet"
                ></Card>
                <Card
                    title="Support team collaboration"
                    description="Partnered closely with Customer Service and Returns staff to uncover real pain points and test solutions."
                    icon="groups"
                ></Card>
                <Card
                    title="Operational efficiency"
                    description="Reduced manual follow-ups and incomplete returns during high-volume shopping periods."
                    icon="support_agent"
                ></Card>
                <Card
                    title="Prototyping for feedback"
                    description="Used interactive wireframes to align early with internal teams and iterate quickly."
                    icon="mobile_layout"
                ></Card>
            </Cards>
            <section className="section case-study-summary">
                <h2 className="heading heading2">Project Summary</h2>
                <p>Birdsnest is known for its loyal customer base and standout service. I was brought in to redesign the online return and exchange flow, aiming to support both customers and the internal teams handling returns. The original form lacked clarity and made exchanges cumbersome, often requiring follow-up from staff.</p>
                <p>The goal: streamline the experience to be clearer, faster, and easier for everyone involved—while staying true to the brand’s reputation for personalised care.</p>
            </section>

            <section className="section case-study-problem">
                <h2 className="heading heading2">The challenge</h2>
                <p>Customers wanting to exchange an item couldn’t specify what they wanted in return—leading to gaps in information, confusion, and extra manual work for staff. During peak periods, this meant overwhelmed inboxes and processing delays.</p>
                <p>Common issues included:</p>
                <ul>
                    <li>Customers required to contact customer service to initiate an exchange</li>
                    <li>Incomplete forms that slowed down processing</li>
                    <li>Staff feeling reactive rather than proactive</li>
                </ul>
                <p>The opportunity was to streamline the form and return flow, giving customers the information and tools they needed upfront, while easing the pressure on internal teams.</p>
            </section>

            <section className="section case-study-research">
                <h2 className="heading heading2">Research & Insights</h2>
                <p>We gathered insights through a full customer survey, heatmaps, and analytics. Common issues included poor page performance, unclear navigation, and an inability to find key features.</p>
                <p>We analysed user behaviour to identify top-visited pages and most-used categories, and conducted internal interviews to gather feedback from staff and customer-facing teams. This gave us a clearer picture of friction points and where we were falling short in supporting customer goals on mobile devices.</p>
            </section>

            <section className="section case-study-design">
                <h2 className="heading heading2">Approach & Process</h2>
                <p>
                    To design something truly useful, I started by mapping the current process and interviewing Returns and Customer Service staff. Their feedback shaped the approach, which focused on:
                </p>
                <ul>
                    <li>Adding the ability to nominate exchange items directly in the form</li>
                    <li>Using conditional logic to keep the flow simple and conversational</li>
                    <li>Providing inline guidance and clearer options throughout</li>
                </ul>
                <p>I prototyped the new flow in Adobe XD, starting with simple wireframes and gradually layering in full UI elements and interaction logic. This let us test early and refine quickly based on internal feedback. The design team worked closely with staff to ensure both usability and backend manageability.
                </p>
            </section>

            <section className="section case-study-design">
                <h2 className="heading heading2">Outlook & Impact</h2>
                <p>
                    While formal metrics weren’t recorded post-launch, the results were clear:
                </p>
                <ul>
                    <li>Significant reduction in incomplete or unclear return requests</li>
                    <li>Less manual follow-up required by Returns staff</li>
                    <li>Improved processing time during high-traffic shopping periods</li>
                    <li>Positive feedback from both customers and internal teams</li>
                </ul>
                <p>The updated process was more intuitive for users and easier for staff to manage—making it a win for both sides.</p>
            </section>

            <section className="section case-study-design">
                <h2 className="heading heading2">Reflections</h2>
                <p>This project showed how even a small piece of the experience—like a form—can have a wide-reaching impact when designed with care. By working closely with internal teams, I was able to design something that didn’t just look good, but functioned well across the entire business.</p>
                <p>It also deepened my appreciation for prototyping as a collaborative tool. Even low-fidelity wireframes can unlock quick feedback and faster alignment when used at the right time.</p>
            </section>
        </>
    );
}
