<template>
  <div class="ContactItem" :data-id="contactInfo.id" @click="gotoLogs($event,contactInfo.id)" >
    <p>contact age:{{contactInfo.age}}</p>
    <p>contact name::{{contactInfo.name}}</p>
  </div>
</template>
<script src="./index.js"></script>
<style src="./index.css"></style>