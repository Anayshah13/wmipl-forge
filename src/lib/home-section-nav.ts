/** Session key used when navigating from another route to `/` + a homepage section. */
export const HOME_SECTION_STORAGE_KEY = 'wmipl-nav-section'

export function setPendingHomeSection(id: string) {
  try {
    sessionStorage.setItem(HOME_SECTION_STORAGE_KEY, id)
  } catch {
    /* quota / private mode */
  }
}
