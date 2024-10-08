<template>
  <div class="container mx-auto space-y-2">
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"/>
            </svg>
          </div>
          <ul
              tabindex="0"
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><a>Item 1</a></li>
            <li>
              <a>Parent</a>
              <ul class="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <a class="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li><a>Item 1</a></li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul class="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </details>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
      <div class="navbar-end">
        <a class="btn">Button</a>
      </div>
    </div>
    <div class="">
      <button :class="['btn', {'btn-success' : moveStore.activeTab === 1}]">Favorite</button>
      <button :class="['btn', {'btn-success' : moveStore.activeTab !== 1}]">Search</button>
    </div>
    <div class="bg-gray-200 rounded-box grid p-5" v-if="moveStore.activeTab === 1">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <Move v-for="move in moveStore.movies" :key="move.id" :move="move"/>
      </div>
    </div>
    <div class="" v-else>Search</div>
  </div>
</template>

<script setup>
import Move from '@/components/MoveComponent.vue'
import { useMoveStore } from '@/stores/MoveStore'

const moveStore = useMoveStore()

</script>

<style lang="scss" scoped>
</style>
