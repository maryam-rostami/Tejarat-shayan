<template>
  <q-layout view="lHh lpR lff">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title> Admin Client </q-toolbar-title>

        <!-- <q-btn
          dense
          flat
          round
          icon="icon-asset material-icons ng-star-inserted"
          @click="toggleRightDrawer"
        /> -->
        <span class="menu-toggle" @click="toggleRightDrawer">☰</span>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <!-- drawer content -->

      <div
        class="q-img q-img--menu absolute-top"
        role="img"
        style="height: 204px"
      >
        <div style="padding-bottom: 82.5195%"></div>
        <div class="q-img__container absolute-full">
          <img
            class="
              q-img__image q-img__image--with-transition q-img__image--loaded
            "
            loading="lazy"
            aria-hidden="true"
            draggable="false"
            src="https://cdn.quasar.dev/img/material.png"
            style="object-fit: cover; object-position: 50% 50%"
          />
        </div>
        <div class="q-img__content absolute-full q-anchor--skip">
          <div class="absolute-bottom bg-transparent">
            <div class="q-avatar q-mb-sm" style="font-size: 56px">
              <div class="q-avatar__content row flex-center overflow-hidden">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
              </div>
            </div>
            <div class="text-weight-bold">Razvan Stoenescu</div>
            <div>@rstoenescu</div>
          </div>
        </div>
      </div>
    </q-drawer>

    <q-page-container>
      <!-- <router-view /> -->
      <slot></slot>
    </q-page-container>

    <!-- <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer> -->
  </q-layout>
</template>

<script>
import { ref } from "vue";
export default {
  name: "MainLayout",
  setup() {
    const rightDrawerOpen = ref(false);
    return {
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
};
</script>

<style>
.menu-toggle {
  font-size: 30px;
  cursor: pointer;
  padding-right: 20px;
}
</style>
