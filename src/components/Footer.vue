<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <footer class="m-4 bg-white rounded-lg shadow dark:bg-gray-800">
        <div class="w-full max-w-screen-xl p-4 mx-auto md:flex md:items-center md:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">VapeStore™</a>. All Rights Reserved.
            </span>
            <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <RouterLink to="/" class="hover:underline me-4 md:me-6">Home</RouterLink>
                </li>
                <li>
                    <RouterLink to="/product" class="hover:underline me-4 md:me-6">Product</RouterLink>
                </li>
                <li>
                    <RouterLink to="/service" class="hover:underline me-4 md:me-6">Service</RouterLink>
                </li>
                <li>
                    <RouterLink to="/contact" class="hover:underline">Contact</RouterLink>
                </li>
            </ul>
        </div>
    </footer>
</template>