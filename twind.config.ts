import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#fe7201',
        },
      }
    },
  },
} as Options;
