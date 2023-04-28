<template>
  <div class="AllCard">
      <ion-card button routerLink="/ligues/4334" class="Ligue1">
        <ion-card-header>
            <ion-card-title>Ligue 1</ion-card-title>
        </ion-card-header>
      </ion-card>
      <ion-card button routerLink="/ligues/4401" class="Ligue2">
        <ion-card-header>
            <ion-card-title>Ligue 2</ion-card-title>
        </ion-card-header>
      </ion-card>
      <ion-card button routerLink="/ligues/4637" class="National">
        <ion-card-header>
            <ion-card-title>National</ion-card-title>
        </ion-card-header>
      </ion-card>
  </div>
</template>

<script setup lang="ts">
import { IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent } from '@ionic/vue';
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
