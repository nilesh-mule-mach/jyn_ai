<template>
  <div
    class="max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto default-form-b"
    id="element"
  >
    <div class="grid lg:grid-cols-2 gap-4">
      <div>
        <component
          :is="dynamicHeadingTag"
          class="mb-4 tracking-tight leading-normal"
          :class="[
            getHeadingWeight(data.heading__heading_weight.value[0].codename),
            getHeadingSize(data.heading__heading_size.value[0].codename),
            getHeadingColor(data.heading__heading_color.value[0].codename),
          ]"
        >
          {{ data.heading__heading_text.value }}
        </component>
        <span v-html="data.content.value" class="pr-10 text-2xl"></span>
      </div>
      <div class="p-10 bg-white shadow-md">
        <h3 class="text-xl text-primary mb-4 font-bold">
          {{ data.form_heading.value }}
        </h3>
        <form
          @submit.prevent="handleSubmit"
          action="https://forms.zohopublic.in/machintelsystemspvtltd/form/MachintelResourceForm/formperma/WMVE3MtQVWzataAa1GIrFbKj5B3pBNqWXgW2vt3V6Xs/htmlRecords/submit"
          name="form"
          id="form"
          method="POST"
          accept-charset="UTF-8"
          enctype="multipart/form-data"
          ref="myForm"
        >
          <input
            type="hidden"
            name="zf_referrer_name"
            value=""
          /><!-- To Track referrals , place the referrer name within the " " in the above hidden input field -->
          <input
            type="hidden"
            name="zf_redirect_url"
            :value="thankYouUrl"
          /><!-- To redirect to a specific page after record submission , place the respective url within the " " in the above hidden input field -->
          <input
            type="hidden"
            name="zc_gad"
            value=""
          /><!-- If GCLID is enabled in Zoho CRM Integration, click details of AdWords Ads will be pushed to Zoho CRM -->
          <div class="grid gap-4 lg:gap-6">
            <!-- Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  name="Name_First"
                  required
                  v-model="Name_First"
                  fieldType="7"
                  class="py-3 px-4 block w-full border border-colors-primary-900 rounded-md text-sm text-colors-font"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  name="Name_Last"
                  required
                  v-model="Name_Last"
                  fieldType="7"
                  class="py-3 px-4 block w-full border border-colors-primary-900 rounded-md text-sm text-colors-font"
                />
              </div>
            </div>
            <!-- End Grid -->

            <div>
              <input
                type="email"
                placeholder="Email"
                name="Email"
                value=""
                required
                v-model="Email"
                fieldType="9"
                class="py-3 px-4 block w-full border border-colors-primary-900 rounded-md text-sm text-colors-font"
              />
            </div>

            <!-- Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <input
                  type="text"
                  placeholder="Company"
                  name="SingleLine"
                  value=""
                  required
                  v-model="SingleLine"
                  fieldType="1"
                  class="py-3 px-4 block w-full border border-colors-primary-900 rounded-md text-sm text-colors-font"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Phone"
                  name="Number"
                  value=""
                  maxlength="18"
                  v-model="number"
                  required
                  class="py-3 px-4 block w-full border border-colors-primary-900 rounded-md text-sm text-colors-font"
                />
                <input
                  type="text"
                  name="password"
                  id="password"
                  v-model="password"
                />
                <input
                  type="hidden"
                  name="SingleLine1"
                  value=""
                  fieldType="1"
                  v-model="SingleLine1"
                  placeholder="Asset Name"
                />
                <input
                  type="hidden"
                  name="SingleLine2"
                  value=""
                  fieldType="1"
                  v-model="SingleLine2"
                  maxlength="255"
                  placeholder="UTM Source"
                />
                <input
                  type="hidden"
                  name="SingleLine3"
                  value=""
                  fieldType="1"
                  v-model="SingleLine3"
                  maxlength="255"
                  placeholder="UTM Medium"
                />
                <input
                  type="hidden"
                  name="SingleLine4"
                  value=""
                  fieldType="1"
                  v-model="SingleLine4"
                  maxlength="255"
                  placeholder="UTM Campaign"
                />
              </div>
            </div>
            <!-- End Grid -->
          </div>
          <!-- End Grid -->

          <!-- Checkbox -->
          <div class="mt-3 flex">
            <div>
              <label for="remember-me" class="text-xs"
                >By submitting this form I have read and acknowledged the
                <a
                  class="text-blue-600 decoration-2 underline font-medium"
                  href="https://machintel.com/privacy-policy"
                  target="_blank"
                  >Privacy policy</a
                ></label
              >
            </div>
          </div>
          <!-- End Checkbox -->

          <div class="mt-6 grid">
            <button type="submit" class="btn bg-accent-2 text-white">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getHeadingWeight,
  getHeadingColor,
  getHeadingSize,
  getHeadingType,
} from "/utils/dynamicOptions";
export default {
  name: "DefaultForm",
  data() {
    return {
      Name_First: "",
      Name_Last: "",
      Email: "",
      SingleLine: "",
      number: "",
      password: "",
      SingleLine1: "",
      SingleLine2: "",
      SingleLine3: "",
      SingleLine4: "",
    };
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    dynamicHeadingTag() {
      const headingTypeCode = this.data.heading__heading_type.value[0].codename;
      return getHeadingType(headingTypeCode);
    },
    thankYouUrl() {
      const baseUrl = "https://machintel.com";
      let path = this.$route.path;

      // Remove the leading slash from the path if present
      if (path.startsWith("/")) {
        path = path.substring(1);
      }

      // Remove the trailing slash from the path if present
      if (path.endsWith("/")) {
        path = path.substring(0, path.length - 1);
      }

      // Append '-thank-you' to the path
      return `${baseUrl}/${path}-thank-you`;
    },
  },
  mounted() {
    this.prefillForm();
  },
  methods: {
    getHeadingWeight,
    getHeadingColor,
    getHeadingSize,
    handleSubmit() {
      if (this.password) {
        window.location.href = "https://machintel.com/thank-you-two";
        return;
      }
      // Programmatically submit the form
      this.$refs.myForm.submit();
    },
    prefillForm() {
      const queryParams = new URL(window.location.href).searchParams;
      if (queryParams.has("utm_source")) {
        this.SingleLine2 = queryParams.get("utm_source");
      }
      if (queryParams.has("utm_medium")) {
        this.SingleLine3 = queryParams.get("utm_medium");
      }
      if (queryParams.has("utm_campaign")) {
        this.SingleLine4 = queryParams.get("utm_campaign");
      }
      this.SingleLine1 = this.data.heading__heading_text.value;
    },
  },
};
</script>

<style>
.default-form-b {
  p {
    @apply text-base;
  }
  #password {
    display: none;
  }
}
</style>
