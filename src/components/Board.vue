<template>
  <v-container>
      <v-layout row wrap> 
        <v-flex xs12 sm6 md4 lg3 v-for="element in cards" :key="element.title">
            <v-card class="ma-3">
                <v-card-title>{{ element.title }} </v-card-title>
                <div v-if="element.type == 'text'">
                    <v-card-text>
                        <div class="my-4 text-subtitle-1">
                        {{element.text}}
                        </div>
                    </v-card-text>
                </div>
                <div v-else-if="element.type == 'img'">
                    <v-img
                    height="200px"
                    :src="element.imgurl"
                    ></v-img>
                </div>
                <div v-else-if="element.type == 'vid'">
                    {{element.vidurl}}
                </div>
                
            </v-card> 

        </v-flex>

      </v-layout>


   
  </v-container>
</template>

<script>
  export default {
    name: 'Board',


    // Test data
    data: () => ({
        cards: [
            {type: 'text', 
                title: 'Titel på kort tekst', 
                text: 'Her skal der stå noget brugerdefineret tekst, som skal være maks 280 tegn.', 
                imgurl: '',
                vidurl: '',
                user: "bruger", 
                date: "Dato"},
            {type: 'img', 
                title: 'Titel på billede', 
                text: 'stop',
                imgurl: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg', 
                vidurl: '',
                user: "bruger", 
                date: "Dato"},
            {type: 'vid', 
                title: 'Titel på video', 
                text: '',
                imgurl: '',
                vidurl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley', 
                user: "bruger", 
                date: "Dato"}
        ]
    })
  }
</script>
