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
  </div>
</template>

<script setup lang="ts">
import { IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent } from '@ionic/vue';
</script>

<script lang="ts">
export default {
    Methods: {
        AllLigue() {
            fetch(`https://www.thesportsdb.com/api/v1/json/3/lookuptable.php?l={id}&s=2022-2023`)
            .then(response => response.json())
            .then(json => {
            console.log(json);
            this.ligue = json;
            });
        }
    },
    data() {
        return {
            ligue: [],
            SpecifiqueLigue: [4334,4401,4637],
        };
    },
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
