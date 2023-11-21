<template>
  <div>
    <h4>Login Page</h4>
    <form action="">
      <label>Email</label>
      <input type="text" class="form-control" v-model="user.email" />
      <label>Password</label>
      <input type="password" class="form-control" v-model="user.password" />
      <input
        type="button"
        @click="loginPage"
        class="btn btn-primary me-2 mt-2"
        value="Login"
      />
      <input
        type="button"
        @click="logoutPage"
        class="btn btn-danger mt-2 me-2"
        value="Logout"
      />
      <input
        type="button"
        @click="alertMessage"
        class="btn btn-warning mt-2"
        value="Alert"
      />
    </form>
    <h4>{{ $store.state.title }}</h4>
    <ul v-for="(f, index) in myFruitArray" :key="index">
      <li>{{ f }}</li>
    </ul>
    <p class="text-primary">{{ name }}</p>
    <p class="text-secondary">{{ title }}</p>
    <!-- manual getters -->
    <p class="text-success">{{ $store.getters.getUserCount }}</p>
    <p class="text-danger">{{ $store.getters.doneJob[1].name }}</p>
    <p class="text-info">{{ $store.getters.unDoneJob }}</p>

    <!-- mapGetters -->
    <p class="text-success">{{ getUserCount }}</p>
    <p class="text-danger">{{ doneJob[1].name }}</p>
    <p class="text-info">{{ unDoneJob }}</p>
    <b class="btn btn-primary" @click="alertMyCount()">Alert</b>
    <hr />
    <div class="row">
      <input
        type="text"
        class="col form-control mx-2"
        placeholder="Enter changename with VueX"
        v-model="changeText"
        v-on:keyup.enter="changeMyText"
      />
      <button class="col-2 btn btn-outline-success" @click="changeMyText">
        Save
      </button>
      <h1 class="text-info mt-2">{{ $store.state.name }}</h1>
    </div>
    <button class="btn btn-info" @click="changeNameWithMutationButton">
      Mutation
    </button>
    <button class="btn btn-outline-success ms-2" @click="changeValueMutation">
      Change Value with Mutation
    </button>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "LoginPage",
  data() {
    return {
      myFruitArray: this.$store.state.fruits,
      changeText: "",
      user: {
        email: "",
        password: "",
      },
    };
  },
  // computed: {
  //   getMyName() {
  //     return this.$store.state.name;
  //   },
  // },
  // computed: mapState({ getMyName: (state) => state.name }),
  computed: {
    ...mapState(["name", "title"]),
    ...mapGetters(["getUserCount", "doneJob", "unDoneJob"]),
  },
  methods: {
    loginPage() {
      if (this.user.email !== "" && this.user.password !== "") {
        localStorage.setItem("vueAuth", true);
      } else {
        alert("Empty information");
      }
    },
    logoutPage() {
      localStorage.setItem("vueAuth", false);
    },
    alertMessage() {
      alert(this.$store.state.title);
    },
    alertMyCount() {
      console.log(this.$store.dispatch("changeName"));
      console.log(this.$store.state.name);
    },
    changeMyText() {
      this.$store.dispatch("changeStateName", this.changeText);
      console.log(this.$store.state.name);
      this.changeText = "";
    },
    changeNameWithMutationButton() {
      this.$store.commit("changeNameWithMutation");
      console.log(this.$store.state.name);
    },
    changeValueMutation() {
      this.$store.commit("changeMutationValue", "change with mutation value");
      console.log(this.$store.state.name);
    },
  },
};
</script>
<style lang="scss" scoped></style>
