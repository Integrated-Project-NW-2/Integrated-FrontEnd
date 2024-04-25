const url = import.meta.env.VITE_API_URL;

async function getTaskData() {
  try {
    const res = await fetch(`${url}/v1/tasks`);
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`)
    }
    const data = await res.json();
    return data
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}


export { getTaskData }