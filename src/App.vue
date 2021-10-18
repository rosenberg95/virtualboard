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

      <v-btn>
      <v-icon left>mdi-account-circle</v-icon>
         Login
      </v-btn>
    </v-app-bar>

    <v-main>
      <Board/>
    </v-main>
  </v-app>
</template>

<script>
import Board from './components/Board';

export default {
  name: 'App',

  components: {
    Board,
  },

  data: () => ({
    //
  }),
};
</script>
