
<template>
    <v-container>
      <v-layout row wrap justify-center align-center > 
        <v-flex xs12 sm6 md4 lg3 v-for="element in cards" :key="element.title">
            <v-card class="ma-3" max-width="400" height=400px>
                <div v-if="element.type == 'text'">
                    <v-card-title><v-icon left>mdi-message-text</v-icon>{{ element.title }} </v-card-title>
                    <v-card-text>
                        <div class="my-4 text-subtitle-1" height="200px">
                        {{element.text}}
                        </div>
                    </v-card-text>
                </div>
                <div v-else-if="element.type == 'img'">
                    <v-card-title><v-icon left>mdi-image-size-select-actual</v-icon>{{ element.title }} </v-card-title>
                    <v-img
                    height="300px"
                    :src="element.imgurl"
                    ></v-img>
                </div>
                <div v-else-if="element.type == 'vid'">
                    <v-card-title><v-icon left>mdi-youtube</v-icon>{{ element.title }} </v-card-title>
                    <youtube 
                    fitParent=true
                    :video-id="element.vidurl"
                    ref="youtube" 
                    @playing="playing"
                    ></youtube>
                </div>
                
            </v-card> 
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script src="vue-youtube/dist/vue-youtube.js"></script>
<script>
  export default {
    name: 'Board',


    // Test data ideelt set bliver det hentet fra firebase database
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
                vidurl: 'dQw4w9WgXcQ', 
                user: "bruger", 
                date: "Dato"},
            {type: 'text', 
                title: 'Eksempel på en 280 char tekst', 
                text: 'I mean, if you can’t say something in a tight two sentences, save it for your blog, you know? Maybe we should all be more conscious with our communication and spend more time focusing on the things important to us. Like dinosaurs, for instance. Anyway, that is all I wanted to say',
                imgurl: '',
                vidurl: '', 
                user: "lortebruger", 
                date: "Dato"},
        ]
    })
  }
</script>
