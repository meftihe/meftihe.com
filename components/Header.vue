<template>
  <header
    class="bg-[#4a00e1] relative pt-24 px-0 pb-8 overflow-hidden bg-matrix-pattern"
    data-scroll-index="0"
  >
    <div class="px-4 md:px-28">
      <div class="py-24">
        <div class="flex flex-wrap">
          <div class="lg:w-5/12">
            <div class="info">
              <h1 class="text-6xl font-bold leading-tight text-white">
                Make life easier with help from <span>Meftihe</span>
              </h1>
              <p class="mt-10 text-slate-300">
                We help businesses elevate their value through custom software
                development, product design, QA & consultancy services.
              </p>
              <h5 class="text-base mt-14 text-white">
                Get Free Quote!
                <span class="fw-normal ms-1">We’ll contact back in 24h</span>
              </h5>
              <form action="contact.php" class="form mt-30" method="post">
                <div class="flex space-x-2">
                  <label
                    class="input input-bordered rounded-full flex items-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      class="h-4 w-4 opacity-70"
                    >
                      <path
                        d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
                      />
                      <path
                        d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
                      />
                    </svg>
                    <input type="text" class="grow" placeholder="Email" />
                  </label>
                  <select class="select select-bordered grow rounded-full">
                    <option disabled selected>Who shot first?</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                  </select>
                </div>
                <button class="btn btn-block rounded-full mt-4 text-white">
                  <span>Request A Consultation</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute right-0 top-[100px] w-1/2 object-cover">
      <img
        src="/assets/img/header/header_3.png"
        alt="pattern"
        class="absolute top-0 right-0 w-full h-full animate-spin"
      />
      <img
        src="/assets/img/header/header_3_c.png"
        alt="circle"
        class="absolute animate-spin duration-xl"
      />
    </div>
  </header>
</template>
