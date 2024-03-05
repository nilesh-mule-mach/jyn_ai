import { DeliveryClient } from "@kentico/kontent-delivery";

async function getDynamicRoutes() {
  const deliveryClient = new DeliveryClient({
    projectId: "d21c04b3-d8e3-0069-0344-815518ff2064", // Replace with your actual Kontent project ID
  });

  const seoResult = await deliveryClient
    .items()
    .type("seo_page")
    .collection("default")
    .toPromise();

  const seoRoutes = seoResult.data.items.map(
    (item) => `/learning-hub/${item.elements.slug.value}`
  );
  // Fetch 'blog_post' items
  const blogResult = await deliveryClient
    .items()
    .type("blog_post")
    .collection("default")
    .toPromise();

  const blogRoutes = blogResult.data.items.map(
    (item) => `/blog/${item.elements.slug.value}`
  );

  // Fetch 'case_study_post' items
  const caseStudyResult = await deliveryClient
    .items()
    .type("resource_item")
    .collection("default")
    .containsFilter("elements.type", ["case_study"])
    .toPromise();

  const caseStudyRoutes = caseStudyResult.data.items.map(
    (item) => `/case-studies/${item.elements.slug.value}`
  );

  // Fetch 'eBook_post' items
  const eBookResult = await deliveryClient
    .items()
    .type("resource_item")
    .collection("default")
    .containsFilter("elements.type", ["e_book"])
    .toPromise();

  const eBookRoutes = eBookResult.data.items.map(
    (item) => `/ebook/${item.elements.slug.value}`
  );

  // Fetch 'infographic_post' items
  const infographicResult = await deliveryClient
    .items()
    .type("resource_item")
    .collection("default")
    .containsFilter("elements.type", ["infographic"])
    .toPromise();

  const infographicRoutes = infographicResult.data.items.map(
    (item) => `/infographics/${item.elements.slug.value}`
  );

  // Fetch 'webinar_post' items
  const webinarResult = await deliveryClient
    .items()
    .type("resource_item")
    .collection("default")
    .containsFilter("elements.type", ["webinar"])
    .toPromise();

  const webinarRoutes = webinarResult.data.items.map(
    (item) => `/webinar/${item.elements.slug.value}`
  );

  // Fetch 'whitepaper_post' items
  const whitepaperResult = await deliveryClient
    .items()
    .type("resource_item")
    .collection("default")
    .containsFilter("elements.type", ["whitepaper"])
    .toPromise();

  const whitepaperRoutes = whitepaperResult.data.items.map(
    (item) => `/whitepaper/${item.elements.slug.value}`
  );

  // Fetch 'component_page' items
  const pageResult = await deliveryClient
    .items()
    .type("component_page")
    .collection("default")
    .toPromise();

  const pageRoutes = pageResult.data.items.map(
    (item) => `/${item.elements.slug.value}`
  );

  const caseStudyThankYou = await deliveryClient
    .items()
    .type("resource_item")
    .collection("default")
    .containsFilter("elements.type", ["case_study"])
    .toPromise();

  const ebookThankYou = await deliveryClient
    .items()
    .type("resource_item")
    .collection("default")
    .containsFilter("elements.type", ["e_book"])
    .toPromise();

  const infographicThankYou = await deliveryClient
    .items()
    .type("resource_item")
    .collection("default")
    .containsFilter("elements.type", ["infographic"])
    .toPromise();

  const webinarThankYou = await deliveryClient
    .items()
    .type("resource_item")
    .collection("default")
    .containsFilter("elements.type", ["webinar"])
    .toPromise();

  const whitepaperThankYou = await deliveryClient
    .items()
    .type("resource_item")
    .collection("default")
    .containsFilter("elements.type", ["whitepaper"])
    .toPromise();

  const caseStudyThankYous = caseStudyThankYou.data.items.map(
    (item) => `/case-studies/${item.elements.slug.value}/thank-you/`
  );
  const ebookThankYous = ebookThankYou.data.items.map(
    (item) => `/ebook/${item.elements.slug.value}/thank-you/`
  );
  const infographicThankYous = infographicThankYou.data.items.map(
    (item) => `/infographics/${item.elements.slug.value}/thank-you/`
  );
  const webinarThankYous = webinarThankYou.data.items.map(
    (item) => `/webinar/${item.elements.slug.value}/thank-you/`
  );
  const whitepaperThankYous = whitepaperThankYou.data.items.map(
    (item) => `/whitepaper/${item.elements.slug.value}/thank-you/`
  );

  // Combine both arrays of routes
  return [
    ...blogRoutes,
    ...seoRoutes,
    ...pageRoutes,
    ...webinarRoutes,
    ...infographicRoutes,
    ...caseStudyThankYous,
    ...ebookThankYous,
    ...infographicThankYous,
    ...webinarThankYous,
    ...whitepaperThankYous,
    ...caseStudyRoutes,
    ...eBookRoutes,
    ...whitepaperRoutes,
  ];
}

module.exports = getDynamicRoutes;
