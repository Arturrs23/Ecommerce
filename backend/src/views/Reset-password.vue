
  
  <script setup>
  import { LockClosedIcon } from '@heroicons/vue/20/solid'
  import GuestLayout from '../components/GuestLayout.vue';
  </script>
<template>

  
        <GuestLayout title="Submit New Password">
          <form class="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div class="-space-y-px rounded-md shadow-sm">
              <div>
                <label for="new-password" class="sr-only">New Password</label>
                <input id="new-password" name="email" type="text" autocomplete="email" required="" class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="New Password" />
              </div>
              <div>
                  <label for="repeat-password" class="sr-only">Repeat Password</label>
                  <input id="repeat-password" name="email" type="text" autocomplete="email" required="" class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Re-enter password" />
                </div>
        
            </div>
    
          
    
            <div>
              <button><a href="/login">Back To Login</a></button>
              <button type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
               Submit
              </button>
            </div>
          </form>

        </GuestLayout>
   
  </template>
