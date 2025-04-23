<script setup lang="ts">

import { useRoute } from 'vue-router';
import data from '../services/DataService'

const route = useRoute()
let portfolioId = route.params.id as string
let portfolio = data.data().portfolios.find(p => p.id == parseInt(portfolioId))
</script>

<template>
    <div class="section-header">
        <div class="row justify-content-center">
            <div class="col-md-8 text-center">
                <h2 class="fs-bolder-custom">{{ portfolio?.name }}</h2>
                <p>{{ portfolio?.smallDescription }}</p>
            </div>
        </div>
    </div>

    <div class="section-body">
        <div class="row justify-content-center">
            <div class="col-md-11">
                <div class="row">
                    <div class="col-md-3 informations-project">
                        <ul class="list-group">
                            <li class="list-group-item">
                                <span class="name">Client :</span>
                                <span class="value">{{ portfolio?.client }}</span>
                            </li>
                            <li class="list-group-item">
                                <span class="name">Poste occupé :</span>
                                <span class="value">{{ portfolio?.position }}</span>
                            </li>
                            <li class="list-group-item">
                                <span class="name">Website :</span>
                                <span class="value">
                                    <a :href="portfolio?.link" target="_blank">
                                        Lien
                                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"
                                            height="22px">
                                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                stroke-linejoin="round">
                                            </g>
                                            <g id="SVGRepo_iconCarrier">
                                                <title></title>
                                                <g id="Complete">
                                                    <g id="arrow-right">
                                                        <g>
                                                            <polyline data-name="Right" fill="none" id="Right-2"
                                                                points="16.4 7 21.5 12 16.4 17" stroke="#000000"
                                                                stroke-linecap="round" stroke-linejoin="round"
                                                                stroke-width="2"></polyline>
                                                            <line fill="none" stroke="#000000" stroke-linecap="round"
                                                                stroke-linejoin="round" stroke-width="2" x1="2.5"
                                                                x2="19.2" y1="12" y2="12"></line>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </a>
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-9 details-project">
                        <div class="image">
                            <img :src="portfolio?.img" alt="" width="100%">
                        </div>

                        <div class="description mt-4">{{ portfolio?.context }}</div>

                        <div class="requirements">
                            <h3 class="title">Objectifs</h3>
                            <ul>
                                <li v-for="goal in portfolio?.goals">{{ goal.name }}</li>
                            </ul>
                        </div>

                        <div class="overview" style="display: none;">
                            <h3 class="title">Project overview</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                dolor.
                                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                                ridiculus mus.
                                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat
                                massa quis enim.
                                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                                rhoncus ut, imperdiet a,
                                venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
                                Cras dapibus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>