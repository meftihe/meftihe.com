<template>
  <span
    :class="`font-normal text-primary relative italic after:absolute after:content-[''] after:-bottom-4 ${$attrs.class} after:left-0 after:w-[calc(100%+40px)] after:h-8 after:bg-contain after:bg-no-repeat`"
  >
    <slot></slot>
  </span>
</template>
