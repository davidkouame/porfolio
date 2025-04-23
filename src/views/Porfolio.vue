<template>
    <div class="section-header">
        <div class="row justify-content-center">
            <div class="col-md-8 text-center">
                <h2 class="fs-bolder-custom">Mes réalisations</h2>
                <p>
                    Explorez une collection de projets où la créativité rencontre le code.
                    Qu'il s'agisse de conceptions élégantes et réactives ou d'expériences utilisateur intuitives,
                    chaque projet représente une solution unique adaptée aux besoins du client. Plongez dans cette
                    collection pour voir comment les idées se transforment en réalités numériques.
                </p>
            </div>
        </div>
    </div>

    <div class="section-body">
        <div class="row justify-content-center">
            <div class="col-md-11">
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
            </div>
        </div>
    </div>
</template>