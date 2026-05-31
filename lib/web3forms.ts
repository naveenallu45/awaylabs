const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

type Web3FormsResponse = {
  success: boolean;
  message?: string;
};

export async function submitWeb3Form(payload: Record<string, unknown>) {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    throw new Error("Web3Forms access key is not configured yet.");
  }

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      ...payload,
    }),
  });

  const result = (await response.json()) as Web3FormsResponse;

  if (!response.ok || !result.success) {
    throw new Error(result.message ?? "Web3Forms submission failed.");
  }

  return result;
}
