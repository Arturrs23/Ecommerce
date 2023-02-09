  
<template>
    <!-- This is a template component for a centered container -->
    <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <!-- The container is given a max width of md, and a full width within that -->
      <div class="max-w-md w-full space-y-8">
        <!-- The title is given a text-3xl font size and bold font weight, with a gray-900 color -->
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            <!-- title property and goes to login.vue-->
            {{ title }}
          </h2>
        </div>
        <!-- The slot component allows any content to be inserted into the component -->
        
          <slot></slot>

      
      </div>
    </div>
  </template>
    <!-- The component uses the defineProps function to define the props, in this case just a title -->
      <script setup>
    

      const {title} = defineProps({
        title: String
      })
    </script>