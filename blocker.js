// List of keywords to look for in cookie consent elements
const KEYWORDS = ["cookie", "consent", "privacy", "gdpr"];

// Function to check if an element contains cookie-related keywords
function isCookieElement(element) {
  const text = element.textContent.toLowerCase();
  return KEYWORDS.some(keyword => text.includes(keyword));
}

// Function to hide or dismiss the pop-up
function handleCookiePopup() {
  // Find all elements that might be cookie pop-ups
  const elements = document.querySelectorAll("div, section, footer, aside");

  elements.forEach(element => {
    if (isCookieElement(element)) {
      // Hide the element
      element.style.display = "none";
      console.log("Cookie pop-up hidden:", element);

      // Alternatively, look for a "Reject" or "Close" button and click it
      const rejectButton = element.querySelector(
        'button, [role="button"], [onclick*="cookie"], [onclick*="consent"]'
      );
      if (rejectButton) {
        rejectButton.click();
        console.log("Reject button clicked:", rejectButton);
      }
    }
  });
}

// Run the function when the page loads
handleCookiePopup();

// Optional: Run it again after a delay to catch dynamically loaded pop-ups
setTimeout(handleCookiePopup, 2000);