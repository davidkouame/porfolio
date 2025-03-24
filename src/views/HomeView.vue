<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
    <div class="section-header">
        <section>
            <div class="row">
                <div class="col-md-8">
                    <div class="row">
                        <div class="col-md-12">
                            <h2>Bonjour, Je suis un développeur fullstack</h2>
                            <p>Je suis un ingénieur logiciel spécialisé dans le développement des application scalables.<br>Explore mon<a href="#"> blog</a>, <a href="#">porfolio</a>, et <a href="#">resumé en ligne</a>.</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 header-btn">
                            <button class="btn btn-custom view-porfolio">
                                <svg fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width: 1.5rem"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></g></svg>
                                <span>Mes réalisations</span>
                            </button>
                            <button class="btn btn-dark view-resume">
                                <svg fill="#ffffff" viewBox="0 0 32 32" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" stroke-width="1.3439999999999999" style="width: 1.5rem"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><rect height="1" width="12" x="10" y="29"></rect><rect height="1" width="12" x="10" y="2"></rect><rect height="1" width="4" x="9" y="5"></rect><rect height="1" width="4" x="9" y="9"></rect><rect height="1" width="10" x="13" y="12"></rect><rect height="1" width="3" x="9" y="12"></rect><rect height="1" width="10" x="13" y="15"></rect><rect height="1" width="3" x="9" y="15"></rect><rect height="1" width="10" x="13" y="18"></rect><rect height="1" width="3" x="9" y="18"></rect><rect height="1" width="10" x="13" y="21"></rect><rect height="1" width="3" x="9" y="21"></rect><rect height="1" width="10" x="13" y="24"></rect><rect height="1" width="3" x="9" y="24"></rect><rect height="1" transform="translate(9.5 41.5) rotate(-90)" width="20" x="15.5" y="15.5"></rect><path d="M22,2V3h2a1,1,0,0,1,1,1V6h1V4a2,2,0,0,0-2-2Z"></path><rect height="1" transform="translate(-9.5 22.5) rotate(-90)" width="20" x="-3.5" y="15.5"></rect><path d="M10,2V3H8A1,1,0,0,0,7,4V6H6V4A2,2,0,0,1,8,2Z"></path><path d="M22,30V29h2a1,1,0,0,0,1-1V26h1v2a2,2,0,0,1-2,2Z"></path><path d="M10,30V29H8a1,1,0,0,1-1-1V26H6v2a2,2,0,0,0,2,2Z"></path><rect height="5" width="1" x="9" y="5"></rect><rect height="5" width="1" x="12" y="5"></rect></g></svg>
                                <span>Mon CV</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <img src="https://portfolify-html.vercel.app/assets/images/user.jpg" alt="">
                </div>
            </div>
            <div class="row">
                <div class="mt-5 d-flex justify-content-start">
                    <div class="stat">
                        <h2 class="block-numbers">5</h2>
                        <p class="block-text">Ans d'expériences</p>
                    </div>
                    <div class="stat">
                        <h2 class="block-numbers">110</h2>
                        <p class="block-text">Projets terminés</p>
                    </div>
                    <div class="stat">
                        <h2 class="block-numbers">6k</h2>
                        <p class="block-text">Clients dans le monde</p>
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
                        Qu'est ce que je fais
                    </div>
                </h1>
            </div>
            <div class="row description">
                <div class="col-md-8">
                    J'ai plus de 10 ans d'expérience dans la création de logiciels pour des clients du monde entier. 
                    Vous trouverez ci-dessous un bref aperçu de mes principales compétences techniques et des technologies que j'utilise.
                    Vous voulez en savoir plus sur mon expérience ? Consultez mon CV en ligne et mon portefeuille de projets. 
                </div>
                <div class="col-md-4">
                    <router-link to="/resume" class="services">
                        <svg fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width: 2rem;"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></g></svg>
                        <span>Services</span>
                    </router-link>
                </div>
            </div>
            <div class="row blog-savoirs">
                <div class="col-md-3" v-for="n in 8" style="margin-top: 1rem;">
                    <div class="blog-savior">
                        <div class="logos">
                            <div class="logo">
                                <img src="https://portfolify-html.vercel.app/assets/images/js.png" alt="">
                            </div>
                        </div>
                        <div class="title">Vanilla javascript</div>
                        <div class="description-technogoly">
                            <div class="row">
                                <div class="col-md-12">
                                    List skills and technologies here. Customize as needed. Built on HTML5, Sass, and Bootstrap 5.
                                </div>
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
                    <div class="text">
                        Les projets fares
                    </div>
                </h1>
            </div>
            <div class="row description">
                <div class="col-md-8">
                    J'ai plus de 10 ans d'expérience dans la création de logiciels pour des clients du monde entier. 
                    Vous trouverez ci-dessous un bref aperçu de mes principales compétences techniques et des technologies que j'utilise.
                    Vous voulez en savoir plus sur mon expérience ? Consultez mon CV en ligne et mon portefeuille de projets. 
                </div>
                <div class="col-md-4">
                    <router-link to="/resume" class="services">
                        <svg fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width: 2rem;"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></g></svg>
                        <span>Voir plus</span>
                    </router-link>
                </div>
            </div>
            <div class="row blog-featured-project">
                <div class="col-md-6 featured-project" v-for="n in 4">
                    <div class="card-project">
                        <div class="card">
                            <div class="logo">
                                <img src="https://portfolify-html.vercel.app/assets/images/project1.png">
                            </div>
                        </div>
                        <div class="skills">
                            <div class="skill" v-for="n in 4">
                                <span>React Js</span>
                            </div>
                        </div>
                        <div class="project-title">
                            <span>Crypto Website Development for DeFi X s</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
