/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
			mywife: ['clova-ai-my-wife']
		},
		extend: {}
  },
  plugins: [require("daisyui")],
};