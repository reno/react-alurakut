import jwt from 'jsonwebtoken';

export default async function githubAuth(request, response) {
  const { authorization } = request.headers;
  const decodedToken = jwt.decode(authorization);
  if (!decodedToken) {
    return response.send({
      isAuthenticated: false,
    })
  }
  const githubResponse = await fetch(
    `https://api.github.com/users/${decodedToken.githubUser}`
  );
  const data = await githubResponse.json();
  if (data.message === 'Not Found' || !data) {
    response.send({
      isAuthenticated: false,
    });
  } else {
    response.send({
      isAuthenticated: true,
    });
  }
}