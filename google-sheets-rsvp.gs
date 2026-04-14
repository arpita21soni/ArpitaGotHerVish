function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Wedding RSVP');
    if (!sheet) {
      throw new Error('Sheet named Wedding RSVP not found.');
    }

    const row = [
      data.timestamp || new Date().toLocaleString(),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.attendance || '',
      data.guests || '',
      data.dietary || '',
      data.notes || ''
    ];

    sheet.appendRow(row);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader('Access-Control-Allow-Origin', '*')
      .setHeader('Access-Control-Allow-Methods', 'POST');
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.message }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader('Access-Control-Allow-Origin', '*')
      .setHeader('Access-Control-Allow-Methods', 'POST');
  }
}
