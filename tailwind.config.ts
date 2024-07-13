import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    extend: {
      animation: {
        scroll: "scroll 30s forwards linear infinite",
        scrollHover: "scroll 30s forwards linear paused infinite"
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
