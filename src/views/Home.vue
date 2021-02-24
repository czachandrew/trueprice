<template>
  <section>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12 col-lg-5 col-lg-6 order-lg-2 mb-8 mb-lg-0">
          <!-- Image -->
          <img src="/images/product/qsfps.jpg" class="img-fluid" alt="..." />
        </div>
        <div class="col-12 col-lg-7 col-xl-6 order-lg-1">
          <!-- Heading -->
          <h5 class="badge badge-primary-soft font-w-6">
            Deep down you know...
          </h5>
          <h1 class="display-4">
            Optics are simple
            <span class="text-primary">we make it obvious</span>
          </h1>
          <!-- Text -->
          <p class="lead text-muted">
            We are an optics company absent of the bs promises, overly technical
            terminology and needlessly broad product offerings. We have a
            streamlined product offering, fixed markup, and super efficient
            distribution mechanism.
          </p>
          <!-- Buttons -->
          <a href="#" class="btn btn-primary shadow mr-1">
            Learn More
          </a>
          <a href="/#/contact" class="btn btn-outline-primary">
            Get Started
          </a>
        </div>
      </div>
      <!-- / .row -->
    </div>
    <!-- / .container -->
  </section>
  <section style="margin-top: 20px;">
    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="col-12 col-md-12 col-lg-8 mb-8 mb-lg-0">
          <div class="mb-8">
            <span class="badge badge-primary-soft p-2 font-w-6">
              What We Offer
            </span>
            <h2 class="mt-3 font-w-5">Quality Optics and no BS</h2>
            <p class="lead mb-0">
              We've been around the industry for years, and after seeing all the
              waste and stupidty behind ridiculously high prices for basically
              simple components, we decided enough was enough.
            </p>
          </div>
        </div>
      </div>
      <!-- / .row -->
      <div class="row align-items-center">
        <div class="col-xl-4 col-lg-4 mb-8 mb-lg-0">
          <div class="px-4 py-7 rounded hover-translate text-center">
            <div>
              <img class="img-fluid" src="@/assets/images/svg/01.svg" alt="" />
            </div>
            <h5 class="mt-4 mb-3">Controlled Offering</h5>
            <p>
              In reality most networks operate on an offering of 25 or so SKU's
              - so why do most optics companies stock thousands?
            </p>
            <!-- <a class="btn-link" href="#">Read Details</a> -->
          </div>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-6 mb-8 mb-md-0">
          <div class="px-4 py-7 rounded hover-translate text-center">
            <div>
              <img class="img-fluid" src="@/assets/images/svg/02.svg" alt="" />
            </div>
            <h5 class="mt-4 mb-3">Transparent Communication</h5>
            <p>
              Optics are essentially light bulbs, we dismiss with the overly
              complex descriptions and just help you find what you need.
            </p>
            <!-- <a class="btn-link" href="#">Read Details</a> -->
          </div>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-6 mt-6 mt-sm-0">
          <div class="px-4 py-7 rounded hover-translate text-center">
            <div>
              <img class="img-fluid" src="@/assets/images/svg/03.svg" alt="" />
            </div>
            <h5 class="mt-4 mb-3">Controlled Adders</h5>
            <p>
              We have a fixed adder for all of our orders, paying % commissions
              just encourages bloat. We charge in line with the value we add.
            </p>
            <!-- <a class="btn-link" href="#">Read Details</a> -->
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="video" style="margin-top: 20px;">
    <div class="container">
      <div
        class="row justify-content-center text-center"
        style="margin-bottom: 25px;"
      >
        <div class="col-12 col-md-12 col-lg-8 mb-8 mb-lg-0">
          <div class="mb-8">
            <span class="badge badge-primary-soft p-2 font-w-6"> </span>
            <h2 class="mt-3 font-w-5">How it typically goes</h2>
            <p class="lead mb-0">
              Whether its an OEM or a bargain basement thrid party provider, the
              timeline is basically the same. Buy the same stuff from the same
              factory and overcharge you for it.
            </p>
          </div>
        </div>
      </div>
      <OpticsTimeline />
    </div>
  </section>
  <!-- <div class="home">
    <img alt="Vue logo" src="../@/assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import OpticsTimeline from "@/components/OpticsTimeline.vue";

export default defineComponent({
  name: "Home",
  components: {
    OpticsTimeline
  }
});
</script>
