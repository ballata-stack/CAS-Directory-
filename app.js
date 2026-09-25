const ACTIVITY_SEED = [
  { name: "ISSBA Council", category: "Councils" },
  { name: "Senior Council", category: "Councils" },
  { name: "Junior Council", category: "Councils" },
  { name: "Sophomore Council", category: "Councils" },
  { name: "Freshman Council", category: "Councils" },
  { name: "Fine Arts Council", category: "Councils" },
  { name: "Bearcat Council", category: "Councils" },
  { name: "Sustainability Council", category: "Councils" },
  { name: "Student Ambassador Council", category: "Councils" },
  { name: "ICARE Council", category: "Councils" },
  { name: "Service Learning Council (SLC)", category: "Councils" },
  { name: "Book Club", category: "Creativity Clubs" },
  { name: "Cooking Club", category: "Creativity Clubs" },
  { name: "Character Design Club", category: "Creativity Clubs" },
  { name: "DT Club", category: "Creativity Clubs" },
  { name: "Film Club", category: "Creativity Clubs" },
  { name: "Forensics & Debate Club", category: "Creativity Clubs" },
  { name: "High School Play", category: "Creativity Clubs" },
  { name: "Logic Club", category: "Creativity Clubs" },
  { name: "Photography Club", category: "Creativity Clubs" },
  { name: "Robotics Club", category: "Creativity Clubs" },
  { name: "Visual Arts Club (VAC)", category: "Creativity Clubs" },
  { name: "World Club", category: "Creativity Clubs" },
  { name: "Symposium Club", category: "Creativity Clubs" },
  { name: "Battle of the Bands Committee", category: "Committees · Creativity & Service" },
  { name: "PROM Committee", category: "Committees · Creativity & Service" },
  { name: "Tri-M Jazz Night", category: "Committees · Creativity & Service" },
  { name: "Mosaic Club", category: "Cultural Clubs · Creativity & Service" },
  { name: "PRISM", category: "Cultural Clubs · Creativity & Service" },
  { name: "Japanese (JCC)", category: "Cultural Clubs · Creativity & Service" },
  { name: "Korean (KCC)", category: "Cultural Clubs · Creativity & Service" },
  { name: "Philippine (PCC)", category: "Cultural Clubs · Creativity & Service" },
  { name: "South Asian Cultural Club (SACC)", category: "Cultural Clubs · Creativity & Service" },
  { name: "South East Asian Cultural Club (SEACC)", category: "Cultural Clubs · Creativity & Service" },
  { name: "Chinese (CHS)", category: "Honor Societies · Creativity & Service" },
  { name: "Cum Laude", category: "Honor Societies · Creativity & Service" },
  { name: "French Honor Society (SHF)", category: "Honor Societies · Creativity & Service" },
  { name: "International Thespian Society (ITS)", category: "Honor Societies · Creativity & Service" },
  { name: "National Honor Society (NHS)", category: "Honor Societies · Creativity & Service" },
  { name: "National Art Honor Society (NAHS)", category: "Honor Societies · Creativity & Service" },
  { name: "National Dance Honor Society (NDHS)", category: "Honor Societies · Creativity & Service" },
  { name: "Quill and Scroll", category: "Honor Societies · Creativity & Service" },
  { name: "Spanish Honor Society (SHS)", category: "Honor Societies · Creativity & Service" },
  { name: "Tri-M (Music Honor Society)", category: "Honor Societies · Creativity & Service" },
  { name: "Math Honor Society", category: "Honor Societies · Creativity & Service" },
  { name: "Academic Bowl", category: "Interest Clubs · Creativity & Service" },
  { name: "Entrepreneur Club", category: "Interest Clubs · Creativity & Service" },
  { name: "ERA (Environmental Recreation Activities) Club", category: "Interest Clubs · Creativity & Service" },
  { name: "Chess Club", category: "Interest Clubs · Creativity & Service" },
  { name: "Code Club", category: "Interest Clubs · Creativity & Service" },
  { name: "Inclusion Revolution", category: "Interest Clubs · Creativity & Service" },
  { name: "Investment Club", category: "Interest Clubs · Creativity & Service" },
  { name: "STEM Club", category: "Interest Clubs · Creativity & Service" },
  { name: "Banking and Economics Club", category: "Interest Clubs · Creativity & Service" },
  { name: "MUN", category: "MUN · Creativity" },
  { name: "Bamboo Telegraph", category: "Publications · Creativity & Service" },
  { name: "Bamboo Telegraph TV", category: "Publications · Creativity & Service" },
  { name: "Kawayan", category: "Publications · Creativity & Service" },
  { name: "Liham", category: "Publications · Creativity & Service" },
  { name: "EmpowHER", category: "Service Clubs" },
  { name: "Foster The Children (FTC)", category: "Service Clubs" },
  { name: "Chosen Children Village (CCV)", category: "Service Clubs" },
  { name: "Kasama", category: "Service Clubs" },
  { name: "Mental Health Awareness Club", category: "Service Clubs" },
  { name: "Mentorship Program", category: "Service Clubs" },
  { name: "Samahang Bukas Palad (SBP)", category: "Service Clubs" },
  { name: "SPECS-TECC", category: "Service Clubs" },
  { name: "Peer Counseling", category: "Service Clubs" },
  { name: "Stepping Stone Club", category: "Service Clubs" },
  { name: "Animal Welfare Club", category: "Service Clubs" },
  { name: "SET (Supporting Education in Tagaytay)", category: "Service Clubs" },
  { name: "Student Physio Club", category: "Pilot Clubs" },
  { name: "Agora", category: "Philosophy Club · Pilot Clubs" },
  { name: "Symposium Club", category: "Pilot Clubs" },
  { name: "Boys Varsity Soccer", category: "ATAC Sports · Activity" },
  { name: "Aspirants Soccer", category: "ATAC Sports · Activity" },
  { name: "Girls Varsity Soccer", category: "ATAC Sports · Activity" },
  { name: "Girls JV Soccer", category: "ATAC Sports · Activity" },
  { name: "HS Cross Country", category: "ATAC Sports · Activity" },
  { name: "Boys Varsity Volleyball", category: "ATAC Sports · Activity" },
  { name: "Girls Varsity Volleyball", category: "ATAC Sports · Activity" },
  { name: "Girls JV Volleyball", category: "ATAC Sports · Activity" },
  { name: "Boys JV Volleyball", category: "ATAC Sports · Activity" },
  { name: "Boys Varsity Basketball", category: "ATAC Sports · Activity" },
  { name: "Boys JV Basketball", category: "ATAC Sports · Activity" },
  { name: "Aspirants Boys Basketball", category: "ATAC Sports · Activity" },
  { name: "Girls Varsity Basketball", category: "ATAC Sports · Activity" },
  { name: "Girls JV Basketball", category: "ATAC Sports · Activity" },
  { name: "Varsity Swim Team", category: "ATAC Sports · Activity" },
  { name: "Girls Varsity Touch Football", category: "ATAC Sports · Activity" },
  { name: "Girls JV Touch Football", category: "ATAC Sports · Activity" },
  { name: "Boys Varsity & JV Rugby", category: "ATAC Sports · Activity" },
  { name: "Boys Tennis", category: "ATAC Sports · Activity" },
  { name: "Girls Tennis", category: "ATAC Sports · Activity" },
  { name: "Track & Field", category: "ATAC Sports · Activity" },
  { name: "Golf Varsity and JV", category: "ATAC Sports · Activity" },
  { name: "Girls Badminton", category: "ATAC Sports · Activity" },
  { name: "Boys Badminton", category: "ATAC Sports · Activity" },
  { name: "Boys JV Badminton", category: "ATAC Sports · Activity" },
  { name: "Boys Varsity Baseball", category: "ATAC Sports · Activity" },
  { name: "Boys JV Baseball", category: "ATAC Sports · Activity" },
  { name: "Girls Varsity Softball", category: "ATAC Sports · Activity" },
  { name: "Girls JV Softball", category: "ATAC Sports · Activity" },
  { name: "HS Academic Bowl", category: "ATAC Sports · Activity" },
  { name: "Girls Contact Rugby", category: "ATAC Sports · Activity" },
  { name: "Improv Club", category: "AFAC (Activities)" },
  { name: "Girls Rugby", category: "AFAC (Activities)" },
  { name: "ISM Cricket", category: "AFAC (Activities)" },
  { name: "MUN Advisors", category: "Cultural Convention Events · Creativity" },
  { name: "IASAS Chess", category: "Cultural Convention Events · Creativity" },
  { name: "IASAS CC Art", category: "Cultural Convention Events · Creativity" },
  { name: "IASAS CC Drama", category: "Cultural Convention Events · Creativity" },
  { name: "IASAS CC Dance", category: "Cultural Convention Events · Creativity" },
  { name: "IASAS CC Vocals", category: "Cultural Convention Events · Creativity" },
  { name: "IASAS CC Strings", category: "Cultural Convention Events · Creativity" },
  { name: "IASAS CC Piano", category: "Cultural Convention Events · Creativity" },
  { name: "IASAS CC Band", category: "Cultural Convention Events · Creativity" },
  { name: "IASAS CC Debate Coordinator", category: "Cultural Convention Events · Creativity" },
  { name: "IASAS CC Debate Judge", category: "Cultural Convention Events · Creativity" },
  { name: "IASAS CC Impromptu Speaking", category: "Cultural Convention Events · Creativity" },
  { name: "IASAS CC Extemporaneous Speaking", category: "Cultural Convention Events · Creativity" },
  { name: "IASAS CC Oral Interpretation", category: "Cultural Convention Events · Creativity" },
  { name: "IASAS CC Original Oratory", category: "Cultural Convention Events · Creativity" },
  { name: "IASAS CC Film", category: "Cultural Convention Events · Creativity" },
  { name: "IASAS Math", category: "Cultural Convention Events · Creativity" }
];

const DEFAULT_STUDENT_POSITIONS = [
  "President",
  "Vice President",
  "Secretary",
  "Service & Collaboration Coordinator",
  "PRO",
  "Co-Events Head",
  "IASAS Representative",
  "Photography Liaison Officer",
  "Webmaster",
  "Media Head",
  "Treasurer",
  "Others"
];

const CATEGORY_COLORS = ["#215732", "#2f6f89", "#7a5b14", "#8a3e65", "#346a61", "#5f5c8f", "#9a4d31"];
const DEMO_STORAGE_KEY = "ism-cas-directory-demo-v1";

const state = {
  config: { demoMode: true, googleClientId: "", allowedDomain: "ismanila.org" },
  token: sessionStorage.getItem("ismCasToken") || "",
  user: null,
  activeYear: "2026–2027",
  selectedYear: "2026–2027",
  years: ["2026–2027"],
  activities: [],
  assignments: [],
  people: [],
  requests: [],
  audit: [],
  studentPositions: [...DEFAULT_STUDENT_POSITIONS],
  activeCategory: "",
  activityLayout: "grid",
  currentRequestType: "update_meeting",
  currentView: "directory"
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalize(value = "") {
  return String(value).toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
}

function uid(prefix = "ID") {
  const random = crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  return `${prefix}-${random}`;
}

function initials(name = "") {
  const clean = name.includes(",") ? name.split(",").reverse().join(" ") : name;
  return clean.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join("").toUpperCase() || "?";
}

function displayName(name = "") {
  if (!name.includes(",")) return name;
  const [last, ...rest] = name.split(",");
  return `${rest.join(",").trim()} ${last.trim()}`.trim();
}

function categoryColor(category = "") {
  let hash = 0;
  for (const char of category) hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  return CATEGORY_COLORS[hash % CATEGORY_COLORS.length];
}

function formatDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "—";
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(date);
}

function nextSchoolYear(year) {
  const match = String(year).match(/(\d{4}).*?(\d{4})/);
  if (!match) return year;
  return `${Number(match[1]) + 1}–${Number(match[2]) + 1}`;
}

function getActivity(activityId) {
  return state.activities.find((activity) => activity.id === activityId);
}

function activityByName(name, category = "") {
  return state.activities.find((activity) => activity.name === name && (!category || activity.category === category));
}

function assignmentsFor(activityId, kind = "") {
  return state.assignments.filter((assignment) =>
    assignment.activityId === activityId &&
    assignment.schoolYear === state.selectedYear &&
    assignment.status !== "Archived" &&
    (!kind || assignment.kind === kind)
  );
}

function categoriesForYear() {
  return [...new Set(state.activities
    .filter((activity) => activity.schoolYear === state.selectedYear && activity.status !== "Archived")
    .map((activity) => activity.category))].sort((a, b) => a.localeCompare(b));
}

function personName(assignment) {
  const person = state.people.find((candidate) => candidate.id === assignment.personId);
  return assignment.displayName || person?.name || "Name unavailable";
}

function currentActivities() {
  return state.activities
    .filter((activity) => activity.schoolYear === state.selectedYear && activity.status !== "Archived")
    .sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name));
}

function persistDemo() {
  if (!state.config.demoMode) return;
  localStorage.setItem(DEMO_STORAGE_KEY, JSON.stringify({
    activeYear: state.activeYear,
    selectedYear: state.selectedYear,
    years: state.years,
    activities: state.activities,
    assignments: state.assignments,
    people: state.people,
    requests: state.requests,
    audit: state.audit
  }));
}

function createDemoData() {
  const stored = localStorage.getItem(DEMO_STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      localStorage.removeItem(DEMO_STORAGE_KEY);
    }
  }

  const schoolYear = "2026–2027";
  const activities = ACTIVITY_SEED.map((item, index) => ({
    id: `ACT-${String(index + 1).padStart(3, "0")}`,
    ...item,
    schoolYear,
    status: "Active",
    meetingLocation: "",
    meetingDay: "",
    meetingTime: "",
    updatedAt: new Date().toISOString()
  }));

  const people = [
    { id: "P-001", name: "Ballat, Arbee", email: "arbee.ballat@ismanila.org", type: "Admin", grade: "", active: true, schoolYear },
    { id: "P-002", name: "Rivera, Elena", email: "elena.rivera@ismanila.org", type: "Teacher", grade: "", active: true, schoolYear },
    { id: "P-003", name: "Morgan, Daniel", email: "daniel.morgan@ismanila.org", type: "Teacher", grade: "", active: true, schoolYear },
    { id: "P-004", name: "Villanueva, Grace", email: "grace.villanueva@ismanila.org", type: "Teacher", grade: "", active: true, schoolYear },
    { id: "P-005", name: "Lee, Hannah", email: "hannah.lee@ismanila.org", type: "Teacher", grade: "", active: true, schoolYear },
    { id: "P-006", name: "Bennett, Marcus", email: "marcus.bennett@ismanila.org", type: "Teacher", grade: "", active: true, schoolYear },
    { id: "P-101", name: "Adams, Maya", email: "maya.adams@student.ismanila.org", type: "Student", grade: "12", active: true, schoolYear },
    { id: "P-102", name: "Chen, Lucas", email: "lucas.chen@student.ismanila.org", type: "Student", grade: "11", active: true, schoolYear },
    { id: "P-103", name: "Santos, Sofia", email: "sofia.santos@student.ismanila.org", type: "Student", grade: "12", active: true, schoolYear },
    { id: "P-104", name: "Lim, Daniel", email: "daniel.lim@student.ismanila.org", type: "Student", grade: "10", active: true, schoolYear },
    { id: "P-105", name: "Rahman, Aisha", email: "aisha.rahman@student.ismanila.org", type: "Student", grade: "11", active: true, schoolYear },
    { id: "P-106", name: "Sato, Kenji", email: "kenji.sato@student.ismanila.org", type: "Student", grade: "9", active: true, schoolYear },
    { id: "P-107", name: "Nair, Priya", email: "priya.nair@student.ismanila.org", type: "Student", grade: "12", active: true, schoolYear },
    { id: "P-108", name: "Cruz, Gabriel", email: "gabriel.cruz@student.ismanila.org", type: "Student", grade: "10", active: true, schoolYear }
  ];

  const details = {
    "Robotics Club": ["Room 2097", "Wednesday", "Lunch"],
    "Book Club": ["HS Library", "Tuesday", "Lunch"],
    "Senior Council": ["Room 3034", "Thursday", "11:35–12:15"],
    "Junior Council": ["Room 3041", "Monday", "Lunch"],
    "Photography Club": ["Fine Arts 201", "Friday", "3:00–4:00"],
    "MUN": ["Room 1057", "Wednesday", "3:00–4:30"],
    "National Honor Society (NHS)": ["Room 2014", "Tuesday", "Lunch"],
    "Bamboo Telegraph": ["Media Center", "Thursday", "3:00–4:00"],
    "Animal Welfare Club": ["Room 2042", "Monday", "Lunch"],
    "Boys Varsity Basketball": ["HS Gym", "By arrangement", "After school"]
  };
  Object.entries(details).forEach(([name, [meetingLocation, meetingDay, meetingTime]]) => {
    const activity = activities.find((item) => item.name === name);
    if (activity) Object.assign(activity, { meetingLocation, meetingDay, meetingTime });
  });

  const assignments = [];
  let assignmentNumber = 1;
  const addAssignment = (activityName, personId, kind, position) => {
    const activity = activities.find((item) => item.name === activityName);
    if (!activity) return;
    assignments.push({
      id: `ASN-${String(assignmentNumber++).padStart(3, "0")}`,
      activityId: activity.id,
      personId,
      displayName: "",
      kind,
      position,
      status: "Active",
      schoolYear,
      updatedAt: new Date().toISOString()
    });
  };

  addAssignment("Robotics Club", "P-002", "Advisor", "Advisor");
  addAssignment("Robotics Club", "P-101", "Student Officer", "President");
  addAssignment("Robotics Club", "P-102", "Student Officer", "Vice President");
  addAssignment("Book Club", "P-003", "Advisor", "Advisor");
  addAssignment("Book Club", "P-105", "Student Officer", "President");
  addAssignment("Senior Council", "P-004", "Advisor", "Advisor");
  addAssignment("Senior Council", "P-103", "Student Officer", "President");
  addAssignment("Junior Council", "P-004", "Advisor", "Advisor");
  addAssignment("Junior Council", "P-104", "Student Officer", "President");
  addAssignment("Photography Club", "P-005", "Advisor", "Advisor");
  addAssignment("Photography Club", "P-106", "Student Officer", "President");
  addAssignment("MUN", "P-006", "Advisor", "Advisor");
  addAssignment("MUN", "P-107", "Student Officer", "Secretary General");
  addAssignment("National Honor Society (NHS)", "P-003", "Advisor", "Advisor");
  addAssignment("National Honor Society (NHS)", "P-101", "Student Officer", "President");
  addAssignment("Bamboo Telegraph", "P-005", "Advisor", "Advisor");
  addAssignment("Bamboo Telegraph", "P-108", "Student Officer", "Editor-in-Chief");
  addAssignment("Animal Welfare Club", "P-002", "Advisor", "Advisor");
  addAssignment("Animal Welfare Club", "P-105", "Student Officer", "Co-President");
  addAssignment("Animal Welfare Club", "P-107", "Student Officer", "Co-President");
  addAssignment("Boys Varsity Basketball", "P-006", "Advisor", "Coach");

  const now = Date.now();
  const requests = [
    {
      id: "REQ-001",
      requesterEmail: "elena.rivera@ismanila.org",
      requesterName: "Rivera, Elena",
      requesterRole: "Teacher",
      requestType: "update_meeting",
      activityId: activities.find((item) => item.name === "Robotics Club")?.id,
      payload: { meetingLocation: "Room 2097", meetingDay: "Thursday", meetingTime: "Lunch" },
      notes: "New regular meeting day for Semester 2.",
      schoolYear,
      status: "Pending",
      createdAt: new Date(now - 1000 * 60 * 42).toISOString(),
      reviewedAt: "",
      reviewedBy: "",
      reviewNote: ""
    },
    {
      id: "REQ-002",
      requesterEmail: "hannah.lee@ismanila.org",
      requesterName: "Lee, Hannah",
      requesterRole: "Teacher",
      requestType: "add_student",
      activityId: activities.find((item) => item.name === "Photography Club")?.id,
      payload: { personId: "P-102", displayName: "", position: "Vice President" },
      notes: "Lucas was selected by the club.",
      schoolYear,
      status: "Pending",
      createdAt: new Date(now - 1000 * 60 * 60 * 5).toISOString(),
      reviewedAt: "",
      reviewedBy: "",
      reviewNote: ""
    },
    {
      id: "REQ-003",
      requesterEmail: "daniel.lim@student.ismanila.org",
      requesterName: "Lim, Daniel",
      requesterRole: "Student",
      requestType: "self_position",
      activityId: activities.find((item) => item.name === "Code Club")?.id,
      payload: { personId: "P-104", displayName: "", position: "President" },
      notes: "Selected at the first club meeting.",
      schoolYear,
      status: "Pending",
      createdAt: new Date(now - 1000 * 60 * 60 * 26).toISOString(),
      reviewedAt: "",
      reviewedBy: "",
      reviewNote: ""
    }
  ];

  return { activeYear: schoolYear, selectedYear: schoolYear, years: [schoolYear], activities, assignments, people, requests, audit: [], studentPositions: [...DEFAULT_STUDENT_POSITIONS] };
}

async function loadConfig() {
  try {
    const response = await fetch("/api/config", { headers: { Accept: "application/json" } });
    if (!response.ok) throw new Error("Configuration unavailable");
    const config = await response.json();
    state.config = { ...state.config, ...config, demoMode: Boolean(config.demoMode) };
  } catch {
    state.config.demoMode = true;
  }
}

async function apiFetch(path, options = {}) {
  const headers = { "Content-Type": "application/json", ...(options.headers || {}) };
  if (state.token) headers.Authorization = `Bearer ${state.token}`;
  const response = await fetch(path, { ...options, headers });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(payload.error || "The request could not be completed.");
  return payload;
}

function setData(data) {
  state.activeYear = data.activeYear || state.activeYear;
  state.selectedYear = data.selectedYear || data.activeYear || state.selectedYear;
  state.years = data.years?.length ? data.years : [state.activeYear];
  state.activities = data.activities || [];
  state.assignments = data.assignments || [];
  state.people = data.people || [];
  state.requests = data.requests || [];
  state.audit = data.audit || [];
  state.studentPositions = data.studentPositions?.length ? data.studentPositions : [...DEFAULT_STUDENT_POSITIONS];
}

async function loadDirectoryData() {
  if (state.config.demoMode) {
    setData(createDemoData());
    return;
  }
  const data = await apiFetch(`/api/data?year=${encodeURIComponent(state.selectedYear)}`);
  setData(data);
}

function roleLabel(role) {
  return role === "Admin" ? "Administrator" : role;
}

function roleUser(role) {
  const mapping = {
    Admin: { name: "Ballat, Arbee", email: "arbee.ballat@ismanila.org", role: "Admin", personId: "P-001" },
    Teacher: { name: "Rivera, Elena", email: "elena.rivera@ismanila.org", role: "Teacher", personId: "P-002" },
    Student: { name: "Lim, Daniel", email: "daniel.lim@student.ismanila.org", role: "Student", personId: "P-104" }
  };
  return mapping[role];
}

function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `toast${type === "error" ? " is-error" : ""}`;
  toast.textContent = message;
  $("#toast-region").append(toast);
  window.setTimeout(() => toast.remove(), 4200);
}

function showLogin(message = "") {
  $("#login-screen").hidden = false;
  $("#app-shell").hidden = true;
  $("#login-status").textContent = message;
  $("#login-status").classList.toggle("is-error", Boolean(message));
}

async function enterApp() {
  await loadDirectoryData();
  state.currentRequestType = state.user?.role === "Student" ? "self_position" : "update_meeting";
  $("#login-screen").hidden = true;
  $("#app-shell").hidden = false;

  const isAdmin = state.user?.role === "Admin";
  $$(".admin-only").forEach((element) => { element.hidden = !isAdmin; });
  $("#user-name").textContent = displayName(state.user?.name || state.user?.email || "Signed-in user");
  $("#user-role").textContent = roleLabel(state.user?.role || "Student");
  $("#user-avatar").textContent = initials(state.user?.name || state.user?.email);
  $("#submit-nav-label").textContent = state.user?.role === "Student" ? "Submit a request" : "Submit update";

  renderAll();
  const pathView = location.pathname.split("/").filter(Boolean).at(-1);
  const allowedViews = ["directory", "activities", "submit", "how-to", "admin"];
  const requestedView = allowedViews.includes(pathView) ? pathView : "directory";
  switchView(requestedView === "admin" && !isAdmin ? "directory" : requestedView, false);
  registerWebMcpTools();
}

async function demoSignIn(role) {
  state.user = roleUser(role);
  try {
    await enterApp();
  } catch (error) {
    showLogin(error.message);
  }
}

async function handleGoogleCredential(response) {
  try {
    $("#login-status").textContent = "Checking your school account…";
    state.token = response.credential;
    sessionStorage.setItem("ismCasToken", state.token);
    const result = await apiFetch("/api/auth", { method: "POST", body: JSON.stringify({ credential: response.credential }) });
    state.user = result.user;
    await enterApp();
  } catch (error) {
    state.token = "";
    sessionStorage.removeItem("ismCasToken");
    showLogin(error.message);
  }
}

function initializeGoogleSignIn() {
  const fallback = $("#google-signin-fallback");
  fallback.addEventListener("click", () => {
    $("#login-status").textContent = "Loading secure Google sign-in…";
    window.google?.accounts?.id?.prompt();
  });

  const script = document.createElement("script");
  script.src = "https://accounts.google.com/gsi/client";
  script.async = true;
  script.defer = true;
  script.onload = () => {
    window.google.accounts.id.initialize({
      client_id: state.config.googleClientId,
      callback: handleGoogleCredential,
      hd: state.config.allowedDomain || undefined,
      ux_mode: "popup"
    });
    const container = $("#google-signin-container");
    container.innerHTML = "";
    window.google.accounts.id.renderButton(container, {
      theme: "outline",
      size: "large",
      width: Math.min(container.clientWidth || 420, 420),
      text: "continue_with",
      shape: "rectangular"
    });
  };
  script.onerror = () => {
    $("#login-status").textContent = "Google sign-in could not load. Please refresh and try again.";
  };
  document.head.append(script);
}

async function resumeProductionSession() {
  if (!state.token) return false;
  try {
    const result = await apiFetch("/api/auth");
    state.user = result.user;
    await enterApp();
    return true;
  } catch {
    state.token = "";
    sessionStorage.removeItem("ismCasToken");
    return false;
  }
}

function renderAll() {
  renderSchoolYears();
  renderFilterOptions();
  renderStats();
  renderDirectory();
  renderCategoryTabs();
  renderActivities();
  renderRequestForm();
  renderMyRequests();
  renderAdmin();
}

function renderSchoolYears() {
  const options = [...new Set(state.years)].sort().reverse().map((year) =>
    `<option value="${escapeHtml(year)}" ${year === state.selectedYear ? "selected" : ""}>${escapeHtml(year)}</option>`
  ).join("");
  $("#school-year-select").innerHTML = options;
  $("#sidebar-school-year").textContent = state.activeYear;
  $("#login-school-year").textContent = state.activeYear;
}

function renderFilterOptions() {
  const categories = categoriesForYear();
  const categoryValue = $("#category-filter").value;
  $("#category-filter").innerHTML = `<option value="">All categories</option>${categories.map((category) =>
    `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`
  ).join("")}`;
  if (categories.includes(categoryValue)) $("#category-filter").value = categoryValue;

  const activityOptions = currentActivities().map((activity) =>
    `<option value="${escapeHtml(activity.id)}">${escapeHtml(activity.name)} — ${escapeHtml(activity.category)}</option>`
  ).join("");
  const selectedActivity = $("#request-activity").value;
  $("#request-activity").innerHTML = `<option value="">Select an activity</option>${activityOptions}`;
  if (state.activities.some((activity) => activity.id === selectedActivity)) $("#request-activity").value = selectedActivity;

  const categorySelectOptions = categories.map((category) => `<option>${escapeHtml(category)}</option>`).join("");
  $("#new-activity-category").innerHTML = `<option value="">Select a category</option>${categorySelectOptions}`;
}

function renderStats() {
  const activities = currentActivities();
  const activityIds = new Set(activities.map((activity) => activity.id));
  const activeAssignments = state.assignments.filter((assignment) =>
    assignment.schoolYear === state.selectedYear && assignment.status !== "Archived" && activityIds.has(assignment.activityId)
  );
  const advisors = new Set(activeAssignments.filter((assignment) => assignment.kind === "Advisor").map((assignment) => assignment.personId || assignment.displayName));
  const officers = new Set(activeAssignments.filter((assignment) => assignment.kind === "Student Officer").map((assignment) => assignment.personId || assignment.displayName));
  const pending = state.requests.filter((request) => request.schoolYear === state.selectedYear && request.status === "Pending").length;
  $("#stat-activities").textContent = activities.length;
  $("#stat-advisors").textContent = advisors.size;
  $("#stat-students").textContent = officers.size;
  $("#stat-pending").textContent = pending;
  $("#pending-nav-count").textContent = pending;
}

function filteredDirectoryActivities() {
  const query = normalize($("#directory-search").value);
  const category = $("#category-filter").value;
  const role = $("#role-filter").value;
  return currentActivities().filter((activity) => {
    if (category && activity.category !== category) return false;
    const advisors = assignmentsFor(activity.id, "Advisor");
    const officers = assignmentsFor(activity.id, "Student Officer");
    if (role === "Advisor" && !advisors.length) return false;
    if (role === "Student Officer" && !officers.length) return false;
    if (!query) return true;
    const peopleText = [...advisors, ...officers].map((assignment) => `${personName(assignment)} ${assignment.position}`).join(" ");
    return normalize(`${activity.name} ${activity.category} ${activity.meetingLocation} ${activity.meetingDay} ${activity.meetingTime} ${peopleText}`).includes(query);
  });
}

function peopleLines(assignments, kind) {
  if (!assignments.length) return `<span class="muted-value">Not listed</span>`;
  return `<div class="${kind === "Advisor" ? "person-list" : "officer-list"}">${assignments.slice(0, 3).map((assignment) => {
    const name = personName(assignment);
    if (kind === "Advisor") {
      return `<div class="person-line"><span class="mini-avatar mini-avatar--teacher">${escapeHtml(initials(name))}</span><span>${escapeHtml(displayName(name))}</span></div>`;
    }
    return `<div class="officer-line"><strong>${escapeHtml(displayName(name))}</strong><span class="position-pill">${escapeHtml(assignment.position)}</span></div>`;
  }).join("")}${assignments.length > 3 ? `<small>+${assignments.length - 3} more</small>` : ""}</div>`;
}

function renderDirectory() {
  const activities = filteredDirectoryActivities();
  $("#directory-result-count").textContent = activities.length;
  const body = $("#directory-table-body");
  body.innerHTML = activities.map((activity) => {
    const advisors = assignmentsFor(activity.id, "Advisor");
    const officers = assignmentsFor(activity.id, "Student Officer");
    const hasMeeting = activity.meetingLocation || activity.meetingDay || activity.meetingTime;
    return `<tr data-open-activity="${escapeHtml(activity.id)}">
      <td><div class="activity-cell"><strong>${escapeHtml(activity.name)}</strong><small class="category-pill">${escapeHtml(activity.category)}</small></div></td>
      <td>${peopleLines(advisors, "Advisor")}</td>
      <td>${peopleLines(officers, "Student Officer")}</td>
      <td>${hasMeeting ? `<div class="meeting-cell"><strong>${escapeHtml(activity.meetingDay || "Day not listed")} · ${escapeHtml(activity.meetingTime || "Time not listed")}</strong><small>${escapeHtml(activity.meetingLocation || "Location not listed")}</small></div>` : `<span class="muted-value">Details not listed</span>`}</td>
      <td><button class="row-action" type="button" data-activity-id="${escapeHtml(activity.id)}" aria-label="View ${escapeHtml(activity.name)}"><svg aria-hidden="true"><use href="#icon-chevron-down"></use></svg></button></td>
    </tr>`;
  }).join("");
  $("#directory-empty").hidden = activities.length > 0;
}

function renderCategoryTabs() {
  const activities = currentActivities();
  const categories = categoriesForYear();
  if (state.activeCategory && !categories.includes(state.activeCategory)) state.activeCategory = "";
  $("#category-tabs").innerHTML = [
    `<button class="category-tab${state.activeCategory ? "" : " is-active"}" type="button" role="tab" data-category="">All <span>${activities.length}</span></button>`,
    ...categories.map((category) => {
      const count = activities.filter((activity) => activity.category === category).length;
      return `<button class="category-tab${state.activeCategory === category ? " is-active" : ""}" type="button" role="tab" data-category="${escapeHtml(category)}">${escapeHtml(category)} <span>${count}</span></button>`;
    })
  ].join("");
}

function filteredActivitiesGrid() {
  const query = normalize($("#activities-search").value);
  return currentActivities().filter((activity) => {
    if (state.activeCategory && activity.category !== state.activeCategory) return false;
    const assignments = assignmentsFor(activity.id);
    const text = `${activity.name} ${activity.category} ${activity.meetingLocation} ${assignments.map((item) => `${personName(item)} ${item.position}`).join(" ")}`;
    return !query || normalize(text).includes(query);
  });
}

function renderActivities() {
  const activities = filteredActivitiesGrid();
  const grid = $("#activities-grid");
  grid.classList.toggle("is-list", state.activityLayout === "list");
  const heading = state.activeCategory || "All activities";
  $("#activities-heading").innerHTML = `<strong>${escapeHtml(heading)}</strong> · ${activities.length}`;
  grid.innerHTML = activities.length ? activities.map((activity) => {
    const advisors = assignmentsFor(activity.id, "Advisor");
    const officers = assignmentsFor(activity.id, "Student Officer");
    const advisorText = advisors.length ? advisors.map((item) => displayName(personName(item))).join(", ") : "Advisor not listed";
    const officerText = officers.length ? officers.map((item) => `${displayName(personName(item))} · ${item.position}`).join(", ") : "Student leadership not listed";
    const meeting = [activity.meetingDay, activity.meetingTime, activity.meetingLocation].filter(Boolean).join(" · ") || "Meeting details not listed";
    return `<button class="activity-card" type="button" data-activity-id="${escapeHtml(activity.id)}" style="--category-color:${categoryColor(activity.category)}">
      <div class="activity-card-top"><div><span class="category-pill">${escapeHtml(activity.category)}</span><h3>${escapeHtml(activity.name)}</h3></div><span class="card-arrow"><svg aria-hidden="true"><use href="#icon-chevron-down"></use></svg></span></div>
      <div class="activity-card-people">
        <p><svg aria-hidden="true"><use href="#icon-teacher"></use></svg><span>${escapeHtml(advisorText)}</span></p>
        <p><svg aria-hidden="true"><use href="#icon-student"></use></svg><span>${escapeHtml(officerText)}</span></p>
      </div>
      <div class="activity-card-meeting"><svg aria-hidden="true"><use href="#icon-clock"></use></svg><span>${escapeHtml(meeting)}</span></div>
    </button>`;
  }).join("") : `<div class="empty-state surface"><span class="empty-icon"><svg aria-hidden="true"><use href="#icon-search"></use></svg></span><h3>No matching activities</h3><p>Try another category or search term.</p></div>`;
}

function openActivityDrawer(activityId) {
  const activity = getActivity(activityId);
  if (!activity) return;
  const advisors = assignmentsFor(activityId, "Advisor");
  const officers = assignmentsFor(activityId, "Student Officer");
  const peopleBlock = (items, type) => items.length ? items.map((assignment) => {
    const name = personName(assignment);
    return `<div class="drawer-person"><span class="mini-avatar${type === "Advisor" ? " mini-avatar--teacher" : ""}">${escapeHtml(initials(name))}</span><div><strong>${escapeHtml(displayName(name))}</strong><small>${escapeHtml(assignment.position)}</small></div></div>`;
  }).join("") : `<p class="muted-value">No ${type === "Advisor" ? "advisor" : "student officer"} is listed.</p>`;

  $("#drawer-content").innerHTML = `
    <span class="category-pill drawer-category">${escapeHtml(activity.category)}</span>
    <h2 id="drawer-title">${escapeHtml(activity.name)}</h2>
    <p class="drawer-year">${escapeHtml(activity.schoolYear)}</p>
    <section class="drawer-section"><h3>Meeting schedule</h3><div class="meeting-grid">
      <div class="meeting-item"><small>Location</small><strong>${escapeHtml(activity.meetingLocation || "Not listed")}</strong></div>
      <div class="meeting-item"><small>Day</small><strong>${escapeHtml(activity.meetingDay || "Not listed")}</strong></div>
      <div class="meeting-item"><small>Time</small><strong>${escapeHtml(activity.meetingTime || "Not listed")}</strong></div>
    </div></section>
    <section class="drawer-section"><h3>Advisor${advisors.length === 1 ? "" : "s"}</h3><div class="drawer-person-list">${peopleBlock(advisors, "Advisor")}</div></section>
    <section class="drawer-section"><h3>Student leadership</h3><div class="drawer-person-list">${peopleBlock(officers, "Student Officer")}</div></section>
    <div class="drawer-actions">
      <button class="button button--primary" type="button" data-request-for="${escapeHtml(activity.id)}"><svg aria-hidden="true"><use href="#icon-edit"></use></svg>Request an update</button>
      ${state.user?.role === "Admin" ? `<button class="button button--quiet" type="button" data-edit-activity="${escapeHtml(activity.id)}">Edit directly</button><button class="button button--danger" type="button" data-delete-activity="${escapeHtml(activity.id)}">Delete</button>` : ""}
    </div>`;
  const drawer = $("#activity-drawer");
  drawer.classList.add("is-open");
  drawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-locked");
  $(".drawer-close").focus();
}

function closeActivityDrawer() {
  const drawer = $("#activity-drawer");
  drawer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("is-locked");
}

function switchView(view, updateHistory = true) {
  if (view === "admin" && state.user?.role !== "Admin") return;
  state.currentView = view;
  $$("[data-view-panel]").forEach((panel) => {
    const active = panel.dataset.viewPanel === view;
    panel.hidden = !active;
    panel.classList.toggle("is-active", active);
  });
  $$(".nav-item[data-view]").forEach((item) => item.classList.toggle("is-active", item.dataset.view === view));
  document.title = `${view.charAt(0).toUpperCase() + view.slice(1)} · ISM CAS Directory`;
  closeMobileNav();
  if (updateHistory) history.pushState({ view }, "", view === "directory" ? "/" : `/${view}`);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openMobileNav() {
  $(".sidebar").classList.add("is-open");
  $("#mobile-nav-overlay").hidden = false;
  $("#mobile-nav-button").setAttribute("aria-expanded", "true");
}

function closeMobileNav() {
  $(".sidebar").classList.remove("is-open");
  $("#mobile-nav-overlay").hidden = true;
  $("#mobile-nav-button").setAttribute("aria-expanded", "false");
}

const REQUEST_TYPES = {
  update_meeting: { label: "Update meeting details", description: "Change the location, day, or time.", icon: "M" },
  replace_advisor: { label: "Add or replace advisor", description: "A newly approved advisor replaces the current advisor list.", icon: "A" },
  add_student: { label: "Add student officer", description: "Add a student and their club position.", icon: "S" },
  remove_person: { label: "Remove a person", description: "Remove an advisor or student officer from an activity.", icon: "−" },
  add_activity: { label: "Add an activity", description: "Request a new activity for the directory.", icon: "+" },
  remove_activity: { label: "Remove an activity", description: "Request that an activity be removed.", icon: "×" },
  self_position: { label: "Add or update my position", description: "Submit your own student leadership position.", icon: "S" }
};

function allowedRequestTypes() {
  if (state.user?.role === "Student") return ["self_position", "update_meeting"];
  return ["update_meeting", "replace_advisor", "add_student", "remove_person", "add_activity", "remove_activity"];
}

function requestTypeLabel(type) {
  return REQUEST_TYPES[type]?.label || type.replaceAll("_", " ");
}

function renderRequestForm() {
  const allowed = allowedRequestTypes();
  if (!allowed.includes(state.currentRequestType)) state.currentRequestType = allowed[0];
  $("#request-type-options").innerHTML = allowed.map((type) => {
    const item = REQUEST_TYPES[type];
    return `<label class="request-type-option${state.currentRequestType === type ? " is-selected" : ""}">
      <input type="radio" name="requestType" value="${type}" ${state.currentRequestType === type ? "checked" : ""} />
      <span class="request-type-icon">${escapeHtml(item.icon)}</span>
      <span><strong>${escapeHtml(item.label)}</strong><small>${escapeHtml(item.description)}</small></span>
    </label>`;
  }).join("");
  updateRequestFormFields();
}

function updateRequestFormFields() {
  const type = state.currentRequestType;
  const isNewActivity = type === "add_activity";
  const needsPerson = ["replace_advisor", "add_student", "remove_person", "self_position"].includes(type);
  const needsMeeting = ["update_meeting", "add_activity"].includes(type);
  const needsPosition = ["add_student", "self_position"].includes(type);

  $("#request-activity").closest(".field").hidden = isNewActivity;
  $("#request-activity").required = !isNewActivity;
  $("#new-activity-name-field").hidden = !isNewActivity;
  $("#new-activity-category-field").hidden = !isNewActivity;
  $("#new-activity-name").required = isNewActivity;
  $("#new-activity-category").required = isNewActivity;
  $("#people-fields").hidden = !needsPerson;
  $("#position-field").hidden = !needsPosition;
  const manualAllowed = type !== "self_position";
  $("#manual-name-toggle").closest(".check-field").hidden = !manualAllowed;
  if (!manualAllowed) $("#manual-name-toggle").checked = false;
  $("#manual-name-field").hidden = !manualAllowed || !$("#manual-name-toggle").checked;
  $("#person-select").closest(".field").hidden = manualAllowed && $("#manual-name-toggle").checked;
  $("#manual-name").required = manualAllowed && $("#manual-name-toggle").checked;
  $$("#meeting-location, #meeting-day, #meeting-time").forEach((input) => { input.closest(".field").hidden = !needsMeeting; });

  const personType = type === "replace_advisor" ? "Teacher" : type === "remove_person" ? "" : "Student";
  $("#person-field-label").textContent = type === "replace_advisor" ? "New advisor" : type === "remove_person" ? "Person to remove" : "Student name";
  renderPersonOptions(personType, type);
  $("#position-select").innerHTML = `<option value="">Select a position</option>${state.studentPositions.map((position) => `<option>${escapeHtml(position)}</option>`).join("")}`;
  $("#co-president-note").hidden = true;

  if (type === "self_position" && state.user?.personId) {
    $("#person-select").value = state.user.personId;
    $("#person-select").disabled = true;
  } else {
    $("#person-select").disabled = false;
  }
}

function renderPersonOptions(type = "", requestType = state.currentRequestType) {
  let people = state.people.filter((person) => person.active !== false && (!type || person.type === type));
  if (requestType === "remove_person") {
    const activityId = $("#request-activity").value;
    const assignedIds = new Set(assignmentsFor(activityId).map((assignment) => assignment.personId).filter(Boolean));
    people = people.filter((person) => assignedIds.has(person.id));
  }
  people.sort((a, b) => a.name.localeCompare(b.name));
  $("#person-select").innerHTML = `<option value="">Select a name</option>${people.map((person) =>
    `<option value="${escapeHtml(person.id)}">${escapeHtml(person.name)}${person.grade ? ` · Grade ${escapeHtml(person.grade)}` : ""}</option>`
  ).join("")}`;
}

function updateCoPresidentNotice() {
  if (!["add_student", "self_position"].includes(state.currentRequestType)) {
    $("#co-president-note").hidden = true;
    return;
  }
  const activityId = $("#request-activity").value;
  const position = $("#position-select").value;
  const hasPresident = assignmentsFor(activityId, "Student Officer").some((assignment) => ["President", "Co-President"].includes(assignment.position));
  $("#co-president-note").hidden = !(position === "President" && hasPresident);
}

function collectRequestPayload() {
  const type = state.currentRequestType;
  const payload = {};
  if (["update_meeting", "add_activity"].includes(type)) {
    payload.meetingLocation = $("#meeting-location").value.trim();
    payload.meetingDay = $("#meeting-day").value;
    payload.meetingTime = $("#meeting-time").value.trim();
  }
  if (type === "add_activity") {
    payload.name = $("#new-activity-name").value.trim();
    payload.category = $("#new-activity-category").value;
  }
  if (["replace_advisor", "add_student", "remove_person", "self_position"].includes(type)) {
    const manual = $("#manual-name-toggle").checked && type !== "self_position";
    payload.personId = manual ? "" : $("#person-select").value;
    payload.displayName = manual ? $("#manual-name").value.trim() : "";
    if (type === "replace_advisor") payload.position = "Advisor";
    if (["add_student", "self_position"].includes(type)) {
      payload.position = $("#position-select").value === "Others" ? $("#other-position").value.trim() : $("#position-select").value;
    }
  }
  return payload;
}

function validateRequest(payload) {
  const type = state.currentRequestType;
  if (type !== "add_activity" && !$("#request-activity").value) return "Please select an activity.";
  if (type === "add_activity" && (!payload.name || !payload.category)) return "Enter the new activity name and category.";
  if (["replace_advisor", "add_student", "remove_person", "self_position"].includes(type) && !payload.personId && !payload.displayName) return "Select a name or enter it manually.";
  if (payload.displayName && !/^[^,]+,\s*.+$/.test(payload.displayName)) return "Enter the manual name as Last Name, First Name.";
  if (["add_student", "self_position"].includes(type) && !payload.position) return "Select or enter the student position.";
  if (type === "update_meeting" && !payload.meetingLocation && !payload.meetingDay && !payload.meetingTime) return "Enter at least one meeting detail.";
  return "";
}

async function submitRequest(event) {
  event.preventDefault();
  const payload = collectRequestPayload();
  const validationError = validateRequest(payload);
  if (validationError) {
    showToast(validationError, "error");
    return;
  }

  const request = {
    id: uid("REQ"),
    requesterEmail: state.user.email,
    requesterName: state.user.name,
    requesterRole: state.user.role,
    requestType: state.currentRequestType,
    activityId: state.currentRequestType === "add_activity" ? "" : $("#request-activity").value,
    payload,
    notes: $("#request-notes").value.trim(),
    schoolYear: state.selectedYear,
    status: "Pending",
    createdAt: new Date().toISOString(),
    reviewedAt: "",
    reviewedBy: "",
    reviewNote: ""
  };

  try {
    if (state.config.demoMode) {
      state.requests.unshift(request);
      persistDemo();
    } else {
      const result = await apiFetch("/api/requests", { method: "POST", body: JSON.stringify(request) });
      state.requests.unshift(result.request);
    }
    event.currentTarget.reset();
    state.currentRequestType = allowedRequestTypes()[0];
    renderAll();
    switchView("submit");
    showToast("Your request was sent for approval.");
  } catch (error) {
    showToast(error.message, "error");
  }
}

function requestSummary(request) {
  const activity = getActivity(request.activityId);
  const payload = request.payload || {};
  const lines = [];
  if (request.requestType === "update_meeting") {
    if (payload.meetingLocation) lines.push(["Location", payload.meetingLocation]);
    if (payload.meetingDay) lines.push(["Day", payload.meetingDay]);
    if (payload.meetingTime) lines.push(["Time", payload.meetingTime]);
  }
  if (request.requestType === "add_activity") {
    lines.push(["New activity", payload.name || "—"], ["Category", payload.category || "—"]);
  }
  if (["replace_advisor", "add_student", "remove_person", "self_position"].includes(request.requestType)) {
    const person = state.people.find((item) => item.id === payload.personId);
    lines.push(["Name", displayName(payload.displayName || person?.name || "Not listed")]);
    if (payload.position) lines.push(["Position", payload.position]);
  }
  if (request.requestType === "remove_activity") lines.push(["Action", "Remove this activity"]);
  if (request.notes) lines.push(["Note", request.notes]);
  return { activityName: activity?.name || payload.name || "New activity", lines };
}

function renderMyRequests() {
  const requests = state.requests
    .filter((request) => request.requesterEmail === state.user?.email)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 5);
  $("#my-request-count").textContent = requests.length;
  $("#my-requests-list").innerHTML = requests.length ? requests.map((request) => {
    const summary = requestSummary(request);
    return `<article class="compact-request"><strong>${escapeHtml(summary.activityName)}</strong><div><span class="status-pill status-pill--${request.status.toLowerCase()}">${escapeHtml(request.status)}</span><time>${escapeHtml(formatDate(request.createdAt))}</time></div></article>`;
  }).join("") : `<p class="muted-value">You have not submitted any requests.</p>`;
}

function renderAdmin() {
  if (state.user?.role !== "Admin") return;
  const pending = state.requests.filter((request) => request.status === "Pending" && request.schoolYear === state.selectedYear).length;
  const people = state.people.filter((person) => person.active !== false).length;
  $("#admin-pending-count").textContent = pending;
  $("#admin-people-count").textContent = people;
  renderApprovalQueue();
  renderPeopleTable();
}

function renderApprovalQueue() {
  const status = $("#request-status-filter").value;
  const requests = state.requests
    .filter((request) => request.schoolYear === state.selectedYear && (!status || request.status === status))
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  $("#approval-queue").innerHTML = requests.length ? requests.map((request) => {
    const summary = requestSummary(request);
    return `<article class="request-card">
      <div class="request-card-head"><span class="status-pill status-pill--${request.status.toLowerCase()}">${escapeHtml(request.status)}</span><h3>${escapeHtml(summary.activityName)}</h3><p>${escapeHtml(requestTypeLabel(request.requestType))} · ${escapeHtml(displayName(request.requesterName))} · ${escapeHtml(formatDate(request.createdAt))}</p></div>
      <div class="request-change">${summary.lines.length ? summary.lines.map(([label, value]) => `<div class="change-line"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`).join("") : `<p class="muted-value">No extra details provided.</p>`}</div>
      <div class="request-actions">${request.status === "Pending" ? `<button class="button button--small button--quiet" type="button" data-review-request="${escapeHtml(request.id)}" data-decision="Rejected">Reject</button><button class="button button--small button--primary" type="button" data-review-request="${escapeHtml(request.id)}" data-decision="Approved">Approve</button>` : `<small class="muted-value">Reviewed ${escapeHtml(formatDate(request.reviewedAt))}</small>`}</div>
    </article>`;
  }).join("") : `<div class="empty-state surface"><span class="empty-icon"><svg aria-hidden="true"><use href="#icon-clock"></use></svg></span><h3>No ${escapeHtml(status.toLowerCase() || "matching")} requests</h3><p>The approval queue is clear.</p></div>`;
}

function renderPeopleTable() {
  const query = normalize($("#people-search").value);
  const type = $("#people-type-filter").value;
  const people = state.people.filter((person) => {
    if (type && person.type !== type) return false;
    return !query || normalize(`${person.name} ${person.email} ${person.grade} ${person.type}`).includes(query);
  }).sort((a, b) => a.name.localeCompare(b.name));
  $("#people-table-wrap").innerHTML = `<table class="data-table"><thead><tr><th>Name</th><th>Email</th><th>Type</th><th>Grade</th><th>Status</th><th><span class="sr-only">Actions</span></th></tr></thead><tbody>${people.map((person) => `<tr>
    <td><div class="person-line"><span class="mini-avatar${person.type === "Teacher" || person.type === "Admin" ? " mini-avatar--teacher" : ""}">${escapeHtml(initials(person.name))}</span><strong>${escapeHtml(person.name)}</strong></div></td>
    <td>${escapeHtml(person.email || "—")}</td>
    <td><span class="person-type-pill person-type-pill--${person.type.toLowerCase()}">${escapeHtml(person.type)}</span></td>
    <td>${escapeHtml(person.grade || "—")}</td>
    <td><span class="status-pill ${person.active === false ? "status-pill--rejected" : "status-pill--approved"}">${person.active === false ? "Inactive" : "Active"}</span></td>
    <td><div class="table-action-group"><button class="icon-button" type="button" data-edit-person="${escapeHtml(person.id)}" aria-label="Edit ${escapeHtml(person.name)}"><svg aria-hidden="true"><use href="#icon-edit"></use></svg></button></div></td>
  </tr>`).join("")}</tbody></table>`;
}

function addAudit(action, targetType, targetId, details = {}) {
  state.audit.unshift({
    id: uid("AUD"),
    timestamp: new Date().toISOString(),
    actorEmail: state.user?.email || "system",
    action,
    targetType,
    targetId,
    details
  });
}

function addAssignment({ activityId, personId = "", displayName: manualName = "", kind, position, schoolYear = state.selectedYear }) {
  let finalPosition = position;
  if (kind === "Student Officer" && position === "President") {
    const existingPresidents = state.assignments.filter((assignment) =>
      assignment.activityId === activityId &&
      assignment.schoolYear === schoolYear &&
      assignment.status !== "Archived" &&
      assignment.kind === "Student Officer" &&
      ["President", "Co-President"].includes(assignment.position)
    );
    if (existingPresidents.length) {
      existingPresidents.forEach((assignment) => { assignment.position = "Co-President"; });
      finalPosition = "Co-President";
    }
  }

  const existing = state.assignments.find((assignment) =>
    assignment.activityId === activityId &&
    assignment.schoolYear === schoolYear &&
    assignment.status !== "Archived" &&
    ((personId && assignment.personId === personId) || (manualName && normalize(assignment.displayName) === normalize(manualName))) &&
    assignment.kind === kind
  );
  if (existing) {
    existing.position = finalPosition;
    existing.status = "Active";
    existing.updatedAt = new Date().toISOString();
    return existing;
  }
  const assignment = {
    id: uid("ASN"), activityId, personId, displayName: manualName, kind, position: finalPosition,
    status: "Active", schoolYear, updatedAt: new Date().toISOString()
  };
  state.assignments.push(assignment);
  return assignment;
}

function applyApprovedRequest(request) {
  const payload = request.payload || {};
  const activity = getActivity(request.activityId);
  switch (request.requestType) {
    case "update_meeting":
      if (!activity) throw new Error("This activity no longer exists.");
      if (payload.meetingLocation !== undefined && payload.meetingLocation !== "") activity.meetingLocation = payload.meetingLocation;
      if (payload.meetingDay !== undefined && payload.meetingDay !== "") activity.meetingDay = payload.meetingDay;
      if (payload.meetingTime !== undefined && payload.meetingTime !== "") activity.meetingTime = payload.meetingTime;
      activity.updatedAt = new Date().toISOString();
      break;
    case "replace_advisor":
      if (!activity) throw new Error("This activity no longer exists.");
      state.assignments.filter((assignment) => assignment.activityId === activity.id && assignment.schoolYear === request.schoolYear && assignment.kind === "Advisor" && assignment.status !== "Archived")
        .forEach((assignment) => { assignment.status = "Archived"; assignment.updatedAt = new Date().toISOString(); });
      addAssignment({ activityId: activity.id, personId: payload.personId, displayName: payload.displayName, kind: "Advisor", position: payload.position || "Advisor", schoolYear: request.schoolYear });
      break;
    case "add_student":
    case "self_position":
      if (!activity) throw new Error("This activity no longer exists.");
      addAssignment({ activityId: activity.id, personId: payload.personId, displayName: payload.displayName, kind: "Student Officer", position: payload.position, schoolYear: request.schoolYear });
      break;
    case "remove_person": {
      if (!activity) throw new Error("This activity no longer exists.");
      const match = state.assignments.find((assignment) =>
        assignment.activityId === activity.id && assignment.schoolYear === request.schoolYear && assignment.status !== "Archived" &&
        ((payload.personId && assignment.personId === payload.personId) || (payload.displayName && normalize(assignment.displayName) === normalize(payload.displayName)))
      );
      if (match) { match.status = "Archived"; match.updatedAt = new Date().toISOString(); }
      break;
    }
    case "add_activity": {
      const duplicate = state.activities.some((item) => item.schoolYear === request.schoolYear && normalize(item.name) === normalize(payload.name) && item.status !== "Archived");
      if (duplicate) throw new Error("An activity with this name already exists for this school year.");
      state.activities.push({
        id: uid("ACT"), name: payload.name, category: payload.category, schoolYear: request.schoolYear, status: "Active",
        meetingLocation: payload.meetingLocation || "", meetingDay: payload.meetingDay || "", meetingTime: payload.meetingTime || "", updatedAt: new Date().toISOString()
      });
      break;
    }
    case "remove_activity":
      if (!activity) throw new Error("This activity no longer exists.");
      activity.status = "Archived";
      activity.updatedAt = new Date().toISOString();
      state.assignments.filter((assignment) => assignment.activityId === activity.id && assignment.status !== "Archived")
        .forEach((assignment) => { assignment.status = "Archived"; assignment.updatedAt = new Date().toISOString(); });
      break;
    default:
      throw new Error("Unsupported request type.");
  }
}

async function reviewRequest(requestId, decision) {
  const request = state.requests.find((item) => item.id === requestId);
  if (!request || request.status !== "Pending") return;
  const approving = decision === "Approved";
  const note = await confirmAction({
    title: approving ? "Approve this request?" : "Reject this request?",
    message: approving
      ? "The requested change will appear in the live directory immediately."
      : "The directory will remain unchanged. You can include a short note for the requester.",
    confirmText: approving ? "Approve request" : "Reject request",
    danger: !approving,
    inputLabel: approving ? "Approval note (optional)" : "Reason (recommended)",
    input: true
  });
  if (note === false) return;

  try {
    if (state.config.demoMode) {
      if (approving) applyApprovedRequest(request);
      request.status = decision;
      request.reviewedAt = new Date().toISOString();
      request.reviewedBy = state.user.email;
      request.reviewNote = note;
      addAudit(`${decision} request`, "Request", request.id, { requestType: request.requestType, activityId: request.activityId });
      persistDemo();
    } else {
      const result = await apiFetch("/api/admin", { method: "POST", body: JSON.stringify({ action: "reviewRequest", requestId, decision, note }) });
      setData(result.data);
    }
    renderAll();
    switchAdminSection("pending");
    showToast(`Request ${decision.toLowerCase()}.`);
  } catch (error) {
    showToast(error.message, "error");
  }
}

let confirmResolver = null;

function confirmAction({ title, message, confirmText = "Confirm", danger = false, input = false, inputLabel = "Note" }) {
  const dialog = $("#confirm-dialog");
  $("#dialog-title").textContent = title;
  $("#dialog-message").textContent = message;
  $("#dialog-confirm-button").textContent = confirmText;
  $("#dialog-confirm-button").className = `button ${danger ? "button--danger" : "button--primary"}`;
  $("#dialog-icon").classList.toggle("is-danger", danger);
  $("#dialog-input-wrap").hidden = !input;
  $("#dialog-input-label").textContent = inputLabel;
  $("#dialog-input").value = "";
  dialog.showModal();
  if (input) $("#dialog-input").focus();
  return new Promise((resolve) => { confirmResolver = resolve; });
}

function settleConfirm() {
  if (!confirmResolver) return;
  const confirmed = $("#confirm-dialog").returnValue === "confirm";
  const value = confirmed ? $("#dialog-input").value.trim() : false;
  confirmResolver(value);
  confirmResolver = null;
}

function switchAdminSection(section) {
  $$(".admin-summary-card").forEach((button) => button.classList.toggle("is-active", button.dataset.adminSection === section));
  $$(".admin-section").forEach((panel) => {
    const active = panel.id === `admin-section-${section}`;
    panel.hidden = !active;
    panel.classList.toggle("is-active", active);
  });
}

let editorMode = "";
let editorTargetId = "";

function openEditor({ mode, targetId = "", title, eyebrow = "Directory maintenance", fieldsHtml, submitLabel = "Save" }) {
  editorMode = mode;
  editorTargetId = targetId;
  $("#editor-eyebrow").textContent = eyebrow;
  $("#editor-title").textContent = title;
  $("#editor-fields").innerHTML = fieldsHtml;
  $("#editor-submit").hidden = false;
  $("#editor-submit").textContent = submitLabel;
  $("#editor-dialog").showModal();
}

function closeEditor() {
  $("#editor-dialog").close();
  editorMode = "";
  editorTargetId = "";
}

function openPersonEditor(personId = "") {
  const person = state.people.find((item) => item.id === personId);
  openEditor({
    mode: "person",
    targetId: personId,
    title: person ? "Edit person" : "Add person",
    fieldsHtml: `
      <label class="field field--wide"><span>Full name <b>*</b></span><input name="name" required value="${escapeHtml(person?.name || "")}" placeholder="Last Name, First Name" pattern="[^,]+,\\s*.+" /><small>Use Last Name, First Name.</small></label>
      <label class="field field--wide"><span>School email <b>*</b></span><input name="email" required type="email" value="${escapeHtml(person?.email || "")}" /></label>
      <label class="field"><span>Type <b>*</b></span><select name="type" required>${["Teacher", "Student", "Admin"].map((type) => `<option ${person?.type === type ? "selected" : ""}>${type}</option>`).join("")}</select></label>
      <label class="field"><span>Grade</span><select name="grade"><option value="">Not applicable</option>${[9, 10, 11, 12].map((grade) => `<option value="${grade}" ${String(person?.grade) === String(grade) ? "selected" : ""}>Grade ${grade}</option>`).join("")}</select></label>
      <label class="field field--wide"><span>Status</span><select name="active"><option value="true" ${person?.active !== false ? "selected" : ""}>Active</option><option value="false" ${person?.active === false ? "selected" : ""}>Inactive</option></select></label>`
  });
}

function activityEditorFields(activity = null, includePicker = false) {
  const categories = categoriesForYear();
  return `
    ${includePicker ? `<label class="field field--wide"><span>Choose a record</span><select id="editor-activity-picker" name="picker"><option value="">Create a new activity</option>${currentActivities().map((item) => `<option value="${escapeHtml(item.id)}">${escapeHtml(item.name)}</option>`).join("")}</select></label>` : ""}
    <label class="field field--wide"><span>Activity name <b>*</b></span><input name="name" required value="${escapeHtml(activity?.name || "")}" /></label>
    <label class="field field--wide"><span>Category <b>*</b></span><select name="category" required><option value="">Select a category</option>${categories.map((category) => `<option ${activity?.category === category ? "selected" : ""}>${escapeHtml(category)}</option>`).join("")}</select></label>
    <label class="field"><span>Meeting location</span><input name="meetingLocation" value="${escapeHtml(activity?.meetingLocation || "")}" /></label>
    <label class="field"><span>Day</span><select name="meetingDay"><option value="">Select day</option>${["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "By arrangement"].map((day) => `<option ${activity?.meetingDay === day ? "selected" : ""}>${day}</option>`).join("")}</select></label>
    <label class="field field--wide"><span>Time</span><input name="meetingTime" value="${escapeHtml(activity?.meetingTime || "")}" placeholder="e.g., Lunch / 3:00–4:00" /></label>`;
}

function openActivityEditor(activityId = "") {
  const activity = state.activities.find((item) => item.id === activityId);
  openEditor({
    mode: "activity",
    targetId: activityId,
    title: activity ? "Edit activity" : "Manage an activity",
    fieldsHtml: activityEditorFields(activity, !activity)
  });
}

function openAuditDialog() {
  const rows = state.audit.slice(0, 100).map((item) => `<tr><td>${escapeHtml(formatDate(item.timestamp))}</td><td>${escapeHtml(item.action)}</td><td>${escapeHtml(item.actorEmail)}</td><td>${escapeHtml(item.targetType)}</td></tr>`).join("");
  openEditor({
    mode: "audit",
    title: "Audit history",
    eyebrow: "Most recent 100 actions",
    fieldsHtml: `<div class="field--wide table-wrap"><table class="data-table"><thead><tr><th>Date</th><th>Action</th><th>Administrator</th><th>Record</th></tr></thead><tbody>${rows || `<tr><td colspan="4" class="muted-value">No administrative actions have been recorded.</td></tr>`}</tbody></table></div>`,
    submitLabel: "Done"
  });
}

async function saveEditor(event) {
  event.preventDefault();
  if (editorMode === "audit") { closeEditor(); return; }
  const formData = new FormData(event.currentTarget);
  try {
    if (editorMode === "person") {
      const person = {
        id: editorTargetId || uid("P"),
        name: String(formData.get("name") || "").trim(),
        email: String(formData.get("email") || "").trim().toLowerCase(),
        type: String(formData.get("type") || "Student"),
        grade: String(formData.get("grade") || ""),
        active: formData.get("active") === "true",
        schoolYear: state.activeYear
      };
      if (!/^[^,]+,\s*.+$/.test(person.name)) throw new Error("Enter the name as Last Name, First Name.");
      if (state.config.demoMode) {
        const index = state.people.findIndex((item) => item.id === person.id);
        if (index >= 0) state.people[index] = person; else state.people.push(person);
        addAudit(index >= 0 ? "Updated person" : "Added person", "Person", person.id, { type: person.type });
        persistDemo();
      } else {
        const result = await apiFetch("/api/admin", { method: "POST", body: JSON.stringify({ action: "upsertPerson", person }) });
        setData(result.data);
      }
      showToast(editorTargetId ? "Person updated." : "Person added to the dropdown list.");
    }

    if (editorMode === "activity") {
      const selectedId = editorTargetId || String(formData.get("picker") || "");
      const existing = state.activities.find((item) => item.id === selectedId);
      const activity = {
        id: selectedId || uid("ACT"),
        name: String(formData.get("name") || "").trim(),
        category: String(formData.get("category") || ""),
        meetingLocation: String(formData.get("meetingLocation") || "").trim(),
        meetingDay: String(formData.get("meetingDay") || ""),
        meetingTime: String(formData.get("meetingTime") || "").trim(),
        schoolYear: existing?.schoolYear || state.selectedYear,
        status: existing?.status || "Active",
        updatedAt: new Date().toISOString()
      };
      if (!activity.name || !activity.category) throw new Error("Activity name and category are required.");
      if (state.config.demoMode) {
        const index = state.activities.findIndex((item) => item.id === activity.id);
        if (index >= 0) state.activities[index] = activity; else state.activities.push(activity);
        addAudit(index >= 0 ? "Updated activity" : "Added activity", "Activity", activity.id, { name: activity.name });
        persistDemo();
      } else {
        const result = await apiFetch("/api/admin", { method: "POST", body: JSON.stringify({ action: "upsertActivity", activity }) });
        setData(result.data);
      }
      showToast(existing || editorTargetId ? "Activity updated." : "Activity added.");
    }
    closeEditor();
    renderAll();
  } catch (error) {
    showToast(error.message, "error");
  }
}

async function deleteActivity(activityId) {
  const activity = getActivity(activityId);
  if (!activity) return;
  const confirmed = await confirmAction({
    title: `Delete ${activity.name}?`,
    message: "This removes the activity and its advisor and student assignments for this school year. The action is recorded in the audit history.",
    confirmText: "Delete activity",
    danger: true
  });
  if (confirmed === false) return;
  try {
    if (state.config.demoMode) {
      state.activities = state.activities.filter((item) => item.id !== activityId);
      state.assignments = state.assignments.filter((item) => item.activityId !== activityId);
      addAudit("Deleted activity", "Activity", activityId, { name: activity.name });
      persistDemo();
    } else {
      const result = await apiFetch("/api/admin", { method: "POST", body: JSON.stringify({ action: "deleteActivity", activityId }) });
      setData(result.data);
    }
    closeActivityDrawer();
    renderAll();
    showToast("Activity deleted.");
  } catch (error) {
    showToast(error.message, "error");
  }
}

async function resetSchoolYear() {
  const newYear = nextSchoolYear(state.activeYear);
  const typed = await confirmAction({
    title: `Prepare ${newYear}?`,
    message: `Activities and teacher advisors will carry forward. Student officer assignments will start empty. Type ${newYear} to confirm.`,
    confirmText: "Start new school year",
    danger: true,
    input: true,
    inputLabel: `Type ${newYear}`
  });
  if (typed === false) return;
  if (typed !== newYear) {
    showToast("The school year did not match. Nothing was changed.", "error");
    return;
  }
  try {
    if (state.config.demoMode) {
      const sourceActivities = state.activities.filter((item) => item.schoolYear === state.activeYear && item.status !== "Archived");
      const idMap = new Map();
      sourceActivities.forEach((activity) => {
        const newId = uid("ACT");
        idMap.set(activity.id, newId);
        state.activities.push({ ...activity, id: newId, schoolYear: newYear, updatedAt: new Date().toISOString() });
      });
      state.assignments
        .filter((assignment) => assignment.schoolYear === state.activeYear && assignment.status !== "Archived" && assignment.kind === "Advisor" && idMap.has(assignment.activityId))
        .forEach((assignment) => state.assignments.push({ ...assignment, id: uid("ASN"), activityId: idMap.get(assignment.activityId), schoolYear: newYear, updatedAt: new Date().toISOString() }));
      state.requests.filter((request) => request.schoolYear === state.activeYear && request.status === "Pending").forEach((request) => { request.status = "Expired"; });
      state.activeYear = newYear;
      state.selectedYear = newYear;
      state.years = [...new Set([...state.years, newYear])];
      addAudit("Started new school year", "SchoolYear", newYear, { retainedAdvisors: true, clearedStudentOfficers: true });
      persistDemo();
    } else {
      const result = await apiFetch("/api/admin", { method: "POST", body: JSON.stringify({ action: "resetSchoolYear", newYear }) });
      setData(result.data);
    }
    renderAll();
    showToast(`${newYear} is ready. Advisors were retained and student officer assignments were cleared.`);
  } catch (error) {
    showToast(error.message, "error");
  }
}

function exportDirectoryCsv() {
  const rows = [["School Year", "Category", "Activity", "Person", "Person Type", "Position", "Meeting Location", "Day", "Time"]];
  currentActivities().forEach((activity) => {
    const assignments = assignmentsFor(activity.id);
    if (!assignments.length) assignments.push(null);
    assignments.forEach((assignment) => rows.push([
      activity.schoolYear, activity.category, activity.name, assignment ? personName(assignment) : "", assignment?.kind || "", assignment?.position || "",
      activity.meetingLocation, activity.meetingDay, activity.meetingTime
    ]));
  });
  const csv = rows.map((row) => row.map((cell) => `"${String(cell ?? "").replaceAll('"', '""')}"`).join(",")).join("\n");
  const link = document.createElement("a");
  link.href = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
  link.download = `ISM-CAS-Directory-${state.selectedYear.replace("–", "-")}.csv`;
  link.click();
  URL.revokeObjectURL(link.href);
}

function toggleGuide(guide) {
  $$("[data-guide]").forEach((button) => {
    const active = button.dataset.guide === guide;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
  });
  $$("[data-guide-panel]").forEach((panel) => { panel.hidden = panel.dataset.guidePanel !== guide; });
}

function clearDirectoryFilters() {
  $("#directory-search").value = "";
  $("#category-filter").value = "";
  $("#role-filter").value = "";
  renderDirectory();
}

let webMcpLifecycle = null;

function registerWebMcpTools() {
  const context = document.modelContext;
  if (!context?.registerTool) return;
  webMcpLifecycle?.abort();
  webMcpLifecycle = new AbortController();
  const options = { signal: webMcpLifecycle.signal };
  const register = (tool) => {
    try { void Promise.resolve(context.registerTool(tool, options)).catch((error) => console.warn("WebMCP registration failed", error)); }
    catch (error) { console.warn("WebMCP registration failed", error); }
  };

  register({
    name: "search_cas_directory",
    title: "Search CAS directory",
    description: "Search the currently selected school-year directory by activity, advisor, student, position, or category. Returns up to 20 matching activity records without changing data.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", maxLength: 120 },
        category: { type: "string", maxLength: 150 },
        personType: { type: "string", enum: ["Everyone", "Teachers", "Students"] }
      },
      additionalProperties: false
    },
    annotations: { readOnlyHint: true, untrustedContentHint: true },
    execute(input = {}) {
      if (typeof input !== "object" || Array.isArray(input)) throw new Error("Input must be an object.");
      const query = normalize(input.query || "");
      const category = String(input.category || "");
      const personType = String(input.personType || "Everyone");
      if (!['Everyone', 'Teachers', 'Students'].includes(personType)) throw new Error("personType must be Everyone, Teachers, or Students.");
      const matches = currentActivities().filter((activity) => {
        if (category && activity.category !== category) return false;
        const advisors = assignmentsFor(activity.id, "Advisor");
        const officers = assignmentsFor(activity.id, "Student Officer");
        if (personType === "Teachers" && !advisors.length) return false;
        if (personType === "Students" && !officers.length) return false;
        const people = [...advisors, ...officers].map((assignment) => `${personName(assignment)} ${assignment.position}`).join(" ");
        return !query || normalize(`${activity.name} ${activity.category} ${activity.meetingLocation} ${activity.meetingDay} ${activity.meetingTime} ${people}`).includes(query);
      }).slice(0, 20).map((activity) => ({
        id: activity.id,
        name: activity.name,
        category: activity.category,
        advisors: assignmentsFor(activity.id, "Advisor").map((assignment) => displayName(personName(assignment))),
        studentOfficers: assignmentsFor(activity.id, "Student Officer").map((assignment) => ({ name: displayName(personName(assignment)), position: assignment.position })),
        meeting: { location: activity.meetingLocation, day: activity.meetingDay, time: activity.meetingTime }
      }));
      return { schoolYear: state.selectedYear, count: matches.length, activities: matches };
    }
  });

  register({
    name: "open_cas_activity",
    title: "Open CAS activity",
    description: "Open one activity's visible detail panel using its directory activity ID. This changes only the current page view.",
    inputSchema: {
      type: "object",
      properties: { activityId: { type: "string", minLength: 1, maxLength: 100 } },
      required: ["activityId"],
      additionalProperties: false
    },
    annotations: { readOnlyHint: true, untrustedContentHint: true },
    execute(input = {}) {
      const activity = getActivity(String(input.activityId || ""));
      if (!activity || activity.schoolYear !== state.selectedYear || activity.status === "Archived") throw new Error("Activity not found in the selected school year.");
      openActivityDrawer(activity.id);
      return { opened: true, activityId: activity.id, name: activity.name, schoolYear: state.selectedYear };
    }
  });

  register({
    name: "start_cas_update_request",
    title: "Start CAS update request",
    description: "Open and prepare the visible update form for an activity. This stages a request but does not submit it for approval.",
    inputSchema: {
      type: "object",
      properties: {
        requestType: { type: "string", enum: ["update_meeting", "replace_advisor", "add_student", "remove_person", "add_activity", "remove_activity", "self_position"] },
        activityId: { type: "string", maxLength: 100 }
      },
      required: ["requestType"],
      additionalProperties: false
    },
    annotations: { readOnlyHint: false, untrustedContentHint: false },
    execute(input = {}) {
      const requestType = String(input.requestType || "");
      if (!allowedRequestTypes().includes(requestType)) throw new Error("This request type is not available for the signed-in role.");
      const activityId = String(input.activityId || "");
      if (requestType !== "add_activity" && !currentActivities().some((activity) => activity.id === activityId)) {
        throw new Error("A valid activityId is required for this request type.");
      }
      state.currentRequestType = requestType;
      renderRequestForm();
      if (activityId) $("#request-activity").value = activityId;
      updateRequestFormFields();
      switchView("submit");
      return { staged: true, requestType, activityId, submitted: false };
    }
  });
}

function bindEvents() {
  $$(".demo-role").forEach((button) => button.addEventListener("click", () => demoSignIn(button.dataset.demoRole)));
  $("#signout-button").addEventListener("click", () => {
    state.user = null;
    state.token = "";
    sessionStorage.removeItem("ismCasToken");
    window.google?.accounts?.id?.disableAutoSelect?.();
    closeMobileNav();
    showLogin();
  });

  $$(".nav-item[data-view]").forEach((button) => button.addEventListener("click", () => switchView(button.dataset.view)));
  $$('[data-go-view]').forEach((button) => button.addEventListener("click", () => switchView(button.dataset.goView)));
  $("#mobile-nav-button").addEventListener("click", () => {
    $(".sidebar").classList.contains("is-open") ? closeMobileNav() : openMobileNav();
  });
  $("#mobile-nav-overlay").addEventListener("click", closeMobileNav);

  ["#directory-search", "#category-filter", "#role-filter"].forEach((selector) => {
    $(selector).addEventListener(selector.includes("search") ? "input" : "change", renderDirectory);
  });
  $("#clear-filters").addEventListener("click", clearDirectoryFilters);
  $("#directory-empty").addEventListener("click", (event) => { if (event.target.closest("[data-clear-filters]")) clearDirectoryFilters(); });
  $("#activities-search").addEventListener("input", renderActivities);
  $("#category-tabs").addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    state.activeCategory = button.dataset.category;
    renderCategoryTabs();
    renderActivities();
  });
  $$("[data-layout]").forEach((button) => button.addEventListener("click", () => {
    state.activityLayout = button.dataset.layout;
    $$("[data-layout]").forEach((item) => item.classList.toggle("is-active", item === button));
    renderActivities();
  }));

  document.addEventListener("click", (event) => {
    const activityTrigger = event.target.closest("[data-activity-id]");
    if (activityTrigger) openActivityDrawer(activityTrigger.dataset.activityId);
    const row = event.target.closest("[data-open-activity]");
    if (row && !activityTrigger) openActivityDrawer(row.dataset.openActivity);
    if (event.target.closest("[data-close-drawer]")) closeActivityDrawer();

    const requestFor = event.target.closest("[data-request-for]");
    if (requestFor) {
      closeActivityDrawer();
      switchView("submit");
      $("#request-activity").value = requestFor.dataset.requestFor;
      updateRequestFormFields();
    }
    const editActivity = event.target.closest("[data-edit-activity]");
    if (editActivity) openActivityEditor(editActivity.dataset.editActivity);
    const deleteButton = event.target.closest("[data-delete-activity]");
    if (deleteButton) deleteActivity(deleteButton.dataset.deleteActivity);
    const reviewButton = event.target.closest("[data-review-request]");
    if (reviewButton) reviewRequest(reviewButton.dataset.reviewRequest, reviewButton.dataset.decision);
    const editPerson = event.target.closest("[data-edit-person]");
    if (editPerson) openPersonEditor(editPerson.dataset.editPerson);
  });

  $("#request-type-options").addEventListener("change", (event) => {
    if (!event.target.matches('input[name="requestType"]')) return;
    state.currentRequestType = event.target.value;
    renderRequestForm();
  });
  $("#request-activity").addEventListener("change", () => {
    if (state.currentRequestType === "remove_person") renderPersonOptions("", "remove_person");
    updateCoPresidentNotice();
  });
  $("#manual-name-toggle").addEventListener("change", (event) => {
    $("#manual-name-field").hidden = !event.target.checked;
    $("#person-select").closest(".field").hidden = event.target.checked;
    $("#manual-name").required = event.target.checked;
  });
  $("#position-select").addEventListener("change", (event) => {
    $("#other-position-field").hidden = event.target.value !== "Others";
    $("#other-position").required = event.target.value === "Others";
    updateCoPresidentNotice();
  });
  $("#request-form").addEventListener("submit", submitRequest);
  $("#request-form").addEventListener("reset", () => window.setTimeout(() => {
    state.currentRequestType = allowedRequestTypes()[0];
    renderRequestForm();
  }, 0));

  $("#school-year-select").addEventListener("change", async (event) => {
    state.selectedYear = event.target.value;
    try {
      if (!state.config.demoMode) {
        const data = await apiFetch(`/api/data?year=${encodeURIComponent(state.selectedYear)}`);
        setData({ ...data, selectedYear: event.target.value });
      }
      state.activeCategory = "";
      renderAll();
    } catch (error) {
      showToast(error.message, "error");
    }
  });

  $("#export-directory").addEventListener("click", exportDirectoryCsv);
  $("#admin-export").addEventListener("click", exportDirectoryCsv);
  $$(".admin-summary-card").forEach((button) => button.addEventListener("click", () => switchAdminSection(button.dataset.adminSection)));
  $("#request-status-filter").addEventListener("change", renderApprovalQueue);
  $("#people-search").addEventListener("input", renderPeopleTable);
  $("#people-type-filter").addEventListener("change", renderPeopleTable);
  $("#add-person-button").addEventListener("click", () => openPersonEditor());
  $("#manage-activity-button").addEventListener("click", () => openActivityEditor());
  $("#view-audit-button").addEventListener("click", openAuditDialog);
  $("#reset-year-button").addEventListener("click", resetSchoolYear);

  $("#editor-form").addEventListener("submit", saveEditor);
  $$('[data-close-editor]').forEach((button) => button.addEventListener("click", closeEditor));
  $("#editor-fields").addEventListener("change", (event) => {
    if (event.target.id !== "editor-activity-picker") return;
    const activity = state.activities.find((item) => item.id === event.target.value) || null;
    editorTargetId = event.target.value;
    $("#editor-title").textContent = activity ? "Edit activity" : "Create a new activity";
    $("#editor-fields").innerHTML = activityEditorFields(activity, true);
    $("#editor-activity-picker").value = activity?.id || "";
  });
  $("#confirm-dialog").addEventListener("close", settleConfirm);

  $$("[data-guide]").forEach((button) => button.addEventListener("click", () => toggleGuide(button.dataset.guide)));
  $("#print-guide-button").addEventListener("click", () => window.print());

  window.addEventListener("popstate", (event) => {
    const view = event.state?.view || (location.pathname === "/" ? "directory" : location.pathname.slice(1));
    switchView(view, false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "/" && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName || "")) {
      event.preventDefault();
      switchView("directory");
      $("#directory-search").focus();
    }
    if (event.key === "Escape") {
      closeActivityDrawer();
      closeMobileNav();
    }
  });
}

async function initialize() {
  bindEvents();
  await loadConfig();
  if (state.config.demoMode) {
    $("#demo-access").hidden = false;
    $("#google-signin-fallback").disabled = true;
    $("#google-signin-fallback").title = "Google sign-in activates after the Vercel settings are added.";
    $("#login-status").textContent = "Choose a preview role below to explore the site.";
    $("#login-status").classList.remove("is-error");
  } else {
    $("#demo-access").hidden = true;
    const resumed = await resumeProductionSession();
    if (!resumed) initializeGoogleSignIn();
  }
}

initialize().catch((error) => showLogin(error.message));
