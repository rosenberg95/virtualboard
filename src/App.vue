<template>
  <v-app>
    <!--  TODO MOVE TO HEADER COMPONENT -->
    <v-app-bar 
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <v-toolbar-title>Virtual Board</v-toolbar-title>
      </div>

      <v-spacer></v-spacer>

      <v-btn color="primary"  @click="signUp = !signUp" left>
      <v-icon left>mdi-account-multiple</v-icon>
         Opret
      </v-btn>
      <v-btn color="primary"  @click="signIn = !signIn">
      <v-icon left>mdi-account-circle</v-icon>
         Log in
      </v-btn>
    </v-app-bar>





    <v-main>
      <v-row justify="center">
        <v-overlay
          :absolute="absolute"
          :opacity="0.7"
          :value="signUp"
        >
          <SignUp @clicked="onClickChild"></SignUp>
        </v-overlay>
        <v-overlay
            :absolute="absolute"
            :opacity="0.7"
            :value="signIn"
          >
            <SignIn @clicked="onClickChild"></SignIn>
        </v-overlay>
      </v-row>
      <p>\n</p>

      <Toolbox/>
      <Board/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Toolbox from './components/Toolbox.vue';
import Board from './components/Board';
import SignUp from './components/SignUp.vue';
import SignIn from './components/SignIn.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',

  components: {
    Board,
    SignUp,
    SignIn,
    Toolbox,
    Footer,
  },

  data: () => ({
    absolute: true,
    opacity: 0.7,
    signUp: false,
    signIn: false
  }),
  methods: {
      onClickChild (value) {
        this.signUp=value
        this.signIn=value
    }
  }
};
</script>

