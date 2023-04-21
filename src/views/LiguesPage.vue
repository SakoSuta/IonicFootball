<template>
    <div class="AllCard">
        <ion-card button routerLink="/chemin-de-la-page">
          <ion-card-header>
              <ion-card-title>qzddqzdq</ion-card-title>
              <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
          </ion-card-header>
          <ion-card-content>
              <!-- {{ content.substring(0, 50) }}{{ content.length > 50 ? '...' : '' }} -->
              ABCDEFGHIJKLMNOPQRSTUVWXYZ
          </ion-card-content>
        </ion-card>
        <ion-card button routerLink="/chemin-de-la-page">
          <ion-card-header>
              <ion-card-title>zdqdzqdzqd</ion-card-title>
              <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
          </ion-card-header>
          <ion-card-content>
              <!-- {{ content.substring(0, 50) }}{{ content.length > 50 ? '...' : '' }} -->
              ABCDEFGHIJKLMNOPQRSTUVWXYZ
          </ion-card-content>
        </ion-card>
        <ion-card button routerLink="/chemin-de-la-page">
          <ion-card-header>
              <ion-card-title>8465123</ion-card-title>
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
  