var myCacheName = "myPWACache";

// https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#install_and_activate_populating_your_cache
const addResourcesToCache = async (resources) => {
    console.log("Add to cache...");
    const cache = await caches.open(myCacheName); // ovdje smo upisali našu gore definiranu varijablu
    await cache.addAll(resources);
  };
  
  self.addEventListener("install", (event) => {
    console.log("Installing...");
    event.waitUntil(
      addResourcesToCache([
        "/",
        "/algebra.javascript.vjezba.3/index.html",
        "/algebra.javascript.vjezba.3/css/style.css",
        "/app.js",
        "/algebra.javascript.vjezba.3/media/icons/32.png",
        "/algebra.javascript.vjezba.3/media/icons/512.png"
        ])
    );
  });
  