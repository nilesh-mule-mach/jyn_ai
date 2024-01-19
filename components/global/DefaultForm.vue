<template>
  <div
    class="max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto default-form"
    
  >
    <div class="grid lg:grid-cols-2 gap-4">
      <div v-html="data.content.value" class="pr-10 text-2xl" />
      <div class="p-10 bg-white shadow-md">
        <form
          @submit.prevent="handleSubmit"
          :action="formData.form_submit_url.value"
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
            value=""
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
                  required
                  placeholder="First Name"
                  name="Name_First"
                  v-model="Name_First"
                  fieldType="7"
                  class="py-3 px-4 block w-full border border-colors-primary-900 rounded-md text-sm text-colors-font"
                />
              </div>

              <div>
                <input
                  type="text"
                  required
                  placeholder="Last Name"
                  name="Name_Last"
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
                required
                placeholder="Email"
                name="Email"
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
                  required
                  placeholder="Company"
                  name="SingleLine"
                  v-model="SingleLine"
                  fieldType="1"
                  class="py-3 px-4 block w-full border border-colors-primary-900 rounded-md text-sm text-colors-font"
                />
              </div>

              <div>
                <input
                  type="text"
                  required
                  placeholder="Phone"
                  compname="PhoneNumber"
                  name="PhoneNumber_countrycode"
                  v-model="PhoneNumber_countrycode"
                  phoneFormat="1"
                  isCountryCodeEnabled="false"
                  class="py-3 px-4 block w-full border border-colors-primary-900 rounded-md text-sm text-colors-font"
                />
              </div>
            </div>
            <div>
              <textarea
                name="MultiLine"
                v-model="MultiLine"
                maxlength="65535"
                placeholder="Message (optional)"
                class="py-3 px-4 block w-full border border-colors-primary-900 rounded-md text-sm text-colors-font"
              ></textarea>
              <input
                type="text"
                name="password"
                id="password"
                v-model="password"
              />
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
export default {
  name: "DefaultForm",
  data() {
    return {
      Name_First: "",
      Name_Last: "",
      Email: "",
      SingleLine: "",
      PhoneNumber_countrycode: "",
      MultiLine: "",
      password: "",
      formData: {
        form_submit_url: {
          value: this.data.form_submit_url.value, // Default or fetched URL
        },
      },
    };
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleSubmit() {
      if (this.password) {
        window.location.href = "https://machintel.com/thank-you-two";
        return;
      }
      // Programmatically submit the form
      this.$refs.myForm.submit();
    },
  },
};
</script>

<style>
.default-form {
  h2 {
    @apply text-accent text-xl;
  }
  p {
    @apply text-base;
  }
  #password {
    display: none;
  }
}
</style>
