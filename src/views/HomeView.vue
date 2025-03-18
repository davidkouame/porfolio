<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
   <section>
                <div class="row">
                    <div class="col-md-10">
                        <h2>Bonjour, Je suis un développeur fullstack</h2>
                        <p>Je suis un ingénieur logiciel spécialisé dans le développement des application scalables.<br>Explore mon<a href="#"> blog</a>, <a href="#">porfolio</a>, et <a href="#">resumé en ligne</a>.</p>
                        <button class="btn btn-custom">View Portfolio</button>
                        <button class="btn btn-dark">View Resume</button>
                    </div>
                    <div class="col-md-2">
                        <img src="./assets/img/profile.png" alt="">
                    </div>
               </div>
               <div class="row">
                    <div class="mt-5 d-flex justify-content-start">
                        <div class="me-5">
                            <h3 class="block-numbers">5</h3>
                            <p class="block-text">Years of Experience</p>
                        </div>
                        <div class="me-5">
                            <h3 class="block-numbers">110</h3>
                            <p class="block-text">Projects Completed</p>
                        </div>
                        <div>
                            <h3 class="block-numbers">6k</h3>
                            <p class="block-text">Clients Worldwide</p>
                        </div>
                    </div>
               </div>
            </section>

            <section class="savoire-faire">
                <div class="row"><h1 class="col-md-12">Qu'est ce que je fais</h1></div>
                <div class="row description">
                    J'ai plus de 10 ans d'expérience dans la création de logiciels pour des clients du monde entier. 
                    Vous trouverez ci-dessous un bref aperçu de mes principales compétences techniques et des technologies que j'utilise.
                    Vous voulez en savoir plus sur mon expérience ? Consultez mon CV en ligne et mon portefeuille de projets. 
                </div>
                <div class="row blog-savoirs">
                    <div class="col-md-4 blog-savoir">
                        <div class="logo">logo</div>
                        <div class="description-technogoly">lorem inpsum</div>
                    </div>
                    <div class="col-md-4 blog-savoir">
                        <div class="logo">logo</div>
                        <div class="description-technogoly">lorem inpsum</div>
                    </div>
                    <div class="col-md-4 blog-savoir">
                        <div class="logo">logo</div>
                        <div class="description-technogoly">lorem inpsum</div>
                    </div>
                </div>
            </section>

            <section class="featured-projects">
                <div class="row"><h1 class="col-md-12">Les projets fares</h1></div>
                <div class="row description">
                    Mon guide étape par étape garantit un déroulement fluide du projet, de la consultation initiale à la livraison finale. 
                    Je m'occupe de tous les détails, ce qui vous permet de vous concentrer sur ce que vous faites le mieux. 
                </div>
                <div class="row blog-featured-project">
                    <div class="col-md-4 featured-project">
                        <div class="logo">logo</div>
                        <div class="skills">
                            <span>reactjs</span>
                            <span>reactjs</span>
                            <span>reactjs</span>
                            <span>reactjs</span>
                        </div>
                    </div>
                    <div class="col-md-4 featured-project">
                        <div class="logo">logo</div>
                        <div class="skills">
                            <span>reactjs</span>
                            <span>reactjs</span>
                            <span>reactjs</span>
                            <span>reactjs</span>
                        </div>
                    </div>
                    <div class="col-md-4 featured-project">
                        <div class="logo">logo</div>
                        <div class="skills">
                            <span>reactjs</span>
                            <span>reactjs</span>
                            <span>reactjs</span>
                            <span>reactjs</span>
                        </div>
                    </div>
                </div>
            </section>
</template>
