<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> Admin client </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-img
        src="https://cdn.quasar.dev/img/material.png"
        class="flex flex-center"
      >
        <q-avatar
          size="65px"
          class="absolute all-pointer-events"
          style="bottom: 20px; left: 15px; padding: 0"
        >
          <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
        </q-avatar>
      </q-img>

      <!-- menu  -->
      <q-list class="rounded-borders">
        <q-expansion-item expand-separator icon="mail" label="Level 1">
          <q-expansion-item
            :header-inset-level="1"
            :content-inset-level="1"
            expand-separator
            icon="receipt"
            label="Level 2"
          >
            <q-card>
              <q-card-section> Level 3 </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-expansion-item
            :header-inset-level="1"
            :content-inset-level="1"
            icon="schedule"
            label="Level 2"
          >
            <q-card>
              <q-card-section> Level 3 </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-expansion-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <!-- <router-view /> -->
      <div class="content">
        <slot></slot>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import "../styles/quasar.scss";

export default {
  name: "MainLayout",

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>

<style lang="scss">
.menu-toggle {
  font-size: 30px;
  cursor: pointer;
  padding-right: 20px;
}
.content {
  background: #ededed;
  padding: 25px;
}
</style>
