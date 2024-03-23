module.exports = {
	darkMode: 'class',
	mode: 'jit',
	content: [
	  './app/**/*.{js,ts,jsx,tsx,mdx}',
	  './components/**/*.{js,ts,jsx,tsx,mdx}',
	  './src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
	  extend: {
		fontFamily: {
			droid: ['Droid Sans', 'sans-serif'],
		},
	  },
	  screens: {
		sm: '576px',
		'sm-max': { max: '576px' },
		md: '768px',
		'md-max': { max: '768px' },
		lg: '992px',
		'lg-max': { max: '992px' },
		xl: '1200px',
		'xl-max': { max: '1200px' },
		'2xl': '1320px',
		'2xl-max': { max: '1320px' },
		'3xl': '1600px',
		'3xl-max': { max: '1600px' },
		'4xl': '1850px',
		'4xl-max': { max: '1850px' },
	  },
	  colors: {
		white: '#ffffff',
		'azure': {
			DEFAULT: '#f0ffff',
			light: "#fdffff",
			dark: "#00c6c6",
			100: '#fcffff',
			200: '#f9ffff',
			300: '#f6ffff',
			400: '#f3ffff',
			500: '#f0ffff',
			600: '#8dffff',
			700: '#2affff',
			800: '#00c6c6',
			900: '#006363'
		},
		'aquamarine': {
			DEFAULT: '#7efed2',
			light: "#f2fffa",
			dark: "#029763",
			100: '#e6fff6',
			200: '#cdfeed',
			300: '#b3fee4',
			400: '#9afedb',
			500: '#7efed2',
			600: '#35fdb7',
			700: '#02e394',
			800: '#029763',
			900: '#014c31'
		},
		'turquoise': {
			DEFAULT: '#3edfcf',
			light: "#ecfcfa",
			dark: "#20c4b4",
			100: '#d8f9f5',
			200: '#b2f2ec',
			300: '#8bece2',
			400: '#65e6d9',
			500: '#3edfcf',
			600: '#20c4b4',
			700: '#189387',
			800: '#10625a',
			900: '#08312d'
		},
		'light_blue': {
			DEFAULT: '#add8e6',
			light: "#f7fbfc",
			dark: "#3999b9",
			100: '#eff7fa',
			200: '#deeff5',
			300: '#cee7f0',
			400: '#bde0eb',
			500: '#add8e6',
			600: '#6fbad3',
			700: '#3999b9',
			800: '#26667b',
			900: '#13333e'
		},
		'gray': {
			DEFAULT: '#697b8c',
			light: "#f0f2f4",
			dark: "#2a3138",
			100: '#e1e5e8',
			200: '#c3cad1',
			300: '#a4b0bb',
			400: '#8695a4',
			500: '#697b8c',
			600: '#546270',
			700: '#3f4a54',
			800: '#2a3138',
			900: '#15191c'
		},
		"black": {
			DEFAULT: '#1b1e22',
			light: "#e6e8eb", 
			dark: "#0b0c0e",
			100: '#cdd1d7',
			200: '#9ba4af',
			300: '#6b7786',
			400: '#434a54',
			500: '#1b1e22',
			600: '#16181b',
			700: '#101214',
			800: '#0b0c0e',
			900: '#050607'
		},
		'rose': {
			DEFAULT: '#fe017f',
			light: "#ffebf5",
			dark: "#650133",
			100: '#ffcce6',
			200: '#fe9acc',
			300: '#fe67b3',
			400: '#fe3499',
			500: '#fe017f',
			600: '#cb0166',
			700: '#98014d',
			800: '#650133',
			900: '#33001a'
		},
		'red': {
			DEFAULT: '#ff004f',
			light: '#ffe5ee', 
			dark: '#660020',
			100: '#ffccdc',
			200: '#ff99b9',
			300: '#ff6696',
			400: '#ff3374',
			500: '#ff004f',
			600: '#cc0041',
			700: '#990030',
			800: '#660020',
			900: '#330010'
		},			
		'green': {
			DEFAULT: '#80ff00',
			light: '#f2ffe5',
			dark: '#336600',
			100: '#e6ffcc',
			200: '#ccff99',
			300: '#b3ff66',
			400: '#99ff33',
			500: '#80ff00',
			600: '#66cc00',
			700: '#4d9900',
			800: '#336600',
			900: '#1a3300'
		},
		error: 'ff004f',
		success: '80ff00',
	  },
	},
  };
  