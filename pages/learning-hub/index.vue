<template>
  <div
    class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"
  >
    <div class="mb-10">
      <h1 class="text-primary text-3xl lg:text-5xl font-serif mb-7 mt-4">
        Learning Hub
      </h1>
      <p class="text-xl antialiased font-medium text-font">
        Tired of all the marketing BS? Us too. Our content gets straight to the
        point.
      </p>
    </div>

    <div
      class="container mx-auto pt-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      <a
        v-for="(post, index) in filteredPosts"
        :key="index"
        class="col-span-1 flex flex-col pb-5 mb-5"
        :href="getHref(post)"
        :data-type="getType(post)"
      >
        <article
          class="bg-white rounded-lg border border-gray-200 shadow-md h-full"
        >
          <img
            :src="post.elements.image.value[0].url"
            class="w-full object-cover h-40"
            :alt="post.elements.image.value[0].description"
          />

          <div class="p-6">
            <h2
              class="my-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              {{ post.elements.post_title.value }}
            </h2>
          </div>
        </article>
      </a>
    </div>
  </div>
</template>

<script>
import { DeliveryClient } from "@kentico/kontent-delivery";

export default {
  data() {
    return {
      selectedType: "Blog", // Initialize with an empty string or a default value
      searchQuery: "", // Add this line
      perPage: 10,
      pageRef: 1,
      totalLength: 0,
      selectedId: 1,
      prevSelectedType: null,
    };
  },

  async asyncData({ params }) {
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
        .type(["seo_page", "resource_item"])
        .collection("jynai")
        .orderParameter("elements.date[desc]")
        .toPromise();
      return {
        pageData: response.data.items,
      };
    } catch (error) {
      console.error("Error fetching data:", error);
      return { pageData: {} };
    }
  },

  computed: {
    // ...
    getHref() {
      return (post) => {
        if (post.elements.seo_clusters) {
          return `/learning-hub/${post.elements.slug.value}`;
        }
      };
    },
    filteredPosts() {
      let result = this.pageData;
      if (this.selectedType !== "All") {
        result = result.filter((post) => post.elements.seo_clusters);
      }
      return result;
    },
  },
  methods: {
    filterChange() {
      if (this.selectedType !== this.prevSelectedType) {
        this.selectedId = 1;
        this.pageRef = 1;
        this.prevSelectedType = this.selectedType;
      }
    },
    nextPage() {
      if (this.pageRef !== Math.ceil(this.totalLength / this.perPage)) {
        this.pageRef += 1;
        this.selectedId = this.pageRef;
      }
    },
    backPage() {
      if (this.pageRef !== 1) {
        this.pageRef -= 1;
        this.selectedId = this.pageRef;
      }
    },
    goToPage(numPage) {
      this.pageRef = numPage;
      this.selectedId = this.pageRef;
    },
    getType(post) {
      if (post.elements.seo_clusters) {
        return "Seo";
      }
      // Add a default return if needed
    },
  },

  head() {
    return {
      title: "Next-Level Marketing Insights | Machintel",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Unlock B2B insights in Machintel's expanding content vault. Download resources for continuous education and amplify your integrated marketing expertise.",
        },
      ],
    };
  },
};
</script>
