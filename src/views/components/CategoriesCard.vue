<template>
  <div class="card">
    <div class="p-3 pb-0 card-header">
      <h6 class="mb-0">{{ cardTitle }}</h6>
    </div>
    <div class="p-3 card-body">
      <ul class="list-group" :class="this.$store.state.isRTL ? 'pe-0' : ''">
        <li
          class="mb-2 border-0 list-group-item d-flex justify-content-between border-radius-lg"
          :class="this.$store.state.isRTL ? 'pe-0' : 'ps-0'"
        >
          <div class="d-flex align-items-center">
            <div
              class="text-center shadow icon icon-shape icon-sm bg-gradient-dark"
              :class="this.$store.state.isRTL ? 'ms-3' : 'me-3'"
            >
              <i class="ni ni-mobile-button text-white opacity-10"></i>
            </div>
            <div class="d-flex flex-column">
              <h6 class="mb-1 text-sm text-dark">{{ title }}</h6>
              <span class="text-xs">
                {{ titleDesc }},
                <span class="font-weight-bold">{{ titleDesc2 }}</span>
              </span>
            </div>
          </div>
          <div class="d-flex">
            <button
              class="my-auto btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right"
            >
              <i class="ni ni-bold-right" aria-hidden="true"></i>
            </button>
          </div>
        </li>
        <li
          class="mb-2 border-0 list-group-item d-flex justify-content-between border-radius-lg"
          :class="this.$store.state.isRTL ? 'pe-0' : 'ps-0'"
        >
          <div class="d-flex align-items-center">
            <div
              class="text-center shadow icon icon-shape icon-sm bg-gradient-dark"
              :class="this.$store.state.isRTL ? 'ms-3' : 'me-3'"
            >
              <i class="ni ni-tag text-white opacity-10"></i>
            </div>
            <div class="d-flex flex-column">
              <h6 class="mb-1 text-sm text-dark">{{ title2 }}</h6>
              <span class="text-xs">
                {{ title2Desc }},
                <span class="font-weight-bold">{{ title2Desc2 }}</span>
              </span>
            </div>
          </div>
          <div class="d-flex">
            <button
              class="my-auto btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right"
            >
              <i class="ni ni-bold-right" aria-hidden="true"></i>
            </button>
          </div>
        </li>
        <li
          class="border-0 list-group-item d-flex justify-content-between border-radius-lg"
          :class="this.$store.state.isRTL ? 'pe-0' : 'ps-0'"
        >
          <div class="d-flex align-items-center">
            <div
              class="text-center shadow icon icon-shape icon-sm bg-gradient-dark"
              :class="this.$store.state.isRTL ? 'ms-3' : 'me-3'"
            >
              <i class="ni ni-box-2 text-white opacity-10"></i>
            </div>
            <div class="d-flex flex-column">
              <h6 class="mb-1 text-sm text-dark">{{ title3 }}</h6>
              <span class="text-xs">
                {{ title3Desc }},
                <span class="font-weight-bold">{{ title3Desc2 }}</span>
              </span>
            </div>
          </div>
          <div class="d-flex">
            <button
              class="my-auto btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right"
            >
              <i class="ni ni-bold-right" aria-hidden="true"></i>
            </button>
          </div>
        </li>
        <li
          class="border-0 list-group-item d-flex justify-content-between border-radius-lg"
          :class="this.$store.state.isRTL ? 'pe-0' : 'ps-0'"
        >
          <div class="d-flex align-items-center">
            <div
              class="text-center shadow icon icon-shape icon-sm bg-gradient-dark"
              :class="this.$store.state.isRTL ? 'ms-3' : 'me-3'"
            >
              <i class="ni ni-satisfied text-white opacity-10"></i>
            </div>
            <div class="d-flex flex-column">
              <h6 class="mb-1 text-sm text-dark">{{ title4 }}</h6>
              <span class="text-xs font-weight-bold">{{ title4Desc }}</span>
            </div>
          </div>
          <div class="d-flex">
            <button
              class="my-auto btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right"
            >
              <i class="ni ni-bold-right" aria-hidden="true"></i>
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "categories-card",
  props: {
    cardTitle: {
      type: String,
      default: "Applications",
    },
    title: {
      type: String,
      default: "Sabasi Application",
    },
    title2: {
      type: String,
      default: "Open County",
    },
    title3: {
      type: String,
      default: "ERP",
    },
    title4: {
      type: String,
      default: "Maono",
    },
    titleDesc2: {
      type: String,
      default: "Data Collection Tool, Data Analyzing Tool and Representation",
    },
    title2Desc: {
      type: String,
      default: "County Data Reports",
    },
    title4Desc: {
      type: String,
      default: "Collaboration Space",
    },
    title2Desc2: {
      type: String,
      default: "15 open",
    },
    title3Desc: {
      type: String,
      default: "Open INstitute Resource Management",
    },
    title3Desc2: {
      type: String,
      default: "40 closed",
    },
  },
};
</script>
