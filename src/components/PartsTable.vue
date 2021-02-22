<template>
  <DataTable v-if="productsData.length > 0" :value="productsData">
    <template #header>
      <div class="table-header">
        Products
        <Button icon="pi pi-refresh" />
      </div>
    </template>
    <Column field="name" header="Name"></Column>
    <Column header="Image">
      <template #body="slotProps">
        <img
          :src="slotProps.data.image"
          :alt="slotProps.data.image"
          class="product-image"
        />
      </template>
    </Column>
    <Column field="price" header="Price">
      <template #body="slotProps">
        {{ formatCurrency(slotProps.data.price) }}
      </template>
    </Column>
    <Column field="category" header="Category"></Column>
    <Column field="rating" header="Reviews">
      <template #body="slotProps">
        <Rating
          :modelValue="slotProps.data.rating"
          :readonly="true"
          :cancel="false"
        />
      </template>
    </Column>
    <Column header="Status">
      <template #body="slotProps">
        <span
          :class="
            'product-badge status-' +
              slotProps.data.inventoryStatus.toLowerCase()
          "
          >{{ slotProps.data.inventoryStatus }}</span
        >
      </template>
    </Column>
    <template #footer>
      In total there are {{ products ? products.length : 0 }} products.
    </template>
  </DataTable>
</template>
<script lang="js">
import { defineComponent } from "vue";
import DataTable from "primevue/datatable";

import Column from "primevue/column";
import Button from "primevue/button";
import Rating from "primevue/rating";
export default defineComponent({
  components: {
    DataTable,

    Column,
    Button,
    Rating
  },
setup() {
    const productsData = [{
      "id": "1000",
      "code": "f230fh0g3",
      "name": "SFP-10G-TPO",
      "description": "Product Description",
      "image": "https://via.placeholder.com/50",
      "price": 65,
      "category": "Accessories",
      "quantity": 24,
      "inventoryStatus": "INSTOCK",
      "rating": 5
    },
    {
      "id": "1001",
      "code": "nvklal433",
      "name": "SFP-20G-TPO",
      "description": "Product Description",
      "image": "https://via.placeholder.com/50",
      "price": 72,
      "category": "Accessories",
      "quantity": 61,
      "inventoryStatus": "INSTOCK",
      "rating": 4
    },
    {
      "id": "1002",
      "code": "zz21cz3c1",
      "name": "SFP-40G-TPO",
      "description": "Product Description",
      "image": "https://via.placeholder.com/50",
      "price": 79,
      "category": "Transceivers",
      "quantity": 2,
      "inventoryStatus": "LOWSTOCK",
      "rating": 3
    },
    {
      "id": "1003",
      "code": "244wgerg2",
      "name": "SFP_BLAH-BLAH",
      "description": "Product Description",
      "image": "https://via.placeholder.com/50",
      "price": 29,
      "category": "Transceivers",
      "quantity": 25,
      "inventoryStatus": "INSTOCK",
      "rating": 5
    },
    {
      "id": "1004",
      "code": "h456wer53",
      "name": "SFP_BLAH-BLAH",
      "description": "Product Description",
      "image": "https://via.placeholder.com/50",
      "price": 15,
      "category": "Accessories",
      "quantity": 73,
      "inventoryStatus": "INSTOCK",
      "rating": 4
    },
    {
      "id": "1005",
      "code": "av2231fwg",
      "name": "SFP_BLAH-BLAH",
      "description": "Product Description",
      "image": "https://via.placeholder.com/50",
      "price": 120,
      "category": "Accessories",
      "quantity": 0,
      "inventoryStatus": "OUTOFSTOCK",
      "rating": 4
    },
    {
      "id": "1006",
      "code": "bib36pfvm",
      "name": "SFP_BLAH-BLAH",
      "description": "Product Description",
      "image": "https://via.placeholder.com/50",
      "price": 32,
      "category": "Accessories",
      "quantity": 5,
      "inventoryStatus": "LOWSTOCK",
      "rating": 3
    },
    {
      "id": "1007",
      "code": "mbvjkgip5",
      "name": "SFP_BLAH-BLAH",
      "description": "Product Description",
      "image": "https://via.placeholder.com/50",
      "price": 34,
      "category": "Accessories",
      "quantity": 23,
      "inventoryStatus": "INSTOCK",
      "rating": 5
    },
    {
      "id": "1008",
      "code": "vbb124btr",
      "name": "SFP_BLAH-BLAH",
      "description": "Product Description",
      "image": "https://via.placeholder.com/50",
      "price": 99,
      "category": "Electronics",
      "quantity": 2,
      "inventoryStatus": "LOWSTOCK",
      "rating": 4
    },
    {
      "id": "1009",
      "code": "cm230f032",
      "name": "SFP_BLAH-BLAH",
      "description": "Product Description",
      "image": "https://via.placeholder.com/50",
      "price": 299,
      "category": "Electronics",
      "quantity": 63,
      "inventoryStatus": "INSTOCK",
      "rating": 3
    }];
    // const products = productService.getProductsSmall().then(res => productsData = res );
    return {  productsData };
  },
   methods: {
        formatCurrency(value) {
            return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        }
    }
});
</script>
