<template>
  <div
    class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"
  >
    <div class="mb-10">
      <h1 class="text-primary text-3xl lg:text-5xl font-serif mb-7 mt-4">
        Careers
      </h1>
      <p class="text-xl antialiased font-medium text-font">
        Current open Positions
      </p>
    </div>
    <div>
      <div
        v-for="(post, index) in pageData"
        :key="index"
        class="mb-10 p-6 bg-grey max-w-3xl rounded-2xl"
      >
        <a class="" :href="'/careers/' + post.elements.slug.value">
          <h4 class="text-primary text-lg font-bold mb-5">
            {{ post.elements.job_title.value }}
          </h4>
          <p>
            <span
              class="rounded-2xl bg-white text-primary mr-3 px-6 py-3 mt-3 inline-block"
              >{{ post.elements.city.value }}</span
            >
            <span
              class="rounded-2xl bg-white text-primary mr-3 px-6 py-3 mt-3 inline-block"
              >{{ post.elements.shift.value }}</span
            >
            <span
              class="rounded-2xl bg-white text-primary mr-3 px-6 py-3 mt-3 inline-block"
              >{{ post.elements.on_site_or_remote.value }}</span
            >
          </p>
        </a>
      </div>
      <h3 class="text-xl text-primary">Disclaimer</h3>
      <p class="mb-6">
        Machintel is an equal-opportunity employer and is committed to give
        their employees a pleasant work environment that has no discrimination
        and harassment.
      </p>

      <p class="mb-6">
        All employment decisions at Machintel are based on business needs, job
        requirements, and individual qualifications. Without regard to race,
        color, religion or belief, national, social or ethnic origin, sex
        (including pregnancy), age, physical, mental or sensory disability, HIV
        status, sexual orientation, gender identity and expression, marital,
        civil union, domestic partnership status, past or present military
        service, family medical history or genetic information, family or
        parental status, or any other status that are protected by the laws or
        regulations in the locations where we operate. We do not tolerate
        discrimination or harassment based on any of these characteristics.
        Machintel encourages applicants of all ages.
      </p>

      <p>
        We offer best-in-class compensation and benefits commensurate with the
        employees’ experience and responsibilities.
      </p>
    </div>
  </div>
</template>

<script>
import { DeliveryClient } from "@kentico/kontent-delivery";

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
        .items() // Replace with your actual Kontent item codename
        .type("job_opening")
        .orderParameter("elements.job_title[asc]")

        .toPromise();

      return {
        pageData: response.data.items,
      };
    } catch (error) {
      console.error("Error fetching data:", error);
      return { pageData: {} };
    }
  },
};
</script>
