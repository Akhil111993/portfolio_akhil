'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/AUTO_MERGE": "5630c79900c800096fd1be4a6dc3aab8",
".git/COMMIT_EDITMSG": "2d3c3eb9e36588688a50cd9947436d64",
".git/config": "c185ccd2dbd8533e980688d294284b44",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "42055d39c13589b52084d509bb9cf7ff",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "830de9c28dcd4ec3adcc2204044f7ee8",
".git/logs/refs/heads/master": "2073242cab3776a56ab798fc55151b2a",
".git/logs/refs/remotes/origin/master": "deabe67a8f76a655ec1e55c4831dbbe1",
".git/MERGE_HEAD": "b969fbe42f70ae916c8e3bb394f8c629",
".git/MERGE_MODE": "d41d8cd98f00b204e9800998ecf8427e",
".git/MERGE_MSG": "a3c2ff937a949d696354bb0bb26ed06d",
".git/objects/06/e2908dff5c4ad10242490638345de2ceef50c9": "965ee411e065b28e4a61c20bb0441735",
".git/objects/0b/a828d1dcc989ec4f810705a353206f11b417c2": "e555593f500793ed42bd540600916880",
".git/objects/14/c2d70ea5ec29ff03884616a8ad1162d1591737": "8f06a2f154d126d53fe9d96ad3a036d1",
".git/objects/1a/26e3913bca29070b59b9afc664e83fbb23de6c": "9a693bb84e993df471f5a8d1d3d35ac7",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2f/bcc050f6d497e0969a1a93748861abfc4faa55": "8799c66af512962012d4d43ad413933b",
".git/objects/30/9c08d3fb448946f179357413dad960135de968": "e88fe4674561eec9a58816c88944a6d7",
".git/objects/31/7b6171f0750285c44e80e8d37b6a3787d1f7a9": "fc793e19c194615e2579d4905aa36536",
".git/objects/31/8c64dac5d7c5c0ab29d692dca6fcd5cc30df25": "16d119654d9b92ec87d36df6faf29cd9",
".git/objects/37/f83972345fc3e030120ad810e7cfd8ea9af0cb": "f2e70efb9824a56079fee247d652e36f",
".git/objects/3c/0c7961689e3a223bd10c24e97665f8a47d9662": "99e23ce4d532a2afdfcc5477025aa744",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/41/47f1c691f9af7056fed151a42e5f2e00430b1c": "38c32170092cba56c57ca5e102762102",
".git/objects/41/b661c68848b524ec727626686490b3c21cf56b": "6bba45c9e6672802261d8957133dd9f5",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/50/ec3303570c2a4ea3c1d1b26b1c5e84934dc315": "1f953f1d2fda44fe9492f9d5c1be98fa",
".git/objects/51/2c6b380a0739c0e72723877af469eec9b90d5b": "0ddeaba80aacf13327a794b3caaee2b3",
".git/objects/55/4b1244381392ab9c2b5302d033c0e45ca03511": "e3bef10ce87d02457a04bd0be2c2acdb",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/60/518d295956d9580c0acb7ee5a903b4bdc21250": "22c1d6d01faf7fc1d8fdea62943b78d8",
".git/objects/74/6a9b89add04f3c6ff04f73a7f538dd7bfa761b": "bd22274da7d0afa75da4cff21c70d282",
".git/objects/74/a7944e300f815dc660177324ea601a5a8142b0": "6ba5ef4c3e8a0cca49621768df9d092e",
".git/objects/78/e495591595bd85c96a6ef9b82f21639336b5c8": "417655ad6546b1a68da0dc91032fae8b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/83/c53fa61dc64722b0e47132f7e7773c13774d59": "22243e92a6dea8ce9b08b4331f1c05be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/e3d66d399f16c0bbe74b13fdc216407ca81842": "580c8e4bfb464ed3d45fddd11f9f0068",
".git/objects/96/b4140059b25e75f23a9518e9642721b7b5512d": "c12ed69b51bf2b43199ace5f3ebb0db0",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9b/9e6d5b3586d89c7d10dd2158a32862e1efb523": "d7a2495ee93bea93ab5826766ac8c0a9",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a7/5a9e016fc75b72e39f6a71e3cbeea47939286d": "01f190ad8a2eaf54e4f5660109080bbb",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b4/697c0cddc080a957e6b4790d9b880b915600b7": "76cd822981f1689e39854ad205759cde",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/3e7966ef06ffd99e5cf3e47c91ba61e1e2cde7": "132db17ee0ce7555932f7e9928bb9d8e",
".git/objects/ca/87be421c32516ed846fbb0056ca504a576e2f7": "66b53bc365eb8dd5797fc6fa68c7ae31",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d6/824fb6d8cd11dbde452538666d418161da0294": "9a3ed4ae73e4666f234e83ce7b0c8952",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/be0b482e1b0ac6d485fddb439187fbe1a72f1d": "8f56e632271b0fbdb8b0e8b77f0de037",
".git/objects/dd/c43156e0bba0f74982139893291f5fb648bd08": "6935749e4b423c2574231b4e9d79f06b",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e4/b6424cd6d44a22f5a6a1c704f0e75478495bc6": "b41bd88302aa7821fcc837ef0b3fe36e",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/982bc07937c167405c2e054743e2d42329a068": "50b1f0b3f2586c967b6d5d854e778e9c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f9/abf8daf4bc61469be86290aa444be734781c4b": "24cc6011affea0352bc903e1aa0426b8",
".git/objects/fc/6023107f37332a43aad6009d94b63a7db2b7bd": "faf16e1a3d19c882ea99e6f402202bfc",
".git/objects/fc/d45867f3867823ef974111b08e8da40423dbbb": "f0340e0bbf0229b2e7395801909c8688",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/ORIG_HEAD": "8085ae96b15d65262dc6d428562be9a2",
".git/refs/heads/master": "8085ae96b15d65262dc6d428562be9a2",
".git/refs/remotes/origin/master": "b969fbe42f70ae916c8e3bb394f8c629",
"assets/AssetManifest.json": "d73ee05f8f671b8919c76f4643c9398a",
"assets/assets/akhil.jpeg": "1d8ea692c25d6197a97d1231b4e7283e",
"assets/assets/ashadhara.png": "3f795fcdd92289e81f1b9483c959c06b",
"assets/assets/bmi.png": "de99c749250dbf7e3f80cf26ca971b3a",
"assets/assets/dap.png": "807bc3f7f5278512f4e6713b491c5976",
"assets/assets/emb.png": "45b653fe4ba2f423c52a3fe85eee750b",
"assets/assets/esegate.png": "c36028c662c67cbe75ac1d3b751d854b",
"assets/assets/jiwok.png": "6c168629494c1cdc98459f172998b143",
"assets/assets/kmrl.png": "df17337654062c884786d63208eb9320",
"assets/assets/mobile_dev.json": "a2147570351b61e09f4501ecb425ae7e",
"assets/assets/netflix.png": "bfed54f8e5c5d210fa993969e78316d8",
"assets/assets/paytym.png": "a21febb913d845e3da574a6ba4b7f00f",
"assets/assets/petty.png": "825c4833665565b0367fd536c2ceefcd",
"assets/assets/portfolio.png": "61f2b4a7eab46bd87f6dfd3cd0e8dbae",
"assets/assets/slogan.png": "e941dc55b3e64d995740d636a68effe6",
"assets/assets/todoe.jpg": "95ac10793fab6337f65bcd576fa3f0fc",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "7ff41795023dfb0ccb3182db30f47bb8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "ae6c1fd6f6ee6ee952cde379095a8f3f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8b0104f3820d39e72b13ed182b62f494",
"/": "8b0104f3820d39e72b13ed182b62f494",
"main.dart.js": "36957a4aeca28c080880adaa67f18ebc",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
