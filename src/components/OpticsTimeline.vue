<template>
  <Timeline :value="events" align="alternate" class="customized-timeline">
    <template #marker="slotProps">
      <span
        class="custom-marker p-shadow-2"
        :style="{ backgroundColor: slotProps.item.color }"
      >
        <i :class="slotProps.item.icon"></i>
      </span>
    </template>
    <template #content="slotProps">
      <Card>
        <template #title>
          {{ slotProps.item.title }}
        </template>

        <template #content>
          <img
            v-if="slotProps.item.image"
            :src="slotProps.item.image"
            :alt="slotProps.item.title"
            width="200"
            class="p-shadow-2"
          />
          <p>
            {{ slotProps.item.description }}
          </p>
          <!-- <Button label="Read more" class="p-button-text"></Button> -->
        </template>
      </Card>
    </template>
  </Timeline>
</template>
<style>
.custom-marker {
  display: flex;
  width: 2rem;
  height: 2rem;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  color: #fff;
  border-radius: 50%;
  z-index: 1;
}
</style>
<script lang="ts">
import { defineComponent } from "vue";
import Timeline from "primevue/timeline";
import Card from "primevue/card";

export default defineComponent({
  name: "OpticsTimeline",
  components: {
    Timeline,
    Card
  },
  setup() {
    const events = [
      {
        title: "Uncoded Optices ordered from Taiwan or China",
        description:
          "Almost all major OEM's and third party providers order from the same handful of factories in Asia. These products are just 'dumb metal' or uncoded optics that are shipped to the US and coded here.",
        icon: "pi pi-shopping-cart",
        color: "#9c27B0",
        image: "/images/product/bulk.jpeg"
      },
      {
        title: "Optics are 'coded and tested' in the US",
        description:
          "Don't be fooled by American flag stickers and promises that 'all our labs are based in the US'. While the coding in most instances is performed on the continent that procedure is hardly what most people think it is. To code an optic you insert it into a machine select that coding you'd like to install and remove the SFP, it is now coded",
        color: "#673AB7",
        icon: "pi pi-cog",
        image: "/images/coding.jpeg"
      },
      {
        title: "Fancy websites and photos are made",
        description:
          "This is where the 'magic happens'. Most optic companies like to find alot of technical looking gear to have in the background of their employee photos, but this is all bullshit. The gear required to code and test optics can, in most instances fit on a small desk. This is made all the more hilarious when you consider how often you visit the website of your optical manufacturers.",
        color: "#FF9800",
        icon: "pi pi-check",
        image: "/images/fancy.jpeg"
      },
      {
        title: "Add a ridiculous markup",
        description:
          "Most optics, even budget brand third party alternatives are marked up at least 100%. Extensively boring product descriptions are written to make it seem like some value has been added since these SFPs were unpakced from the boxes in Asia, and you - the buyer have this enormous imagined expense passed onto you.",
        color: "#607D8B",
        icon: "pi pi-dollar",
        image: "/images/markup.jpeg"
      }
    ];

    return { events };
  }
});
</script>
