/**
 * ISM CAS Directory — Google Sheet setup
 *
 * 1. Create a blank Google Sheet.
 * 2. Open Extensions > Apps Script.
 * 3. Paste this file into the editor and run setupCasDirectory().
 *
 * Running setup again replaces the six CAS tabs after a confirmation prompt.
 */

const ISM_GREEN = "#215732";
const ISM_YELLOW = "#F2A900";
const STUDENT_POSITIONS = [
  "President", "Vice President", "Secretary", "Service & Collaboration Coordinator", "PRO", "Co-Events Head",
  "IASAS Representative", "Photography Liaison Officer", "Webmaster", "Media Head", "Treasurer", "Others"
];

const ACTIVITIES = [
  ["ISSBA Council", "Councils"],
  ["Senior Council", "Councils"],
  ["Junior Council", "Councils"],
  ["Sophomore Council", "Councils"],
  ["Freshman Council", "Councils"],
  ["Fine Arts Council", "Councils"],
  ["Bearcat Council", "Councils"],
  ["Sustainability Council", "Councils"],
  ["Student Ambassador Council", "Councils"],
  ["ICARE Council", "Councils"],
  ["Service Learning Council (SLC)", "Councils"],
  ["Book Club", "Creativity Clubs"],
  ["Cooking Club", "Creativity Clubs"],
  ["Character Design Club", "Creativity Clubs"],
  ["DT Club", "Creativity Clubs"],
  ["Film Club", "Creativity Clubs"],
  ["Forensics & Debate Club", "Creativity Clubs"],
  ["High School Play", "Creativity Clubs"],
  ["Logic Club", "Creativity Clubs"],
  ["Photography Club", "Creativity Clubs"],
  ["Robotics Club", "Creativity Clubs"],
  ["Visual Arts Club (VAC)", "Creativity Clubs"],
  ["World Club", "Creativity Clubs"],
  ["Symposium Club", "Creativity Clubs"],
  ["Battle of the Bands Committee", "Committees · Creativity & Service"],
  ["PROM Committee", "Committees · Creativity & Service"],
  ["Tri-M Jazz Night", "Committees · Creativity & Service"],
  ["Mosaic Club", "Cultural Clubs · Creativity & Service"],
  ["PRISM", "Cultural Clubs · Creativity & Service"],
  ["Japanese (JCC)", "Cultural Clubs · Creativity & Service"],
  ["Korean (KCC)", "Cultural Clubs · Creativity & Service"],
  ["Philippine (PCC)", "Cultural Clubs · Creativity & Service"],
  ["South Asian Cultural Club (SACC)", "Cultural Clubs · Creativity & Service"],
  ["South East Asian Cultural Club (SEACC)", "Cultural Clubs · Creativity & Service"],
  ["Chinese (CHS)", "Honor Societies · Creativity & Service"],
  ["Cum Laude", "Honor Societies · Creativity & Service"],
  ["French Honor Society (SHF)", "Honor Societies · Creativity & Service"],
  ["International Thespian Society (ITS)", "Honor Societies · Creativity & Service"],
  ["National Honor Society (NHS)", "Honor Societies · Creativity & Service"],
  ["National Art Honor Society (NAHS)", "Honor Societies · Creativity & Service"],
  ["National Dance Honor Society (NDHS)", "Honor Societies · Creativity & Service"],
  ["Quill and Scroll", "Honor Societies · Creativity & Service"],
  ["Spanish Honor Society (SHS)", "Honor Societies · Creativity & Service"],
  ["Tri-M (Music Honor Society)", "Honor Societies · Creativity & Service"],
  ["Math Honor Society", "Honor Societies · Creativity & Service"],
  ["Academic Bowl", "Interest Clubs · Creativity & Service"],
  ["Entrepreneur Club", "Interest Clubs · Creativity & Service"],
  ["ERA (Environmental Recreation Activities) Club", "Interest Clubs · Creativity & Service"],
  ["Chess Club", "Interest Clubs · Creativity & Service"],
  ["Code Club", "Interest Clubs · Creativity & Service"],
  ["Inclusion Revolution", "Interest Clubs · Creativity & Service"],
  ["Investment Club", "Interest Clubs · Creativity & Service"],
  ["STEM Club", "Interest Clubs · Creativity & Service"],
  ["Banking and Economics Club", "Interest Clubs · Creativity & Service"],
  ["MUN", "MUN · Creativity"],
  ["Bamboo Telegraph", "Publications · Creativity & Service"],
  ["Bamboo Telegraph TV", "Publications · Creativity & Service"],
  ["Kawayan", "Publications · Creativity & Service"],
  ["Liham", "Publications · Creativity & Service"],
  ["EmpowHER", "Service Clubs"],
  ["Foster The Children (FTC)", "Service Clubs"],
  ["Chosen Children Village (CCV)", "Service Clubs"],
  ["Kasama", "Service Clubs"],
  ["Mental Health Awareness Club", "Service Clubs"],
  ["Mentorship Program", "Service Clubs"],
  ["Samahang Bukas Palad (SBP)", "Service Clubs"],
  ["SPECS-TECC", "Service Clubs"],
  ["Peer Counseling", "Service Clubs"],
  ["Stepping Stone Club", "Service Clubs"],
  ["Animal Welfare Club", "Service Clubs"],
  ["SET (Supporting Education in Tagaytay)", "Service Clubs"],
  ["Student Physio Club", "Pilot Clubs"],
  ["Agora", "Philosophy Club · Pilot Clubs"],
  ["Symposium Club", "Pilot Clubs"],
  ["Boys Varsity Soccer", "ATAC Sports · Activity"],
  ["Aspirants Soccer", "ATAC Sports · Activity"],
  ["Girls Varsity Soccer", "ATAC Sports · Activity"],
  ["Girls JV Soccer", "ATAC Sports · Activity"],
  ["HS Cross Country", "ATAC Sports · Activity"],
  ["Boys Varsity Volleyball", "ATAC Sports · Activity"],
  ["Girls Varsity Volleyball", "ATAC Sports · Activity"],
  ["Girls JV Volleyball", "ATAC Sports · Activity"],
  ["Boys JV Volleyball", "ATAC Sports · Activity"],
  ["Boys Varsity Basketball", "ATAC Sports · Activity"],
  ["Boys JV Basketball", "ATAC Sports · Activity"],
  ["Aspirants Boys Basketball", "ATAC Sports · Activity"],
  ["Girls Varsity Basketball", "ATAC Sports · Activity"],
  ["Girls JV Basketball", "ATAC Sports · Activity"],
  ["Varsity Swim Team", "ATAC Sports · Activity"],
  ["Girls Varsity Touch Football", "ATAC Sports · Activity"],
  ["Girls JV Touch Football", "ATAC Sports · Activity"],
  ["Boys Varsity & JV Rugby", "ATAC Sports · Activity"],
  ["Boys Tennis", "ATAC Sports · Activity"],
  ["Girls Tennis", "ATAC Sports · Activity"],
  ["Track & Field", "ATAC Sports · Activity"],
  ["Golf Varsity and JV", "ATAC Sports · Activity"],
  ["Girls Badminton", "ATAC Sports · Activity"],
  ["Boys Badminton", "ATAC Sports · Activity"],
  ["Boys JV Badminton", "ATAC Sports · Activity"],
  ["Boys Varsity Baseball", "ATAC Sports · Activity"],
  ["Boys JV Baseball", "ATAC Sports · Activity"],
  ["Girls Varsity Softball", "ATAC Sports · Activity"],
  ["Girls JV Softball", "ATAC Sports · Activity"],
  ["HS Academic Bowl", "ATAC Sports · Activity"],
  ["Girls Contact Rugby", "ATAC Sports · Activity"],
  ["Improv Club", "AFAC (Activities)"],
  ["Girls Rugby", "AFAC (Activities)"],
  ["ISM Cricket", "AFAC (Activities)"],
  ["MUN Advisors", "Cultural Convention Events · Creativity"],
  ["IASAS Chess", "Cultural Convention Events · Creativity"],
  ["IASAS CC Art", "Cultural Convention Events · Creativity"],
  ["IASAS CC Drama", "Cultural Convention Events · Creativity"],
  ["IASAS CC Dance", "Cultural Convention Events · Creativity"],
  ["IASAS CC Vocals", "Cultural Convention Events · Creativity"],
  ["IASAS CC Strings", "Cultural Convention Events · Creativity"],
  ["IASAS CC Piano", "Cultural Convention Events · Creativity"],
  ["IASAS CC Band", "Cultural Convention Events · Creativity"],
  ["IASAS CC Debate Coordinator", "Cultural Convention Events · Creativity"],
  ["IASAS CC Debate Judge", "Cultural Convention Events · Creativity"],
  ["IASAS CC Impromptu Speaking", "Cultural Convention Events · Creativity"],
  ["IASAS CC Extemporaneous Speaking", "Cultural Convention Events · Creativity"],
  ["IASAS CC Oral Interpretation", "Cultural Convention Events · Creativity"],
  ["IASAS CC Original Oratory", "Cultural Convention Events · Creativity"],
  ["IASAS CC Film", "Cultural Convention Events · Creativity"],
  ["IASAS Math", "Cultural Convention Events · Creativity"]
];

const SHEETS = {
  Activities: ["id", "name", "category", "status", "meeting_location", "meeting_day", "meeting_time", "school_year", "updated_at"],
  Students: ["full_name", "email", "grade", "active", "school_year", "id", "updated_at"],
  Teachers: ["full_name", "email", "active", "school_year", "id", "updated_at"],
  Admins: ["full_name", "email", "active", "school_year", "id", "updated_at"],
  Assignments: ["id", "activity_id", "person_id", "display_name", "person_type", "position", "status", "school_year", "updated_at"],
  Requests: ["id", "requested_by", "requester_name", "requester_role", "request_type", "activity_id", "payload_json", "notes", "school_year", "status", "reviewed_by", "review_note", "created_at", "reviewed_at"],
  Settings: ["key", "value"],
  AuditLog: ["id", "timestamp", "actor_email", "action", "target_type", "target_id", "details_json"]
};

function onOpen() {
  SpreadsheetApp.getUi().createMenu("CAS Directory")
    .addItem("Set up / reset directory tabs", "setupCasDirectory")
    .addItem("Refresh student position options", "refreshPositionOptions")
    .addToUi();
}

function setupCasDirectory() {
  const ui = SpreadsheetApp.getUi();
  const existing = Object.keys(SHEETS).some(name => {
    const sheet = SpreadsheetApp.getActive().getSheetByName(name);
    return sheet && sheet.getLastRow() > 1;
  });
  if (existing) {
    const choice = ui.alert(
      "Replace existing CAS directory tabs?",
      "This setup action clears the eight CAS directory tabs. Use the website's school-year reset for annual rollover instead.",
      ui.ButtonSet.YES_NO
    );
    if (choice !== ui.Button.YES) return;
  }

  const yearResponse = ui.prompt("Active school year", "Enter the school year as 2026–2027.", ui.ButtonSet.OK_CANCEL);
  if (yearResponse.getSelectedButton() !== ui.Button.OK) return;
  const schoolYear = yearResponse.getResponseText().trim();
  if (!/^\d{4}[–-]\d{4}$/.test(schoolYear)) {
    ui.alert("Use the format 2026–2027, then run setup again.");
    return;
  }
  const nameResponse = ui.prompt("First administrator", "Enter the name as Last Name, First Name.", ui.ButtonSet.OK_CANCEL);
  if (nameResponse.getSelectedButton() !== ui.Button.OK) return;
  const adminName = nameResponse.getResponseText().trim();
  const emailResponse = ui.prompt("Administrator email", "Enter the administrator's ISM school email.", ui.ButtonSet.OK_CANCEL);
  if (emailResponse.getSelectedButton() !== ui.Button.OK) return;
  const adminEmail = emailResponse.getResponseText().trim().toLowerCase();
  if (!/^[^,]+,\s*.+$/.test(adminName) || !adminEmail.includes("@")) {
    ui.alert("Use Last Name, First Name and a valid school email, then run setup again.");
    return;
  }

  const spreadsheet = SpreadsheetApp.getActive();
  Object.entries(SHEETS).forEach(([name, headers]) => {
    let sheet = spreadsheet.getSheetByName(name);
    if (!sheet) sheet = spreadsheet.insertSheet(name);
    sheet.clear();
    sheet.setConditionalFormatRules([]);
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    formatSheet(sheet, headers.length);
  });

  const now = new Date().toISOString();
  const activityRows = ACTIVITIES.map((item, index) => [
    `ACT-${String(index + 1).padStart(3, "0")}`, item[0], item[1], "Active", "", "", "", schoolYear, now
  ]);
  const activitiesSheet = spreadsheet.getSheetByName("Activities");
  activitiesSheet.getRange(2, 1, activityRows.length, activityRows[0].length).setValues(activityRows);

  const adminsSheet = spreadsheet.getSheetByName("Admins");
  adminsSheet.getRange(2, 1, 1, SHEETS.Admins.length).setValues([[
    adminName, adminEmail, "TRUE", schoolYear, "P-001", now
  ]]);

  const settingsRows = [
    ["ACTIVE_SCHOOL_YEAR", schoolYear],
    ["STUDENT_POSITIONS_JSON", JSON.stringify(STUDENT_POSITIONS)]
  ];
  spreadsheet.getSheetByName("Settings").getRange(2, 1, settingsRows.length, 2).setValues(settingsRows);
  applyValidations(spreadsheet);
  spreadsheet.setActiveSheet(activitiesSheet);
  ui.alert(`CAS Directory is ready with ${ACTIVITIES.length} activities. Paste your lists into the Students, Teachers, and Admins tabs next.`);
}

function formatSheet(sheet, columnCount) {
  sheet.setFrozenRows(1);
  sheet.getRange(1, 1, 1, columnCount)
    .setBackground(ISM_GREEN)
    .setFontColor("#FFFFFF")
    .setFontWeight("bold")
    .setWrap(true);
  sheet.setRowHeight(1, 34);
  sheet.getRange(1, 1, Math.max(sheet.getMaxRows(), 2), columnCount).setVerticalAlignment("middle");
  sheet.autoResizeColumns(1, columnCount);
  sheet.setTabColor(["Settings", "Admins"].includes(sheet.getName()) ? ISM_YELLOW : ISM_GREEN);
}

function applyValidations(spreadsheet) {
  spreadsheet.getSheetByName("Students").getRange("D2:D").setDataValidation(SpreadsheetApp.newDataValidation().requireValueInList(["TRUE", "FALSE"], true).build());
  spreadsheet.getSheetByName("Teachers").getRange("C2:C").setDataValidation(SpreadsheetApp.newDataValidation().requireValueInList(["TRUE", "FALSE"], true).build());
  spreadsheet.getSheetByName("Admins").getRange("C2:C").setDataValidation(SpreadsheetApp.newDataValidation().requireValueInList(["TRUE", "FALSE"], true).build());
  const activities = spreadsheet.getSheetByName("Activities");
  activities.getRange("D2:D").setDataValidation(SpreadsheetApp.newDataValidation().requireValueInList(["Active", "Archived"], true).build());
  activities.getRange("F2:F").setDataValidation(SpreadsheetApp.newDataValidation().requireValueInList(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "By arrangement"], true).build());
}

function onEdit(event) {
  if (!event || !event.range) return;
  const sheet = event.range.getSheet();
  const prefixes = { Students: "STU", Teachers: "TCH", Admins: "ADM" };
  const prefix = prefixes[sheet.getName()];
  if (!prefix || event.range.getLastRow() < 2) return;

  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  const column = name => headers.indexOf(name) + 1;
  const settings = SpreadsheetApp.getActive().getSheetByName("Settings");
  const settingsValues = settings ? settings.getDataRange().getValues() : [];
  const activeYearRow = settingsValues.find(row => row[0] === "ACTIVE_SCHOOL_YEAR");
  const activeYear = activeYearRow ? activeYearRow[1] : "";
  const startRow = Math.max(2, event.range.getRow());
  const endRow = event.range.getLastRow();

  for (let row = startRow; row <= endRow; row += 1) {
    const name = String(sheet.getRange(row, column("full_name")).getValue() || "").trim();
    const email = String(sheet.getRange(row, column("email")).getValue() || "").trim();
    if (!name && !email) continue;
    const idCell = sheet.getRange(row, column("id"));
    const activeCell = sheet.getRange(row, column("active"));
    const yearCell = sheet.getRange(row, column("school_year"));
    if (!idCell.getValue()) idCell.setValue(`${prefix}-${Utilities.getUuid()}`);
    if (activeCell.getValue() === "") activeCell.setValue("TRUE");
    if (!yearCell.getValue() && activeYear) yearCell.setValue(activeYear);
    sheet.getRange(row, column("updated_at")).setValue(new Date().toISOString());
  }
}

function refreshPositionOptions() {
  const settings = SpreadsheetApp.getActive().getSheetByName("Settings");
  if (!settings) throw new Error("Run setupCasDirectory first.");
  const values = settings.getDataRange().getValues();
  const rowIndex = values.findIndex(row => row[0] === "STUDENT_POSITIONS_JSON");
  if (rowIndex >= 0) settings.getRange(rowIndex + 1, 2).setValue(JSON.stringify(STUDENT_POSITIONS));
  else settings.appendRow(["STUDENT_POSITIONS_JSON", JSON.stringify(STUDENT_POSITIONS)]);
  SpreadsheetApp.getUi().alert("Student position options have been refreshed.");
}
