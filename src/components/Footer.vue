<template>
  <footer
    class="py-11 bg-primary position-relative"
    data-bg-img="/images/bg/03.png"
  >
    <div class="shape-1" style="height: 150px; overflow: hidden;">
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style="height: 100%; width: 100%;"
      >
        <path
          d="M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
          style="stroke: none; fill: #fff;"
        ></path>
      </svg>
    </div>
    <div class="container mt-11">
      <div class="row">
        <div class="col-12 col-lg-5 col-xl-4 mr-auto mb-6 mb-lg-0">
          <div class="subscribe-form bg-warning-soft p-5 rounded">
            <h5 class="mb-4 text-white">Mailing List</h5>
            <h6 class="text-light">Subscribe, we won't spam!</h6>
            <form id="mc-form" class="group">
              <input
                type="email"
                v-model="email"
                name="EMAIL"
                class="email form-control"
                id="mc-email"
                placeholder="Email Address"
                required=""
                style="height: 60px;"
              />
              <Button
                label="Subscribe"
                class="btn btn-outline-light btn-block mt-3 mb-2"
                @click="submitEmail"
              />
              <!-- <input
                class="btn btn-outline-light btn-block mt-3 mb-2"
                type="submit"
                name="subscribe"
                value="Subscribe"
              /> -->
            </form>
          </div>
        </div>
        <div class="col-12 col-lg-6 col-xl-7">
          <div class="row">
            <div class="col-12 col-sm-4 navbar-dark">
              <h5 class="mb-4 text-white">Pages</h5>
              <ul class="navbar-nav list-unstyled mb-0">
                <li class="mb-3 nav-item">
                  <a class="nav-link" href="/#/about">About</a>
                </li>
                <li class="mb-3 nav-item">
                  <a class="nav-link" href="/#/parts">Parts</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="/#/contact">Contact Us</a>
                </li>
              </ul>
            </div>
            <div class="col-12 col-sm-4 mt-6 mt-sm-0 navbar-dark">
              <h5 class="mb-4 text-white">Service</h5>
              <ul class="navbar-nav list-unstyled mb-0">
                <li class="mb-3 nav-item">
                  <a class="nav-link" href="/#/contact">Help</a>
                </li>
                <!-- <li class="mb-3 nav-item">
                    <a class="nav-link" href="#">Careers</a>
                  </li>
                  <li class="mb-3 nav-item">
                    <a class="nav-link" href="login.html">Partnership</a>
                  </li> -->
              </ul>
            </div>
            <div class="col-12 col-sm-4 mt-6 mt-sm-0 navbar-dark">
              <!-- <h5 class="mb-4 text-white">Legal</h5>
                <ul class="navbar-nav list-unstyled mb-0">
                  <li class="mb-3 nav-item">
                    <a class="nav-link" href="terms-and-conditions.html"
                      >Term Of Service</a
                    >
                  </li>
                  <li class="mb-3 nav-item">
                    <a class="nav-link" href="privacy-policy.html"
                      >Privacy Policy</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Support</a>
                  </li>
                </ul> -->
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-12 col-sm-6">
              <a class="footer-logo text-white h2 mb-0" href="index.html">
                True<span class="font-weight-bold">Price.</span>
              </a>
            </div>
            <div class="col-12 col-sm-6 mt-6 mt-sm-0">
              <ul class="list-inline mb-0">
                <li class="list-inline-item">
                  <a class="text-light ic-2x" href="http://www.facebook.com"
                    ><i class="la la-facebook"></i
                  ></a>
                </li>
                <!-- <li class="list-inline-item">
                    <a class="text-light ic-2x" href="#"
                      ><i class="la la-dribbble"></i
                    ></a>
                  </li> -->
                <li class="list-inline-item">
                  <a class="text-light ic-2x" href="http://www.instagram.com"
                    ><i class="la la-instagram"></i
                  ></a>
                </li>
                <li class="list-inline-item">
                  <a class="text-light ic-2x" href="http://www.twitter.com"
                    ><i class="la la-twitter"></i
                  ></a>
                </li>
                <li class="list-inline-item">
                  <a class="text-light ic-2x" href="http://www.linkedin.com"
                    ><i class="la la-linkedin"></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="row text-white text-center mt-8">
        <div class="col">
          <hr class="mb-8" />
          Copyright 2021 TruePrice by
          <u><a class="text-white" href="#">TruePrice Optics</a></u> | All
          Rights Reserved
        </div>
      </div>
    </div>
  </footer>
  <Toast />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Button from "primevue/button";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";
export default defineComponent({
  components: {
    Button,
    Toast
  },
  setup() {
    const toast = useToast();

    return { toast };
  },
  data() {
    return {
      email: ""
    };
  },
  methods: {
    submitEmail() {
      console.log(`Submitting this email ${this.email}`);
      this.toast.add({
        severity: "success",
        summary: "Success",
        detail: "We received your email address thanks!",
        life: 3000
      });
      this.email = "";
    }
  }
});
</script>
