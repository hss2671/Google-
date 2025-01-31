export default {
  async fetch(request, env) {
    const _url = new URL(request.url);
    _url.hostname = _url.pathname.startsWith("/gh/")
      ? "g.2671.us.kg"
      : "google.com";
    const req = new Request(_url, request);
    return fetch(req);
  },
};
