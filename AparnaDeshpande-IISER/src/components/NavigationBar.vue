<template>
  <nav class="bg-white">
    <div class="px-2 sm:px-3 lg:px-5 dark:sm:bg-[#111828]">
      <div class="flex justify-center h-16">
        <!-- Hamburger menu button (mobile) -->
        <div class="flex items-center sm:hidden absolute left-4 top-4 border border-3 border-blue-600">
          <button
            @click="isOpen = !isOpen"
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              v-if="!isOpen"
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              style="color: #111828"
            >
              <path d="M4 8h16M4 16h16" />
            </svg>
            <svg
              v-else
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              style="color: #111828"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Nav Links (desktop) -->
        <div class="hidden sm:flex sm:space-x-6 items-center">
          <a href="#" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-l font-medium">
            <router-link to="/">Home</router-link>
          </a>
          <a href="#" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-l font-medium">
            <router-link to="/about">About</router-link>
          </a>
          <a href="#" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-l font-medium">
            <router-link to="/research">Research</router-link>
          </a>
          <a href="#" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-l font-medium">
            <router-link to="/publications">Publications</router-link>
          </a>
          <a href="#" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-l font-medium">
            <router-link to="/outreach">Outreach</router-link>
          </a>
          <a href="#" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-l font-medium">
            <router-link to="/group">Group</router-link>
          </a>
          <a href="#" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-l font-medium">
            <router-link to="/science-ed">Science Ed</router-link>
          </a>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="isOpen" class="sm:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-800">
        <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">Home</a>
        <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">About</a>
        <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">Research</a>
        <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">Publications</a>
        <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">Projects</a>
        <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">Blog</a>
        <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">Contact</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
const isOpen = ref(false);
</script>
