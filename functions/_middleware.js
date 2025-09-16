export const onRequest = async ({ request, next }) => {
  // Obtiene la URL de la solicitud
  const url = new URL(request.url);

  // Comprueba si la URL tiene un parámetro llamado 'secret' con el valor 'access'
  // Puedes cambiar esto por el nombre y valor que necesites
  if (url.searchParams.get('secret') !== 'access') {
    // Si la condición no se cumple, devuelve una respuesta de error.
    // En este caso, un error 403 (Prohibido) con un mensaje.
    return new Response('Acceso no autorizado.', {
      status: 403,
      statusText: 'Forbidden'
    });
  }

  // Si la condición se cumple, permite que la solicitud continúe al siguiente paso.
  // Esto hará que Cloudflare Pages sirva el archivo estático (HTML, CSS, etc.)
  // o el siguiente middleware en la cadena.
  return await next();
};
