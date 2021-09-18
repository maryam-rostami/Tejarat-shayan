<template>
  <div class="user-form q-mb-md">
    <q-card class="my-card" style="overflow: auto">
      <q-card-section>
        <h5>Create User</h5>
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <div class="row justify-between">
            <div class="col-md-3 q-pa-xs">
              <q-input
                filled
                v-model="name"
                label="name *"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Please type something',
                ]"
              />
            </div>
            <div class="col-md-3 q-pa-xs">
              <q-input
                filled
                type="text"
                v-model="userName"
                label="user name *"
                lazy-rules
                :rules="[
                  (val) =>
                    (val !== null && val !== '') ||
                    'Please type your user name',
                ]"
              />
            </div>
            <div class="col-md-3 q-pa-xs">
              <q-input
                filled
                v-model="email"
                label="email *"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Please type something',
                ]"
              />
            </div>
            <div class="col-md-3 q-pa-xs">
              <q-input
                filled
                v-model="address"
                label="address *"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Please type something',
                ]"
              />
            </div>
          </div>

          <!-- <div class="col-md-3"><q-toggle v-model="accept" label="I accept the license and terms" /></div> -->

          <div class="float-right q-mb-md">
            <q-btn label="Submit" type="submit" color="secondary" />
            <q-btn
              label="Reset"
              type="reset"
              color="primary"
              flat
              class="q-ml-sm"
            />
          </div>
        </q-form> </q-card-section
    ></q-card>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";
export default {
  name: "UserForm",
  setup() {
    const $q = useQuasar();

    const name = ref(null);
    const userName = ref(null);
    const email = ref(null);
    const address = ref(null);

    return {
      name,
      userName,
      email,
      address,

      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "You need to accept the license and terms first",
          });
        } else {
          $q.notify({
            color: "green-4",
            textColor: "white",
            icon: "cloud_done",
            message: "Submitted",
          });
        }
      },

      onReset() {
        name.value = null;
        userName.value = null;
        email.value = null;
        email.value = null;
        address.value = null;
      },
    };
  },
};
</script>
<style lang="scss" scoped></style>
