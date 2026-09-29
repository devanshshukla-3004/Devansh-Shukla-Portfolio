import type { Config } from 'tailwindcss';
const config: Config = {content:['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}','./lib/**/*.{ts,tsx}'],theme:{extend:{colors:{ink:'#f2efe8',gold:'#d7bd82',navy:'#090b0f',muted:'#9ba1aa'},fontFamily:{sans:['Manrope','sans-serif'],serif:['Playfair Display','serif'],mono:['DM Mono','monospace']}}},plugins:[]};export default config;
