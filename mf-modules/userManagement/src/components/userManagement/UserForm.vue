<template>
  <div class="user-form q-mb-md">
    <q-card class="my-card" style="overflow: auto">
      <q-card-section>
        <h5>ایجاد کاربر</h5>
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <div class="row justify-between">
            <div class="col-md-3 q-pa-xs">
              <q-input
                filled
                v-model="name"
                label="نام *"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'فیلد نام اجباری است',
                ]"
              />
            </div>
            <div class="col-md-3 q-pa-xs">
              <q-input
                filled
                type="text"
                v-model="userName"
                label="نام کاربری  *"
                lazy-rules
                :rules="[
                  (val) =>
                    (val && val.length > 0) || 'فیلد نام کاربری اجباری است',
                ]"
              />
            </div>
            <div class="col-md-3 q-pa-xs">
              <q-input
                filled
                v-model="email"
                label="ایمیل *"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'فیلد ایمیل اجباری است',
                ]"
              />
            </div>
            <div class="col-md-3 q-pa-xs">
              <q-input filled v-model="address" label="آدرس *" lazy-rules />
            </div>
          </div>

          <!-- <div class="col-md-3"><q-toggle v-model="accept" label="I accept the license and terms" /></div> -->

          <div class="float-right q-mb-md">
            <q-btn
              label="ایجاد کاربر"
              type="submit"
              color="secondary"
              class="text-white"
            />
            <q-btn
              label="پاک کردن"
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
        $q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "کاربر جدید با موفقیت ثبت شد",
        });
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
