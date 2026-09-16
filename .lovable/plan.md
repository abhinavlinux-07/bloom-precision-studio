# Fix consultation booking context error

## Goal
Prevent the booking controls from losing their shared state during live updates, which currently can trigger a blank screen.

## Changes
- Move the booking context and `useBooking` hook into a small, stable module.
- Keep the existing booking form and provider behavior unchanged.
- Update the header, mobile booking bar, and shared booking button to use the stable context module.
- Preserve the provider around the entire visible site.

## Verification
- Run the production build.
- Open the homepage and confirm it renders without browser errors.
- Open the consultation form from the header and confirm it works.
