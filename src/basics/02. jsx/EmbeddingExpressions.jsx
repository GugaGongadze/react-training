function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function EmbeddingExpressions() {
  const user = {
    firstName: 'Harper',
    lastName: 'Perez',
  };

  return <h1>Hello, {formatName(user)}</h1>;
}

export default EmbeddingExpressions;
