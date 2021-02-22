import axios from "axios";
import data from "../../public/data/products-test.json";

export default class ProductService {
  getProductsSmall() {
    return axios.get(data).then((res) => res.config.url.data);
  }

  getProducts() {
    return axios.get(data).then((res) => res.config.url.data);
  }

  getProductsWithOrdersSmall() {
    return axios.get(data).then((res) => res.config.url.data);
  }
}
