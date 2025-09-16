/**
 * @param {Request} request
 * @param {any} env
 * @param {import('@cloudflare/workers-types').ExecutionContext} ctx
 */
export async function onRequestGet({ request }) {
  // Obtiene la URL de la solicitud
  const url = new URL(request.url);

  // Obtiene el parámetro 'data' de la URL. Si no existe, usa 'default'.
  const param = url.searchParams.get('data') || 'default';

  // Ofuscación 1: Codificación en Base64
  // En una aplicación real, probablemente harías esto antes de generar el enlace
  // para que el navegador lo vea ofuscado.
  const encodedParam = btoa(param);

  // Ofuscación 2: Simulación de URL compleja
  // Esto es un ejemplo de cómo podrías mapear una URL simple a una compleja
  const originalUrl = `/producto/${param}`;
  const obfuscatedUrl = `/p/${btoa(JSON.stringify({ id: param }))}`;

  // Prepara la respuesta HTML
  const responseBody = `
    <h1>Ofuscación de Parámetros</h1>
    <p>Parámetro original: <strong>${param}</strong></p>
    <p>Parámetro codificado en Base64: <strong>${encodedParam}</strong></p>
    <p>URL original simulada: <strong>${originalUrl}</strong></p>
    <p>URL ofuscada simulada: <strong>${obfuscatedUrl}</strong></p>
    <p>Este es un ejemplo de cómo las Cloudflare Pages Functions pueden manipular solicitudes.</p>
  `;

  return new Response(responseBody, {
    headers: {
      'Content-Type': 'text/html;charset=UTF-8'
    }
  });
}
