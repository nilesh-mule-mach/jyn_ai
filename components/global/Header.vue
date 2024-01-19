<template>
  <header class="fixed top-0 w-full bg-white z-50">
    <nav
      class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 shadow-md text-sm font-bold antialiased"
    >
      <div
        class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-0 sm:px-2 lg:px-8"
      >
        <a href="/" class="flex items-center">
          <img
            src="/images/machintel_navy.svg"
            class="mr-3 h-4 sm:h-6"
            alt="Machintel Logo"
          />
        </a>
        <div class="flex items-center lg:order-2">
          <a
            href="/contact-us/"
            class="py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-accent-2 text-white"
            >Contact Us</a
          >
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              class="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <ul
            class="flex flex-col mt-4 font-bold lg:flex-row lg:space-x-8 lg:mt-0"
          >
            <!--<li>
                  <a href="/how-it-works/" class="block py-2 pr-4 pl-3 text-primary border-b border-gray-100 lg:border-0 lg:hover:text-accent lg:p-0 antialiased uppercase">How it Works</a>
              </li>-->
            <li>
              <button
                id="mega-menu-button"
                data-dropdown-toggle="mega-menu"
                class="flex justify-between items-center py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 lg:border-0 lg:hover:text-accent lg:p-0 antialiased uppercase"
              >
                What We Do
                <svg
                  class="ml-1 w-5 h-5 lg:w-4 lg:h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <div
                id="mega-menu"
                class="grid hidden absolute z-10 w-full bg-white border border-gray-100 shadow-md lg:rounded-lg lg:w-full lg:grid-cols-12 lg:p-10"
              >
                <div
                  class="lg:p-2 text-primary bg-white lg:rounded-lg lg:col-span-4"
                >
                  <ul>
                    <li>
                      <a
                        href="/solutions/"
                        class="flex items-center p-3 rounded-lg hover:bg-gray-100"
                      >
                        <div class="mr-4 bg-white rounded-lg shadow">
                          <img
                            class="w-14 h-14 hidden lg:block"
                            src="/images/overview.svg"
                          />
                        </div>
                        <div>
                          <div
                            class="font-semibold text-primary hover:text-accent lg:text-base"
                          >
                            Overview
                          </div>
                          <div
                            class="text-sm font-light text-accent hidden lg:block"
                          >
                            Marketing, but Smarter
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/demand-generation/"
                        class="flex items-center p-3 rounded-lg hover:bg-gray-100"
                      >
                        <div class="mr-4 bg-white rounded-lg shadow">
                          <img
                            class="w-14 h-14 hidden lg:block"
                            src="/images/demand.svg"
                          />
                        </div>
                        <div>
                          <div
                            class="font-semibold text-primary hover:text-accent lg:text-base"
                          >
                            Demand
                          </div>
                          <div
                            class="text-sm font-light text-accent hidden lg:block"
                          >
                            Promote Your Content &amp; Brand
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/intelligence/"
                        class="flex items-center p-3 rounded-lg hover:bg-gray-100"
                      >
                        <div class="mr-4 bg-white rounded-lg shadow">
                          <img
                            class="w-14 h-14 hidden lg:block"
                            src="/images/intelligence.svg"
                          />
                        </div>
                        <div>
                          <div
                            class="font-semibold text-primary hover:text-accent lg:text-base"
                          >
                            Intelligence
                          </div>
                          <div
                            class="text-sm font-light text-accent hidden lg:block"
                          >
                            Get Strategic Data Insights
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/events/"
                        class="flex items-center p-3 rounded-lg hover:bg-gray-100"
                      >
                        <div class="mr-4 bg-white rounded-lg shadow">
                          <img
                            class="w-14 h-14 hidden lg:block"
                            src="/images/events.svg"
                          />
                        </div>
                        <div>
                          <div
                            class="font-semibold text-primary hover:text-accent lg:text-base"
                          >
                            Events
                          </div>
                          <div
                            class="text-sm font-light text-accent hidden lg:block"
                          >
                            Improve Registrations and Engagements
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  class="lg:p-2 text-gray-900 bg-white lg:rounded-lg dark:text-white lg:col-span-4 dark:bg-gray-800"
                >
                  <ul>
                    <li>
                      <a
                        href="/data/"
                        class="flex items-center p-3 rounded-lg hover:bg-gray-100"
                      >
                        <div class="mr-4 bg-white rounded-lg shadow">
                          <img
                            class="w-14 h-14 hidden lg:block"
                            src="/images/data.svg"
                          />
                        </div>
                        <div>
                          <div
                            class="font-semibold text-primary hover:text-accent lg:text-base"
                          >
                            Data
                          </div>
                          <div
                            class="text-sm font-light text-accent hidden lg:block"
                          >
                            Better Consumer &amp; Business Data
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/media"
                        class="flex items-center p-3 rounded-lg hover:bg-gray-100"
                      >
                        <div class="mr-4 bg-white rounded-lg shadow">
                          <img
                            class="w-14 h-14 hidden lg:block"
                            src="/images/media.svg"
                          />
                        </div>
                        <div>
                          <div
                            class="font-semibold text-primary hover:text-accent lg:text-base"
                          >
                            Media
                          </div>
                          <div
                            class="text-sm font-light text-accent hidden lg:block"
                          >
                            Advertising, Promotions, &amp; Thought Leadership
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/web-development/"
                        class="flex items-center p-3 rounded-lg hover:bg-gray-100"
                      >
                        <div class="mr-4 bg-white rounded-lg shadow">
                          <img
                            class="w-14 h-14 hidden lg:block"
                            src="/images/web.svg"
                          />
                        </div>
                        <div>
                          <div
                            class="font-semibold text-primary hover:text-accent lg:text-base"
                          >
                            Web &amp; App Development
                          </div>
                          <div
                            class="text-sm font-light text-accent hidden lg:block"
                          >
                            Faster, More Secure Sites &amp; Apps
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/publications/"
                        class="flex items-center p-3 rounded-lg hover:bg-gray-100"
                      >
                        <div class="mr-4 bg-white rounded-lg shadow">
                          <img
                            class="w-14 h-14 hidden lg:block"
                            src="/images/publications.svg"
                          />
                        </div>
                        <div>
                          <div
                            class="font-semibold text-primary hover:text-accent lg:text-base"
                          >
                            Publications
                          </div>
                          <div
                            class="text-sm font-light text-accent hidden lg:block"
                          >
                            31 Industry Focused Publications
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  class="lg:p-2 text-gray-900 bg-white lg:rounded-lg dark:text-white lg:col-span-4 dark:bg-gray-800"
                >
                  <ul>
                    <li>
                      <a
                        href="/for-brands/"
                        class="flex items-center p-3 rounded-lg hover:bg-gray-100"
                      >
                        <div class="mr-4 bg-white rounded-lg shadow">
                          <img
                            class="w-14 h-14 hidden lg:block"
                            src="/images/brands.svg"
                          />
                        </div>
                        <div>
                          <div
                            class="font-semibold text-primary hover:text-accent lg:text-base"
                          >
                            For Brands
                          </div>
                          <div
                            class="text-sm font-light text-accent hidden lg:block"
                          >
                            Solutions for your Brand
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/for-agencies/"
                        class="flex items-center p-3 rounded-lg hover:bg-gray-100"
                      >
                        <div class="mr-4 bg-white rounded-lg shadow">
                          <img
                            class="w-14 h-14 hidden lg:block"
                            src="/images/agencies.svg"
                          />
                        </div>
                        <div>
                          <div
                            class="font-semibold text-primary hover:text-accent lg:text-base"
                          >
                            For Agencies
                          </div>
                          <div
                            class="text-sm font-light text-accent hidden lg:block"
                          >
                            Solutions for your Agency
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/for-publishers/"
                        class="flex items-center p-3 rounded-lg hover:bg-gray-100"
                      >
                        <div class="mr-4 bg-white rounded-lg shadow">
                          <img
                            class="w-14 h-14 hidden lg:block"
                            src="/images/publishers.svg"
                          />
                        </div>
                        <div>
                          <div
                            class="font-semibold text-primary hover:text-accent lg:text-base"
                          >
                            For Publishers
                          </div>
                          <div
                            class="text-sm font-light text-accent hidden lg:block"
                          >
                            Solutions for your Publications
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/for-platforms/"
                        class="flex items-center p-3 rounded-lg hover:bg-gray-100"
                      >
                        <div class="mr-4 bg-white rounded-lg shadow">
                          <img
                            class="w-14 h-14 hidden lg:block"
                            src="/images/platforms.svg"
                          />
                        </div>
                        <div>
                          <div
                            class="font-semibold text-primary hover:text-accent lg:text-base"
                          >
                            For Platforms
                          </div>
                          <div
                            class="text-sm font-light text-accent hidden lg:block"
                          >
                            Solutions for your Platform
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <a
                href="/clients/"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 lg:border-0 lg:hover:text-accent lg:p-0 antialiased uppercase"
                >Clients</a
              >
            </li>

            <li>
              <a
                href="/content-hub/"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 lg:border-0 lg:hover:text-accent lg:p-0 antialiased uppercase"
                >Content Hub</a
              >
            </li>
            <li>
              <a
                href="/about-us/"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 lg:border-0 lg:hover:text-accent lg:p-0 antialiased uppercase"
                >About Us</a
              >
            </li>
            <li>
              <a
                href="/work-with-us/"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 lg:border-0 lg:hover:text-accent lg:p-0 antialiased uppercase"
                >Careers</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>
