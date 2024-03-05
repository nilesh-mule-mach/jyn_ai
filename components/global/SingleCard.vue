<template>
  <div class="h-full">
    <div
      v-if="data.elements.text_alignment.value[0].codename === 'center'"
      class="mb-4 h-100 shadow hover:shadow-lg h-full flex flex-col text-center"
    >
      <div class="p-4 flex-1">
        <div class="mb-8">
          <img
            class="mx-auto"
            :src="data.elements.image.value[0].url"
            :alt="data.elements.image.value[0].description"
          />
        </div>
        <div v-html="data.elements.content.value" />
      </div>
    </div>

    <div
      v-if="data.elements.text_alignment.value[0].codename === 'left'"
      class="mb-4 bg-white h-100 shadow hover:shadow-lg h-full flex flex-col text-left classic-card-full"
    >
      <div class="flex-1">
        <div class="object-cover mb-8">
          <img
            :src="data.elements.image.value[0].url"
            :alt="data.elements.image.value[0].description"
          />
        </div>
        <h3
          class="text-xl font-bold px-5"
          v-html="data.elements.heading.value"
          :class="[
            getHeadingColor(
              data &&
                data.elements &&
                data.elements.heading_color__heading_color &&
                data.elements.heading_color__heading_color.value[0] &&
                data.elements.heading_color__heading_color.value[0].codename
            ),
          ]"
        ></h3>
        <div
          v-html="data.elements.content.value"
          class="text-gray-500 px-5 pt-2"
        />
      </div>
    </div>

    <div
      v-if="data.elements.text_alignment.value[0].codename === 'simple_card'"
      class="bg-white rounded-lg px-16 pt-10"
    >
      <h2 class="font-semibold text-accent text-xl">
        {{ data.elements.heading.value }}
      </h2>
      <div class="mb-4 text-gray-500" v-html="data.elements.content.value" />
      <img
        class="mx-auto"
        :src="data.elements.image.value[0].url"
        :alt="data.elements.image.value[0].description"
      />
    </div>
  </div>
</template>

<script>
import { getHeadingColor } from "/utils/dynamicOptions";
export default {
  name: "SingleCard",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },

  methods: {
    getHeadingColor,
  },
};
</script>
