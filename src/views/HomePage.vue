<template>
  <div class="AllCard">
      <ion-card button routerLink="`/ligues/${id}`">
        <ion-card-header>
            <ion-card-title>French Ligue 1</ion-card-title>
            <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
            <!-- {{ content.substring(0, 50) }}{{ content.length > 50 ? '...' : '' }} -->
            ABCDEFGHIJKLMNOPQRSTUVWXYZ
        </ion-card-content>
      </ion-card>
      <ion-card button routerLink="`/ligues/${id}`">
        <ion-card-header>
            <ion-card-title>French Ligue 1</ion-card-title>
            <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
            <!-- {{ content.substring(0, 50) }}{{ content.length > 50 ? '...' : '' }} -->
            ABCDEFGHIJKLMNOPQRSTUVWXYZ
        </ion-card-content>
      </ion-card>
      <ion-card button routerLink="`/ligues/${id}`">
        <ion-card-header>
            <ion-card-title>French Ligue 1</ion-card-title>
            <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
            <!-- {{ content.substring(0, 50) }}{{ content.length > 50 ? '...' : '' }} -->
            ABCDEFGHIJKLMNOPQRSTUVWXYZ
        </ion-card-content>
      </ion-card>
  </div>
</template>

<script setup lang="ts">
import { IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent } from '@ionic/vue';

export default {
    name: 'HomePage',
    methods: {
        fetch(`https://www.thesportsdb.com/api/v1/json/3/lookup_all_teams.php?l=4334`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                $ligue = data;
            })
            .catch(error => {
                console.error(error);
            });
    },
    data() {
      return {
        $ligue: []
      }
    }
}
</script>

<style scoped>
.AllCard{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
}
ion-card{
    width: 70%;
}
</style>
