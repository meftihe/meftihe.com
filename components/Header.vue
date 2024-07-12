<template>
  <header
    class="bg-[#4a00e1] relative pt-24 px-0 pb-8 overflow-hidden"
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
                <div class="row gx-3">
                  <div class="col-6">
                    <div class="d-inline-flex form-group input-with-icon">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Your Email *"
                      />
                      <span class="input-icon">
                        <Icon name="bi:envelope" class="me-1"></Icon>
                      </span>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="form-group">
                      <select class="form-select" value="Your inquiry about">
                        <option value="">Your inquiry about</option>
                        <option value="">Your inquiry about</option>
                        <option value="">Your inquiry about</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-12">
                    <button
                      class="btn dark-butn hover-darkBlue rounded-pill w-100 mt-3"
                    >
                      <span>Request A Consultation</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute right-0 top-[100px] w-1/2">
      <img src="/assets/img/header/header_3.png" alt="" class="pattern" />
      <img src="/assets/img/header/header_3_c.png" alt="" class="circle" />
      <!-- <img src="/assets/img/header/logo_sh_l.png" alt="" class="logo_shap" /> -->
    </div>
  </header>
</template>
