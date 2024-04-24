async function getTask(url) {
    try {
      const res = await getTask(`${url}`);
      if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`)
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  
  }

export { getTask }