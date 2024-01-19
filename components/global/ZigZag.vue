<template>
  <!-- Features -->
  <div class="max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8 lg:py-10 mx-auto">
    <div v-if="data.alignment.value[0].codename === 'image_left'">
      <!-- Grid -->
      <div class="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
        <div>
          <img
            :src="data.image.value[0].url"
            :alt="data.image.value[0].description"
          />
        </div>
        <!-- End Col -->

        <div class="mt-5 sm:mt-10 lg:mt-0">
          <div class="space-y-6 sm:space-y-8">
            <!-- Title -->

            <div>
              <div class="space-y-2 md:space-y-4">
                <div
                  v-if="data && data.small_heading && data.small_heading.value"
                  class="text-primary-2 mb-2 font-extrabold text-xl tracking-widest leading-normal pre-line whitespace-pre-line"
                  v-html="data.small_heading.value"
                />
                <component
                  :is="dynamicHeadingTag"
                  class="mb-4 tracking-tight leading-normal"
                  :class="[
                    getHeadingWeight(
                      data.heading__heading_weight.value[0].codename
                    ),
                    getHeadingSize(
                      data.heading__heading_size.value[0].codename
                    ),
                    getHeadingColor(
                      data.heading__heading_color.value[0].codename
                    ),
                  ]"
                >
                  {{ data.heading__heading_text.value }}
                </component>
                <div
                  :class="
                    data &&
                    data.text_color &&
                    data.text_color.value &&
                    data.text_color.value[0] &&
                    data.text_color.value[0].codename
                      ? getHeadingColor(data.text_color.value[0].codename)
                      : 'text-gray-500'
                  "
                  class="text-xl"
                  v-html="data.content.value"
                />
                <p
                  v-if="
                    data.left_button_text.value &&
                    data.left_button_text.value.length > 0
                  "
                  class="pt-10"
                >
                  <a
                    :href="data.left_button_link.value"
                    class="btn btn-primary mt-4"
                    >{{ data.left_button_text.value }}</a
                  >
                  <a
                    :href="data.right_button_link.value"
                    class="btn btn-outline"
                    >{{ data.right_button_text.value }}</a
                  >
                </p>
              </div>
            </div>

            <!-- End Title -->
          </div>
        </div>
        <!-- End Col -->
      </div>
    </div>
    <div v-else>
      <!-- Grid -->
      <!-- Grid -->
      <div class="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
        <div class="md:order-last">
          <img
            :src="data.image.value[0].url"
            :alt="data.image.value[0].description"
          />
        </div>
        <!-- End Col -->

        <div class="mt-5 sm:mt-10 lg:mt-0">
          <div class="space-y-6 sm:space-y-8">
            <!-- Title -->
            <div class="space-y-2 md:space-y-4">
              <component
                :is="dynamicHeadingTag"
                class="mb-4 tracking-tight leading-normal md:text-right text-left"
                :class="[
                  getHeadingWeight(
                    data.heading__heading_weight.value[0].codename
                  ),
                  getHeadingSize(data.heading__heading_size.value[0].codename),
                  getHeadingColor(
                    data.heading__heading_color.value[0].codename
                  ),
                ]"
              >
                {{ data.heading__heading_text.value }}
              </component>
              <div
                :class="
                  data &&
                  data.text_color &&
                  data.text_color.value &&
                  data.text_color.value[0] &&
                  data.text_color.value[0].codename
                    ? getHeadingColor(data.text_color.value[0].codename)
                    : 'text-gray-500'
                "
                class="text-xl md:text-right text-left"
                v-html="data.content.value"
              />
              <p
                v-if="
                  data.left_button_text.value &&
                  data.left_button_text.value.length > 0
                "
                class="pt-10"
              >
                <a
                  :href="data.left_button_link.value"
                  class="btn btn-primary mt-4"
                  >{{ data.left_button_text.value }}</a
                >
                <a
                  :href="data.right_button_link.value"
                  class="btn btn-outline"
                  >{{ data.right_button_text.value }}</a
                >
              </p>
            </div>
            <!-- End Title -->
          </div>
        </div>
        <!-- End Col -->
      </div>
    </div>
    <!-- End Grid -->
  </div>
  <!-- End Features -->
</template>
<script>
import {
  getHeadingWeight,
  getHeadingColor,
  getHeadingSize,
  getHeadingType,
} from "/utils/dynamicOptions";
export default {
  name: "ZigZag",
  props: {
    data: {
      type: Object,
      required: true,
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
