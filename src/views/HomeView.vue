<script setup lang="ts">

import data from '../services/DataService'
import TheWelcome from '../components/TheWelcome.vue'

let competences = data.data().competences
let portfolios = data.data().portfolios
</script>

<template>
    <div class="section-header">
        <section>
            <div class="row">
                <div class="col-md-8">
                    <div class="row">
                        <h1 class="col-md-12 what-i-do title-line-upper">
                            <div class="title-line"></div>
                            <div class="text">
                                Qui suis-je?
                            </div>
                        </h1>
                        <div class="col-md-12 who-am-i">
                            <h2 style="display: none;">Bonjour, Je suis un développeur fullstack</h2>
                            <p>
                                Je suis ingénieur logiciel, spécialisé dans le développement d’applications scalables et
                                résilientes, avec 7 ans d’expérience.
                                Envie d’en savoir plus sur mon parcours ? Découvrez mon CV en ligne et explorez mon
                                portfolio de projets.
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 header-btn">
                            <router-link to="#projects-importants" class="btn btn-custom view-porfolio">
                                <svg fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                    style="width: 1.5rem">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z">
                                        </path>
                                    </g>
                                </svg>
                                <span>Mes réalisations</span>
                            </router-link>
                            <router-link to="resume" class="btn btn-dark view-resume">
                                <svg fill="#ffffff" viewBox="0 0 32 32" data-name="Layer 1" id="Layer_1"
                                    xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"
                                    stroke-width="1.3439999999999999" style="width: 1.5rem">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <rect height="1" width="12" x="10" y="29"></rect>
                                        <rect height="1" width="12" x="10" y="2"></rect>
                                        <rect height="1" width="4" x="9" y="5"></rect>
                                        <rect height="1" width="4" x="9" y="9"></rect>
                                        <rect height="1" width="10" x="13" y="12"></rect>
                                        <rect height="1" width="3" x="9" y="12"></rect>
                                        <rect height="1" width="10" x="13" y="15"></rect>
                                        <rect height="1" width="3" x="9" y="15"></rect>
                                        <rect height="1" width="10" x="13" y="18"></rect>
                                        <rect height="1" width="3" x="9" y="18"></rect>
                                        <rect height="1" width="10" x="13" y="21"></rect>
                                        <rect height="1" width="3" x="9" y="21"></rect>
                                        <rect height="1" width="10" x="13" y="24"></rect>
                                        <rect height="1" width="3" x="9" y="24"></rect>
                                        <rect height="1" transform="translate(9.5 41.5) rotate(-90)" width="20" x="15.5"
                                            y="15.5"></rect>
                                        <path d="M22,2V3h2a1,1,0,0,1,1,1V6h1V4a2,2,0,0,0-2-2Z"></path>
                                        <rect height="1" transform="translate(-9.5 22.5) rotate(-90)" width="20"
                                            x="-3.5" y="15.5"></rect>
                                        <path d="M10,2V3H8A1,1,0,0,0,7,4V6H6V4A2,2,0,0,1,8,2Z"></path>
                                        <path d="M22,30V29h2a1,1,0,0,0,1-1V26h1v2a2,2,0,0,1-2,2Z"></path>
                                        <path d="M10,30V29H8a1,1,0,0,1-1-1V26H6v2a2,2,0,0,0,2,2Z"></path>
                                        <rect height="5" width="1" x="9" y="5"></rect>
                                        <rect height="5" width="1" x="12" y="5"></rect>
                                    </g>
                                </svg>
                                <span>Mon CV</span>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-4" id="profile">
                    <img src="https://portfolify-html.vercel.app/assets/images/user.jpg" alt="">
                </div>
            </div>
            <div class="row">
                <div class="mt-5 d-flex justify-content-start stats">
                    <div class="col stat">
                        <div class="stat-block">
                            <h2 class="block-numbers">7</h2>
                            <p class="block-text">Ans d'expérience</p>
                        </div>
                    </div>
                    <div class="col stat">
                        <div class="stat-block">
                            <h2 class="block-numbers">15</h2>
                            <p class="block-text">Projets réalisés</p>
                        </div>
                    </div>
                    <div class="stat" style="display: none;">
                        <div class="stat-block">
                            <h2 class="block-numbers">6k</h2>
                            <p class="block-text">Clients dans le monde</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <div class="section-body">
        <section class="section-body-title savoire-faire">
            <div class="row">
                <h1 class="col-md-12 what-i-do title-line-upper">
                    <div class="title-line"></div>
                    <div class="text">
                        Quelles sont mes compétences ?
                    </div>
                </h1>
            </div>
            <div class="row description">
                <div class="col-8">
                    J'ai une expertise dans le développement logiciel avec Java (8, 11, 17), PHP et JavaScript, en
                    utilisant des frameworks comme Spring Boot, Grails, Laravel et Angular. J’ai aussi une expertise en
                    bases de
                    données (MySQL, Oracle) et en architectures microservices et monolithiques. J’applique les bonnes
                    pratiques
                    telles que TDD, SOLID et Clean Code.
                </div>
                <div class="col-4">
                    <router-link to="/resume" class="services">
                        <svg fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width: 2rem;">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z">
                                </path>
                            </g>
                        </svg>
                        <span>Mes comptétences</span>
                    </router-link>
                </div>
            </div>
            <div class="row blog-savoirs">
                <div class="col-md-3 col-md-sm-4 parent-blog-savior" v-for="competence in competences">
                    <div class="blog-savior">
                        <div class="logos">
                            <div class="logo" v-for="logo in competence.logos">
                                <img :src="logo.logo" alt="" :style="logo.customCss">
                            </div>
                        </div>
                        <div class="title">{{ competence.name }}</div>
                        <div class="description-technogoly">
                            <div class="row">
                                <div class="col-md-12" v-html="competence.content"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="featured-projects">
            <div class="row">
                <h1 class="col-md-12 what-i-do title-line-upper">
                    <div class="title-line"></div>
                    <div class="text" id="projects-importants">
                        Les projets importants
                    </div>
                </h1>
            </div>
            <div class="row description">
                <div class="col-md-8">
                    Explorez ci-dessous une sélection soigneusement choisie de mes réalisations les plus significatives,
                    illustrant ma passion indéfectible pour mon métier, mon engagement envers l'excellence,
                    ainsi que l'étendue et la profondeur de mon savoir-faire acquis au fil des années.
                </div>
                <div class="col-md-4" style="display: none;">
                    <router-link to="/porfolio" class="services">
                        <svg fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width: 2rem;">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z">
                                </path>
                            </g>
                        </svg>
                        <span>Voir plus</span>
                    </router-link>
                </div>
            </div>
            <div class="row blog-featured-project">
                <div class="col-md-6 featured-project" v-for="portfolio in portfolios">
                    <div class="card-project">
                        <div class="card">
                            <div>
                                <img :src="portfolio.img" width="100%">
                            </div>
                        </div>
                        <div class="skills" style="display: none;">
                            <div class="skill" v-for="n in 4">
                                <span>React Js</span>
                            </div>
                        </div>
                        <div class="project-title">
                            <router-link :to="'/portfolio/' + portfolio.id">
                                <span>{{ portfolio.name }}</span>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
