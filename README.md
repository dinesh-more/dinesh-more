<!doctype html>
<html lang=en-us dir=ltr data-wc-theme-default=system>

<head>
  <meta charset=utf-8>
  <meta name=viewport content="width=device-width,initial-scale=1">
  <meta http-equiv=X-UA-Compatible content="IE=edge">
  <meta name=generator content="Hugo Blox Builder 0.2.0">
  <meta name=author content="吳健雄">
  <meta name=description content="The highly-customizable Hugo Academic theme powered by Hugo Blox Builder. Easily create your personal academic website.">
  <link rel=alternate hreflang=en-us href=https://academic-demo.netlify.app />
  <link rel=stylesheet href=/css/themes/emerald.min.css>
  <link href=/dist/wc.min.css rel=stylesheet>
  <script>
    window.hbb = {
      defaultTheme: document.documentElement.dataset.wcThemeDefault,
      setDarkTheme: () => {
        document.documentElement.classList.add("dark"), document.documentElement.style.colorScheme = "dark"
      },
      setLightTheme: () => {
        document.documentElement.classList.remove("dark"), document.documentElement.style.colorScheme = "light"
      }
    }, console.debug(`Default Hugo Blox Builder theme is ${window.hbb.defaultTheme}`), "wc-color-theme" in localStorage ? localStorage.getItem("wc-color-theme") === "dark" ? window.hbb.setDarkTheme() : window.hbb.setLightTheme() : (window.hbb.defaultTheme === "dark" ? window.hbb.setDarkTheme() : window.hbb.setLightTheme(), window.hbb.defaultTheme === "system" && (window.matchMedia("(prefers-color-scheme: dark)").matches ? window.hbb.setDarkTheme() : window.hbb.setLightTheme()))
  </script>
  <script>
    document.addEventListener("DOMContentLoaded", function() {
      let e = document.querySelectorAll("li input[type='checkbox'][disabled]");
      e.forEach(e => {
        e.parentElement.parentElement.classList.add("task-list")
      });
      const t = document.querySelectorAll(".task-list li");
      t.forEach(e => {
        let t = Array.from(e.childNodes).filter(e => e.nodeType === 3 && e.textContent.trim().length > 1);
        if (t.length > 0) {
          const n = document.createElement("label");
          t[0].after(n), n.appendChild(e.querySelector("input[type='checkbox']")), n.appendChild(t[0])
        }
      })
    })
  </script>
  <link rel=alternate href=/index.xml type=application/rss+xml title="Hugo Academic CV Theme">
  <link rel=icon type=image/png href=/media/icon_hu68170e94a17a2a43d6dcb45cf0e8e589_3079_32x32_fill_lanczos_center_3.png>
  <link rel=apple-touch-icon type=image/png href=/media/icon_hu68170e94a17a2a43d6dcb45cf0e8e589_3079_180x180_fill_lanczos_center_3.png>
  <link rel=canonical href=https://academic-demo.netlify.app />
  <meta property="twitter:card" content="summary">
  <meta property="twitter:site" content="@GetResearchDev">
  <meta property="twitter:creator" content="@GetResearchDev">
  <meta property="og:site_name" content="Hugo Academic CV Theme">
  <meta property="og:url" content="https://academic-demo.netlify.app/">
  <meta property="og:title" content="Hugo Academic CV Theme">
  <meta property="og:description" content="The highly-customizable Hugo Academic theme powered by Hugo Blox Builder. Easily create your personal academic website.">
  <meta property="og:image" content="https://academic-demo.netlify.app/media/icon_hu68170e94a17a2a43d6dcb45cf0e8e589_3079_512x512_fill_lanczos_center_3.png">
  <meta property="twitter:image" content="https://academic-demo.netlify.app/media/icon_hu68170e94a17a2a43d6dcb45cf0e8e589_3079_512x512_fill_lanczos_center_3.png">
  <meta property="og:locale" content="en-us">
  <meta property="og:updated_time" content="2022-10-24T00:00:00+00:00">
  <script type=application/ld+json>
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://academic-demo.netlify.app/"
    }
  </script>
  <title>Hugo Academic CV Theme</title>
  <style>
    @font-face {
      font-family: inter var;
      font-style: normal;
      font-weight: 100 900;
      font-display: swap;
      src: url(/dist/font/Inter.var.woff2)format(woff2)
    }
  </style>
  <link type=text/css rel=stylesheet href=/dist/pagefind/pagefind-ui.be766eb419317a14ec769d216e9779bfe8f3737c80e780f4ba0dafb57a41a482.css integrity="sha256-vnZutBkxehTsdp0hbpd5v+jzc3yA54D0ug2vtXpBpII=">
  <script src=/dist/pagefind/pagefind-ui.87693d7c6f2b3b347ce359d0ede762c033419f0a32b22ce508c335a81d841f1b.js integrity="sha256-h2k9fG8rOzR841nQ7ediwDNBnwoysizlCMM1qB2EHxs="></script>
  <script>
    window.hbb.pagefind = {
      baseUrl: "/"
    }
  </script>
  <style>
    html.dark {
      --pagefind-ui-primary: #eeeeee;
      --pagefind-ui-text: #eeeeee;
      --pagefind-ui-background: #152028;
      --pagefind-ui-border: #152028;
      --pagefind-ui-tag: #152028
    }
  </style>
  <script>
    window.addEventListener("DOMContentLoaded", e => {
      new PagefindUI({
        element: "#search",
        showSubResults: !0,
        baseUrl: window.hbb.pagefind.baseUrl,
        bundlePath: window.hbb.pagefind.baseUrl + "pagefind/"
      })
    }), document.addEventListener("DOMContentLoaded", () => {
      let e = document.getElementById("search"),
              t = document.getElementById("search_toggle");
      t && t.addEventListener("click", () => {
        if (e.classList.toggle("hidden"), e.querySelector("input").value = "", e.querySelector("input").focus(), !e.classList.contains("hidden")) {
          let t = document.querySelector(".pagefind-ui__search-clear");
          t && !t.hasAttribute("listenerOnClick") && (t.setAttribute("listenerOnClick", "true"), t.addEventListener("click", () => {
            e.classList.toggle("hidden")
          }))
        }
      })
    })
  </script>
  <script defer src=/js/hugo-blox-en.min.e5fa931947cac2d947732ea37a770aae2b5bd4a50b6048060cd129b46159a06d.js integrity="sha256-5fqTGUfKwtlHcy6jencKritb1KULYEgGDNEptGFZoG0="></script>
  <script async defer src=https://buttons.github.io/buttons.js></script>
  <style>
    :root {
      --color-primary-50: 236 253 245;
      --color-primary-100: 209 250 229;
      --color-primary-200: 167 243 208;
      --color-primary-300: 110 231 183;
      --color-primary-400: 52 211 153;
      --color-primary-500: 16 185 129;
      --color-primary-600: 5 150 105;
      --color-primary-700: 4 120 87;
      --color-primary-800: 6 95 70;
      --color-primary-900: 6 78 59;
      --color-primary-950: 2 44 34
    }

    .pagefind-ui__result.svelte-j9e30.svelte-j9e30 {
      list-style-type: none;
      display: flex;
      align-items: flex-start;
      gap: min(calc(40px * var(--pagefind-ui-scale)),3%);
      padding: calc(30px * var(--pagefind-ui-scale)) 0 calc(40px * var(--pagefind-ui-scale));
      border-top: solid var(--pagefind-ui-border-width) var(--pagefind-ui-border)
    }

    .pagefind-ui__result.svelte-j9e30.svelte-j9e30:last-of-type {
      border-bottom: solid var(--pagefind-ui-border-width) var(--pagefind-ui-border)
    }

    .pagefind-ui__result-thumb.svelte-j9e30.svelte-j9e30 {
      width: min(30%,calc((30% - (100px * var(--pagefind-ui-scale))) * 100000));
      max-width: calc(120px * var(--pagefind-ui-scale));
      margin-top: calc(10px * var(--pagefind-ui-scale));
      aspect-ratio: var(--pagefind-ui-image-box-ratio);
      position: relative
    }

    .pagefind-ui__result-image.svelte-j9e30.svelte-j9e30 {
      display: block;
      position: absolute;
      left: 50%;
      transform: translate(-50%);
      font-size: 0;
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 100%;
      border-radius: var(--pagefind-ui-image-border-radius)
    }

    .pagefind-ui__result-inner.svelte-j9e30.svelte-j9e30 {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-top: calc(10px * var(--pagefind-ui-scale))
    }

    .pagefind-ui__result-title.svelte-j9e30.svelte-j9e30 {
      display: inline-block;
      font-weight: 700;
      font-size: calc(21px * var(--pagefind-ui-scale));
      margin-top: 0;
      margin-bottom: 0
    }

    .pagefind-ui__result-title.svelte-j9e30 .pagefind-ui__result-link.svelte-j9e30 {
      color: var(--pagefind-ui-text);
      text-decoration: none
    }

    .pagefind-ui__result-title.svelte-j9e30 .pagefind-ui__result-link.svelte-j9e30:hover {
      text-decoration: underline
    }

    .pagefind-ui__result-excerpt.svelte-j9e30.svelte-j9e30 {
      display: inline-block;
      font-weight: 400;
      font-size: calc(16px * var(--pagefind-ui-scale));
      margin-top: calc(4px * var(--pagefind-ui-scale));
      margin-bottom: 0;
      min-width: calc(250px * var(--pagefind-ui-scale))
    }

    .pagefind-ui__loading.svelte-j9e30.svelte-j9e30 {
      color: var(--pagefind-ui-text);
      background-color: var(--pagefind-ui-text);
      border-radius: var(--pagefind-ui-border-radius);
      opacity: .1;
      pointer-events: none
    }

    .pagefind-ui__result-tags.svelte-j9e30.svelte-j9e30 {
      list-style-type: none;
      padding: 0;
      display: flex;
      gap: calc(20px * var(--pagefind-ui-scale));
      flex-wrap: wrap;
      margin-top: calc(20px * var(--pagefind-ui-scale))
    }

    .pagefind-ui__result-tag.svelte-j9e30.svelte-j9e30 {
      padding: calc(4px * var(--pagefind-ui-scale)) calc(8px * var(--pagefind-ui-scale));
      font-size: calc(14px * var(--pagefind-ui-scale));
      border-radius: var(--pagefind-ui-border-radius);
      background-color: var(--pagefind-ui-tag)
    }

    .pagefind-ui__result.svelte-4xnkmf.svelte-4xnkmf {
      list-style-type: none;
      display: flex;
      align-items: flex-start;
      gap: min(calc(40px * var(--pagefind-ui-scale)),3%);
      padding: calc(30px * var(--pagefind-ui-scale)) 0 calc(40px * var(--pagefind-ui-scale));
      border-top: solid var(--pagefind-ui-border-width) var(--pagefind-ui-border)
    }

    .pagefind-ui__result.svelte-4xnkmf.svelte-4xnkmf:last-of-type {
      border-bottom: solid var(--pagefind-ui-border-width) var(--pagefind-ui-border)
    }

    .pagefind-ui__result-nested.svelte-4xnkmf.svelte-4xnkmf {
      display: flex;
      flex-direction: column;
      padding-left: calc(20px * var(--pagefind-ui-scale))
    }

    .pagefind-ui__result-nested.svelte-4xnkmf.svelte-4xnkmf:first-of-type {
      padding-top: calc(10px * var(--pagefind-ui-scale))
    }

    .pagefind-ui__result-nested.svelte-4xnkmf .pagefind-ui__result-link.svelte-4xnkmf {
      font-size: .9em;
      position: relative
    }

    .pagefind-ui__result-nested.svelte-4xnkmf .pagefind-ui__result-link.svelte-4xnkmf:before {
      content: "\2937  ";
      position: absolute;
      top: 0;
      right: calc(100% + .1em)
    }

    .pagefind-ui__result-thumb.svelte-4xnkmf.svelte-4xnkmf {
      width: min(30%,calc((30% - (100px * var(--pagefind-ui-scale))) * 100000));
      max-width: calc(120px * var(--pagefind-ui-scale));
      margin-top: calc(10px * var(--pagefind-ui-scale));
      aspect-ratio: var(--pagefind-ui-image-box-ratio);
      position: relative
    }

    .pagefind-ui__result-image.svelte-4xnkmf.svelte-4xnkmf {
      display: block;
      position: absolute;
      left: 50%;
      transform: translate(-50%);
      font-size: 0;
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 100%;
      border-radius: var(--pagefind-ui-image-border-radius)
    }

    .pagefind-ui__result-inner.svelte-4xnkmf.svelte-4xnkmf {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-top: calc(10px * var(--pagefind-ui-scale))
    }

    .pagefind-ui__result-title.svelte-4xnkmf.svelte-4xnkmf {
      display: inline-block;
      font-weight: 700;
      font-size: calc(21px * var(--pagefind-ui-scale));
      margin-top: 0;
      margin-bottom: 0
    }

    .pagefind-ui__result-title.svelte-4xnkmf .pagefind-ui__result-link.svelte-4xnkmf {
      color: var(--pagefind-ui-text);
      text-decoration: none
    }

    .pagefind-ui__result-title.svelte-4xnkmf .pagefind-ui__result-link.svelte-4xnkmf:hover {
      text-decoration: underline
    }

    .pagefind-ui__result-excerpt.svelte-4xnkmf.svelte-4xnkmf {
      display: inline-block;
      font-weight: 400;
      font-size: calc(16px * var(--pagefind-ui-scale));
      margin-top: calc(4px * var(--pagefind-ui-scale));
      margin-bottom: 0;
      min-width: calc(250px * var(--pagefind-ui-scale))
    }

    .pagefind-ui__loading.svelte-4xnkmf.svelte-4xnkmf {
      color: var(--pagefind-ui-text);
      background-color: var(--pagefind-ui-text);
      border-radius: var(--pagefind-ui-border-radius);
      opacity: .1;
      pointer-events: none
    }

    .pagefind-ui__result-tags.svelte-4xnkmf.svelte-4xnkmf {
      list-style-type: none;
      padding: 0;
      display: flex;
      gap: calc(20px * var(--pagefind-ui-scale));
      flex-wrap: wrap;
      margin-top: calc(20px * var(--pagefind-ui-scale))
    }

    .pagefind-ui__result-tag.svelte-4xnkmf.svelte-4xnkmf {
      padding: calc(4px * var(--pagefind-ui-scale)) calc(8px * var(--pagefind-ui-scale));
      font-size: calc(14px * var(--pagefind-ui-scale));
      border-radius: var(--pagefind-ui-border-radius);
      background-color: var(--pagefind-ui-tag)
    }

    legend.svelte-1v2r7ls.svelte-1v2r7ls {
      position: absolute;
      clip: rect(0 0 0 0)
    }

    .pagefind-ui__filter-panel.svelte-1v2r7ls.svelte-1v2r7ls {
      min-width: min(calc(260px * var(--pagefind-ui-scale)),100%);
      flex: 1;
      display: flex;
      flex-direction: column;
      margin-top: calc(20px * var(--pagefind-ui-scale))
    }

    .pagefind-ui__filter-group.svelte-1v2r7ls.svelte-1v2r7ls {
      border: 0;
      padding: 0
    }

    .pagefind-ui__filter-block.svelte-1v2r7ls.svelte-1v2r7ls {
      padding: 0;
      display: block;
      border-bottom: solid calc(2px * var(--pagefind-ui-scale)) var(--pagefind-ui-border);
      padding: calc(20px * var(--pagefind-ui-scale)) 0
    }

    .pagefind-ui__filter-name.svelte-1v2r7ls.svelte-1v2r7ls {
      font-size: calc(16px * var(--pagefind-ui-scale));
      position: relative;
      display: flex;
      align-items: center;
      list-style: none;
      font-weight: 700;
      cursor: pointer;
      height: calc(24px * var(--pagefind-ui-scale))
    }

    .pagefind-ui__filter-name.svelte-1v2r7ls.svelte-1v2r7ls::-webkit-details-marker {
      display: none
    }

    .pagefind-ui__filter-name.svelte-1v2r7ls.svelte-1v2r7ls:after {
      position: absolute;
      content: "";
      right: calc(6px * var(--pagefind-ui-scale));
      top: 50%;
      width: calc(8px * var(--pagefind-ui-scale));
      height: calc(8px * var(--pagefind-ui-scale));
      border: solid calc(2px * var(--pagefind-ui-scale)) currentColor;
      border-right: 0;
      border-top: 0;
      transform: translateY(-70%) rotate(-45deg)
    }

    .pagefind-ui__filter-block[open].svelte-1v2r7ls .pagefind-ui__filter-name.svelte-1v2r7ls:after {
      transform: translateY(-70%) rotate(-225deg)
    }

    .pagefind-ui__filter-group.svelte-1v2r7ls.svelte-1v2r7ls {
      display: flex;
      flex-direction: column;
      gap: calc(20px * var(--pagefind-ui-scale));
      padding-top: calc(30px * var(--pagefind-ui-scale))
    }

    .pagefind-ui__filter-value.svelte-1v2r7ls.svelte-1v2r7ls {
      position: relative;
      display: flex;
      align-items: center;
      gap: calc(8px * var(--pagefind-ui-scale))
    }

    .pagefind-ui__filter-value.svelte-1v2r7ls.svelte-1v2r7ls:before {
      position: absolute;
      content: "";
      top: 50%;
      left: calc(8px * var(--pagefind-ui-scale));
      width: 0px;
      height: 0px;
      border: solid 1px #fff;
      opacity: 0;
      transform: translate(calc(4.5px * var(--pagefind-ui-scale) * -1),calc(.8px * var(--pagefind-ui-scale))) skew(-5deg) rotate(-45deg);
      transform-origin: top left;
      border-top: 0;
      border-right: 0;
      pointer-events: none
    }

    .pagefind-ui__filter-value.pagefind-ui__filter-value--checked.svelte-1v2r7ls.svelte-1v2r7ls:before {
      opacity: 1;
      width: calc(9px * var(--pagefind-ui-scale));
      height: calc(4px * var(--pagefind-ui-scale));
      transition: width .1s ease-out .1s,height .1s ease-in
    }

    .pagefind-ui__filter-checkbox.svelte-1v2r7ls.svelte-1v2r7ls {
      margin: 0;
      width: calc(16px * var(--pagefind-ui-scale));
      height: calc(16px * var(--pagefind-ui-scale));
      border: solid 1px var(--pagefind-ui-border);
      appearance: none;
      -webkit-appearance: none;
      border-radius: calc(var(--pagefind-ui-border-radius) / 2);
      background-color: var(--pagefind-ui-background);
      cursor: pointer
    }

    .pagefind-ui__filter-checkbox.svelte-1v2r7ls.svelte-1v2r7ls:checked {
      background-color: var(--pagefind-ui-primary);
      border: solid 1px var(--pagefind-ui-primary)
    }

    .pagefind-ui__filter-label.svelte-1v2r7ls.svelte-1v2r7ls {
      cursor: pointer;
      font-size: calc(16px * var(--pagefind-ui-scale));
      font-weight: 400
    }

    .pagefind-ui--reset *:where(:not(html,iframe,canvas,img,svg,video):not(svg *,symbol *)) {
      all: unset;
      display: revert;
      outline: revert
    }

    .pagefind-ui--reset *,.pagefind-ui--reset *:before,.pagefind-ui--reset *:after {
      box-sizing: border-box
    }

    .pagefind-ui--reset a,.pagefind-ui--reset button {
      cursor: revert
    }

    .pagefind-ui--reset ol,.pagefind-ui--reset ul,.pagefind-ui--reset menu {
      list-style: none
    }

    .pagefind-ui--reset img {
      max-width: 100%
    }

    .pagefind-ui--reset table {
      border-collapse: collapse
    }

    .pagefind-ui--reset input,.pagefind-ui--reset textarea {
      -webkit-user-select: auto
    }

    .pagefind-ui--reset textarea {
      white-space: revert
    }

    .pagefind-ui--reset meter {
      -webkit-appearance: revert;
      appearance: revert
    }

    .pagefind-ui--reset ::placeholder {
      color: unset
    }

    .pagefind-ui--reset :where([hidden]) {
      display: none
    }

    .pagefind-ui--reset :where([contenteditable]:not([contenteditable="false"])) {
      -moz-user-modify: read-write;
      -webkit-user-modify: read-write;
      overflow-wrap: break-word;
      -webkit-line-break: after-white-space;
      -webkit-user-select: auto
    }

    .pagefind-ui--reset :where([draggable="true"]) {
      -webkit-user-drag: element
    }

    .pagefind-ui--reset mark {
      all: revert
    }

    :root {
      --pagefind-ui-scale: .8;
      --pagefind-ui-primary: #393939;
      --pagefind-ui-text: #393939;
      --pagefind-ui-background: #ffffff;
      --pagefind-ui-border: #eeeeee;
      --pagefind-ui-tag: #eeeeee;
      --pagefind-ui-border-width: 2px;
      --pagefind-ui-border-radius: 8px;
      --pagefind-ui-image-border-radius: 8px;
      --pagefind-ui-image-box-ratio: 3 / 2;
      --pagefind-ui-font: system, -apple-system, "BlinkMacSystemFont", ".SFNSText-Regular", "San Francisco", "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", "Ubuntu", "arial", sans-serif
    }

    .pagefind-ui.svelte-1d60ae3 {
      width: 100%;
      color: var(--pagefind-ui-text);
      font-family: var(--pagefind-ui-font)
    }

    .pagefind-ui__hidden.svelte-1d60ae3 {
      display: none!important
    }

    .pagefind-ui__suppressed.svelte-1d60ae3 {
      opacity: 0;
      pointer-events: none
    }

    .pagefind-ui__form.svelte-1d60ae3 {
      position: relative
    }

    .pagefind-ui__form.svelte-1d60ae3:before {
      background-color: var(--pagefind-ui-text);
      width: calc(18px * var(--pagefind-ui-scale));
      height: calc(18px * var(--pagefind-ui-scale));
      top: calc(23px * var(--pagefind-ui-scale));
      left: calc(20px * var(--pagefind-ui-scale));
      content: "";
      position: absolute;
      display: block;
      opacity: .7;
      -webkit-mask-image: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.7549 11.255H11.9649L11.6849 10.985C12.6649 9.845 13.2549 8.365 13.2549 6.755C13.2549 3.165 10.3449 0.255005 6.75488 0.255005C3.16488 0.255005 0.254883 3.165 0.254883 6.755C0.254883 10.345 3.16488 13.255 6.75488 13.255C8.36488 13.255 9.84488 12.665 10.9849 11.685L11.2549 11.965V12.755L16.2549 17.745L17.7449 16.255L12.7549 11.255ZM6.75488 11.255C4.26488 11.255 2.25488 9.245 2.25488 6.755C2.25488 4.26501 4.26488 2.255 6.75488 2.255C9.24488 2.255 11.2549 4.26501 11.2549 6.755C11.2549 9.245 9.24488 11.255 6.75488 11.255Z' fill='%23000000'/%3E%3C/svg%3E%0A");
      mask-image: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.7549 11.255H11.9649L11.6849 10.985C12.6649 9.845 13.2549 8.365 13.2549 6.755C13.2549 3.165 10.3449 0.255005 6.75488 0.255005C3.16488 0.255005 0.254883 3.165 0.254883 6.755C0.254883 10.345 3.16488 13.255 6.75488 13.255C8.36488 13.255 9.84488 12.665 10.9849 11.685L11.2549 11.965V12.755L16.2549 17.745L17.7449 16.255L12.7549 11.255ZM6.75488 11.255C4.26488 11.255 2.25488 9.245 2.25488 6.755C2.25488 4.26501 4.26488 2.255 6.75488 2.255C9.24488 2.255 11.2549 4.26501 11.2549 6.755C11.2549 9.245 9.24488 11.255 6.75488 11.255Z' fill='%23000000'/%3E%3C/svg%3E%0A");
      -webkit-mask-size: 100%;
      mask-size: 100%;
      z-index: 9;
      pointer-events: none
    }

    .pagefind-ui__search-input.svelte-1d60ae3 {
      height: calc(64px * var(--pagefind-ui-scale));
      padding: 0 calc(70px * var(--pagefind-ui-scale)) 0 calc(54px * var(--pagefind-ui-scale));
      background-color: var(--pagefind-ui-background);
      border: var(--pagefind-ui-border-width) solid var(--pagefind-ui-border);
      border-radius: var(--pagefind-ui-border-radius);
      font-size: calc(21px * var(--pagefind-ui-scale));
      position: relative;
      appearance: none;
      -webkit-appearance: none;
      display: flex;
      width: 100%;
      box-sizing: border-box;
      font-weight: 700
    }

    .pagefind-ui__search-input.svelte-1d60ae3::placeholder {
      opacity: .2
    }

    .pagefind-ui__search-clear.svelte-1d60ae3 {
      position: absolute;
      top: calc(3px * var(--pagefind-ui-scale));
      right: calc(3px * var(--pagefind-ui-scale));
      height: calc(58px * var(--pagefind-ui-scale));
      padding: 0 calc(15px * var(--pagefind-ui-scale)) 0 calc(2px * var(--pagefind-ui-scale));
      color: var(--pagefind-ui-text);
      font-size: calc(14px * var(--pagefind-ui-scale));
      cursor: pointer;
      background-color: var(--pagefind-ui-background);
      border-radius: var(--pagefind-ui-border-radius)
    }

    .pagefind-ui__drawer.svelte-1d60ae3 {
      gap: calc(60px * var(--pagefind-ui-scale));
      display: flex;
      flex-direction: row;
      flex-wrap: wrap
    }

    .pagefind-ui__results-area.svelte-1d60ae3 {
      min-width: min(calc(400px * var(--pagefind-ui-scale)),100%);
      flex: 1000;
      margin-top: calc(20px * var(--pagefind-ui-scale))
    }

    .pagefind-ui__results.svelte-1d60ae3 {
      padding: 0
    }

    .pagefind-ui__message.svelte-1d60ae3 {
      box-sizing: content-box;
      font-size: calc(16px * var(--pagefind-ui-scale));
      height: calc(24px * var(--pagefind-ui-scale));
      padding: calc(20px * var(--pagefind-ui-scale)) 0;
      display: flex;
      align-items: center;
      font-weight: 700;
      margin-top: 0
    }

    .pagefind-ui__button.svelte-1d60ae3 {
      margin-top: calc(40px * var(--pagefind-ui-scale));
      border: var(--pagefind-ui-border-width) solid var(--pagefind-ui-border);
      border-radius: var(--pagefind-ui-border-radius);
      height: calc(48px * var(--pagefind-ui-scale));
      padding: 0 calc(12px * var(--pagefind-ui-scale));
      font-size: calc(16px * var(--pagefind-ui-scale));
      color: var(--pagefind-ui-primary);
      background: var(--pagefind-ui-background);
      width: 100%;
      text-align: center;
      font-weight: 700;
      cursor: pointer
    }

    .pagefind-ui__button.svelte-1d60ae3:hover {
      border-color: var(--pagefind-ui-primary);
      color: var(--pagefind-ui-primary);
      background: var(--pagefind-ui-background)
    }

    /*! tailwindcss v3.3.5 | MIT License | https://tailwindcss.com*/
    *,:after,:before {
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      border: 0 solid #e5e7eb
    }

    :after,:before {
      --tw-content: ""
    }

    html {
      line-height: 1.5;
      -webkit-text-size-adjust: 100%;
      -moz-tab-size: 4;
      -o-tab-size: 4;
      tab-size: 4;
      font-family: Inter var,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
      -webkit-font-feature-settings: normal;
      font-feature-settings: normal;
      font-variation-settings: normal
    }

    body {
      margin: 0;
      line-height: inherit
    }

    hr {
      height: 0;
      color: inherit;
      border-top-width: 1px
    }

    abbr:where([title]) {
      -webkit-text-decoration: underline dotted;
      text-decoration: underline dotted
    }

    h1,h2,h3,h4,h5,h6 {
      font-size: inherit;
      font-weight: inherit
    }

    a {
      color: inherit;
      text-decoration: inherit
    }

    b,strong {
      font-weight: bolder
    }

    code,kbd,pre,samp {
      font-family: ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;
      font-size: 1em
    }

    small {
      font-size: 80%
    }

    sub,sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: initial
    }

    sub {
      bottom: -.25em
    }

    sup {
      top: -.5em
    }

    table {
      text-indent: 0;
      border-color: inherit;
      border-collapse: collapse
    }

    button,input,optgroup,select,textarea {
      font-family: inherit;
      -webkit-font-feature-settings: inherit;
      font-feature-settings: inherit;
      font-variation-settings: inherit;
      font-size: 100%;
      font-weight: inherit;
      line-height: inherit;
      color: inherit;
      margin: 0;
      padding: 0
    }

    button,select {
      text-transform: none
    }

    [type=button],[type=reset],[type=submit],button {
      -webkit-appearance: button;
      background-color: initial;
      background-image: none
    }

    :-moz-focusring {
      outline: auto
    }

    :-moz-ui-invalid {
      box-shadow: none
    }

    progress {
      vertical-align: initial
    }

    ::-webkit-inner-spin-button,::-webkit-outer-spin-button {
      height: auto
    }

    [type=search] {
      -webkit-appearance: textfield;
      outline-offset: -2px
    }

    ::-webkit-search-decoration {
      -webkit-appearance: none
    }

    ::-webkit-file-upload-button {
      -webkit-appearance: button;
      font: inherit
    }

    summary {
      display: list-item
    }

    blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre {
      margin: 0
    }

    fieldset {
      margin: 0
    }

    fieldset,legend {
      padding: 0
    }

    menu,ol,ul {
      list-style: none;
      margin: 0;
      padding: 0
    }

    dialog {
      padding: 0
    }

    textarea {
      resize: vertical
    }

    input::-webkit-input-placeholder,textarea::-webkit-input-placeholder {
      opacity: 1;
      color: #9ca3af
    }

    input::-moz-placeholder,textarea::-moz-placeholder {
      opacity: 1;
      color: #9ca3af
    }

    input:-ms-input-placeholder,textarea:-ms-input-placeholder {
      opacity: 1;
      color: #9ca3af
    }

    input::-ms-input-placeholder,textarea::-ms-input-placeholder {
      opacity: 1;
      color: #9ca3af
    }

    input::placeholder,textarea::placeholder {
      opacity: 1;
      color: #9ca3af
    }

    [role=button],button {
      cursor: pointer
    }

    :disabled {
      cursor: default
    }

    audio,canvas,embed,iframe,img,object,svg,video {
      display: block;
      vertical-align: middle
    }

    img,video {
      max-width: 100%;
      height: auto
    }

    [hidden] {
      display: none
    }

    *,:after,:before {
      --tw-border-spacing-x: 0;
      --tw-border-spacing-y: 0;
      --tw-translate-x: 0;
      --tw-translate-y: 0;
      --tw-rotate: 0;
      --tw-skew-x: 0;
      --tw-skew-y: 0;
      --tw-scale-x: 1;
      --tw-scale-y: 1;
      --tw-pan-x: ;
      --tw-pan-y: ;
      --tw-pinch-zoom: ;
      --tw-scroll-snap-strictness: proximity;
      --tw-gradient-from-position: ;
      --tw-gradient-via-position: ;
      --tw-gradient-to-position: ;
      --tw-ordinal: ;
      --tw-slashed-zero: ;
      --tw-numeric-figure: ;
      --tw-numeric-spacing: ;
      --tw-numeric-fraction: ;
      --tw-ring-inset: ;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-color: #3b82f680;
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-ring-shadow: 0 0 #0000;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-colored: 0 0 #0000;
      --tw-blur: ;
      --tw-brightness: ;
      --tw-contrast: ;
      --tw-grayscale: ;
      --tw-hue-rotate: ;
      --tw-invert: ;
      --tw-saturate: ;
      --tw-sepia: ;
      --tw-drop-shadow: ;
      --tw-backdrop-blur: ;
      --tw-backdrop-brightness: ;
      --tw-backdrop-contrast: ;
      --tw-backdrop-grayscale: ;
      --tw-backdrop-hue-rotate: ;
      --tw-backdrop-invert: ;
      --tw-backdrop-opacity: ;
      --tw-backdrop-saturate: ;
      --tw-backdrop-sepia:
    }

    ::-ms-backdrop {
      --tw-border-spacing-x: 0;
      --tw-border-spacing-y: 0;
      --tw-translate-x: 0;
      --tw-translate-y: 0;
      --tw-rotate: 0;
      --tw-skew-x: 0;
      --tw-skew-y: 0;
      --tw-scale-x: 1;
      --tw-scale-y: 1;
      --tw-pan-x: ;
      --tw-pan-y: ;
      --tw-pinch-zoom: ;
      --tw-scroll-snap-strictness: proximity;
      --tw-gradient-from-position: ;
      --tw-gradient-via-position: ;
      --tw-gradient-to-position: ;
      --tw-ordinal: ;
      --tw-slashed-zero: ;
      --tw-numeric-figure: ;
      --tw-numeric-spacing: ;
      --tw-numeric-fraction: ;
      --tw-ring-inset: ;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-color: #3b82f680;
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-ring-shadow: 0 0 #0000;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-colored: 0 0 #0000;
      --tw-blur: ;
      --tw-brightness: ;
      --tw-contrast: ;
      --tw-grayscale: ;
      --tw-hue-rotate: ;
      --tw-invert: ;
      --tw-saturate: ;
      --tw-sepia: ;
      --tw-drop-shadow: ;
      --tw-backdrop-blur: ;
      --tw-backdrop-brightness: ;
      --tw-backdrop-contrast: ;
      --tw-backdrop-grayscale: ;
      --tw-backdrop-hue-rotate: ;
      --tw-backdrop-invert: ;
      --tw-backdrop-opacity: ;
      --tw-backdrop-saturate: ;
      --tw-backdrop-sepia:
    }

    ::backdrop {
      --tw-border-spacing-x: 0;
      --tw-border-spacing-y: 0;
      --tw-translate-x: 0;
      --tw-translate-y: 0;
      --tw-rotate: 0;
      --tw-skew-x: 0;
      --tw-skew-y: 0;
      --tw-scale-x: 1;
      --tw-scale-y: 1;
      --tw-pan-x: ;
      --tw-pan-y: ;
      --tw-pinch-zoom: ;
      --tw-scroll-snap-strictness: proximity;
      --tw-gradient-from-position: ;
      --tw-gradient-via-position: ;
      --tw-gradient-to-position: ;
      --tw-ordinal: ;
      --tw-slashed-zero: ;
      --tw-numeric-figure: ;
      --tw-numeric-spacing: ;
      --tw-numeric-fraction: ;
      --tw-ring-inset: ;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-color: #3b82f680;
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-ring-shadow: 0 0 #0000;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-colored: 0 0 #0000;
      --tw-blur: ;
      --tw-brightness: ;
      --tw-contrast: ;
      --tw-grayscale: ;
      --tw-hue-rotate: ;
      --tw-invert: ;
      --tw-saturate: ;
      --tw-sepia: ;
      --tw-drop-shadow: ;
      --tw-backdrop-blur: ;
      --tw-backdrop-brightness: ;
      --tw-backdrop-contrast: ;
      --tw-backdrop-grayscale: ;
      --tw-backdrop-hue-rotate: ;
      --tw-backdrop-invert: ;
      --tw-backdrop-opacity: ;
      --tw-backdrop-saturate: ;
      --tw-backdrop-sepia:
    }

    .container {
      width: 100%
    }

    @media (min-width: 640px) {
      .container {
        max-width:640px
      }
    }

    @media (min-width: 768px) {
      .container {
        max-width:768px
      }
    }

    @media (min-width: 1024px) {
      .container {
        max-width:1024px
      }
    }

    @media (min-width: 1280px) {
      .container {
        max-width:1280px
      }
    }

    @media (min-width: 1536px) {
      .container {
        max-width:1536px
      }
    }

    .prose {
      color: var(--tw-prose-body);
      max-width: 65ch
    }

    .prose :where(p):not(:where([class~=not-prose],[class~=not-prose] *)) {
      margin-top: 1.25em;
      margin-bottom: 1.25em
    }

    .prose :where([class~=lead]):not(:where([class~=not-prose],[class~=not-prose] *)) {
      color: var(--tw-prose-lead);
      font-size: 1.25em;
      line-height: 1.6;
      margin-top: 1.2em;
      margin-bottom: 1.2em
    }

    .prose :where(a):not(:where([class~=not-prose],[class~=not-prose] *)) {
      color: var(--tw-prose-links);
      text-decoration: underline;
      font-weight: 500;
      text-decoration-color: rgb(var(--color-primary-300)/1)
    }

    .prose :where(a):not(:where([class~=not-prose],[class~=not-prose] *)):hover {
      color: rgb(var(--color-primary-600)/1);
      text-decoration: none;
      border-radius: .09rem
    }

    .prose :where(strong):not(:where([class~=not-prose],[class~=not-prose] *)) {
      color: var(--tw-prose-bold);
      font-weight: 600
    }

    .prose :where(a strong):not(:where([class~=not-prose],[class~=not-prose] *)) {
      color: inherit
    }

    .prose :where(blockquote strong):not(:where([class~=not-prose],[class~=not-prose] *)) {
      color: inherit
    }

    .prose :where(thead th strong):not(:where([class~=not-prose],[class~=not-prose] *)) {
      color: inherit
    }

    .prose :where(ol):not(:where([class~=not-prose],[class~=not-prose] *)) {
      list-style-type: decimal;
      margin-top: 1.25em;
      margin-bottom: 1.25em;
      padding-left: 1.625em
    }

    .prose :where(ol[type=A]):not(:where([class~=not-prose],[class~=not-prose] *)) {
      list-style-type: upper-alpha
    }

    .prose :where(ol[type=a]):not(:where([class~=not-prose],[class~=not-prose] *)) {
      list-style-type: lower-alpha
    }

    .prose :where(ol[type=A s]):not(:where([class~=not-prose],[class~=not-prose] *)) {
      list-style-type: upper-alpha
    }

    .prose :where(ol[type=a s]):not(:where([class~=not-prose],[class~=not-prose] *)) {
      list-style-type: lower-alpha
    }

    .prose :where(ol[type=I]):not(:where([class~=not-prose],[class~=not-prose] *)) {
      list-style-type: upper-roman
    }

    .prose :where(ol[type=i]):not(:where([class~=not-prose],[class~=not-prose] *)) {
      list-style-type: lower-roman
    }

    .prose :where(ol[type=I s]):not(:where([class~=not-prose],[class~=not-prose] *)) {
      list-style-type: upper-roman
    }

    .prose :where(ol[type=i s]):not(:where([class~=not-prose],[class~=not-prose] *)) {
      list-style-type: lower-roman
    }

    .prose :where(ol[type="1"]):not(:where([class~=not-prose],[class~=not-prose] *)) {
      list-style-type: decimal
    }

    .prose :where(ul):not(:where([class~=not-prose],[class~=not-prose] *)) {
      list-style-type: disc;
      margin-top: 1.25em;
      margin-bottom: 1.25em;
      padding-left: 1.625em
    }

    .prose :where(ol>li):not(:where([class~=not-prose],[class~=not-prose] *))::marker {
      font-weight: 400;
      color: var(--tw-prose-counters)
    }

    .prose :where(ul>li):not(:where([class~=not-prose],[class~=not-prose] *))::marker {
      color: var(--tw-prose-bullets)
    }

    .prose :where(dt):not(:where([class~=not-prose],[class~=not-prose] *)) {
      color: var(--tw-prose-headings);
      font-weight: 600;
      margin-top: 1.25em
    }

    .prose :where(hr):not(:where([class~=not-prose],[class~=not-prose] *)) {
      border-color: var(--tw-prose-hr);
      border-top-width: 1px;
      margin-top: 3em;
      margin-bottom: 3em
    }

    .prose :where(blockquote):not(:where([class~=not-prose],[class~=not-prose] *)) {
      font-weight: 500;
      font-style: italic;
      color: var(--tw-prose-quotes);
      border-left-width: .25rem;
      border-left-color: var(--tw-prose-quote-borders);
      quotes: "\201C""\201D""\2018""\2019";
      margin-top: 1.6em;
      margin-bottom: 1.6em;
      padding-left: 1em
    }

    .prose :where(blockquote p:first-of-type):not(:where([class~=not-prose],[class~=not-prose] *)):before {
      content: open-quote
    }

    .prose :where(blockquote p:last-of-type):not(:where([class~=not-prose],[class~=not-prose] *)):after {
      content: close-quote
    }

    .prose :where(h1):not(:where([class~=not-prose],[class~=not-prose] *)) {
      color: var(--tw-prose-headings);
      font-weight: 800;
      font-size: 2.25em;
      margin-top: 0;
      margin-bottom: .8888889em;
      line-height: 1.1111111
    }

    .prose :where(h1 strong):not(:where([class~=not-prose],[class~=not-prose] *)) {
      font-weight: 900;
      color: inherit
    }

    .prose :where(h2):not(:where([class~=not-prose],[class~=not-prose] *)) {
      color: var(--tw-prose-headings);
      font-weight: 700;
      font-size: 1.5em;
      margin-top: 2em;
      margin-bottom: 1em;
      line-height: 1.3333333
    }

    .prose :where(h2 strong):not(:where([class~=not-prose],[class~=not-prose] *)) {
      font-weight: 800;
      color: inherit
    }

    .prose :where(h3):not(:where([class~=not-prose],[class~=not-prose] *)) {
      color: var(--tw-prose-headings);
      font-weight: 600;
      font-size: 1.25em;
      margin-top: 1.6em;
      margin-bottom: .6em;
      line-height: 1.6
    }

    .prose :where(h3 strong):not(:where([class~=not-prose],[class~=not-prose] *)) {
      font-weight: 700;
      color: inherit
    }

    .prose :where(h4):not(:where([class~=not-prose],[class~=not-prose] *)) {
      color: var(--tw-prose-headings);
      font-weight: 600;
      margin-top: 1.5em;
      margin-bottom: .5em;
      line-height: 1.5
    }

    .prose :where(h4 strong):not(:where([class~=not-prose],[class~=not-prose] *)) {
      font-weight: 700;
      color: inherit
    }

    .prose :where(img):not(:where([class~=not-prose],[class~=not-prose] *)) {
      margin-top: 2em;
      margin-bottom: 2em
    }

    .prose :where(picture):not(:where([class~=not-prose],[class~=not-prose] *)) {
      display: block;
      margin-top: 2em;
      margin-bottom: 2em
    }

    .prose :where(kbd):not(:where([class~=not-prose],[class~=not-prose] *)) {
      font-weight: 500;
      font-family: inherit;
      color: var(--tw-prose-kbd);
      -webkit-box-shadow: 0 0 0 1px rgb(var(--tw-prose-kbd-shadows)/10%),0 3px 0 rgb(var(--tw-prose-kbd-shadows)/10%);
      box-shadow: 0 0 0 1px rgb(var(--tw-prose-kbd-shadows)/10%),0 3px 0 rgb(var(--tw-prose-kbd-shadows)/10%);
      font-size: .875em;
      border-radius: .3125rem;
      padding: .1875em .375em
    }

    .prose :where(code):not(:where([class~=not-prose],[class~=not-prose] *)) {
      color: var(--tw-prose-code);
      font-weight: 600;
      font-size: .875em
    }

    .prose :where(code):not(:where([class~=not-prose],[class~=not-prose] *)):before {
      content: "`"
    }

    .prose :where(code):not(:where([class~=not-prose],[class~=not-prose] *)):after {
      content: "`"
    }

    .prose :where(a code):not(:where([class~=not-prose],[class~=not-prose] *)) {
      color: inherit
    }

    .prose :where(h1 code):not(:where([class~=not-prose],[class~=not-prose] *)) {
      color: inherit
    }

    .prose :where(h2 code):not(:where([class~=not-prose],[class~=not-prose] *)) {
      color: inherit;
      font-size: .875em
    }

    .prose :where(h3 code):not(:where([class~=not-prose],[class~=not-prose] *)) {
      color: inherit;
      font-size: .9em
    }

    .prose :where(h4 code):not(:where([class~=not-prose],[class~=not-prose] *)) {
      color: inherit
    }

    .prose :where(blockquote code):not(:where([class~=not-prose],[class~=not-prose] *)) {
      color: inherit
    }

    .prose :where(thead th code):not(:where([class~=not-prose],[class~=not-prose] *)) {
      color: inherit
    }

    .prose :where(pre):not(:where([class~=not-prose],[class~=not-prose] *)) {
      color: var(--tw-prose-pre-code);
      background-color: var(--tw-prose-pre-bg);
      overflow-x: auto;
      font-weight: 400;
      font-size: .875em;
      line-height: 1.7142857;
      margin-top: 1.7142857em;
      margin-bottom: 1.7142857em;
      border-radius: .375rem;
      padding: .8571429em 1.1428571em
    }

    .prose :where(pre code):not(:where([class~=not-prose],[class~=not-prose] *)) {
      background-color: initial;
      border-width: 0;
      border-radius: 0;
      padding: 0;
      font-weight: inherit;
      color: inherit;
      font-size: inherit;
      font-family: inherit;
      line-height: inherit
    }

    .prose :where(pre code):not(:where([class~=not-prose],[class~=not-prose] *)):before {
      content: none
    }

    .prose :where(pre code):not(:where([class~=not-prose],[class~=not-prose] *)):after {
      content: none
    }

    .prose :where(table):not(:where([class~=not-prose],[class~=not-prose] *)) {
      width: 100%;
      table-layout: auto;
      text-align: left;
      margin-top: 2em;
      margin-bottom: 2em;
      font-size: .875em;
      line-height: 1.7142857
    }

    .prose :where(thead):not(:where([class~=not-prose],[class~=not-prose] *)) {
      border-bottom-width: 1px;
      border-bottom-color: var(--tw-prose-th-borders)
    }

    .prose :where(thead th):not(:where([class~=not-prose],[class~=not-prose] *)) {
      color: var(--tw-prose-headings);
      font-weight: 600;
      vertical-align: bottom;
      padding-right: .5714286em;
      padding-bottom: .5714286em;
      padding-left: .5714286em
    }

    .prose :where(tbody tr):not(:where([class~=not-prose],[class~=not-prose] *)) {
      border-bottom-width: 1px;
      border-bottom-color: var(--tw-prose-td-borders)
    }

    .prose :where(tbody tr:last-child):not(:where([class~=not-prose],[class~=not-prose] *)) {
      border-bottom-width: 0
    }

    .prose :where(tbody td):not(:where([class~=not-prose],[class~=not-prose] *)) {
      vertical-align: initial
    }

    .prose :where(tfoot):not(:where([class~=not-prose],[class~=not-prose] *)) {
      border-top-width: 1px;
      border-top-color: var(--tw-prose-th-borders)
    }

    .prose :where(tfoot td):not(:where([class~=not-prose],[class~=not-prose] *)) {
      vertical-align: top
    }

    .prose :where(figure>*):not(:where([class~=not-prose],[class~=not-prose] *)) {
      margin-top: 0;
      margin-bottom: 0
    }

    .prose :where(figcaption):not(:where([class~=not-prose],[class~=not-prose] *)) {
      color: var(--tw-prose-captions);
      font-size: .875em;
      line-height: 1.4285714;
      margin-top: .8571429em
    }

    .prose {
      --tw-prose-body: rgb(var(--color-neutral-700)/1);
      --tw-prose-headings: rgb(var(--color-neutral-800)/1);
      --tw-prose-lead: rgb(var(--color-neutral-500)/1);
      --tw-prose-links: rgb(var(--color-primary-600)/1);
      --tw-prose-bold: rgb(var(--color-neutral-900)/1);
      --tw-prose-counters: rgb(var(--color-neutral-800)/1);
      --tw-prose-bullets: rgb(var(--color-neutral-500)/1);
      --tw-prose-hr: rgb(var(--color-neutral-200)/1);
      --tw-prose-quotes: rgb(var(--color-neutral-700)/1);
      --tw-prose-quote-borders: rgb(var(--color-primary-200)/1);
      --tw-prose-captions: rgb(var(--color-neutral-500)/1);
      --tw-prose-kbd: #111827;
      --tw-prose-kbd-shadows: 17 24 39;
      --tw-prose-code: rgb(var(--color-secondary-700)/1);
      --tw-prose-pre-code: rgb(var(--color-neutral-700)/1);
      --tw-prose-pre-bg: rgb(var(--color-neutral-50)/1);
      --tw-prose-th-borders: rgb(var(--color-neutral-500)/1);
      --tw-prose-td-borders: rgb(var(--color-neutral-300)/1);
      --tw-prose-invert-body: rgb(var(--color-neutral-300)/1);
      --tw-prose-invert-headings: rgb(var(--color-neutral-50)/1);
      --tw-prose-invert-lead: rgb(var(--color-neutral-500)/1);
      --tw-prose-invert-links: rgb(var(--color-primary-400)/1);
      --tw-prose-invert-bold: rgb(var(--color-neutral)/1);
      --tw-prose-invert-counters: rgb(var(--color-neutral-400)/1);
      --tw-prose-invert-bullets: rgb(var(--color-neutral-600)/1);
      --tw-prose-invert-hr: rgb(var(--color-neutral-500)/1);
      --tw-prose-invert-quotes: rgb(var(--color-neutral-200)/1);
      --tw-prose-invert-quote-borders: rgb(var(--color-primary-900)/1);
      --tw-prose-invert-captions: rgb(var(--color-neutral-400)/1);
      --tw-prose-invert-kbd: #fff;
      --tw-prose-invert-kbd-shadows: 255 255 255;
      --tw-prose-invert-code: rgb(var(--color-secondary-400)/1);
      --tw-prose-invert-pre-code: rgb(var(--color-neutral-200)/1);
      --tw-prose-invert-pre-bg: rgb(var(--color-neutral-700)/1);
      --tw-prose-invert-th-borders: rgb(var(--color-neutral-500)/1);
      --tw-prose-invert-td-borders: rgb(var(--color-neutral-700)/1);
      font-size: 1rem;
      line-height: 1.75
    }

    .prose :where(picture>img):not(:where([class~=not-prose],[class~=not-prose] *)) {
      margin-top: 0;
      margin-bottom: 0
    }

    .prose :where(video):not(:where([class~=not-prose],[class~=not-prose] *)) {
      margin-top: 2em;
      margin-bottom: 2em
    }

    .prose :where(li):not(:where([class~=not-prose],[class~=not-prose] *)) {
      margin-top: .5em;
      margin-bottom: .5em
    }

    .prose :where(ol>li):not(:where([class~=not-prose],[class~=not-prose] *)) {
      padding-left: .375em
    }

    .prose :where(ul>li):not(:where([class~=not-prose],[class~=not-prose] *)) {
      padding-left: .375em
    }

    .prose :where(.prose>ul>li p):not(:where([class~=not-prose],[class~=not-prose] *)) {
      margin-top: .75em;
      margin-bottom: .75em
    }

    .prose :where(.prose>ul>li>:first-child):not(:where([class~=not-prose],[class~=not-prose] *)) {
      margin-top: 1.25em
    }

    .prose :where(.prose>ul>li>:last-child):not(:where([class~=not-prose],[class~=not-prose] *)) {
      margin-bottom: 1.25em
    }

    .prose :where(.prose>ol>li>:first-child):not(:where([class~=not-prose],[class~=not-prose] *)) {
      margin-top: 1.25em
    }

    .prose :where(.prose>ol>li>:last-child):not(:where([class~=not-prose],[class~=not-prose] *)) {
      margin-bottom: 1.25em
    }

    .prose :where(ul ul,ul ol,ol ul,ol ol):not(:where([class~=not-prose],[class~=not-prose] *)) {
      margin-top: .75em;
      margin-bottom: .75em
    }

    .prose :where(dl):not(:where([class~=not-prose],[class~=not-prose] *)) {
      margin-top: 1.25em;
      margin-bottom: 1.25em
    }

    .prose :where(dd):not(:where([class~=not-prose],[class~=not-prose] *)) {
      margin-top: .5em;
      padding-left: 1.625em
    }

    .prose :where(hr+*):not(:where([class~=not-prose],[class~=not-prose] *)) {
      margin-top: 0
    }

    .prose :where(h2+*):not(:where([class~=not-prose],[class~=not-prose] *)) {
      margin-top: 0
    }

    .prose :where(h3+*):not(:where([class~=not-prose],[class~=not-prose] *)) {
      margin-top: 0
    }

    .prose :where(h4+*):not(:where([class~=not-prose],[class~=not-prose] *)) {
      margin-top: 0
    }

    .prose :where(thead th:first-child):not(:where([class~=not-prose],[class~=not-prose] *)) {
      padding-left: 0
    }

    .prose :where(thead th:last-child):not(:where([class~=not-prose],[class~=not-prose] *)) {
      padding-right: 0
    }

    .prose :where(tbody td,tfoot td):not(:where([class~=not-prose],[class~=not-prose] *)) {
      padding: .5714286em
    }

    .prose :where(tbody td:first-child,tfoot td:first-child):not(:where([class~=not-prose],[class~=not-prose] *)) {
      padding-left: 0
    }

    .prose :where(tbody td:last-child,tfoot td:last-child):not(:where([class~=not-prose],[class~=not-prose] *)) {
      padding-right: 0
    }

    .prose :where(figure):not(:where([class~=not-prose],[class~=not-prose] *)) {
      margin-top: 2em;
      margin-bottom: 2em
    }

    .prose :where(.prose>:first-child):not(:where([class~=not-prose],[class~=not-prose] *)) {
      margin-top: 0
    }

    .prose :where(.prose>:last-child):not(:where([class~=not-prose],[class~=not-prose] *)) {
      margin-bottom: 0
    }

    .prose :where(mark):not(:where([class~=not-prose],[class~=not-prose] *)) {
      color: rgb(var(--color-neutral-100)/1);
      background-color: rgb(var(--color-primary-600)/1);
      padding: .1rem .2rem;
      border-radius: .25rem
    }

    .prose-slate {
      --tw-prose-body: #334155;
      --tw-prose-headings: #0f172a;
      --tw-prose-lead: #475569;
      --tw-prose-links: #0f172a;
      --tw-prose-bold: #0f172a;
      --tw-prose-counters: #64748b;
      --tw-prose-bullets: #cbd5e1;
      --tw-prose-hr: #e2e8f0;
      --tw-prose-quotes: #0f172a;
      --tw-prose-quote-borders: #e2e8f0;
      --tw-prose-captions: #64748b;
      --tw-prose-kbd: #0f172a;
      --tw-prose-kbd-shadows: 15 23 42;
      --tw-prose-code: #0f172a;
      --tw-prose-pre-code: #e2e8f0;
      --tw-prose-pre-bg: #1e293b;
      --tw-prose-th-borders: #cbd5e1;
      --tw-prose-td-borders: #e2e8f0;
      --tw-prose-invert-body: #cbd5e1;
      --tw-prose-invert-headings: #fff;
      --tw-prose-invert-lead: #94a3b8;
      --tw-prose-invert-links: #fff;
      --tw-prose-invert-bold: #fff;
      --tw-prose-invert-counters: #94a3b8;
      --tw-prose-invert-bullets: #475569;
      --tw-prose-invert-hr: #334155;
      --tw-prose-invert-quotes: #f1f5f9;
      --tw-prose-invert-quote-borders: #334155;
      --tw-prose-invert-captions: #94a3b8;
      --tw-prose-invert-kbd: #fff;
      --tw-prose-invert-kbd-shadows: 255 255 255;
      --tw-prose-invert-code: #fff;
      --tw-prose-invert-pre-code: #cbd5e1;
      --tw-prose-invert-pre-bg: #00000080;
      --tw-prose-invert-th-borders: #475569;
      --tw-prose-invert-td-borders: #334155
    }

    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0,0,0,0);
      white-space: nowrap;
      border-width: 0
    }

    .\!visible {
      visibility: visible!important
    }

    .fixed {
      position: fixed
    }

    .absolute {
      position: absolute
    }

    .relative {
      position: relative
    }

    .sticky {
      position: sticky
    }

    .inset-0 {
      inset: 0
    }

    .-inset-x-4 {
      left: -1rem;
      right: -1rem
    }

    .-inset-y-6 {
      top: -1.5rem;
      bottom: -1.5rem
    }

    .-start-3 {
      inset-inline-start: -.75rem
    }

    .bottom-0 {
      bottom: 0
    }

    .bottom-6 {
      bottom: 1.5rem
    }

    .left-0 {
      left: 0
    }

    .left-1\/2 {
      left: 50%
    }

    .right-0 {
      right: 0
    }

    .right-4 {
      right: 1rem
    }

    .top-0 {
      top: 0
    }

    .top-16 {
      top: 4rem
    }

    .isolate {
      isolation: isolate
    }

    .z-0 {
      z-index: 0
    }

    .z-10 {
      z-index: 10
    }

    .z-20 {
      z-index: 20
    }

    .z-30 {
      z-index: 30
    }

    .order-1 {
      -webkit-box-ordinal-group: 2;
      -ms-flex-order: 1;
      order: 1
    }

    .order-3 {
      -webkit-box-ordinal-group: 4;
      -ms-flex-order: 3;
      order: 3
    }

    .order-first {
      -webkit-box-ordinal-group: -9998;
      -ms-flex-order: -9999;
      order: -9999
    }

    .order-last {
      -webkit-box-ordinal-group: 10000;
      -ms-flex-order: 9999;
      order: 9999
    }

    .m-0 {
      margin: 0
    }

    .m-1 {
      margin: .25rem
    }

    .m-3 {
      margin: .75rem
    }

    .-mx-4 {
      margin-left: -1rem;
      margin-right: -1rem
    }

    .-my-2 {
      margin-top: -.5rem;
      margin-bottom: -.5rem
    }

    .-my-2\.5 {
      margin-top: -.625rem;
      margin-bottom: -.625rem
    }

    .mx-1 {
      margin-left: .25rem;
      margin-right: .25rem
    }

    .mx-auto {
      margin-left: auto;
      margin-right: auto
    }

    .my-1 {
      margin-top: .25rem;
      margin-bottom: .25rem
    }

    .my-10 {
      margin-top: 2.5rem;
      margin-bottom: 2.5rem
    }

    .my-2 {
      margin-top: .5rem;
      margin-bottom: .5rem
    }

    .my-4 {
      margin-top: 1rem;
      margin-bottom: 1rem
    }

    .my-5 {
      margin-top: 1.25rem;
      margin-bottom: 1.25rem
    }

    .my-6 {
      margin-top: 1.5rem;
      margin-bottom: 1.5rem
    }

    .\!mb-4 {
      margin-bottom: 1rem!important
    }

    .-ml-1 {
      margin-left: -.25rem
    }

    .-ml-10 {
      margin-left: -2.5rem
    }

    .-mr-1 {
      margin-right: -.25rem
    }

    .-mr-4 {
      margin-right: -1rem
    }

    .-mt-\[105px\] {
      margin-top: -105px
    }

    .mb-0 {
      margin-bottom: 0
    }

    .mb-1 {
      margin-bottom: .25rem
    }

    .mb-10 {
      margin-bottom: 2.5rem
    }

    .mb-12 {
      margin-bottom: 3rem
    }

    .mb-16 {
      margin-bottom: 4rem
    }

    .mb-2 {
      margin-bottom: .5rem
    }

    .mb-3 {
      margin-bottom: .75rem
    }

    .mb-4 {
      margin-bottom: 1rem
    }

    .mb-5 {
      margin-bottom: 1.25rem
    }

    .mb-6 {
      margin-bottom: 1.5rem
    }

    .mb-8 {
      margin-bottom: 2rem
    }

    .me-2 {
      -webkit-margin-end: .5rem;
      margin-inline-end:.5rem}

    .me-2\.5 {
      -webkit-margin-end: .625rem;
      margin-inline-end:.625rem}

    .ml-1 {
      margin-left: .25rem
    }

    .ml-2 {
      margin-left: .5rem
    }

    .ml-6 {
      margin-left: 1.5rem
    }

    .ml-auto {
      margin-left: auto
    }

    .mr-1 {
      margin-right: .25rem
    }

    .mr-2 {
      margin-right: .5rem
    }

    .mr-3 {
      margin-right: .75rem
    }

    .mr-4 {
      margin-right: 1rem
    }

    .mr-5 {
      margin-right: 1.25rem
    }

    .mr-6 {
      margin-right: 1.5rem
    }

    .mr-auto {
      margin-right: auto
    }

    .ms-2 {
      -webkit-margin-start: .5rem;
      margin-inline-start:.5rem}

    .ms-2\.5 {
      -webkit-margin-start: .625rem;
      margin-inline-start:.625rem}

    .ms-3 {
      -webkit-margin-start: .75rem;
      margin-inline-start:.75rem}

    .ms-6 {
      -webkit-margin-start: 1.5rem;
      margin-inline-start:1.5rem}

    .mt-0 {
      margin-top: 0
    }

    .mt-0\.5 {
      margin-top: .125rem
    }

    .mt-1 {
      margin-top: .25rem
    }

    .mt-1\.5 {
      margin-top: .375rem
    }

    .mt-10 {
      margin-top: 2.5rem
    }

    .mt-12 {
      margin-top: 3rem
    }

    .mt-14 {
      margin-top: 3.5rem
    }

    .mt-16 {
      margin-top: 4rem
    }

    .mt-2 {
      margin-top: .5rem
    }

    .mt-20 {
      margin-top: 5rem
    }

    .mt-24 {
      margin-top: 6rem
    }

    .mt-3 {
      margin-top: .75rem
    }

    .mt-4 {
      margin-top: 1rem
    }

    .mt-5 {
      margin-top: 1.25rem
    }

    .mt-6 {
      margin-top: 1.5rem
    }

    .mt-8 {
      margin-top: 2rem
    }

    .mt-\[-0\.3rem\] {
      margin-top: -.3rem
    }

    .mt-\[0\.1rem\] {
      margin-top: .1rem
    }

    .line-clamp-2 {
      -webkit-line-clamp: 2
    }

    .line-clamp-2,.line-clamp-3 {
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical
    }

    .line-clamp-3 {
      -webkit-line-clamp: 3
    }

    .block {
      display: block
    }

    .inline-block {
      display: inline-block
    }

    .inline {
      display: inline
    }

    .flex {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex
    }

    .inline-flex {
      display: -webkit-inline-box;
      display: -ms-inline-flexbox;
      display: inline-flex
    }

    .table {
      display: table
    }

    .table-caption {
      display: table-caption
    }

    .grid {
      display: grid
    }

    .contents {
      display: contents
    }

    .hidden {
      display: none
    }

    .aspect-square {
      aspect-ratio: 1/1
    }

    .aspect-video {
      aspect-ratio: 16/9
    }

    .h-0 {
      height: 0
    }

    .h-10 {
      height: 2.5rem
    }

    .h-12 {
      height: 3rem
    }

    .h-16 {
      height: 4rem
    }

    .h-2\/4 {
      height: 50%
    }

    .h-24 {
      height: 6rem
    }

    .h-28 {
      height: 7rem
    }

    .h-3 {
      height: .75rem
    }

    .h-3\.5 {
      height: .875rem
    }

    .h-4 {
      height: 1rem
    }

    .h-48 {
      height: 12rem
    }

    .h-5 {
      height: 1.25rem
    }

    .h-6 {
      height: 1.5rem
    }

    .h-7 {
      height: 1.75rem
    }

    .h-\[100px\] {
      height: 100px
    }

    .h-\[150px\] {
      height: 150px
    }

    .h-\[17\.5rem\] {
      height: 17.5rem
    }

    .h-\[18px\] {
      height: 18px
    }

    .h-\[24px\] {
      height: 24px
    }

    .h-auto {
      height: auto
    }

    .h-full {
      height: 100%
    }

    .max-h-64 {
      max-height: 16rem
    }

    .max-h-\[calc\(100vh-var\(--navbar-height\)-env\(safe-area-inset-bottom\)\)\] {
      max-height: calc(100vh - var(--navbar-height) - env(safe-area-inset-bottom))
    }

    .min-h-\[calc\(100vh-var\(--navbar-height\)\)\] {
      min-height: calc(100vh - var(--navbar-height))
    }

    .min-h-screen {
      min-height: 100vh
    }

    .w-1\/2 {
      width: 50%
    }

    .w-10 {
      width: 2.5rem
    }

    .w-12 {
      width: 3rem
    }

    .w-24 {
      width: 6rem
    }

    .w-28 {
      width: 7rem
    }

    .w-3 {
      width: .75rem
    }

    .w-3\.5 {
      width: .875rem
    }

    .w-4 {
      width: 1rem
    }

    .w-5 {
      width: 1.25rem
    }

    .w-6 {
      width: 1.5rem
    }

    .w-64 {
      width: 16rem
    }

    .w-7 {
      width: 1.75rem
    }

    .w-\[100px\] {
      width: 100px
    }

    .w-\[150px\] {
      width: 150px
    }

    .w-\[24px\] {
      width: 24px
    }

    .w-fit {
      width: -webkit-fit-content;
      width: -moz-fit-content;
      width: fit-content
    }

    .w-full {
      width: 100%
    }

    .min-w-0 {
      min-width: 0
    }

    .min-w-\[100px\] {
      min-width: 100px
    }

    .min-w-\[18px\] {
      min-width: 18px
    }

    .min-w-\[24px\] {
      min-width: 24px
    }

    .max-w-2xl {
      max-width: 42rem
    }

    .max-w-3xl {
      max-width: 48rem
    }

    .max-w-5xl {
      max-width: 64rem
    }

    .max-w-6xl {
      max-width: 72rem
    }

    .max-w-7xl {
      max-width: 80rem
    }

    .max-w-\[500px\] {
      max-width: 500px
    }

    .max-w-\[65ch\] {
      max-width: 65ch
    }

    .max-w-max {
      max-width: -webkit-max-content;
      max-width: -moz-max-content;
      max-width: max-content
    }

    .max-w-none {
      max-width: none
    }

    .max-w-prose {
      max-width: 65ch
    }

    .max-w-screen-lg {
      max-width: 1024px
    }

    .max-w-screen-md {
      max-width: 768px
    }

    .max-w-screen-xl {
      max-width: 1280px
    }

    .max-w-xs {
      max-width: 20rem
    }

    .flex-auto {
      -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
      flex: 1 1 auto
    }

    .flex-none {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none
    }

    .flex-shrink-0,.shrink-0 {
      -ms-flex-negative: 0;
      flex-shrink: 0
    }

    .flex-grow,.grow {
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1
    }

    .basis-\[100\%\] {
      -ms-flex-preferred-size: 100%;
      flex-basis: 100%
    }

    .table-auto {
      table-layout: auto
    }

    .origin-center {
      -webkit-transform-origin: center;
      transform-origin: center
    }

    .translate-x-\[-10\%\] {
      --tw-translate-x: -10%
    }

    .translate-x-\[-10\%\],.translate-y-\[-45\%\] {
      -webkit-transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
    }

    .translate-y-\[-45\%\] {
      --tw-translate-y: -45%
    }

    .-rotate-90 {
      --tw-rotate: -90deg
    }

    .-rotate-90,.rotate-3 {
      -webkit-transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
    }

    .rotate-3 {
      --tw-rotate: 3deg
    }

    .scale-95 {
      --tw-scale-x: .95;
      --tw-scale-y: .95
    }

    .scale-95,.transform {
      -webkit-transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
    }

    @-webkit-keyframes spin {
      to {
        -webkit-transform: rotate(1turn);
        transform: rotate(1turn)
      }
    }

    @keyframes spin {
      to {
        -webkit-transform: rotate(1turn);
        transform: rotate(1turn)
      }
    }

    .animate-spin {
      -webkit-animation: spin 1s linear infinite;
      animation: spin 1s linear infinite
    }

    .cursor-default {
      cursor: default
    }

    .cursor-pointer {
      cursor: pointer
    }

    .resize {
      resize: both
    }

    .scroll-my-6 {
      scroll-margin-top: 1.5rem;
      scroll-margin-bottom: 1.5rem
    }

    .scroll-py-6 {
      scroll-padding-top: 1.5rem;
      scroll-padding-bottom: 1.5rem
    }

    .list-inside {
      list-style-position: inside
    }

    .list-disc {
      list-style-type: disc
    }

    .grid-cols-1 {
      grid-template-columns: repeat(1,minmax(0,1fr))
    }

    .grid-cols-10 {
      grid-template-columns: repeat(10,minmax(0,1fr))
    }

    .grid-cols-11 {
      grid-template-columns: repeat(11,minmax(0,1fr))
    }

    .grid-cols-12 {
      grid-template-columns: repeat(12,minmax(0,1fr))
    }

    .grid-cols-2 {
      grid-template-columns: repeat(2,minmax(0,1fr))
    }

    .grid-cols-3 {
      grid-template-columns: repeat(3,minmax(0,1fr))
    }

    .grid-cols-4 {
      grid-template-columns: repeat(4,minmax(0,1fr))
    }

    .grid-cols-5 {
      grid-template-columns: repeat(5,minmax(0,1fr))
    }

    .grid-cols-6 {
      grid-template-columns: repeat(6,minmax(0,1fr))
    }

    .grid-cols-7 {
      grid-template-columns: repeat(7,minmax(0,1fr))
    }

    .grid-cols-8 {
      grid-template-columns: repeat(8,minmax(0,1fr))
    }

    .grid-cols-9 {
      grid-template-columns: repeat(9,minmax(0,1fr))
    }

    .grid-cols-none {
      grid-template-columns: none
    }

    .flex-row {
      -webkit-box-orient: horizontal;
      -ms-flex-direction: row;
      flex-direction: row
    }

    .flex-col,.flex-row {
      -webkit-box-direction: normal
    }

    .flex-col {
      -webkit-box-orient: vertical;
      -ms-flex-direction: column;
      flex-direction: column
    }

    .flex-col-reverse {
      -webkit-box-orient: vertical;
      -webkit-box-direction: reverse;
      -ms-flex-direction: column-reverse;
      flex-direction: column-reverse
    }

    .flex-wrap {
      -ms-flex-wrap: wrap;
      flex-wrap: wrap
    }

    .flex-nowrap {
      -ms-flex-wrap: nowrap;
      flex-wrap: nowrap
    }

    .place-content-center {
      place-content: center
    }

    .items-start {
      -webkit-box-align: start;
      -ms-flex-align: start;
      align-items: flex-start
    }

    .items-center {
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center
    }

    .items-baseline {
      -webkit-box-align: baseline;
      -ms-flex-align: baseline;
      align-items: baseline
    }

    .justify-center {
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center
    }

    .justify-between {
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between
    }

    .justify-around {
      -ms-flex-pack: distribute;
      justify-content: space-around
    }

    .justify-items-start {
      justify-items: start
    }

    .justify-items-center {
      justify-items: center
    }

    .gap-1 {
      gap: .25rem
    }

    .gap-10 {
      gap: 2.5rem
    }

    .gap-12 {
      gap: 3rem
    }

    .gap-2 {
      gap: .5rem
    }

    .gap-3 {
      gap: .75rem
    }

    .gap-4 {
      gap: 1rem
    }

    .gap-5 {
      gap: 1.25rem
    }

    .gap-6 {
      gap: 1.5rem
    }

    .gap-8 {
      gap: 2rem
    }

    .gap-x-1 {
      -webkit-column-gap: .25rem;
      -moz-column-gap: .25rem;
      column-gap: .25rem
    }

    .gap-x-1\.5 {
      -webkit-column-gap: .375rem;
      -moz-column-gap: .375rem;
      column-gap: .375rem
    }

    .gap-x-10 {
      -webkit-column-gap: 2.5rem;
      -moz-column-gap: 2.5rem;
      column-gap: 2.5rem
    }

    .gap-x-12 {
      -webkit-column-gap: 3rem;
      -moz-column-gap: 3rem;
      column-gap: 3rem
    }

    .gap-x-32 {
      -webkit-column-gap: 8rem;
      -moz-column-gap: 8rem;
      column-gap: 8rem
    }

    .gap-x-6 {
      -webkit-column-gap: 1.5rem;
      -moz-column-gap: 1.5rem;
      column-gap: 1.5rem
    }

    .gap-x-8 {
      -webkit-column-gap: 2rem;
      -moz-column-gap: 2rem;
      column-gap: 2rem
    }

    .gap-y-10 {
      row-gap: 2.5rem
    }

    .gap-y-12 {
      row-gap: 3rem
    }

    .gap-y-14 {
      row-gap: 3.5rem
    }

    .gap-y-16 {
      row-gap: 4rem
    }

    .gap-y-2 {
      row-gap: .5rem
    }

    .gap-y-6 {
      row-gap: 1.5rem
    }

    .gap-y-8 {
      row-gap: 2rem
    }

    .space-x-3>:not([hidden])~:not([hidden]) {
      --tw-space-x-reverse: 0;
      margin-right: calc(.75rem*var(--tw-space-x-reverse));
      margin-left: calc(.75rem*(1 - var(--tw-space-x-reverse)))
    }

    .space-y-1>:not([hidden])~:not([hidden]) {
      --tw-space-y-reverse: 0;
      margin-top: calc(.25rem*(1 - var(--tw-space-y-reverse)));
      margin-bottom: calc(.25rem*var(--tw-space-y-reverse))
    }

    .space-y-16>:not([hidden])~:not([hidden]) {
      --tw-space-y-reverse: 0;
      margin-top: calc(4rem*(1 - var(--tw-space-y-reverse)));
      margin-bottom: calc(4rem*var(--tw-space-y-reverse))
    }

    .space-y-2>:not([hidden])~:not([hidden]) {
      --tw-space-y-reverse: 0;
      margin-top: calc(.5rem*(1 - var(--tw-space-y-reverse)));
      margin-bottom: calc(.5rem*var(--tw-space-y-reverse))
    }

    .space-y-3>:not([hidden])~:not([hidden]) {
      --tw-space-y-reverse: 0;
      margin-top: calc(.75rem*(1 - var(--tw-space-y-reverse)));
      margin-bottom: calc(.75rem*var(--tw-space-y-reverse))
    }

    .space-y-6>:not([hidden])~:not([hidden]) {
      --tw-space-y-reverse: 0;
      margin-top: calc(1.5rem*(1 - var(--tw-space-y-reverse)));
      margin-bottom: calc(1.5rem*var(--tw-space-y-reverse))
    }

    .space-y-7>:not([hidden])~:not([hidden]) {
      --tw-space-y-reverse: 0;
      margin-top: calc(1.75rem*(1 - var(--tw-space-y-reverse)));
      margin-bottom: calc(1.75rem*var(--tw-space-y-reverse))
    }

    .space-y-8>:not([hidden])~:not([hidden]) {
      --tw-space-y-reverse: 0;
      margin-top: calc(2rem*(1 - var(--tw-space-y-reverse)));
      margin-bottom: calc(2rem*var(--tw-space-y-reverse))
    }

    .place-self-center {
      place-self: center
    }

    .overflow-auto {
      overflow: auto
    }

    .overflow-hidden {
      overflow: hidden
    }

    .overflow-y-auto {
      overflow-y: auto
    }

    .truncate {
      overflow: hidden;
      white-space: nowrap
    }

    .text-ellipsis,.truncate {
      text-overflow: ellipsis
    }

    .whitespace-nowrap {
      white-space: nowrap
    }

    .break-words {
      overflow-wrap: break-word
    }

    .rounded {
      border-radius: .25rem
    }

    .rounded-2xl {
      border-radius: 1rem
    }

    .rounded-3xl {
      border-radius: 1.5rem
    }

    .rounded-full {
      border-radius: 9999px
    }

    .rounded-lg {
      border-radius: .5rem
    }

    .rounded-md {
      border-radius: .375rem
    }

    .rounded-sm {
      border-radius: .125rem
    }

    .rounded-xl {
      border-radius: .75rem
    }

    .border {
      border-width: 1px
    }

    .border-0 {
      border-width: 0
    }

    .border-2 {
      border-width: 2px
    }

    .border-b {
      border-bottom-width: 1px
    }

    .border-s {
      border-inline-start-width:1px}

    .border-t {
      border-top-width: 1px
    }

    .border-dotted {
      border-style: dotted
    }

    .border-black {
      --tw-border-opacity: 1;
      border-color: rgb(0 0 0/var(--tw-border-opacity))
    }

    .border-current {
      border-color: currentColor
    }

    .border-gray-100 {
      --tw-border-opacity: 1;
      border-color: rgb(243 244 246/var(--tw-border-opacity))
    }

    .border-gray-200 {
      --tw-border-opacity: 1;
      border-color: rgb(229 231 235/var(--tw-border-opacity))
    }

    .border-gray-300 {
      --tw-border-opacity: 1;
      border-color: rgb(209 213 219/var(--tw-border-opacity))
    }

    .border-neutral-300 {
      --tw-border-opacity: 1;
      border-color: rgb(var(--color-neutral-300)/var(--tw-border-opacity))
    }

    .border-primary-300 {
      --tw-border-opacity: 1;
      border-color: rgb(var(--color-primary-300)/var(--tw-border-opacity))
    }

    .border-slate-100 {
      --tw-border-opacity: 1;
      border-color: rgb(241 245 249/var(--tw-border-opacity))
    }

    .border-transparent {
      border-color: #0000
    }

    .bg-\[\#EAEEF6\] {
      --tw-bg-opacity: 1;
      background-color: rgb(234 238 246/var(--tw-bg-opacity))
    }

    .bg-black {
      --tw-bg-opacity: 1;
      background-color: rgb(0 0 0/var(--tw-bg-opacity))
    }

    .bg-blue-100 {
      --tw-bg-opacity: 1;
      background-color: rgb(219 234 254/var(--tw-bg-opacity))
    }

    .bg-cyan-50 {
      --tw-bg-opacity: 1;
      background-color: rgb(236 254 255/var(--tw-bg-opacity))
    }

    .bg-gray-100 {
      --tw-bg-opacity: 1;
      background-color: rgb(243 244 246/var(--tw-bg-opacity))
    }

    .bg-gray-100\/0 {
      background-color: #f3f4f600
    }

    .bg-gray-100\/10 {
      background-color: #f3f4f61a
    }

    .bg-gray-100\/100 {
      background-color: #f3f4f6
    }

    .bg-gray-100\/20 {
      background-color: #f3f4f633
    }

    .bg-gray-100\/25 {
      background-color: #f3f4f640
    }

    .bg-gray-100\/30 {
      background-color: #f3f4f64d
    }

    .bg-gray-100\/40 {
      background-color: #f3f4f666
    }

    .bg-gray-100\/5 {
      background-color: #f3f4f60d
    }

    .bg-gray-100\/50 {
      background-color: #f3f4f680
    }

    .bg-gray-100\/60 {
      background-color: #f3f4f699
    }

    .bg-gray-100\/70 {
      background-color: #f3f4f6b3
    }

    .bg-gray-100\/75 {
      background-color: #f3f4f6bf
    }

    .bg-gray-100\/80 {
      background-color: #f3f4f6cc
    }

    .bg-gray-100\/90 {
      background-color: #f3f4f6e6
    }

    .bg-gray-100\/95 {
      background-color: #f3f4f6f2
    }

    .bg-gray-200 {
      --tw-bg-opacity: 1;
      background-color: rgb(229 231 235/var(--tw-bg-opacity))
    }

    .bg-gray-200\/0 {
      background-color: #e5e7eb00
    }

    .bg-gray-200\/10 {
      background-color: #e5e7eb1a
    }

    .bg-gray-200\/100 {
      background-color: #e5e7eb
    }

    .bg-gray-200\/20 {
      background-color: #e5e7eb33
    }

    .bg-gray-200\/25 {
      background-color: #e5e7eb40
    }

    .bg-gray-200\/30 {
      background-color: #e5e7eb4d
    }

    .bg-gray-200\/40 {
      background-color: #e5e7eb66
    }

    .bg-gray-200\/5 {
      background-color: #e5e7eb0d
    }

    .bg-gray-200\/50 {
      background-color: #e5e7eb80
    }

    .bg-gray-200\/60 {
      background-color: #e5e7eb99
    }

    .bg-gray-200\/70 {
      background-color: #e5e7ebb3
    }

    .bg-gray-200\/75 {
      background-color: #e5e7ebbf
    }

    .bg-gray-200\/80 {
      background-color: #e5e7ebcc
    }

    .bg-gray-200\/90 {
      background-color: #e5e7ebe6
    }

    .bg-gray-200\/95 {
      background-color: #e5e7ebf2
    }

    .bg-gray-300 {
      --tw-bg-opacity: 1;
      background-color: rgb(209 213 219/var(--tw-bg-opacity))
    }

    .bg-gray-300\/0 {
      background-color: #d1d5db00
    }

    .bg-gray-300\/10 {
      background-color: #d1d5db1a
    }

    .bg-gray-300\/100 {
      background-color: #d1d5db
    }

    .bg-gray-300\/20 {
      background-color: #d1d5db33
    }

    .bg-gray-300\/25 {
      background-color: #d1d5db40
    }

    .bg-gray-300\/30 {
      background-color: #d1d5db4d
    }

    .bg-gray-300\/40 {
      background-color: #d1d5db66
    }

    .bg-gray-300\/5 {
      background-color: #d1d5db0d
    }

    .bg-gray-300\/50 {
      background-color: #d1d5db80
    }

    .bg-gray-300\/60 {
      background-color: #d1d5db99
    }

    .bg-gray-300\/70 {
      background-color: #d1d5dbb3
    }

    .bg-gray-300\/75 {
      background-color: #d1d5dbbf
    }

    .bg-gray-300\/80 {
      background-color: #d1d5dbcc
    }

    .bg-gray-300\/90 {
      background-color: #d1d5dbe6
    }

    .bg-gray-300\/95 {
      background-color: #d1d5dbf2
    }

    .bg-gray-400 {
      --tw-bg-opacity: 1;
      background-color: rgb(156 163 175/var(--tw-bg-opacity))
    }

    .bg-gray-400\/0 {
      background-color: #9ca3af00
    }

    .bg-gray-400\/10 {
      background-color: #9ca3af1a
    }

    .bg-gray-400\/100 {
      background-color: #9ca3af
    }

    .bg-gray-400\/20 {
      background-color: #9ca3af33
    }

    .bg-gray-400\/25 {
      background-color: #9ca3af40
    }

    .bg-gray-400\/30 {
      background-color: #9ca3af4d
    }

    .bg-gray-400\/40 {
      background-color: #9ca3af66
    }

    .bg-gray-400\/5 {
      background-color: #9ca3af0d
    }

    .bg-gray-400\/50 {
      background-color: #9ca3af80
    }

    .bg-gray-400\/60 {
      background-color: #9ca3af99
    }

    .bg-gray-400\/70 {
      background-color: #9ca3afb3
    }

    .bg-gray-400\/75 {
      background-color: #9ca3afbf
    }

    .bg-gray-400\/80 {
      background-color: #9ca3afcc
    }

    .bg-gray-400\/90 {
      background-color: #9ca3afe6
    }

    .bg-gray-400\/95 {
      background-color: #9ca3aff2
    }

    .bg-gray-50 {
      --tw-bg-opacity: 1;
      background-color: rgb(249 250 251/var(--tw-bg-opacity))
    }

    .bg-gray-50\/0 {
      background-color: #f9fafb00
    }

    .bg-gray-50\/10 {
      background-color: #f9fafb1a
    }

    .bg-gray-50\/100 {
      background-color: #f9fafb
    }

    .bg-gray-50\/20 {
      background-color: #f9fafb33
    }

    .bg-gray-50\/25 {
      background-color: #f9fafb40
    }

    .bg-gray-50\/30 {
      background-color: #f9fafb4d
    }

    .bg-gray-50\/40 {
      background-color: #f9fafb66
    }

    .bg-gray-50\/5 {
      background-color: #f9fafb0d
    }

    .bg-gray-50\/50 {
      background-color: #f9fafb80
    }

    .bg-gray-50\/60 {
      background-color: #f9fafb99
    }

    .bg-gray-50\/70 {
      background-color: #f9fafbb3
    }

    .bg-gray-50\/75 {
      background-color: #f9fafbbf
    }

    .bg-gray-50\/80 {
      background-color: #f9fafbcc
    }

    .bg-gray-50\/90 {
      background-color: #f9fafbe6
    }

    .bg-gray-50\/95 {
      background-color: #f9fafbf2
    }

    .bg-gray-500 {
      --tw-bg-opacity: 1;
      background-color: rgb(107 114 128/var(--tw-bg-opacity))
    }

    .bg-gray-500\/0 {
      background-color: #6b728000
    }

    .bg-gray-500\/10 {
      background-color: #6b72801a
    }

    .bg-gray-500\/100 {
      background-color: #6b7280
    }

    .bg-gray-500\/20 {
      background-color: #6b728033
    }

    .bg-gray-500\/25 {
      background-color: #6b728040
    }

    .bg-gray-500\/30 {
      background-color: #6b72804d
    }

    .bg-gray-500\/40 {
      background-color: #6b728066
    }

    .bg-gray-500\/5 {
      background-color: #6b72800d
    }

    .bg-gray-500\/50 {
      background-color: #6b728080
    }

    .bg-gray-500\/60 {
      background-color: #6b728099
    }

    .bg-gray-500\/70 {
      background-color: #6b7280b3
    }

    .bg-gray-500\/75 {
      background-color: #6b7280bf
    }

    .bg-gray-500\/80 {
      background-color: #6b7280cc
    }

    .bg-gray-500\/90 {
      background-color: #6b7280e6
    }

    .bg-gray-500\/95 {
      background-color: #6b7280f2
    }

    .bg-gray-600 {
      --tw-bg-opacity: 1;
      background-color: rgb(75 85 99/var(--tw-bg-opacity))
    }

    .bg-gray-600\/0 {
      background-color: #4b556300
    }

    .bg-gray-600\/10 {
      background-color: #4b55631a
    }

    .bg-gray-600\/100 {
      background-color: #4b5563
    }

    .bg-gray-600\/20 {
      background-color: #4b556333
    }

    .bg-gray-600\/25 {
      background-color: #4b556340
    }

    .bg-gray-600\/30 {
      background-color: #4b55634d
    }

    .bg-gray-600\/40 {
      background-color: #4b556366
    }

    .bg-gray-600\/5 {
      background-color: #4b55630d
    }

    .bg-gray-600\/50 {
      background-color: #4b556380
    }

    .bg-gray-600\/60 {
      background-color: #4b556399
    }

    .bg-gray-600\/70 {
      background-color: #4b5563b3
    }

    .bg-gray-600\/75 {
      background-color: #4b5563bf
    }

    .bg-gray-600\/80 {
      background-color: #4b5563cc
    }

    .bg-gray-600\/90 {
      background-color: #4b5563e6
    }

    .bg-gray-600\/95 {
      background-color: #4b5563f2
    }

    .bg-gray-700 {
      --tw-bg-opacity: 1;
      background-color: rgb(55 65 81/var(--tw-bg-opacity))
    }

    .bg-gray-700\/0 {
      background-color: #37415100
    }

    .bg-gray-700\/10 {
      background-color: #3741511a
    }

    .bg-gray-700\/100 {
      background-color: #374151
    }

    .bg-gray-700\/20 {
      background-color: #37415133
    }

    .bg-gray-700\/25 {
      background-color: #37415140
    }

    .bg-gray-700\/30 {
      background-color: #3741514d
    }

    .bg-gray-700\/40 {
      background-color: #37415166
    }

    .bg-gray-700\/5 {
      background-color: #3741510d
    }

    .bg-gray-700\/50 {
      background-color: #37415180
    }

    .bg-gray-700\/60 {
      background-color: #37415199
    }

    .bg-gray-700\/70 {
      background-color: #374151b3
    }

    .bg-gray-700\/75 {
      background-color: #374151bf
    }

    .bg-gray-700\/80 {
      background-color: #374151cc
    }

    .bg-gray-700\/90 {
      background-color: #374151e6
    }

    .bg-gray-700\/95 {
      background-color: #374151f2
    }

    .bg-gray-800 {
      --tw-bg-opacity: 1;
      background-color: rgb(31 41 55/var(--tw-bg-opacity))
    }

    .bg-gray-800\/0 {
      background-color: #1f293700
    }

    .bg-gray-800\/10 {
      background-color: #1f29371a
    }

    .bg-gray-800\/100 {
      background-color: #1f2937
    }

    .bg-gray-800\/20 {
      background-color: #1f293733
    }

    .bg-gray-800\/25 {
      background-color: #1f293740
    }

    .bg-gray-800\/30 {
      background-color: #1f29374d
    }

    .bg-gray-800\/40 {
      background-color: #1f293766
    }

    .bg-gray-800\/5 {
      background-color: #1f29370d
    }

    .bg-gray-800\/50 {
      background-color: #1f293780
    }

    .bg-gray-800\/60 {
      background-color: #1f293799
    }

    .bg-gray-800\/70 {
      background-color: #1f2937b3
    }

    .bg-gray-800\/75 {
      background-color: #1f2937bf
    }

    .bg-gray-800\/80 {
      background-color: #1f2937cc
    }

    .bg-gray-800\/90 {
      background-color: #1f2937e6
    }

    .bg-gray-800\/95 {
      background-color: #1f2937f2
    }

    .bg-gray-900 {
      --tw-bg-opacity: 1;
      background-color: rgb(17 24 39/var(--tw-bg-opacity))
    }

    .bg-gray-900\/0 {
      background-color: #11182700
    }

    .bg-gray-900\/10 {
      background-color: #1118271a
    }

    .bg-gray-900\/100 {
      background-color: #111827
    }

    .bg-gray-900\/20 {
      background-color: #11182733
    }

    .bg-gray-900\/25 {
      background-color: #11182740
    }

    .bg-gray-900\/30 {
      background-color: #1118274d
    }

    .bg-gray-900\/40 {
      background-color: #11182766
    }

    .bg-gray-900\/5 {
      background-color: #1118270d
    }

    .bg-gray-900\/50 {
      background-color: #11182780
    }

    .bg-gray-900\/60 {
      background-color: #11182799
    }

    .bg-gray-900\/70 {
      background-color: #111827b3
    }

    .bg-gray-900\/75 {
      background-color: #111827bf
    }

    .bg-gray-900\/80 {
      background-color: #111827cc
    }

    .bg-gray-900\/90 {
      background-color: #111827e6
    }

    .bg-gray-900\/95 {
      background-color: #111827f2
    }

    .bg-gray-950 {
      --tw-bg-opacity: 1;
      background-color: rgb(3 7 18/var(--tw-bg-opacity))
    }

    .bg-gray-950\/0 {
      background-color: #03071200
    }

    .bg-gray-950\/10 {
      background-color: #0307121a
    }

    .bg-gray-950\/100 {
      background-color: #030712
    }

    .bg-gray-950\/20 {
      background-color: #03071233
    }

    .bg-gray-950\/25 {
      background-color: #03071240
    }

    .bg-gray-950\/30 {
      background-color: #0307124d
    }

    .bg-gray-950\/40 {
      background-color: #03071266
    }

    .bg-gray-950\/5 {
      background-color: #0307120d
    }

    .bg-gray-950\/50 {
      background-color: #03071280
    }

    .bg-gray-950\/60 {
      background-color: #03071299
    }

    .bg-gray-950\/70 {
      background-color: #030712b3
    }

    .bg-gray-950\/75 {
      background-color: #030712bf
    }

    .bg-gray-950\/80 {
      background-color: #030712cc
    }

    .bg-gray-950\/90 {
      background-color: #030712e6
    }

    .bg-gray-950\/95 {
      background-color: #030712f2
    }

    .bg-neutral-300 {
      --tw-bg-opacity: 1;
      background-color: rgb(var(--color-neutral-300)/var(--tw-bg-opacity))
    }

    .bg-neutral-50 {
      --tw-bg-opacity: 1;
      background-color: rgb(var(--color-neutral-50)/var(--tw-bg-opacity))
    }

    .bg-primary-100 {
      --tw-bg-opacity: 1;
      background-color: rgb(var(--color-primary-100)/var(--tw-bg-opacity))
    }

    .bg-primary-100\/0 {
      background-color: rgb(var(--color-primary-100)/0)
    }

    .bg-primary-100\/10 {
      background-color: rgb(var(--color-primary-100)/.1)
    }

    .bg-primary-100\/100 {
      background-color: rgb(var(--color-primary-100)/1)
    }

    .bg-primary-100\/20 {
      background-color: rgb(var(--color-primary-100)/.2)
    }

    .bg-primary-100\/25 {
      background-color: rgb(var(--color-primary-100)/.25)
    }

    .bg-primary-100\/30 {
      background-color: rgb(var(--color-primary-100)/.3)
    }

    .bg-primary-100\/40 {
      background-color: rgb(var(--color-primary-100)/.4)
    }

    .bg-primary-100\/5 {
      background-color: rgb(var(--color-primary-100)/.05)
    }

    .bg-primary-100\/50 {
      background-color: rgb(var(--color-primary-100)/.5)
    }

    .bg-primary-100\/60 {
      background-color: rgb(var(--color-primary-100)/.6)
    }

    .bg-primary-100\/70 {
      background-color: rgb(var(--color-primary-100)/.7)
    }

    .bg-primary-100\/75 {
      background-color: rgb(var(--color-primary-100)/.75)
    }

    .bg-primary-100\/80 {
      background-color: rgb(var(--color-primary-100)/.8)
    }

    .bg-primary-100\/90 {
      background-color: rgb(var(--color-primary-100)/.9)
    }

    .bg-primary-100\/95 {
      background-color: rgb(var(--color-primary-100)/.95)
    }

    .bg-primary-200 {
      --tw-bg-opacity: 1;
      background-color: rgb(var(--color-primary-200)/var(--tw-bg-opacity))
    }

    .bg-primary-200\/0 {
      background-color: rgb(var(--color-primary-200)/0)
    }

    .bg-primary-200\/10 {
      background-color: rgb(var(--color-primary-200)/.1)
    }

    .bg-primary-200\/100 {
      background-color: rgb(var(--color-primary-200)/1)
    }

    .bg-primary-200\/20 {
      background-color: rgb(var(--color-primary-200)/.2)
    }

    .bg-primary-200\/25 {
      background-color: rgb(var(--color-primary-200)/.25)
    }

    .bg-primary-200\/30 {
      background-color: rgb(var(--color-primary-200)/.3)
    }

    .bg-primary-200\/40 {
      background-color: rgb(var(--color-primary-200)/.4)
    }

    .bg-primary-200\/5 {
      background-color: rgb(var(--color-primary-200)/.05)
    }

    .bg-primary-200\/50 {
      background-color: rgb(var(--color-primary-200)/.5)
    }

    .bg-primary-200\/60 {
      background-color: rgb(var(--color-primary-200)/.6)
    }

    .bg-primary-200\/70 {
      background-color: rgb(var(--color-primary-200)/.7)
    }

    .bg-primary-200\/75 {
      background-color: rgb(var(--color-primary-200)/.75)
    }

    .bg-primary-200\/80 {
      background-color: rgb(var(--color-primary-200)/.8)
    }

    .bg-primary-200\/90 {
      background-color: rgb(var(--color-primary-200)/.9)
    }

    .bg-primary-200\/95 {
      background-color: rgb(var(--color-primary-200)/.95)
    }

    .bg-primary-300 {
      --tw-bg-opacity: 1;
      background-color: rgb(var(--color-primary-300)/var(--tw-bg-opacity))
    }

    .bg-primary-300\/0 {
      background-color: rgb(var(--color-primary-300)/0)
    }

    .bg-primary-300\/10 {
      background-color: rgb(var(--color-primary-300)/.1)
    }

    .bg-primary-300\/100 {
      background-color: rgb(var(--color-primary-300)/1)
    }

    .bg-primary-300\/20 {
      background-color: rgb(var(--color-primary-300)/.2)
    }

    .bg-primary-300\/25 {
      background-color: rgb(var(--color-primary-300)/.25)
    }

    .bg-primary-300\/30 {
      background-color: rgb(var(--color-primary-300)/.3)
    }

    .bg-primary-300\/40 {
      background-color: rgb(var(--color-primary-300)/.4)
    }

    .bg-primary-300\/5 {
      background-color: rgb(var(--color-primary-300)/.05)
    }

    .bg-primary-300\/50 {
      background-color: rgb(var(--color-primary-300)/.5)
    }

    .bg-primary-300\/60 {
      background-color: rgb(var(--color-primary-300)/.6)
    }

    .bg-primary-300\/70 {
      background-color: rgb(var(--color-primary-300)/.7)
    }

    .bg-primary-300\/75 {
      background-color: rgb(var(--color-primary-300)/.75)
    }

    .bg-primary-300\/80 {
      background-color: rgb(var(--color-primary-300)/.8)
    }

    .bg-primary-300\/90 {
      background-color: rgb(var(--color-primary-300)/.9)
    }

    .bg-primary-300\/95 {
      background-color: rgb(var(--color-primary-300)/.95)
    }

    .bg-primary-400 {
      --tw-bg-opacity: 1;
      background-color: rgb(var(--color-primary-400)/var(--tw-bg-opacity))
    }

    .bg-primary-400\/0 {
      background-color: rgb(var(--color-primary-400)/0)
    }

    .bg-primary-400\/10 {
      background-color: rgb(var(--color-primary-400)/.1)
    }

    .bg-primary-400\/100 {
      background-color: rgb(var(--color-primary-400)/1)
    }

    .bg-primary-400\/20 {
      background-color: rgb(var(--color-primary-400)/.2)
    }

    .bg-primary-400\/25 {
      background-color: rgb(var(--color-primary-400)/.25)
    }

    .bg-primary-400\/30 {
      background-color: rgb(var(--color-primary-400)/.3)
    }

    .bg-primary-400\/40 {
      background-color: rgb(var(--color-primary-400)/.4)
    }

    .bg-primary-400\/5 {
      background-color: rgb(var(--color-primary-400)/.05)
    }

    .bg-primary-400\/50 {
      background-color: rgb(var(--color-primary-400)/.5)
    }

    .bg-primary-400\/60 {
      background-color: rgb(var(--color-primary-400)/.6)
    }

    .bg-primary-400\/70 {
      background-color: rgb(var(--color-primary-400)/.7)
    }

    .bg-primary-400\/75 {
      background-color: rgb(var(--color-primary-400)/.75)
    }

    .bg-primary-400\/80 {
      background-color: rgb(var(--color-primary-400)/.8)
    }

    .bg-primary-400\/90 {
      background-color: rgb(var(--color-primary-400)/.9)
    }

    .bg-primary-400\/95 {
      background-color: rgb(var(--color-primary-400)/.95)
    }

    .bg-primary-50 {
      --tw-bg-opacity: 1;
      background-color: rgb(var(--color-primary-50)/var(--tw-bg-opacity))
    }

    .bg-primary-50\/0 {
      background-color: rgb(var(--color-primary-50)/0)
    }

    .bg-primary-50\/10 {
      background-color: rgb(var(--color-primary-50)/.1)
    }

    .bg-primary-50\/100 {
      background-color: rgb(var(--color-primary-50)/1)
    }

    .bg-primary-50\/20 {
      background-color: rgb(var(--color-primary-50)/.2)
    }

    .bg-primary-50\/25 {
      background-color: rgb(var(--color-primary-50)/.25)
    }

    .bg-primary-50\/30 {
      background-color: rgb(var(--color-primary-50)/.3)
    }

    .bg-primary-50\/40 {
      background-color: rgb(var(--color-primary-50)/.4)
    }

    .bg-primary-50\/5 {
      background-color: rgb(var(--color-primary-50)/.05)
    }

    .bg-primary-50\/50 {
      background-color: rgb(var(--color-primary-50)/.5)
    }

    .bg-primary-50\/60 {
      background-color: rgb(var(--color-primary-50)/.6)
    }

    .bg-primary-50\/70 {
      background-color: rgb(var(--color-primary-50)/.7)
    }

    .bg-primary-50\/75 {
      background-color: rgb(var(--color-primary-50)/.75)
    }

    .bg-primary-50\/80 {
      background-color: rgb(var(--color-primary-50)/.8)
    }

    .bg-primary-50\/90 {
      background-color: rgb(var(--color-primary-50)/.9)
    }

    .bg-primary-50\/95 {
      background-color: rgb(var(--color-primary-50)/.95)
    }

    .bg-primary-500 {
      --tw-bg-opacity: 1;
      background-color: rgb(var(--color-primary-500)/var(--tw-bg-opacity))
    }

    .bg-primary-500\/0 {
      background-color: rgb(var(--color-primary-500)/0)
    }

    .bg-primary-500\/10 {
      background-color: rgb(var(--color-primary-500)/.1)
    }

    .bg-primary-500\/100 {
      background-color: rgb(var(--color-primary-500)/1)
    }

    .bg-primary-500\/20 {
      background-color: rgb(var(--color-primary-500)/.2)
    }

    .bg-primary-500\/25 {
      background-color: rgb(var(--color-primary-500)/.25)
    }

    .bg-primary-500\/30 {
      background-color: rgb(var(--color-primary-500)/.3)
    }

    .bg-primary-500\/40 {
      background-color: rgb(var(--color-primary-500)/.4)
    }

    .bg-primary-500\/5 {
      background-color: rgb(var(--color-primary-500)/.05)
    }

    .bg-primary-500\/50 {
      background-color: rgb(var(--color-primary-500)/.5)
    }

    .bg-primary-500\/60 {
      background-color: rgb(var(--color-primary-500)/.6)
    }

    .bg-primary-500\/70 {
      background-color: rgb(var(--color-primary-500)/.7)
    }

    .bg-primary-500\/75 {
      background-color: rgb(var(--color-primary-500)/.75)
    }

    .bg-primary-500\/80 {
      background-color: rgb(var(--color-primary-500)/.8)
    }

    .bg-primary-500\/90 {
      background-color: rgb(var(--color-primary-500)/.9)
    }

    .bg-primary-500\/95 {
      background-color: rgb(var(--color-primary-500)/.95)
    }

    .bg-primary-600 {
      --tw-bg-opacity: 1;
      background-color: rgb(var(--color-primary-600)/var(--tw-bg-opacity))
    }

    .bg-primary-600\/0 {
      background-color: rgb(var(--color-primary-600)/0)
    }

    .bg-primary-600\/10 {
      background-color: rgb(var(--color-primary-600)/.1)
    }

    .bg-primary-600\/100 {
      background-color: rgb(var(--color-primary-600)/1)
    }

    .bg-primary-600\/20 {
      background-color: rgb(var(--color-primary-600)/.2)
    }

    .bg-primary-600\/25 {
      background-color: rgb(var(--color-primary-600)/.25)
    }

    .bg-primary-600\/30 {
      background-color: rgb(var(--color-primary-600)/.3)
    }

    .bg-primary-600\/40 {
      background-color: rgb(var(--color-primary-600)/.4)
    }

    .bg-primary-600\/5 {
      background-color: rgb(var(--color-primary-600)/.05)
    }

    .bg-primary-600\/50 {
      background-color: rgb(var(--color-primary-600)/.5)
    }

    .bg-primary-600\/60 {
      background-color: rgb(var(--color-primary-600)/.6)
    }

    .bg-primary-600\/70 {
      background-color: rgb(var(--color-primary-600)/.7)
    }

    .bg-primary-600\/75 {
      background-color: rgb(var(--color-primary-600)/.75)
    }

    .bg-primary-600\/80 {
      background-color: rgb(var(--color-primary-600)/.8)
    }

    .bg-primary-600\/90 {
      background-color: rgb(var(--color-primary-600)/.9)
    }

    .bg-primary-600\/95 {
      background-color: rgb(var(--color-primary-600)/.95)
    }

    .bg-primary-700 {
      --tw-bg-opacity: 1;
      background-color: rgb(var(--color-primary-700)/var(--tw-bg-opacity))
    }

    .bg-primary-700\/0 {
      background-color: rgb(var(--color-primary-700)/0)
    }

    .bg-primary-700\/10 {
      background-color: rgb(var(--color-primary-700)/.1)
    }

    .bg-primary-700\/100 {
      background-color: rgb(var(--color-primary-700)/1)
    }

    .bg-primary-700\/20 {
      background-color: rgb(var(--color-primary-700)/.2)
    }

    .bg-primary-700\/25 {
      background-color: rgb(var(--color-primary-700)/.25)
    }

    .bg-primary-700\/30 {
      background-color: rgb(var(--color-primary-700)/.3)
    }

    .bg-primary-700\/40 {
      background-color: rgb(var(--color-primary-700)/.4)
    }

    .bg-primary-700\/5 {
      background-color: rgb(var(--color-primary-700)/.05)
    }

    .bg-primary-700\/50 {
      background-color: rgb(var(--color-primary-700)/.5)
    }

    .bg-primary-700\/60 {
      background-color: rgb(var(--color-primary-700)/.6)
    }

    .bg-primary-700\/70 {
      background-color: rgb(var(--color-primary-700)/.7)
    }

    .bg-primary-700\/75 {
      background-color: rgb(var(--color-primary-700)/.75)
    }

    .bg-primary-700\/80 {
      background-color: rgb(var(--color-primary-700)/.8)
    }

    .bg-primary-700\/90 {
      background-color: rgb(var(--color-primary-700)/.9)
    }

    .bg-primary-700\/95 {
      background-color: rgb(var(--color-primary-700)/.95)
    }

    .bg-primary-800 {
      --tw-bg-opacity: 1;
      background-color: rgb(var(--color-primary-800)/var(--tw-bg-opacity))
    }

    .bg-primary-800\/0 {
      background-color: rgb(var(--color-primary-800)/0)
    }

    .bg-primary-800\/10 {
      background-color: rgb(var(--color-primary-800)/.1)
    }

    .bg-primary-800\/100 {
      background-color: rgb(var(--color-primary-800)/1)
    }

    .bg-primary-800\/20 {
      background-color: rgb(var(--color-primary-800)/.2)
    }

    .bg-primary-800\/25 {
      background-color: rgb(var(--color-primary-800)/.25)
    }

    .bg-primary-800\/30 {
      background-color: rgb(var(--color-primary-800)/.3)
    }

    .bg-primary-800\/40 {
      background-color: rgb(var(--color-primary-800)/.4)
    }

    .bg-primary-800\/5 {
      background-color: rgb(var(--color-primary-800)/.05)
    }

    .bg-primary-800\/50 {
      background-color: rgb(var(--color-primary-800)/.5)
    }

    .bg-primary-800\/60 {
      background-color: rgb(var(--color-primary-800)/.6)
    }

    .bg-primary-800\/70 {
      background-color: rgb(var(--color-primary-800)/.7)
    }

    .bg-primary-800\/75 {
      background-color: rgb(var(--color-primary-800)/.75)
    }

    .bg-primary-800\/80 {
      background-color: rgb(var(--color-primary-800)/.8)
    }

    .bg-primary-800\/90 {
      background-color: rgb(var(--color-primary-800)/.9)
    }

    .bg-primary-800\/95 {
      background-color: rgb(var(--color-primary-800)/.95)
    }

    .bg-primary-900 {
      --tw-bg-opacity: 1;
      background-color: rgb(var(--color-primary-900)/var(--tw-bg-opacity))
    }

    .bg-primary-900\/0 {
      background-color: rgb(var(--color-primary-900)/0)
    }

    .bg-primary-900\/10 {
      background-color: rgb(var(--color-primary-900)/.1)
    }

    .bg-primary-900\/100 {
      background-color: rgb(var(--color-primary-900)/1)
    }

    .bg-primary-900\/20 {
      background-color: rgb(var(--color-primary-900)/.2)
    }

    .bg-primary-900\/25 {
      background-color: rgb(var(--color-primary-900)/.25)
    }

    .bg-primary-900\/30 {
      background-color: rgb(var(--color-primary-900)/.3)
    }

    .bg-primary-900\/40 {
      background-color: rgb(var(--color-primary-900)/.4)
    }

    .bg-primary-900\/5 {
      background-color: rgb(var(--color-primary-900)/.05)
    }

    .bg-primary-900\/50 {
      background-color: rgb(var(--color-primary-900)/.5)
    }

    .bg-primary-900\/60 {
      background-color: rgb(var(--color-primary-900)/.6)
    }

    .bg-primary-900\/70 {
      background-color: rgb(var(--color-primary-900)/.7)
    }

    .bg-primary-900\/75 {
      background-color: rgb(var(--color-primary-900)/.75)
    }

    .bg-primary-900\/80 {
      background-color: rgb(var(--color-primary-900)/.8)
    }

    .bg-primary-900\/90 {
      background-color: rgb(var(--color-primary-900)/.9)
    }

    .bg-primary-900\/95 {
      background-color: rgb(var(--color-primary-900)/.95)
    }

    .bg-transparent {
      background-color: initial
    }

    .bg-white {
      --tw-bg-opacity: 1;
      background-color: rgb(255 255 255/var(--tw-bg-opacity))
    }

    .bg-white\/0 {
      background-color: #fff0
    }

    .bg-white\/10 {
      background-color: #ffffff1a
    }

    .bg-white\/100 {
      background-color: #fff
    }

    .bg-white\/20 {
      background-color: #fff3
    }

    .bg-white\/25 {
      background-color: #ffffff40
    }

    .bg-white\/30 {
      background-color: #ffffff4d
    }

    .bg-white\/40 {
      background-color: #fff6
    }

    .bg-white\/5 {
      background-color: #ffffff0d
    }

    .bg-white\/50 {
      background-color: #ffffff80
    }

    .bg-white\/60 {
      background-color: #fff9
    }

    .bg-white\/70 {
      background-color: #ffffffb3
    }

    .bg-white\/75 {
      background-color: #ffffffbf
    }

    .bg-white\/80 {
      background-color: #fffc
    }

    .bg-white\/90 {
      background-color: #ffffffe6
    }

    .bg-white\/95 {
      background-color: #fffffff2
    }

    .bg-yellow-100 {
      --tw-bg-opacity: 1;
      background-color: rgb(254 249 195/var(--tw-bg-opacity))
    }

    .bg-zinc-100 {
      --tw-bg-opacity: 1;
      background-color: rgb(244 244 245/var(--tw-bg-opacity))
    }

    .bg-zinc-50 {
      --tw-bg-opacity: 1;
      background-color: rgb(250 250 250/var(--tw-bg-opacity))
    }

    .bg-gradient-to-b {
      background-image: -webkit-gradient(linear,left top,left bottom,from(var(--tw-gradient-stops)));
      background-image: linear-gradient(to bottom,var(--tw-gradient-stops))
    }

    .bg-gradient-to-bl {
      background-image: -webkit-gradient(linear,right top,left bottom,from(var(--tw-gradient-stops)));
      background-image: linear-gradient(to bottom left,var(--tw-gradient-stops))
    }

    .bg-gradient-to-br {
      background-image: -webkit-gradient(linear,left top,right bottom,from(var(--tw-gradient-stops)));
      background-image: linear-gradient(to bottom right,var(--tw-gradient-stops))
    }

    .bg-gradient-to-l {
      background-image: -webkit-gradient(linear,right top,left top,from(var(--tw-gradient-stops)));
      background-image: linear-gradient(to left,var(--tw-gradient-stops))
    }

    .bg-gradient-to-r {
      background-image: -webkit-gradient(linear,left top,right top,from(var(--tw-gradient-stops)));
      background-image: linear-gradient(to right,var(--tw-gradient-stops))
    }

    .bg-gradient-to-t {
      background-image: -webkit-gradient(linear,left bottom,left top,from(var(--tw-gradient-stops)));
      background-image: linear-gradient(to top,var(--tw-gradient-stops))
    }

    .bg-gradient-to-tl {
      background-image: -webkit-gradient(linear,right bottom,left top,from(var(--tw-gradient-stops)));
      background-image: linear-gradient(to top left,var(--tw-gradient-stops))
    }

    .bg-gradient-to-tr {
      background-image: -webkit-gradient(linear,left bottom,right top,from(var(--tw-gradient-stops)));
      background-image: linear-gradient(to top right,var(--tw-gradient-stops))
    }

    .from-primary-100 {
      --tw-gradient-from: rgb(var(--color-primary-100)/1) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-100)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-100\/0 {
      --tw-gradient-from: rgb(var(--color-primary-100)/0) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-100)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-100\/10 {
      --tw-gradient-from: rgb(var(--color-primary-100)/0.1) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-100)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-100\/100 {
      --tw-gradient-from: rgb(var(--color-primary-100)/1) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-100)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-100\/20 {
      --tw-gradient-from: rgb(var(--color-primary-100)/0.2) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-100)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-100\/25 {
      --tw-gradient-from: rgb(var(--color-primary-100)/0.25) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-100)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-100\/30 {
      --tw-gradient-from: rgb(var(--color-primary-100)/0.3) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-100)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-100\/40 {
      --tw-gradient-from: rgb(var(--color-primary-100)/0.4) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-100)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-100\/5 {
      --tw-gradient-from: rgb(var(--color-primary-100)/0.05) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-100)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-100\/50 {
      --tw-gradient-from: rgb(var(--color-primary-100)/0.5) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-100)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-100\/60 {
      --tw-gradient-from: rgb(var(--color-primary-100)/0.6) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-100)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-100\/70 {
      --tw-gradient-from: rgb(var(--color-primary-100)/0.7) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-100)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-100\/75 {
      --tw-gradient-from: rgb(var(--color-primary-100)/0.75) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-100)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-100\/80 {
      --tw-gradient-from: rgb(var(--color-primary-100)/0.8) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-100)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-100\/90 {
      --tw-gradient-from: rgb(var(--color-primary-100)/0.9) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-100)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-100\/95 {
      --tw-gradient-from: rgb(var(--color-primary-100)/0.95) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-100)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-200 {
      --tw-gradient-from: rgb(var(--color-primary-200)/1) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-200)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-200\/0 {
      --tw-gradient-from: rgb(var(--color-primary-200)/0) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-200)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-200\/10 {
      --tw-gradient-from: rgb(var(--color-primary-200)/0.1) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-200)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-200\/100 {
      --tw-gradient-from: rgb(var(--color-primary-200)/1) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-200)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-200\/20 {
      --tw-gradient-from: rgb(var(--color-primary-200)/0.2) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-200)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-200\/25 {
      --tw-gradient-from: rgb(var(--color-primary-200)/0.25) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-200)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-200\/30 {
      --tw-gradient-from: rgb(var(--color-primary-200)/0.3) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-200)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-200\/40 {
      --tw-gradient-from: rgb(var(--color-primary-200)/0.4) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-200)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-200\/5 {
      --tw-gradient-from: rgb(var(--color-primary-200)/0.05) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-200)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-200\/50 {
      --tw-gradient-from: rgb(var(--color-primary-200)/0.5) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-200)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-200\/60 {
      --tw-gradient-from: rgb(var(--color-primary-200)/0.6) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-200)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-200\/70 {
      --tw-gradient-from: rgb(var(--color-primary-200)/0.7) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-200)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-200\/75 {
      --tw-gradient-from: rgb(var(--color-primary-200)/0.75) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-200)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-200\/80 {
      --tw-gradient-from: rgb(var(--color-primary-200)/0.8) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-200)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-200\/90 {
      --tw-gradient-from: rgb(var(--color-primary-200)/0.9) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-200)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-200\/95 {
      --tw-gradient-from: rgb(var(--color-primary-200)/0.95) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-200)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-300 {
      --tw-gradient-from: rgb(var(--color-primary-300)/1) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-300)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-300\/0 {
      --tw-gradient-from: rgb(var(--color-primary-300)/0) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-300)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-300\/10 {
      --tw-gradient-from: rgb(var(--color-primary-300)/0.1) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-300)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-300\/100 {
      --tw-gradient-from: rgb(var(--color-primary-300)/1) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-300)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-300\/20 {
      --tw-gradient-from: rgb(var(--color-primary-300)/0.2) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-300)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-300\/25 {
      --tw-gradient-from: rgb(var(--color-primary-300)/0.25) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-300)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-300\/30 {
      --tw-gradient-from: rgb(var(--color-primary-300)/0.3) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-300)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-300\/40 {
      --tw-gradient-from: rgb(var(--color-primary-300)/0.4) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-300)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-300\/5 {
      --tw-gradient-from: rgb(var(--color-primary-300)/0.05) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-300)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-300\/50 {
      --tw-gradient-from: rgb(var(--color-primary-300)/0.5) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-300)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-300\/60 {
      --tw-gradient-from: rgb(var(--color-primary-300)/0.6) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-300)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-300\/70 {
      --tw-gradient-from: rgb(var(--color-primary-300)/0.7) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-300)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-300\/75 {
      --tw-gradient-from: rgb(var(--color-primary-300)/0.75) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-300)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-300\/80 {
      --tw-gradient-from: rgb(var(--color-primary-300)/0.8) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-300)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-300\/90 {
      --tw-gradient-from: rgb(var(--color-primary-300)/0.9) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-300)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-300\/95 {
      --tw-gradient-from: rgb(var(--color-primary-300)/0.95) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-300)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-400 {
      --tw-gradient-from: rgb(var(--color-primary-400)/1) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-400)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-400\/0 {
      --tw-gradient-from: rgb(var(--color-primary-400)/0) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-400)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-400\/10 {
      --tw-gradient-from: rgb(var(--color-primary-400)/0.1) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-400)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-400\/100 {
      --tw-gradient-from: rgb(var(--color-primary-400)/1) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-400)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-400\/20 {
      --tw-gradient-from: rgb(var(--color-primary-400)/0.2) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-400)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-400\/25 {
      --tw-gradient-from: rgb(var(--color-primary-400)/0.25) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-400)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-400\/30 {
      --tw-gradient-from: rgb(var(--color-primary-400)/0.3) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-400)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-400\/40 {
      --tw-gradient-from: rgb(var(--color-primary-400)/0.4) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-400)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-400\/5 {
      --tw-gradient-from: rgb(var(--color-primary-400)/0.05) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-400)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-400\/50 {
      --tw-gradient-from: rgb(var(--color-primary-400)/0.5) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-400)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-400\/60 {
      --tw-gradient-from: rgb(var(--color-primary-400)/0.6) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-400)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-400\/70 {
      --tw-gradient-from: rgb(var(--color-primary-400)/0.7) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-400)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-400\/75 {
      --tw-gradient-from: rgb(var(--color-primary-400)/0.75) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-400)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-400\/80 {
      --tw-gradient-from: rgb(var(--color-primary-400)/0.8) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-400)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-400\/90 {
      --tw-gradient-from: rgb(var(--color-primary-400)/0.9) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-400)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-400\/95 {
      --tw-gradient-from: rgb(var(--color-primary-400)/0.95) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-400)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-50 {
      --tw-gradient-from: rgb(var(--color-primary-50)/1) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-50)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-50\/0 {
      --tw-gradient-from: rgb(var(--color-primary-50)/0) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-50)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-50\/10 {
      --tw-gradient-from: rgb(var(--color-primary-50)/0.1) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-50)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-50\/100 {
      --tw-gradient-from: rgb(var(--color-primary-50)/1) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-50)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-50\/20 {
      --tw-gradient-from: rgb(var(--color-primary-50)/0.2) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-50)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-50\/25 {
      --tw-gradient-from: rgb(var(--color-primary-50)/0.25) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-50)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-50\/30 {
      --tw-gradient-from: rgb(var(--color-primary-50)/0.3) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-50)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-50\/40 {
      --tw-gradient-from: rgb(var(--color-primary-50)/0.4) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-50)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-50\/5 {
      --tw-gradient-from: rgb(var(--color-primary-50)/0.05) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-50)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-50\/50 {
      --tw-gradient-from: rgb(var(--color-primary-50)/0.5) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-50)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-50\/60 {
      --tw-gradient-from: rgb(var(--color-primary-50)/0.6) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-50)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-50\/70 {
      --tw-gradient-from: rgb(var(--color-primary-50)/0.7) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-50)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-50\/75 {
      --tw-gradient-from: rgb(var(--color-primary-50)/0.75) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-50)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-50\/80 {
      --tw-gradient-from: rgb(var(--color-primary-50)/0.8) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-50)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-50\/90 {
      --tw-gradient-from: rgb(var(--color-primary-50)/0.9) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-50)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-50\/95 {
      --tw-gradient-from: rgb(var(--color-primary-50)/0.95) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-50)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-500 {
      --tw-gradient-from: rgb(var(--color-primary-500)/1) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-500)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-500\/0 {
      --tw-gradient-from: rgb(var(--color-primary-500)/0) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-500)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-500\/10 {
      --tw-gradient-from: rgb(var(--color-primary-500)/0.1) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-500)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-500\/100 {
      --tw-gradient-from: rgb(var(--color-primary-500)/1) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-500)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-500\/20 {
      --tw-gradient-from: rgb(var(--color-primary-500)/0.2) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-500)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-500\/25 {
      --tw-gradient-from: rgb(var(--color-primary-500)/0.25) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-500)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-500\/30 {
      --tw-gradient-from: rgb(var(--color-primary-500)/0.3) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-500)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-500\/40 {
      --tw-gradient-from: rgb(var(--color-primary-500)/0.4) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-500)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-500\/5 {
      --tw-gradient-from: rgb(var(--color-primary-500)/0.05) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-500)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-500\/50 {
      --tw-gradient-from: rgb(var(--color-primary-500)/0.5) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-500)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-500\/60 {
      --tw-gradient-from: rgb(var(--color-primary-500)/0.6) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-500)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-500\/70 {
      --tw-gradient-from: rgb(var(--color-primary-500)/0.7) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-500)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-500\/75 {
      --tw-gradient-from: rgb(var(--color-primary-500)/0.75) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-500)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-500\/80 {
      --tw-gradient-from: rgb(var(--color-primary-500)/0.8) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-500)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-500\/90 {
      --tw-gradient-from: rgb(var(--color-primary-500)/0.9) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-500)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-500\/95 {
      --tw-gradient-from: rgb(var(--color-primary-500)/0.95) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-500)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-600 {
      --tw-gradient-from: rgb(var(--color-primary-600)/1) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-600)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-600\/0 {
      --tw-gradient-from: rgb(var(--color-primary-600)/0) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-600)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-600\/10 {
      --tw-gradient-from: rgb(var(--color-primary-600)/0.1) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-600)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-600\/100 {
      --tw-gradient-from: rgb(var(--color-primary-600)/1) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-600)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-600\/20 {
      --tw-gradient-from: rgb(var(--color-primary-600)/0.2) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-600)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-600\/25 {
      --tw-gradient-from: rgb(var(--color-primary-600)/0.25) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-600)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-600\/30 {
      --tw-gradient-from: rgb(var(--color-primary-600)/0.3) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-600)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-600\/40 {
      --tw-gradient-from: rgb(var(--color-primary-600)/0.4) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-600)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-600\/5 {
      --tw-gradient-from: rgb(var(--color-primary-600)/0.05) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-600)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-600\/50 {
      --tw-gradient-from: rgb(var(--color-primary-600)/0.5) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-600)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-600\/60 {
      --tw-gradient-from: rgb(var(--color-primary-600)/0.6) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-600)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-600\/70 {
      --tw-gradient-from: rgb(var(--color-primary-600)/0.7) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-600)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-600\/75 {
      --tw-gradient-from: rgb(var(--color-primary-600)/0.75) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-600)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-600\/80 {
      --tw-gradient-from: rgb(var(--color-primary-600)/0.8) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-600)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-600\/90 {
      --tw-gradient-from: rgb(var(--color-primary-600)/0.9) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-600)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-600\/95 {
      --tw-gradient-from: rgb(var(--color-primary-600)/0.95) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-600)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-700 {
      --tw-gradient-from: rgb(var(--color-primary-700)/1) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-700)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-700\/0 {
      --tw-gradient-from: rgb(var(--color-primary-700)/0) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-700)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-700\/10 {
      --tw-gradient-from: rgb(var(--color-primary-700)/0.1) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-700)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-700\/100 {
      --tw-gradient-from: rgb(var(--color-primary-700)/1) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-700)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-700\/20 {
      --tw-gradient-from: rgb(var(--color-primary-700)/0.2) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-700)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-700\/25 {
      --tw-gradient-from: rgb(var(--color-primary-700)/0.25) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-700)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-700\/30 {
      --tw-gradient-from: rgb(var(--color-primary-700)/0.3) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-700)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-700\/40 {
      --tw-gradient-from: rgb(var(--color-primary-700)/0.4) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-700)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-700\/5 {
      --tw-gradient-from: rgb(var(--color-primary-700)/0.05) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-700)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-700\/50 {
      --tw-gradient-from: rgb(var(--color-primary-700)/0.5) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-700)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-700\/60 {
      --tw-gradient-from: rgb(var(--color-primary-700)/0.6) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-700)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-700\/70 {
      --tw-gradient-from: rgb(var(--color-primary-700)/0.7) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-700)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-700\/75 {
      --tw-gradient-from: rgb(var(--color-primary-700)/0.75) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-700)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-700\/80 {
      --tw-gradient-from: rgb(var(--color-primary-700)/0.8) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-700)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-700\/90 {
      --tw-gradient-from: rgb(var(--color-primary-700)/0.9) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-700)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-700\/95 {
      --tw-gradient-from: rgb(var(--color-primary-700)/0.95) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-700)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-800 {
      --tw-gradient-from: rgb(var(--color-primary-800)/1) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-800)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-800\/0 {
      --tw-gradient-from: rgb(var(--color-primary-800)/0) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-800)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-800\/10 {
      --tw-gradient-from: rgb(var(--color-primary-800)/0.1) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-800)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-800\/100 {
      --tw-gradient-from: rgb(var(--color-primary-800)/1) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-800)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-800\/20 {
      --tw-gradient-from: rgb(var(--color-primary-800)/0.2) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-800)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-800\/25 {
      --tw-gradient-from: rgb(var(--color-primary-800)/0.25) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-800)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-800\/30 {
      --tw-gradient-from: rgb(var(--color-primary-800)/0.3) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-800)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-800\/40 {
      --tw-gradient-from: rgb(var(--color-primary-800)/0.4) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-800)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-800\/5 {
      --tw-gradient-from: rgb(var(--color-primary-800)/0.05) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-800)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-800\/50 {
      --tw-gradient-from: rgb(var(--color-primary-800)/0.5) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-800)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-800\/60 {
      --tw-gradient-from: rgb(var(--color-primary-800)/0.6) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-800)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-800\/70 {
      --tw-gradient-from: rgb(var(--color-primary-800)/0.7) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-800)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-800\/75 {
      --tw-gradient-from: rgb(var(--color-primary-800)/0.75) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-800)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-800\/80 {
      --tw-gradient-from: rgb(var(--color-primary-800)/0.8) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-800)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-800\/90 {
      --tw-gradient-from: rgb(var(--color-primary-800)/0.9) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-800)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-800\/95 {
      --tw-gradient-from: rgb(var(--color-primary-800)/0.95) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-800)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-900 {
      --tw-gradient-from: rgb(var(--color-primary-900)/1) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-900)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-900\/0 {
      --tw-gradient-from: rgb(var(--color-primary-900)/0) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-900)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-900\/10 {
      --tw-gradient-from: rgb(var(--color-primary-900)/0.1) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-900)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-900\/100 {
      --tw-gradient-from: rgb(var(--color-primary-900)/1) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-900)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-900\/20 {
      --tw-gradient-from: rgb(var(--color-primary-900)/0.2) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-900)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-900\/25 {
      --tw-gradient-from: rgb(var(--color-primary-900)/0.25) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-900)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-900\/30 {
      --tw-gradient-from: rgb(var(--color-primary-900)/0.3) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-900)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-900\/40 {
      --tw-gradient-from: rgb(var(--color-primary-900)/0.4) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-900)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-900\/5 {
      --tw-gradient-from: rgb(var(--color-primary-900)/0.05) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-900)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-900\/50 {
      --tw-gradient-from: rgb(var(--color-primary-900)/0.5) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-900)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-900\/60 {
      --tw-gradient-from: rgb(var(--color-primary-900)/0.6) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-900)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-900\/70 {
      --tw-gradient-from: rgb(var(--color-primary-900)/0.7) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-900)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-900\/75 {
      --tw-gradient-from: rgb(var(--color-primary-900)/0.75) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-900)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-900\/80 {
      --tw-gradient-from: rgb(var(--color-primary-900)/0.8) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-900)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-900\/90 {
      --tw-gradient-from: rgb(var(--color-primary-900)/0.9) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-900)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-primary-900\/95 {
      --tw-gradient-from: rgb(var(--color-primary-900)/0.95) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-900)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .from-rose-100 {
      --tw-gradient-from: #ffe4e6 var(--tw-gradient-from-position);
      --tw-gradient-to: #ffe4e600 var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    .to-primary-100 {
      --tw-gradient-to: rgb(var(--color-primary-100)/1) var(--tw-gradient-to-position)
    }

    .to-primary-100\/0 {
      --tw-gradient-to: rgb(var(--color-primary-100)/0) var(--tw-gradient-to-position)
    }

    .to-primary-100\/10 {
      --tw-gradient-to: rgb(var(--color-primary-100)/0.1) var(--tw-gradient-to-position)
    }

    .to-primary-100\/100 {
      --tw-gradient-to: rgb(var(--color-primary-100)/1) var(--tw-gradient-to-position)
    }

    .to-primary-100\/20 {
      --tw-gradient-to: rgb(var(--color-primary-100)/0.2) var(--tw-gradient-to-position)
    }

    .to-primary-100\/25 {
      --tw-gradient-to: rgb(var(--color-primary-100)/0.25) var(--tw-gradient-to-position)
    }

    .to-primary-100\/30 {
      --tw-gradient-to: rgb(var(--color-primary-100)/0.3) var(--tw-gradient-to-position)
    }

    .to-primary-100\/40 {
      --tw-gradient-to: rgb(var(--color-primary-100)/0.4) var(--tw-gradient-to-position)
    }

    .to-primary-100\/5 {
      --tw-gradient-to: rgb(var(--color-primary-100)/0.05) var(--tw-gradient-to-position)
    }

    .to-primary-100\/50 {
      --tw-gradient-to: rgb(var(--color-primary-100)/0.5) var(--tw-gradient-to-position)
    }

    .to-primary-100\/60 {
      --tw-gradient-to: rgb(var(--color-primary-100)/0.6) var(--tw-gradient-to-position)
    }

    .to-primary-100\/70 {
      --tw-gradient-to: rgb(var(--color-primary-100)/0.7) var(--tw-gradient-to-position)
    }

    .to-primary-100\/75 {
      --tw-gradient-to: rgb(var(--color-primary-100)/0.75) var(--tw-gradient-to-position)
    }

    .to-primary-100\/80 {
      --tw-gradient-to: rgb(var(--color-primary-100)/0.8) var(--tw-gradient-to-position)
    }

    .to-primary-100\/90 {
      --tw-gradient-to: rgb(var(--color-primary-100)/0.9) var(--tw-gradient-to-position)
    }

    .to-primary-100\/95 {
      --tw-gradient-to: rgb(var(--color-primary-100)/0.95) var(--tw-gradient-to-position)
    }

    .to-primary-200 {
      --tw-gradient-to: rgb(var(--color-primary-200)/1) var(--tw-gradient-to-position)
    }

    .to-primary-200\/0 {
      --tw-gradient-to: rgb(var(--color-primary-200)/0) var(--tw-gradient-to-position)
    }

    .to-primary-200\/10 {
      --tw-gradient-to: rgb(var(--color-primary-200)/0.1) var(--tw-gradient-to-position)
    }

    .to-primary-200\/100 {
      --tw-gradient-to: rgb(var(--color-primary-200)/1) var(--tw-gradient-to-position)
    }

    .to-primary-200\/20 {
      --tw-gradient-to: rgb(var(--color-primary-200)/0.2) var(--tw-gradient-to-position)
    }

    .to-primary-200\/25 {
      --tw-gradient-to: rgb(var(--color-primary-200)/0.25) var(--tw-gradient-to-position)
    }

    .to-primary-200\/30 {
      --tw-gradient-to: rgb(var(--color-primary-200)/0.3) var(--tw-gradient-to-position)
    }

    .to-primary-200\/40 {
      --tw-gradient-to: rgb(var(--color-primary-200)/0.4) var(--tw-gradient-to-position)
    }

    .to-primary-200\/5 {
      --tw-gradient-to: rgb(var(--color-primary-200)/0.05) var(--tw-gradient-to-position)
    }

    .to-primary-200\/50 {
      --tw-gradient-to: rgb(var(--color-primary-200)/0.5) var(--tw-gradient-to-position)
    }

    .to-primary-200\/60 {
      --tw-gradient-to: rgb(var(--color-primary-200)/0.6) var(--tw-gradient-to-position)
    }

    .to-primary-200\/70 {
      --tw-gradient-to: rgb(var(--color-primary-200)/0.7) var(--tw-gradient-to-position)
    }

    .to-primary-200\/75 {
      --tw-gradient-to: rgb(var(--color-primary-200)/0.75) var(--tw-gradient-to-position)
    }

    .to-primary-200\/80 {
      --tw-gradient-to: rgb(var(--color-primary-200)/0.8) var(--tw-gradient-to-position)
    }

    .to-primary-200\/90 {
      --tw-gradient-to: rgb(var(--color-primary-200)/0.9) var(--tw-gradient-to-position)
    }

    .to-primary-200\/95 {
      --tw-gradient-to: rgb(var(--color-primary-200)/0.95) var(--tw-gradient-to-position)
    }

    .to-primary-300 {
      --tw-gradient-to: rgb(var(--color-primary-300)/1) var(--tw-gradient-to-position)
    }

    .to-primary-300\/0 {
      --tw-gradient-to: rgb(var(--color-primary-300)/0) var(--tw-gradient-to-position)
    }

    .to-primary-300\/10 {
      --tw-gradient-to: rgb(var(--color-primary-300)/0.1) var(--tw-gradient-to-position)
    }

    .to-primary-300\/100 {
      --tw-gradient-to: rgb(var(--color-primary-300)/1) var(--tw-gradient-to-position)
    }

    .to-primary-300\/20 {
      --tw-gradient-to: rgb(var(--color-primary-300)/0.2) var(--tw-gradient-to-position)
    }

    .to-primary-300\/25 {
      --tw-gradient-to: rgb(var(--color-primary-300)/0.25) var(--tw-gradient-to-position)
    }

    .to-primary-300\/30 {
      --tw-gradient-to: rgb(var(--color-primary-300)/0.3) var(--tw-gradient-to-position)
    }

    .to-primary-300\/40 {
      --tw-gradient-to: rgb(var(--color-primary-300)/0.4) var(--tw-gradient-to-position)
    }

    .to-primary-300\/5 {
      --tw-gradient-to: rgb(var(--color-primary-300)/0.05) var(--tw-gradient-to-position)
    }

    .to-primary-300\/50 {
      --tw-gradient-to: rgb(var(--color-primary-300)/0.5) var(--tw-gradient-to-position)
    }

    .to-primary-300\/60 {
      --tw-gradient-to: rgb(var(--color-primary-300)/0.6) var(--tw-gradient-to-position)
    }

    .to-primary-300\/70 {
      --tw-gradient-to: rgb(var(--color-primary-300)/0.7) var(--tw-gradient-to-position)
    }

    .to-primary-300\/75 {
      --tw-gradient-to: rgb(var(--color-primary-300)/0.75) var(--tw-gradient-to-position)
    }

    .to-primary-300\/80 {
      --tw-gradient-to: rgb(var(--color-primary-300)/0.8) var(--tw-gradient-to-position)
    }

    .to-primary-300\/90 {
      --tw-gradient-to: rgb(var(--color-primary-300)/0.9) var(--tw-gradient-to-position)
    }

    .to-primary-300\/95 {
      --tw-gradient-to: rgb(var(--color-primary-300)/0.95) var(--tw-gradient-to-position)
    }

    .to-primary-400 {
      --tw-gradient-to: rgb(var(--color-primary-400)/1) var(--tw-gradient-to-position)
    }

    .to-primary-400\/0 {
      --tw-gradient-to: rgb(var(--color-primary-400)/0) var(--tw-gradient-to-position)
    }

    .to-primary-400\/10 {
      --tw-gradient-to: rgb(var(--color-primary-400)/0.1) var(--tw-gradient-to-position)
    }

    .to-primary-400\/100 {
      --tw-gradient-to: rgb(var(--color-primary-400)/1) var(--tw-gradient-to-position)
    }

    .to-primary-400\/20 {
      --tw-gradient-to: rgb(var(--color-primary-400)/0.2) var(--tw-gradient-to-position)
    }

    .to-primary-400\/25 {
      --tw-gradient-to: rgb(var(--color-primary-400)/0.25) var(--tw-gradient-to-position)
    }

    .to-primary-400\/30 {
      --tw-gradient-to: rgb(var(--color-primary-400)/0.3) var(--tw-gradient-to-position)
    }

    .to-primary-400\/40 {
      --tw-gradient-to: rgb(var(--color-primary-400)/0.4) var(--tw-gradient-to-position)
    }

    .to-primary-400\/5 {
      --tw-gradient-to: rgb(var(--color-primary-400)/0.05) var(--tw-gradient-to-position)
    }

    .to-primary-400\/50 {
      --tw-gradient-to: rgb(var(--color-primary-400)/0.5) var(--tw-gradient-to-position)
    }

    .to-primary-400\/60 {
      --tw-gradient-to: rgb(var(--color-primary-400)/0.6) var(--tw-gradient-to-position)
    }

    .to-primary-400\/70 {
      --tw-gradient-to: rgb(var(--color-primary-400)/0.7) var(--tw-gradient-to-position)
    }

    .to-primary-400\/75 {
      --tw-gradient-to: rgb(var(--color-primary-400)/0.75) var(--tw-gradient-to-position)
    }

    .to-primary-400\/80 {
      --tw-gradient-to: rgb(var(--color-primary-400)/0.8) var(--tw-gradient-to-position)
    }

    .to-primary-400\/90 {
      --tw-gradient-to: rgb(var(--color-primary-400)/0.9) var(--tw-gradient-to-position)
    }

    .to-primary-400\/95 {
      --tw-gradient-to: rgb(var(--color-primary-400)/0.95) var(--tw-gradient-to-position)
    }

    .to-primary-50 {
      --tw-gradient-to: rgb(var(--color-primary-50)/1) var(--tw-gradient-to-position)
    }

    .to-primary-50\/0 {
      --tw-gradient-to: rgb(var(--color-primary-50)/0) var(--tw-gradient-to-position)
    }

    .to-primary-50\/10 {
      --tw-gradient-to: rgb(var(--color-primary-50)/0.1) var(--tw-gradient-to-position)
    }

    .to-primary-50\/100 {
      --tw-gradient-to: rgb(var(--color-primary-50)/1) var(--tw-gradient-to-position)
    }

    .to-primary-50\/20 {
      --tw-gradient-to: rgb(var(--color-primary-50)/0.2) var(--tw-gradient-to-position)
    }

    .to-primary-50\/25 {
      --tw-gradient-to: rgb(var(--color-primary-50)/0.25) var(--tw-gradient-to-position)
    }

    .to-primary-50\/30 {
      --tw-gradient-to: rgb(var(--color-primary-50)/0.3) var(--tw-gradient-to-position)
    }

    .to-primary-50\/40 {
      --tw-gradient-to: rgb(var(--color-primary-50)/0.4) var(--tw-gradient-to-position)
    }

    .to-primary-50\/5 {
      --tw-gradient-to: rgb(var(--color-primary-50)/0.05) var(--tw-gradient-to-position)
    }

    .to-primary-50\/50 {
      --tw-gradient-to: rgb(var(--color-primary-50)/0.5) var(--tw-gradient-to-position)
    }

    .to-primary-50\/60 {
      --tw-gradient-to: rgb(var(--color-primary-50)/0.6) var(--tw-gradient-to-position)
    }

    .to-primary-50\/70 {
      --tw-gradient-to: rgb(var(--color-primary-50)/0.7) var(--tw-gradient-to-position)
    }

    .to-primary-50\/75 {
      --tw-gradient-to: rgb(var(--color-primary-50)/0.75) var(--tw-gradient-to-position)
    }

    .to-primary-50\/80 {
      --tw-gradient-to: rgb(var(--color-primary-50)/0.8) var(--tw-gradient-to-position)
    }

    .to-primary-50\/90 {
      --tw-gradient-to: rgb(var(--color-primary-50)/0.9) var(--tw-gradient-to-position)
    }

    .to-primary-50\/95 {
      --tw-gradient-to: rgb(var(--color-primary-50)/0.95) var(--tw-gradient-to-position)
    }

    .to-primary-500 {
      --tw-gradient-to: rgb(var(--color-primary-500)/1) var(--tw-gradient-to-position)
    }

    .to-primary-500\/0 {
      --tw-gradient-to: rgb(var(--color-primary-500)/0) var(--tw-gradient-to-position)
    }

    .to-primary-500\/10 {
      --tw-gradient-to: rgb(var(--color-primary-500)/0.1) var(--tw-gradient-to-position)
    }

    .to-primary-500\/100 {
      --tw-gradient-to: rgb(var(--color-primary-500)/1) var(--tw-gradient-to-position)
    }

    .to-primary-500\/20 {
      --tw-gradient-to: rgb(var(--color-primary-500)/0.2) var(--tw-gradient-to-position)
    }

    .to-primary-500\/25 {
      --tw-gradient-to: rgb(var(--color-primary-500)/0.25) var(--tw-gradient-to-position)
    }

    .to-primary-500\/30 {
      --tw-gradient-to: rgb(var(--color-primary-500)/0.3) var(--tw-gradient-to-position)
    }

    .to-primary-500\/40 {
      --tw-gradient-to: rgb(var(--color-primary-500)/0.4) var(--tw-gradient-to-position)
    }

    .to-primary-500\/5 {
      --tw-gradient-to: rgb(var(--color-primary-500)/0.05) var(--tw-gradient-to-position)
    }

    .to-primary-500\/50 {
      --tw-gradient-to: rgb(var(--color-primary-500)/0.5) var(--tw-gradient-to-position)
    }

    .to-primary-500\/60 {
      --tw-gradient-to: rgb(var(--color-primary-500)/0.6) var(--tw-gradient-to-position)
    }

    .to-primary-500\/70 {
      --tw-gradient-to: rgb(var(--color-primary-500)/0.7) var(--tw-gradient-to-position)
    }

    .to-primary-500\/75 {
      --tw-gradient-to: rgb(var(--color-primary-500)/0.75) var(--tw-gradient-to-position)
    }

    .to-primary-500\/80 {
      --tw-gradient-to: rgb(var(--color-primary-500)/0.8) var(--tw-gradient-to-position)
    }

    .to-primary-500\/90 {
      --tw-gradient-to: rgb(var(--color-primary-500)/0.9) var(--tw-gradient-to-position)
    }

    .to-primary-500\/95 {
      --tw-gradient-to: rgb(var(--color-primary-500)/0.95) var(--tw-gradient-to-position)
    }

    .to-primary-600 {
      --tw-gradient-to: rgb(var(--color-primary-600)/1) var(--tw-gradient-to-position)
    }

    .to-primary-600\/0 {
      --tw-gradient-to: rgb(var(--color-primary-600)/0) var(--tw-gradient-to-position)
    }

    .to-primary-600\/10 {
      --tw-gradient-to: rgb(var(--color-primary-600)/0.1) var(--tw-gradient-to-position)
    }

    .to-primary-600\/100 {
      --tw-gradient-to: rgb(var(--color-primary-600)/1) var(--tw-gradient-to-position)
    }

    .to-primary-600\/20 {
      --tw-gradient-to: rgb(var(--color-primary-600)/0.2) var(--tw-gradient-to-position)
    }

    .to-primary-600\/25 {
      --tw-gradient-to: rgb(var(--color-primary-600)/0.25) var(--tw-gradient-to-position)
    }

    .to-primary-600\/30 {
      --tw-gradient-to: rgb(var(--color-primary-600)/0.3) var(--tw-gradient-to-position)
    }

    .to-primary-600\/40 {
      --tw-gradient-to: rgb(var(--color-primary-600)/0.4) var(--tw-gradient-to-position)
    }

    .to-primary-600\/5 {
      --tw-gradient-to: rgb(var(--color-primary-600)/0.05) var(--tw-gradient-to-position)
    }

    .to-primary-600\/50 {
      --tw-gradient-to: rgb(var(--color-primary-600)/0.5) var(--tw-gradient-to-position)
    }

    .to-primary-600\/60 {
      --tw-gradient-to: rgb(var(--color-primary-600)/0.6) var(--tw-gradient-to-position)
    }

    .to-primary-600\/70 {
      --tw-gradient-to: rgb(var(--color-primary-600)/0.7) var(--tw-gradient-to-position)
    }

    .to-primary-600\/75 {
      --tw-gradient-to: rgb(var(--color-primary-600)/0.75) var(--tw-gradient-to-position)
    }

    .to-primary-600\/80 {
      --tw-gradient-to: rgb(var(--color-primary-600)/0.8) var(--tw-gradient-to-position)
    }

    .to-primary-600\/90 {
      --tw-gradient-to: rgb(var(--color-primary-600)/0.9) var(--tw-gradient-to-position)
    }

    .to-primary-600\/95 {
      --tw-gradient-to: rgb(var(--color-primary-600)/0.95) var(--tw-gradient-to-position)
    }

    .to-primary-700 {
      --tw-gradient-to: rgb(var(--color-primary-700)/1) var(--tw-gradient-to-position)
    }

    .to-primary-700\/0 {
      --tw-gradient-to: rgb(var(--color-primary-700)/0) var(--tw-gradient-to-position)
    }

    .to-primary-700\/10 {
      --tw-gradient-to: rgb(var(--color-primary-700)/0.1) var(--tw-gradient-to-position)
    }

    .to-primary-700\/100 {
      --tw-gradient-to: rgb(var(--color-primary-700)/1) var(--tw-gradient-to-position)
    }

    .to-primary-700\/20 {
      --tw-gradient-to: rgb(var(--color-primary-700)/0.2) var(--tw-gradient-to-position)
    }

    .to-primary-700\/25 {
      --tw-gradient-to: rgb(var(--color-primary-700)/0.25) var(--tw-gradient-to-position)
    }

    .to-primary-700\/30 {
      --tw-gradient-to: rgb(var(--color-primary-700)/0.3) var(--tw-gradient-to-position)
    }

    .to-primary-700\/40 {
      --tw-gradient-to: rgb(var(--color-primary-700)/0.4) var(--tw-gradient-to-position)
    }

    .to-primary-700\/5 {
      --tw-gradient-to: rgb(var(--color-primary-700)/0.05) var(--tw-gradient-to-position)
    }

    .to-primary-700\/50 {
      --tw-gradient-to: rgb(var(--color-primary-700)/0.5) var(--tw-gradient-to-position)
    }

    .to-primary-700\/60 {
      --tw-gradient-to: rgb(var(--color-primary-700)/0.6) var(--tw-gradient-to-position)
    }

    .to-primary-700\/70 {
      --tw-gradient-to: rgb(var(--color-primary-700)/0.7) var(--tw-gradient-to-position)
    }

    .to-primary-700\/75 {
      --tw-gradient-to: rgb(var(--color-primary-700)/0.75) var(--tw-gradient-to-position)
    }

    .to-primary-700\/80 {
      --tw-gradient-to: rgb(var(--color-primary-700)/0.8) var(--tw-gradient-to-position)
    }

    .to-primary-700\/90 {
      --tw-gradient-to: rgb(var(--color-primary-700)/0.9) var(--tw-gradient-to-position)
    }

    .to-primary-700\/95 {
      --tw-gradient-to: rgb(var(--color-primary-700)/0.95) var(--tw-gradient-to-position)
    }

    .to-primary-800 {
      --tw-gradient-to: rgb(var(--color-primary-800)/1) var(--tw-gradient-to-position)
    }

    .to-primary-800\/0 {
      --tw-gradient-to: rgb(var(--color-primary-800)/0) var(--tw-gradient-to-position)
    }

    .to-primary-800\/10 {
      --tw-gradient-to: rgb(var(--color-primary-800)/0.1) var(--tw-gradient-to-position)
    }

    .to-primary-800\/100 {
      --tw-gradient-to: rgb(var(--color-primary-800)/1) var(--tw-gradient-to-position)
    }

    .to-primary-800\/20 {
      --tw-gradient-to: rgb(var(--color-primary-800)/0.2) var(--tw-gradient-to-position)
    }

    .to-primary-800\/25 {
      --tw-gradient-to: rgb(var(--color-primary-800)/0.25) var(--tw-gradient-to-position)
    }

    .to-primary-800\/30 {
      --tw-gradient-to: rgb(var(--color-primary-800)/0.3) var(--tw-gradient-to-position)
    }

    .to-primary-800\/40 {
      --tw-gradient-to: rgb(var(--color-primary-800)/0.4) var(--tw-gradient-to-position)
    }

    .to-primary-800\/5 {
      --tw-gradient-to: rgb(var(--color-primary-800)/0.05) var(--tw-gradient-to-position)
    }

    .to-primary-800\/50 {
      --tw-gradient-to: rgb(var(--color-primary-800)/0.5) var(--tw-gradient-to-position)
    }

    .to-primary-800\/60 {
      --tw-gradient-to: rgb(var(--color-primary-800)/0.6) var(--tw-gradient-to-position)
    }

    .to-primary-800\/70 {
      --tw-gradient-to: rgb(var(--color-primary-800)/0.7) var(--tw-gradient-to-position)
    }

    .to-primary-800\/75 {
      --tw-gradient-to: rgb(var(--color-primary-800)/0.75) var(--tw-gradient-to-position)
    }

    .to-primary-800\/80 {
      --tw-gradient-to: rgb(var(--color-primary-800)/0.8) var(--tw-gradient-to-position)
    }

    .to-primary-800\/90 {
      --tw-gradient-to: rgb(var(--color-primary-800)/0.9) var(--tw-gradient-to-position)
    }

    .to-primary-800\/95 {
      --tw-gradient-to: rgb(var(--color-primary-800)/0.95) var(--tw-gradient-to-position)
    }

    .to-primary-900 {
      --tw-gradient-to: rgb(var(--color-primary-900)/1) var(--tw-gradient-to-position)
    }

    .to-primary-900\/0 {
      --tw-gradient-to: rgb(var(--color-primary-900)/0) var(--tw-gradient-to-position)
    }

    .to-primary-900\/10 {
      --tw-gradient-to: rgb(var(--color-primary-900)/0.1) var(--tw-gradient-to-position)
    }

    .to-primary-900\/100 {
      --tw-gradient-to: rgb(var(--color-primary-900)/1) var(--tw-gradient-to-position)
    }

    .to-primary-900\/20 {
      --tw-gradient-to: rgb(var(--color-primary-900)/0.2) var(--tw-gradient-to-position)
    }

    .to-primary-900\/25 {
      --tw-gradient-to: rgb(var(--color-primary-900)/0.25) var(--tw-gradient-to-position)
    }

    .to-primary-900\/30 {
      --tw-gradient-to: rgb(var(--color-primary-900)/0.3) var(--tw-gradient-to-position)
    }

    .to-primary-900\/40 {
      --tw-gradient-to: rgb(var(--color-primary-900)/0.4) var(--tw-gradient-to-position)
    }

    .to-primary-900\/5 {
      --tw-gradient-to: rgb(var(--color-primary-900)/0.05) var(--tw-gradient-to-position)
    }

    .to-primary-900\/50 {
      --tw-gradient-to: rgb(var(--color-primary-900)/0.5) var(--tw-gradient-to-position)
    }

    .to-primary-900\/60 {
      --tw-gradient-to: rgb(var(--color-primary-900)/0.6) var(--tw-gradient-to-position)
    }

    .to-primary-900\/70 {
      --tw-gradient-to: rgb(var(--color-primary-900)/0.7) var(--tw-gradient-to-position)
    }

    .to-primary-900\/75 {
      --tw-gradient-to: rgb(var(--color-primary-900)/0.75) var(--tw-gradient-to-position)
    }

    .to-primary-900\/80 {
      --tw-gradient-to: rgb(var(--color-primary-900)/0.8) var(--tw-gradient-to-position)
    }

    .to-primary-900\/90 {
      --tw-gradient-to: rgb(var(--color-primary-900)/0.9) var(--tw-gradient-to-position)
    }

    .to-primary-900\/95 {
      --tw-gradient-to: rgb(var(--color-primary-900)/0.95) var(--tw-gradient-to-position)
    }

    .to-teal-100 {
      --tw-gradient-to: #ccfbf1 var(--tw-gradient-to-position)
    }

    .bg-\[length\:0px_10px\] {
      background-size: 0 10px
    }

    .bg-left-bottom {
      background-position: 0 100%
    }

    .bg-no-repeat {
      background-repeat: no-repeat
    }

    .fill-current {
      fill: currentColor
    }

    .stroke-current {
      stroke: currentColor
    }

    .object-contain {
      -o-object-fit: contain;
      object-fit: contain
    }

    .object-cover {
      -o-object-fit: cover;
      object-fit: cover
    }

    .object-fill {
      -o-object-fit: fill;
      object-fit: fill
    }

    .p-0 {
      padding: 0
    }

    .p-0\.5 {
      padding: .125rem
    }

    .p-1 {
      padding: .25rem
    }

    .p-1\.5 {
      padding: .375rem
    }

    .p-2 {
      padding: .5rem
    }

    .p-3 {
      padding: .75rem
    }

    .p-4 {
      padding: 1rem
    }

    .p-5 {
      padding: 1.25rem
    }

    .p-6 {
      padding: 1.5rem
    }

    .p-8 {
      padding: 2rem
    }

    .px-2 {
      padding-left: .5rem;
      padding-right: .5rem
    }

    .px-2\.5 {
      padding-left: .625rem;
      padding-right: .625rem
    }

    .px-3 {
      padding-left: .75rem;
      padding-right: .75rem
    }

    .px-3\.5 {
      padding-left: .875rem;
      padding-right: .875rem
    }

    .px-4 {
      padding-left: 1rem;
      padding-right: 1rem
    }

    .px-5 {
      padding-left: 1.25rem;
      padding-right: 1.25rem
    }

    .px-6 {
      padding-left: 1.5rem;
      padding-right: 1.5rem
    }

    .px-8 {
      padding-left: 2rem;
      padding-right: 2rem
    }

    .py-0 {
      padding-top: 0;
      padding-bottom: 0
    }

    .py-0\.5 {
      padding-top: .125rem;
      padding-bottom: .125rem
    }

    .py-1 {
      padding-top: .25rem;
      padding-bottom: .25rem
    }

    .py-1\.5 {
      padding-top: .375rem;
      padding-bottom: .375rem
    }

    .py-12 {
      padding-top: 3rem;
      padding-bottom: 3rem
    }

    .py-16 {
      padding-top: 4rem;
      padding-bottom: 4rem
    }

    .py-2 {
      padding-top: .5rem;
      padding-bottom: .5rem
    }

    .py-2\.5 {
      padding-top: .625rem;
      padding-bottom: .625rem
    }

    .py-20 {
      padding-top: 5rem;
      padding-bottom: 5rem
    }

    .py-3 {
      padding-top: .75rem;
      padding-bottom: .75rem
    }

    .py-32 {
      padding-top: 8rem;
      padding-bottom: 8rem
    }

    .py-5 {
      padding-top: 1.25rem;
      padding-bottom: 1.25rem
    }

    .py-8 {
      padding-top: 2rem;
      padding-bottom: 2rem
    }

    .pb-3 {
      padding-bottom: .75rem
    }

    .pb-4 {
      padding-bottom: 1rem
    }

    .pb-5 {
      padding-bottom: 1.25rem
    }

    .pb-6 {
      padding-bottom: 1.5rem
    }

    .pb-8 {
      padding-bottom: 2rem
    }

    .pl-0 {
      padding-left: 0
    }

    .pl-1 {
      padding-left: .25rem
    }

    .pl-12 {
      padding-left: 3rem
    }

    .pl-2 {
      padding-left: .5rem
    }

    .pl-3 {
      padding-left: .75rem
    }

    .pl-4 {
      padding-left: 1rem
    }

    .pl-5 {
      padding-left: 1.25rem
    }

    .pl-6 {
      padding-left: 1.5rem
    }

    .pl-8 {
      padding-left: 2rem
    }

    .pr-1 {
      padding-right: .25rem
    }

    .pr-2 {
      padding-right: .5rem
    }

    .pr-2\.5 {
      padding-right: .625rem
    }

    .pr-3 {
      padding-right: .75rem
    }

    .pr-4 {
      padding-right: 1rem
    }

    .pr-\[calc\(env\(safe-area-inset-right\)-1\.5rem\)\] {
      padding-right: calc(env(safe-area-inset-right) - 1.5rem)
    }

    .pt-0 {
      padding-top: 0
    }

    .pt-1 {
      padding-top: .25rem
    }

    .pt-12 {
      padding-top: 3rem
    }

    .pt-14 {
      padding-top: 3.5rem
    }

    .pt-2 {
      padding-top: .5rem
    }

    .pt-3 {
      padding-top: .75rem
    }

    .pt-4 {
      padding-top: 1rem
    }

    .pt-5 {
      padding-top: 1.25rem
    }

    .pt-6 {
      padding-top: 1.5rem
    }

    .pt-8 {
      padding-top: 2rem
    }

    .text-left {
      text-align: left
    }

    .text-center {
      text-align: center
    }

    .text-right {
      text-align: right
    }

    .font-mono {
      font-family: ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace
    }

    .text-2xl {
      font-size: 1.5rem;
      line-height: 2rem
    }

    .text-3xl {
      font-size: 1.875rem;
      line-height: 2.25rem
    }

    .text-4xl {
      font-size: 2.25rem;
      line-height: 2.5rem
    }

    .text-5xl {
      font-size: 3rem;
      line-height: 1
    }

    .text-6xl {
      font-size: 3.75rem;
      line-height: 1
    }

    .text-\[0\.6rem\] {
      font-size: .6rem
    }

    .text-base {
      font-size: 1rem
    }

    .text-lg {
      font-size: 1.125rem
    }

    .text-sm {
      font-size: .875rem
    }

    .text-xl {
      font-size: 1.25rem
    }

    .text-xs {
      font-size: .75rem
    }

    .font-bold {
      font-weight: 700
    }

    .font-extrabold {
      font-weight: 800
    }

    .font-extralight {
      font-weight: 200
    }

    .font-light {
      font-weight: 300
    }

    .font-medium {
      font-weight: 500
    }

    .font-normal {
      font-weight: 400
    }

    .font-semibold {
      font-weight: 600
    }

    .uppercase {
      text-transform: uppercase
    }

    .lowercase {
      text-transform: lowercase
    }

    .capitalize {
      text-transform: capitalize
    }

    .italic {
      font-style: italic
    }

    .leading-3 {
      line-height: .75rem
    }

    .leading-6 {
      line-height: 1.5rem
    }

    .leading-8 {
      line-height: 2rem
    }

    .leading-none {
      line-height: 1
    }

    .leading-snug {
      line-height: 1.375
    }

    .leading-tight {
      line-height: 1.25
    }

    .tracking-tight {
      letter-spacing: -.025em
    }

    .tracking-tighter {
      letter-spacing: -.05em
    }

    .tracking-wide {
      letter-spacing: .025em
    }

    .tracking-wider {
      letter-spacing: .05em
    }

    .tracking-widest {
      letter-spacing: .1em
    }

    .text-black {
      --tw-text-opacity: 1;
      color: rgb(0 0 0/var(--tw-text-opacity))
    }

    .text-blue-800 {
      --tw-text-opacity: 1;
      color: rgb(30 64 175/var(--tw-text-opacity))
    }

    .text-current {
      color: currentColor
    }

    .text-gray-100 {
      --tw-text-opacity: 1;
      color: rgb(243 244 246/var(--tw-text-opacity))
    }

    .text-gray-200 {
      --tw-text-opacity: 1;
      color: rgb(229 231 235/var(--tw-text-opacity))
    }

    .text-gray-300 {
      --tw-text-opacity: 1;
      color: rgb(209 213 219/var(--tw-text-opacity))
    }

    .text-gray-400 {
      --tw-text-opacity: 1;
      color: rgb(156 163 175/var(--tw-text-opacity))
    }

    .text-gray-500 {
      --tw-text-opacity: 1;
      color: rgb(107 114 128/var(--tw-text-opacity))
    }

    .text-gray-600 {
      --tw-text-opacity: 1;
      color: rgb(75 85 99/var(--tw-text-opacity))
    }

    .text-gray-700 {
      --tw-text-opacity: 1;
      color: rgb(55 65 81/var(--tw-text-opacity))
    }

    .text-gray-800 {
      --tw-text-opacity: 1;
      color: rgb(31 41 55/var(--tw-text-opacity))
    }

    .text-gray-900 {
      --tw-text-opacity: 1;
      color: rgb(17 24 39/var(--tw-text-opacity))
    }

    .text-neutral-400 {
      --tw-text-opacity: 1;
      color: rgb(var(--color-neutral-400)/var(--tw-text-opacity))
    }

    .text-neutral-500 {
      --tw-text-opacity: 1;
      color: rgb(var(--color-neutral-500)/var(--tw-text-opacity))
    }

    .text-neutral-600 {
      --tw-text-opacity: 1;
      color: rgb(var(--color-neutral-600)/var(--tw-text-opacity))
    }

    .text-neutral-700 {
      --tw-text-opacity: 1;
      color: rgb(var(--color-neutral-700)/var(--tw-text-opacity))
    }

    .text-neutral-800 {
      --tw-text-opacity: 1;
      color: rgb(var(--color-neutral-800)/var(--tw-text-opacity))
    }

    .text-primary-100 {
      --tw-text-opacity: 1;
      color: rgb(var(--color-primary-100)/var(--tw-text-opacity))
    }

    .text-primary-500 {
      --tw-text-opacity: 1;
      color: rgb(var(--color-primary-500)/var(--tw-text-opacity))
    }

    .text-primary-600 {
      --tw-text-opacity: 1;
      color: rgb(var(--color-primary-600)/var(--tw-text-opacity))
    }

    .text-primary-700 {
      --tw-text-opacity: 1;
      color: rgb(var(--color-primary-700)/var(--tw-text-opacity))
    }

    .text-primary-800 {
      --tw-text-opacity: 1;
      color: rgb(var(--color-primary-800)/var(--tw-text-opacity))
    }

    .text-primary-900 {
      --tw-text-opacity: 1;
      color: rgb(var(--color-primary-900)/var(--tw-text-opacity))
    }

    .text-red-400 {
      --tw-text-opacity: 1;
      color: rgb(248 113 113/var(--tw-text-opacity))
    }

    .text-slate-400 {
      --tw-text-opacity: 1;
      color: rgb(148 163 184/var(--tw-text-opacity))
    }

    .text-slate-500 {
      --tw-text-opacity: 1;
      color: rgb(100 116 139/var(--tw-text-opacity))
    }

    .text-slate-600 {
      --tw-text-opacity: 1;
      color: rgb(71 85 105/var(--tw-text-opacity))
    }

    .text-slate-700 {
      --tw-text-opacity: 1;
      color: rgb(51 65 85/var(--tw-text-opacity))
    }

    .text-slate-900 {
      --tw-text-opacity: 1;
      color: rgb(15 23 42/var(--tw-text-opacity))
    }

    .text-white {
      --tw-text-opacity: 1;
      color: rgb(255 255 255/var(--tw-text-opacity))
    }

    .text-zinc-400 {
      --tw-text-opacity: 1;
      color: rgb(161 161 170/var(--tw-text-opacity))
    }

    .text-zinc-600 {
      --tw-text-opacity: 1;
      color: rgb(82 82 91/var(--tw-text-opacity))
    }

    .text-zinc-800 {
      --tw-text-opacity: 1;
      color: rgb(39 39 42/var(--tw-text-opacity))
    }

    .underline {
      text-decoration-line: underline
    }

    .no-underline {
      text-decoration-line: none
    }

    .opacity-0 {
      opacity: 0
    }

    .opacity-25 {
      opacity: .25
    }

    .opacity-50 {
      opacity: .5
    }

    .opacity-60 {
      opacity: .6
    }

    .opacity-75 {
      opacity: .75
    }

    .shadow {
      --tw-shadow: 0 1px 3px 0 #0000001a,0 1px 2px -1px #0000001a;
      --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color)
    }

    .shadow,.shadow-lg {
      -webkit-box-shadow: var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);
      box-shadow: var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
    }

    .shadow-lg {
      --tw-shadow: 0 10px 15px -3px #0000001a,0 4px 6px -4px #0000001a;
      --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color)
    }

    .shadow-md {
      --tw-shadow: 0 4px 6px -1px #0000001a,0 2px 4px -2px #0000001a;
      --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)
    }

    .shadow-md,.shadow-sm {
      -webkit-box-shadow: var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);
      box-shadow: var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
    }

    .shadow-sm {
      --tw-shadow: 0 1px 2px 0 #0000000d;
      --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color)
    }

    .shadow-xl {
      --tw-shadow: 0 20px 25px -5px #0000001a,0 8px 10px -6px #0000001a;
      --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color),0 8px 10px -6px var(--tw-shadow-color);
      -webkit-box-shadow: var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);
      box-shadow: var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
    }

    .shadow-neutral-800\/5 {
      --tw-shadow-color: rgb(var(--color-neutral-800)/0.05);
      --tw-shadow: var(--tw-shadow-colored)
    }

    .shadow-primary-900\/5 {
      --tw-shadow-color: rgb(var(--color-primary-900)/0.05);
      --tw-shadow: var(--tw-shadow-colored)
    }

    .ring-1 {
      --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
      --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)
    }

    .ring-1,.ring-8 {
      -webkit-box-shadow: var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000);
      box-shadow: var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)
    }

    .ring-8 {
      --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
      --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(8px + var(--tw-ring-offset-width)) var(--tw-ring-color)
    }

    .ring-black\/5 {
      --tw-ring-color: #0000000d
    }

    .ring-gray-200 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(229 231 235/var(--tw-ring-opacity))
    }

    .ring-gray-900\/10 {
      --tw-ring-color: #1118271a
    }

    .ring-neutral-900\/5 {
      --tw-ring-color: rgb(var(--color-neutral-900)/0.05)
    }

    .ring-white {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(255 255 255/var(--tw-ring-opacity))
    }

    .ring-offset-2 {
      --tw-ring-offset-width: 2px
    }

    .filter {
      -webkit-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
      filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)
    }

    .transition {
      -webkit-transition-property: color,background-color,border-color,text-decoration-color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform,-webkit-filter,-webkit-backdrop-filter;
      transition-property: color,background-color,border-color,text-decoration-color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform,-webkit-filter,-webkit-backdrop-filter;
      transition-property: color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;
      transition-property: color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-box-shadow,-webkit-transform,-webkit-filter,-webkit-backdrop-filter;
      -webkit-transition-timing-function: cubic-bezier(.4,0,.2,1);
      transition-timing-function: cubic-bezier(.4,0,.2,1);
      -webkit-transition-duration: .15s;
      transition-duration: .15s
    }

    .transition-\[background-size\] {
      -webkit-transition-property: background-size;
      transition-property: background-size;
      -webkit-transition-timing-function: cubic-bezier(.4,0,.2,1);
      transition-timing-function: cubic-bezier(.4,0,.2,1);
      -webkit-transition-duration: .15s;
      transition-duration: .15s
    }

    .transition-all {
      -webkit-transition-property: all;
      transition-property: all;
      -webkit-transition-timing-function: cubic-bezier(.4,0,.2,1);
      transition-timing-function: cubic-bezier(.4,0,.2,1);
      -webkit-transition-duration: .15s;
      transition-duration: .15s
    }

    .transition-colors {
      -webkit-transition-property: color,background-color,border-color,text-decoration-color,fill,stroke;
      transition-property: color,background-color,border-color,text-decoration-color,fill,stroke;
      -webkit-transition-timing-function: cubic-bezier(.4,0,.2,1);
      transition-timing-function: cubic-bezier(.4,0,.2,1);
      -webkit-transition-duration: .15s;
      transition-duration: .15s
    }

    .transition-transform {
      -webkit-transition-property: -webkit-transform;
      transition-property: -webkit-transform;
      transition-property: transform;
      transition-property: transform,-webkit-transform;
      -webkit-transition-timing-function: cubic-bezier(.4,0,.2,1);
      transition-timing-function: cubic-bezier(.4,0,.2,1);
      -webkit-transition-duration: .15s;
      transition-duration: .15s
    }

    .duration-300 {
      -webkit-transition-duration: .3s;
      transition-duration: .3s
    }

    .duration-500 {
      -webkit-transition-duration: .5s;
      transition-duration: .5s
    }

    .ease-in-out {
      -webkit-transition-timing-function: cubic-bezier(.4,0,.2,1);
      transition-timing-function: cubic-bezier(.4,0,.2,1)
    }

    .\[hyphens\:auto\] {
      -webkit-hyphens: auto;
      -ms-hyphens: auto;
      hyphens: auto
    }

    .\[word-break\:break-word\] {
      word-break: break-word
    }

    /*! Hugo Blox Components | https://hugoblox.com */
    :root {
      --color-neutral-50: 250 250 250;
      --color-neutral-100: 245 245 245;
      --color-neutral-200: 229 229 229;
      --color-neutral-300: 212 212 212;
      --color-neutral-400: 163 163 163;
      --color-neutral-500: 115 115 115;
      --color-neutral-600: 82 82 82;
      --color-neutral-700: 64 64 64;
      --color-neutral-800: 38 38 38;
      --color-neutral-900: 23 23 23;
      --color-neutral-950: 10 10 10;
      --color-secondary-50: 250 250 250;
      --color-secondary-100: 244 244 245;
      --color-secondary-200: 228 228 231;
      --color-secondary-300: 212 212 216;
      --color-secondary-400: 161 161 170;
      --color-secondary-500: 113 113 122;
      --color-secondary-600: 82 82 91;
      --color-secondary-700: 63 63 70;
      --color-secondary-800: 39 39 42;
      --color-secondary-900: 24 24 27;
      --color-secondary-950: 9 9 11
    }

    .hbb-section {
      padding-top: 6rem;
      padding-bottom: 6rem
    }

    .section-subheading {
      font-size: 1.25rem;
      font-weight: 700
    }

    .home-section-bg {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: -1
    }

    .home-section-bg.bg-image {
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: cover
    }

    .bg-video {
      position: absolute;
      top: 0;
      max-height: none
    }

    .bg-video.flip {
      -webkit-transform: rotateY(180deg);
      transform: rotateY(180deg)
    }

    .parallax {
      background-attachment: fixed
    }

    .powered-by a {
      --tw-text-opacity: 1;
      color: rgb(37 99 235/var(--tw-text-opacity));
      text-decoration-line: underline
    }

    .powered-by a:hover {
      --tw-text-opacity: 1;
      color: rgb(30 64 175/var(--tw-text-opacity))
    }

    :is(.dark .powered-by a) {
      --tw-text-opacity: 1;
      color: rgb(147 197 253/var(--tw-text-opacity))
    }

    :is(.dark .powered-by a:hover) {
      --tw-text-opacity: 1;
      color: rgb(191 219 254/var(--tw-text-opacity))
    }

    .page-wrapper {
      min-height: 100vh;
      display: grid;
      grid-template-rows: auto 1fr auto;
      grid-template-columns: 100%
    }

    .page-footer,.page-header {
      -ms-flex-negative: 0;
      flex-shrink: 0
    }

    .page-body {
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1
    }

    .article-header {
      position: relative;
      clear: both
    }

    .article-banner {
      width: 100%;
      height: 260px;
      -o-object-fit: cover;
      object-fit: cover
    }

    .featured-image-wrapper {
      position: relative;
      padding-left: 0;
      padding-right: 0
    }

    .featured-image {
      position: relative;
      width: 100%;
      display: block;
      margin: 0 auto
    }

    .article-header-caption {
      position: absolute;
      bottom: 0;
      right: 0;
      margin: 0 auto;
      padding: 2px 5px;
      color: #fff;
      font-size: .7em;
      background: #000;
      text-align: right;
      z-index: 5;
      opacity: .65;
      border-radius: 5px 0 0
    }

    @media (min-width: 64em) {
      .article-header-caption {
        padding:5px 10px
      }
    }

    .article-header-caption a {
      color: #fff;
      text-decoration: none
    }

    #page-bg {
      position: fixed;
      left: 0;
      right: 0;
      height: 100%;
      width: 100%;
      z-index: -1;
      display: block
    }

    .backlink {
      font-size: .75rem;
      font-weight: 500;
      --tw-text-opacity: 1;
      color: rgb(107 114 128/var(--tw-text-opacity))
    }

    .backlink:hover {
      --tw-text-opacity: 1;
      color: rgb(17 24 39/var(--tw-text-opacity))
    }

    @media (prefers-contrast:more) {
      .backlink {
        --tw-text-opacity: 1;
        color: rgb(31 41 55/var(--tw-text-opacity))
      }
    }

    :is(.dark .backlink) {
      --tw-text-opacity: 1;
      color: rgb(156 163 175/var(--tw-text-opacity))
    }

    :is(.dark .backlink:hover) {
      --tw-text-opacity: 1;
      color: rgb(243 244 246/var(--tw-text-opacity))
    }

    @media (prefers-contrast:more) {
      :is(.dark .backlink) {
        --tw-text-opacity: 1;
        color: rgb(249 250 251/var(--tw-text-opacity))
      }
    }

    details>summary {
      cursor: pointer;
      font-weight: 600;
      --tw-text-opacity: 1;
      color: rgb(var(--color-primary-700)/var(--tw-text-opacity))
    }

    :is(.dark details>summary) {
      --tw-text-opacity: 1;
      color: rgb(var(--color-primary-300)/var(--tw-text-opacity))
    }

    ul.task-list {
      list-style: none
    }

    ul.task-list li input[type=checkbox] {
      margin-right: .5rem
    }

    ul.task-list input[type=checkbox]:checked {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      width: 1em;
      height: 1em;
      border: none;
      background: initial;
      position: relative
    }

    ul.task-list input[type=checkbox]:not(:checked) {
      width: .9em;
      height: .9em
    }

    ul.task-list input[type=checkbox]:checked:after {
      content: "✅"
    }

    .highlight {
      position: relative;
      z-index: 0
    }

    .highlight:hover>.copy-button {
      visibility: visible
    }

    .copy-button {
      visibility: hidden;
      position: absolute;
      right: 0;
      top: 0;
      z-index: 10;
      width: 5rem;
      cursor: pointer;
      white-space: nowrap;
      border-bottom-left-radius: .375rem;
      border-top-right-radius: .375rem;
      --tw-bg-opacity: 1;
      background-color: rgb(var(--color-neutral-200)/var(--tw-bg-opacity));
      padding-top: .25rem;
      padding-bottom: .25rem;
      font-family: ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;
      font-size: .875rem;
      --tw-text-opacity: 1;
      color: rgb(var(--color-neutral-700)/var(--tw-text-opacity));
      opacity: .9
    }

    :is(.dark .copy-button) {
      --tw-bg-opacity: 1;
      background-color: rgb(var(--color-neutral-600)/var(--tw-bg-opacity));
      --tw-text-opacity: 1;
      color: rgb(var(--color-neutral-200)/var(--tw-text-opacity))
    }

    .copy-button:active,.copy-button:active:hover,.copy-button:focus,.copy-button:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(var(--color-primary-100)/var(--tw-bg-opacity))
    }

    :is(.dark .copy-button:active),:is(.dark .copy-button:active:hover),:is(.dark .copy-button:focus),:is(.dark .copy-button:hover) {
      --tw-bg-opacity: 1;
      background-color: rgb(var(--color-primary-600)/var(--tw-bg-opacity))
    }

    @media (max-width: 1024px) {
      .hb-sidebar-container {
        position:fixed;
        top: 0;
        bottom: 0;
        z-index: 15;
        width: 100%;
        -ms-scroll-chaining: none;
        overscroll-behavior: contain;
        padding-top: calc(var(--navbar-height));
        contain: layout style;
        -webkit-transition: -webkit-transform .8s cubic-bezier(.52,.16,.04,1);
        transition: -webkit-transform .8s cubic-bezier(.52,.16,.04,1);
        transition: transform .8s cubic-bezier(.52,.16,.04,1);
        transition: transform .8s cubic-bezier(.52,.16,.04,1),-webkit-transform .8s cubic-bezier(.52,.16,.04,1);
        will-change: transform,opacity;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden
      }
    }

    .hb-sidebar-container {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column
    }

    @media print {
      .hb-sidebar-container {
        display: none
      }
    }

    @media (min-width: 1024px) {
      .hb-sidebar-container {
        top:4rem;
        width: 16rem;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        -ms-flex-item-align: start;
        align-self: flex-start
      }
    }

    .hb-sidebar-container li>div {
      height: 0
    }

    .hb-sidebar-container li.open>div {
      height: auto;
      padding-top: .25rem
    }

    .hb-sidebar-container li.open>a>span>svg>path {
      --tw-rotate: 90deg;
      -webkit-transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
    }

    .hb-sidebar-list {
      position: relative;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      gap: .25rem
    }

    .hb-sidebar-list:before {
      position: absolute;
      top: .25rem;
      bottom: .25rem;
      width: 1px;
      --tw-bg-opacity: 1;
      background-color: rgb(229 231 235/var(--tw-bg-opacity));
      --tw-content: "";
      content: var(--tw-content)
    }

    :is([dir=ltr] .hb-sidebar-list) {
      margin-left: .75rem;
      padding-left: .75rem
    }

    :is([dir=ltr] .hb-sidebar-list):before {
      content: var(--tw-content);
      left: 0
    }

    :is([dir=rtl] .hb-sidebar-list) {
      margin-right: .75rem;
      padding-right: .75rem
    }

    :is([dir=rtl] .hb-sidebar-list):before {
      content: var(--tw-content);
      right: 0
    }

    :is(.dark .hb-sidebar-list):before {
      content: var(--tw-content);
      --tw-bg-opacity: 1;
      background-color: rgb(var(--color-neutral-700)/var(--tw-bg-opacity))
    }

    .hb-scrollbar {
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      overflow-y: auto;
      overflow-x: hidden;
      padding: 1rem;
      scrollbar-width: thin;
      scrollbar-color: oklch(55.55% 0 0/40%) #0000;
      scrollbar-gutter: stable
    }

    .hb-scrollbar::-webkit-scrollbar {
      height: .75rem;
      width: .75rem
    }

    .hb-scrollbar::-webkit-scrollbar-track {
      background-color: initial
    }

    .hb-scrollbar::-webkit-scrollbar-thumb {
      border-radius: 10px
    }

    .hb-scrollbar:hover::-webkit-scrollbar-thumb {
      border: 3px solid #0000;
      background-color: var(--tw-shadow-color);
      background-clip: content-box;
      --tw-shadow-color: rgb(var(--color-neutral-500)/0.2);
      --tw-shadow: var(--tw-shadow-colored)
    }

    .hb-scrollbar:hover::-webkit-scrollbar-thumb:hover {
      --tw-shadow-color: rgb(var(--color-neutral-500)/0.4);
      --tw-shadow: var(--tw-shadow-colored)
    }

    .hb-docs-link {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      cursor: pointer;
      gap: .5rem;
      border-radius: .25rem;
      padding: .375rem .5rem;
      font-size: .875rem;
      --tw-text-opacity: 1;
      color: rgb(107 114 128/var(--tw-text-opacity));
      -webkit-transition-property: color,background-color,border-color,text-decoration-color,fill,stroke;
      transition-property: color,background-color,border-color,text-decoration-color,fill,stroke;
      -webkit-transition-timing-function: cubic-bezier(.4,0,.2,1);
      transition-timing-function: cubic-bezier(.4,0,.2,1);
      -webkit-transition-duration: .15s;
      transition-duration: .15s;
      word-break: break-word;
      -webkit-tap-highlight-color: transparent;
      -webkit-touch-callout: none
    }

    .hb-docs-link:before {
      opacity: .25;
      --tw-content: "#";
      content: var(--tw-content)
    }

    .hb-docs-link:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(243 244 246/var(--tw-bg-opacity));
      --tw-text-opacity: 1;
      color: rgb(17 24 39/var(--tw-text-opacity))
    }

    :is(.dark .hb-docs-link) {
      --tw-text-opacity: 1;
      color: rgb(209 213 219/var(--tw-text-opacity))
    }

    :is(.dark .hb-docs-link:hover) {
      background-color: rgb(var(--color-primary-100)/.05);
      --tw-text-opacity: 1;
      color: rgb(249 250 251/var(--tw-text-opacity))
    }

    .hb-sidebar-mobile-menu {
      -webkit-transition: background-color .5s ease;
      transition: background-color .5s ease
    }

    .hb-sidebar-mobile-toc {
      position: relative;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      gap: .25rem
    }

    .hb-sidebar-mobile-toc:before {
      position: absolute;
      top: .25rem;
      bottom: .25rem;
      width: 1px;
      --tw-bg-opacity: 1;
      background-color: rgb(229 231 235/var(--tw-bg-opacity));
      --tw-content: "";
      content: var(--tw-content)
    }

    :is([dir=ltr] .hb-sidebar-mobile-toc) {
      margin-left: .75rem;
      padding-left: .75rem
    }

    :is([dir=ltr] .hb-sidebar-mobile-toc):before {
      content: var(--tw-content);
      left: 0
    }

    :is([dir=rtl] .hb-sidebar-mobile-toc) {
      margin-right: .75rem;
      padding-right: .75rem
    }

    :is([dir=rtl] .hb-sidebar-mobile-toc):before {
      content: var(--tw-content);
      right: 0
    }

    :is(.dark .hb-sidebar-mobile-toc):before {
      content: var(--tw-content);
      --tw-bg-opacity: 1;
      background-color: rgb(var(--color-neutral-800)/var(--tw-bg-opacity))
    }

    .hb-sidebar-custom-link {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      cursor: pointer;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      gap: .5rem;
      border-radius: .25rem;
      padding: .375rem .5rem;
      font-size: .875rem;
      -webkit-transition-property: color,background-color,border-color,text-decoration-color,fill,stroke;
      transition-property: color,background-color,border-color,text-decoration-color,fill,stroke;
      -webkit-transition-timing-function: cubic-bezier(.4,0,.2,1);
      transition-timing-function: cubic-bezier(.4,0,.2,1);
      -webkit-transition-duration: .15s;
      transition-duration: .15s;
      word-break: break-word;
      -webkit-tap-highlight-color: transparent;
      -webkit-touch-callout: none
    }

    div.mermaid {
      width: 100%;
      margin-bottom: 1rem
    }

    div.chart,div.mermaid svg {
      margin-left: auto;
      margin-right: auto
    }

    div.chart {
      max-width: 100%;
      margin-bottom: 1rem;
      overflow-x: auto
    }

    .hb-steps {
      margin-left: 1rem;
      margin-bottom: 3rem;
      border-left-width: 1px;
      --tw-border-opacity: 1;
      border-color: rgb(229 231 235/var(--tw-border-opacity));
      padding-left: 1.5rem;
      counter-reset: hb step
    }

    :is(.dark .hb-steps) {
      --tw-border-opacity: 1;
      border-color: rgb(var(--color-neutral-600)/var(--tw-border-opacity))
    }

    .hb-steps h3 {
      counter-increment: hb-step
    }

    .hb-steps h3:before {
      position: absolute;
      height: 33px;
      width: 33px;
      border-radius: 9999px;
      border-width: 4px;
      --tw-border-opacity: 1;
      border-color: rgb(255 255 255/var(--tw-border-opacity))
    }

    :is(.dark .hb-steps h3):before {
      --tw-border-opacity: 1;
      border-color: rgb(203 213 225/var(--tw-border-opacity))
    }

    .hb-steps h3:before {
      --tw-bg-opacity: 1;
      background-color: rgb(243 244 246/var(--tw-bg-opacity))
    }

    :is(.dark .hb-steps h3):before {
      --tw-bg-opacity: 1;
      background-color: rgb(23 24 28/var(--tw-bg-opacity))
    }

    .hb-steps h3:before {
      text-align: center;
      text-indent: -1px;
      font-size: 1rem;
      font-weight: 400;
      --tw-text-opacity: 1;
      color: rgb(var(--color-neutral-700)/var(--tw-text-opacity))
    }

    :is(.dark .hb-steps h3):before {
      --tw-text-opacity: 1;
      color: rgb(var(--color-neutral-200)/var(--tw-text-opacity))
    }

    .hb-steps h3:before {
      margin-top: 3px;
      margin-left: -41px;
      content: counter(hb-step)
    }

    :root {
      --hb-cols: 2
    }

    .hb-cards {
      grid-template-columns: repeat(auto-fill,minmax(max(250px,calc((100% - 2rem)/var(--hb-cols))),1fr))
    }

    .hb-card {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-pack: start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      overflow: hidden;
      border-radius: .5rem;
      border-width: 1px;
      --tw-border-opacity: 1;
      border-color: rgb(229 231 235/var(--tw-border-opacity));
      color: currentColor;
      text-decoration-line: none;
      -webkit-transition-property: all;
      transition-property: all;
      -webkit-transition-timing-function: cubic-bezier(.4,0,.2,1);
      transition-timing-function: cubic-bezier(.4,0,.2,1);
      -webkit-transition-duration: .2s;
      transition-duration: .2s
    }

    .hb-card,.hb-card:hover {
      --tw-shadow-color: #f3f4f6;
      --tw-shadow: var(--tw-shadow-colored)
    }

    .hb-card:active {
      --tw-shadow: 0 1px 2px 0 #0000000d;
      --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
      --tw-shadow-color: #e5e7eb;
      --tw-shadow: var(--tw-shadow-colored)
    }

    .hb-card:active,:is(.dark .hb-card) {
      -webkit-box-shadow: var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);
      box-shadow: var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
    }

    :is(.dark .hb-card),:is(.dark .hb-card:hover) {
      --tw-shadow: 0 0 #0000;
      --tw-shadow-colored: 0 0 #0000
    }

    .hb-card,:is(.dark .hb-card:hover) {
      -webkit-box-shadow: var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);
      box-shadow: var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
    }

    .hb-card {
      background-color: initial;
      --tw-shadow: 0 1px 2px 0 #0000000d;
      --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color)
    }

    .hb-card:hover {
      --tw-border-opacity: 1;
      border-color: rgb(209 213 219/var(--tw-border-opacity));
      --tw-bg-opacity: 1;
      background-color: rgb(248 250 252/var(--tw-bg-opacity));
      --tw-shadow: 0 4px 6px -1px #0000001a,0 2px 4px -2px #0000001a;
      --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);
      -webkit-box-shadow: var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);
      box-shadow: var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
    }

    :is(.dark .hb-card) {
      --tw-border-opacity: 1;
      border-color: rgb(var(--color-neutral-700)/var(--tw-border-opacity))
    }

    :is(.dark .hb-card:hover) {
      --tw-border-opacity: 1;
      border-color: rgb(var(--color-neutral-600)/var(--tw-border-opacity));
      --tw-bg-opacity: 1;
      background-color: rgb(var(--color-neutral-800)/var(--tw-bg-opacity))
    }

    .hb-card-title {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: start;
      -ms-flex-align: start;
      align-items: flex-start;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      gap: .5rem;
      font-weight: 600;
      color: rgb(55 65 81/var(--tw-text-opacity))
    }

    .hb-card-title,.hb-card-title:hover {
      --tw-text-opacity: 1
    }

    .hb-card-title:hover {
      color: rgb(17 24 39/var(--tw-text-opacity))
    }

    :is(.dark .hb-card-title) {
      --tw-text-opacity: 1;
      color: rgb(var(--color-neutral-200)/var(--tw-text-opacity))
    }

    :is(.dark .hb-card-title:hover) {
      --tw-text-opacity: 1;
      color: rgb(var(--color-neutral-50)/var(--tw-text-opacity))
    }

    .hb-card-subtitle {
      margin-bottom: 1rem;
      margin-top: .5rem;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      padding-left: 1rem;
      padding-right: 1rem;
      font-size: .875rem;
      font-weight: 400;
      --tw-text-opacity: 1;
      color: rgb(107 114 128/var(--tw-text-opacity))
    }

    :is(.dark .hb-card-subtitle) {
      --tw-text-opacity: 1;
      color: rgb(156 163 175/var(--tw-text-opacity))
    }

    .hb-card:hover svg {
      color: currentcolor
    }

    .hb-card svg {
      --tw-text-opacity: 1;
      color: rgb(var(--color-neutral-700)/var(--tw-text-opacity));
      width: 1.5rem;
      -webkit-transition: color .3s ease;
      transition: color .3s ease
    }

    .hb-card p {
      margin-top: .5rem
    }

    .dark .hb-card svg {
      --tw-text-opacity: 1;
      color: rgb(var(--color-neutral-300)/var(--tw-text-opacity))
    }

    .dark .hb-card:hover svg {
      color: currentcolor
    }

    .resume-biography #profile {
      text-align: center;
      padding: 30px 10px;
      position: relative
    }

    .resume-biography .avatar {
      width: auto;
      height: auto;
      max-width: 225px;
      max-height: 225px;
      -o-object-fit: cover;
      object-fit: cover
    }

    .resume-biography .network-icon {
      display: -webkit-inline-box;
      display: -ms-inline-flexbox;
      display: inline-flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-direction: row;
      flex-direction: row;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      list-style: none;
      padding: 0;
      margin: 0
    }

    .resume-biography #profile .network-icon {
      margin-top: .5rem
    }

    .resume-biography .network-icon li {
      margin-right: 10px
    }

    @media (max-width: 640px) {
      .resume-biography .network-icon li {
        margin-right:12px
      }
    }

    .resume-biography .network-icon li:last-of-type {
      margin-right: 0
    }

    .resume-biography .network-icon li:hover {
      -webkit-transform: scale(1.2);
      transform: scale(1.2)
    }

    .resume-biography .big-icon {
      font-size: 2rem
    }

    .resume-biography .ul-edu li .description p.course,.resume-biography .ul-interests li {
      font-size: .9rem
    }

    .resume-biography .ul-edu li .description p.institution {
      font-size: .75rem
    }

    .resume-biography .network-icon .big-icon {
      font-size: 1.5rem
    }

    .resume-biography .bio-text {
      max-width: 680px
    }

    .avatar-wrapper {
      position: relative;
      width: 150px;
      height: 150px;
      margin-left: auto;
      margin-right: auto
    }

    .avatar-emoji {
      position: absolute;
      width: 40px;
      height: 40px;
      line-height: 40px;
      border-radius: 100%;
      bottom: 0;
      right: 0;
      text-align: center;
      font-size: 20px;
      background-color: #fff;
      color: #000;
      -webkit-box-shadow: 0 10px 20px #0000000a,0 2px 6px #0000000a,0 0 1px #0000000a;
      box-shadow: 0 10px 20px #0000000a,0 2px 6px #0000000a,0 0 1px #0000000a
    }

    .dark .avatar-emoji {
      background-color: #000;
      -webkit-box-shadow: 0 10px 20px #0000000a,0 2px 6px #0000000a,0 0 1px #fffffff5;
      box-shadow: 0 10px 20px #0000000a,0 2px 6px #0000000a,0 0 1px #fffffff5
    }

    .skills-content {
      margin-bottom: 15px
    }

    .skills-name {
      margin-bottom: 6px;
      font-size: 1rem;
      letter-spacing: 1px;
      text-transform: uppercase
    }

    .skills-description {
      margin-bottom: 6px;
      font-size: .7rem;
      text-transform: none
    }

    .skills-icon {
      margin-right: .5em
    }

    .skills-wrapper {
      position: relative;
      overflow: hidden;
      width: 100%;
      height: 10px;
      border: 1px solid #a8e9e9;
      border-radius: 10px
    }

    .skills-percent {
      position: absolute;
      width: 60%;
      height: 10px;
      background-color: #3cb5b5
    }

    .navbar {
      position: relative;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between
    }

    .navbar-brand {
      font-size: 1.25rem;
      font-weight: 600;
      --tw-text-opacity: 1;
      color: rgb(0 0 0/var(--tw-text-opacity))
    }

    :is(.dark .navbar-brand) {
      --tw-text-opacity: 1;
      color: rgb(255 255 255/var(--tw-text-opacity))
    }

    .navbar-brand svg {
      height: 1em;
      max-width: 100%
    }

    .navbar-brand img,.navbar-brand svg {
      display: inline-block;
      max-height: 100%;
      width: auto
    }

    input#nav-toggle:checked+label #show-button {
      display: none
    }

    input#nav-toggle:checked+label #hide-button,input#nav-toggle:checked~#nav-menu {
      display: block
    }

    #site-header.header {
      --tw-bg-opacity: 1;
      background-color: rgb(255 255 255/var(--tw-bg-opacity));
      padding-top: .75rem;
      padding-bottom: .75rem;
      --tw-shadow: 0 1px 3px 0 #0000001a,0 1px 2px -1px #0000001a;
      --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);
      -webkit-box-shadow: var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);
      box-shadow: var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
    }

    :is(.dark #site-header.header) {
      --tw-bg-opacity: 1;
      background-color: rgb(39 39 42/var(--tw-bg-opacity))
    }

    .navbar-nav {
      text-align: center
    }

    @media (min-width: 1024px) {
      .navbar-nav {
        text-align:left
      }
    }

    .nav-link {
      display: block;
      padding: .75rem;
      font-weight: 600;
      -webkit-transition-property: color,background-color,border-color,text-decoration-color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform,-webkit-filter,-webkit-backdrop-filter;
      transition-property: color,background-color,border-color,text-decoration-color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform,-webkit-filter,-webkit-backdrop-filter;
      transition-property: color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;
      transition-property: color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-box-shadow,-webkit-transform,-webkit-filter,-webkit-backdrop-filter;
      -webkit-transition-timing-function: cubic-bezier(.4,0,.2,1);
      transition-timing-function: cubic-bezier(.4,0,.2,1);
      -webkit-transition-duration: .15s;
      transition-duration: .15s
    }

    .nav-link:hover {
      --tw-text-opacity: 1;
      color: rgb(var(--color-primary-700)/var(--tw-text-opacity))
    }

    :is(.dark .nav-link) {
      --tw-text-opacity: 1;
      color: rgb(255 255 255/var(--tw-text-opacity))
    }

    :is(.dark .nav-link:hover) {
      --tw-text-opacity: 1;
      color: rgb(var(--color-primary-300)/var(--tw-text-opacity))
    }

    @media (min-width: 1024px) {
      .nav-link {
        padding:.75rem .5rem
      }
    }

    .nav-dropdown {
      margin-right: 0
    }

    .nav-dropdown>svg {
      pointer-events: none
    }

    .nav-dropdown.active .nav-dropdown-list {
      display: block
    }

    .nav-dropdown-list {
      z-index: 10;
      display: none;
      min-width: 180px;
      border-radius: .25rem;
      --tw-bg-opacity: 1;
      background-color: rgb(255 255 255/var(--tw-bg-opacity));
      padding-top: 1rem;
      padding-bottom: 1rem;
      --tw-shadow: 0 1px 3px 0 #0000001a,0 1px 2px -1px #0000001a;
      --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);
      -webkit-box-shadow: var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);
      box-shadow: var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
    }

    :is(.dark .nav-dropdown-list) {
      --tw-bg-opacity: 1;
      background-color: rgb(15 23 42/var(--tw-bg-opacity))
    }

    @media (min-width: 1024px) {
      .nav-dropdown-list {
        visibility:hidden;
        position: absolute;
        display: block;
        opacity: 0
      }
    }

    .nav-dropdown-item {
      padding-left: 1rem;
      padding-right: 1rem
    }

    :is(.dark .nav-dropdown-item:hover) {
      --tw-bg-opacity: 1;
      background-color: rgb(var(--color-primary-500)/var(--tw-bg-opacity))
    }

    .nav-dropdown-item:not(:last-child) {
      margin-bottom: .5rem
    }

    .nav-dropdown-link {
      display: block;
      padding-top: .25rem;
      padding-bottom: .25rem;
      font-weight: 600;
      -webkit-transition-property: color,background-color,border-color,text-decoration-color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform,-webkit-filter,-webkit-backdrop-filter;
      transition-property: color,background-color,border-color,text-decoration-color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform,-webkit-filter,-webkit-backdrop-filter;
      transition-property: color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;
      transition-property: color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-box-shadow,-webkit-transform,-webkit-filter,-webkit-backdrop-filter;
      -webkit-transition-timing-function: cubic-bezier(.4,0,.2,1);
      transition-timing-function: cubic-bezier(.4,0,.2,1);
      -webkit-transition-duration: .15s;
      transition-duration: .15s
    }

    .nav-dropdown-link:hover {
      --tw-text-opacity: 1;
      color: rgb(var(--color-primary-700)/var(--tw-text-opacity))
    }

    :is(.dark .nav-dropdown-link),:is(.dark .nav-dropdown-link:hover) {
      --tw-text-opacity: 1;
      color: rgb(255 255 255/var(--tw-text-opacity))
    }

    .hb-attachment-link {
      margin-right: .25rem;
      margin-bottom: .25rem;
      display: inline-block;
      font-weight: 700;
      text-transform: uppercase;
      --tw-text-opacity: 1;
      color: rgb(var(--color-primary-600)/var(--tw-text-opacity));
      -webkit-transition-property: all;
      transition-property: all;
      -webkit-transition-timing-function: cubic-bezier(.4,0,.2,1);
      transition-timing-function: cubic-bezier(.4,0,.2,1);
      -webkit-transition-duration: .15s;
      transition-duration: .15s;
      -webkit-transition-timing-function: linear;
      transition-timing-function: linear
    }

    .hb-attachment-link,.hb-attachment-link:focus {
      outline: 2px solid #0000;
      outline-offset: 2px
    }

    :is(.dark .hb-attachment-link) {
      --tw-text-opacity: 1;
      color: rgb(var(--color-primary-400)/var(--tw-text-opacity))
    }

    .hb-attachment-link-small {
      padding: .25rem .75rem;
      font-size: .75rem
    }

    .hb-attachment-link-large {
      padding: .75rem 2rem
    }

    html:not(.dark) .highlight .chroma .err {
      color: #a61717;
      background-color: #e3d2d2
    }

    html:not(.dark) .highlight .chroma .lntd {
      vertical-align: top;
      padding: 0;
      margin: 0;
      border: 0
    }

    html:not(.dark) .highlight .chroma .lntable {
      border-spacing: 0;
      padding: 0;
      margin: 0;
      border: 0
    }

    html:not(.dark) .highlight .chroma .hl {
      background-color: #ffc
    }

    html:not(.dark) .highlight .chroma .ln,html:not(.dark) .highlight .chroma .lnt {
      white-space: pre;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      margin-right: .4em;
      padding: 0 .4em;
      color: #7f7f7f
    }

    html:not(.dark) .highlight .chroma .line {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex
    }

    html:not(.dark) .highlight .chroma .k,html:not(.dark) .highlight .chroma .kc,html:not(.dark) .highlight .chroma .kd,html:not(.dark) .highlight .chroma .kn,html:not(.dark) .highlight .chroma .kp,html:not(.dark) .highlight .chroma .kr {
      color: #000;
      font-weight: 700
    }

    html:not(.dark) .highlight .chroma .kt {
      color: #458;
      font-weight: 700
    }

    html:not(.dark) .highlight .chroma .na {
      color: teal
    }

    html:not(.dark) .highlight .chroma .nb {
      color: #0086b3
    }

    html:not(.dark) .highlight .chroma .bp {
      color: #999
    }

    html:not(.dark) .highlight .chroma .nc {
      color: #458;
      font-weight: 700
    }

    html:not(.dark) .highlight .chroma .no {
      color: teal
    }

    html:not(.dark) .highlight .chroma .nd {
      color: #3c5d5d;
      font-weight: 700
    }

    html:not(.dark) .highlight .chroma .ni {
      color: purple
    }

    html:not(.dark) .highlight .chroma .ne,html:not(.dark) .highlight .chroma .nf {
      color: #900;
      font-weight: 700
    }

    html:not(.dark) .highlight .chroma .nl {
      color: #900;
      font-weight: 700
    }

    html:not(.dark) .highlight .chroma .nn {
      color: #555
    }

    html:not(.dark) .highlight .chroma .nt {
      color: navy
    }

    html:not(.dark) .highlight .chroma .nv,html:not(.dark) .highlight .chroma .vc,html:not(.dark) .highlight .chroma .vg,html:not(.dark) .highlight .chroma .vi {
      color: teal
    }

    html:not(.dark) .highlight .chroma .dl,html:not(.dark) .highlight .chroma .s,html:not(.dark) .highlight .chroma .s2,html:not(.dark) .highlight .chroma .sa,html:not(.dark) .highlight .chroma .sb,html:not(.dark) .highlight .chroma .sc,html:not(.dark) .highlight .chroma .sd,html:not(.dark) .highlight .chroma .se,html:not(.dark) .highlight .chroma .sh,html:not(.dark) .highlight .chroma .si,html:not(.dark) .highlight .chroma .sx {
      color: #d14
    }

    html:not(.dark) .highlight .chroma .sr {
      color: #009926
    }

    html:not(.dark) .highlight .chroma .s1 {
      color: #d14
    }

    html:not(.dark) .highlight .chroma .ss {
      color: #990073
    }

    html:not(.dark) .highlight .chroma .il,html:not(.dark) .highlight .chroma .m,html:not(.dark) .highlight .chroma .mb,html:not(.dark) .highlight .chroma .mf,html:not(.dark) .highlight .chroma .mh,html:not(.dark) .highlight .chroma .mi,html:not(.dark) .highlight .chroma .mo {
      color: #099
    }

    html:not(.dark) .highlight .chroma .o,html:not(.dark) .highlight .chroma .ow {
      color: #000;
      font-weight: 700
    }

    html:not(.dark) .highlight .chroma .c,html:not(.dark) .highlight .chroma .c1,html:not(.dark) .highlight .chroma .ch,html:not(.dark) .highlight .chroma .cm {
      color: #998;
      font-style: italic
    }

    html:not(.dark) .highlight .chroma .cp,html:not(.dark) .highlight .chroma .cpf,html:not(.dark) .highlight .chroma .cs {
      color: #999;
      font-weight: 700;
      font-style: italic
    }

    html:not(.dark) .highlight .chroma .gd {
      color: #000;
      background-color: #fdd
    }

    html:not(.dark) .highlight .chroma .ge {
      color: #000;
      font-style: italic
    }

    html:not(.dark) .highlight .chroma .gr {
      color: #a00
    }

    html:not(.dark) .highlight .chroma .gh {
      color: #999
    }

    html:not(.dark) .highlight .chroma .gi {
      color: #000;
      background-color: #dfd
    }

    html:not(.dark) .highlight .chroma .go {
      color: #888
    }

    html:not(.dark) .highlight .chroma .gp {
      color: #555
    }

    html:not(.dark) .highlight .chroma .gs {
      font-weight: 700
    }

    html:not(.dark) .highlight .chroma .gu {
      color: #aaa
    }

    html:not(.dark) .highlight .chroma .gt {
      color: #a00
    }

    html:not(.dark) .highlight .chroma .gl {
      text-decoration: underline
    }

    html:not(.dark) .highlight .chroma .w {
      color: #bbb
    }

    .dark .highlight .chroma .lntd {
      vertical-align: top;
      padding: 0;
      margin: 0;
      border: 0
    }

    .dark .highlight .chroma .lntable {
      border-spacing: 0;
      padding: 0;
      margin: 0;
      border: 0
    }

    .dark .highlight .chroma .hl {
      background-color: #ffc
    }

    .dark .highlight .chroma .ln,.dark .highlight .chroma .lnt {
      white-space: pre;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      margin-right: .4em;
      padding: 0 .4em;
      color: #7f7f7f
    }

    .dark .highlight .chroma .line {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex
    }

    .dark .highlight .chroma .k,.dark .highlight .chroma .kc {
      color: #ff79c6
    }

    .dark .highlight .chroma .kd {
      color: #8be9fd;
      font-style: italic
    }

    .dark .highlight .chroma .kn,.dark .highlight .chroma .kp,.dark .highlight .chroma .kr {
      color: #ff79c6
    }

    .dark .highlight .chroma .kt {
      color: #8be9fd
    }

    .dark .highlight .chroma .na {
      color: #50fa7b
    }

    .dark .highlight .chroma .nb {
      color: #8be9fd;
      font-style: italic
    }

    .dark .highlight .chroma .nc {
      color: #50fa7b
    }

    .dark .highlight .chroma .nf {
      color: #50fa7b
    }

    .dark .highlight .chroma .nl {
      color: #8be9fd;
      font-style: italic
    }

    .dark .highlight .chroma .nt {
      color: #ff79c6
    }

    .dark .highlight .chroma .nv,.dark .highlight .chroma .vc,.dark .highlight .chroma .vg,.dark .highlight .chroma .vi {
      color: #8be9fd;
      font-style: italic
    }

    .dark .highlight .chroma .dl,.dark .highlight .chroma .s,.dark .highlight .chroma .s1,.dark .highlight .chroma .s2,.dark .highlight .chroma .sa,.dark .highlight .chroma .sb,.dark .highlight .chroma .sc,.dark .highlight .chroma .sd,.dark .highlight .chroma .se,.dark .highlight .chroma .sh,.dark .highlight .chroma .si,.dark .highlight .chroma .sr,.dark .highlight .chroma .ss,.dark .highlight .chroma .sx {
      color: #f1fa8c
    }

    .dark .highlight .chroma .il,.dark .highlight .chroma .m,.dark .highlight .chroma .mb,.dark .highlight .chroma .mf,.dark .highlight .chroma .mh,.dark .highlight .chroma .mi,.dark .highlight .chroma .mo {
      color: #bd93f9
    }

    .dark .highlight .chroma .o,.dark .highlight .chroma .ow {
      color: #ff79c6
    }

    .dark .highlight .chroma .c,.dark .highlight .chroma .c1,.dark .highlight .chroma .ch,.dark .highlight .chroma .cm,.dark .highlight .chroma .cs {
      color: #6272a4
    }

    .dark .highlight .chroma .cp,.dark .highlight .chroma .cpf {
      color: #ff79c6
    }

    .dark .highlight .chroma .gd {
      color: #f55
    }

    .dark .highlight .chroma .ge {
      text-decoration: underline
    }

    .dark .highlight .chroma .gh {
      font-weight: 700
    }

    .dark .highlight .chroma .gi {
      color: #50fa7b;
      font-weight: 700
    }

    .dark .highlight .chroma .go {
      color: #44475a
    }

    .dark .highlight .chroma .gu {
      font-weight: 700
    }

    .dark .highlight .chroma .gl {
      text-decoration: underline
    }

    .prose .chroma,.prose pre {
      position: relative;
      border-radius: .375rem;
      --tw-bg-opacity: 1;
      background-color: rgb(var(--color-neutral-50)/var(--tw-bg-opacity));
      --tw-text-opacity: 1;
      color: rgb(var(--color-neutral-700)/var(--tw-text-opacity))
    }

    :is(.dark .prose .chroma),:is(.dark .prose pre) {
      --tw-bg-opacity: 1;
      background-color: rgb(51 65 85/var(--tw-bg-opacity));
      --tw-text-opacity: 1;
      color: rgb(255 255 255/var(--tw-text-opacity))
    }

    :is(.dark .dark\:prose-invert) {
      --tw-prose-body: var(--tw-prose-invert-body);
      --tw-prose-headings: var(--tw-prose-invert-headings);
      --tw-prose-lead: var(--tw-prose-invert-lead);
      --tw-prose-links: var(--tw-prose-invert-links);
      --tw-prose-bold: var(--tw-prose-invert-bold);
      --tw-prose-counters: var(--tw-prose-invert-counters);
      --tw-prose-bullets: var(--tw-prose-invert-bullets);
      --tw-prose-hr: var(--tw-prose-invert-hr);
      --tw-prose-quotes: var(--tw-prose-invert-quotes);
      --tw-prose-quote-borders: var(--tw-prose-invert-quote-borders);
      --tw-prose-captions: var(--tw-prose-invert-captions);
      --tw-prose-kbd: var(--tw-prose-invert-kbd);
      --tw-prose-kbd-shadows: var(--tw-prose-invert-kbd-shadows);
      --tw-prose-code: var(--tw-prose-invert-code);
      --tw-prose-pre-code: var(--tw-prose-invert-pre-code);
      --tw-prose-pre-bg: var(--tw-prose-invert-pre-bg);
      --tw-prose-th-borders: var(--tw-prose-invert-th-borders);
      --tw-prose-td-borders: var(--tw-prose-invert-td-borders)
    }

    :is(.dark .dark\:prose-invert) :where(a):not(:where([class~=not-prose],[class~=not-prose] *)) {
      text-decoration-color: rgb(var(--color-neutral-500)/1)
    }

    :is(.dark .dark\:prose-invert) :where(a):not(:where([class~=not-prose],[class~=not-prose] *)):hover {
      color: rgb(var(--color-primary-300)/1)
    }

    :is(.dark .dark\:prose-invert) :where(mark):not(:where([class~=not-prose],[class~=not-prose] *)) {
      background-color: rgb(var(--color-primary-400)/1);
      color: #000
    }

    @media (min-width: 1024px) {
      .lg\:prose-xl {
        font-size:1.25rem;
        line-height: 1.8
      }

      .lg\:prose-xl :where(p):not(:where([class~=not-prose],[class~=not-prose] *)) {
        margin-top: 1.2em;
        margin-bottom: 1.2em
      }

      .lg\:prose-xl :where([class~=lead]):not(:where([class~=not-prose],[class~=not-prose] *)) {
        font-size: 1.2em;
        line-height: 1.5;
        margin-top: 1em;
        margin-bottom: 1em
      }

      .lg\:prose-xl :where(blockquote):not(:where([class~=not-prose],[class~=not-prose] *)) {
        margin-top: 1.6em;
        margin-bottom: 1.6em;
        padding-left: 1.0666667em
      }

      .lg\:prose-xl :where(h1):not(:where([class~=not-prose],[class~=not-prose] *)) {
        font-size: 2.8em;
        margin-top: 0;
        margin-bottom: .8571429em;
        line-height: 1
      }

      .lg\:prose-xl :where(h2):not(:where([class~=not-prose],[class~=not-prose] *)) {
        font-size: 1.8em;
        margin-top: 1.5555556em;
        margin-bottom: .8888889em;
        line-height: 1.1111111
      }

      .lg\:prose-xl :where(h3):not(:where([class~=not-prose],[class~=not-prose] *)) {
        font-size: 1.5em;
        margin-top: 1.6em;
        margin-bottom: .6666667em;
        line-height: 1.3333333
      }

      .lg\:prose-xl :where(h4):not(:where([class~=not-prose],[class~=not-prose] *)) {
        margin-top: 1.8em;
        margin-bottom: .6em;
        line-height: 1.6
      }

      .lg\:prose-xl :where(img):not(:where([class~=not-prose],[class~=not-prose] *)) {
        margin-top: 2em;
        margin-bottom: 2em
      }

      .lg\:prose-xl :where(picture):not(:where([class~=not-prose],[class~=not-prose] *)) {
        margin-top: 2em;
        margin-bottom: 2em
      }

      .lg\:prose-xl :where(picture>img):not(:where([class~=not-prose],[class~=not-prose] *)) {
        margin-top: 0;
        margin-bottom: 0
      }

      .lg\:prose-xl :where(video):not(:where([class~=not-prose],[class~=not-prose] *)) {
        margin-top: 2em;
        margin-bottom: 2em
      }

      .lg\:prose-xl :where(kbd):not(:where([class~=not-prose],[class~=not-prose] *)) {
        font-size: .9em;
        border-radius: .3125rem;
        padding: .25em .4em
      }

      .lg\:prose-xl :where(code):not(:where([class~=not-prose],[class~=not-prose] *)) {
        font-size: .9em
      }

      .lg\:prose-xl :where(h2 code):not(:where([class~=not-prose],[class~=not-prose] *)) {
        font-size: .8611111em
      }

      .lg\:prose-xl :where(h3 code):not(:where([class~=not-prose],[class~=not-prose] *)) {
        font-size: .9em
      }

      .lg\:prose-xl :where(pre):not(:where([class~=not-prose],[class~=not-prose] *)) {
        font-size: .9em;
        line-height: 1.7777778;
        margin-top: 2em;
        margin-bottom: 2em;
        border-radius: .5rem;
        padding: 1.1111111em 1.3333333em
      }

      .lg\:prose-xl :where(ol):not(:where([class~=not-prose],[class~=not-prose] *)) {
        margin-top: 1.2em;
        margin-bottom: 1.2em;
        padding-left: 1.6em
      }

      .lg\:prose-xl :where(ul):not(:where([class~=not-prose],[class~=not-prose] *)) {
        margin-top: 1.2em;
        margin-bottom: 1.2em;
        padding-left: 1.6em
      }

      .lg\:prose-xl :where(li):not(:where([class~=not-prose],[class~=not-prose] *)) {
        margin-top: .6em;
        margin-bottom: .6em
      }

      .lg\:prose-xl :where(ol>li):not(:where([class~=not-prose],[class~=not-prose] *)) {
        padding-left: .4em
      }

      .lg\:prose-xl :where(ul>li):not(:where([class~=not-prose],[class~=not-prose] *)) {
        padding-left: .4em
      }

      .lg\:prose-xl :where(.lg\:prose-xl>ul>li p):not(:where([class~=not-prose],[class~=not-prose] *)) {
        margin-top: .8em;
        margin-bottom: .8em
      }

      .lg\:prose-xl :where(.lg\:prose-xl>ul>li>:first-child):not(:where([class~=not-prose],[class~=not-prose] *)) {
        margin-top: 1.2em
      }

      .lg\:prose-xl :where(.lg\:prose-xl>ul>li>:last-child):not(:where([class~=not-prose],[class~=not-prose] *)) {
        margin-bottom: 1.2em
      }

      .lg\:prose-xl :where(.lg\:prose-xl>ol>li>:first-child):not(:where([class~=not-prose],[class~=not-prose] *)) {
        margin-top: 1.2em
      }

      .lg\:prose-xl :where(.lg\:prose-xl>ol>li>:last-child):not(:where([class~=not-prose],[class~=not-prose] *)) {
        margin-bottom: 1.2em
      }

      .lg\:prose-xl :where(ul ul,ul ol,ol ul,ol ol):not(:where([class~=not-prose],[class~=not-prose] *)) {
        margin-top: .8em;
        margin-bottom: .8em
      }

      .lg\:prose-xl :where(dl):not(:where([class~=not-prose],[class~=not-prose] *)) {
        margin-top: 1.2em;
        margin-bottom: 1.2em
      }

      .lg\:prose-xl :where(dt):not(:where([class~=not-prose],[class~=not-prose] *)) {
        margin-top: 1.2em
      }

      .lg\:prose-xl :where(dd):not(:where([class~=not-prose],[class~=not-prose] *)) {
        margin-top: .6em;
        padding-left: 1.6em
      }

      .lg\:prose-xl :where(hr):not(:where([class~=not-prose],[class~=not-prose] *)) {
        margin-top: 2.8em;
        margin-bottom: 2.8em
      }

      .lg\:prose-xl :where(hr+*):not(:where([class~=not-prose],[class~=not-prose] *)) {
        margin-top: 0
      }

      .lg\:prose-xl :where(h2+*):not(:where([class~=not-prose],[class~=not-prose] *)) {
        margin-top: 0
      }

      .lg\:prose-xl :where(h3+*):not(:where([class~=not-prose],[class~=not-prose] *)) {
        margin-top: 0
      }

      .lg\:prose-xl :where(h4+*):not(:where([class~=not-prose],[class~=not-prose] *)) {
        margin-top: 0
      }

      .lg\:prose-xl :where(table):not(:where([class~=not-prose],[class~=not-prose] *)) {
        font-size: .9em;
        line-height: 1.5555556
      }

      .lg\:prose-xl :where(thead th):not(:where([class~=not-prose],[class~=not-prose] *)) {
        padding-right: .6666667em;
        padding-bottom: .8888889em;
        padding-left: .6666667em
      }

      .lg\:prose-xl :where(thead th:first-child):not(:where([class~=not-prose],[class~=not-prose] *)) {
        padding-left: 0
      }

      .lg\:prose-xl :where(thead th:last-child):not(:where([class~=not-prose],[class~=not-prose] *)) {
        padding-right: 0
      }

      .lg\:prose-xl :where(tbody td,tfoot td):not(:where([class~=not-prose],[class~=not-prose] *)) {
        padding: .8888889em .6666667em
      }

      .lg\:prose-xl :where(tbody td:first-child,tfoot td:first-child):not(:where([class~=not-prose],[class~=not-prose] *)) {
        padding-left: 0
      }

      .lg\:prose-xl :where(tbody td:last-child,tfoot td:last-child):not(:where([class~=not-prose],[class~=not-prose] *)) {
        padding-right: 0
      }

      .lg\:prose-xl :where(figure):not(:where([class~=not-prose],[class~=not-prose] *)) {
        margin-top: 2em;
        margin-bottom: 2em
      }

      .lg\:prose-xl :where(figure>*):not(:where([class~=not-prose],[class~=not-prose] *)) {
        margin-top: 0;
        margin-bottom: 0
      }

      .lg\:prose-xl :where(figcaption):not(:where([class~=not-prose],[class~=not-prose] *)) {
        font-size: .9em;
        line-height: 1.5555556;
        margin-top: 1em
      }

      .lg\:prose-xl :where(.lg\:prose-xl>:first-child):not(:where([class~=not-prose],[class~=not-prose] *)) {
        margin-top: 0
      }

      .lg\:prose-xl :where(.lg\:prose-xl>:last-child):not(:where([class~=not-prose],[class~=not-prose] *)) {
        margin-bottom: 0
      }
    }

    .placeholder\:text-slate-400::-webkit-input-placeholder {
      --tw-text-opacity: 1;
      color: rgb(148 163 184/var(--tw-text-opacity))
    }

    .placeholder\:text-slate-400::-moz-placeholder {
      --tw-text-opacity: 1;
      color: rgb(148 163 184/var(--tw-text-opacity))
    }

    .placeholder\:text-slate-400:-ms-input-placeholder {
      --tw-text-opacity: 1;
      color: rgb(148 163 184/var(--tw-text-opacity))
    }

    .placeholder\:text-slate-400::-ms-input-placeholder {
      --tw-text-opacity: 1;
      color: rgb(148 163 184/var(--tw-text-opacity))
    }

    .placeholder\:text-slate-400::placeholder {
      --tw-text-opacity: 1;
      color: rgb(148 163 184/var(--tw-text-opacity))
    }

    .first\:mt-0:first-child {
      margin-top: 0
    }

    .focus-within\:ring-2:focus-within {
      --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
      --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
      -webkit-box-shadow: var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000);
      box-shadow: var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)
    }

    .focus-within\:ring-primary-900:focus-within {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(var(--color-primary-900)/var(--tw-ring-opacity))
    }

    .hover\:scale-105:hover {
      --tw-scale-x: 1.05;
      --tw-scale-y: 1.05
    }

    .hover\:scale-105:hover,.hover\:scale-125:hover {
      -webkit-transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
    }

    .hover\:scale-125:hover {
      --tw-scale-x: 1.25;
      --tw-scale-y: 1.25
    }

    .hover\:bg-black:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(0 0 0/var(--tw-bg-opacity))
    }

    .hover\:bg-gray-100:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(243 244 246/var(--tw-bg-opacity))
    }

    .hover\:bg-gray-200:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(229 231 235/var(--tw-bg-opacity))
    }

    .hover\:bg-gray-300:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(209 213 219/var(--tw-bg-opacity))
    }

    .hover\:bg-gray-50:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(249 250 251/var(--tw-bg-opacity))
    }

    .hover\:bg-gray-800\/5:hover {
      background-color: #1f29370d
    }

    .hover\:bg-primary-300:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(var(--color-primary-300)/var(--tw-bg-opacity))
    }

    .hover\:bg-primary-50:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(var(--color-primary-50)/var(--tw-bg-opacity))
    }

    .hover\:bg-primary-500:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(var(--color-primary-500)/var(--tw-bg-opacity))
    }

    .hover\:bg-primary-800:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(var(--color-primary-800)/var(--tw-bg-opacity))
    }

    .hover\:bg-\[length\:100\%_3px\]:hover {
      background-size: 100% 3px
    }

    .hover\:text-gray-800:hover {
      --tw-text-opacity: 1;
      color: rgb(31 41 55/var(--tw-text-opacity))
    }

    .hover\:text-gray-900:hover {
      --tw-text-opacity: 1;
      color: rgb(17 24 39/var(--tw-text-opacity))
    }

    .hover\:text-neutral-300:hover {
      --tw-text-opacity: 1;
      color: rgb(var(--color-neutral-300)/var(--tw-text-opacity))
    }

    .hover\:text-neutral-700:hover {
      --tw-text-opacity: 1;
      color: rgb(var(--color-neutral-700)/var(--tw-text-opacity))
    }

    .hover\:text-primary-600:hover {
      --tw-text-opacity: 1;
      color: rgb(var(--color-primary-600)/var(--tw-text-opacity))
    }

    .hover\:text-primary-700:hover {
      --tw-text-opacity: 1;
      color: rgb(var(--color-primary-700)/var(--tw-text-opacity))
    }

    .hover\:text-white:hover {
      --tw-text-opacity: 1;
      color: rgb(255 255 255/var(--tw-text-opacity))
    }

    .hover\:underline:hover {
      text-decoration-line: underline
    }

    .hover\:no-underline:hover {
      text-decoration-line: none
    }

    .hover\:opacity-100:hover {
      opacity: 1
    }

    .hover\:shadow-none:hover {
      --tw-shadow: 0 0 #0000;
      --tw-shadow-colored: 0 0 #0000;
      -webkit-box-shadow: var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);
      box-shadow: var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
    }

    .hover\:ring-gray-900\/20:hover {
      --tw-ring-color: #11182733
    }

    .focus\:z-10:focus {
      z-index: 10
    }

    .focus\:z-20:focus {
      z-index: 20
    }

    .focus\:text-neutral-700:focus {
      --tw-text-opacity: 1;
      color: rgb(var(--color-neutral-700)/var(--tw-text-opacity))
    }

    .focus\:text-primary-700:focus {
      --tw-text-opacity: 1;
      color: rgb(var(--color-primary-700)/var(--tw-text-opacity))
    }

    .focus\:no-underline:focus {
      text-decoration-line: none
    }

    .focus\:shadow-none:focus {
      --tw-shadow: 0 0 #0000;
      --tw-shadow-colored: 0 0 #0000;
      -webkit-box-shadow: var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);
      box-shadow: var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
    }

    .focus\:outline-none:focus {
      outline: 2px solid #0000;
      outline-offset: 2px
    }

    .focus\:ring-0:focus {
      --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
      --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(var(--tw-ring-offset-width)) var(--tw-ring-color)
    }

    .focus\:ring-0:focus,.focus\:ring-4:focus {
      -webkit-box-shadow: var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000);
      box-shadow: var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)
    }

    .focus\:ring-4:focus {
      --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
      --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color)
    }

    .focus\:ring-gray-200:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(229 231 235/var(--tw-ring-opacity))
    }

    .focus\:ring-primary-300:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(var(--color-primary-300)/var(--tw-ring-opacity))
    }

    .focus-visible\:outline:focus-visible {
      outline-style: solid
    }

    .focus-visible\:outline-2:focus-visible {
      outline-width: 2px
    }

    .focus-visible\:outline-offset-2:focus-visible {
      outline-offset: 2px
    }

    .focus-visible\:outline-primary-500:focus-visible {
      outline-color: rgb(var(--color-primary-500)/1)
    }

    .focus-visible\:outline-primary-600:focus-visible {
      outline-color: rgb(var(--color-primary-600)/1)
    }

    .focus-visible\:ring-2:focus-visible {
      --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
      --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
      -webkit-box-shadow: var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000);
      box-shadow: var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)
    }

    .active\:text-white\/70:active {
      color: #ffffffb3
    }

    .group:hover .group-hover\:-translate-x-\[2px\] {
      --tw-translate-x: -2px
    }

    .group:hover .group-hover\:-translate-x-\[2px\],.group:hover .group-hover\:scale-100 {
      -webkit-transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
    }

    .group:hover .group-hover\:scale-100 {
      --tw-scale-x: 1;
      --tw-scale-y: 1
    }

    .group:hover .group-hover\:scale-110 {
      --tw-scale-x: 1.1;
      --tw-scale-y: 1.1
    }

    .group:hover .group-hover\:scale-110,.group:hover .group-hover\:scale-95 {
      -webkit-transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
    }

    .group:hover .group-hover\:scale-95 {
      --tw-scale-x: .95;
      --tw-scale-y: .95
    }

    .group:hover .group-hover\:bg-\[length\:100\%_10px\] {
      background-size: 100% 10px
    }

    .group:hover .group-hover\:text-primary-500 {
      --tw-text-opacity: 1;
      color: rgb(var(--color-primary-500)/var(--tw-text-opacity))
    }

    .group:hover .group-hover\:text-primary-600 {
      --tw-text-opacity: 1;
      color: rgb(var(--color-primary-600)/var(--tw-text-opacity))
    }

    .group:hover .group-hover\:underline {
      text-decoration-line: underline
    }

    .group:hover .group-hover\:decoration-primary-500 {
      text-decoration-color: rgb(var(--color-primary-500)/1)
    }

    .group:hover .group-hover\:opacity-100 {
      opacity: 1
    }

    :is([dir=ltr] .ltr\:inline) {
      display: inline
    }

    :is([dir=ltr] .ltr\:pl-3) {
      padding-left: .75rem
    }

    :is([dir=ltr] .ltr\:pr-0) {
      padding-right: 0
    }

    :is([dir=ltr] .ltr\:pr-9) {
      padding-right: 2.25rem
    }

    :is([dir=ltr] .ltr\:text-right) {
      text-align: right
    }

    :is([dir=rtl] .rtl\:-ml-4) {
      margin-left: -1rem
    }

    :is([dir=rtl] .rtl\:hidden) {
      display: none
    }

    :is([dir=rtl] .rtl\:-rotate-180) {
      --tw-rotate: -180deg
    }

    :is([dir=rtl] .rtl\:-rotate-180),:is([dir=rtl] .rtl\:rotate-\[270deg\]) {
      -webkit-transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
    }

    :is([dir=rtl] .rtl\:rotate-\[270deg\]) {
      --tw-rotate: 270deg
    }

    :is([dir=rtl] .rtl\:pl-9) {
      padding-left: 2.25rem
    }

    :is([dir=rtl] .rtl\:pr-3) {
      padding-right: .75rem
    }

    :is([dir=rtl] .rtl\:text-left) {
      text-align: left
    }

    @media (prefers-contrast:more) {
      .contrast-more\:text-gray-800 {
        --tw-text-opacity: 1;
        color: rgb(31 41 55/var(--tw-text-opacity))
      }
    }

    :is(.dark .dark\:block) {
      display: block
    }

    :is(.dark .dark\:hidden) {
      display: none
    }

    :is(.dark .dark\:border) {
      border-width: 1px
    }

    :is(.dark .dark\:border-gray-500) {
      --tw-border-opacity: 1;
      border-color: rgb(107 114 128/var(--tw-border-opacity))
    }

    :is(.dark .dark\:border-gray-600) {
      --tw-border-opacity: 1;
      border-color: rgb(75 85 99/var(--tw-border-opacity))
    }

    :is(.dark .dark\:border-gray-700) {
      --tw-border-opacity: 1;
      border-color: rgb(55 65 81/var(--tw-border-opacity))
    }

    :is(.dark .dark\:border-neutral-600) {
      --tw-border-opacity: 1;
      border-color: rgb(var(--color-neutral-600)/var(--tw-border-opacity))
    }

    :is(.dark .dark\:border-neutral-700) {
      --tw-border-opacity: 1;
      border-color: rgb(var(--color-neutral-700)/var(--tw-border-opacity))
    }

    :is(.dark .dark\:border-neutral-700\/50) {
      border-color: rgb(var(--color-neutral-700)/.5)
    }

    :is(.dark .dark\:border-slate-600) {
      --tw-border-opacity: 1;
      border-color: rgb(71 85 105/var(--tw-border-opacity))
    }

    :is(.dark .dark\:border-slate-700) {
      --tw-border-opacity: 1;
      border-color: rgb(51 65 85/var(--tw-border-opacity))
    }

    :is(.dark .dark\:border-white) {
      --tw-border-opacity: 1;
      border-color: rgb(255 255 255/var(--tw-border-opacity))
    }

    :is(.dark .dark\:bg-\[\#1F2938\]) {
      --tw-bg-opacity: 1;
      background-color: rgb(31 41 56/var(--tw-bg-opacity))
    }

    :is(.dark .dark\:bg-black\/80) {
      background-color: #000c
    }

    :is(.dark .dark\:bg-blue-900) {
      --tw-bg-opacity: 1;
      background-color: rgb(30 58 138/var(--tw-bg-opacity))
    }

    :is(.dark .dark\:bg-gray-800) {
      --tw-bg-opacity: 1;
      background-color: rgb(31 41 55/var(--tw-bg-opacity))
    }

    :is(.dark .dark\:bg-gray-900) {
      --tw-bg-opacity: 1;
      background-color: rgb(17 24 39/var(--tw-bg-opacity))
    }

    :is(.dark .dark\:bg-hb-dark) {
      --tw-bg-opacity: 1;
      background-color: rgb(23 24 28/var(--tw-bg-opacity))
    }

    :is(.dark .dark\:bg-neutral-700) {
      --tw-bg-opacity: 1;
      background-color: rgb(var(--color-neutral-700)/var(--tw-bg-opacity))
    }

    :is(.dark .dark\:bg-neutral-800) {
      --tw-bg-opacity: 1;
      background-color: rgb(var(--color-neutral-800)/var(--tw-bg-opacity))
    }

    :is(.dark .dark\:bg-neutral-800\/50) {
      background-color: rgb(var(--color-neutral-800)/.5)
    }

    :is(.dark .dark\:bg-primary-300) {
      --tw-bg-opacity: 1;
      background-color: rgb(var(--color-primary-300)/var(--tw-bg-opacity))
    }

    :is(.dark .dark\:bg-primary-600) {
      --tw-bg-opacity: 1;
      background-color: rgb(var(--color-primary-600)/var(--tw-bg-opacity))
    }

    :is(.dark .dark\:bg-primary-700) {
      --tw-bg-opacity: 1;
      background-color: rgb(var(--color-primary-700)/var(--tw-bg-opacity))
    }

    :is(.dark .dark\:bg-primary-900) {
      --tw-bg-opacity: 1;
      background-color: rgb(var(--color-primary-900)/var(--tw-bg-opacity))
    }

    :is(.dark .dark\:bg-slate-900) {
      --tw-bg-opacity: 1;
      background-color: rgb(15 23 42/var(--tw-bg-opacity))
    }

    :is(.dark .dark\:bg-transparent) {
      background-color: initial
    }

    :is(.dark .dark\:bg-yellow-900) {
      --tw-bg-opacity: 1;
      background-color: rgb(113 63 18/var(--tw-bg-opacity))
    }

    :is(.dark .dark\:bg-zinc-800) {
      --tw-bg-opacity: 1;
      background-color: rgb(39 39 42/var(--tw-bg-opacity))
    }

    :is(.dark .dark\:bg-zinc-800\/50) {
      background-color: #27272a80
    }

    :is(.dark .dark\:bg-zinc-900) {
      --tw-bg-opacity: 1;
      background-color: rgb(24 24 27/var(--tw-bg-opacity))
    }

    :is(.dark .dark\:from-primary-800) {
      --tw-gradient-from: rgb(var(--color-primary-800)/1) var(--tw-gradient-from-position);
      --tw-gradient-to: rgb(var(--color-primary-800)/0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to)
    }

    :is(.dark .dark\:to-primary-900) {
      --tw-gradient-to: rgb(var(--color-primary-900)/1) var(--tw-gradient-to-position)
    }

    :is(.dark .dark\:text-\[\#e2e8f0\]) {
      --tw-text-opacity: 1;
      color: rgb(226 232 240/var(--tw-text-opacity))
    }

    :is(.dark .dark\:text-blue-300) {
      --tw-text-opacity: 1;
      color: rgb(147 197 253/var(--tw-text-opacity))
    }

    :is(.dark .dark\:text-gray-100) {
      --tw-text-opacity: 1;
      color: rgb(243 244 246/var(--tw-text-opacity))
    }

    :is(.dark .dark\:text-gray-300) {
      --tw-text-opacity: 1;
      color: rgb(209 213 219/var(--tw-text-opacity))
    }

    :is(.dark .dark\:text-gray-400) {
      --tw-text-opacity: 1;
      color: rgb(156 163 175/var(--tw-text-opacity))
    }

    :is(.dark .dark\:text-gray-500) {
      --tw-text-opacity: 1;
      color: rgb(107 114 128/var(--tw-text-opacity))
    }

    :is(.dark .dark\:text-gray-600) {
      --tw-text-opacity: 1;
      color: rgb(75 85 99/var(--tw-text-opacity))
    }

    :is(.dark .dark\:text-gray-700) {
      --tw-text-opacity: 1;
      color: rgb(55 65 81/var(--tw-text-opacity))
    }

    :is(.dark .dark\:text-neutral) {
      --tw-text-opacity: 1;
      color: rgb(var(--color-neutral)/var(--tw-text-opacity))
    }

    :is(.dark .dark\:text-neutral-100) {
      --tw-text-opacity: 1;
      color: rgb(var(--color-neutral-100)/var(--tw-text-opacity))
    }

    :is(.dark .dark\:text-neutral-200) {
      --tw-text-opacity: 1;
      color: rgb(var(--color-neutral-200)/var(--tw-text-opacity))
    }

    :is(.dark .dark\:text-neutral-300) {
      --tw-text-opacity: 1;
      color: rgb(var(--color-neutral-300)/var(--tw-text-opacity))
    }

    :is(.dark .dark\:text-neutral-400) {
      --tw-text-opacity: 1;
      color: rgb(var(--color-neutral-400)/var(--tw-text-opacity))
    }

    :is(.dark .dark\:text-primary-200) {
      --tw-text-opacity: 1;
      color: rgb(var(--color-primary-200)/var(--tw-text-opacity))
    }

    :is(.dark .dark\:text-primary-300) {
      --tw-text-opacity: 1;
      color: rgb(var(--color-primary-300)/var(--tw-text-opacity))
    }

    :is(.dark .dark\:text-primary-900) {
      --tw-text-opacity: 1;
      color: rgb(var(--color-primary-900)/var(--tw-text-opacity))
    }

    :is(.dark .dark\:text-slate-100) {
      --tw-text-opacity: 1;
      color: rgb(241 245 249/var(--tw-text-opacity))
    }

    :is(.dark .dark\:text-slate-200) {
      --tw-text-opacity: 1;
      color: rgb(226 232 240/var(--tw-text-opacity))
    }

    :is(.dark .dark\:text-slate-300) {
      --tw-text-opacity: 1;
      color: rgb(203 213 225/var(--tw-text-opacity))
    }

    :is(.dark .dark\:text-slate-400) {
      --tw-text-opacity: 1;
      color: rgb(148 163 184/var(--tw-text-opacity))
    }

    :is(.dark .dark\:text-white) {
      --tw-text-opacity: 1;
      color: rgb(255 255 255/var(--tw-text-opacity))
    }

    :is(.dark .dark\:text-zinc-100) {
      --tw-text-opacity: 1;
      color: rgb(244 244 245/var(--tw-text-opacity))
    }

    :is(.dark .dark\:text-zinc-400) {
      --tw-text-opacity: 1;
      color: rgb(161 161 170/var(--tw-text-opacity))
    }

    :is(.dark .dark\:text-zinc-500) {
      --tw-text-opacity: 1;
      color: rgb(113 113 122/var(--tw-text-opacity))
    }

    :is(.dark .dark\:ring-0) {
      --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
      --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(var(--tw-ring-offset-width)) var(--tw-ring-color);
      -webkit-box-shadow: var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000);
      box-shadow: var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)
    }

    :is(.dark .dark\:ring-gray-300) {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(209 213 219/var(--tw-ring-opacity))
    }

    :is(.dark .dark\:ring-gray-900) {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(17 24 39/var(--tw-ring-opacity))
    }

    :is(.dark .dark\:ring-white\/20) {
      --tw-ring-color: #fff3
    }

    :is(.dark .dark\:hover\:bg-gray-100\/5:hover) {
      background-color: #f3f4f60d
    }

    :is(.dark .dark\:hover\:bg-gray-700:hover) {
      --tw-bg-opacity: 1;
      background-color: rgb(55 65 81/var(--tw-bg-opacity))
    }

    :is(.dark .dark\:hover\:bg-primary-100\/5:hover) {
      background-color: rgb(var(--color-primary-100)/.05)
    }

    :is(.dark .dark\:hover\:bg-primary-400:hover) {
      --tw-bg-opacity: 1;
      background-color: rgb(var(--color-primary-400)/var(--tw-bg-opacity))
    }

    :is(.dark .dark\:hover\:bg-primary-700:hover) {
      --tw-bg-opacity: 1;
      background-color: rgb(var(--color-primary-700)/var(--tw-bg-opacity))
    }

    :is(.dark .dark\:hover\:bg-primary-800:hover) {
      --tw-bg-opacity: 1;
      background-color: rgb(var(--color-primary-800)/var(--tw-bg-opacity))
    }

    :is(.dark .dark\:hover\:bg-white:hover) {
      --tw-bg-opacity: 1;
      background-color: rgb(255 255 255/var(--tw-bg-opacity))
    }

    :is(.dark .hover\:dark\:bg-primary-500\/10):hover {
      background-color: rgb(var(--color-primary-500)/.1)
    }

    :is(.dark .dark\:hover\:text-black:hover) {
      --tw-text-opacity: 1;
      color: rgb(0 0 0/var(--tw-text-opacity))
    }

    :is(.dark .dark\:hover\:text-gray-100:hover) {
      --tw-text-opacity: 1;
      color: rgb(243 244 246/var(--tw-text-opacity))
    }

    :is(.dark .dark\:hover\:text-gray-200:hover) {
      --tw-text-opacity: 1;
      color: rgb(229 231 235/var(--tw-text-opacity))
    }

    :is(.dark .dark\:hover\:text-gray-300:hover) {
      --tw-text-opacity: 1;
      color: rgb(209 213 219/var(--tw-text-opacity))
    }

    :is(.dark .dark\:hover\:text-gray-50:hover) {
      --tw-text-opacity: 1;
      color: rgb(249 250 251/var(--tw-text-opacity))
    }

    :is(.dark .dark\:hover\:text-neutral-800:hover) {
      --tw-text-opacity: 1;
      color: rgb(var(--color-neutral-800)/var(--tw-text-opacity))
    }

    :is(.dark .dark\:hover\:text-primary-300:hover) {
      --tw-text-opacity: 1;
      color: rgb(var(--color-primary-300)/var(--tw-text-opacity))
    }

    :is(.dark .dark\:hover\:text-primary-400:hover) {
      --tw-text-opacity: 1;
      color: rgb(var(--color-primary-400)/var(--tw-text-opacity))
    }

    :is(.dark .dark\:hover\:text-white:hover) {
      --tw-text-opacity: 1;
      color: rgb(255 255 255/var(--tw-text-opacity))
    }

    :is(.dark .hover\:dark\:text-gray-200):hover {
      --tw-text-opacity: 1;
      color: rgb(229 231 235/var(--tw-text-opacity))
    }

    :is(.dark .hover\:dark\:text-primary-200):hover {
      --tw-text-opacity: 1;
      color: rgb(var(--color-primary-200)/var(--tw-text-opacity))
    }

    :is(.dark .dark\:hover\:ring-gray-400:hover) {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(156 163 175/var(--tw-ring-opacity))
    }

    :is(.dark .dark\:focus\:ring-gray-700:focus) {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(55 65 81/var(--tw-ring-opacity))
    }

    :is(.dark .dark\:focus\:ring-primary-800:focus) {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(var(--color-primary-800)/var(--tw-ring-opacity))
    }

    :is(.dark .dark\:focus\:ring-primary-900:focus) {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(var(--color-primary-900)/var(--tw-ring-opacity))
    }

    :is(.dark .group:hover .dark\:group-hover\:text-primary-400) {
      --tw-text-opacity: 1;
      color: rgb(var(--color-primary-400)/var(--tw-text-opacity))
    }

    @media (prefers-contrast:more) {
      :is(.dark .contrast-more\:dark\:text-gray-50) {
        --tw-text-opacity: 1;
        color: rgb(249 250 251/var(--tw-text-opacity))
      }
    }

    @media print {
      .print\:hidden {
        display: none
      }
    }

    @media not all and (min-width: 1280px) {
      .max-xl\:hidden {
        display:none
      }
    }

    @media not all and (min-width: 1024px) {
      .max-lg\:hidden {
        display:none
      }

      .max-lg\:\[transform\:translate3d\(0\2c -100\%\2c 0\)\] {
        -webkit-transform: translate3d(0,-100%,0);
        transform: translate3d(0,-100%,0)
      }
    }

    @media (min-width: 640px) {
      .sm\:not-sr-only {
        position:static;
        width: auto;
        height: auto;
        padding: 0;
        margin: 0;
        overflow: visible;
        clip: auto;
        white-space: normal
      }

      .sm\:-inset-x-6 {
        left: -1.5rem;
        right: -1.5rem
      }

      .sm\:-mx-6 {
        margin-left: -1.5rem;
        margin-right: -1.5rem
      }

      .sm\:mb-8 {
        margin-bottom: 2rem
      }

      .sm\:mt-16 {
        margin-top: 4rem
      }

      .sm\:mt-20 {
        margin-top: 5rem
      }

      .sm\:mt-32 {
        margin-top: 8rem
      }

      .sm\:flex {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex
      }

      .sm\:hidden {
        display: none
      }

      .sm\:h-64 {
        height: 16rem
      }

      .sm\:max-w-xl {
        max-width: 36rem
      }

      .sm\:grid-cols-2 {
        grid-template-columns: repeat(2,minmax(0,1fr))
      }

      .sm\:grid-cols-3 {
        grid-template-columns: repeat(3,minmax(0,1fr))
      }

      .sm\:justify-center {
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center
      }

      .sm\:gap-x-16 {
        -webkit-column-gap: 4rem;
        -moz-column-gap: 4rem;
        column-gap: 4rem
      }

      .sm\:gap-y-10 {
        row-gap: 2.5rem
      }

      .sm\:gap-y-16 {
        row-gap: 4rem
      }

      .sm\:rounded-2xl {
        border-radius: 1rem
      }

      .sm\:px-0 {
        padding-left: 0;
        padding-right: 0
      }

      .sm\:px-6 {
        padding-left: 1.5rem;
        padding-right: 1.5rem
      }

      .sm\:px-8 {
        padding-left: 2rem;
        padding-right: 2rem
      }

      .sm\:py-16 {
        padding-top: 4rem;
        padding-bottom: 4rem
      }

      .sm\:py-32 {
        padding-top: 8rem;
        padding-bottom: 8rem
      }

      .sm\:py-48 {
        padding-top: 12rem;
        padding-bottom: 12rem
      }

      .sm\:pb-24 {
        padding-bottom: 6rem
      }

      .sm\:pt-36 {
        padding-top: 9rem
      }

      .sm\:text-center {
        text-align: center
      }

      .sm\:text-4xl {
        font-size: 2.25rem;
        line-height: 2.5rem
      }

      .sm\:text-5xl {
        font-size: 3rem;
        line-height: 1
      }

      .sm\:text-6xl {
        font-size: 3.75rem;
        line-height: 1
      }

      .sm\:text-7xl {
        font-size: 4.5rem;
        line-height: 1
      }

      .sm\:text-lg {
        font-size: 1.125rem
      }

      .sm\:text-xl {
        font-size: 1.25rem
      }
    }

    @media (min-width: 768px) {
      .md\:order-2 {
        -webkit-box-ordinal-group:3;
        -ms-flex-order: 2;
        order: 2
      }

      .md\:col-span-3 {
        grid-column: span 3/span 3
      }

      .md\:mx-0 {
        margin-left: 0;
        margin-right: 0
      }

      .md\:ml-4 {
        margin-left: 1rem
      }

      .md\:mt-0 {
        margin-top: 0
      }

      .md\:mt-12 {
        margin-top: 3rem
      }

      .md\:block {
        display: block
      }

      .md\:flex {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex
      }

      .md\:grid {
        display: grid
      }

      .md\:hidden {
        display: none
      }

      .md\:w-48 {
        width: 12rem
      }

      .md\:max-w-full {
        max-width: 100%
      }

      .md\:flex-shrink-0 {
        -ms-flex-negative: 0;
        flex-shrink: 0
      }

      .md\:grid-cols-1 {
        grid-template-columns: repeat(1,minmax(0,1fr))
      }

      .md\:grid-cols-10 {
        grid-template-columns: repeat(10,minmax(0,1fr))
      }

      .md\:grid-cols-11 {
        grid-template-columns: repeat(11,minmax(0,1fr))
      }

      .md\:grid-cols-12 {
        grid-template-columns: repeat(12,minmax(0,1fr))
      }

      .md\:grid-cols-2 {
        grid-template-columns: repeat(2,minmax(0,1fr))
      }

      .md\:grid-cols-3 {
        grid-template-columns: repeat(3,minmax(0,1fr))
      }

      .md\:grid-cols-4 {
        grid-template-columns: repeat(4,minmax(0,1fr))
      }

      .md\:grid-cols-5 {
        grid-template-columns: repeat(5,minmax(0,1fr))
      }

      .md\:grid-cols-6 {
        grid-template-columns: repeat(6,minmax(0,1fr))
      }

      .md\:grid-cols-7 {
        grid-template-columns: repeat(7,minmax(0,1fr))
      }

      .md\:grid-cols-8 {
        grid-template-columns: repeat(8,minmax(0,1fr))
      }

      .md\:grid-cols-9 {
        grid-template-columns: repeat(9,minmax(0,1fr))
      }

      .md\:grid-cols-\[200px_auto\] {
        grid-template-columns: 200px auto
      }

      .md\:grid-cols-none {
        grid-template-columns: none
      }

      .md\:flex-row {
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row
      }

      .md\:items-baseline {
        -webkit-box-align: baseline;
        -ms-flex-align: baseline;
        align-items: baseline
      }

      .md\:gap-12 {
        gap: 3rem
      }

      .md\:gap-x-16 {
        -webkit-column-gap: 4rem;
        -moz-column-gap: 4rem;
        column-gap: 4rem
      }

      .md\:space-y-0>:not([hidden])~:not([hidden]) {
        --tw-space-y-reverse: 0;
        margin-top: calc(0px*(1 - var(--tw-space-y-reverse)));
        margin-bottom: calc(0px*var(--tw-space-y-reverse))
      }

      .md\:border-r {
        border-right-width: 1px
      }

      .md\:px-12 {
        padding-left: 3rem;
        padding-right: 3rem
      }

      .md\:px-16 {
        padding-left: 4rem;
        padding-right: 4rem
      }

      .md\:px-20 {
        padding-left: 5rem;
        padding-right: 5rem
      }

      .md\:px-24 {
        padding-left: 6rem;
        padding-right: 6rem
      }

      .md\:py-20 {
        padding-top: 5rem;
        padding-bottom: 5rem
      }

      .md\:text-6xl {
        font-size: 3.75rem;
        line-height: 1
      }

      .md\:text-lg {
        font-size: 1.125rem
      }

      .md\:text-xl {
        font-size: 1.25rem
      }
    }

    @media (min-width: 1024px) {
      .lg\:sticky {
        position:sticky
      }

      .lg\:order-1 {
        -webkit-box-ordinal-group: 2;
        -ms-flex-order: 1;
        order: 1
      }

      .lg\:order-first {
        -webkit-box-ordinal-group: -9998;
        -ms-flex-order: -9999;
        order: -9999
      }

      .lg\:col-span-3 {
        grid-column: span 3/span 3
      }

      .lg\:row-span-2 {
        grid-row: span 2/span 2
      }

      .lg\:my-0 {
        margin-top: 0;
        margin-bottom: 0
      }

      .lg\:mb-16 {
        margin-bottom: 4rem
      }

      .lg\:ml-0 {
        margin-left: 0
      }

      .lg\:mt-0 {
        margin-top: 0
      }

      .lg\:mt-1 {
        margin-top: .25rem
      }

      .lg\:mt-24 {
        margin-top: 6rem
      }

      .lg\:inline-block {
        display: inline-block
      }

      .lg\:\!flex {
        display: -webkit-box!important;
        display: -ms-flexbox!important;
        display: flex!important
      }

      .lg\:flex {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex
      }

      .lg\:hidden {
        display: none
      }

      .lg\:h-12 {
        height: 3rem
      }

      .lg\:h-6 {
        height: 1.5rem
      }

      .lg\:h-\[calc\(100vh-var\(--navbar-height\)\)\] {
        height: calc(100vh - var(--navbar-height))
      }

      .lg\:w-1\/2 {
        width: 50%
      }

      .lg\:w-12 {
        width: 3rem
      }

      .lg\:w-6 {
        width: 1.5rem
      }

      .lg\:w-auto {
        width: auto
      }

      .lg\:max-w-4xl {
        max-width: 56rem
      }

      .lg\:max-w-5xl {
        max-width: 64rem
      }

      .lg\:max-w-none {
        max-width: none
      }

      .lg\:max-w-screen-xl {
        max-width: 1280px
      }

      .lg\:basis-auto {
        -ms-flex-preferred-size: auto;
        flex-basis: auto
      }

      .lg\:translate-x-\[-32\%\] {
        --tw-translate-x: -32%;
        -webkit-transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
        transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
      }

      .lg\:auto-cols-auto {
        grid-auto-columns: auto
      }

      .lg\:grid-flow-col {
        grid-auto-flow: column
      }

      .lg\:grid-cols-2 {
        grid-template-columns: repeat(2,minmax(0,1fr))
      }

      .lg\:grid-cols-3 {
        grid-template-columns: repeat(3,minmax(0,1fr))
      }

      .lg\:grid-cols-none {
        grid-template-columns: none
      }

      .lg\:grid-rows-\[auto_1fr\] {
        grid-template-rows: auto 1fr
      }

      .lg\:flex-row {
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row
      }

      .lg\:flex-wrap {
        -ms-flex-wrap: wrap;
        flex-wrap: wrap
      }

      .lg\:justify-start {
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start
      }

      .lg\:gap-10 {
        gap: 2.5rem
      }

      .lg\:gap-x-32 {
        -webkit-column-gap: 8rem;
        -moz-column-gap: 8rem;
        column-gap: 8rem
      }

      .lg\:gap-x-6 {
        -webkit-column-gap: 1.5rem;
        -moz-column-gap: 1.5rem;
        column-gap: 1.5rem
      }

      .lg\:gap-y-12 {
        row-gap: 3rem
      }

      .lg\:space-x-2>:not([hidden])~:not([hidden]) {
        --tw-space-x-reverse: 0;
        margin-right: calc(.5rem*var(--tw-space-x-reverse));
        margin-left: calc(.5rem*(1 - var(--tw-space-x-reverse)))
      }

      .lg\:px-12 {
        padding-left: 3rem;
        padding-right: 3rem
      }

      .lg\:px-16 {
        padding-left: 4rem;
        padding-right: 4rem
      }

      .lg\:px-2 {
        padding-left: .5rem;
        padding-right: .5rem
      }

      .lg\:px-5 {
        padding-left: 1.25rem;
        padding-right: 1.25rem
      }

      .lg\:px-6 {
        padding-left: 1.5rem;
        padding-right: 1.5rem
      }

      .lg\:px-8 {
        padding-left: 2rem;
        padding-right: 2rem
      }

      .lg\:py-16 {
        padding-top: 4rem;
        padding-bottom: 4rem
      }

      .lg\:py-2 {
        padding-top: .5rem;
        padding-bottom: .5rem
      }

      .lg\:py-20 {
        padding-top: 5rem;
        padding-bottom: 5rem
      }

      .lg\:py-4 {
        padding-top: 1rem;
        padding-bottom: 1rem
      }

      .lg\:py-56 {
        padding-top: 14rem;
        padding-bottom: 14rem
      }

      .lg\:py-8 {
        padding-top: 2rem;
        padding-bottom: 2rem
      }

      .lg\:pb-0 {
        padding-bottom: 0
      }

      .lg\:pb-8 {
        padding-bottom: 2rem
      }

      .lg\:pl-2 {
        padding-left: .5rem
      }

      .lg\:pl-20 {
        padding-left: 5rem
      }

      .lg\:pr-1 {
        padding-right: .25rem
      }

      .lg\:pr-8 {
        padding-right: 2rem
      }

      .lg\:text-left {
        text-align: left
      }

      .lg\:text-5xl {
        font-size: 3rem;
        line-height: 1
      }

      .lg\:text-6xl {
        font-size: 3.75rem;
        line-height: 1
      }

      .lg\:text-base {
        font-size: 1rem
      }

      .group:hover .lg\:group-hover\:visible {
        visibility: visible
      }

      .group:hover .lg\:group-hover\:opacity-100 {
        opacity: 1
      }
    }

    @media (min-width: 1280px) {
      .xl\:right-6 {
        right:1.5rem
      }

      .xl\:col-span-1 {
        grid-column: span 1/span 1
      }

      .xl\:col-span-2 {
        grid-column: span 2/span 2
      }

      .xl\:mt-0 {
        margin-top: 0
      }

      .xl\:block {
        display: block
      }

      .xl\:grid {
        display: grid
      }

      .xl\:hidden {
        display: none
      }

      .xl\:max-w-none {
        max-width: none
      }

      .xl\:grid-cols-2 {
        grid-template-columns: repeat(2,minmax(0,1fr))
      }

      .xl\:grid-cols-3 {
        grid-template-columns: repeat(3,minmax(0,1fr))
      }

      .xl\:gap-16 {
        gap: 4rem
      }

      .xl\:gap-8 {
        gap: 2rem
      }

      .xl\:space-x-8>:not([hidden])~:not([hidden]) {
        --tw-space-x-reverse: 0;
        margin-right: calc(2rem*var(--tw-space-x-reverse));
        margin-left: calc(2rem*(1 - var(--tw-space-x-reverse)))
      }

      .xl\:px-24 {
        padding-left: 6rem;
        padding-right: 6rem
      }

      .xl\:px-5 {
        padding-left: 1.25rem;
        padding-right: 1.25rem
      }

      .xl\:py-36 {
        padding-top: 9rem;
        padding-bottom: 9rem
      }

      .xl\:text-6xl {
        font-size: 3.75rem;
        line-height: 1
      }
    }

    .\[\&\.active\]\:font-bold.active {
      font-weight: 700
    }

    .\[\&\.active\]\:text-black\/90.active {
      color: #000000e6
    }

    :is(.dark .dark\:\[\&\.active\]\:text-white.active) {
      --tw-text-opacity: 1;
      color: rgb(255 255 255/var(--tw-text-opacity))
    }

    .\[\&\:not\(dark\)\]\:hidden:not(dark) {
      display: none
    }

    .\[\&\>svg\]\:w-7>svg {
      width: 1.75rem
    }

  </style>
</head>

<body class="dark:bg-hb-dark dark:text-white page-wrapper" id=top>
<div id=page-bg></div>
<div class="page-header sticky top-0 z-30">
  <header id=site-header class=header>
    <nav class="navbar px-3 flex justify-left">
      <div class="order-0 h-100"><a class=navbar-brand href=/ title="Hugo Academic CV Theme">Dinesh More</a></div><input id=nav-toggle type=checkbox class=hidden>
      <label for=nav-toggle class="order-3 cursor-pointer flex items-center lg:hidden text-dark dark:text-white lg:order-1"><svg id="show-button" class="h-6 fill-current block" viewBox="0 0 20 20">
        <title>Open Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0V0z" />
      </svg><svg id="hide-button" class="h-6 fill-current hidden" viewBox="0 0 20 20">
        <title>Close Menu</title>
        <polygon points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2" transform="rotate(45 10 10)" />
      </svg></label>
      <ul id=nav-menu class="navbar-nav order-3 hidden lg:flex w-full pb-6 lg:order-1 lg:w-auto lg:space-x-2 lg:pb-0 xl:space-x-8 justify-left">
        <li class=nav-item><a class="nav-link active" href= />Bio</a></li>
        <li class=nav-item><a class=nav-link href=/#papers>Papers</a></li>
        <li class=nav-item><a class=nav-link href=/#talks>Talks</a></li>
        <li class=nav-item><a class=nav-link href=/#news>News</a></li>
        <li class=nav-item><a class=nav-link href=/experience />Experience</a></li>
        <li class=nav-item><a class=nav-link href=/projects />Projects</a></li>
        <li class=nav-item><a class=nav-link href=/teaching />Teaching</a></li>
      </ul>
      <div class="order-1 ml-auto flex items-center md:order-2 lg:ml-0"><button aria-label=search class="text-black hover:text-primary inline-block px-3 text-xl dark:text-white" id=search_toggle><svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512" fill="currentcolor">
        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8.0 45.3s-32.8 12.5-45.3.0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9.0 208S93.1.0 208 0 416 93.1 416 208zM208 352a144 144 0 100-288 144 144 0 100 288z" />
      </svg></button>
        <div class="px-3 text-black hover:text-primary-700 dark:text-white dark:hover:text-primary-300
[&.active]:font-bold [&.active]:text-black/90 dark:[&.active]:text-white"><button class="theme-toggle mt-1" accesskey=t title=appearance><svg id="moon" xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 24" fill="none" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="dark:hidden">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg><svg id="sun" xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 24" fill="none" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="dark:block [&:not(dark)]:hidden">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg></button></div>
      </div>
    </nav>
  </header>
  <div id=search class="hidden p-3"></div>
</div>
<div class=page-body>
  <section id=section-resume-biography-3 class="relative hbb-section blox-resume-biography-3 dark" style="padding:6rem 0">
    <div class="home-section-bg bg-image" style=background-color:#000;background-image:url(https://academic-demo.netlify.app/media/stacked-peaks.svg);background-size:cover;background-position:50%;filter:brightness(1)></div>
    <div class="resume-biography px-3 flex flex-col md:flex-row justify-center gap-12">
      <div class="flex-none m-w-[130px] mx-auto md:mx-0">
        <div id=profile class="flex justify-center items-center flex-col">
          <div class="avatar-wrapper mt-10"><img class="avatar rounded-full bg-white dark:bg-gray-800 p-1" src=/author/%E5%90%B3%E5%81%A5%E9%9B%84/avatar_hu3c64bd0f98018e2d901b7c60447ac42e_1387900_150x150_fill_q80_lanczos_center.jpg alt=吳健雄 width=150 height=150>
            <span class=avatar-emoji>☕️</span>
          </div>
          <div class="portrait-title dark:text-white">
            <div class="text-3xl font-bold mb-2 mt-6"><ruby>
              <rb>吳健雄</rb>
              <rt>Chien Shiung Wu</rt>
            </ruby></div>
            <h3 class="font-semibold mb-1">Chief Scientist</h3>
            <div class=mb-2><a href=https://openai.com/ target=_blank rel=noopener>
              <div>OpenAI</div>
            </a></div>
          </div>
          <ul class="network-icon dark:text-zinc-100">
            <li><a href=mailto:your-email@example.com aria-label=at-symbol data-toggle=tooltip data-placement=top title="E-mail Me"><svg style="height:1.5rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="none" stroke="currentcolor" stroke-linecap="round" stroke-width="1.5" d="M16.5 12a4.5 4.5.0 11-9 0 4.5 4.5.0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
            </svg></a></li>
            <li><a href=https://twitter.com/GetResearchDev target=_blank rel=noopener aria-label=brands/x><svg style="height:1.5rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentcolor" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
            </svg></a></li>
            <li><a href=https://www.instagram.com/ target=_blank rel=noopener aria-label=brands/instagram><svg style="height:1.5rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15">
              <path fill="currentcolor" fill-rule="evenodd" d="M12.91 12.909c.326-.327.582-.72.749-1.151.16-.414.27-.886.302-1.578.032-.693.04-.915.04-2.68.0-1.765-.008-1.987-.04-2.68-.032-.692-.142-1.164-.302-1.578a3.185 3.185.0 00-.75-1.151 3.187 3.187.0 00-1.151-.75c-.414-.16-.886-.27-1.578-.302C9.487 1.007 9.265 1 7.5 1c-1.765.0-1.987.007-2.68.04-.692.03-1.164.14-1.578.301a3.2 3.2.0 00-1.151.75 3.2 3.2.0 00-.75 1.151c-.16.414-.27.886-.302 1.578C1.007 5.513 1 5.735 1 7.5s.007 1.987.04 2.68c.03.692.14 1.164.301 1.578.164.434.42.826.75 1.151.325.33.718.586 1.151.75.414.16.886.27 1.578.302.693.031.915.039 2.68.039s1.987-.008 2.68-.04c.692-.03 1.164-.14 1.578-.301a3.323 3.323.0 001.151-.75zM2 6.735v1.53c-.002.821-.002 1.034.02 1.5.026.586.058 1.016.156 1.34.094.312.199.63.543 1.012.344.383.675.556 1.097.684.423.127.954.154 1.415.175.522.024.73.024 1.826.024H8.24c.842.001 1.054.002 1.526-.02.585-.027 1.015-.059 1.34-.156.311-.094.629-.2 1.011-.543.383-.344.556-.676.684-1.098.127-.422.155-.953.176-1.414C13 9.247 13 9.04 13 7.947v-.89c0-1.096.0-1.303-.023-1.826-.021-.461-.049-.992-.176-1.414-.127-.423-.3-.754-.684-1.098-.383-.344-.7-.449-1.011-.543-.325-.097-.755-.13-1.34-.156A27.29 27.29.0 008.24 2H7.057c-1.096.0-1.304.0-1.826.023-.461.021-.992.049-1.415.176-.422.128-.753.301-1.097.684s-.45.7-.543 1.012c-.098.324-.13.754-.156 1.34-.022.466-.022.679-.02 1.5zM7.5 5.25a2.25 2.25.0 100 4.5 2.25 2.25.0 000-4.5zM4.25 7.5a3.25 3.25.0 116.5.0 3.25 3.25.0 01-6.5.0zm6.72-2.72a.75.75.0 100-1.5.75.75.0 000 1.5z" clip-rule="evenodd" />
            </svg></a></li>
            <li><a href=https://github.com/gcushen target=_blank rel=noopener aria-label=brands/github><svg style="height:1.5rem" fill="currentcolor" viewBox="3 3 18 18">
              <path d="M12 3C7.0275 3 3 7.12937 3 12.2276c0 4.0833 2.57625 7.5321 6.15374 8.7548C9.60374 21.0631 9.77249 20.7863 9.77249 20.5441 9.77249 20.3249 9.76125 19.5982 9.76125 18.8254 7.5 19.2522 6.915 18.2602 6.735 17.7412 6.63375 17.4759 6.19499 16.6569 5.8125 16.4378 5.4975 16.2647 5.0475 15.838 5.80124 15.8264 6.51 15.8149 7.01625 16.4954 7.18499 16.7723 7.99499 18.1679 9.28875 17.7758 9.80625 17.5335 9.885 16.9337 10.1212 16.53 10.38 16.2993 8.3775 16.0687 6.285 15.2728 6.285 11.7432c0-1.0035.34875-1.834.92249-2.47994C7.1175 9.03257 6.8025 8.08674 7.2975 6.81794c0 0 .753749999999999-.24223 2.47499.94583.72001-.20762 1.48501-.31143 2.25001-.31143C12.7875 7.45234 13.5525 7.55615 14.2725 7.76377c1.7212-1.19959 2.475-.94583 2.475-.94583C17.2424 8.08674 16.9275 9.03257 16.8375 9.26326 17.4113 9.9092 17.76 10.7281 17.76 11.7432c0 3.5411-2.1037 4.3255-4.1063 4.5561C13.98 16.5877 14.2613 17.1414 14.2613 18.0065 14.2613 19.2407 14.25 20.2326 14.25 20.5441 14.25 20.7863 14.4188 21.0746 14.8688 20.9824 16.6554 20.364 18.2079 19.1866 19.3078 17.6162c1.0999-1.5705 1.6917-3.4551 1.6922-5.3886C21 7.12937 16.9725 3 12 3z" />
            </svg></a></li>
            <li><a href=https://www.linkedin.com/ target=_blank rel=noopener aria-label=brands/linkedin><svg style="height:1.5rem" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
              <path fill="currentcolor" d="M416 32H31.9C14.3 32 0 46.5.0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6.0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3.0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2.0 38.5 17.3 38.5 38.5.0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6.0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2.0 79.7 44.3 79.7 101.9V416z" />
            </svg></a></li>
            <li><a href=https://scholar.google.com/ target=_blank rel=noopener aria-label=academicons/google-scholar><svg style="height:1.5rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentcolor" d="M343.759 106.662V79.43L363.524 64h-213.89L20.476 176.274h85.656a82.339 82.339.0 00-.219 6.225c0 20.845 7.22 38.087 21.672 51.861 14.453 13.797 32.252 20.648 53.327 20.648 4.923.0 9.75-.368 14.438-1.024-2.907 6.5-4.374 12.523-4.374 18.142.0 9.875 4.499 20.43 13.467 31.642-39.234 2.67-68.061 9.732-86.437 21.163-10.531 6.5-19 14.704-25.39 24.531-6.391 9.9-9.578 20.515-9.578 31.962.0 9.648 2.062 18.336 6.219 26.062 4.156 7.726 9.578 14.07 16.312 18.984 6.718 4.968 14.469 9.101 23.219 12.469 8.734 3.344 17.406 5.718 26.061 7.062A167.052 167.052.0 00180.555 448c13.469.0 26.953-1.734 40.547-5.187 13.562-3.485 26.28-8.642 38.171-15.493 11.86-6.805 21.515-16.086 28.922-27.718 7.39-11.68 11.094-24.805 11.094-39.336.0-11.016-2.25-21.039-6.75-30.14-4.468-9.073-9.938-16.542-16.452-22.345-6.501-5.813-13-11.155-19.516-15.968-6.5-4.845-12-9.75-16.468-14.813-4.485-5.046-6.735-10.054-6.735-14.984.0-4.921 1.734-9.672 5.216-14.265 3.455-4.61 7.674-9.048 12.61-13.306 4.937-4.25 9.875-8.968 14.796-14.133 4.922-5.147 9.141-11.827 12.61-20.008 3.485-8.18 5.203-17.445 5.203-27.757.0-13.453-2.547-24.46-7.547-33.314-.594-1.022-1.218-1.803-1.875-3.022l56.907-46.672v17.119c-7.393.93-6.624 5.345-6.624 10.635V245.96c0 5.958 4.875 10.834 10.834 10.834h3.989c5.958.0 10.833-4.875 10.833-10.834V117.293c0-5.277.778-9.688-6.561-10.63zm-107.36 222.48c1.14.75 3.704 2.78 7.718 6.038 4.05 3.243 6.797 5.695 8.266 7.414a443.553 443.553.0 016.376 7.547c2.813 3.375 4.718 6.304 5.718 8.734 1 2.477 2.016 5.461 3.047 8.946a38.27 38.27.0 011.485 10.562c0 17.048-6.564 29.68-19.656 37.859-13.125 8.18-28.767 12.274-46.938 12.274-9.187.0-18.203-1.093-27.063-3.196-8.843-2.116-17.311-5.336-25.39-9.601-8.078-4.258-14.577-10.204-19.5-17.797-4.938-7.64-7.407-16.415-7.407-26.25.0-10.32 2.797-19.29 8.422-26.906 5.594-7.625 12.938-13.391 22.032-17.315 9.063-3.946 18.25-6.742 27.562-8.398a157.865 157.865.0 0128.438-2.555c4.47.0 7.936.25 10.405.696.455.219 3.032 2.07 7.735 5.563 4.704 3.462 7.625 5.595 8.75 6.384zm-3.359-100.579c-7.406 8.86-17.734 13.288-30.953 13.288-11.86.0-22.298-4.764-31.266-14.312-9-9.523-15.422-20.328-19.344-32.43-3.937-12.109-5.906-23.984-5.906-35.648.0-13.694 3.596-25.352 10.781-34.976 7.187-9.65 17.5-14.485 30.938-14.485 11.875.0 22.374 5.038 31.437 15.157 9.094 10.085 15.61 21.413 19.517 33.968 3.922 12.54 5.873 24.53 5.873 35.984.0 13.446-3.702 24.61-11.076 33.454z" />
            </svg></a></li>
            <li><a href=https://orcid.org/ target=_blank rel=noopener aria-label=academicons/orcid><svg style="height:1.5rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentcolor" d="M336.62 194.538c-7.13-3.328-13.866-5.56-20.253-6.614-6.365-1.095-16.574-1.612-30.71-1.612h-36.704v152.747h37.634c14.673.0 26.081-1.013 34.224-3.017 8.142-2.004 14.921-4.526 20.356-7.626a69.448 69.448.0 0014.942-11.388c14.488-14.714 21.742-33.273 21.742-55.717.0-22.052-7.44-40.052-22.341-53.982-5.498-5.166-11.822-9.444-18.89-12.793zM256 8C119.022 8 8 119.042 8 256s111.022 248 248 248 248-111.042 248-248S392.978 8 256 8zm-82.336 357.513h-29.389V160.148h29.389zM158.95 138.696c-11.14.0-20.213-9.01-20.213-20.212.0-11.118 9.052-20.191 20.213-20.191 11.18.0 20.232 9.052 20.232 20.191a20.194 20.194.0 01-20.232 20.212zm241.386 163.597c-5.29 12.545-12.834 23.581-22.65 33.088-9.982 9.837-21.597 17.194-34.844 22.196-7.75 3.017-14.839 5.063-21.307 6.117-6.49 1.013-18.828 1.509-37.076 1.509h-64.956V160.148h69.233c27.962.0 50.034 4.154 66.32 12.545 16.265 8.37 29.181 20.728 38.792 36.972 9.61 16.265 14.425 34.018 14.425 53.196.023 13.765-2.666 26.908-7.936 39.432z" />
            </svg></a></li>
          </ul>
        </div>
      </div>
      <div class="flex-auto max-w-prose md:mt-12">
        <div class="pt-2 justify-content-center prose prose-slate dark:prose-invert">
          <div class=bio-text>
            <h2 id=about-me>About Me</h2>
            <p>Chien Shiung Wu is a professor of artificial intelligence at the Stanford AI Lab. Her research interests include distributed robotics, mobile computing and programmable matter. She leads the Robotic Neurobiology group, which develops self-reconfiguring robots, systems of self-organizing robots, and mobile sensor networks.</p>
          </div>
        </div><a href=uploads/resume.pdf target=_blank class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-primary-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg class="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentcolor" viewBox="0 0 20 20">
        <path d="M14.707 7.793a1 1 0 00-1.414.0L11 10.086V1.5a1 1 0 00-2 0v8.586L6.707 7.793A1 1 0 105.293 9.207l4 4a1 1 0 001.416.0l4-4a1 1 0 00-.002-1.414z" />
        <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5.0 01-4.95.0L4.55 12H2a2 2 0 00-2 2v4a2 2 0 002 2h16a2 2 0 002-2v-4a2 2 0 00-2-2zm-3 5a1 1 0 110-2 1 1 0 010 2z" />
      </svg> Download CV</a>
        <div class="grid grid-cols-2 gap-4 justify-between mt-6 dark:text-gray-300">
          <div>
            <div class="section-subheading mb-3">Interests</div>
            <ul class="list-disc list-inside space-y-1 pl-5">
              <li>Artificial Intelligence</li>
              <li>Computational Linguistics</li>
              <li>Information Retrieval</li>
            </ul>
          </div>
          <div>
            <div class="section-subheading mb-3">Education</div>
            <ul>
              <li class="flex items-start gap-3"><svg style="" class="flex-shrink-0 w-5 h-5 me-2 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.26 10.147a60.436 60.436.0 00-.491 6.347A48.627 48.627.0 0112 20.904a48.627 48.627.0 018.232-4.41 60.46 60.46.0 00-.491-6.347m-15.482.0a50.57 50.57.0 00-2.658-.813A59.905 59.905.0 0112 3.493a59.902 59.902.0 0110.399 5.84 51.39 51.39.0 00-2.658.814m-15.482.0A50.697 50.697.0 0112 13.489a50.702 50.702.0 017.74-3.342M6.75 15a.75.75.0 100-1.5.75.75.0 000 1.5m0 0v-3.675A55.378 55.378.0 0112 8.443m-7.007 11.55A5.981 5.981.0 006.75 15.75v-1.5" />
              </svg>
                <div class=description>
                  <p class=course>PhD Artificial Intelligence</p>
                  <p class=text-sm>Stanford University</p>
                </div>
              </li>
              <li class="flex items-start gap-3"><svg style="" class="flex-shrink-0 w-5 h-5 me-2 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.26 10.147a60.436 60.436.0 00-.491 6.347A48.627 48.627.0 0112 20.904a48.627 48.627.0 018.232-4.41 60.46 60.46.0 00-.491-6.347m-15.482.0a50.57 50.57.0 00-2.658-.813A59.905 59.905.0 0112 3.493a59.902 59.902.0 0110.399 5.84 51.39 51.39.0 00-2.658.814m-15.482.0A50.697 50.697.0 0112 13.489a50.702 50.702.0 017.74-3.342M6.75 15a.75.75.0 100-1.5.75.75.0 000 1.5m0 0v-3.675A55.378 55.378.0 0112 8.443m-7.007 11.55A5.981 5.981.0 006.75 15.75v-1.5" />
              </svg>
                <div class=description>
                  <p class=course>MEng Artificial Intelligence</p>
                  <p class=text-sm>Massachusetts Institute of Technology</p>
                </div>
              </li>
              <li class="flex items-start gap-3"><svg style="" class="flex-shrink-0 w-5 h-5 me-2 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.26 10.147a60.436 60.436.0 00-.491 6.347A48.627 48.627.0 0112 20.904a48.627 48.627.0 018.232-4.41 60.46 60.46.0 00-.491-6.347m-15.482.0a50.57 50.57.0 00-2.658-.813A59.905 59.905.0 0112 3.493a59.902 59.902.0 0110.399 5.84 51.39 51.39.0 00-2.658.814m-15.482.0A50.697 50.697.0 0112 13.489a50.702 50.702.0 017.74-3.342M6.75 15a.75.75.0 100-1.5.75.75.0 000 1.5m0 0v-3.675A55.378 55.378.0 0112 8.443m-7.007 11.55A5.981 5.981.0 006.75 15.75v-1.5" />
              </svg>
                <div class=description>
                  <p class=course>BSc Artificial Intelligence</p>
                  <p class=text-sm>Massachusetts Institute of Technology</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id=section-markdown class="relative hbb-section blox-markdown" style="padding:6rem 0">
    <div class=home-section-bg></div>
    <div class="flex flex-col items-center max-w-prose mx-auto gap-3 justify-center">
      <div class="mb-6 text-3xl font-bold text-gray-900 dark:text-white">📚 My Research</div>
      <div class="prose prose-slate lg:prose-xl dark:prose-invert max-w-prose">
        <p>Use this area to speak to your mission. I&rsquo;m a research scientist in the Moonshot team at DeepMind. I blog about machine learning, deep learning, and moonshots.</p>
        <p>I apply a range of qualitative and quantitative methods to comprehensively investigate the role of science and technology in the economy.</p>
        <p>Please reach out to collaborate 😃</p>
      </div>
    </div>
  </section>
  <section id=papers class="relative hbb-section blox-collection" style="padding:6rem 0">
    <div class=home-section-bg></div>
    <div class="flex flex-col items-center max-w-prose mx-auto gap-3 justify-center">
      <div class="mb-6 text-3xl font-bold text-gray-900 dark:text-white">Featured Publications</div>
    </div>
    <div class="flex flex-col items-center">
      <div class="container px-8 mx-auto xl:px-5 py-5 lg:py-8 max-w-screen-lg">
        <div class="grid gap-10 md:grid-cols-2 lg:gap-10">
          <div class="group cursor-pointer">
            <div class="overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800"><a class="relative block aspect-video" href=/publication/preprint /><img alt="An example preprint / working paper" class="object-fill transition-all" data-nimg=fill decoding=async fetchpriority=high height=540 loading=lazy src=/publication/preprint/featured_hu559a5add5185b02575aa8333502ab2cc_220813_3f5c72a07d2c1c0dd0ac0ab4ce7ea489.webp style=position:absolute;height:100%;width:100%;inset:0;color:transparent width=960></a></div>
            <div>
              <div>
                <div class="flex gap-3"><a href=/tags/large-language-models /><span class="inline-block text-xs font-medium tracking-wider uppercase mt-5 text-primary-700 dark:text-primary-300">Large Language Models</span></a></div>
                <h2 class="text-lg font-semibold leading-snug tracking-tight mt-2 dark:text-white"><a href=/publication/preprint /><span class="bg-gradient-to-r from-primary-200 to-primary-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-primary-800 dark:to-primary-900">An example preprint / working paper</span></a></h2>
                <div class=grow>
                  <p class="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400"><a href=/publication/preprint />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus ac convallis placerat. Proin tincidunt magna sed ex sollicitudin condimentum.</a></p>
                </div>
                <div class=flex-none>
                  <div class="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400 cursor-default"><time class="truncate text-sm" datetime=2019-04-07>Apr 7, 2019</time></div>
                </div>
              </div>
            </div>
          </div>
          <div class="group cursor-pointer">
            <div class="overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800"><a class="relative block aspect-video" href=/publication/conference-paper /><img alt="An example conference paper" class="object-fill transition-all" data-nimg=fill decoding=async fetchpriority=high height=540 loading=lazy src=/publication/conference-paper/featured_hu3d03a01dcc18bc5be0e67db3d8d209a6_312700_6be8e19b87b6d261ead1cd399d1885b8.webp style=position:absolute;height:100%;width:100%;inset:0;color:transparent width=960></a></div>
            <div>
              <div>
                <div class="flex gap-3"><a href=/tags/large-language-models /><span class="inline-block text-xs font-medium tracking-wider uppercase mt-5 text-primary-700 dark:text-primary-300">Large Language Models</span></a></div>
                <h2 class="text-lg font-semibold leading-snug tracking-tight mt-2 dark:text-white"><a href=/publication/conference-paper /><span class="bg-gradient-to-r from-primary-200 to-primary-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-primary-800 dark:to-primary-900">An example conference paper</span></a></h2>
                <div class=grow>
                  <p class="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400"><a href=/publication/conference-paper />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus ac convallis placerat. Proin tincidunt magna sed ex sollicitudin condimentum.</a></p>
                </div>
                <div class=flex-none>
                  <div class="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400 cursor-default"><time class="truncate text-sm" datetime=2013-07-01>Jul 1, 2013</time></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id=section-collection class="relative hbb-section blox-collection" style="padding:6rem 0">
    <div class=home-section-bg></div>
    <div class="flex flex-col items-center max-w-prose mx-auto gap-3 justify-center">
      <div class="mb-6 text-3xl font-bold text-gray-900 dark:text-white">Recent Publications</div>
    </div>
    <div class="flex flex-col items-center">
      <div class="mt-16 sm:mt-20 container max-w-3xl w-full">
        <div class="flex flex-col space-y-3">
          <div class="pub-list-item view-citation" style=margin-bottom:1rem><i class="far fa-file-alt pub-icon" aria-hidden=true></i>
            <span class="article-metadata li-cite-author"><span class=font-bold>吳健雄</span>
              </span>(2019).
            <a href=/publication/preprint/ class=underline>An example preprint / working paper</a>.<div class="flex space-x-3"><a class="hb-attachment-link hb-attachment-small" href=http://arxiv.org/pdf/1512.04133v1 target=_blank rel=noopener><svg style="height:1em" class="inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.5 14.25v-2.625A3.375 3.375.0 0016.125 8.25h-1.5A1.125 1.125.0 0113.5 7.125v-1.5A3.375 3.375.0 0010.125 2.25H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621.0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621.0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9" />
            </svg>
              PDF
            </a><a class="hb-attachment-link hb-attachment-small" href=https://github.com/HugoBlox/hugo-blox-builder target=_blank rel=noopener><svg style="height:1em" class="inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5.0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
            </svg>
              Code
            </a><a class="hb-attachment-link hb-attachment-small" href=/# target=_blank rel=noopener><svg style="height:1em" class="inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5.0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5.0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5.0v3.75m-16.5-3.75v3.75m16.5.0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5.0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
            </svg>
              Dataset
            </a><a class="hb-attachment-link hb-attachment-small" href=/# target=_blank rel=noopener><svg style="height:1em" class="inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m2.25 15.75 5.159-5.159a2.25 2.25.0 013.182.0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25.0 013.182.0l2.909 2.909m-18 3.75h16.5a1.5 1.5.0 001.5-1.5V6a1.5 1.5.0 00-1.5-1.5H3.75A1.5 1.5.0 002.25 6v12a1.5 1.5.0 001.5 1.5m10.5-11.25h.008v.008h-.008zm.375.0a.375.375.0 11-.75.0.375.375.0 01.75.0" />
            </svg>
              Poster
            </a><a class="hb-attachment-link hb-attachment-small" href=/# target=_blank rel=noopener><svg style="height:1em" class="inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="none" stroke="currentcolor" stroke-linecap="round" stroke-width="1.5" d="m15.75 10.5 4.72-4.72a.75.75.0 011.28.53v11.38a.75.75.0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25.0 002.25-2.25v-9A2.25 2.25.0 0013.5 5.25h-9A2.25 2.25.0 002.25 7.5v9a2.25 2.25.0 002.25 2.25z" />
            </svg>
              Video
            </a><a class="hb-attachment-link hb-attachment-small" href=/# target=_blank rel=noopener><svg style="height:1em" class="inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.5 14.25v-2.625A3.375 3.375.0 0016.125 8.25h-1.5A1.125 1.125.0 0113.5 7.125v-1.5A3.375 3.375.0 0010.125 2.25H8.25m2.25.0H5.625c-.621.0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621.0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9" />
            </svg>
              Source Document
            </a><a class="hb-attachment-link hb-attachment-small" href=http://example.org target=_blank rel=noopener><svg style="height:1em" class="inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.19 8.688a4.5 4.5.0 011.242 7.244l-4.5 4.5a4.5 4.5.0 01-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5.0 00-6.364-6.364l-4.5 4.5a4.5 4.5.0 001.242 7.244" />
            </svg>
              Custom Link</a></div>
          </div>
          <div class="pub-list-item view-citation" style=margin-bottom:1rem><i class="far fa-file-alt pub-icon" aria-hidden=true></i>
            <span class="article-metadata li-cite-author"><span class=font-bold>吳健雄</span><i class="author-notes fas fa-info-circle" data-toggle=tooltip title="Equal contribution"></i>, <span>Robert Ford</span><i class="author-notes fas fa-info-circle" data-toggle=tooltip title="Equal contribution"></i>
              </span>(2015).
            <a href=/publication/journal-article/ class=underline>An example journal article</a>.
            <em>Journal of Source Themes, 1</em>(1).<div class="flex space-x-3"><a class="hb-attachment-link hb-attachment-small" href=http://arxiv.org/pdf/1512.04133v1 target=_blank rel=noopener><svg style="height:1em" class="inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.5 14.25v-2.625A3.375 3.375.0 0016.125 8.25h-1.5A1.125 1.125.0 0113.5 7.125v-1.5A3.375 3.375.0 0010.125 2.25H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621.0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621.0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9" />
            </svg>
              PDF
            </a><a class="hb-attachment-link hb-attachment-small" href=/publication/journal-article/cite.bib target=_blank data-filename=/publication/journal-article/cite.bib><svg style="height:1em" class="inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75A1.125 1.125.0 013.75 20.625V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06.0 011.5.124m7.5 10.376h3.375c.621.0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06.0 00-1.5-.124H9.375c-.621.0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375A1.125 1.125.0 018.25 16.125v-9.25m12 6.625v-1.875A3.375 3.375.0 0016.875 8.25h-1.5A1.125 1.125.0 0114.25 7.125v-1.5A3.375 3.375.0 0010.875 2.25H9.75" />
            </svg>
              Cite
            </a><a class="hb-attachment-link hb-attachment-small" href=https://github.com/HugoBlox/hugo-blox-builder target=_blank rel=noopener><svg style="height:1em" class="inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5.0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
            </svg>
              Code</a></div>
          </div>
          <div class="pub-list-item view-citation" style=margin-bottom:1rem><i class="far fa-file-alt pub-icon" aria-hidden=true></i>
            <span class="article-metadata li-cite-author"><span class=font-bold>吳健雄</span><i class="author-notes fas fa-info-circle" data-toggle=tooltip title="Equal contribution"></i>, <span>Robert Ford</span><i class="author-notes fas fa-info-circle" data-toggle=tooltip title="Equal contribution"></i>
              </span>(2013).
            <a href=/publication/conference-paper/ class=underline>An example conference paper</a>.
            In <em>ICW</em>.<div class="flex space-x-3"><a class="hb-attachment-link hb-attachment-small" href=/publication/conference-paper/conference-paper.pdf target=_blank rel=noopener><svg style="height:1em" class="inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.5 14.25v-2.625A3.375 3.375.0 0016.125 8.25h-1.5A1.125 1.125.0 0113.5 7.125v-1.5A3.375 3.375.0 0010.125 2.25H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621.0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621.0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9" />
            </svg>
              PDF
            </a><a class="hb-attachment-link hb-attachment-small" href=/publication/conference-paper/cite.bib target=_blank data-filename=/publication/conference-paper/cite.bib><svg style="height:1em" class="inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75A1.125 1.125.0 013.75 20.625V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06.0 011.5.124m7.5 10.376h3.375c.621.0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06.0 00-1.5-.124H9.375c-.621.0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375A1.125 1.125.0 018.25 16.125v-9.25m12 6.625v-1.875A3.375 3.375.0 0016.875 8.25h-1.5A1.125 1.125.0 0114.25 7.125v-1.5A3.375 3.375.0 0010.875 2.25H9.75" />
            </svg>
              Cite
            </a><a class="hb-attachment-link hb-attachment-small" href=https://github.com/HugoBlox/hugo-blox-builder target=_blank rel=noopener><svg style="height:1em" class="inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5.0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
            </svg>
              Code
            </a><a class="hb-attachment-link hb-attachment-small" href=https://github.com/HugoBlox/hugo-blox-builder target=_blank rel=noopener><svg style="height:1em" class="inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5.0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5.0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5.0v3.75m-16.5-3.75v3.75m16.5.0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5.0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
            </svg>
              Dataset
            </a><a class="hb-attachment-link hb-attachment-small" href=https://youtube.com target=_blank rel=noopener><svg style="height:1em" class="inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="none" stroke="currentcolor" stroke-linecap="round" stroke-width="1.5" d="m15.75 10.5 4.72-4.72a.75.75.0 011.28.53v11.38a.75.75.0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25.0 002.25-2.25v-9A2.25 2.25.0 0013.5 5.25h-9A2.25 2.25.0 002.25 7.5v9a2.25 2.25.0 002.25 2.25z" />
            </svg>
              Video
            </a><a class="hb-attachment-link hb-attachment-small" href=https://github.com/HugoBlox/hugo-blox-builder target=_blank rel=noopener><svg style="height:1em" class="inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.5 14.25v-2.625A3.375 3.375.0 0016.125 8.25h-1.5A1.125 1.125.0 0113.5 7.125v-1.5A3.375 3.375.0 0010.125 2.25H8.25m2.25.0H5.625c-.621.0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621.0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9" />
            </svg>
              Source Document</a></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id=talks class="relative hbb-section blox-collection" style="padding:6rem 0">
    <div class=home-section-bg></div>
    <div class="flex flex-col items-center max-w-prose mx-auto gap-3 justify-center">
      <div class="mb-6 text-3xl font-bold text-gray-900 dark:text-white">Recent & Upcoming Talks</div>
    </div>
    <div class="flex flex-col items-center">
      <div class="container px-8 mx-auto xl:px-5 py-5 lg:py-8 max-w-[500px] justify-center">
        <div class="grid gap-10 md:grid-cols-1 lg:gap-10">
          <div class="group cursor-pointer">
            <div class="overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800"><a class="relative block aspect-video" href=/event/example /><img alt="Example Talk" class="object-fill transition-all" data-nimg=fill decoding=async fetchpriority=high height=540 loading=lazy src=/event/example/featured_hu3d03a01dcc18bc5be0e67db3d8d209a6_620088_73327011da6425c898aa1e50d5614742.webp style=position:absolute;height:100%;width:100%;inset:0;color:transparent width=960></a></div>
            <div>
              <div>
                <div class="flex gap-3"></div>
                <h2 class="text-lg font-semibold leading-snug tracking-tight mt-2 dark:text-white"><a href=/event/example /><span class="bg-gradient-to-r from-primary-200 to-primary-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-primary-800 dark:to-primary-900">Example Talk</span></a></h2>
                <div class=grow>
                  <p class="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400"><a href=/event/example />An example talk using Hugo Blox Builder's Markdown slides feature.</a></p>
                </div>
                <div class=flex-none>
                  <div class="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400 cursor-default"><time class="truncate text-sm" datetime=2030-06-01>Jun 1, 2030</time></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id=news class="relative hbb-section blox-collection" style=padding:0>
    <div class=home-section-bg></div>
    <div class="flex flex-col items-center max-w-prose mx-auto gap-3 justify-center">
      <div class="mb-6 text-3xl font-bold text-gray-900 dark:text-white">Recent News</div>
    </div>
    <div class="flex flex-col items-center">
      <div class="mt-16 sm:mt-20 w-fit">
        <div class="flex max-w-3xl flex-col space-y-16">
          <article class="md:grid md:grid-cols-4 md:items-baseline">
            <div class="md:col-span-3 group relative flex flex-col items-start">
              <h2 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                <div class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div><a href=/post/get-started /><span class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span><span class="relative z-10">🎉 Easily create your own simple yet highly customizable blog</span></a>
              </h2><time class="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-1" datetime=2023-10-27>Oct 27, 2023</time>
              <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">Take full control of your personal brand and privacy by migrating away from the big tech platforms!</p>
              <div aria-hidden=true class="relative z-10 mt-4 flex items-center text-sm font-medium text-primary-500">Read more<svg aria-hidden="true" class="ml-1 h-4 w-4 stroke-current" fill="none" viewBox="0 0 16 16">
                <path d="M6.75 5.75 9.25 8l-2.5 2.25" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
              </svg></div>
            </div><time class="mt-1 hidden md:block relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500" datetime=2023-10-27>Oct 27, 2023</time>
          </article>
          <article class="md:grid md:grid-cols-4 md:items-baseline">
            <div class="md:col-span-3 group relative flex flex-col items-start">
              <h2 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                <div class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div><a href=/post/second-brain /><span class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span><span class="relative z-10">🧠 Sharpen your thinking with a second brain</span></a>
              </h2><time class="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-1" datetime=2023-10-26>Oct 26, 2023</time>
              <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">Create a personal knowledge base and share your knowledge with your peers.</p>
              <div aria-hidden=true class="relative z-10 mt-4 flex items-center text-sm font-medium text-primary-500">Read more<svg aria-hidden="true" class="ml-1 h-4 w-4 stroke-current" fill="none" viewBox="0 0 16 16">
                <path d="M6.75 5.75 9.25 8l-2.5 2.25" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
              </svg></div>
            </div><time class="mt-1 hidden md:block relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500" datetime=2023-10-26>Oct 26, 2023</time>
          </article>
          <article class="md:grid md:grid-cols-4 md:items-baseline">
            <div class="md:col-span-3 group relative flex flex-col items-start">
              <h2 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                <div class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div><a href=/post/data-visualization /><span class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span><span class="relative z-10">📈 Communicate your results effectively with the best data visualizations</span></a>
              </h2><time class="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-1" datetime=2023-10-25>Oct 25, 2023</time>
              <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">Use popular tools such as Plotly, Mermaid, and data frames.</p>
              <div aria-hidden=true class="relative z-10 mt-4 flex items-center text-sm font-medium text-primary-500">Read more<svg aria-hidden="true" class="ml-1 h-4 w-4 stroke-current" fill="none" viewBox="0 0 16 16">
                <path d="M6.75 5.75 9.25 8l-2.5 2.25" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
              </svg></div>
            </div><time class="mt-1 hidden md:block relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500" datetime=2023-10-25>Oct 25, 2023</time>
          </article>
          <article class="md:grid md:grid-cols-4 md:items-baseline">
            <div class="md:col-span-3 group relative flex flex-col items-start">
              <h2 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                <div class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div><a href=/post/teach-courses /><span class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span><span class="relative z-10">👩🏼‍🏫 Teach academic courses</span></a>
              </h2><time class="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-1" datetime=2023-10-24>Oct 24, 2023</time>
              <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">Embed videos, podcasts, code, LaTeX math, and even test students!</p>
              <div aria-hidden=true class="relative z-10 mt-4 flex items-center text-sm font-medium text-primary-500">Read more<svg aria-hidden="true" class="ml-1 h-4 w-4 stroke-current" fill="none" viewBox="0 0 16 16">
                <path d="M6.75 5.75 9.25 8l-2.5 2.25" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
              </svg></div>
            </div><time class="mt-1 hidden md:block relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500" datetime=2023-10-24>Oct 24, 2023</time>
          </article>
          <article class="md:grid md:grid-cols-4 md:items-baseline">
            <div class="md:col-span-3 group relative flex flex-col items-start">
              <h2 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                <div class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div><a href=/post/project-management /><span class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span><span class="relative z-10">✅ Manage your projects</span></a>
              </h2><time class="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-1" datetime=2023-10-23>Oct 23, 2023</time>
              <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">Easily manage your projects - create ideation mind maps, Gantt charts, todo lists, and more!</p>
              <div aria-hidden=true class="relative z-10 mt-4 flex items-center text-sm font-medium text-primary-500">Read more<svg aria-hidden="true" class="ml-1 h-4 w-4 stroke-current" fill="none" viewBox="0 0 16 16">
                <path d="M6.75 5.75 9.25 8l-2.5 2.25" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
              </svg></div>
            </div><time class="mt-1 hidden md:block relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500" datetime=2023-10-23>Oct 23, 2023</time>
          </article>
        </div>
      </div>
    </div>
  </section>
  <section id=section-cta-card class="relative hbb-section blox-cta-card" style="padding:6rem 0">
    <div class=home-section-bg></div>
    <div class="bg-primary-700 p-8 md:px-20 md:py-20 mx-auto max-w-5xl rounded-lg flex flex-col items-center text-center">
      <h2 class="text-white text-4xl md:text-6xl tracking-tight">👉 Build your own academic website like this</h2>
      <div class="text-gray-100 mt-4 text-lg md:text-xl prose">
        <p>This site is generated by Hugo Blox Builder - the FREE, Hugo-based open source website builder trusted by 250,000+ academics like you.</p>
        <p><a class=github-button href=https://github.com/HugoBlox/hugo-blox-builder data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon=octicon-star data-size=large data-show-count=true aria-label="Star HugoBlox/hugo-blox-builder on GitHub">Star</a></p>
        <p>Easily build anything with blocks - no-code required!</p>
        <p>From landing pages, second brains, and courses to academic resumés, conferences, and tech blogs.</p>
      </div>
      <div class="flex mt-5"><a href=https://hugoblox.com/templates/ class="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-5 py-2.5 bg-white hover:bg-gray-300 text-black border-2 border-transparent">Get Started</a></div>
    </div>
  </section>
</div>
<div class=page-footer>
  <footer class="container mx-auto flex flex-col justify-items-center text-sm leading-6 mt-24 mb-4 text-slate-700 dark:text-slate-200">
    <p class="powered-by text-center">© 2024 Me. This work is licensed under <a href=https://creativecommons.org/licenses/by-nc-nd/4.0 rel="noopener noreferrer" target=_blank>CC BY NC ND 4.0</a></p>
    <p class="powered-by footer-license-icons"><a href=https://creativecommons.org/licenses/by-nc-nd/4.0 rel="noopener noreferrer" target=_blank aria-label="Creative Commons"><i class="fab fa-creative-commons fa-2x" aria-hidden=true></i>
      <i class="fab fa-creative-commons-by fa-2x" aria-hidden=true></i>
      <i class="fab fa-creative-commons-nc fa-2x" aria-hidden=true></i>
      <i class="fab fa-creative-commons-nd fa-2x" aria-hidden=true></i></a></p>
    <p class="powered-by text-center">Published with <a href="https://hugoblox.com/?utm_campaign=poweredby" target=_blank rel=noopener>Hugo Blox Builder</a> — the free, <a href=https://github.com/HugoBlox/hugo-blox-builder target=_blank rel=noopener>open source</a> website builder that empowers creators.</p>
  </footer>
</div>
</body>

</html>
