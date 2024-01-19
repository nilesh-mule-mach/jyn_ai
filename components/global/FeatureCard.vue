<template>
  <div class="h-full">
    <div
      class="p-6 text-center"
      v-if="
        data &&
        data.text_alignment &&
        data.text_alignment.value[0] &&
        data.text_alignment.value[0].codename === 'center'
      "
      :class="length > 4 && 'lg:w-[380px] md:w-[380px] sm:w-full'"
    >
      <img
        class="mx-auto my-4 w-12 h-12 text-primary-600"
        v-if="data && data.icon && data.icon.value[0] && data.icon.value[0].url"
        :src="data.icon.value[0].url"
        :alt="data.icon.value[0].description"
      />

      <component
        :is="dynamicHeadingTag"
        class="mb-4 tracking-tight leading-normal"
        :class="[
          getHeadingWeight(data.heading__heading_weight.value[0].codename),
          getHeadingSize(data.heading__heading_size.value[0].codename),
          getHeadingColor(data.heading__heading_color.value[0].codename),
        ]"
      >
        {{ data.heading__heading_text.value }}
      </component>
      <p
        class="mb-4 text-gray-500"
        v-if="data && data.description && data.description.value"
      >
        {{ data.description.value }}
      </p>
      <div
        v-if="data.button_cta.linkedItems.length"
        class="inline-flex items-center mt-5"
      >
        <NaCta :data="data.button_cta.linkedItems?.[0].elements" />
      </div>
    </div>

    <div
      class="text-left p-6"
      v-if="
        data &&
        data.text_alignment &&
        data.text_alignment.value[0] &&
        data.text_alignment.value[0].codename === 'left'
      "
    >
      <img
        class="my-4 w-12 h-12 text-primary-600"
        v-if="data && data.icon && data.icon.value[0] && data.icon.value[0].url"
        :src="data.icon.value[0].url"
        :alt="data.icon.value[0].description"
      />

      <component
        :is="dynamicHeadingTag"
        class="mb-4 tracking-tight leading-normal"
        :class="[
          getHeadingWeight(data.heading__heading_weight.value[0].codename),
          getHeadingSize(data.heading__heading_size.value[0].codename),
          getHeadingColor(data.heading__heading_color.value[0].codename),
        ]"
      >
        {{ data.heading__heading_text.value }}
      </component>
      <p
        class="mb-4 text-gray-500"
        v-if="data && data.description && data.description.value"
        :class="
          data.heading__heading_color.value[0].codename === 'primary_2' &&
          'text-white font-medium'
        "
      >
        {{ data.description.value }}
      </p>
      <div
        class="mb-4 text-gray-500 description-point"
        v-if="
          data &&
          data.description_point &&
          data.description_point.value &&
          data.description_point.value !== '<p><br></p>'
        "
        v-html="data.description_point.value"
        :class="
          data.heading__heading_color.value[0].codename === 'primary_2' &&
          'text-white font-bold'
        "
      />

      <div
        v-if="data.button_cta.linkedItems.length"
        class="inline-flex items-center mt-5"
      >
        <NaCta :data="data.button_cta.linkedItems?.[0].elements" />
      </div>
    </div>

    <div
      v-if="
        data &&
        data.text_alignment &&
        data.text_alignment.value[0] &&
        data.text_alignment.value[0].codename === 'team_card'
      "
      class="p-6 flex flex-col justify-between h-full"
    >
      <p
        class="mt-3 mb-8 font-medium text-primary"
        v-if="data && data.description && data.description.value"
      >
        {{ data.description.value }}
      </p>
      <!-- <div class="grid grid-cols-teamDetails"> -->
      <div>
        <!-- <img
          class="rounded-full w-14 h14"
          v-if="
            data && data.icon && data.icon.value[0] && data.icon.value[0].url
          "
          :src="data.icon.value[0].url"
        /> -->
        <!-- <div class="ml-4"> -->
        <div>
          <div class="text-gray-900 font-bold">
            {{ data.heading__heading_text.value }}
          </div>
          <div class="text-gray-900 font-medium text-sm">
            {{ data.sub_heading.value }}
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="
        data &&
        data.text_alignment &&
        data.text_alignment.value[0] &&
        data.text_alignment.value[0].codename === 'icon_left'
      "
      class="flex p-2"
    >
      <div class="flex justify-center items-center mr-4 w-8 h-8 shrink-0">
        <img
          class="w-10 h-10 text-teal-600"
          v-if="
            data && data.icon && data.icon.value[0] && data.icon.value[0].url
          "
          :src="data.icon.value[0].url"
          :alt="data.icon.value[0].description"
        />
      </div>
      <div>
        <component
          :is="dynamicHeadingTag"
          class="mb-4 tracking-tight leading-normal"
          :class="[
            getHeadingWeight(data.heading__heading_weight.value[0].codename),
            getHeadingSize(data.heading__heading_size.value[0].codename),
            getHeadingColor(data.heading__heading_color.value[0].codename),
          ]"
        >
          {{ data.heading__heading_text.value }}
        </component>
        <p
          class="mb-2 font-light text-gray-500"
          v-if="data && data.description && data.description.value"
        >
          {{ data.description.value }}
        </p>
        <div
          v-if="data.button_cta.linkedItems.length"
          class="inline-flex items-center mt-5"
        >
          <NaCta :data="data.button_cta.linkedItems?.[0].elements" />
        </div>
      </div>
    </div>

    <div
      v-if="
        data &&
        data.text_alignment &&
        data.text_alignment.value[0] &&
        data.text_alignment.value[0].codename === 'list_card'
      "
      class="p-6 flex flex-col justify-between h-full"
      :class="
        length === 4
          ? 'lg:w-64 w-full min-w-full max-w-full'
          : ' lg:w-96 md:w-[28rem]'
      "
    >
      <div>
        <img
          class="my-4 text-primary-600"
          :class="$route.path === '/' ? 'w-1/2 h-auto' : 'w-12 h-12'"
          v-if="
            data && data.icon && data.icon.value[0] && data.icon.value[0].url
          "
          :src="data.icon.value[0].url"
          :alt="data.icon.value[0].description"
        />

        <component
          :is="dynamicHeadingTag"
          class="mb-2 tracking-tight leading-normal text-xl font-bold"
          :class="[
            getHeadingWeight(data.heading__heading_weight.value[0].codename),
            getHeadingSize(data.heading__heading_size.value[0].codename),
            getHeadingColor(data.heading__heading_color.value[0].codename),
          ]"
        >
          {{ data.heading__heading_text.value }}
        </component>
        <p
          class="mb-4 text-gray-500"
          v-if="data && data.description && data.description.value"
        >
          {{ data.description.value }}
        </p>
        <div
          class="mb-4 text-gray-500 description-point"
          v-if="
            data &&
            data.description_point &&
            data.description_point.value &&
            data.description_point.value !== '<p><br></p>'
          "
          v-html="data.description_point.value"
        />
      </div>
      <div
        v-if="
          data &&
          data.button_cta &&
          data.button_cta.linkedItems &&
          data.button_cta.linkedItems[0] &&
          data.button_cta.linkedItems[0].elements
        "
        class="inline-flex items-center mt-5"
      >
        <NaCta :data="data.button_cta.linkedItems[0].elements" />
      </div>
    </div>

    <div
      v-if="
        data &&
        data.text_alignment &&
        data.text_alignment.value[0] &&
        data.text_alignment.value[0].codename === 'image_content'
      "
      class="flex m-0 h-full flex-col lg:flex-row md:flex-row"
      :class="length === 6 ? 'w-full ' : 'lg:w-[380px] w-full md:flex-col'"
    >
      <img
        :class="
          length === 6
            ? 'lg:w-[20%] md:w-[40%] object-cover'
            : 'lg:w-[40%] object-cover lg:h-full h-80'
        "
        :src="data.icon.value[0].url"
        :alt="data.icon.value[0].description"
        v-if="data && data.icon && data.icon.value[0] && data.icon.value[0].url"
      />
      <div
        class="my-0 pt-6 mr-0 pl-4 lg:my-2 lg:pt-6 lg:mr-3 lg:pl-5 md:my-2 md:pt-6 md:mr-3 md:pl-5"
        :class="
          length === 6
            ? 'w-full p-4'
            : 'lg:w-[50%] w-full md:mr-0 md:pr-5 md:pb-6'
        "
      >
        <component
          :is="dynamicHeadingTag"
          class="mb-2 tracking-tight leading-normal text-xl font-bold"
          :class="[
            getHeadingWeight(data.heading__heading_weight.value[0].codename),
            getHeadingSize(data.heading__heading_size.value[0].codename),
            getHeadingColor(data.heading__heading_color.value[0].codename),
          ]"
        >
          {{ data.heading__heading_text.value }}
        </component>
        <p
          class="mb-4 text-gray-500"
          v-if="data && data.description && data.description.value"
        >
          {{ data.description.value }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getHeadingWeight,
  getHeadingColor,
  getHeadingSize,
  getHeadingType,
} from "/utils/dynamicOptions";
export default {
  name: "FeatureCard",
  props: {
    data: {
      type: Object,
      required: true,
    },
    length: {
      type: Number,
    },
  },
  computed: {
    dynamicHeadingTag() {
      const headingTypeCode = this.data.heading__heading_type.value[0].codename;
      return getHeadingType(headingTypeCode);
    },
  },
  methods: {
    getHeadingWeight,
    getHeadingColor,
    getHeadingSize,
  },
};
</script>
