<script setup lang="ts">

import data from '../services/DataService'
import fileUrl from '../data/CV KOUAME DAVID.pdf'

let resume = data.data().resume

</script>

<template>
    <div class="section-header">
        <section>
            <div class="row justify-content-center">
                <div class="col-md-3 resume">
                    <h3>Mon curriculum vitae</h3>
                    <a :href="fileUrl" class="btn btn-primary" target="_blank" rel="noopener"
                        download="CV_KOUAME_DAVID.pdf">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"
                            stroke-width="0.24000000000000005" style="width: 28px;">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M23 22C23 22.5523 22.5523 23 22 23H2C1.44772 23 1 22.5523 1 22C1 21.4477 1.44772 21 2 21H22C22.5523 21 23 21.4477 23 22Z"
                                    fill="#ffffff"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M13.3099 18.6881C12.5581 19.3396 11.4419 19.3396 10.6901 18.6881L5.87088 14.5114C4.47179 13.2988 5.32933 11 7.18074 11L9.00001 11V3C9.00001 1.89543 9.89544 1 11 1L13 1C14.1046 1 15 1.89543 15 3L15 11H16.8193C18.6707 11 19.5282 13.2988 18.1291 14.5114L13.3099 18.6881ZM11.3451 16.6091C11.7209 16.9348 12.2791 16.9348 12.6549 16.6091L16.8193 13H14.5C13.6716 13 13 12.3284 13 11.5V3L11 3V11.5C11 12.3284 10.3284 13 9.50001 13L7.18074 13L11.3451 16.6091Z"
                                    fill="#ffffff"></path>
                            </g>
                        </svg>
                        <span>Télécharger mon cv</span>
                    </a>
                </div>
            </div>
        </section>
    </div>

    <div class="section-body">
        <div class="row justify-content-center">
            <div class="col-md-11">
                <div data-aos="fade-up" class="bgn2-color p-4 p-sm-8 p-md-15 rounded-5 brn4 aos-init aos-animate">
                    <div
                        class="d-flex flex-wrap justify-content-between align-items-center gap-3 br-bottom-n3 pb-3 pb-md-6">
                        <div>
                            <h2 class="display-three p1-color fw-semibold">{{ resume.name }}</h2>
                            <span class="n4-color fs-six fw-bolder">Ingénieur logiciel</span>
                        </div>
                        <div class="ps-5 br-left-n3">
                            <ul class="d-flex flex-column gap-3">
                                <li>
                                    <a href="tel:+2250747886905"
                                        class="d-flex gap-2 align-items-center n4-color icon-information">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                stroke-linejoin="round"></g>
                                            <g id="SVGRepo_iconCarrier">
                                                <path
                                                    d="M14.3308 15.9402L15.6608 14.6101C15.8655 14.403 16.1092 14.2384 16.3778 14.1262C16.6465 14.014 16.9347 13.9563 17.2258 13.9563C17.517 13.9563 17.8052 14.014 18.0739 14.1262C18.3425 14.2384 18.5862 14.403 18.7908 14.6101L20.3508 16.1702C20.5579 16.3748 20.7224 16.6183 20.8346 16.887C20.9468 17.1556 21.0046 17.444 21.0046 17.7351C21.0046 18.0263 20.9468 18.3146 20.8346 18.5833C20.7224 18.8519 20.5579 19.0954 20.3508 19.3L19.6408 20.02C19.1516 20.514 18.5189 20.841 17.8329 20.9541C17.1469 21.0672 16.4427 20.9609 15.8208 20.6501C10.4691 17.8952 6.11008 13.5396 3.35083 8.19019C3.03976 7.56761 2.93414 6.86242 3.04914 6.17603C3.16414 5.48963 3.49384 4.85731 3.99085 4.37012L4.70081 3.65015C5.11674 3.23673 5.67937 3.00464 6.26581 3.00464C6.85225 3.00464 7.41488 3.23673 7.83081 3.65015L9.40082 5.22021C9.81424 5.63615 10.0463 6.19871 10.0463 6.78516C10.0463 7.3716 9.81424 7.93416 9.40082 8.3501L8.0708 9.68018C8.95021 10.8697 9.91617 11.9926 10.9608 13.04C11.9994 14.0804 13.116 15.04 14.3008 15.9102L14.3308 15.9402Z"
                                                    stroke="#79aba8" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round"></path>
                                                <path
                                                    d="M18.2109 8.84009C18.0578 8.09677 17.6931 7.41362 17.1609 6.87256C16.6288 6.33149 15.9516 5.95549 15.2109 5.79004"
                                                    stroke="#79aba8" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round"></path>
                                                <path
                                                    d="M22 7.51001C21.6283 6.19924 20.928 5.00529 19.9655 4.04102C19.003 3.07674 17.8101 2.37408 16.5 2"
                                                    stroke="#79aba8" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round"></path>
                                            </g>
                                        </svg>
                                        {{ resume.tel }}
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:kouamedavid124@gmail.com"
                                        class="d-flex gap-2 align-items-center n4-color icon-information">
                                        <svg viewBox="0 -2.5 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000">
                                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                stroke-linejoin="round"></g>
                                            <g id="SVGRepo_iconCarrier">
                                                <title>email [#1572]</title>
                                                <desc>Created with Sketch.</desc>
                                                <defs> </defs>
                                                <g id="Page-1" stroke="none" stroke-width="1" fill="none"
                                                    fill-rule="evenodd">
                                                    <g id="Dribbble-Light-Preview"
                                                        transform="translate(-340.000000, -922.000000)" fill="#79aba8">
                                                        <g id="icons" transform="translate(56.000000, 160.000000)">
                                                            <path
                                                                d="M294,774.474 L284,765.649 L284,777 L304,777 L304,765.649 L294,774.474 Z M294.001,771.812 L284,762.981 L284,762 L304,762 L304,762.981 L294.001,771.812 Z"
                                                                id="email-[#1572]"> </path>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                        {{ resume.email }}</a>
                                </li>
                                <li class="d-flex gap-2 align-items-center n4-color" style="display: none !important;">
                                    <i class="ph ph-globe"></i> {{ resume.link }}
                                </li>
                                <li class="d-flex gap-2 align-items-center n4-color icon-information">
                                    <svg viewBox="-4 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                        xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                                        </g>
                                        <g id="SVGRepo_iconCarrier">
                                            <title>location</title>
                                            <desc>Created with Sketch Beta.</desc>
                                            <defs> </defs>
                                            <g id="Page-1" stroke="none" stroke-width="1" fill="none"
                                                fill-rule="evenodd" sketch:type="MSPage">
                                                <g id="Icon-Set-Filled" sketch:type="MSLayerGroup"
                                                    transform="translate(-106.000000, -413.000000)" fill="#79aba8">
                                                    <path
                                                        d="M118,422 C116.343,422 115,423.343 115,425 C115,426.657 116.343,428 118,428 C119.657,428 121,426.657 121,425 C121,423.343 119.657,422 118,422 L118,422 Z M118,430 C115.239,430 113,427.762 113,425 C113,422.238 115.239,420 118,420 C120.761,420 123,422.238 123,425 C123,427.762 120.761,430 118,430 L118,430 Z M118,413 C111.373,413 106,418.373 106,425 C106,430.018 116.005,445.011 118,445 C119.964,445.011 130,429.95 130,425 C130,418.373 124.627,413 118,413 L118,413 Z"
                                                        id="location" sketch:type="MSShapeGroup"> </path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                    {{ resume.city }}
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div
                        class="d-flex flex-wrap flex-md-nowrap align-items-center gap-5 gap-md-10 pb-4 pb-md-8 br-bottom-n3 pt-60">
                        <div class="resume-profile flex-shrink-0">
                            <img src="./../assets/img/profile.png" alt="profile" class="object-fit-cover" width="127"
                                height="159">
                        </div>
                        <p class="n42-color fs-seven">
                            {{ resume.resume }}
                        </p>
                    </div>

                    <div class="resume-section row g-6 pt-60 pb-60 br-bottom-n3">
                        <div class="col-md-8 col-lg-12 col-xl-8 col-xxl-9">
                            <div class="d-flex align-items-center gap-2 mb-5 mb-md-10">
                                <div class="title-line2"></div>
                                <h2 class="fs-three p1-color fw-semibold">
                                    Experiences
                                </h2>
                            </div>

                            <div class="mb-4 mb-md-6" v-for="experience in resume.experiences">
                                <div class="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center">
                                    <span class="n5-color fs-six fw-bolder">{{ experience.position }}</span>
                                    <span class="n4-color fs-eight">{{ experience.entreprise }} | {{ experience.time
                                        }}</span>
                                </div>
                                <p class="n42-color fs-seven my-2 my-md-5 text-justify">{{ experience.talking }}</p>
                                <ul class="d-flex flex-column gap-3 ms-6 ms-lg-10" v-for="task in experience.tasks">
                                    <li class="n42-color fs-seven pt-1">{{ task }}</li>
                                </ul>
                            </div>
                            <div class="mb-4 mb-md-6" style="display: none;">
                                <div class="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center">
                                    <span class="n5-color fs-six fw-bolder">Lead Software Developer</span>
                                    <span class="n4-color fs-eight">Apple | 2016 - 2019</span>
                                </div>
                                <p class="n42-color fs-seven my-2 my-md-5">
                                    Role description goes here ipsum dolor sit amet,
                                    consectetuer adipiscing elit. Aenean commodo ligula eget
                                    dolor. Aenean massa. Cum sociis natoque penatibus et
                                    magnis dis parturient montes, nascetur ridiculus mus.
                                    Donec quam felis, ultricies nec, pellentesque eu, pretium
                                    quis, sem. Donec pede justo, fringilla vel. Lorem ipsum
                                    dolor sit amet, consectetuer adipiscing elit. Aenean
                                    commodo ligula eget dolor. Aenean massa. Cum sociis
                                    natoque penatibus et magnis dis parturient montes,
                                    nascetur ridiculus mus. Donec quam felis.
                                </p>
                                <ul class="d-flex flex-column gap-3 ms-6 ms-lg-10">
                                    <li class="n42-color fs-seven">
                                        Lorem ipsum dolor sit amet, consectetuer.
                                    </li>
                                    <li class="n42-color fs-seven">
                                        Aenean commodo ligula eget dolor.
                                    </li>
                                    <li class="n42-color fs-seven">
                                        Etiam ultricies nisi vel augue.
                                    </li>
                                </ul>
                            </div>
                            <div class="mb-4 mb-md-6" style="display: none;">
                                <div class="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center">
                                    <span class="n5-color fs-six fw-bolder">Senior Software Developer</span>
                                    <span class="n4-color fs-eight">Dropbox | 2014 - 2016</span>
                                </div>
                                <p class="n42-color fs-seven my-2 my-md-5">
                                    Role description goes here ipsum dolor sit amet,
                                    consectetuer adipiscing elit. Aenean commodo ligula eget
                                    dolor. Aenean massa. Cum sociis natoque penatibus et
                                    magnis dis parturient montes, nascetur ridiculus mus.
                                    Donec quam felis, ultricies nec, pellentesque eu, pretium
                                    quis, sem. Donec pede justo, fringilla vel. Lorem ipsum
                                    dolor sit amet, consectetuer adipiscing elit. Aenean
                                    commodo ligula eget dolor. Aenean massa. Cum sociis
                                    natoque penatibus et magnis dis parturient montes,
                                    nascetur ridiculus mus. Donec quam felis.
                                </p>
                                <ul class="d-flex flex-column gap-3 ms-6 ms-lg-10">
                                    <li class="n42-color fs-seven">
                                        Lorem ipsum dolor sit amet, consectetuer.
                                    </li>
                                    <li class="n42-color fs-seven">
                                        Aenean commodo ligula eget dolor.
                                    </li>
                                </ul>
                            </div>
                            <div class="mb-4 mb-md-6" style="display: none;">
                                <div
                                    class="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center mb-2 mb-md-4">
                                    <span class="n5-color fs-six fw-bolder">Senior Developer</span>
                                    <span class="n42-color fs-eight">Uber | 2013 - 2014</span>
                                </div>
                                <p class="n42-color fs-seven">
                                    Role description goes here ipsum dolor sit amet,
                                    consectetuer adipiscing elit. Aenean commodo ligula eget
                                    dolor. Aenean massa. Cum sociis natoque penatibus et
                                    magnis dis parturient montes, nascetur ridiculus mus.
                                    Donec quam felis, ultricies nec, pellentesque eu, pretium
                                    quis, sem. Donec pede justo, fringilla vel.
                                </p>
                            </div>
                            <div class="mb-4 mb-md-6" style="display: none;">
                                <div
                                    class="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center mb-2 mb-md-4">
                                    <span class="n5-color fs-six fw-bolder">Backend Developer</span>
                                    <span class="n42-color fs-eight">Amazon | 2014 - 2016</span>
                                </div>
                                <p class="n42-color fs-seven">
                                    Role description goes here ipsum dolor sit amet,
                                    consectetuer adipiscing elit. Aenean commodo ligula eget
                                    dolor. Aenean massa. Cum sociis natoque penatibus et
                                    magnis dis parturient montes, nascetur ridiculus mus.
                                    Donec quam felis, ultricies nec, pellentesque eu, pretium
                                    quis, sem. Donec pede justo, fringilla vel.
                                </p>
                            </div>
                            <div class="mb-5 mb-md-10" style="display: none;">
                                <div
                                    class="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center mb-2 mb-md-4">
                                    <span class="n5-color fs-six fw-bolder">Frontend Developer</span>
                                    <span class="n42-color fs-eight">Startup | 2013 - 2014</span>
                                </div>
                                <p class="n42-color fs-seven">
                                    Role description goes here ipsum dolor sit amet,
                                    consectetuer adipiscing elit. Aenean commodo ligula eget
                                    dolor. Aenean massa. Cum sociis natoque penatibus et
                                    magnis dis parturient montes, nascetur ridiculus mus.
                                    Donec quam felis, ultricies nec, pellentesque eu, pretium
                                    quis, sem. Donec pede justo, fringilla vel.
                                </p>
                            </div>

                            <div class="d-flex align-items-center gap-2 mb-5 mb-md-10"
                                style="display: none !important;">
                                <div class="title-line2"></div>
                                <h2 class="fs-three p1-color fw-semibold">Projects</h2>
                            </div>
                            <div class="mb-4 mb-md-6" style="display: none;">
                                <div
                                    class="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center mb-2 mb-md-4">
                                    <span class="n5-color fs-six fw-bolder">Project Lorem Ipsum</span>
                                    <span class="n42-color fs-eight">Open Source</span>
                                </div>
                                <p class="n42-color fs-seven">
                                    You can use this section for your side projects. You
                                    can&nbsp;provide a project link here&nbsp;as well. Lorem ipsum dolor
                                    sit amet, consectetuer adipiscing elit. Aenean commodo
                                    ligula eget dolor. Aenean massa. Cum sociis natoque
                                    penatibus et magnis dis parturient montes, nascetur
                                    ridiculus mus.
                                </p>
                            </div>
                        </div>

                        <!-- right side  -->
                        <div class="col-md-4 col-lg-12 col-xl-4 col-xxl-3">
                            <div class="ps-4 ps-xxl-7 br-left-n3 d-flex flex-column gap-8 gap-md-15">
                                <!-- skills  -->
                                <div>
                                    <div class="d-flex align-items-center gap-2 mb-5 mb-md-10">
                                        <div class="title-line2"></div>
                                        <h2 class="fs-three p1-color fw-semibold">Compétences</h2>
                                    </div>

                                    <div class="mb-3 mb-md-6">
                                        <h5 class="fs-six n5-color fw-bolder mb-2 mb-md-4">
                                            Technique
                                        </h5>
                                        <ul class="d-flex flex-column gap-3 ms-6 ms-lg-10">
                                            <li class="n4-color fs-seven" v-for="technique in resume.skills.technicals">
                                                {{ technique }}</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h5 class="fs-six n5-color fw-bolder mb-2 mb-md-4">
                                            Professionnel
                                        </h5>
                                        <ul class="d-flex flex-column gap-3 ms-6 ms-lg-10">
                                            <li class="n4-color fs-seven"
                                                v-for="professionnal in resume.skills.professionnals">{{ professionnal
                                                }}</li>
                                        </ul>
                                    </div>
                                </div>

                                <!-- education  -->
                                <div class="mt-5" id="education">
                                    <div class="d-flex align-items-center gap-2 mb-3 mb-md-6">
                                        <div class="title-line2"></div>
                                        <h2 class="fs-three p1-color fw-semibold">Education</h2>
                                    </div>
                                    <div class="d-flex gap-2 mb-3" v-for="education in resume.educations">
                                        <div class="col-md-1">
                                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                    stroke-linejoin="round"></g>
                                                <g id="SVGRepo_iconCarrier">
                                                    <path
                                                        d="M2 10L12 4.5L22 10L17.9457 12.2298M2 10L6.05427 12.2298M2 10V16M6 17.5V12.5C6 12.4084 6.01848 12.3182 6.05427 12.2298M6 17.5C6 18.6046 8.68629 19.5 12 19.5C15.3137 19.5 18 18.6046 18 17.5M6 17.5C6 16.3954 8.68629 15.5 12 15.5C15.3137 15.5 18 16.3954 18 17.5M18 17.5V12.5C18 12.4084 17.9815 12.3182 17.9457 12.2298M17.9457 12.2298C17.9334 12.1993 17.9189 12.1691 17.9025 12.139C17.3927 11.2067 14.9439 10.5 12 10.5C9.05606 10.5 6.60733 11.2067 6.09749 12.139C6.08105 12.1691 6.06663 12.1993 6.05427 12.2298"
                                                        stroke="#79aba8" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round"></path>
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="col-md-11">
                                            <span class="n4-color fs-seven">{{ education.name }}</span>
                                            <span class="n4-color fs-eleven"><b>{{ education.years }}</b></span>
                                        </div>
                                    </div>
                                </div>

                                <!-- awards  -->
                                <div class="mt-5">
                                    <div class="d-flex align-items-center gap-2 mb-3 mb-md-6">
                                        <div class="title-line2"></div>
                                        <h2 class="fs-three p1-color fw-semibold">Certifications</h2>
                                    </div>
                                    <div class="d-flex gap-2 mb-3" v-for="certification in resume.certifications">
                                        <div class="col-md-1">
                                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                    stroke-linejoin="round"></g>
                                                <g id="SVGRepo_iconCarrier">
                                                    <path
                                                        d="M12 14V17M12 14C9.58104 14 7.56329 12.2822 7.10002 10M12 14C14.419 14 16.4367 12.2822 16.9 10M17 5H19.75C19.9823 5 20.0985 5 20.1951 5.01921C20.5918 5.09812 20.9019 5.40822 20.9808 5.80491C21 5.90151 21 6.01767 21 6.25C21 6.94698 21 7.29547 20.9424 7.58527C20.7056 8.77534 19.7753 9.70564 18.5853 9.94236C18.2955 10 17.947 10 17.25 10H17H16.9M7 5H4.25C4.01767 5 3.90151 5 3.80491 5.01921C3.40822 5.09812 3.09812 5.40822 3.01921 5.80491C3 5.90151 3 6.01767 3 6.25C3 6.94698 3 7.29547 3.05764 7.58527C3.29436 8.77534 4.22466 9.70564 5.41473 9.94236C5.70453 10 6.05302 10 6.75 10H7H7.10002M12 17C12.93 17 13.395 17 13.7765 17.1022C14.8117 17.3796 15.6204 18.1883 15.8978 19.2235C16 19.605 16 20.07 16 21H8C8 20.07 8 19.605 8.10222 19.2235C8.37962 18.1883 9.18827 17.3796 10.2235 17.1022C10.605 17 11.07 17 12 17ZM7.10002 10C7.03443 9.67689 7 9.34247 7 9V4.57143C7 4.03831 7 3.77176 7.09903 3.56612C7.19732 3.36201 7.36201 3.19732 7.56612 3.09903C7.77176 3 8.03831 3 8.57143 3H15.4286C15.9617 3 16.2282 3 16.4339 3.09903C16.638 3.19732 16.8027 3.36201 16.901 3.56612C17 3.77176 17 4.03831 17 4.57143V9C17 9.34247 16.9656 9.67689 16.9 10"
                                                        stroke="#79aba8" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round"></path>
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="col-md-11">
                                            <span class="n4-color fs-seven" style="display: block;">{{
                                                certification.name }}</span>
                                            <span class="n4-color fs-eleven"><b>{{ certification.year }}</b></span>
                                        </div>
                                    </div>
                                </div>

                                <!-- Languages  -->
                                <div class="mt-5">
                                    <div class="d-flex align-items-center gap-2 mb-3 mb-md-6">
                                        <div class="title-line2"></div>
                                        <h2 class="fs-three p1-color fw-semibold">Languages</h2>
                                    </div>
                                    <ul class="d-flex flex-column gap-3 ms-6 ms-lg-10"
                                        v-for="language in resume.languages">
                                        <li class="n4-color fs-seven">{{ language.name }}({{ language.level }})</li>
                                    </ul>
                                </div>

                                <!-- Interests  -->
                                <div class="mt-5">
                                    <div class="d-flex align-items-center gap-2 mb-3 mb-md-6">
                                        <div class="title-line2"></div>
                                        <h2 class="fs-three p1-color fw-semibold">Intérêts</h2>
                                    </div>
                                    <ul class="d-flex flex-column gap-3 ms-6 ms-lg-10"
                                        v-for="interest in resume.interests">
                                        <li class="n4-color fs-seven">{{ interest }}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        class="d-flex flex-wrap gap-2 gap-md-3 gap-md-5 align-items-center justify-content-center mt-4 mt-md-8">
                        <a href="https://github.com/davidkouame" class="d-flex gap-1 align-items-center resume-icon"
                            target="_blank">
                            <div class="social-icon">
                                <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <title>github [#142]</title>
                                        <desc>Created with Sketch.</desc>
                                        <defs> </defs>
                                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g id="Dribbble-Light-Preview"
                                                transform="translate(-140.000000, -7559.000000)" fill="#79aba8">
                                                <g id="icons" transform="translate(56.000000, 160.000000)">
                                                    <path
                                                        d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                                                        id="github-[#142]"> </path>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <span class="fs-nine n4-color">github.com/davidkouame</span>
                        </a>
                        <a href="https://linkedin.com/in/davidkouame" target="_blank"
                            class="d-flex gap-1 align-items-center resume-icon">
                            <div class="social-icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z"
                                            fill="#79aba8"></path>
                                        <path
                                            d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z"
                                            fill="#79aba8"></path>
                                        <path
                                            d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z"
                                            fill="#79aba8"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"
                                            fill="#79aba8"></path>
                                    </g>
                                </svg>
                            </div>
                            <span class="fs-nine n4-color">linkedin.com/in/davidkouame</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import '../assets/porfolio.css';
</style>