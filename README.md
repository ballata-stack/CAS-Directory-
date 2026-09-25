# ISM CAS Directory

A responsive CAS organizations directory for International School Manila. The source code lives in GitHub, Vercel hosts the website and protected API, Google Sign-In identifies users, and a Google Sheet remains the editable source of record.

## What is included

- Google Workspace SSO with role-based access for Students, Teachers, and Administrators—no separate website password
- Search by activity, advisor, student, or position
- Filters for category, teachers only, students only, and school year
- Activity detail pages with advisor, officer, meeting location, day, and time
- Teacher requests for meeting changes, advisor replacement, student officers, and adding/removing activities
- Student requests for their own leadership position and meeting corrections
- Administrator approval/rejection queue, direct editing, people-list maintenance, CSV export, audit history, and deletion
- New-school-year rollover that retains activities and advisors but clears student officer assignments
- Automatic Co-President naming when a second President is approved
- Teacher and student “How to” guides with a print-friendly layout
- All 125 supplied activities, grouped into 14 categories
- ISM Pantone-inspired colors: green `#215732` and yellow `#F2A900`

## Preview before connecting Google

You can explore every screen without accounts or a spreadsheet:

```bash
npm run preview
```

Open `http://localhost:4173`, then choose Student, Teacher, or Admin under **Preview as**. Preview changes stay in that browser only. Use **Reset site data** in your browser storage tools if you want to return to the original sample data.

Run the built-in validation with:

```bash
npm run check
```

## 1. Create the Google Sheet

1. Create a new blank Google Sheet.
2. Open **Extensions → Apps Script**.
3. Replace the editor contents with `scripts/setup-sheet.gs` from this project.
4. Run `setupCasDirectory` and authorize the script.
5. Enter the active school year as `2026–2027`, the first administrator’s name as `Last Name, First Name`, and their ISM email.
6. Copy and paste your current lists into the separate **Students**, **Teachers**, and **Admins** tabs. Keep the exact column headers created by the setup script.

The setup creates these tabs:

| Tab | Purpose |
| --- | --- |
| Activities | Activity name, category, status, meeting location, day, time, and school year |
| Students | Student names, school emails, grades, and active status |
| Teachers | Teacher names, school emails, and active status |
| Admins | Administrator names, school emails, and active status |
| Assignments | Advisors and student officers linked to activities |
| Requests | Pending, approved, rejected, and expired changes |
| Settings | Active school year and student-position dropdown values |
| AuditLog | Administrator actions and review history |

Do not rename tabs or headers. The website uses them as its data structure.

### Students, Teachers, and Admins tab rules

- `full_name`: always `Last Name, First Name`
- `email`: the exact school Google account email
- `grade`: `9`, `10`, `11`, or `12` in the Students tab
- `active`: `TRUE` or `FALSE`
- `school_year`: for example, `2026–2027`

For quick bulk entry, paste student names, emails, and grades into the first three columns of **Students**. Paste adult names and emails into the first two columns of **Teachers** or **Admins**. The Sheet automatically fills the active status, school year, internal ID, and update time. You do not need to copy or create IDs yourself.

These three tabs drive both sign-in authorization and all name dropdowns. A person should appear in only one tab. You can also add, edit, or move a person between roles from the website’s Admin page.

## 2. Configure Google Cloud

Use one Google Cloud project for Google Sign-In and Google Sheets access.

### Enable Google Sheets access

1. Enable the **Google Sheets API** in the project.
2. Create a **service account** and download one JSON key.
3. Open the CAS Google Sheet and share it with the service account email as **Editor**. No domain-wide delegation is required for one directly shared Sheet.
4. Copy these values from the JSON key for Vercel:
   - `client_email` → `GOOGLE_SERVICE_ACCOUNT_EMAIL`
   - `private_key` → `GOOGLE_PRIVATE_KEY`

Keep the JSON key private. Never place it in GitHub.

Google’s current service-account instructions: <https://developers.google.com/workspace/guides/create-credentials>

### Configure Google Sign-In

1. In **Google Auth Platform → Clients**, create an OAuth client with application type **Web application**.
2. Configure the consent/branding screen for **ISM CAS Directory**.
3. After Vercel gives you the production URL, add its origin, such as `https://ism-cas-directory.vercel.app`, under **Authorized JavaScript origins**. Add the custom domain too if you use one.
4. Copy the Web client ID to `GOOGLE_CLIENT_ID` in Vercel.

Google’s current web setup guide: <https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid>

## 3. Put the project on GitHub

1. Create a new GitHub repository.
2. Upload the **contents** of this folder to the repository root. `index.html`, `api`, `scripts`, and `vercel.json` should all be at the top level.
3. Commit the files to the `main` branch.

Do not upload `.env`, `.env.local`, or the downloaded service-account JSON file. They are already excluded by `.gitignore`.

## 4. Deploy with Vercel

1. In Vercel, select **Add New → Project** and import the GitHub repository.
2. Keep the framework preset as **Other** and the root directory as the repository root.
3. Deploy once to obtain the production URL.
4. Add the production URL as a Google OAuth Authorized JavaScript origin.
5. In **Project Settings → Environment Variables**, add the values below for Production and Preview.
6. Redeploy.

| Variable | Value |
| --- | --- |
| `GOOGLE_CLIENT_ID` | Google OAuth Web client ID |
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | Service account `client_email` |
| `GOOGLE_PRIVATE_KEY` | Full service account `private_key`; preserve the `\n` line breaks |
| `GOOGLE_SHEET_ID` | The characters between `/d/` and `/edit` in the Sheet URL |
| `ALLOWED_DOMAIN` | `ismanila.org` |
| `ALLOWED_DOMAINS` | Comma-separated permitted domains, e.g. `ismanila.org,student.ismanila.org` |
| `ADMIN_EMAILS` | Comma-separated emergency/admin allowlist |
| `DEMO_MODE` | `false` |

Vercel environment-variable guide: <https://vercel.com/docs/environment-variables>

The `/api` folder is deployed as Vercel Functions. GitHub Pages alone cannot run the sign-in, approval, or Google Sheets portions, so use GitHub for source control and Vercel for the live website.

## 5. First live test

1. Sign in with the administrator email used during Sheet setup.
2. Open **Admin → People lists** and confirm that the administrator appears.
3. Add one test teacher and one test student using their exact school emails.
4. Sign in as the teacher and submit a meeting-time change.
5. Return as the administrator and approve it.
6. Confirm the new meeting time appears in Directory and that Audit history records the approval.

## Student positions

The dropdown starts with:

- President
- Vice President
- Secretary
- Service & Collaboration Coordinator
- PRO
- Co-Events Head
- IASAS Representative
- Photography Liaison Officer
- Webmaster
- Media Head
- Treasurer
- Others

To change this list later, edit the JSON value beside `STUDENT_POSITIONS_JSON` in the Settings tab. Keep valid JSON formatting. Choosing **Others** lets the requester type a custom position.

When a second President is approved for the same activity, the system changes both entries to **Co-President** automatically.

## School-year rollover

Use **Admin → Directory tools → Prepare next school year**. The website will:

1. Copy every active activity into the next school year.
2. Carry over current teacher advisor assignments.
3. Start with no student officer assignments.
4. Mark any still-pending requests from the previous year as Expired.
5. Keep the previous year available from the School year dropdown.

The confirmation requires typing the next school year. This protects against accidental rollover.

## Security notes

- Authorization is checked again inside every write API; hiding buttons in the browser is not treated as security.
- Google ID tokens are verified server-side and restricted to configured school domains.
- Student self-position requests must match the signed-in student’s record in the Students tab.
- The service-account private key is read only from Vercel environment variables.
- Administrative actions are recorded in AuditLog.
- Google Sheets is convenient for this school-sized directory, but it is not transactional. Avoid having several administrators approve or edit records at the exact same moment.

## Main files

| File | Purpose |
| --- | --- |
| `index.html` | All role-based screens, dialogs, and the tutorial page |
| `styles.css` | Responsive ISM visual system and print guide |
| `app.js` | Search, filtering, forms, demo mode, approval UI, and rollover behavior |
| `api/` | Google authentication, Sheets access, request validation, and admin actions |
| `scripts/setup-sheet.gs` | One-time Google Sheet creator and activity seed |
| `.env.example` | Required deployment settings without secrets |
| `vercel.json` | SPA routes and security headers |
