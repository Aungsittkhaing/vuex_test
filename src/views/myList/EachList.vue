<template>
  <div>
    <input
      type="text"
      class="form-control"
      v-model="listText"
      @keyup.enter="saveText"
      v-if="isEdit"
    />
    <span v-else @dblclick="editText">{{ listText }}</span>
  </div>
</template>

<script>
export default {
  name: "EachList",
  data() {
    return {
      listText: "",
      isEdit: true,
    };
  },
  methods: {
    saveText() {
      this.isEdit = false;
    },
    editText() {
      this.isEdit = true;
    },
  },
};
</script>

<style lang="scss" scoped></style>
