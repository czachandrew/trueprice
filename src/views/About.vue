<template>
  <div class="about">
    <section class="position-relative">
      <div id="particles-js"></div>
      <div class="container">
        <div class="row  text-center">
          <div class="col">
            <h1>About</h1>
          </div>
        </div>
        <!-- / .row -->
      </div>
      <!-- / .container -->
    </section>
    <section>
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-12 col-lg-6 mb-6 mb-lg-0 order-lg-1">
            <div class="row align-items-center">
              <div class="col-6">
                <img
                  src="/images/bulb.jpg"
                  class="img-fluid rounded shadow-lg"
                  alt="..."
                />
              </div>
              <div class="col-6">
                <img
                  src="/images/datacenter.jpeg"
                  class="img-fluid rounded shadow-lg mt-10"
                  alt="..."
                />
              </div>
              <div class="col-10 ml-auto mr-auto mt-n11">
                <img
                  src="/images/team.jpg"
                  class="img-fluid rounded shadow-lg"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6 col-xl-5">
            <div>
              <span class="badge badge-primary-soft p-2">
                <i class="la la-exclamation ic-3x rotation"></i>
              </span>
              <h2 class="mt-3 font-w-5">
                TruePrice's Small Team keeps things simple
              </h2>
              <p class="lead">
                You just don't need 100's of people to run an effective optics
                company. You need a few dedicated professionals that care about
                their work and have the expertise required to provide you the
                right parts on your timeline.
              </p>
              <p class="mb-0">
                We use the latest technology to keep our operation streamlined
                and don't have legions of over paid sales reps to feed.
              </p>
            </div>
            <div class="d-flex align-items-center justify-content-between mt-5">
              <div class="counter">
                <div class="counter-desc">
                  <span
                    class="count-number display-4"
                    data-to="15"
                    data-speed="1000"
                    >55</span
                  >
                  <span class="display-4 text-primary"></span>
                  <h6 class="text-muted mb-0">OEM's</h6>
                </div>
              </div>
              <div class="counter">
                <div class="counter-desc">
                  <span
                    class="count-number display-4"
                    data-to="29"
                    data-speed="1000"
                    >29</span
                  >
                  <span class="display-4 text-primary">k</span>
                  <h6 class="text-muted mb-0">Parts Sold</h6>
                </div>
              </div>
              <div class="counter">
                <div class="counter-desc">
                  <span
                    class="count-number display-4"
                    data-to="23"
                    data-speed="1000"
                    >11</span
                  >
                  <span class="display-4 text-primary">k</span>
                  <h6 class="text-muted mb-0">Happy Customers</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="legal">
      <Card>
        <template #title>
          Edward Clair - Partner, Fitch Even Tabin & Flannery / Intellectual
          Property
        </template>
        <template #content>
          <p>
            Chicago Office <br />
            120 South Lasalle Street <br />
            Suite 2100 <br />
            Chicago, IL 60603
          </p>
          <p>
            Edward Clair has worked in the field of Intellectual Property since
            1997 and joined the firm in 1998. His practice includes all aspects
            of domestic and foreign patents, trademarks, copyrights, trade
            secrets, and unfair competition, including client counseling,
            licensing and other transactions, prosecution, litigation and
            opinion work.
          </p>
          <p>
            <span class="font-weight-bold">Specialties:</span> Intellectual
            Property; Patents; Trademarks; Copyrights; Trade Secrets
          </p>
          <p class="font-weight-bold">
            Official USPTO Notice of Allowance: U.S. Trademark SN 88716605
            TruePriceIT is a registered TM. - All Rights Reserved 2020
          </p>
        </template>
      </Card>
    </section>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Card from "primevue/card";
export default defineComponent({
  components: {
    Card
  }
});
</script>
