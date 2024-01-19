<template>
  <div
    class="max-w-[80rem] px-4 sm:px-6 lg:px-8 mx-auto py-4 sm:py-6 lg:py-8 job-listing"
  >
    <div class="grid lg:grid-cols-6 gap-y-8 lg:gap-y-0 lg:gap-x-6 lg:gap-x-12">
      <!-- Content -->
      <div class="lg:col-span-5 content">
        <div class="py-8 lg:pe-4 lg:pe-8">
          <div class="space-y-5 lg:space-y-8">
            <h1
              class="text-3xl font-normal lg:text-5xl font-serif text-primary"
            >
              {{ pageData.job_title.value }}
            </h1>
            <p>
              <span
                class="rounded-2xl bg-grey text-primary mr-3 px-6 py-3 mt-3 inline-block"
                >{{ pageData.city.value }}</span
              >
              <span
                class="rounded-2xl bg-grey text-primary mr-3 px-6 py-3 mt-3 inline-block"
                >{{ pageData.shift.value }}</span
              >
              <span
                class="rounded-2xl bg-grey text-primary mr-3 px-6 py-3 mt-3 inline-block"
                >{{ pageData.on_site_or_remote.value }}</span
              >
              <span
                class="rounded-2xl bg-grey text-primary mr-3 px-6 py-3 mt-3 inline-block"
                >{{ pageData.experience.value }} experience</span
              >
            </p>
            <div>
              <span v-html="pageData.job_description.value" />
            </div>
          </div>
        </div>
        <div class="">
          <!-- Change or deletion of the name attributes in the input tag will lead to empty values on record submission-->
          <h2 class="text-2xl font-normal lg:text-5xl font-serif text-primary">
            Apply Now
          </h2>
          <form
            action="https://forms.zohopublic.in/machintelsystemspvtltd/form/JobApplications/formperma/JI23avDDZmFQ7Pg4VP1owbLfaR4WuhnPekKUyno6mRs/htmlRecords/submit"
            name="form"
            id="form"
            method="POST"
            accept-charset="UTF-8"
            enctype="multipart/form-data"
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
            <!--Name-->
            <div class="grid gap-4 lg:gap-6">
              <!-- Grid -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mb-6">
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    name="Name_First"
                    fieldType="7"
                    required
                    class="py-3 px-4 block w-full border border-colors-primary-900 rounded-md text-sm text-colors-font"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="Name_Last"
                    fieldType="7"
                    required
                    class="py-3 px-4 block w-full border border-colors-primary-900 rounded-md text-sm text-colors-font"
                  />
                </div>
              </div>
            </div>
            <!-- Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mb-6">
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  name="Email"
                  value=""
                  fieldType="9"
                  required
                  class="py-3 px-4 block w-full border border-colors-primary-900 rounded-md text-sm text-colors-font"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Phone"
                  compname="PhoneNumber"
                  name="PhoneNumber_countrycode"
                  phoneFormat="1"
                  isCountryCodeEnabled="false"
                  required
                  class="py-3 px-4 block w-full border border-colors-primary-900 rounded-md text-sm text-colors-font"
                />
              </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mb-6">
              <div>
                <input
                  type="text"
                  name="SingleLine"
                  value=""
                  fieldType="1"
                  required
                  placeholder="Total Experience"
                  class="py-3 px-4 block w-full border border-colors-primary-900 rounded-md text-sm text-colors-font"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="SingleLine1"
                  value=""
                  fieldType="1"
                  required
                  placeholder="Relevent Experience"
                  class="py-3 px-4 block w-full border border-colors-primary-900 rounded-md text-sm text-colors-font"
                />
              </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mb-6">
              <div>
                <input
                  type="text"
                  name="SingleLine2"
                  value=""
                  fieldType="1"
                  required
                  maxlength="255"
                  placeholder="LinkedIN URL"
                  class="py-3 px-4 block w-full border border-colors-primary-900 rounded-md text-sm text-colors-font"
                />
              </div>
            </div>
            <div>
              <label>Upload Your CV</label>
              <input
                type="file"
                name="FileUpload"
                checktype="c1"
                required
                class="py-6 px-10 block w-full border border-colors-primary-900 rounded-md text-sm text-colors-font"
              />
              <input
                type="text"
                name="SingleLine3"
                :value="pageData.job_title.value"
                required
                fieldType="1"
                maxlength="255"
                placeholder=""
                class="hidden"
              />
            </div>

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
            <div class="mt-6 text-center">
              <button
                type="submit"
                class="py-2 px-10 rounded-full bg-accent-2 text-white"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { DeliveryClient } from "@kentico/kontent-delivery";
//import dayjs from'dayjs';

export default {
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
        .items()
        .type("job_opening")
        .collection("default")
        .equalsFilter("elements.slug", route.params.uid)
        .toPromise();

      return {
        pageData: response.data.items[0].elements,
      };
    } catch (error) {
      console.error("Error fetching data:", error);
      return { pageData: {} };
    }
  },
};
</script>
<style>
.job-listing {
  p,
  ul {
    @apply text-font my-3;
  }
  h2 {
    @apply text-3xl mb-5 font-bold text-primary;
  }
  h3 {
    @apply text-2xl text-primary mb-3;
  }
  h4 {
    @apply text-xl text-primary mb-3;
  }
  h5 {
    @apply text-sm text-primary mb-3;
  }
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
  .content {
    img {
      @apply my-5;
    }
  }
  figure {
    border: none;
  }
}
</style>
