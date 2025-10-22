const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const api = {
  getWaste: async () => (await fetch(`${API_URL}/waste`)).json(),
  collectWaste: async (data) => {
    const res = await fetch(`${API_URL}/waste/collect`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    });
    return res.json();
  },
  getSensor: async () => (await fetch(`${API_URL}/sensors/current`)).json()
};
