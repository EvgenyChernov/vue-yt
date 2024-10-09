<template>
  <div class="container mx-auto ">
    <div class="min-h-screen">
      <header class="header">
        <div class="navbar bg-base-100">
          <div class="flex-1">
            <router-link :to="{ name: 'home' }" class="btn btn-ghost text-xl">Vue 3</router-link>
          </div>
          <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
              <li>
                <router-link :to="{ name: 'home' }">Главная</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'users' }">Пользователи</router-link>
              </li>
            </ul>
          </div>
          <div class="flex-none gap-2">
            <div class="form-control">
              <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto"/>
            </div>
            <div class="dropdown dropdown-end">
              <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
                <div class="w-10 rounded-full">
                  <img
                      alt="Tailwind CSS Navbar component"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"/>
                </div>
              </div>
              <ul
                  tabindex="0"
                  class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li>
                  <a class="justify-between">
                    Profile
                    <span class="badge">New</span>
                  </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <div class="">
        <router-view/>
      </div>
    </div>
    <footer class="footer bg-base-200 text-base-content p-10">
      <nav>
        <h6 class="footer-title">Services</h6>
        <a class="link link-hover">Branding</a>
        <a class="link link-hover">Design</a>
        <a class="link link-hover">Marketing</a>
        <a class="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 class="footer-title">Company</h6>
        <a class="link link-hover">About us</a>
        <a class="link link-hover">Contact</a>
        <a class="link link-hover">Jobs</a>
        <a class="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 class="footer-title">Legal</h6>
        <a class="link link-hover">Terms of use</a>
        <a class="link link-hover">Privacy policy</a>
        <a class="link link-hover">Cookie policy</a>
      </nav>
      <form>
        <h6 class="footer-title">Newsletter</h6>
        <fieldset class="form-control w-80">
          <label class="label">
            <span class="label-text">Enter your email address</span>
          </label>
          <div class="join">
            <input
                type="text"
                placeholder="username@site.com"
                class="input input-bordered join-item"/>
            <button class="btn btn-primary join-item">Subscribe</button>
          </div>
        </fieldset>
      </form>
    </footer>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>