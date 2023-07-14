/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
			// mywife: ['clova-ai-my-wife']
			// mywife: ['clova-ai-dot-font']
			mywife: ['clova-ai-rose']
		},
		extend: {}
  },
  plugins: [require("daisyui")],
  daisyui: {
		// themes: ['garden']
		// themes: ['valentine']
		// themes: ['winter']
		themes: ['pastel']
	}
};