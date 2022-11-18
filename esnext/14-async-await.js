{
  function fetchPerson(id) {
    return fetch(`https://swapi.dev/api/people/${id}/`)
      .then((response) => response.json())
      .catch((error) => console.error(error));
  }
}

async function fetchPerson(id) {
  try {
    const response = await fetch(`https://swapi.dev/api/people/${id}/`);
    const body = await response.json();
    return body;
  } catch (error) {
    console.error(error);
  }
}

async function fetchPeople(...ids) {
  const people = await Promise.all(ids.map((id) => fetchPerson(id)));
  return people;
}
