<script setup>
import {ref, computed, onMounted, onUnmounted} from 'vue'
import Sidebar from "../components/Sidebar.vue";
import Navbar from "./Navbar.vue";
import store from "../store";
// import Spinner from "./core/Spinner.vue";
// import Toast from "./core/Toast.vue";
const {title} = defineProps({
  title: String
})

</script>


<template>
    
      <!--    Sidebar-->
     
      <div class="flex-1">
        <Navbar ></Navbar>
    </div>
<!-- loading the view for each page -->
<main>
  <router-view/>


</main>

       
     
   
  
  </template>
  

  

 