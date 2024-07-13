import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    extend: {
      animation: {
        scroll: "scroll 10s forwards linear infinite",
        scrollHover: "scroll 10s forwards linear paused infinite"
      },
      keyframes: {
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))'
          }
        }
      },
    },
  },
};
