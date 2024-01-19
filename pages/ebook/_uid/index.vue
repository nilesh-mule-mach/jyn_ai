<template>
  <div class="resource">
    <div
      class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6"
    >
      <div>
        <img
          :src="pageData.elements.image.value[0].url"
          :alt="pageData.elements.image.value[0].description"
        />
      </div>
      <div class="text-font font-medium antialiased">
        <span class="text-base">{{
          pageData.elements.type.value[0].name
        }}</span>
        <h1 class="text-primary text-3xl lg:text-5xl font-serif mb-7 mt-4">
          {{ pageData.elements.post_title.value }}
        </h1>
        <div
          class="font-medium antialiased text-lg"
          v-html="pageData.elements.intro.value"
        ></div>
      </div>
    </div>
    <section class="bg-gray-200">
      <div
        class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6"
      >
        <div class="">
          <div
            v-html="pageData.elements.description.value"
            class="text-gray-900 font-medium text-lg antialiased"
          ></div>
        </div>
        <div class="p-10 bg-white">
          <p class="font-bold text-lg text-center">
            {{ pageData.elements.form_heading.value }}
          </p>
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
    </section>
  </div>

  <!-- Render components dynamically based on linkedItems -->
</template>

<script>
import { DeliveryClient } from "@kentico/kontent-delivery";

export default {
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
  async asyncData({ route, params }) {
    const projectId = process.env.PROJECT_ID;
    const previewApiKey = process.env.PREVIEW_ID;
    const config = {
      projectId: projectId,
    };
    if (previewApiKey) {
      config.previewApiKey = previewApiKey;
      config.defaultQueryConfig = { usePreviewMode: true };
    }

    const deliveryClient = new DeliveryClient(config);

    try {
      const response = await deliveryClient
        .items() // Replace with your actual Kontent item codename
        .type("resource_item")
        .equalsFilter("elements.slug", route.params.uid)
        .toPromise();

      return { pageData: response.data.items[0] };
    } catch (error) {
      console.error("Error fetching data:", error);
      return { pageData: {} };
    }
  },

  head() {
    return {
      title: this.pageData.elements.meta_title.value,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.pageData.elements.meta_description.value,
        },
      ],
    };
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
        this.SingleLine1 = this.pageData.elements.post_title.value;
      }
  },
  computed: {
  thankYouUrl() {
    const baseUrl = 'https://machintel.com'; // Replace with your actual domain
    // Assuming your route params contain 'uid' for the slug
    // Also ensure to remove the leading slash from the route path if present
    const path = this.$route.path.startsWith('/') ? this.$route.path.substring(1) : this.$route.path;
    return `${baseUrl}/${path}/thank-you`;
  }
},
  
};
</script>
<style>
.resource {
  a {
    @apply text-accent;
  }
  ul {
    list-style-type: disc;
    @apply marker:text-primary;
    li {
      @apply ml-5 mb-3;

      strong {
        @apply text-primary;
      }
    }
  }
  #password {
    display: none;
  }
}
</style>
