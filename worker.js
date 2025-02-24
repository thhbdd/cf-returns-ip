addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
const ip = request.headers.get('CF-Connecting-IP') || 'IP not available'
return new Response(` ${ip}`, {
    headers: { 'Content-Type': 'text/plain' },
  })
}
