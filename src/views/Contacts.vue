<script setup lang="ts">
import { ref, reactive } from 'vue'
const url = "https://nextjs-boilerplate-tau-henna-30.vercel.app/api/mail"

const store = reactive({
    error: false,
    form: {
        name: '',
        email: '',
        subject: '',
        message: ''
    },
    showNotif() {
        this.error = true
    },
    clear() {
        this.form.name = '';
        this.form.email = '';
        this.form.subject = '';
        this.form.message = '';
    },
    sendMail() {
        let subject = this.form.subject;
        let html = `<b>Nom: ${this.form.name}</b><br>
                    <b>Email : ${this.form.email}</b><br>
                    <b>Sujet: ${subject}</b><br>
                    <b>Message:${this.form.message}</b><br>
                    <b>`;
        const body = JSON.stringify({
            to: 'kouamedavid124@gmail.com',
            subject: subject,
            html: html,
            text: this.form.message,
            from: "Demande d'information <" + this.form.email + ">"
        });
        fetch(url, {
            method: 'POST',
            body: body
        })
            .then((res) => res.json())
            .then((json) => {
                this.clear();
                // this.showNotif()
            })
            .catch((err) => {

            })
    }
})

const submit = () => {
    store.sendMail();
    store.showNotif();
    store.clear();
}
</script>

<template>
    <div class="section-header">
        <div class="row justify-content-center">
            <div class="col-md-8 text-center">
                <h2 class="fs-bolder-custom">Contacts</h2>
                <p>
                    Vous souhaitez m'engager pour votre projet ou simplement me saluer ? Vous pouvez remplir le
                    formulaire de contact ci-dessous ou m'envoyer un courriel à <a
                        href="mailto:kouamedavid124@gmail.com" class="link-mail">kouamedavid124@gmail.com</a>.
                </p>
            </div>
        </div>
    </div>

    <div class="section-body">
        <div class="row justify-content-center">
            <div class="col-md-11">
                <section class="pt-10 pb-120 mt-10 mt-lg-0">
                    <div class="container mt-8 mt-md-15">
                        <div data-aos="fade-left" class="aos-init aos-animate">
                            <div class="d-flex align-items-center gap-2">
                                <div class="title-line"></div>
                                <h2 class="display-four n5-color fw-semibold">
                                    Détails contacts
                                </h2>
                            </div>
                            <p class="fs-seven n4-color mt-2 mt-md-4" style="display: none;">
                                If you are going to use a passage of Lorem Ipsum, you need to be
                                sure there isn't anything embarrassing hidden in the middle of
                                text.
                            </p>
                        </div>

                        <div data-aos="fade-up"
                            class="d-flex flex-wrap gap-3 gap-md-6 align-items-center justify-content-between mt-8 mt-md-15 aos-init aos-animate">
                            <div class="d-flex gap-3 align-items-center p-3 p-md-4 br1-left">
                                <i class="ph ph-device-mobile-camera p1-color fs-one"></i>
                                <div>
                                    <span class="n5-color fs-five fw-semibold d-block mb-2">Téléphone</span>
                                    <a href="https://api.whatsapp.com/send?phone=002250747886905" target="_blank"
                                        class="n4-color fs-nine remove-color">+225
                                        0747886905</a>
                                </div>
                            </div>
                            <div class="d-flex gap-3 align-items-center p-3 p-md-4 br1-left">
                                <i class="ph ph-compass p1-color fs-one"></i>
                                <div>
                                    <span class="n5-color fs-five fw-semibold d-block mb-2">Localisation</span>
                                    <span class="n4-color fs-nine">Abidjan - Abobo</span>
                                </div>
                            </div>
                            <div class="d-flex gap-3 align-items-center p-3 p-md-4 br1-left">
                                <i class="ph ph-envelope-open p1-color fs-one"></i>
                                <div>
                                    <span class="n5-color fs-five fw-semibold d-block mb-2">Email</span>
                                    <a href="mailto:someone@example.com"
                                        class="n4-color fs-nine remove-color">kouamedavid124@gmail.com</a>
                                </div>
                            </div>
                        </div>

                        <div data-aos="zoom-in" class="mt-8 mt-md-15 aos-init aos-animate">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3747016.8778039054!2d87.7035567133411!3d23.489442669650543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1719998700959!5m2!1sen!2sbd"
                                style="border: 0" allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade" class="w-100 h-400"></iframe>
                        </div>
                    </div>
                </section>

                <section class="pb-120">
                    <div class="container">
                        <div data-aos="fade-up" class="aos-init aos-animate">
                            <div class="d-flex align-items-center gap-2">
                                <div class="title-line"></div>
                                <h2 class="display-four n5-color fw-semibold">Contactez-moi</h2>
                            </div>
                            <p class="fs-seven n4-color mt-2 mt-md-4" style="display: none;">
                                Si vous voulez me joindre, vous pouvez m'envoyer un email ou me laisser un message
                                sur mon whatsapp.
                            </p>
                        </div>
                        <form data-aos="zoom-in" id="contact-form" autocomplete="off"
                            class="mt-8 mt-md-15 p-5 p-md-10 rounded-5 brn4 aos-init aos-animate"
                            style="display: none;">
                            <div class="d-flex flex-wrap flex-md-nowrap gap-3 gap-md-6 mb-3 mb-md-6">
                                <div
                                    class="d-flex align-items-center gap-2 px-3 px-md-5 py-2 py-md-4 rounded-2 brn4 w-100">
                                    <i class="ph ph-octagon p1-color fs-six mb-1"></i>
                                    <input class="n5-color border-0" placeholder="Your Name*" type="text" id="name"
                                        autocomplete="off" required="">
                                </div>
                                <div
                                    class="d-flex align-items-center gap-2 px-3 px-md-5 py-2 py-md-4 rounded-2 brn4 w-100">
                                    <i class="ph ph-envelope p1-color fs-six mb-1"></i>
                                    <input class="n5-color border-0" placeholder="Email address*" type="email"
                                        id="email" autocomplete="off" required="">
                                </div>
                            </div>
                            <div class="d-flex flex-wrap flex-md-nowrap gap-3 gap-md-6">
                                <div
                                    class="d-flex align-items-center gap-2 px-3 px-md-5 py-2 py-md-4 rounded-2 brn4 w-100">
                                    <i class="ph ph-device-mobile-camera p1-color fs-six mb-1"></i>
                                    <input class="n5-color border-0" placeholder="Phone*" type="number" id="phone"
                                        autocomplete="off" required="">
                                </div>
                                <div
                                    class="d-flex align-items-center gap-2 px-3 px-md-5 py-2 py-md-4 rounded-2 brn4 w-100">
                                    <i class="ph ph-map-pin p1-color fs-six mb-1"></i>
                                    <input class="n5-color border-0" placeholder="Location*" type="text" id="location"
                                        autocomplete="off" required="">
                                </div>
                            </div>
                            <div class="mt-3 mt-md-6">
                                <textarea class="n5-color px-3 px-md-6 py-2 py-md-4 rounded-2 brn4 w-100 h-120"
                                    placeholder="Your Message:" id="message" autocomplete="off"></textarea>
                            </div>

                            <div class="d-flex gap-2 align-items-center mt-3 mt-md-5">
                                <input id="check" type="checkbox" class="cursor-pointer checkbox-single">
                                <label for="check" class="n4-color fs-nine cursor-pointer">
                                    Save my name, email, and website in this browser for the next
                                    time.
                                </label>
                            </div>
                            <button id="contact-submit-btn"
                                class="primary-btn fw-medium px-3 px-md-6 py-2 py-md-4 rounded-pill mt-5 mt-md-10">
                                Send Message
                                <span class="primary-btnSpan"></span></button>
                        </form>
                        <div class="alert alert-success alert-dismissible fade show mt-2" role="alert"
                            v-if="store.error">
                            Votre message a été transmis avec succès!
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form @submit.prevent="submit" class="php-email-form mt-5">
                            <div class="row">
                                <div class="form-group col-md-6">
                                    <label for="name">Votre nom</label>
                                    <input v-model="store.form.name" type="text" name="name" class="form-control"
                                        required="">
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="email">Votre email</label>
                                    <input v-model="store.form.email" type="email" class="form-control" name="email"
                                        required="">
                                </div>
                            </div>
                            <div class="form-group mt-4">
                                <label for="subject">Sujet</label>
                                <input v-model="store.form.subject" type="text" class="form-control" name="subject"
                                    required="">
                            </div>
                            <div class="form-group mt-4">
                                <label for="message">Message</label>
                                <textarea id="message" class="form-control" v-model="store.form.message" rows="10"
                                    required=""></textarea>
                            </div>
                            <div class="text-center mt-4">
                                <button type="submit" class="btn btn-primary btn-send">Soumettre</button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>