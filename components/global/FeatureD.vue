<template>
  <section class="bg-white">
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
        <div class="lg:grid xl:grid-cols-3 lg:gap-8 xl:gap-16">
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
          <div class="mb-8 lg:mb-0">
            <div v-if="data && data.image">
              <img
                :src="data.image.value[0].url"
                :alt="data.image.value[0].description"
              />
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
  name: "FeatureD",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>
