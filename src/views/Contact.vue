<template>
  <section class="position-relative">
    <div id="particles-js"></div>
    <div class="container">
      <div class="row  text-center">
        <div class="col">
          <h1>Contact Us</h1>
        </div>
      </div>
      <!-- / .row -->
    </div>
    <!-- / .container -->
  </section>

  <!--hero section end-->

  <!--body content start-->

  <div class="page-content">
    <section>
      <div class="container">
        <div class="row align-items-end">
          <div class="col-lg-8">
            <div class="mb-5">
              <span class="badge badge-primary-soft p-2">
                <i class="la la-envelope ic-3x rotation"></i>
              </span>
              <h2 class="mt-4 mb-0">Drop A Line</h2>
              <p class="lead mb-0">
                Get in touch and let us know how we can help. Fill out the form
                and we’ll be in touch as soon as possible.
              </p>
            </div>
            <form
              id="contact-form"
              class="row"
              method="post"
              action="php/contact.php"
            >
              <div class="messages"></div>
              <div class="form-group col-md-6">
                <input
                  id="form_name"
                  type="text"
                  name="name"
                  class="form-control"
                  placeholder="First Name"
                  required="required"
                  data-error="Name is required."
                />
                <div class="help-block with-errors"></div>
              </div>
              <div class="form-group col-md-6">
                <input
                  id="form_name1"
                  type="text"
                  name="name"
                  class="form-control"
                  placeholder="Last Name"
                  required="required"
                  data-error="Name is required."
                />
                <div class="help-block with-errors"></div>
              </div>
              <div class="form-group col-md-12">
                <input
                  id="form_email"
                  type="email"
                  name="email"
                  class="form-control"
                  placeholder="Email"
                  required="required"
                  data-error="Valid email is required."
                />
                <div class="help-block with-errors"></div>
              </div>
              <div class="form-group col-md-12">
                <input
                  id="form_phone"
                  type="tel"
                  name="phone"
                  class="form-control"
                  placeholder="Phone"
                  required="required"
                  data-error="Phone is required"
                />
                <div class="help-block with-errors"></div>
              </div>
              <div class="form-group col-md-6">
                <select class="form-control">
                  <option>- Select Category</option>
                  <option>Technical Support</option>
                  <option>Sales</option>
                  <option>Partnership</option>
                  <option>Other</option>
                </select>
              </div>
              <div class="form-group col-md-6">
                <input
                  id="form_subject"
                  type="tel"
                  name="subject"
                  class="form-control"
                  placeholder="Subject"
                  required="required"
                  data-error="Subject is required"
                />
                <div class="help-block with-errors"></div>
              </div>
              <div class="form-group col-md-12">
                <textarea
                  id="form_message"
                  name="message"
                  class="form-control"
                  placeholder="Message"
                  rows="4"
                  required="required"
                  data-error="Please,leave us a message."
                ></textarea>
                <div class="help-block with-errors"></div>
              </div>
              <div class="col-md-12 mt-4">
                <button class="btn btn-primary" @click="submit">
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
          <div class="col-lg-4">
            <div class="mb-5">
              <svg
                class="feather feather-map-pin"
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1360ef"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <h4 class="mt-3">Address:</h4>
              <span class="text-black">7 Mile Beach, Grand Cayman</span>
            </div>
            <div class="mb-5">
              <svg
                class="feather feather-mail"
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1360ef"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                ></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <h4 class="mt-3">Email Us</h4>
              <a href="mailto:help@trueprice.com"> help@trueprice.com</a>
            </div>
            <div>
              <svg
                class="feather feather-phone-call"
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1360ef"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                ></path>
              </svg>
              <h4 class="mt-3">Phone Number</h4>
              <a href="tel:+0000000">+0 (000) 000-0000</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useToast } from "primevue/usetoast";

export default defineComponent({
  setup() {
    const toast = useToast();
    return { toast };
  },
  data() {
    return {};
  },
  methods: {
    submit() {
      this.toast.add({
        severity: "success",
        summary: "Success",
        detail: "Thanks for reaching out, redirecting to home",
        life: 3000
      });
      setTimeout(this.$router.push("/"), 1500);
    }
  }
});
</script>
