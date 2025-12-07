export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    let fileUrl;

    // Use your exact raw URLs
    if (url.pathname === '/tr' || url.pathname === '/index-tr.html') {
      fileUrl = 'https://raw.githubusercontent.com/ProjectCuboid/cloudflare-proxy/refs/heads/main/aydan.seydaliyeva.workers.dev/index-tr.html';
    } else {
      fileUrl = 'https://raw.githubusercontent.com/ProjectCuboid/cloudflare-proxy/refs/heads/main/aydan.seydaliyeva.workers.dev/index-en.html';
    }

    const res = await fetch(fileUrl);
    if (!res.ok) return new Response('GitHub raw file not found', { status: 404 });

    const html = await res.text();
    return new Response(html, {
      headers: { 'Content-Type': 'text/html;charset=UTF-8' }
    });
  }
};
