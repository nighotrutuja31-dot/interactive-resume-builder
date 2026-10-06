// ===============================
// LIVE PERSONAL INFORMATION
// ===============================

const personalFields = [
    "name",
    "jobTitle",
    "email",
    "phone",
    "location",
    "linkedin",
    "github",
    "summary",
    "skills"
];

personalFields.forEach(function(field) {

    const input = document.getElementById(field);

    input.addEventListener("input", updateResume);

});


// ===============================
// EDUCATION DATA
// ===============================

let educationCount = 0;

function addEducation() {

    educationCount++;

    const container =
        document.getElementById("educationContainer");

    const entry = document.createElement("div");

    entry.className = "entry";

    entry.innerHTML = `

        <div class="entry-header">

            <strong>Education ${educationCount}</strong>

            <button
                class="remove-btn"
                onclick="removeEntry(this)">
                Remove
            </button>

        </div>

        <input
            type="text"
            class="edu-degree"
            placeholder="Degree / Course"
        >

        <input
            type="text"
            class="edu-school"
            placeholder="College / University"
        >

        <input
            type="text"
            class="edu-year"
            placeholder="Year"
        >

        <input
            type="text"
            class="edu-grade"
            placeholder="Percentage / CGPA"
        >

    `;

    container.appendChild(entry);

    addDynamicListeners(entry);

    updateResume();
}


// ===============================
// EXPERIENCE DATA
// ===============================

let experienceCount = 0;

function addExperience() {

    experienceCount++;

    const container =
        document.getElementById("experienceContainer");

    const entry = document.createElement("div");

    entry.className = "entry";

    entry.innerHTML = `

        <div class="entry-header">

            <strong>Experience ${experienceCount}</strong>

            <button
                class="remove-btn"
                onclick="removeEntry(this)">
                Remove
            </button>

        </div>

        <input
            type="text"
            class="exp-role"
            placeholder="Job Role"
        >

        <input
            type="text"
            class="exp-company"
            placeholder="Company Name"
        >

        <input
            type="text"
            class="exp-duration"
            placeholder="Duration"
        >

        <textarea
            class="exp-description"
            placeholder="Describe your work..."
        ></textarea>

    `;

    container.appendChild(entry);

    addDynamicListeners(entry);

    updateResume();
}


// ===============================
// DYNAMIC INPUT LISTENERS
// ===============================

function addDynamicListeners(entry) {

    const inputs =
        entry.querySelectorAll("input, textarea");

    inputs.forEach(function(input) {

        input.addEventListener(
            "input",
            updateResume
        );

    });
}


// ===============================
// REMOVE ENTRY
// ===============================

function removeEntry(button) {

    const entry =
        button.closest(".entry");

    entry.remove();

    updateResume();
}


// ===============================
// UPDATE RESUME
// ===============================

function updateResume() {

    // Personal Information

    const name =
        document.getElementById("name").value;

    const jobTitle =
        document.getElementById("jobTitle").value;

    const email =
        document.getElementById("email").value;

    const phone =
        document.getElementById("phone").value;

    const location =
        document.getElementById("location").value;

    const linkedin =
        document.getElementById("linkedin").value;

    const github =
        document.getElementById("github").value;

    const summary =
        document.getElementById("summary").value;

    const skills =
        document.getElementById("skills").value;


    // Preview Personal Information

    document.getElementById("previewName").textContent =
        name || "Your Name";

    document.getElementById("previewJob").textContent =
        jobTitle || "Your Job Title";

    document.getElementById("previewContact").textContent =
        [email, phone, location]
        .filter(Boolean)
        .join(" | ") ||
        "email@example.com | +91 XXXXX XXXXX";


    document.getElementById("previewLinks").textContent =
        [linkedin, github]
        .filter(Boolean)
        .join(" | ");


    document.getElementById("previewSummary").textContent =
        summary ||
        "Your professional summary will appear here.";


    // ===============================
    // EDUCATION PREVIEW
    // ===============================

    const educationPreview =
        document.getElementById("previewEducation");

    const educationEntries =
        document.querySelectorAll(
            "#educationContainer .entry"
        );

    educationPreview.innerHTML = "";

    if (educationEntries.length === 0) {

        educationPreview.innerHTML =
            "<p>No education added yet.</p>";

    } else {

        educationEntries.forEach(function(entry) {

            const degree =
                entry.querySelector(".edu-degree").value;

            const school =
                entry.querySelector(".edu-school").value;

            const year =
                entry.querySelector(".edu-year").value;

            const grade =
                entry.querySelector(".edu-grade").value;

            const item =
                document.createElement("div");

            item.className = "education-item";

            item.innerHTML = `

                <h4>
                    ${degree || "Degree / Course"}
                </h4>

                <p>
                    ${school || "College / University"}
                </p>

                <p>
                    ${year || "Year"}
                    ${grade ? " | " + grade : ""}
                </p>

            `;

            educationPreview.appendChild(item);

        });
    }


    // ===============================
    // EXPERIENCE PREVIEW
    // ===============================

    const experiencePreview =
        document.getElementById("previewExperience");

    const experienceEntries =
        document.querySelectorAll(
            "#experienceContainer .entry"
        );

    experiencePreview.innerHTML = "";

    if (experienceEntries.length === 0) {

        experiencePreview.innerHTML =
            "<p>No experience added yet.</p>";

    } else {

        experienceEntries.forEach(function(entry) {

            const role =
                entry.querySelector(".exp-role").value;

            const company =
                entry.querySelector(".exp-company").value;

            const duration =
                entry.querySelector(".exp-duration").value;

            const description =
                entry.querySelector(
                    ".exp-description"
                ).value;

            const item =
                document.createElement("div");

            item.className = "experience-item";

            item.innerHTML = `

                <h4>
                    ${role || "Job Role"}
                </h4>

                <p>
                    ${company || "Company Name"}
                    ${duration ? " | " + duration : ""}
                </p>

                <p>
                    ${description ||
                    "Work description"}
                </p>

            `;

            experiencePreview.appendChild(item);

        });
    }


    // ===============================
    // SKILLS PREVIEW
    // ===============================

    const skillsPreview =
        document.getElementById("previewSkills");

    skillsPreview.innerHTML = "";

    if (skills.trim() !== "") {

        const skillArray =
            skills
            .split(",")
            .map(skill => skill.trim())
            .filter(Boolean);

        skillArray.forEach(function(skill) {

            const span =
                document.createElement("span");

            span.className = "skill";

            span.textContent = skill;

            skillsPreview.appendChild(span);

        });

    }

}


// ===============================
// PRINT / SAVE PDF
// ===============================

function printResume() {

    updateResume();

    window.print();

}


// ===============================
// INITIAL ENTRIES
// ===============================

addEducation();

addExperience();