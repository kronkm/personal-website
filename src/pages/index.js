import React from "react"
import Layout from "../components/layout"
import mk from "../images/mk.jpg";

const IndexPage = () => (
    <Layout>
        <section className="section-box">
            <h1 className="section-heading">Hi, I'm Mike Kronk.</h1>
            <img className="sweet-portrait" src={mk} alt="Mike Kronk" />
            <div className="section-subheading-container">
                <h2 className="section-subheading">I'm a Front End Engineer based in Austin, TX</h2>
                <div className="emoji-container">
                    <span className="emoji" role="img" aria-label="cactus">🌵</span>
                    <span className="emoji" role="img" aria-label="sun">☀️</span>
                    <span className="emoji" role="img" aria-label="taco">🌮</span>
                </div>
            </div>
        </section>
    </Layout>
)

export default IndexPage
