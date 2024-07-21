window.hbb = {
    defaultTheme: document.documentElement.dataset.wcThemeDefault,
    setDarkTheme: () => {
        document.documentElement.classList.add("dark"), document.documentElement.style.colorScheme = "dark"
    },
    setLightTheme: () => {
        document.documentElement.classList.remove("dark"), document.documentElement.style.colorScheme = "light"
    }
}, console.debug(`Default Hugo Blox Builder theme is ${window.hbb.defaultTheme}`), "wc-color-theme" in localStorage ? localStorage.getItem("wc-color-theme") === "dark" ? window.hbb.setDarkTheme() : window.hbb.setLightTheme() : (window.hbb.defaultTheme === "dark" ? window.hbb.setDarkTheme() : window.hbb.setLightTheme(), window.hbb.defaultTheme === "system" && (window.matchMedia("(prefers-color-scheme: dark)").matches ? window.hbb.setDarkTheme() : window.hbb.setLightTheme()))

//

document.addEventListener("DOMContentLoaded", function () {
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

//

window.hbb.pagefind = {
    baseUrl: "/"
}

//

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

//

;(() => {
        var t = "production"
            , e = {
            copied: "Copied",
            copy: "Copy"
        };
        console.debug(`Environment: ${t}`);

        async function n(e, t) {
            const n = t.textContent;
            try {
                "clipboard" in navigator ? await navigator.clipboard.writeText(n) : console.error("Failed to copy. Dead browser.")
            } catch {
                console.error("Failed to copy. Check permissions...")
            } finally {
                s(e)
            }
        }

        function s(t) {
            t.innerHTML = e.copied,
                setTimeout(() => {
                        t.innerHTML = e.copy
                    }
                    , 2e3)
        }

        window.addEventListener("DOMContentLoaded", () => {
                document.querySelectorAll("pre > code").forEach(t => {
                        const i = t.parentNode.parentNode
                            , s = document.createElement("button");
                        let a = ["copy-button"];
                        s.classList.add(...a),
                            s.innerHTML = e.copy;
                        let o;
                        i.classList.contains("highlight") ? o = i : t.parentNode.parentNode.parentNode.parentNode.parentNode.nodeName === "TABLE" ? o = t.parentNode.parentNode.parentNode.parentNode.parentNode : (t.parentElement.classList.add("highlight"),
                            o = t.parentNode),
                            s.addEventListener("click", () => n(s, o)),
                            o.appendChild(s)
                    }
                )
            }
        )
    }
)();
document.addEventListener("DOMContentLoaded", function () {
    addThemeToggleListener()
});

function addThemeToggleListener() {
    const t = window.hbb.defaultTheme
        , e = document.querySelectorAll(".theme-toggle");
    localStorage.getItem("wc-color-theme") === "dark" || !("wc-color-theme" in localStorage) && (window.matchMedia("(prefers-color-scheme: dark)").matches && t === "system" || t === "dark") ? e.forEach(e => e.dataset.theme = "dark") : e.forEach(e => e.dataset.theme = "light"),
        e.forEach(e => {
                e.addEventListener("click", function () {
                    console.debug("Theme toggled"),
                        localStorage.getItem("wc-color-theme") ? localStorage.getItem("wc-color-theme") === "light" ? (window.hbb.setDarkTheme(),
                            localStorage.setItem("wc-color-theme", "dark")) : (window.hbb.setLightTheme(),
                            localStorage.setItem("wc-color-theme", "light")) : document.documentElement.classList.contains("dark") ? (window.hbb.setLightTheme(),
                            localStorage.setItem("wc-color-theme", "light")) : (window.hbb.setDarkTheme(),
                            localStorage.setItem("wc-color-theme", "dark")),
                        e.dataset.theme = document.documentElement.classList.contains("dark") ? "dark" : "light";
                    const t = new CustomEvent("hbThemeChange", {
                        detail: {
                            isDarkTheme: () => document.documentElement.classList.contains("dark")
                        }
                    });
                    document.dispatchEvent(t)
                })
            }
        ),
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", n => {
                t === "system" && !("wc-color-theme" in localStorage) && (n.matches ? window.hbb.setDarkTheme() : window.hbb.setLightTheme(),
                    e.forEach(e => e.dataset.theme = document.documentElement.classList.contains("dark") ? "dark" : "light"))
            }
        )
}
window.addEventListener("DOMContentLoaded", () => {
        const e = document.querySelectorAll("[data-hb-language-chooser]");
        e.forEach(e => {
                e.addEventListener("click", t => {
                        t.preventDefault(),
                            e.dataset.state = e.dataset.state === "open" ? "closed" : "open";
                        const n = e.nextElementSibling;
                        n.classList.toggle("hidden");
                        const s = e.getBoundingClientRect()
                            , o = s.bottom - window.innerHeight + 40;
                        n.style.transform = `translate3d(${s.left}px, ${o}px, 0)`,
                            n.style.minWidth = `${Math.max(s.width, 50)}px`
                    }
                )
            }
        ),
            document.addEventListener("click", t => {
                    t.target.closest("[data-hb-language-chooser]") === null && e.forEach(e => {
                            e.dataset.state = "closed";
                            const t = e.nextElementSibling;
                            t.classList.add("hidden")
                        }
                    )
                }
            )
    }
);
const applyScrollPadding = () => {
        const t = document.querySelector(".page-header");
        let e = t.getBoundingClientRect();
        document.documentElement.style.scrollPaddingTop = e.height.toString() + "px";
        const n = document.querySelector(":root");
        n.style.setProperty("--navbar-height", e.height.toString() + "px")
    }
;
window.addEventListener("DOMContentLoaded", () => {
        const e = document.querySelectorAll(".nav-dropdown > .nav-link");
        e.forEach(e => {
                e?.addEventListener("click", e => {
                        e.target.parentElement.classList.toggle("active")
                    }
                )
            }
        ),
            applyScrollPadding()
    }
);
document.addEventListener("DOMContentLoaded", function () {
    const e = document.querySelectorAll("[data-hb-sidebar-toggle]");
    e.forEach(function (e) {
        e.addEventListener("click", function (t) {
            t.preventDefault();
            const n = e.parentElement.parentElement;
            n && n.classList.toggle("open")
        })
    })
}),
    document.addEventListener("DOMContentLoaded", function () {
        const o = document.querySelector("#nav-toggle")
            , e = document.querySelector(".hb-sidebar-mobile-menu")
            , n = document.querySelector(".hb-sidebar-container");
        if (!e)
            return;
        const t = ["fixed", "z-10", "inset-0", "bg-white", "dark:bg-black/80"];
        e.classList.add("bg-transparent"),
            e.classList.remove("hidden", ...t);

        function s() {
            n.classList.toggle("max-lg:[transform:translate3d(0,-100%,0)]"),
                n.classList.toggle("max-lg:[transform:translate3d(0,0,0)]"),
                document.body.classList.toggle("overflow-hidden"),
                document.body.classList.toggle("lg:overflow-auto")
        }

        o.addEventListener("click", n => {
                console.debug("Hamburger clicked."),
                    n.preventDefault(),
                    s(),
                    e.classList.contains("bg-transparent") ? (e.classList.add(...t),
                        e.classList.remove("bg-transparent")) : (e.classList.remove(...t),
                        e.classList.add("bg-transparent"))
            }
        ),
            e.addEventListener("click", n => {
                    n.preventDefault(),
                        s(),
                        e.classList.remove(...t),
                        e.classList.add("bg-transparent")
                }
            )
    })