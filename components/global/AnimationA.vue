<template>
  <div class="overflow-x-hidden">
    <div class="max-w-[85rem] mx-auto">
      <div
        v-if="
          data &&
          data.heading &&
          data.heading.linkedItems &&
          data.heading.linkedItems[0] &&
          data.heading.linkedItems[0].elements
        "
        class="text-center mt-7"
      >
        <HeaderSection :data="data.heading.linkedItems[0].elements" />
      </div>
      <div
        class="gap-32 text-primary py-8 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 px-4 sm:px-6 lg:px-8 items-start"
      >
        <div class="hidden lg:block">
          <div
            class="leftFade lg:order-1 max-h-[300px] mb-6 br-right flex justify-center items-center rounded-lg text-right bg-white py-16 px-10"
          >
            <div>
              <h2 class="text-xl font-bold">
                Welcome to Machintel's Data Intelligence: Where Data Meets
                Strategy
              </h2>
              <p class="text-base pt-5">
                Transforming Data into Market Leadership At Machintel, we don't
                just handle data; we transform it into a powerful tool for your
                B2B marketing needs. Our approach is about making every piece of
                data work for you, turning it into actionable insights that
                propel your business forward.
              </p>
            </div>
            <div class="ml-5 -mr-20">
              <img alt="icon" class="max-w-[111px]" src="/images/A1icon1.svg" />
            </div>
          </div>
          <div
            class="leftFade lg:order-1 max-h-[300px] my-6 br-right flex justify-center items-center rounded-lg text-right bg-white py-16 px-10"
          >
            <div>
              <h2 class="text-xl font-bold">
                Data Enrichment and Verification
              </h2>
              <p class="text-base pt-5">
                We enhance the quality of your campaigns by integrating
                Machintel's top-tier insights into your existing datasets. This
                process transforms standard data into a goldmine of
                opportunities, ensuring that your marketing operates on the most
                reliable and insightful data available.
              </p>
            </div>
            <div class="ml-5 -mr-20">
              <img alt="icon" class="max-w-[111px]" src="/images/A1icon2.svg" />
            </div>
          </div>
          <div
            class="leftFade lg:order-1 max-h-[300px] my-6 br-right flex justify-center items-center rounded-lg text-right bg-white py-16 px-10"
          >
            <div>
              <h2 class="text-xl font-bold">
                Customizable Solutions for Unique Needs
              </h2>
              <p class="text-base pt-5">
                Every business is unique, and so are our data solutions. Using
                APIs and custom development, we tailor our data tools to fit
                your specific business needs and goals, ensuring your strategies
                are as unique as your company.
              </p>
            </div>
            <div class="ml-5 -mr-20">
              <img alt="icon" class="max-w-[111px]" src="/images/A1icon3.svg" />
            </div>
          </div>
          <div
            class="leftFade lg:order-1 max-h-[300px] my-6 br-right flex justify-center items-center rounded-lg text-right bg-white py-16 px-10"
          >
            <div>
              <h2 class="text-xl font-bold">
                Activating Your First-Party Data
              </h2>
              <p class="text-base pt-5">
                We link your valuable first-party data to our B2B-to-Consumer ID
                Graph, extending its utility across various platforms. This
                process enables fast and accurate programmatic advertising and
                monetizes valuable first-party data.
              </p>
            </div>
            <div class="ml-5 -mr-20">
              <img alt="icon" class="max-w-[111px]" src="/images/A1icon4.svg" />
            </div>
          </div>
          <div
            class="leftFade lg:order-1 max-h-[300px] my-6 br-right flex justify-center items-center rounded-lg text-right bg-white py-16 px-10"
          >
            <div>
              <h2 class="text-xl font-bold">
                Target and Segment with Precision
              </h2>
              <p class="text-base pt-5">
                Our comprehensive location data on businesses, including crucial
                personnel information, facilitates precise and functional
                analysis. This allows our customers to target the most relevant
                business locations effectively.
              </p>
            </div>
            <div class="ml-5 -mr-20">
              <img alt="icon" class="max-w-[111px]" src="/images/A1icon5.svg" />
            </div>
          </div>
          <div
            class="leftFade lg:order-1 max-h-[300px] my-6 br-right flex justify-center items-center rounded-lg text-right bg-white py-16 px-10"
          >
            <div>
              <h2 class="text-xl font-bold">
                Model Decision Committees for Targeted Campaigns
              </h2>
              <p class="text-base pt-5">
                We enable the creation of focused sub-audiences within your
                overall campaign audience, tailoring your strategies to align
                with the specific decision-making committees across companies.
              </p>
            </div>
            <div class="ml-5 -mr-20">
              <img alt="icon" class="max-w-[111px]" src="/images/A1icon6.svg" />
            </div>
          </div>
        </div>
        <div class="hidden lg:block">
          <div
            class="rightFade lg:order-1 max-h-[300px] mb-6 br-left flex justify-center items-center rounded-lg text-left bg-white py-16 px-10"
          >
            <div class="mr-5 -ml-20">
              <img alt="icon" class="max-w-[111px]" src="/images/A1icon7.svg" />
            </div>
            <div>
              <h2 class="text-xl font-bold">
                Advanced Data Search and Analysis
              </h2>
              <p class="text-base pt-5">
                Our extensive B2B data reservoir boasts over 5.5 billion MAID
                records. By navigating this vast database, which covers 31
                publications across 16 industries and 190 countries, we ensure
                that your marketing outreach is not just broad but sharply
                focused, optimizing your ROI at every turn.
              </p>
            </div>
          </div>
          <div
            class="rightFade lg:order-1 max-h-[300px] my-6 br-left flex justify-center items-center rounded-lg text-left bg-white py-16 px-10"
          >
            <div class="mr-5 -ml-20">
              <img alt="icon" class="max-w-[111px]" src="/images/A1icon8.svg" />
            </div>
            <div>
              <h2 class="text-xl font-bold">
                Seamless Integrations for Maximum Utility
              </h2>
              <p class="text-base pt-5">
                Our expansive B2B data integrates effortlessly with your
                existing CRM and marketing platforms. This seamless integration
                provides smooth data flow and maximum utility, optimizing your
                marketing strategies and operational efficiency.
              </p>
            </div>
          </div>
          <div
            class="rightFade lg:order-1 max-h-[300px] my-6 br-left flex justify-center items-center rounded-lg text-left bg-white py-16 px-10"
          >
            <div class="mr-5 -ml-20">
              <img alt="icon" class="max-w-[111px]" src="/images/A1icon9.svg" />
            </div>
            <div>
              <h2 class="text-xl font-bold">
                Layering Data for Precision and Impact
              </h2>
              <p class="text-base pt-5">
                Our process involves layering comprehensive business and
                personal data on top of your first-party sources. This technique
                allows for an advanced understanding of customer behavior and
                segmentation, unlocking new business opportunities and enhancing
                campaign precision.
              </p>
            </div>
          </div>
          <div
            class="rightFade lg:order-1 max-h-[300px] my-6 br-left flex justify-center items-center rounded-lg text-left bg-white py-16 px-10"
          >
            <div class="mr-5 -ml-20">
              <img
                alt="icon"
                class="max-w-[111px]"
                src="/images/A1icon10.svg"
              />
            </div>
            <div>
              <h2 class="text-xl font-bold">
                White-label Our B2B Data and ID Graph
              </h2>
              <p class="text-base pt-5">
                Approximately 40% of all B2B data available in AdTech & MarTech
                is powered by our B2B Audience Data. Our ready-made data
                pipeline is available for licensing, supercharging your data
                products and applications, and allowing you to focus on growing
                your business.
              </p>
            </div>
          </div>
          <div
            class="rightFade lg:order-1 max-h-[300px] my-6 br-left flex justify-center items-center rounded-lg text-left bg-white py-16 px-10"
          >
            <div class="mr-5 -ml-20">
              <img
                alt="icon"
                class="max-w-[111px]"
                src="/images/A1icon11.svg"
              />
            </div>
            <div>
              <h2 class="text-xl font-bold">
                Append Domains for Enhanced Reach
              </h2>
              <p class="text-base pt-5">
                Our domain coverage for global businesses, capturing multiple
                domains used by individual companies, enhances your reach and
                campaign effectiveness. This feature is particularly valuable in
                linking various business aspects to your marketing efforts.
              </p>
            </div>
          </div>
          <div
            class="rightFade lg:order-1 max-h-[300px] my-6 br-left flex justify-center items-center rounded-lg text-left bg-white py-16 px-10"
          >
            <div class="mr-5 -ml-20">
              <img
                alt="icon"
                class="max-w-[111px]"
                src="/images/A1icon12.svg"
              />
            </div>
            <div>
              <h2 class="text-xl font-bold">
                Transform Your B2B Marketing with Machintel
              </h2>
              <p class="text-base pt-5">
                Embrace the power of data-driven marketing with Machintel. Our
                approach ensures that your marketing strategies are not just
                effective, but also innovative, aligning with the latest
                industry trends.
              </p>
            </div>
          </div>
        </div>
        <div class="block lg:hidden">
          <div
            class="leftFade lg:order-1 mb-6 br-left flex justify-center items-center rounded-lg text-left bg-white py-16 px-10"
          >
            <div>
              <h2 class="text-xl font-bold">
                Welcome to Machintel's Data Intelligence: Where Data Meets
                Strategy
              </h2>
              <p class="text-base pt-5">
                Transforming Data into Market Leadership At Machintel, we don't
                just handle data; we transform it into a powerful tool for your
                B2B marketing needs. Our approach is about making every piece of
                data work for you, turning it into actionable insights that
                propel your business forward.
              </p>
            </div>
          </div>
          <div
            class="rightFade lg:order-1 my-6 br-left flex justify-center items-center rounded-lg text-left bg-white py-16 px-10"
          >
            <div>
              <h2 class="text-xl font-bold">
                Data Enrichment and Verification
              </h2>
              <p class="text-base pt-5">
                We enhance the quality of your campaigns by integrating
                Machintel's top-tier insights into your existing datasets. This
                process transforms standard data into a goldmine of
                opportunities, ensuring that your marketing operates on the most
                reliable and insightful data available.
              </p>
            </div>
          </div>
          <div
            class="leftFade lg:order-1 my-6 br-left flex justify-center items-center rounded-lg text-left bg-white py-16 px-10"
          >
            <div>
              <h2 class="text-xl font-bold">
                Customizable Solutions for Unique Needs
              </h2>
              <p class="text-base pt-5">
                Every business is unique, and so are our data solutions. Using
                APIs and custom development, we tailor our data tools to fit
                your specific business needs and goals, ensuring your strategies
                are as unique as your company.
              </p>
            </div>
          </div>
          <div
            class="rightFade lg:order-1 my-6 br-left flex justify-center items-center rounded-lg text-left bg-white py-16 px-10"
          >
            <div>
              <h2 class="text-xl font-bold">
                Activating Your First-Party Data
              </h2>
              <p class="text-base pt-5">
                We link your valuable first-party data to our B2B-to-Consumer ID
                Graph, extending its utility across various platforms. This
                process enables fast and accurate programmatic advertising and
                monetizes valuable first-party data.
              </p>
            </div>
          </div>
          <div
            class="leftFade lg:order-1 my-6 br-left flex justify-center items-center rounded-lg text-left bg-white py-16 px-10"
          >
            <div>
              <h2 class="text-xl font-bold">
                Target and Segment with Precision
              </h2>
              <p class="text-base pt-5">
                Our comprehensive location data on businesses, including crucial
                personnel information, facilitates precise and functional
                analysis. This allows our customers to target the most relevant
                business locations effectively.
              </p>
            </div>
          </div>
          <div
            class="rightFade lg:order-1 my-6 br-left flex justify-center items-center rounded-lg text-left bg-white py-16 px-10"
          >
            <div>
              <h2 class="text-xl font-bold">
                Model Decision Committees for Targeted Campaigns
              </h2>
              <p class="text-base pt-5">
                We enable the creation of focused sub-audiences within your
                overall campaign audience, tailoring your strategies to align
                with the specific decision-making committees across companies.
              </p>
            </div>
          </div>

          <div
            class="leftFade lg:order-1 mb-6 br-left flex justify-center items-center rounded-lg text-left bg-white py-16 px-10"
          >
            <div>
              <h2 class="text-xl font-bold">
                Advanced Data Search and Analysis
              </h2>
              <p class="text-base pt-5">
                Our extensive B2B data reservoir boasts over 5.5 billion MAID
                records. By navigating this vast database, which covers 31
                publications across 16 industries and 190 countries, we ensure
                that your marketing outreach is not just broad but sharply
                focused, optimizing your ROI at every turn.
              </p>
            </div>
          </div>
          <div
            class="rightFade lg:order-1 my-6 br-left flex justify-center items-center rounded-lg text-left bg-white py-16 px-10"
          >
            <div>
              <h2 class="text-xl font-bold">
                Seamless Integrations for Maximum Utility
              </h2>
              <p class="text-base pt-5">
                Our expansive B2B data integrates effortlessly with your
                existing CRM and marketing platforms. This seamless integration
                provides smooth data flow and maximum utility, optimizing your
                marketing strategies and operational efficiency.
              </p>
            </div>
          </div>
          <div
            class="leftFade lg:order-1 my-6 br-left flex justify-center items-center rounded-lg text-left bg-white py-16 px-10"
          >
            <div>
              <h2 class="text-xl font-bold">
                Layering Data for Precision and Impact
              </h2>
              <p class="text-base pt-5">
                Our process involves layering comprehensive business and
                personal data on top of your first-party sources. This technique
                allows for an advanced understanding of customer behavior and
                segmentation, unlocking new business opportunities and enhancing
                campaign precision.
              </p>
            </div>
          </div>
          <div
            class="rightFade lg:order-1 my-6 br-left flex justify-center items-center rounded-lg text-left bg-white py-16 px-10"
          >
            <div>
              <h2 class="text-xl font-bold">
                White-label Our B2B Data and ID Graph
              </h2>
              <p class="text-base pt-5">
                Approximately 40% of all B2B data available in AdTech & MarTech
                is powered by our B2B Audience Data. Our ready-made data
                pipeline is available for licensing, supercharging your data
                products and applications, and allowing you to focus on growing
                your business.
              </p>
            </div>
          </div>
          <div
            class="leftFade lg:order-1 my-6 br-left flex justify-center items-center rounded-lg text-left bg-white py-16 px-10"
          >
            <div>
              <h2 class="text-xl font-bold">
                Append Domains for Enhanced Reach
              </h2>
              <p class="text-base pt-5">
                Our domain coverage for global businesses, capturing multiple
                domains used by individual companies, enhances your reach and
                campaign effectiveness. This feature is particularly valuable in
                linking various business aspects to your marketing efforts.
              </p>
            </div>
          </div>
          <div
            class="rightFade lg:order-1 my-6 br-left flex justify-center items-center rounded-lg text-left bg-white py-16 px-10"
          >
            <div>
              <h2 class="text-xl font-bold">
                Transform Your B2B Marketing with Machintel
              </h2>
              <p class="text-base pt-5">
                Embrace the power of data-driven marketing with Machintel. Our
                approach ensures that your marketing strategies are not just
                effective, but also innovative, aligning with the latest
                industry trends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AnimationA",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });
    const hiddenElements = document.querySelectorAll(".leftFade");
    const righthiddenElements = document.querySelectorAll(".rightFade");
    hiddenElements.forEach((el) => observer.observe(el));
    righthiddenElements.forEach((el) => observer.observe(el));
  },
};
</script>

<style>
.leftFade {
  opacity: 0;
  transform: translateX(-100%);
  transition: all 1s;
}
.rightFade {
  opacity: 0;
  transform: translateX(100%);
  transition: all 1s;
}
.show {
  opacity: 1;
  transform: translateX(0);
}
@media (prefers-reduced-motion) {
  .hidden {
    transition: none;
  }
}
</style>
