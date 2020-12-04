import { ParsedRequest } from './types'
import { css } from '../_assets/css'
import { bgURI } from '../_assets/bg'

function getCss() {
  return `
    ${css}
    body {
        background-image: url(${bgURI});
        background-size: 50%;
        background-repeat: repeat;
    }
`
}

export function getHtml(parsedReq: ParsedRequest) {
  const { username } = parsedReq
  return `<!DOCTYPE html>
<html>
    <meta charset="utf-8">
    <title>Generated Image</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        ${getCss()}
    </style>
    <body>
        <div class="p-6 py-12 md:p-12 lg:px-24 lg:py-16">
        <div class="bg-white mx-auto w-full max-w-screen-lg shadow-lg p-4">
            <div
            class="border-dashed border-yellow-500 border-2 p-4 pt-2 md:p-6 md:pt-3 lg:p-12 lg:pt-6"
            >
            <div class="flex font-serif flex-col lg:flex-row">
                <div class="flex-1 pr-0 lg:pr-12">
                <h1
                    class="text-5xl sm:text-6xl lg:text-7xl font-semibold text-gray-800 mb-3 text-6xl break-all"
                >
                    <span class="pr-1">${username}</span
                    ><span class="text-gray-700 text-5xl"
                    >'s coding summary for 2020.</span
                    >
                </h1>
                <p class="text-base sm:text-lg xl:text-xl text-gray-400 text-justify">
                    Wonder what you achieved in 2020? Get your summary now!
                </p>
                </div>
            </div>
            </div>
        </div>
        </div>
    </body>
</html>`
}
