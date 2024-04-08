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
            src="/images/jyn.PNG"
            class="mr-3 h-4 sm:h-16"
            alt="Machintel Logo"
          />
        </a>
        <div class="flex items-center lg:order-2">
          <a
            href="/login/loginjynform/"
            class="py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-accent-2 text-white"
            >Login</a
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
              <a
                href="/"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 lg:border-0 lg:hover:text-accent lg:p-0 antialiased uppercase"
                >Home</a
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
                href="/about-us-jyn/"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 lg:border-0 lg:hover:text-accent lg:p-0 antialiased uppercase"
                >About Us</a
              >
            </li>
            <li>
              <a
                href="/contact-us/"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 lg:border-0 lg:hover:text-accent lg:p-0 antialiased uppercase"
                >Contact us</a
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
