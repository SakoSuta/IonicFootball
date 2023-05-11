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
  import { IonContent,IonList,IonItem } from '@ionic/vue';
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
  .titleLigue{
      text-align: center;
      font-weight: bold;
      font-size: 2rem;
  }
  </style>