function onSettingsFormSubmit(e: Event) {
  const storage = browser.storage.sync;
  const data = new FormData(e.target as HTMLFormElement);

  const blockedSites = (data.get("blocked-sites") as string).split("\n");

  storage.set({ blockedSites });
  browser.runtime.reload();

  return true;
}

const settingsForm = document.getElementById("settings-form")!;
settingsForm.addEventListener("submit", onSettingsFormSubmit);
