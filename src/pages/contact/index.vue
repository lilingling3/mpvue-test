<template>
  <div>
    <p>watch vuex rootCount: {{ rootCount }}</p>
    <button @click="increment">+root</button>
    contact view 222
    <ContactItem :contactInfo="{name:'one-data',age:122,id:100}" />
    <ContactItem v-for="contactInfo in contactList" :contactInfo="contactInfo" :key="contactInfo.id" />
  </div>
</template>

<script src="./index.js"></script>
<style src="./index.css"></style>
