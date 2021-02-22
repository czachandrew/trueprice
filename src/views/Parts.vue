<template>
  <h2 class="title">Parts List</h2>
  <PartsTable />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import PartsTable from "@/components/PartsTable.vue";
export default defineComponent({
  components: {
    PartsTable
  }
});
</script>
