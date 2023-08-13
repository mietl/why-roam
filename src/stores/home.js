import { defineStore } from "pinia";
import { getCategories, getHotSuggests, getHouseList } from "../service/city/home";

const useHomeStore = defineStore("home", {
  state() {
    return {
      hotSuggests: [],
      categories: [],
      currentPage: 1,
      houseList: [],
    };
  },
  actions: {
    getHomeHotSuggests() {
      getHotSuggests().then((res) => {
        this.hotSuggests = res.data;
      });
    },
    getHomeCategories() {
      getCategories().then((res) => {
        this.categories = res.data;
      });
    },
    getHomeHouseList() {
      getHouseList(this.currentPage++).then(res => {
        this.houseList.push(...res.data);
      })
    }
  },
});

export default useHomeStore;