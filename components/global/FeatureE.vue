<template>
  <section>
    <div class="py-8 px-4 sm:px-6 lg:px-8 mx-auto max-w-screen-xl">
      <div class="mx-auto text-center mb-8 lg:mb-16">
        <HeaderSection
          v-if="
            data && data.section_header && data.section_header.linkedItems[0]
          "
          :data="data.section_header.linkedItems[0].elements"
        />
      </div>
      <div
        class="w-auto space-y-8 md:flex md:flex-wrap md:justify-center md:space-y-0 md:gap-5"
      >
        <div
          class="bg-white rounded shadow overflow-hidden"
          v-for="codename in data.section_grid.linkedItems"
          :key="codename.system.codename"
        >
          <FeatureCard
            :data="codename.elements"
            :length="data.section_grid.linkedItems.length"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "FeatureE",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>
