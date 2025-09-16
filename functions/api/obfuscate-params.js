/**
 * Un ejemplo de una función de Cloudflare Pages para procesar solicitudes GET.
 * Este archivo se ejecutará para cualquier solicitud a /api/obfuscate-params.
 */
export async function onRequestGet(context) {
  // Obtiene la URL de la solicitud de la propiedad 'context'
  const url = new URL(context.request.url);
  
  // Obtiene el valor del parámetro 'id' de la URL
  const originalId = url.searchParams.get('id');

  // Si no se proporciona un ID, se devuelve un error
  if (!originalId) {
    return new Response(JSON.stringify({ error: "Parámetro 'id' no proporcionado" }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // Lógica de ofuscación de ejemplo:
  // 1. Codificar el ID original en Base64
  const obfuscatedId = btoa(originalId);
  
  // 2. Crear una URL de 'ejemplo' usando el ID ofuscado
  const obfuscatedUrl = `/products/${obfuscatedId}`;

  // Se prepara una respuesta JSON con la información procesada
  const responseData = {
    originalId: originalId,
    obfuscatedId: obfuscatedId,
    exampleObfuscatedUrl: obfuscatedUrl,
    message: 'Esta función ha procesado y ofuscado el parámetro.'
  };

  return new Response(JSON.stringify(responseData), {
    headers: { 'Content-Type': 'application/json' }
  });
}
