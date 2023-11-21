<template>
  <div class="">
    <h2 class="">To Do List With Vue</h2>
    <li class="list-group-item mx-5">
      <each-list />
      <each-list />
      <each-list />
    </li>
  </div>
</template>

<script>
import EachList from "./EachList.vue";
export default {
  components: { EachList },
  name: "AllList",
};
</script>
