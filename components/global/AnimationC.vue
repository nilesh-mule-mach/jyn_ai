<template>
  <div class="overflow-x-hidden">
    <div class="max-w-[85rem] mx-auto">
      <div
        v-if="
          data &&
          data.section_header &&
          data.section_header.linkedItems &&
          data.section_header.linkedItems[0] &&
          data.section_header.linkedItems[0].elements
        "
        class="text-center mt-7"
      >
        <HeaderSection :data="data.section_header.linkedItems[0].elements" />
      </div>
      <div
        class="grid lg:grid-cols-[50%_50%] lg:gap-1 lg:py-8 md:gap-8 md:items-center lg:mx-10 sm:grid-cols-none"
      >
        <div class="hidden lg:block -mr-7">
          <div
            class="leftFade text-right flex lg:order-1 justify-center items-center"
          >
            <div class="bg-white border-primary m-5">
              <h2 class=" font-extrabold text-2xl text-primary">
                Initial Consultation and Strategy Development
              </h2>
              <p class="text-primary">
                When you reach out to Machintel, your journey begins with an
                in-depth consultation. Our experts will discuss your specific
                marketing needs, goals, and challenges. This stage is all about
                understanding your unique business context so that we can tailor
                our services accordingly.
              </p>
            </div>
            <div>
              <img alt="icon" class="max-w-[111px]" src="/images/animation2/icon4.svg" />
            </div>
          </div>

          <div
            class="leftFade text-right flex lg:order-1 justify-center items-center"
          >
            <div class="bg-white border-primary m-5">
              <h2 class=" font-extrabold text-2xl text-primary">Custom Solution Crafting</h2>
              <p class="text-primary">
                Armed with insights and a clear strategy, we then craft a custom
                solution specifically for your business. This can range from
                data enrichment and audience targeting to comprehensive campaign
                management. Our solutions are designed to be flexible, scalable,
                and aligned with your marketing goals.
              </p>
            </div>
            <div>
              <img alt="icon" class="max-w-[111px]" src="/images/animation2/icon1.svg" />
            </div>
          </div>

          <div
            class="leftFade text-right flex lg:order-1 justify-center items-center"
          >
            <div class="bg-white border-primary m-5">
              <h2 class=" font-extrabold text-2xl text-primary">
                Campaign Execution and Management
              </h2>
              <p class="text-primary">
                With everything set, your campaigns go live. Our team manages
                and monitors the performance, making real-time adjustments as
                needed. Expect a hands-on approach from Machintel, ensuring that
                every aspect of your campaign is optimized for success.
              </p>
            </div>
            <div>
              <img alt="icon" class="max-w-[111px]" src="/images/animation2/icon6.svg" />
            </div>
          </div>

          <div
            class="leftFade text-right flex lg:order-1 justify-center items-center"
          >
            <div class="bg-white border-primary m-5">
              <h2 class=" font-extrabold text-2xl text-primary">
                Long-Term Success and Growth
              </h2>
              <p class="text-primary">
                Our goal is to build long-term partnerships. As your business
                grows and evolves, we adapt our strategies to keep you ahead in
                your industry. Expect proactive suggestions and innovations from
                our team, aligning with the latest market trends and
                technologies.
              </p>
            </div>
            <div>
              <img alt="icon" class="max-w-[111px]" src="/images/animation2/icon7.svg" />
            </div>
          </div>
        </div>

        <div class="hidden lg:block -ml-7">
          <div class="rightFade flex lg:order-1 justify-center items-center">
            <div>
              <img alt="icon" class="max-w-[111px]" src="/images/animation2/icon5.svg" />
            </div>
            <div class="bg-white border-primary m-5">
              <h2 class=" font-extrabold text-2xl text-primary">Data and Audience Analysis</h2>
              <p class="text-primary">
                Once we've established a clear understanding of your objectives,
                our team delves into our extensive data reservoirs. We analyze
                relevant data sets and audience segments to identify the most
                effective strategies for your campaigns. Expect insights that go
                beyond general trends, offering a nuanced understanding of your
                target market.
              </p>
            </div>
          </div>

          <div class="rightFade flex lg:order-1 justify-center items-center">
            <div>
              <img alt="icon" class="max-w-[111px]" src="/images/animation2/icon2.svg" />
            </div>
            <div class="bg-white border-primary m-5">
              <h2 class=" font-extrabold text-2xl text-primary">
                Integration and Implementation
              </h2>
              <p class="text-primary">
                After finalizing the strategy and solutions, we integrate our
                services with your existing systems. Whether it's data
                integration with your CRM or setting up targeted advertising
                campaigns, our team ensures a seamless implementation process.
              </p>
            </div>
          </div>

          <div class="rightFade flex lg:order-1 justify-center items-center">
            <div>
              <img alt="icon" class="max-w-[111px]" src="/images/animation2/icon3.svg" />
            </div>
            <div class="bg-white border-primary m-5">
              <h2 class=" font-extrabold text-2xl text-primary">
                Continuous Optimization and Reporting
              </h2>
              <p class="text-primary">
                Marketing is an evolving process. We provide regular reports and
                insights on your campaign's performance, offering transparency
                and clarity. Based on these insights, we continuously optimize
                your strategies to ensure sustained success and improvement.
              </p>
            </div>
          </div>
        </div>
        <div class="block lg:hidden">
          <div class="flex lg:order-1 justify-center items-center">
            <div class="bg-white p-3 border-primary m-5">
              <h2 class=" font-extrabold text-2xl text-primary">
                Initial Consultation and Strategy Development
              </h2>
              <p class="text-primary">
                When you reach out to Machintel, your journey begins with an
                in-depth consultation. Our experts will discuss your specific
                marketing needs, goals, and challenges. This stage is all about
                understanding your unique business context so that we can tailor
                our services accordingly.
              </p>
            </div>
          </div>

          <div class="flex lg:order-1 justify-center items-center">
            <div class="bg-white p-3 border-primary m-5">
              <h2 class=" font-extrabold text-2xl text-primary">Custom Solution Crafting</h2>
              <p class="text-primary">
                Armed with insights and a clear strategy, we then craft a custom
                solution specifically for your business. This can range from
                data enrichment and audience targeting to comprehensive campaign
                management. Our solutions are designed to be flexible, scalable,
                and aligned with your marketing goals.
              </p>
            </div>
          </div>

          <div class="flex lg:order-1 justify-center items-center">
            <div class="bg-white p-3 border-primary m-5">
              <h2 class=" font-extrabold text-2xl text-primary">
                Campaign Execution and Management
              </h2>
              <p class="text-primary">
                With everything set, your campaigns go live. Our team manages
                and monitors the performance, making real-time adjustments as
                needed. Expect a hands-on approach from Machintel, ensuring that
                every aspect of your campaign is optimized for success.
              </p>
            </div>
          </div>

          <div class="flex lg:order-1 justify-center items-center">
            <div class="bg-white p-3 border-primary m-5">
              <h2 class=" font-extrabold text-2xl text-primary">
                Long-Term Success and Growth
              </h2>
              <p class="text-primary">
                Our goal is to build long-term partnerships. As your business
                grows and evolves, we adapt our strategies to keep you ahead in
                your industry. Expect proactive suggestions and innovations from
                our team, aligning with the latest market trends and
                technologies.
              </p>
            </div>
          </div>

          <div class="flex lg:order-1 justify-center items-center">
            <div class="bg-white p-3 border-primary m-5">
              <h2 class=" font-extrabold text-2xl text-primary">Data and Audience Analysis</h2>
              <p class="text-primary">
                Once we've established a clear understanding of your objectives,
                our team delves into our extensive data reservoirs. We analyze
                relevant data sets and audience segments to identify the most
                effective strategies for your campaigns. Expect insights that go
                beyond general trends, offering a nuanced understanding of your
                target market.
              </p>
            </div>
          </div>

          <div class="flex lg:order-1 justify-center items-center">
            <div class="bg-white p-3 border-primary m-5">
              <h2 class=" font-extrabold text-2xl text-primary">
                Integration and Implementation
              </h2>
              <p class="text-primary">
                After finalizing the strategy and solutions, we integrate our
                services with your existing systems. Whether it's data
                integration with your CRM or setting up targeted advertising
                campaigns, our team ensures a seamless implementation process.
              </p>
            </div>
          </div>

          <div class="flex lg:order-1 justify-center items-center">
            <div class="bg-white p-3 border-primary m-5">
              <h2 class=" font-extrabold text-2xl text-primary">
                Continuous Optimization and Reporting
              </h2>
              <p class="text-primary">
                Marketing is an evolving process. We provide regular reports and
                insights on your campaign's performance, offering transparency
                and clarity. Based on these insights, we continuously optimize
                your strategies to ensure sustained success and improvement.
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
  name: "AnimationC",
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
