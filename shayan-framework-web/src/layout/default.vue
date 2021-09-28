<template>
  <q-layout ref="layout" view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-item to="/" clickable exact v-ripple>
          <q-toolbar-title>
            shayan UI framework
          </q-toolbar-title>
        </q-item>
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
          <img :src="avatar" />
          <!-- <img :src="avatarSvg" /> -->
        </q-avatar>
      </q-img>
      <!-- ====menu==== -->
      <div style="max-width: 350px">
        <q-list separator>
          <q-item to="/table" clickable exact-path v-ripple>
            <q-item-section>
              Table
            </q-item-section>
          </q-item>
          <q-item to="/modal" clickable exact-path v-ripple>
            <q-item-section>
              Modal
            </q-item-section>
          </q-item>
        </q-list>
      </div>
      <!--  -->
    </q-drawer>

    <q-page-container>
      <div class="bg-grey-3 q-pa-md">
        <router-view></router-view>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import avatarSvg from "../assets/images/avatar.svg?inline";
import avatar from "../assets/images/avatar.png";

export default {
  name: "MainLayout",
  data() {
    return {
      avatarSvg,
      avatar,
    };
  },

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
</style>
