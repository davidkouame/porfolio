<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
    <div class="row">
      <nav class="col-md-3">
        <div class="sidebar d-flex flex-column align-items-center">
          <div class="profile">
              <img src="./assets/img/profile.png" alt="Profile Picture" class="profile-pic mb-3">
          </div>
          <h5 class="mt-4 n5-color fw-semibold fs-five text-cente">Kouamé david</h5>
          <p>Développeur Java</p> 
          <div class="d-flex justify-content-center gap-2 align-items-center">
              <a href="javascript:void(0)" class="social-icon p1-color">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                  </svg>
              </a>
              <a href="javascript:void(0)" class="social-icon p1-color">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                    </svg>
              </a>
          </div>
          <div class="line-divider my-4 my-md-8"></div>
          <div class="menu-list">
            <ul class="d-flex flex-column gap-3">
                <li class="rounded-3 bg1-color">
                  <router-link to="/" class="d-flex align-items-center gap-2 n11-color fs-eight px-3 py-2">
                    <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" width="20" height="20"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>profile [#1335]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke-width="0.0002" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-420.000000, -2159.000000)" fill="#fff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M374,2009 C371.794,2009 370,2007.206 370,2005 C370,2002.794 371.794,2001 374,2001 C376.206,2001 378,2002.794 378,2005 C378,2007.206 376.206,2009 374,2009 M377.758,2009.673 C379.124,2008.574 380,2006.89 380,2005 C380,2001.686 377.314,1999 374,1999 C370.686,1999 368,2001.686 368,2005 C368,2006.89 368.876,2008.574 370.242,2009.673 C366.583,2011.048 364,2014.445 364,2019 L366,2019 C366,2014 369.589,2011 374,2011 C378.411,2011 382,2014 382,2019 L384,2019 C384,2014.445 381.417,2011.048 377.758,2009.673" id="profile-[#1335]"> </path> </g> </g> </g> </g></svg>  
                    <span>A propos</span>
                  </router-link>
                </li>
                <li class="rounded bg1-color">
                  <router-link to="/porfolio" class="d-flex align-items-center gap-2 n11-color fs-eight px-3 py-2">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"  width="20" height="20">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296" stroke="#fff" stroke-width="2.28" stroke-linecap="round"></path> <path d="M13.9868 5L12.9934 8.70743M11.8432 13L10.0132 19.8297" stroke="#fff" stroke-width="2.28" stroke-linecap="round"></path> <path d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296" stroke="#fff" stroke-width="2.28" stroke-linecap="round"></path> </g>
                        </svg>
                        <span>Porfolio</span>
                  </router-link>
                </li>
                <li class="rounded bg1-color">
                  <router-link to="/services" class="d-flex align-items-center gap-2 n11-color fs-eight px-3 py-2">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve" fill="#000000" width="20" height="20">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle fill="none" stroke="#fff" stroke-width="2.976" stroke-miterlimit="10" cx="11.9" cy="20.1" r="5.8"></circle> <line fill="none" stroke="#fff" stroke-width="2.976" stroke-miterlimit="10" x1="3.9" y1="23.4" x2="6.6" y2="22.3"></line> <line fill="none" stroke="#fff" stroke-width="2.976" stroke-miterlimit="10" x1="17.2" y1="17.9" x2="19.9" y2="16.8"></line> <line fill="none" stroke="#fff" stroke-width="2.976" stroke-miterlimit="10" x1="8.6" y1="12.1" x2="9.7" y2="14.8"></line> <line fill="none" stroke="#fff" stroke-width="2.976" stroke-miterlimit="10" x1="14.1" y1="25.4" x2="15.2" y2="28.1"></line> <line fill="none" stroke="#fff" stroke-width="2.976" stroke-miterlimit="10" x1="3.9" y1="16.8" x2="6.6" y2="17.9"></line> <line fill="none" stroke="#fff" stroke-width="2.976" stroke-miterlimit="10" x1="17.2" y1="22.3" x2="19.9" y2="23.4"></line> <line fill="none" stroke="#fff" stroke-width="2.976" stroke-miterlimit="10" x1="15.2" y1="12.1" x2="14.1" y2="14.8"></line> <line fill="none" stroke="#fff" stroke-width="2.976" stroke-miterlimit="10" x1="9.7" y1="25.4" x2="8.6" y2="28.1"></line> <circle fill="none" stroke="#fff" stroke-width="2.976" stroke-miterlimit="10" cx="22.5" cy="9.5" r="4.7"></circle> <line fill="none" stroke="#fff" stroke-width="2.976" stroke-miterlimit="10" x1="17.5" y1="14.5" x2="19.2" y2="12.8"></line> <line fill="none" stroke="#fff" stroke-width="2.976" stroke-miterlimit="10" x1="25.8" y1="6.2" x2="27.4" y2="4.6"></line> <line fill="none" stroke="#fff" stroke-width="2.976" stroke-miterlimit="10" x1="17.5" y1="4.6" x2="19.2" y2="6.2"></line> <line fill="none" stroke="#fff" stroke-width="2.976" stroke-miterlimit="10" x1="25.8" y1="12.8" x2="27.4" y2="14.5"></line> <line fill="none" stroke="#fff" stroke-width="2.976" stroke-miterlimit="10" x1="15.5" y1="9.5" x2="17.8" y2="9.5"></line> <line fill="none" stroke="#fff" stroke-width="2.976" stroke-miterlimit="10" x1="27.2" y1="9.5" x2="29.5" y2="9.5"></line> <line fill="none" stroke="#fff" stroke-width="2.976" stroke-miterlimit="10" x1="22.5" y1="2.5" x2="22.5" y2="4.8"></line> <line fill="none" stroke="#fff" stroke-width="2.976" stroke-miterlimit="10" x1="22.5" y1="14.2" x2="22.5" y2="16.5"></line> </g>
                        </svg>
                        <span>Services</span>
                  </router-link>
                </li>
                <li class="rounded bg1-color">
                  <router-link to="/resume" class="d-flex align-items-center gap-2 n11-color fs-eight px-3 py-2">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18 6.00002V6.75002H18.75V6.00002H18ZM15.7172 2.32614L15.6111 1.58368L15.7172 2.32614ZM4.91959 3.86865L4.81353 3.12619H4.81353L4.91959 3.86865ZM5.07107 6.75002H18V5.25002H5.07107V6.75002ZM18.75 6.00002V4.30604H17.25V6.00002H18.75ZM15.6111 1.58368L4.81353 3.12619L5.02566 4.61111L15.8232 3.0686L15.6111 1.58368ZM4.81353 3.12619C3.91638 3.25435 3.25 4.0227 3.25 4.92895H4.75C4.75 4.76917 4.86749 4.63371 5.02566 4.61111L4.81353 3.12619ZM18.75 4.30604C18.75 2.63253 17.2678 1.34701 15.6111 1.58368L15.8232 3.0686C16.5763 2.96103 17.25 3.54535 17.25 4.30604H18.75ZM5.07107 5.25002C4.89375 5.25002 4.75 5.10627 4.75 4.92895H3.25C3.25 5.9347 4.06532 6.75002 5.07107 6.75002V5.25002Z" fill="#fff"></path> <path d="M8 12H16" stroke="#fff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M8 15.5H13.5" stroke="#fff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M4 6V19C4 20.6569 5.34315 22 7 22H17C18.6569 22 20 20.6569 20 19V14M4 6V5M4 6H17C18.6569 6 20 7.34315 20 9V10" stroke="#fff" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                        <span>Resumé</span>
                      </router-link>
                </li>
                <li class="rounded bg1-color">
                  <router-link to="/contacts" class="d-flex align-items-center gap-2 n11-color fs-eight px-3 py-2">
                        <svg viewBox="0 -2.5 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>email [#fff1573]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -922.000000)" fill="#fff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M262,764.291 L254,771.318 L246,764.281 L246,764 L262,764 L262,764.291 Z M246,775 L246,766.945 L254,773.98 L262,766.953 L262,775 L246,775 Z M244,777 L264,777 L264,762 L244,762 L244,777 Z" id="email-[#fff1573]"> </path> </g> </g> </g> </g></svg>
                        <span>Contacts</span>
                      </router-link>
                </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="col-md-9">
        <router-view></router-view>
      </div>
    </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  /*width: 100%;*/
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
