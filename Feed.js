import { DeliveryClient } from "@kentico/kontent-delivery";

async function getFeed(feed) {
  feed.options = {
    title: "My blog",
    link: "https://machintel.com/feed.xml",
    description: "Machintel Feed",
  };
  const deliveryClient = new DeliveryClient({
    projectId: "d21c04b3-d8e3-0069-0344-815518ff2064", // Replace with your actual Kontent project ID
  });

  const blogResult = await deliveryClient
    .items()
    .type("blog_post")
    .collection("jynai")
    .toPromise();
  const blogFeed = blogResult.data.items.map((item) => {
    return {
      title: item.elements.post_title.value,
      link: `https://machintel.com/blog/${item.elements.slug.value}`,
      image: item.elements.image.value[0].url,
      guid: `https://machintel.com/blog/${item.elements.slug.value}`,
    };
  });
  const seoPageResult = await deliveryClient
    .items()
    .type("seo_page")
    .collection("jynai")
    .toPromise();
  const seoFeed = seoPageResult.data.items.map((item) => {
    return {
      title: item.elements.post_title.value,
      link: `https://machintel.com/learning-hub/${item.elements.slug.value}`,
      image: item.elements.image.value[0].url,
      guid: `https://machintel.com/learning-hub/${item.elements.slug.value}`,
    };
  });

  const whitepaperResult = await deliveryClient
    .items()
    .type("resource_item")
    .collection("jynai")
    .containsFilter("elements.type", ["whitepaper"])
    .toPromise();

  const whitepaperFeed = whitepaperResult.data.items.map((item) => {
    return {
      title: item.elements.post_title.value,
      link: `https://machintel.com/whitepaper/${item.elements.slug.value}`,
      image: item.elements.image.value[0].url,
      guid: `https://machintel.com/whitepaper/${item.elements.slug.value}`,
    };
  });

  const caseStudyResult = await deliveryClient
    .items()
    .type("resource_item")
    .collection("jynai")
    .containsFilter("elements.type", ["case_study"])
    .toPromise();

  const caseStudyFeed = caseStudyResult.data.items.map((item) => {
    return {
      title: item.elements.post_title.value,
      link: `https://machintel.com/case-studies/${item.elements.slug.value}`,
      image: item.elements.image.value[0].url,
      guid: `https://machintel.com/case-studies/${item.elements.slug.value}`,
    };
  });
  const eBookResult = await deliveryClient
    .items()
    .type("resource_item")
    .collection("jynai")
    .containsFilter("elements.type", ["e_book"])
    .toPromise();

  const eBookFeed = eBookResult.data.items.map((item) => {
    return {
      title: item.elements.post_title.value,
      link: `https://machintel.com/ebook/${item.elements.slug.value}`,
      image: item.elements.image.value[0].url,
      guid: `https://machintel.com/ebook/${item.elements.slug.value}`,
    };
  });
  const infographicResult = await deliveryClient
    .items()
    .type("resource_item")
    .collection("jynai")
    .containsFilter("elements.type", ["infographic"])
    .toPromise();

  const infographicFeed = infographicResult.data.items.map((item) => {
    return {
      title: item.elements.post_title.value,
      link: `https://machintel.com/infographics/${item.elements.slug.value}`,
      image: item.elements.image.value[0].url,
      guid: `https://machintel.com/infographics/${item.elements.slug.value}`,
    };
  });

  const webinarResult = await deliveryClient
    .items()
    .type("resource_item")
    .collection("jynai")
    .containsFilter("elements.type", ["webinar"])
    .toPromise();

  const webinarFeed = webinarResult.data.items.map((item) => {
    return {
      title: item.elements.post_title.value,
      link: `https://machintel.com/webinar/${item.elements.slug.value}`,
      image: item.elements.image.value[0].url,
      guid: `https://machintel.com/webinar/${item.elements.slug.value}`,
    };
  });

  const seoResult = [
    ...blogFeed,
    ...seoFeed,
    ...whitepaperFeed,
    ...caseStudyFeed,
    ...eBookFeed,
    ...infographicFeed,
    ...webinarFeed,
  ];
  seoResult.forEach((item) => {
    feed.addItem({
      title: item.title,
      link: item.link, // Use 'link' instead of 'linkurl'
      description: item.image,
      guid: item.guid,
    });
  });
  return seoResult;
}

module.exports = getFeed;
