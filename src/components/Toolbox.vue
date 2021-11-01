 <template>
 <v-container>
    <v-app-bar-nav-icon
        v-if="!drawer"
        @click="drawer = true"
    ></v-app-bar-nav-icon>

    <v-navigation-drawer
        :value="$vuetify.breakpoint.smAndDown? drawer : true"
        app
        dark
        :expand-on-hover="$vuetify.breakpoint.mdAndUp"
        style="background-color: #374A67"
    >
            <v-list>
            <v-list-item link>
                <v-list-item-content>
                <v-list-item-title class="text-h6">
                    Toolbox
                </v-list-item-title>
                <v-list-item-subtitle>Du er logget ind som:</v-list-item-subtitle>
                <v-list-item-subtitle><em>Navn Efternavn</em></v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list nav dense>
            <v-list-item link>
                <v-list-item-icon>
                <v-icon>mdi-folder-plus</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Nyt kort</v-list-item-title>
            </v-list-item>
            <v-list-item link>
                <v-list-item-icon>
                <v-icon>mdi-application-edit</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Redigér kort</v-list-item-title>
            </v-list-item>
            <v-list-item link>
                <v-list-item-icon>
                <v-icon>mdi-delete</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Slet kort</v-list-item-title>
            </v-list-item>
            </v-list>
    </v-navigation-drawer>
 </v-container>
 </template>
 

<script>
export default {
    name: "toolbox",
    data() {
        return {
            drawer: false
        }
    },
    methods: {

    }

}
</script>
