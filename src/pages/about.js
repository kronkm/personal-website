import React from 'react';
import Layout from '../components/layout'

const About = () => (
    <Layout>
        <section className='section-box'>
            <h1 className='section-heading margin-bottom-lg'>Nice to Meet You!</h1>
            <div className='about-container'>
                <p>
                    I'm currently the Lead Front End Engineer at <a href="https://www.realmassive.com" target="_blank">RealMassive</a>.
                    Previously, I led the Front End team
                    behind <a href='https://www.netapp.com/us/index.aspx' target='_blank'>NetApp.com</a> and before that I wrote code 
                    for VNXe simulators at <a href='https://www.dellemc.com/en-us/index.htm'>EMC</a>.
                </p>
                <hr className='rule'></hr>
                <p>
                    I love wearing multiple hats at work. As a Front End Engineer,
                    you'll find me knee deep in HTML, CSS, JS, and React every day. As a
                    lead, I mentor other Front End Engineers, run hiring efforts,
                    work with stakeholders to refine the backlog, and define work for the
                    team. If I'm not doing any of these things, I'm removing any and all
                    blockers that stand in the way of my team's success.
                </p>
                <hr className='rule'></hr>
                <p>
                    I'm having fun outside of work, too. After almost two decades of lifting
                    weights, I'm making my entrance into the strength sports world at my
                    first powerlifting meet in April 2019. When it's time for me to fill
                    up after a workout, you'll find me gushing over the food scene here
                    in Austin. I also frequent local meetups and discussion groups and
                    enjoy a healthy does of Nintendo games when I need some downtime.
                </p>
            </div>
        </section>
    </Layout>
);

export default About;