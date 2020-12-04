export const css = `
/*! modern-normalize v1.0.0 | MIT License | https://github.com/sindresorhus/modern-normalize */
:root {
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
}
html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}
body {
  margin: 0;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell,
    Noto Sans, sans-serif, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji;
}
hr {
  height: 0;
  color: inherit;
}
abbr[title] {
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
}
b,
strong {
  font-weight: bolder;
}
code,
kbd,
pre,
samp {
  font-family: ui-monospace, SFMono-Regular, Consolas, Liberation Mono, Menlo,
    monospace;
  font-size: 1em;
}
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
table {
  text-indent: 0;
  border-color: inherit;
}
button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}
button,
select {
  text-transform: none;
}
[type='button'],
button {
  -webkit-appearance: button;
}
legend {
  padding: 0;
}
progress {
  vertical-align: baseline;
}
summary {
  display: list-item;
}
blockquote,
dd,
dl,
figure,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
pre {
  margin: 0;
}
button {
  background-color: transparent;
  background-image: none;
}
button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}
fieldset,
ol,
ul {
  margin: 0;
  padding: 0;
}
ol,
ul {
  list-style: none;
}
html {
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu,
    Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, Helvetica Neue, Arial,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  line-height: 1.5;
}
body {
  font-family: inherit;
  line-height: inherit;
}
*,
:after,
:before {
  box-sizing: border-box;
  border: 0 solid #e5e7eb;
}
hr {
  border-top-width: 1px;
}
img {
  border-style: solid;
}
textarea {
  resize: vertical;
}
input::-moz-placeholder,
textarea::-moz-placeholder {
  color: #9ca3af;
}
input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
  color: #9ca3af;
}
input::placeholder,
textarea::placeholder {
  color: #9ca3af;
}
button {
  cursor: pointer;
}
table {
  border-collapse: collapse;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}
a {
  color: inherit;
  text-decoration: inherit;
}
button,
input,
optgroup,
select,
textarea {
  padding: 0;
  line-height: inherit;
  color: inherit;
}
code,
kbd,
pre,
samp {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    Liberation Mono, Courier New, monospace;
}
audio,
canvas,
embed,
iframe,
img,
object,
svg,
video {
  display: block;
  vertical-align: middle;
}
img,
video {
  max-width: 100%;
  height: auto;
}
.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
}
.border-yellow-500 {
  --tw-border-opacity: 1;
  border-color: rgba(245, 158, 11, var(--tw-border-opacity));
}
.border-dashed {
  border-style: dashed;
}
.border-2 {
  border-width: 2px;
}
.flex {
  display: flex;
}
.flex-col {
  flex-direction: column;
}
.flex-col-reverse {
  flex-direction: column-reverse;
}
.items-end {
  align-items: flex-end;
}
.items-center {
  align-items: center;
}
.justify-start {
  justify-content: flex-start;
}
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.flex-1 {
  flex: 1 1 0%;
}
.font-serif {
  font-family: ui-serif, Georgia, Cambria, Times New Roman, Times, serif;
}
.font-thin {
  font-weight: 100;
}
.font-medium {
  font-weight: 500;
}
.font-semibold {
  font-weight: 600;
}
.font-bold {
  font-weight: 700;
}
.h-full {
  height: 100%;
}
.text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}
.text-5xl {
  font-size: 3rem;
  line-height: 1;
}
.leading-6 {
  line-height: 1.5rem;
}
.leading-8 {
  line-height: 2rem;
}
.my-6 {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.mr-1 {
  margin-right: 0.25rem;
}
.mb-1 {
  margin-bottom: 0.25rem;
}
.mb-2 {
  margin-bottom: 0.5rem;
}
.mt-3 {
  margin-top: 0.75rem;
}
.mr-3 {
  margin-right: 0.75rem;
}
.mb-3 {
  margin-bottom: 0.75rem;
}
.ml-3 {
  margin-left: 0.75rem;
}
.mb-4 {
  margin-bottom: 1rem;
}
.mt-6 {
  margin-top: 1.5rem;
}
.mb-6 {
  margin-bottom: 1.5rem;
}
.mt-8 {
  margin-top: 2rem;
}
.mb-10 {
  margin-bottom: 2.5rem;
}
.-mb-2 {
  margin-bottom: -0.5rem;
}
.-mt-5 {
  margin-top: -1.25rem;
}
.max-w-screen-lg {
  max-width: 1024px;
}
.opacity-0 {
  opacity: 0;
}
.opacity-25 {
  opacity: 0.25;
}
.opacity-60 {
  opacity: 0.6;
}
.opacity-75 {
  opacity: 0.75;
}
.opacity-90 {
  opacity: 0.9;
}
.hover\:opacity-90:hover {
  opacity: 0.9;
}
.focus\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.p-1 {
  padding: 0.25rem;
}
.p-2 {
  padding: 0.5rem;
}
.p-4 {
  padding: 1rem;
}
.p-6 {
  padding: 1.5rem;
}
.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}
.px-1 {
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}
.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
.py-8 {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.py-12 {
  padding-top: 3rem;
  padding-bottom: 3rem;
}
.py-16 {
  padding-top: 4rem;
  padding-bottom: 4rem;
}
.pr-0 {
  padding-right: 0;
}
.pb-1 {
  padding-bottom: 0.25rem;
}
.pt-2 {
  padding-top: 0.5rem;
}
.pb-2 {
  padding-bottom: 0.5rem;
}
.pb-4 {
  padding-bottom: 1rem;
}
.pt-6 {
  padding-top: 1.5rem;
}
.pb-6 {
  padding-bottom: 1.5rem;
}
.pb-8 {
  padding-bottom: 2rem;
}
.text-left {
  text-align: left;
}
.text-gray-400 {
  --tw-text-opacity: 1;
  color: rgba(156, 163, 175, var(--tw-text-opacity));
}
.text-gray-700 {
  --tw-text-opacity: 1;
  color: rgba(55, 65, 81, var(--tw-text-opacity));
}
.text-gray-800 {
  --tw-text-opacity: 1;
  color: rgba(31, 41, 55, var(--tw-text-opacity));
}
.break-words {
  word-wrap: break-word;
}
.break-all {
  word-break: break-all;
}
.w-auto {
  width: auto;
}
.w-full {
  width: 100%;
}
`
