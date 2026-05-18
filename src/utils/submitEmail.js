const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxjrH7gWtsSU_n-gSKaHUkQXM2MjKPcPTfUT_ah35mzA6zrUW-pzQ1-yjQjkPwuaxXgjQ/exec'

export async function submitEmail(email) {
  try {
    await fetch(SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({ email }),
    })
    return true
  } catch {
    return false
  }
}
