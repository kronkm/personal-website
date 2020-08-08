import React from "react";
import Layout from "../components/layout"

const About = () => (
    <Layout>
        <section className="section-box">
            <h1 className="section-heading margin-bottom-lg">Nice to Meet You!</h1>
            <div className="about-container">
                <p>
                    I'm a Front End Engineer that works across the stack. Although I'm
                    primarily fluent in React and Rails, I've shipped
                    code written in Python, .NET, Perl, and C to production in the past.
                </p>
                <hr className="rule"></hr>
                <p>
                    Beyond writing code, I wear multiple hats at work.
                    I prefer collaborating directly with stakeholders
                    and I've mentored engineers, run hiring efforts, and defined work
                    for both product-led and developer-led initatives for my teams as a lead.
                </p>
                <hr className="rule"></hr>
                <p>
                    Currently, I'm building a better account experience for users with
                    <a href="https://www.procore.com" target="_blank" rel="noreferrer"> Procore</a>.
                    Previously, I worked as the Lead Front End Engineer at
                    <a href="https://www.realmassive.com" target="_blank" rel="noreferrer"> RealMassive</a>.
                    I also led the Front End team behind
                    <a href="https://www.netapp.com/us/index.aspx" target="_blank" rel="noreferrer"> NetApp.com </a>
                    and before that I wrote code for VNXe simulators at
                    <a href="https://www.dellemc.com/en-us/index.htm" target="_blank" rel="noreferrer"> EMC</a>.
                </p>
                <hr className="rule"></hr>
                <p>
                    I'm having fun outside of work, too. I've competed in 5 strength sport meets, baked over 30 loaves
                    of sourdough bread, and played way too many Steam games. Feel free to say <a aria-label="Email"href="mailto:mkronk7@gmail.com">hello</a>!
                </p>
            </div>
        </section>
    </Layout>
);

export default About;