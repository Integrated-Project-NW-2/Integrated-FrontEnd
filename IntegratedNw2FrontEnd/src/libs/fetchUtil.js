async function getTaskData(url) {
  try {
    const res = await fetch(`${url}/v1/tasks`);
    const data = await res.json();
    return data
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

export { getTaskData }