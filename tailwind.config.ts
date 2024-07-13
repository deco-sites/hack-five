import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    extend: {
      animation: {
        sliding: "sliding 10s linear infinite",
        slidingDelay: "sliding 10s linear 5s infinite",
        scroll: "scroll 10s forwards linear infinite",
        scrollHover: "scroll 10s forwards linear paused infinite"
      },
      keyframes: {
        sliding: {
          "0%": { left: "100%" },
          "100%": { left: "-100%" },
        },
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))'
          }
        }
      },
    },
  },
};
