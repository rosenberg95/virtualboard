<template>
    <v-container>
        <v-layout row justify="center">
            <v-flex>
                <v-card width=500px>
                    <v-card-text>
                        <v-container>
                            <v-card-title>Log Ind</v-card-title>
                            <form @submit.prevent="onSignIn">
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field
                                        name="email"
                                        label="E-Mail Adresse"
                                        id="email"
                                        v-model="email"
                                        type="email"
                                        required> </v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field
                                        name="password"
                                        label="Password"
                                        id="password"
                                        v-model="password"
                                        type="password"
                                        required> </v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12>
                                     <v-card-actions>
                                        <v-btn type="Submit" color="primary">Log Ind</v-btn>
                                        <v-spacer></v-spacer>
                                        <v-btn @click="pressedClose">Luk</v-btn>
                                     </v-card-actions>
                                    </v-flex>
                                </v-layout>
                            </form>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>


<script>
import * as firebase from 'firebase/compat'
require('firebase/auth')
export default {
    name: "signup",
    data() {
        return {
            email: '',
            password: '',
            confirmPassword: ''
        }
    },
    methods: {
        pressedClose() {
            this.$emit('clicked', false)
        },
        onSignIn () {
            console.log(this.email)
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then(console.log("logget ind"))
                .catch(error => console.log(error))

        }
    }

}
</script>
