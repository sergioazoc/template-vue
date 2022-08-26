<script setup lang="ts">
  import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand navbar-dark bg-primary mb-3">
    <div class="container-fluid">
      <div
        id="navbarSupportedContent"
        class="collapse navbar-collapse"
      >
        <ul class="navbar-nav mx-auto mb-lg-0">
          <li class="nav-item">
            <RouterLink
              :to="{ name: 'characters' }"
              class="nav-link"
            >
              List of Characters
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              :to="{ name: 'form' }"
              class="nav-link"
            >
              Form
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>