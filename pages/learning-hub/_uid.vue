<template>
  <div
    class="max-w-[80rem] px-4 sm:px-6 lg:px-8 mx-auto py-4 sm:py-6 lg:py-8 blog-post"
  >
    <div class="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6 lg:gap-x-12">
      <!-- Content -->
      <div class="lg:col-span-3 content">
        <div class="py-8 lg:pe-4 lg:pe-8">
          <div class="space-y-5 lg:space-y-8">
            <h1
              class="text-3xl font-normal lg:text-5xl font-serif text-primary blog-title"
            >
              {{ pageData.post_title.value }}
            </h1>

            <div class="flex items-center gap-x-5">
              <span
                class="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-accent-2 text-white"
              >
                {{ pageData.seo_clusters.value[0].name }}
              </span>

              <p class="pt-2 text-3xl ml-auto">
                <ShareNetwork
                  network="facebook"
                  :url="'https://www.machintel.com/blog/' + pageData.slug.value"
                  :title="pageData.post_title.value"
                >
                  <font-awesome-icon
                    class="text-blue-600"
                    :icon="['fab', 'square-facebook']"
                  />
                </ShareNetwork>
                <ShareNetwork
                  network="twitter"
                  :url="'https://www.machintel.com/blog/' + pageData.slug.value"
                  :title="pageData.post_title.value"
                >
                  <font-awesome-icon
                    class="text-gray-900"
                    :icon="['fab', 'x-twitter']"
                  />
                </ShareNetwork>
                <ShareNetwork
                  network="linkedin"
                  :url="'https://www.machintel.com/blog/' + pageData.slug.value"
                  :title="pageData.post_title.value"
                >
                  <font-awesome-icon
                    class="text-blue-700"
                    :icon="['fab', 'linkedin']"
                  />
                </ShareNetwork>
              </p>
            </div>

            <div v-if="containsObjectTag">
              <div
                v-if="
                  pageData &&
                  pageData.content &&
                  pageData.content.linkedItems &&
                  pageData.content.linkedItems.length
                "
              >
                <div
                  v-for="(item, index) in pageData.content.linkedItems"
                  :key="index"
                >
                  <span v-html="contentObjectTagArray(index)"></span>
                  <component
                    :is="getComponentType(item)"
                    v-bind="getComponentProps(item)"
                  ></component>
                </div>

                <span
                  v-html="
                    contentObjectTagArray(pageData.content.linkedItems.length)
                  "
                ></span>
              </div>
            </div>

            <div v-else>
              <span v-html="pageData.content.value"></span>
            </div>
          </div>
        </div>
      </div>
      <!-- End Content -->
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
        .type("seo_page")
        .collection("default")
        .equalsFilter("elements.slug", route.params.uid)
        .toPromise();

      const latest = await deliveryClient
        .items() // Replace with your actual Kontent item codename
        .type("seo_page")
        .orderParameter("elements.date[desc]")
        .collection("default")
        .limitParameter(3)
        .toPromise();

      return {
        pageData: response.data.items[0].elements,
        latestPosts: latest.data.items,
      };
    } catch (error) {
      console.error("Error fetching data:", error);
      return { pageData: {} };
    }
  },
  methods: {
    getComponentType(item) {
      switch (item.system.type) {
        case "blog__cta":
          return "BlogCta";
        case "blog__youtube":
          return "BlogYoutube";
        // Add more cases as needed
        default:
          return null;
      }
    },
    contentObjectTagArray(idx) {
      const objectTagRegex = /<object[^>]*><\/object>/g;
      const parts = this.pageData.content.value.split(objectTagRegex);
      return parts[idx] || ""; // Content before the object tag
    },
    getComponentProps(item) {
      // Return props based on the component type
      switch (item.system.type) {
        case "blog__cta":
          return {
            content: item.elements.content.value,
            button_text: item.elements.button_text.value,
            button_link: item.elements.button_link.value,
          };
        case "blog__youtube":
          return {
            youtube_id: item.elements.youtube_id.value,
          };
        // Add more cases as needed
        default:
          return {};
      }
    },
  },
  computed: {
    containsObjectTag() {
      const objectTagRegex = /<object[^>]*><\/object>/g;
      return objectTagRegex.test(this.pageData.content.value);
    },
  },
  head() {
    return {
      title: this.pageData.meta_title.value,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.pageData.meta_description.value,
        },
        { property: "og:title", content: this.pageData.meta_title.value },
        {
          property: "og:description",
          content: this.pageData.meta_description.value,
        },
        {
          property: "og:image",
          content: this.pageData.twitter_image.value[0].url,
        },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:title", content: this.pageData.meta_title.value },
        {
          name: "twitter:description",
          content: this.pageData.meta_description.value,
        },
        { name: "name", content: "@machintelInc" },
        { property: "og:sitename", content: "machintel" },
        { property: "og:locale", content: "en_US" },
        { property: "og:type", content: "website" },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://machintel.com" + this.$route.path + "/",
        },
      ],
    };
  },
};
</script>
<style>
.blog-post {
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
