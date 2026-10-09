import axios from "axios";

function publicApiBaseUrl(): string {
  const adminUrl = process.env.NEXT_PUBLIC_ASE_ADMIN_URL?.replace(/\/+$/, "");
  const organizationId =
    process.env.NEXT_PUBLIC_ASE_ADMIN_ORGANIZATION_ID?.trim();

  if (!adminUrl || !organizationId) {
    throw new Error(
      "NEXT_PUBLIC_ASE_ADMIN_URL and NEXT_PUBLIC_ASE_ADMIN_ORGANIZATION_ID are required"
    );
  }

  return `${adminUrl}/api/public/${organizationId}/`;
}

/** Customer-site client for /api/public/{organizationId}/ on ASE admin. */
export const aseAdminApi = axios.create({
  baseURL: publicApiBaseUrl(),
});
