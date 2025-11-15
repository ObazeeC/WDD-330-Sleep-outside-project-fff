// Network helper split to keep utils small
export async function convertToJson(response) {
  if (!response.ok) {
    const text = await response.text()
    throw new Error(`HTTP ${response.status}: ${text}`)
  }
  return await response.json()
}
