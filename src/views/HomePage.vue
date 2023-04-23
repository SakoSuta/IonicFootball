<template>
  <div class="AllCard">
      <ion-card button routerLink="`/ligues/4334`" class="Ligue1">
        <ion-card-header>
            <ion-card-title>Ligue 1</ion-card-title>
        </ion-card-header>
      </ion-card>
      <ion-card button routerLink="`/ligues/4334`" class="Ligue2">
        <ion-card-header>
            <ion-card-title>Ligue 2</ion-card-title>
        </ion-card-header>
      </ion-card>
      <ion-card button routerLink="`/ligues/4334`" class="National">
        <ion-card-header>
            <ion-card-title>National</ion-card-title>
        </ion-card-header>
      </ion-card>
  </div>
</template>

<script setup lang="ts">
import { IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent } from '@ionic/vue';
</script>

<script lang="ts">
export default {
    methods: {
        AllLigue($id) {
            fetch(`https://www.thesportsdb.com/api/v1/json/3/lookuptable.php?l=4334&s=2022-2023`)
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
ion-card-title{
    text-align: center;
}

/* .Ligue1{
    background: url("Ligue1.png");
    background-position: center;
    background-size: cover;
}
.Ligue2{
    background: url("Ligue2.png");
    background-position: center;
    background-size: cover;
}
.National{
    background: url("National.png");
    background-position: center;
    background-size: cover;
} */
</style>
