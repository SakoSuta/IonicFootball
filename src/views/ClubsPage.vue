<template>
    <div class="AllCard">
        <ion-card button routerLink="/chemin-de-la-page" v-for="item in Events" :style="{ backgroundImage: `url(${item.strThumb})`, backgroundPosition: 'center', width: '70%' }">
          <ion-card-header>
              <ion-card-title>{{ item.strEvent }}</ion-card-title>
              <ion-card-subtitle>{{ item.strVenue }}</ion-card-subtitle>
          </ion-card-header>
        </ion-card>
    </div>
  </template>
  
  <script setup lang="ts">
  import { IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent } from '@ionic/vue';
  </script>
  
  <script lang="ts">
export default {
    mounted() {
        fetch(`https://www.thesportsdb.com/api/v1/json/3/eventslast.php?id=${this.$route.params.id}`)
        .then(response => response.json())
        .then(json => {
        console.log(json.results);
        this.Events = json.results;
        });
    },
    data() {
        return {
            Events: [],
        };
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
      text-align: center;
  }
  </style>
  