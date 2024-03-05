<template>
  <client-only>
    <div>
      <div
        v-if="
          data &&
          data.number_of_cards &&
          data.number_of_cards.value[0] &&
          data.number_of_cards.value[0].codename === 'blog_card'
        "
        class="max-w-screen-xl px-4 pb-10 sm:px-6 lg:px-8 lg:py-10 mx-auto -mt-14"
      >
        <div class="m-auto md:grid md:grid-cols-1 lg:grid-cols-3 md:gap-6">
          <div
            v-for="codename in data.feature_card.linkedItems"
            :key="codename.system.codename"
            class="sm:m-7 lg:m-0"
          >
            <BlogCard :data="codename.elements" />
          </div>
        </div>
      </div>
      <div
        v-if="
          data &&
          data.number_of_cards &&
          data.number_of_cards.value[0] &&
          data.number_of_cards.value[0].codename === 'three'
        "
        class="mt-8 lg:mt-12 space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0"
      >
        <div
          class="component component-CerCheckBox"
          v-for="codename in data.feature_card.linkedItems"
          :key="codename.system.codename"
        >
          <FeatureCard :data="codename.elements" />
        </div>
      </div>
      <div
        v-if="
          data &&
          data.number_of_cards &&
          data.number_of_cards.value[0] &&
          data.number_of_cards.value[0].codename === 'four'
        "
        class="flex justify-center gap-2 lg:flex-row flex-col"
      >
        <div
          class="component component-CerCheckBox w-full"
          v-for="codename in data.feature_card.linkedItems"
          :key="codename.system.codename"
        >
          <FeatureCard :data="codename.elements" />
        </div>
      </div>
      <div
        v-if="
          data &&
          data.number_of_cards &&
          data.number_of_cards.value[0] &&
          data.number_of_cards.value[0].codename === 'col_three'
        "
        class="mt-8 py-8 mb-6 border-t border-b border-gray-200"
      >
        <div
          class="component component-CerCheckBox"
          v-for="codename in data.feature_card.linkedItems"
          :key="codename.system.codename"
        >
          <FeatureCard :data="codename.elements" />
        </div>
      </div>

      <div
        v-if="
          data &&
          data.number_of_cards &&
          data.number_of_cards.value[0] &&
          data.number_of_cards.value[0].codename === 'six'
        "
        class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0"
      >
        <div
          class="component component-CerCheckBox"
          v-for="codename in data.feature_card.linkedItems"
          :key="codename.system.codename"
        >
          <FeatureCard :data="codename.elements" />
        </div>
      </div>
    </div>
  </client-only>
</template>
<script>
export default {
  name: "FeatureCardRow",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>
