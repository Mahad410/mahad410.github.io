import React from 'react';
import "./project.css";
import discord from "./pics/discord.webp";
import spotify from "./pics/spotify.webp";
import halloween from "./pics/halloween.webp";
import portfolio from "./pics/portfolio.webp";
import goodwork from "./pics/goodwork.webp";
import mouse from "./pics/mouse.webp";
import ping from "./pics/ping.webp";
import huddle from "./pics/huddle.webp";
import quad from "./pics/quad.webp";
import twitter from "./pics/twitter.webp";
import testimonials from "./pics/testimonials.webp";
import faq from "./pics/faq.webp";
import comingsoon from "./pics/comingsoon.webp";
import comparison from "./pics/comparison.webp";
import chart from "./pics/chart.webp";
import batman from "./pics/batman.webp";
import ascii from "./pics/ascii.webp";
import insight from "./pics/insight.webp";
import login from "./pics/login.webp";
import form from "./pics/form.webp"

function Project() {
    return (
        <div className="pro_container">
            <div className="p_container">
                <div className="image_pro" data-desc={"The exact Discord clone homepage with login page"}>
                    <a href="https://mahad410.github.io/discord" target="_blank" rel="noopener noreferrer"><img
                        src={discord} width="100%" height="180px" alt="discord"></img></a>
                </div>
            </div>
            <div className="p_container">
                <div className="image_pro" data-desc={"The exact Spotify clone homepage with login page"}>
                    <a href="https://mahad410.github.io/spotify" target="_blank" rel="noopener noreferrer"><img
                        src={spotify} width="100%" height="180px" alt="spotify"></img></a>
                </div>
            </div>

            <div className="p_container">
                <div className="image_pro" data-desc={"Batman theme website with parallax effect"}>
                    <a href="https://mahad410.github.io/batman" target="_blank" rel="noopener noreferrer"><img
                        src={batman} width="100%" height="180px" alt="batman"></img></a>
                </div>
            </div>

            <div className="p_container">
                <div className="image_pro" data-desc={"The Portfolio with animations and stats"}>
                    <a href="https://mahad410.github.io/porti" target="_blank" rel="noopener noreferrer"><img
                        src={portfolio} width="100%" height="180px" alt="portfolio"></img></a>
                </div>
            </div>
            <div className="p_container">
                <div className="image_pro" data-desc={"The Halloween theme homepage with some animations"}>
                    <a href="https://mahad410.github.io/halloweenproject" target="_blank" rel="noopener noreferrer"><img
                        src={halloween} width="100%" height="180px" alt="halloween"></img></a>
                </div>
            </div>

            <div className="p_container">
                <div className="image_pro" data-desc={"My business Goodwork.co with form"}>
                    <a href="https://mahad410.github.io/goodwork.co" target="_blank" rel="noopener noreferrer"><img
                        src={goodwork} width="100%" height="180px" alt="goodwork"></img></a>
                </div>
            </div>
            <div className="p_container">
                <div className="image_pro" data-desc={"Four cards featured template"}>
                    <a href="https://mahad410.github.io/quad" target="_blank" rel="noopener noreferrer"><img
                        src={quad} width="100%" height="180px" alt="quad"></img></a>
                </div>
            </div>


            <div className="p_container">
                <div className="image_pro" data-desc={"FAQ template without using JavaScript"}>
                    <a href="https://mahad410.github.io/faq" target="_blank" rel="noopener noreferrer"><img
                        src={faq} width="100%" height="180px" alt="faq"></img></a>
                </div>
            </div>

            <div className="p_container">
                <div className="image_pro" data-desc={"Login page template"}>
                    <a href="https://mahad410.github.io/login" target="_blank" rel="noopener noreferrer"><img
                        src={login} width="100%" height="180px" alt="login"></img></a>
                </div>
            </div>
            <div className="p_container">
                <div className="image_pro" data-desc={"Testimonials template"}>
                    <a href="https://mahad410.github.io/testimonials" target="_blank" rel="noopener noreferrer"><img
                        src={testimonials} width="100%" height="180px" alt="testimonials"></img></a>
                </div>
            </div>

            <div className="p_container">
                <div className="image_pro" data-desc={"Coming Soon template"}>
                    <a href="https://mahad410.github.io/comingsoon" target="_blank" rel="noopener noreferrer"><img
                        src={comingsoon} width="100%" height="180px" alt="comingsoon"></img></a>
                </div>
            </div>
            <div className="p_container">
                <div className="image_pro" data-desc={"Huddle landing page template"}>
                    <a href="https://mahad410.github.io/huddle" target="_blank" rel="noopener noreferrer"><img
                        src={huddle} width="100%" height="180px" alt="huddle"></img></a>
                </div>
            </div>

            <div className="p_container">
                <div className="image_pro" data-desc={"Display information and stats template"}>
                    <a href="https://mahad410.github.io/stats" target="_blank" rel="noopener noreferrer"><img
                        src={insight} width="100%" height="180px" alt="insight"></img></a>
                </div>
            </div>
            <div className="p_container">
                <div className="image_pro" data-desc={"Dynamic Chart template using chart.js"}>
                    <a href="https://mahad410.github.io/chart" target="_blank" rel="noopener noreferrer"><img
                        src={chart} width="100%" height="180px" alt="chart"></img></a>
                </div>
            </div>

            <div className="p_container">
                <div className="image_pro" data-desc={"Comparison template"}>
                    <a href="https://mahad410.github.io/compare-cars" target="_blank" rel="noopener noreferrer"><img
                        src={comparison} width="100%" height="180px" alt="comparison"></img></a>
                </div>
            </div>
            <div className="p_container">
                <div className="image_pro" data-desc={"Kata.ai support form and footer"}>
                    <a href="https://mahad410.github.io/form" target="_blank" rel="noopener noreferrer"><img
                        src={form} width="100%" height="180px" alt="form"></img></a>
                </div>
            </div>
            <div className="p_container">
                <div className="image_pro" data-desc={"The ping coming soon template"}>
                    <a href="https://mahad410.github.io/ping" target="_blank" rel="noopener noreferrer"><img
                        src={ping} width="100%" height="180px" alt="ping"></img></a>
                </div>
            </div>


            <div className="p_container">
                <div className="image_pro" data-desc={"The twitter homepage and profile page"}>
                    <a href="https://mahad410.github.io/twitter" target="_blank" rel="noopener noreferrer"><img
                        src={twitter} width="100%" height="180px" alt="spotify"></img></a>
                </div>
            </div>
            <div className="p_container">
                <div className="image_pro" data-desc={"Characters into ASCII converter"}>
                    <a href="https://mahad410.github.io/ascii" target="_blank" rel="noopener noreferrer"><img
                        src={ascii} width="100%" height="180px" alt="ascii"></img></a>
                </div>
            </div>
            <div className="p_container">
                <div className="image_pro" data-desc={"The Mouse created with pure css."}>
                    <a href="https://mahad410.github.io/mouse.purecss" target="_blank" rel="noopener noreferrer"><img
                        src={mouse} width="100%" height="180px" alt="mouse"></img></a>
                </div>
            </div>

        </div>
    )
}

export default Project;