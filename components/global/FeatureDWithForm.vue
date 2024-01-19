<template>
  <section>
    <div v-if="data.alignment.value[0].codename === 'image_right'">
      <div
        class="items-center py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"
      >
        <div
          v-if="
            data &&
            data.section_header &&
            data.section_header.linkedItems &&
            data.section_header.linkedItems[0] &&
            data.section_header.linkedItems[0].elements
          "
        >
          <HeaderSection :data="data.section_header.linkedItems[0].elements" />
        </div>
        <div class="lg:grid xl:grid-cols-3 lg:gap-8 xl:gap-12">
          <div
            class="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-4 md:space-y-0"
          >
            <div
              class="component component-CerCheckBox"
              v-for="codename in data.section_grid.linkedItems"
              :key="codename.system.codename"
            >
              <FeatureCard :data="codename.elements" />
            </div>
          </div>
          <div class="mb-8 lg:mb-0 default-form flex items-center">
            <!-- Contact Us Form-->
            <div class="p-10 bg-white shadow-md">
              <h2 class="mb-4 text-primary font-bold">
                Speak to an Expert Today!
              </h2>
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
                  <input type="hidden" name="SingleLine1" value="" fieldType=1 v-model="SingleLine1" placeholder="Asset Name" />
                  <input type="hidden" name="SingleLine2" value="" fieldType=1 v-model="SingleLine2" maxlength="255" placeholder="UTM Source" />
                  <input type="hidden" name="SingleLine3" value="" fieldType=1 v-model="SingleLine3" maxlength="255" placeholder="UTM Medium" />
                  <input type="hidden" name="SingleLine4" value="" fieldType=1 v-model="SingleLine4" maxlength="255" placeholder="UTM Campaign" />
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
      </div>
    </div>
    <div v-else>
      <div
        class="items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid xl:grid-cols-3 lg:gap-8 xl:gap-16 sm:py-16 lg:px-6"
      >
        <div class="mb-8 lg:mb-0">
          <div
            v-if="
              data &&
              data.section_header &&
              data.section_header.linkedItems &&
              data.section_header.linkedItems[0] &&
              data.section_header.linkedItems[0].elements
            "
          >
            <HeaderSection
              :data="data.section_header.linkedItems[0].elements"
            />
            <div
              v-if="
                data &&
                data.section_header &&
                data.section_header.linkedItems &&
                data.section_header.linkedItems[1] &&
                data.section_header.linkedItems[1].elements
              "
              class="inline-flex items-center"
            >
              <NaCta :data="data.section_header.linkedItems[1].elements" />
            </div>
          </div>
        </div>
        <div
          class="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-4 md:space-y-0"
        >
          <div
            class="component component-CerCheckBox"
            v-for="codename in data.section_grid.linkedItems"
            :key="codename.system.codename"
          >
            <FeatureCard :data="codename.elements" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "FeatureDwithForm",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
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
  computed:{
    thankYouUrl() {
    const baseUrl = 'https://machintel.com';
    let path = this.$route.path;

    // Remove the leading slash from the path if present
    if (path.startsWith('/')) {
      path = path.substring(1);
    }

    // Remove the trailing slash from the path if present
    if (path.endsWith('/')) {
      path = path.substring(0, path.length - 1);
    }

    // Append '-thank-you' to the path
    return `${baseUrl}/${path}-thank-you`;
  }
  },
  mounted() {
      this.prefillForm();
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
    prefillForm() {
        const queryParams = new URL(window.location.href).searchParams;
        if (queryParams.has('utm_source')) {
          this.SingleLine2 = queryParams.get('utm_source');
        }
        if (queryParams.has('utm_medium')) {
          this.SingleLine3 = queryParams.get('utm_medium');
        }
        if (queryParams.has('utm_campaign')) {
          this.SingleLine4 = queryParams.get('utm_campaign');
        }
        this.SingleLine1 = this.data.asset_name.value;
      }
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
