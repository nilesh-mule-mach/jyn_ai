<template>
  <div
    class="max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto default-form"
  >
    <div>
      <form
        :action="data.form_submit_url.value"
        name="form"
        id="form"
        method="POST"
        accept-charset="UTF-8"
        enctype="multipart/form-data"
        class="text-black"
      >
        <div class="grid lg:grid-cols-2 gap-4">
          <div>
            <input
              type="checkbox"
              id="Checkbox_1"
              name="Checkbox"
              value="Content&#x20;Marketing"
            />
            <label for="Checkbox_1">Content&#x20;Marketing</label>
            <br />
            <input
              type="checkbox"
              id="Checkbox_2"
              name="Checkbox"
              value="Digital&#x20;Advertising"
            />
            <label for="Checkbox_2">Digital&#x20;Advertising</label>
            <br />
            <input
              type="checkbox"
              id="Checkbox_3"
              name="Checkbox"
              value="Digital&#x20;Events"
            />
            <label for="Checkbox_3">Digital&#x20;Events</label>
            <br />
            <input
              type="checkbox"
              id="Checkbox_4"
              name="Checkbox"
              value="Physical&#x20;Events"
            />
            <label for="Checkbox_4">Physical&#x20;Events</label>
            <br />
            <input
              type="checkbox"
              id="Checkbox_5"
              name="Checkbox"
              value="Social&#x20;Media"
            />
            <label for="Checkbox_5">Social&#x20;Media</label>
            <br />
            <input
              type="checkbox"
              id="Checkbox_6"
              name="Checkbox"
              value="Website"
            />
            <label for="Checkbox_6">Website</label>
            <br />
            <input
              type="checkbox"
              id="Checkbox_7"
              name="Checkbox"
              value="Unsubscribe&#x20;All"
            />
            <label for="Checkbox_7">Unsubscribe&#x20;All</label>
          </div>
          <div class="p-10 bg-white shadow-md">
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
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 text-black">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="First Name"
                    name="Name_First"
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
                    fieldType="7"
                    class="py-3 px-4 block w-full border border-colors-primary-900 rounded-md text-sm text-colors-font"
                  />
                </div>
              </div>
              <!-- End Grid -->

              <!-- Grid -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    name="Email"
                    value=""
                    fieldType="9"
                    class="py-3 px-4 block w-full border border-colors-primary-900 rounded-md text-sm text-colors-font"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Company"
                    name="SingleLine"
                    value=""
                    fieldType="1"
                    class="py-3 px-4 block w-full border border-colors-primary-900 rounded-md text-sm text-colors-font"
                  />
                </div>
              </div>
              <div></div>
              <!-- End Grid -->
            </div>
            <!-- End Grid -->

            <!-- Checkbox -->
            <div class="mt-3 flex">
              <div>
                <label for="remember-me" class="text-xs text-black"
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
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "DefaultForm",
  props: {
    data: {
      type: Object,
      required: true,
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
}
</style>
