import { apiFetch } from "./client";
export function getProducts(params = {}) {
  const query = new URLSearchParams(
    Object.fromEntries(Object.entries(params).filter(([, v]) => v !== undefined && v !== "" && v !== null))
  ).toString();
  return apiFetch(`/products${query ? `?${query}` : ""}`, { auth: false });
}

export function getProduct(id) {
  return apiFetch(`/products/${id}`, { auth: false });
}
