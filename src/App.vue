<template>
  <!--menu start-->

  <header class="site-header">
    <div id="header-wrap">
      <div class="container">
        <div class="row">
          <!--menu start-->
          <div class="col d-flex align-items-center justify-content-between">
            <a class="navbar-brand logo text-dark h2 mb-0" href="index.html">
              True<span class="text-primary font-weight-bold">Price.</span>
            </a>
            <nav class="navbar navbar-expand-lg navbar-light ml-auto">
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <router-link to="/" class="nav-link">Home</router-link>
                  </li>
                  <li class="nav-item ">
                    <router-link to="/about" class="nav-link"
                      >About</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link to="/parts" class="nav-link"
                      >Parts</router-link
                    >
                  </li>
                  <!-- <li class="nav-item dropdown">
                    <router-link
                      to="/contact"
                      class="nav-link"
                      data-toggle="dropdown"
                      >Contact</router-link
                    >
                  </li> -->
                </ul>
              </div>
            </nav>
            <a class="btn btn-primary ml-8 d-none d-lg-block" href="/#/contact"
              >Contact</a
            >
          </div>
          <!--menu end-->
        </div>
      </div>
    </div>
  </header>
  <!-- <Menubar :model="items">
    <template #end>
      <router-link to="/contact" class="btn btn-primary"
        >Contact Us</router-link
      >
    </template>
  </Menubar> -->
  <div class="container">
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const items = [
      {
        label: "Home",
        icon: "pi pi-fw pi-home",
        to: "/"
      },
      {
        label: "About",
        icon: "pi pi-fw pi-question",
        to: "/about"
      },
      {
        label: "Parts",
        icon: "pi pi-fw pi-cog",
        to: "/parts"
      }
    ];
    return { items };
  },
  components: {}
});
</script>
