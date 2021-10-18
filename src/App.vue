<template>
  <v-app>
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
      <v-icon left>mdi-account-circle</v-icon>
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
      <Board/>
    </v-main>
    
    <v-footer
      dark
      padless
    >
      <v-card
        class="flex"
        flat
        tile
      >
        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong><a href="https://pouls-live-resume.herokuapp.com/">Poul Rosenberg</a></strong>
        </v-card-text>
      </v-card>
    </v-footer>

  </v-app>
</template>

<script>
import Board from './components/Board';
import SignUp from './components/SignUp.vue';
import SignIn from './components/SignIn.vue';

export default {
  name: 'App',

  components: {
    Board,
    SignUp,
    SignIn
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

