/**
 * Type number (1 ~ 40), or 0 for auto detection.
 */
const qrTypeNumber = 0;

/**
 * Error correction level ('L', 'M', 'Q', 'H')
 */
const qrErrorCorrectionLevel = "L";

/**
 * Listen for clicks on the toolbar button, and render the QR code.
 */
document.addEventListener("DOMContentLoaded", e => {
  /**
   * Get the url from the active tab,
   * init qrcode lib and replace placeholder with qr img tag.
   */
  function createqrcode(tabs) {
    let qr = qrcode(qrTypeNumber, qrErrorCorrectionLevel);
    qr.addData(tabs[0].url);
    qr.make();
    document.querySelector("#qrcode-placeholder").innerHTML = qr.createSvgTag(
      8,
      4
    );
  }

  browser.tabs
    .query({ active: true, currentWindow: true })
    .then(createqrcode)
    .catch(reportExecuteScriptError);
});

/**
 * There was an error executing the script.
 * Display the popup's error message, and hide the normal UI.
 */
function reportExecuteScriptError(error) {
  document.querySelector("#popup-content").classList.add("hidden");
  document.querySelector("#error-content").classList.remove("hidden");
  console.error(`Failed to create QR code: ${error.message}`);
}
