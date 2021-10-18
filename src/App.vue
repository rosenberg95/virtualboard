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

      <v-btn color="primary"  @click="overlay = !overlay">
      <v-icon left>mdi-account-circle</v-icon>
         Login
      </v-btn>
    </v-app-bar>

    <v-main>
      <Board/>

      <v-overlay
          :absolute="absolute"
          :opacity="opacity"
          :value="overlay"
        >
          <SignIn/>
          <v-btn
            color="primary"
            @click="overlay = false"
          >
            Cancel
          </v-btn>
      </v-overlay>
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
import SignIn from './components/SignIn.vue';

export default {
  name: 'App',

  components: {
    Board,
    SignIn,
  },

  data: () => ({
    absolute: true,
    opacity: 0.7,
    overlay: false,
    icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
  }),
};
</script>

