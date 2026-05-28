import useAuthStore from "../store/useAuthStore";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const getStoredAccessToken = () => useAuthStore.getState().token;
const setStoredAccessToken = (accessToken: string) => {
  // set token in in-memory store
  useAuthStore.setState({ token: accessToken });
};

// Attempt refresh by calling /api/auth/refresh which reads httpOnly cookie. On success server sets new httpOnly cookie.
export const attemptRefresh = async (): Promise<boolean> => {
  try {
    const res = await fetch(`${API_BASE_URL}/api/auth/refresh`, {
      method: "POST",
      credentials: "include"
    });
    if (!res.ok) return false;
    const data = await res.json();
    if (data.accessToken) {
      setStoredAccessToken(data.accessToken);
      return true;
    }
    return false;
  } catch (err) {
    return false;
  }
};

export const apiRequest = async <T>(path: string, options: RequestInit = {}): Promise<T> => {
  const token = getStoredAccessToken();

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers || {}) as Record<string, string>
  };

  if (token) headers["Authorization"] = `Bearer ${token}`;

  const fetchOptions: RequestInit = { headers, credentials: "include", ...options };

  let response = await fetch(`${API_BASE_URL}${path}`, fetchOptions);

  if (response.status === 401) {
    const refreshed = await attemptRefresh();
    if (refreshed) {
      const newToken = getStoredAccessToken();
      if (newToken) headers["Authorization"] = `Bearer ${newToken}`;
      response = await fetch(`${API_BASE_URL}${path}`, { ...fetchOptions, headers });
    }
  }

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: "Request failed" }));
    throw new Error(error.message || "Request failed");
  }

  return response.json();
};

export const logoutRequest = async (): Promise<void> => {
  try {
    await fetch(`${API_BASE_URL}/api/auth/logout`, { method: "POST", credentials: "include" });
  } finally {
    // clear in-memory token
    useAuthStore.setState({ token: null, user: null });
  }
};
