# Google Sheets RSVP Setup

This guide shows how to connect the website RSVP form to Google Sheets using Google Apps Script.

## 1. Create a Google Sheet
1. Open Google Drive.
2. Create a new Google Sheet and name it `RSVP`.
3. In the first row, add these headers:
   - `Timestamp`
   - `Name`
   - `Email`
   - `Phone`
   - `Attendance`
   - `Guests`
   - `Dietary`
   - `Notes`

## 2. Add Apps Script
1. In the Google Sheet, go to `Extensions` → `Apps Script`.
2. Delete any starter text and paste the code from `google-sheets-rsvp.gs`.
3. Save the script file.

## 3. Deploy as Web App
1. In the Apps Script editor, click `Deploy` → `New deployment`.
2. For `Select type`, choose `Web app`.
3. Set `Description` to `RSVP form endpoint`.
4. Set `Execute as` to `Me`.
5. Set `Who has access` to `Anyone`.
6. Click `Deploy`.
7. Copy the Web app URL.

## 4. Update the website script URL
1. Open `assets/js/script.js`.
2. Replace the placeholder in `RSVP_SUBMIT_URL` with your deployed Apps Script URL.

## 5. Test the RSVP form
1. Open the RSVP page on your website.
2. Enter the invitation code and unlock the form.
3. Submit a sample RSVP.
4. Verify the new row appears in your Google Sheet.

## Notes
- This setup saves responses directly into Google Sheets.
- If you want extra security, you can change the invitation password in `assets/js/script.js`.
- The site will still work if the spreadsheet is private because the Apps Script executes as you.
