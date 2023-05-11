<template>
    <ion-content>
      <ion-list>
        <h1 class="titleLigue">Top Ligue</h1>
        <ion-item button routerLink="/Ligue" v-for="item in Classement">
            <img :src="item.strTeamBadge" alt="Team Logo"/>
                {{ item.strTeam }}
        </ion-item>
      </ion-list>
    </ion-content>
</template>

  
  <script setup lang="ts">
  import { IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent } from '@ionic/vue';
  </script>

<script lang="ts">
export default {
    mounted() {
        fetch(`https://www.thesportsdb.com/api/v1/json/3/lookuptable.php?l=${this.$route.params.id}&s=2022-2023`)
        .then(response => response.json())
        .then(json => {
        console.log(json.table);
        this.Classement = json.table;
        });
    },
    data() {
        return {
            Classement: [],
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
  .card_class{
      width: 85%;
  }
  .card_classCont{
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 60%;
      font-weight: bold;
  }
  ion-card-content{
      display: flex;
      align-items: center;
      justify-content: center;
  }
  .titleLigue{
      text-align: center;
      font-weight: bold;
      font-size: 2rem;
  }
  </style>
  