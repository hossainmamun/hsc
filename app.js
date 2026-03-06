(function () {
  // Define strict subject data with Combined Bangla & English
  const hscGpaCalcSubjects = {
    science: {
      compulsory: ["Bangla (101 & 102)", "English (107 & 108)", "ICT (275)"],
      core: ["Physics (174 / 175)", "Chemistry (176 / 177)"],
      dynamicCoreOptions: ["Biology (178 / 179)", "Higher Math (265 / 266)"],
      optionalOptions: [
        "Higher Math (265 / 266)",
        "Biology (178 / 179)",
        "Statistics (276)",
        "Geography (125 / 126)",
      ],
    },
    humanities: {
      compulsory: ["Bangla (101 & 102)", "English (107 & 108)", "ICT (275)"],
      corePool: [
        "Economics (109 / 110)",
        "Sociology (117 / 118)",
        "History (304 / 305)",
        "Islamic History & Culture (267 / 268)",
        "Civics & Good Governance (269 / 270)",
      ],
      optionalPool: [
        "Logic (121 / 122)",
        "Social Work (271 / 272)",
        "Geography (125 / 126)",
        "Psychology (123 / 124)",
      ],
    },
    business: {
      compulsory: ["Bangla (101 & 102)", "English (107 & 108)", "ICT (275)"],
      elective: [
        "Accounting (253 / 254)",
        "Business Organization & Management (277 / 278)",
        "Finance / Banking / Insurance (292 / 293)",
      ],
      optionalOptions: [
        "Economics (109 / 110)",
        "Production Management & Marketing (286 / 287)",
      ],
    },
  };

  // GPA Grading Scale
  const hscGpaCalcGradingScale = [
    { marks: 80, grade: "A+", gpa: 5.0 },
    { marks: 70, grade: "A", gpa: 4.0 },
    { marks: 60, grade: "A-", gpa: 3.5 },
    { marks: 50, grade: "B", gpa: 3.0 },
    { marks: 40, grade: "C", gpa: 2.0 },
    { marks: 33, grade: "D", gpa: 1.0 },
    { marks: 0, grade: "F", gpa: 0.0 },
  ];

  // Course data structure
  const hscGpaCalcCourseData = {
    science: [
      {
        section_heading:
          "HSC 2026 বিজ্ঞান বিভাগ | PCMB অনলাইন ব্যাচ (ফিজিক্স, কেমিস্ট্রি, ম্যাথ, বায়োলজি)",
        courses: [
          {
            কোর্স: "HSC 26 PCMB Full Batch",
            ডেস্ক্রিপশন:
              "পদার্থবিজ্ঞান, রসায়ন, গণিত ও জীববিজ্ঞানের সম্পূর্ণ সিলেবাস কভার করে বোর্ড-ফোকাসড ও কনসেপ্ট-ড্রিভেন প্রস্তুতি।",
            প্রোমোকোড: "hsc26pcmb4",
            কোর্স_লিংক: "https://10ms.io/XT2soj",
          },
          {
            কোর্স: "HSC 26 PCMB + Science Pack",
            ডেস্ক্রিপশন:
              "(ফিজিক্স, কেমিস্ট্রি, ম্যাথ, বায়োলজি) বিষয়গুলোর পাশাপাশি অতিরিক্ত বিজ্ঞানভিত্তিক সাপোর্ট ও প্র্যাকটিসসহ গুছানো প্রস্তুতি প্রোগ্রাম।",
            প্রোমোকোড: "hsc26bundle",
            কোর্স_লিংক: "https://10ms.io/2T2sae",
          },
          {
            কোর্স: "HSC 26 PCMB Premium (BEI)",
            ডেস্ক্রিপশন:
              "বিজ্ঞান বিভাগের সব বিষয়সহ বাংলা, ইংরেজি ও আইসিটি 2.0 অন্তর্ভুক্ত করে সর্বাঙ্গীণ একাডেমিক প্রস্তুতির উন্নত সংস্করণ।",
            প্রোমোকোড: "hsc26bundle",
            কোর্স_লিংক: "https://10ms.io/IT2sdq",
          },
          {
            কোর্স: "HSC 26 Final Boost – Science",
            ডেস্ক্রিপশন:
              "পরীক্ষার আগে গুরুত্বপূর্ণ অধ্যায়, কমন প্রশ্ন ও দ্রুত রিভিশনের মাধ্যমে সর্বোচ্চ স্কোর নিশ্চিত করার ইনটেনসিভ প্রস্তুতি।",
            প্রোমোকোড: "smp26sci",
            কোর্স_লিংক: "https://10ms.io/BT2diy",
          },
        ],
      },
      {
        section_heading:
          "HSC 2027 বিজ্ঞান বিভাগ | PCMB অনলাইন ব্যাচ (ফিজিক্স, কেমিস্ট্রি, ম্যাথ, বায়োলজি)",
        courses: [
          {
            কোর্স: "HSC 27 PCMB Foundation",
            ডেস্ক্রিপশন:
              "পদার্থবিজ্ঞান, রসায়ন, গণিত ও জীববিজ্ঞানের বেসিক থেকে শক্ত ভিত তৈরির জন্য ধাপে ধাপে প্রস্তুতি প্রোগ্রাম।",
            প্রোমোকোড: "hsc27pcmb2",
            কোর্স_লিংক: "https://10ms.io/KT2aUi",
          },
          {
            কোর্স: "HSC 27 PCMB Full Batch",
            ডেস্ক্রিপশন:
              "শুরু থেকে বোর্ড পর্যন্ত সম্পূর্ণ সিলেবাস কাভার করে গভীর কনসেপ্ট ও নিয়মিত প্র্যাকটিসভিত্তিক প্রস্তুতি।",
            প্রোমোকোড: "hsc27pcmb4",
            কোর্স_লিংক: "https://10ms.io/JT2aOQ",
          },
          {
            কোর্স: "HSC 27 PCMB + BEI",
            ডেস্ক্রিপশন:
              "বিজ্ঞান বিভাগের মূল বিষয়গুলোর পাশাপাশি বাংলা, ইংরেজি ও আইসিটি অন্তর্ভুক্ত করে সর্বাঙ্গীণ একাডেমিক প্রস্তুতির বিশেষ প্রোগ্রাম।",
            প্রোমোকোড: "hsc27bundle",
            কোর্স_লিংক: "https://10ms.io/IT2aPr",
          },
        ],
      },
    ],

    business: [
      {
        section_heading:
          "HSC 2027 ব্যবসায় শিক্ষা বিভাগ | ফাইন্যান্স ও অ্যাকাউন্টিং অনলাইন ব্যাচ",
        courses: [
          {
            কোর্স: "HSC 27 Finance + BEI",
            ডেস্ক্রিপশন:
              "ফাইন্যান্স ও অ্যাকাউন্টিংয়ের সম্পূর্ণ সিলেবাসের পাশাপাশি বাংলা, ইংরেজি ও আইসিটি অন্তর্ভুক্ত করে সর্বাঙ্গীণ একাডেমিক প্রস্তুতি।",
            প্রোমোকোড: "smp26sci",
            কোর্স_লিংক: "https://10ms.io/uT2dk7",
          },
          {
            কোর্স: "HSC 27 Finance & Accounting",
            ডেস্ক্রিপশন:
              "ব্যবসায় শিক্ষা বিভাগের শিক্ষার্থীদের জন্য কনসেপ্ট-ক্লিয়ারিং, প্রশ্ন অনুশীলন ও বোর্ড-ফোকাসড সম্পূর্ণ সিলেবাস কাভারেজ।",
            প্রোমোকোড: "smp26sci",
            কোর্স_লিংক: "https://10ms.io/eT2db2",
          },
          {
            কোর্স: "HSC 26 Final Boost – Business",
            ডেস্ক্রিপশন:
              "ব্যবসায় শিক্ষা বিভাগের শিক্ষার্থীদের জন্য এক্সাম-ফোকাসড ফাইনাল রিভিশন ও প্রশ্ন অনুশীলনভিত্তিক কোর্স।",
            কোর্স_লিংক: "https://10ms.io/AT2doS",
          },
        ],
      },
    ],

    humanities: [
      {
        section_heading:
          "HSC 2026 শেষ মুহূর্তের প্রস্তুতি কোর্স | মানবিক বিভাগ",
        courses: [
          {
            কোর্স: "HSC 26 Final Boost – Humanities",
            ডেস্ক্রিপশন:
              "HSC 2026 ফাইনাল বুস্ট ক্র্যাশ কোর্স – মানবিক বিভাগ (Bundle) মানবিক বিভাগের জন্য সহজ ব্যাখ্যা, সাজানো নোট ও টার্গেটেড প্রস্তুতির মাধ্যমে আত্মবিশ্বাস বাড়ানোর বিশেষ প্রোগ্রাম।",
            প্রোমোকোড: "smp26arts",
            কোর্স_লিংক: "https://10ms.io/jT2dun",
          },
        ],
      },
    ],

    all: [
      {
        section_heading:
          "For IELTS preparation, the following courses and practice resources are available.",
        courses: [
          {
            কোর্স: "IELTS Live Interactive Batch",
            ডেস্ক্রিপশন:
              "রিয়েল-টাইম অনলাইন ক্লাসে শিক্ষকের সঙ্গে সরাসরি ইন্টারঅ্যাকশন এবং দ্রুত ফলাফলের জন্য ইনটেনসিভ প্রস্তুতি।",
            প্রোমোকোড: "ieltslive",
            কোর্স_লিংক: "https://10ms.io/DYNMlT",
          },
          {
            কোর্স: "IELTS Reading & Listening Mock Tests",
            ডেস্ক্রিপশন:
              "পরীক্ষার সময় সীমা ও বাস্তব পরীক্ষার ফরম্যাটে রিডিং ও লিসেনিং দক্ষতা বাড়ানোর জন্য আদর্শ মক টেস্ট সিরিজ।",
            কোর্স_লিংক: "https://10ms.io/xYNMHu",
          },
          {
            কোর্স: "IELTS Masterclass by Munzereen Shahid",
            ডেস্ক্রিপশন:
              "অভিজ্ঞ IELTS কোচ Munzereen Shahid-এর নেতৃত্বে লক্ষ্যভিত্তিক প্রস্তুতি, কৌশল ও মডেল টেস্ট সহ।",
            কোর্স_লিংক: "https://10ms.io/DYNM1M",
          },
        ],
      },
      {
        section_heading:
          "Learners looking to improve their English may explore these courses",
        courses: [
          {
            কোর্স: "ঘরে বসে Spoken English প্রোগ্রাম",
            ডেস্ক্রিপশন:
              "ঘরে বসেই দৈনন্দিন কথোপকথনের জন্য প্র্যাকটিক্যাল স্পোকেন ইংলিশ শেখার কোর্স।",
            কোর্স_লিংক: "https://10ms.io/oT2o5P",
          },
          {
            কোর্স: "English Writing Skills for Students",
            ডেস্ক্রিপশন:
              "Paragraph, Essay, Email ও Creative Writing উন্নত করার জন্য শিক্ষার্থীবান্ধব কোর্স।",
            কোর্স_লিংক: "https://10ms.io/2T2pRv",
          },
          {
            কোর্স: "Spoken English + Grammar Smart Bundle",
            ডেস্ক্রিপশন:
              "স্পোকেন ইংলিশের ফ্লুয়েন্সি ও গ্রামারের কনসেপ্ট একসাথে শক্ত করার কম্বো কোর্স।",
            প্রোমোকোড: "spokenbundle",
            কোর্স_লিংক: "https://10ms.io/zT2o1H",
          },
          {
            কোর্স: "English Master Bundle (All-in-One Program)",
            ডেস্ক্রিপশন:
              "Spoken, Grammar, Writing ও Vocabulary—সবকিছু একসাথে কাভার করা প্রিমিয়াম প্যাকেজ।",
            প্রোমোকোড: "affemb10",
            কোর্স_লিংক: "https://10ms.io/sT2pjE",
          },
        ],
      },
    ],
  };

  // Global variables
  const hscGpaCalcGroupDropdown = document.getElementById(
    "hsc-gpa-calc-group-dropdown",
  );
  const hscGpaCalcInputTypeDropdown = document.getElementById(
    "hsc-gpa-calc-input-type-dropdown",
  );
  const hscGpaCalcGroupContentWrapper = document.getElementById(
    "hsc-gpa-calc-group-content-wrapper",
  );
  const hscGpaCalcCalculateBtn = document.getElementById(
    "hsc-gpa-calc-calculate-btn",
  );
  const hscGpaCalcResetBtn = document.getElementById("hsc-gpa-calc-reset-btn");
  const hscGpaCalcPrintPdfBtn = document.getElementById(
    "hsc-gpa-calc-print-pdf-btn",
  );
  const hscGpaCalcResultDisplay = document.getElementById(
    "hsc-gpa-calc-result-display",
  );
  const hscGpaCalcSubjectResultsBody = document.getElementById(
    "hsc-gpa-calc-subject-results-body",
  );
  const hscGpaCalcFinalGpa = document.getElementById("hsc-gpa-calc-final-gpa");
  const hscGpaCalcOverallLetterGrade = document.getElementById(
    "hsc-gpa-calc-overall-letter-grade",
  );
  const hscGpaCalcOverallStatus = document.getElementById(
    "hsc-gpa-calc-overall-status",
  );
  const hscGpaCalcOptionalContribution = document.getElementById(
    "hsc-gpa-calc-optional-contribution",
  );
  const hscGpaCalcActionButtons = document.getElementById(
    "hsc-gpa-calc-action-buttons",
  );

  // Message box elements
  const hscGpaCalcMessageBox = document.getElementById(
    "hsc-gpa-calc-custom-message-box",
  );
  const hscGpaCalcMessageTitle = document.getElementById(
    "hsc-gpa-calc-message-title",
  );
  const hscGpaCalcMessageText = document.getElementById(
    "hsc-gpa-calc-message-text",
  );
  const hscGpaCalcMessageConfirmBtn = document.getElementById(
    "hsc-gpa-calc-message-confirm",
  );
  const hscGpaCalcMessageCancelBtn = document.getElementById(
    "hsc-gpa-calc-message-cancel",
  );

  let hscGpaCalcCurrentGroup = "science";
  let hscGpaCalcCurrentInputType = "grade";

  // Utility Functions
  function hscGpaCalcCleanSubjectNameForId(subjectName) {
    return subjectName.toLowerCase().replace(/[^a-z0-9]/g, "-");
  }

  function hscGpaCalcShowMessageBox(title, message, isConfirm = false) {
    hscGpaCalcMessageTitle.textContent = title;
    hscGpaCalcMessageText.textContent = message;
    hscGpaCalcMessageCancelBtn.style.display = isConfirm
      ? "inline-block"
      : "none";
    hscGpaCalcMessageBox.style.display = "flex";

    if (isConfirm) {
      return new Promise((resolve) => {
        const confirmHandler = () => {
          hscGpaCalcMessageBox.style.display = "none";
          hscGpaCalcMessageConfirmBtn.removeEventListener(
            "click",
            confirmHandler,
          );
          hscGpaCalcMessageCancelBtn.removeEventListener(
            "click",
            cancelHandler,
          );
          resolve(true);
        };
        const cancelHandler = () => {
          hscGpaCalcMessageBox.style.display = "none";
          hscGpaCalcMessageConfirmBtn.removeEventListener(
            "click",
            confirmHandler,
          );
          hscGpaCalcMessageCancelBtn.removeEventListener(
            "click",
            cancelHandler,
          );
          resolve(false);
        };
        hscGpaCalcMessageConfirmBtn.addEventListener("click", confirmHandler);
        hscGpaCalcMessageCancelBtn.addEventListener("click", cancelHandler);
      });
    } else {
      hscGpaCalcMessageConfirmBtn.onclick = () => {
        hscGpaCalcMessageBox.style.display = "none";
      };
    }
  }

  function hscGpaCalcGetGpaPointFromMarks(marks) {
    const sortedScale = [...hscGpaCalcGradingScale].sort(
      (a, b) => b.marks - a.marks,
    );
    for (const entry of sortedScale) {
      if (marks >= entry.marks) return entry.gpa;
    }
    return 0.0;
  }

  function hscGpaCalcGetLetterGradeFromGpa(gpaPoint) {
    const sortedScale = [...hscGpaCalcGradingScale].sort(
      (a, b) => b.gpa - a.gpa,
    );
    for (const entry of sortedScale) {
      if (gpaPoint >= entry.gpa) return entry.grade;
    }
    return "F";
  }

  function hscGpaCalcGetRepresentativeMarkFromGpa(gpaPoint) {
    const foundEntry = [...hscGpaCalcGradingScale]
      .sort((a, b) => b.gpa - a.gpa)
      .find((entry) => gpaPoint >= entry.gpa);
    return foundEntry ? foundEntry.marks : 0;
  }

  // --- HTML Generation Functions ---

  function hscGpaCalcGenerateSubjectInputHtml(
    subjectName,
    groupId,
    isOptional = false,
    isDynamicLabel = false,
  ) {
    const cleanSubjectName = hscGpaCalcCleanSubjectNameForId(subjectName);
    const idPrefix = isOptional
      ? `hsc-gpa-calc-optional-${groupId}`
      : `hsc-gpa-calc-${groupId}-${cleanSubjectName}`;
    const displayStyle = isOptional ? "display: none;" : "";
    const labelId =
      isDynamicLabel || isOptional ? `id="hsc-gpa-calc-label-${idPrefix}"` : "";

    let optionsHtml = '<option value="">Grade</option>';
    [...hscGpaCalcGradingScale]
      .sort((a, b) => b.gpa - a.gpa)
      .forEach((grade) => {
        optionsHtml += `<option value="${grade.gpa.toFixed(2)}">${grade.grade}</option>`;
      });

    return `
        <div class="hsc-gpa-calc-subject-input" ${isOptional ? `id="hsc-gpa-calc-${groupId}-optional-input-row"` : ""} style="${displayStyle}">
            <label ${labelId} for="${idPrefix}-grade">${subjectName}</label>
            <div class="hsc-gpa-calc-input-wrapper">
                <input type="number" id="${idPrefix}-marks" class="hsc-gpa-calc-input-marks st-general-input" placeholder="Marks" />
                <input type="number" id="${idPrefix}-point" class="hsc-gpa-calc-input-point st-general-input" placeholder="Point" step="0.01" min="0" max="5" />
                <select class="hsc-gpa-calc-input-grade st-general-select" id="${idPrefix}-grade">
                    ${optionsHtml}
                </select>
            </div>
        </div>
    `;
  }

  function hscGpaCalcGenerateDropdownInputRowHtml(
    groupId,
    index,
    options,
    isOptional = false,
  ) {
    const idPrefix = isOptional
      ? `hsc-gpa-calc-optional-${groupId}`
      : `hsc-gpa-calc-${groupId}-dropdown-${index}`;
    const rowId = isOptional
      ? `hsc-gpa-calc-${groupId}-optional-input-row`
      : `hsc-gpa-calc-${groupId}-row-${index}`;
    const dropdownId = isOptional
      ? `hsc-gpa-calc-optional-subject-selection-${groupId}`
      : `hsc-gpa-calc-${groupId}-select-${index}`;

    let subjectOptions = `<option value="">-- Select Subject --</option>`;
    options.forEach((opt) => {
      subjectOptions += `<option value="${opt}">${opt}</option>`;
    });

    let gradeOptions = '<option value="">Grade</option>';
    [...hscGpaCalcGradingScale]
      .sort((a, b) => b.gpa - a.gpa)
      .forEach((grade) => {
        gradeOptions += `<option value="${grade.gpa.toFixed(2)}">${grade.grade}</option>`;
      });

    const labelPart = `
        <div class="hsc-gpa-calc-input-group-label">
            <select id="${dropdownId}" class="st-general-select ${isOptional ? "hsc-gpa-calc-optional-subject-dropdown" : "hsc-gpa-calc-core-subject-dropdown"}">
                ${subjectOptions}
            </select>
        </div>
      `;

    // FIX: Removed 'visibility:hidden' for optional inputs to make them always visible
    return `
        <div class="hsc-gpa-calc-subject-input" id="${rowId}" style="${isOptional ? "display:flex" : ""}"> 
             ${labelPart}
             <div class="hsc-gpa-calc-input-wrapper" id="${idPrefix}-inputs">
                <input type="number" id="${idPrefix}-marks" class="hsc-gpa-calc-input-marks st-general-input" placeholder="Marks" />
                <input type="number" id="${idPrefix}-point" class="hsc-gpa-calc-input-point st-general-input" placeholder="Point" step="0.01" min="0" max="5" />
                <select class="hsc-gpa-calc-input-grade st-general-select" id="${idPrefix}-grade">
                    ${gradeOptions}
                </select>
            </div>
        </div>
      `;
  }

  // --- Dynamic Content Generation ---

  function hscGpaCalcGenerateGroupContents() {
    hscGpaCalcGroupContentWrapper.innerHTML = "";

    // Science Group
    const scienceDiv = document.createElement("div");
    scienceDiv.id = "hsc-gpa-calc-science-group";
    scienceDiv.className = "hsc-gpa-calc-group-content";

    let scienceHtml = `<div class="hsc-gpa-calc-section hsc-gpa-calc-general-card"><h3 class="hsc-gpa-calc-section-title">Compulsory Subjects</h3>`;
    hscGpaCalcSubjects.science.compulsory.forEach(
      (sub) =>
        (scienceHtml += hscGpaCalcGenerateSubjectInputHtml(sub, "science")),
    );
    scienceHtml += `</div><div class="hsc-gpa-calc-section hsc-gpa-calc-general-card"><h3 class="hsc-gpa-calc-section-title">Core Subjects</h3>`;
    hscGpaCalcSubjects.science.core.forEach(
      (sub) =>
        (scienceHtml += hscGpaCalcGenerateSubjectInputHtml(sub, "science")),
    );

    scienceHtml += hscGpaCalcGenerateDropdownInputRowHtml(
      "science",
      "dynamic",
      hscGpaCalcSubjects.science.dynamicCoreOptions,
    );
    scienceHtml += `</div>`;
    scienceHtml += `<div class="hsc-gpa-calc-section hsc-gpa-calc-general-card"><h3 class="hsc-gpa-calc-section-title">Optional Subject</h3>`;
    scienceHtml += hscGpaCalcGenerateDropdownInputRowHtml(
      "science",
      "optional",
      hscGpaCalcSubjects.science.optionalOptions,
      true,
    );
    scienceHtml += `</div>`;
    scienceDiv.innerHTML = scienceHtml;
    hscGpaCalcGroupContentWrapper.appendChild(scienceDiv);

    // Humanities Group
    const humanitiesDiv = document.createElement("div");
    humanitiesDiv.id = "hsc-gpa-calc-humanities-group";
    humanitiesDiv.className = "hsc-gpa-calc-group-content";

    let humHtml = `<div class="hsc-gpa-calc-section hsc-gpa-calc-general-card"><h3 class="hsc-gpa-calc-section-title">Compulsory Subjects</h3>`;
    hscGpaCalcSubjects.humanities.compulsory.forEach(
      (sub) =>
        (humHtml += hscGpaCalcGenerateSubjectInputHtml(sub, "humanities")),
    );
    humHtml += `</div><div class="hsc-gpa-calc-section hsc-gpa-calc-general-card"><h3 class="hsc-gpa-calc-section-title">Core / Elective Subjects (Select 3)</h3>`;
    for (let i = 1; i <= 3; i++) {
      humHtml += hscGpaCalcGenerateDropdownInputRowHtml(
        "humanities",
        i,
        hscGpaCalcSubjects.humanities.corePool,
      );
    }
    humHtml += `</div>`;
    humHtml += `<div class="hsc-gpa-calc-section hsc-gpa-calc-general-card"><h3 class="hsc-gpa-calc-section-title">Optional Subject</h3>`;
    humHtml += hscGpaCalcGenerateDropdownInputRowHtml(
      "humanities",
      "optional",
      hscGpaCalcSubjects.humanities.optionalPool,
      true,
    );
    humHtml += `</div>`;
    humanitiesDiv.innerHTML = humHtml;
    hscGpaCalcGroupContentWrapper.appendChild(humanitiesDiv);

    // Business Group
    const businessDiv = document.createElement("div");
    businessDiv.id = "hsc-gpa-calc-business-group";
    businessDiv.className = "hsc-gpa-calc-group-content";

    let busHtml = `<div class="hsc-gpa-calc-section hsc-gpa-calc-general-card"><h3 class="hsc-gpa-calc-section-title">Compulsory Subjects</h3>`;
    hscGpaCalcSubjects.business.compulsory.forEach(
      (sub) => (busHtml += hscGpaCalcGenerateSubjectInputHtml(sub, "business")),
    );
    busHtml += `</div><div class="hsc-gpa-calc-section hsc-gpa-calc-general-card"><h3 class="hsc-gpa-calc-section-title">Core / Elective Subjects</h3>`;
    hscGpaCalcSubjects.business.elective.forEach(
      (sub) => (busHtml += hscGpaCalcGenerateSubjectInputHtml(sub, "business")),
    );
    busHtml += `</div>`;
    busHtml += `<div class="hsc-gpa-calc-section hsc-gpa-calc-general-card"><h3 class="hsc-gpa-calc-section-title">Optional Subject</h3>`;
    busHtml += hscGpaCalcGenerateDropdownInputRowHtml(
      "business",
      "optional",
      hscGpaCalcSubjects.business.optionalOptions,
      true,
    );
    busHtml += `</div>`;
    businessDiv.innerHTML = busHtml;
    hscGpaCalcGroupContentWrapper.appendChild(businessDiv);

    hscGpaCalcAttachEventListeners();
  }

  function hscGpaCalcAttachEventListeners() {
    // Input Listeners
    document.querySelectorAll(".hsc-gpa-calc-input-marks").forEach((i) => {
      i.addEventListener("input", hscGpaCalcUpdateFromMarks);
      i.addEventListener("blur", hscGpaCalcValidateInputOnBlur);
    });
    document.querySelectorAll(".hsc-gpa-calc-input-point").forEach((i) => {
      i.addEventListener("input", hscGpaCalcUpdateFromPoint);
      i.addEventListener("blur", hscGpaCalcValidateInputOnBlur);
    });
    document
      .querySelectorAll(".hsc-gpa-calc-input-grade")
      .forEach((i) => i.addEventListener("change", hscGpaCalcUpdateFromGrade));

    // Science Logic: Dynamic Core Change
    const sciDynamic = document.getElementById(
      "hsc-gpa-calc-science-select-dynamic",
    );
    if (sciDynamic) {
      sciDynamic.addEventListener("change", hscGpaCalcUpdateScienceSubjects);
    }

    const sciOptional = document.getElementById(
      "hsc-gpa-calc-optional-subject-selection-science",
    );
    if (sciOptional) {
      sciOptional.addEventListener("change", (e) =>
        hscGpaCalcHandleOptionalInputs("science", e.target.value),
      );
    }

    // Humanities Logic
    for (let i = 1; i <= 3; i++) {
      const el = document.getElementById(`hsc-gpa-calc-humanities-select-${i}`);
      if (el)
        el.addEventListener("change", hscGpaCalcUpdateHumanitiesDropdowns);
    }
    const humOptional = document.getElementById(
      "hsc-gpa-calc-optional-subject-selection-humanities",
    );
    if (humOptional) {
      humOptional.addEventListener("change", (e) =>
        hscGpaCalcHandleOptionalInputs("humanities", e.target.value),
      );
    }

    // Business Optional
    const busOptional = document.getElementById(
      "hsc-gpa-calc-optional-subject-selection-business",
    );
    if (busOptional) {
      busOptional.addEventListener("change", (e) =>
        hscGpaCalcHandleOptionalInputs("business", e.target.value),
      );
    }
  }

  // --- Logic Functions ---

  function hscGpaCalcHandleOptionalInputs(group, value) {
    // FIX: Removed visibility toggling. Inputs are always visible now.
    // We just save progress here.
    hscGpaCalcSaveProgress();
  }

  function hscGpaCalcUpdateScienceSubjects() {
    const coreSelect = document.getElementById(
      "hsc-gpa-calc-science-select-dynamic",
    );
    const optionalSelect = document.getElementById(
      "hsc-gpa-calc-optional-subject-selection-science",
    );
    if (!coreSelect || !optionalSelect) return;
    const selectedCore = coreSelect.value;
    const currentOptional = optionalSelect.value;
    const allOptions = hscGpaCalcSubjects.science.optionalOptions;

    let newOptions = `<option value="">-- Select Optional --</option>`;
    allOptions.forEach((opt) => {
      const coreName = selectedCore.split(" ")[0];
      const optName = opt.split(" ")[0];
      if (selectedCore && selectedCore.includes(optName)) {
      } else if (selectedCore && optName.includes(coreName)) {
      } else {
        newOptions += `<option value="${opt}">${opt}</option>`;
      }
    });
    optionalSelect.innerHTML = newOptions;
    if (
      currentOptional &&
      Array.from(optionalSelect.options).some(
        (o) => o.value === currentOptional,
      )
    ) {
      optionalSelect.value = currentOptional;
    } else {
      // Keep value blank if invalid, but inputs remain visible
      optionalSelect.value = "";
    }
    hscGpaCalcSaveProgress();
  }

  function hscGpaCalcUpdateHumanitiesDropdowns() {
    const selects = [
      document.getElementById("hsc-gpa-calc-humanities-select-1"),
      document.getElementById("hsc-gpa-calc-humanities-select-2"),
      document.getElementById("hsc-gpa-calc-humanities-select-3"),
    ];
    const selectedValues = selects.map((s) => s.value).filter((v) => v);

    selects.forEach((select) => {
      const currentValue = select.value;
      let html = `<option value="">-- Select Subject --</option>`;
      hscGpaCalcSubjects.humanities.corePool.forEach((subject) => {
        if (subject === currentValue || !selectedValues.includes(subject)) {
          html += `<option value="${subject}">${subject}</option>`;
        }
      });
      select.innerHTML = html;
      select.value = currentValue;
    });

    const optionalSelect = document.getElementById(
      "hsc-gpa-calc-optional-subject-selection-humanities",
    );
    if (optionalSelect) {
      const currentOpt = optionalSelect.value;
      let optHtml = `<option value="">-- Select Optional --</option>`;
      hscGpaCalcSubjects.humanities.optionalPool.forEach((subj) => {
        if (!selectedValues.includes(subj)) {
          optHtml += `<option value="${subj}">${subj}</option>`;
        }
      });
      optionalSelect.innerHTML = optHtml;

      if (
        currentOpt &&
        Array.from(optionalSelect.options).some((o) => o.value === currentOpt)
      ) {
        optionalSelect.value = currentOpt;
      } else {
        optionalSelect.value = "";
      }
    }
    hscGpaCalcSaveProgress();
  }

  // --- Input Event Handlers ---

  function hscGpaCalcUpdateFromMarks(event) {
    const marksInput = event.target;
    const marks = parseFloat(marksInput.value);
    const pointInput = marksInput.nextElementSibling;
    const gradeSelect = pointInput.nextElementSibling;

    if (isNaN(marks) || marks < 0 || marks > 100) {
      marksInput.classList.add("hsc-gpa-calc-error");
      pointInput.value = "";
      gradeSelect.value = "";
    } else {
      marksInput.classList.remove("hsc-gpa-calc-error");
      const gpaPoint = hscGpaCalcGetGpaPointFromMarks(marks);
      pointInput.value = gpaPoint.toFixed(2);

      const options = Array.from(gradeSelect.options);
      const grade = hscGpaCalcGetLetterGradeFromGpa(gpaPoint);
      const matchingOption = options.find((o) => o.text === grade);
      if (matchingOption) gradeSelect.value = matchingOption.value;
    }
    hscGpaCalcSaveProgress();
  }

  function hscGpaCalcUpdateFromPoint(event) {
    const pointInput = event.target;
    const gpaPoint = parseFloat(pointInput.value);
    const marksInput = pointInput.previousElementSibling;
    const gradeSelect = pointInput.nextElementSibling;

    if (isNaN(gpaPoint) || gpaPoint < 0 || gpaPoint > 5) {
      pointInput.classList.add("hsc-gpa-calc-error");
      marksInput.value = "";
      gradeSelect.value = "";
    } else {
      pointInput.classList.remove("hsc-gpa-calc-error");
      marksInput.value = hscGpaCalcGetRepresentativeMarkFromGpa(gpaPoint);
      const options = Array.from(gradeSelect.options);
      const exactOption = options.find(
        (o) => parseFloat(o.value) === parseFloat(gpaPoint.toFixed(2)),
      );
      if (exactOption) {
        gradeSelect.value = exactOption.value;
      } else {
        const grade = hscGpaCalcGetLetterGradeFromGpa(gpaPoint);
        const matchingOption = options.find((o) => o.text === grade);
        if (matchingOption) gradeSelect.value = matchingOption.value;
      }
    }
    hscGpaCalcSaveProgress();
  }

  function hscGpaCalcUpdateFromGrade(event) {
    const gradeSelect = event.target;
    const selectedGpa = parseFloat(gradeSelect.value);
    const pointInput = gradeSelect.previousElementSibling;
    const marksInput = pointInput.previousElementSibling;

    if (!isNaN(selectedGpa)) {
      pointInput.value = selectedGpa.toFixed(2);
      marksInput.value = hscGpaCalcGetRepresentativeMarkFromGpa(selectedGpa);
    } else {
      marksInput.value = "";
      pointInput.value = "";
    }
    marksInput.classList.remove("hsc-gpa-calc-error");
    pointInput.classList.remove("hsc-gpa-calc-error");
    hscGpaCalcSaveProgress();
  }

  function hscGpaCalcValidateInputOnBlur(event) {
    const input = event.target;
    if (!input.value) {
      input.classList.remove("hsc-gpa-calc-error");
      return;
    }
    const val = parseFloat(input.value);
    if (input.classList.contains("hsc-gpa-calc-input-marks")) {
      if (val < 0 || val > 100) input.classList.add("hsc-gpa-calc-error");
    }
    if (input.classList.contains("hsc-gpa-calc-input-point")) {
      if (val < 0 || val > 5) input.classList.add("hsc-gpa-calc-error");
    }
    hscGpaCalcSaveProgress();
  }

  // --- Calculation Logic ---

  function hscGpaCalcCollectData() {
    const group = hscGpaCalcCurrentGroup;
    const container = document.getElementById(`hsc-gpa-calc-${group}-group`);
    if (!container) return null;

    const subjects = [];
    let isValid = true;

    const processRow = (row, isOptional) => {
      const nameSelect = row.querySelector(
        ".hsc-gpa-calc-core-subject-dropdown, .hsc-gpa-calc-optional-subject-dropdown",
      );
      let name = "";
      if (nameSelect) {
        name = nameSelect.value;
        // FIX: If optional and no name selected, skip processing even if marks exist.
        // Requirement "Always appear" means inputs are visible, but calculation requires subject name.
        if (isOptional && !name) return;
        if (!isOptional && !name) {
          // Mandatory dropdown not selected
          nameSelect.classList.add("hsc-gpa-calc-error");
          isValid = false;
          return;
        }
      } else {
        name = row.querySelector("label").textContent;
      }

      const pointInput = row.querySelector(".hsc-gpa-calc-input-point");
      const gpaPoint = parseFloat(pointInput.value);

      if (isNaN(gpaPoint)) {
        row.querySelector("input").classList.add("hsc-gpa-calc-error");
        isValid = false;
      } else {
        subjects.push({
          name: name,
          gpaPoint: gpaPoint,
          grade: hscGpaCalcGetLetterGradeFromGpa(gpaPoint),
          marks: parseFloat(
            row.querySelector(".hsc-gpa-calc-input-marks").value,
          ),
          isOptional: isOptional,
        });
      }
    };

    container.querySelectorAll(".hsc-gpa-calc-subject-input").forEach((row) => {
      const isOptional = row.id.includes("optional-input-row");
      const nameSelect = row.querySelector(
        ".hsc-gpa-calc-optional-subject-dropdown",
      );

      // Logic simplification: Process row if it's not the "Label Row" of the optional dropdown
      // The HTML structure is: Optional Label (Dropdown) -> Input Row
      // Wait, my HTML generation puts the dropdown INSIDE the same row as inputs for optional logic?
      // Let's check `hscGpaCalcGenerateDropdownInputRowHtml`. Yes, it's one `div.hsc-gpa-calc-subject-input`.

      processRow(row, isOptional);
    });

    if (!isValid) {
      hscGpaCalcShowMessageBox(
        "Input Error",
        "Please fill in all required fields and ensure marks are valid.",
      );
      return null;
    }
    return subjects;
  }

  function hscGpaCalcCalculate() {
    const subjects = hscGpaCalcCollectData();
    if (!subjects) return;

    let totalPoints = 0;
    let count = 0;
    let hasF = false;
    let optionalSub = null;
    let optionalContribution = "";

    subjects.forEach((sub) => {
      if (sub.grade === "F") hasF = true;

      if (sub.isOptional) {
        optionalSub = sub;
      } else {
        totalPoints += sub.gpaPoint;
        count++;
      }
    });

    if (optionalSub) {
      if (optionalSub.gpaPoint > 2.0) {
        const extra = optionalSub.gpaPoint - 2.0;
        totalPoints += extra;
        optionalContribution = `Optional (${optionalSub.name}): ${optionalSub.gpaPoint} GPA. Added ${extra.toFixed(2)} to total.`;
      } else {
        optionalContribution = `Optional (${optionalSub.name}): ${optionalSub.gpaPoint} GPA. No points added (<= 2.0).`;
      }
    }

    let gpa = count === 0 ? 0 : totalPoints / count;
    if (gpa > 5) gpa = 5.0;

    const finalGpa = parseFloat(gpa.toFixed(2));
    let finalGrade = hscGpaCalcGetLetterGradeFromGpa(finalGpa);
    let status = "Passed";
    let statusClass = "hsc-gpa-calc-status-pass";

    if (hasF) {
      hscGpaCalcFinalGpa.textContent = "0.00";
      hscGpaCalcOverallLetterGrade.textContent = "F";
      hscGpaCalcOverallStatus.textContent = "Failed";
      hscGpaCalcOverallStatus.className =
        "hsc-gpa-calc-overall-status hsc-gpa-calc-status-fail";
      status = "Failed";
      statusClass = "hsc-gpa-calc-status-fail";
      finalGrade = "F";
    } else {
      hscGpaCalcFinalGpa.textContent = finalGpa.toFixed(2);
      hscGpaCalcOverallLetterGrade.textContent = finalGrade;
      if (finalGpa === 5.0) {
        status = "Passed";
        statusClass = "hsc-gpa-calc-status-golden-a-plus";
      }
      hscGpaCalcOverallStatus.textContent = status;
      hscGpaCalcOverallStatus.className = `hsc-gpa-calc-overall-status ${statusClass}`;
    }

    hscGpaCalcOptionalContribution.textContent = optionalContribution;

    // Render Table
    hscGpaCalcSubjectResultsBody.innerHTML = "";
    subjects.forEach((sub) => {
      const row = hscGpaCalcSubjectResultsBody.insertRow();
      row.insertCell().textContent = sub.name;
      row.insertCell().textContent = sub.marks || "-";
      row.insertCell().textContent = sub.grade;
      row.insertCell().textContent = sub.gpaPoint.toFixed(2);
    });

    hscGpaCalcResultDisplay.style.display = "block";
    hscGpaCalcActionButtons.style.display = "flex";
    hscGpaCalcResultDisplay.scrollIntoView({ behavior: "smooth" });
    hscGpaCalcDisplayCoursePromotions(hscGpaCalcCurrentGroup);

    // Save Results for Persistence
    hscGpaCalcSaveResults({
      gpa: hasF ? "0.00" : finalGpa.toFixed(2),
      grade: finalGrade,
      status: status,
      statusClass: statusClass,
      contribution: optionalContribution,
      subjects: subjects,
    });
  }

  // --- Display & State Management ---

  function hscGpaCalcSwitchGroup(group) {
    hscGpaCalcCurrentGroup = group;
    document
      .querySelectorAll(".hsc-gpa-calc-group-content")
      .forEach((el) => el.classList.remove("hsc-gpa-calc-active"));
    document
      .getElementById(`hsc-gpa-calc-${group}-group`)
      .classList.add("hsc-gpa-calc-active");
    hscGpaCalcResultDisplay.style.display = "none";
    hscGpaCalcActionButtons.style.display = "none";
    hscGpaCalcSaveProgress();
  }

  function hscGpaCalcSwitchInputType(type) {
    hscGpaCalcCurrentInputType = type;
    hscGpaCalcGroupContentWrapper.className = ""; // clear
    if (type === "grade")
      hscGpaCalcGroupContentWrapper.classList.add("hsc-gpa-calc-show-grade");
    if (type === "point")
      hscGpaCalcGroupContentWrapper.classList.add("hsc-gpa-calc-show-point");
    if (type === "marks")
      hscGpaCalcGroupContentWrapper.classList.add("hsc-gpa-calc-show-marks");
    hscGpaCalcSaveProgress();
  }

  function hscGpaCalcDisplayCoursePromotions(group) {
    const promotionsContainer = document.getElementById(
      "hsc-gpa-calc-course-promotions",
    );
    if (!promotionsContainer) return;
    promotionsContainer.innerHTML = "";

    const groupCourses = hscGpaCalcCourseData[group] || [];
    const allCourses = hscGpaCalcCourseData.all || [];
    const allSections = [...groupCourses, ...allCourses];

    if (allSections.length === 0) {
      promotionsContainer.style.display = "none";
      return;
    }
    promotionsContainer.style.display = "block";

    allSections.forEach((section) => {
      if (!section.courses || section.courses.length === 0) return;
      const sectionDiv = document.createElement("div");
      sectionDiv.className = "hsc-gpa-calc-course-section";
      const heading = document.createElement("h3");
      heading.className = "hsc-gpa-calc-course-section-heading";
      heading.textContent = section.section_heading;
      sectionDiv.appendChild(heading);

      const coursesContainer = document.createElement("div");
      coursesContainer.className = "hsc-gpa-calc-courses-container";

      section.courses.forEach((course) => {
        const courseCard = document.createElement("div");
        courseCard.className = "hsc-gpa-calc-course-card";
        courseCard.innerHTML = `
            <h4 class="hsc-gpa-calc-course-title">${course.কোর্স}</h4>
            <p class="hsc-gpa-calc-course-description">${course.ডেস্ক্রিপশন}</p>
            ${course.প্রোমোকোড ? `<div class="hsc-gpa-calc-promo-code"><strong>Promo Code:</strong> <code>${course.প্রোমোকোড}</code></div>` : ""}
            <a href="${course.কোর্স_লিংক || "#"}" target="_blank" class="st-general-btn hsc-gpa-calc-course-link-btn"><i class="fas fa-external-link-alt"></i> View Course</a>
        `;
        coursesContainer.appendChild(courseCard);
      });
      sectionDiv.appendChild(coursesContainer);
      promotionsContainer.appendChild(sectionDiv);
    });
  }

  /**
   * Prints the result display section in a new window.
   */
  function hscGpaCalcPrintResults() {
    const printContent = document.getElementById(
      "hsc-gpa-calc-result-display",
    ).innerHTML;

    const printWindow = window.open("", "", "height=600,width=800");
    printWindow.document.write("<html><head><title>HSC GPA Result</title>");
    printWindow.document.write(
      '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">',
    ); // Include Font Awesome
    printWindow.document.write(`
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Rubik:ital,wght@0,300..900;1,200..1000&display=swap');
                    :root {
                        --hsc-gpa-calc-accent: #4361ee; --hsc-gpa-calc-accent-deep: #3a56d4; --hsc-gpa-calc-accent-light: #e6f0ff;
                        --hsc-gpa-calc-body-text: #2b2d42; --hsc-gpa-calc-header-text: #1e293b; --hsc-gpa-calc-bg-clc: #f8f9fa;
                        --hsc-gpa-calc-white: #ffffff; --hsc-gpa-calc-border-color: #e0e3e7; --hsc-gpa-calc-danger: #e74c3c;
                        --hsc-gpa-calc-success: #2ecc71; --hsc-gpa-calc-success-deep: #27ae60;
                        --hsc-gpa-calc-border-radius: 8px; --hsc-gpa-calc-box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
                        --hsc-gpa-calc-transition: all 0.3s ease;
                        --hsc-gpa-calc-body-font: "Rubik", sans-serif; --hsc-gpa-calc-header-font: "Mulish", sans-serif;
                    }
                    body { font-family: var(--hsc-gpa-calc-body-font); margin: 20px; color: var(--hsc-gpa-calc-body-text); }
                    .hsc-gpa-calc-result-title { text-align: center; margin-bottom: 20px; color: var(--hsc-gpa-calc-header-text); font-family: var(--hsc-gpa-calc-header-font); }
                    table { width: 100%; border-collapse: collapse; margin-bottom: 25px; }
                    th, td { border: 1px solid var(--hsc-gpa-calc-border-color); padding: 8px; text-align: left; }
                    th { background-color: var(--hsc-gpa-calc-accent-light); color: var(--hsc-gpa-calc-accent-deep); font-weight: 600; }
                    #hsc-gpa-calc-subject-results-table tr:nth-child(even) { background-color: var(--hsc-gpa-calc-bg-clc); }
                    .hsc-gpa-calc-final-results { text-align: center; margin-bottom: 25px; }
                    .hsc-gpa-calc-final-gpa { font-size: 2em; font-weight: 700; color: var(--hsc-gpa-calc-accent); display: block; margin-top: 5px; }
                    .hsc-gpa-calc-overall-status { font-size: 1.5em; font-weight: 600; padding: 8px 15px; border-radius: var(--hsc-gpa-calc-border-radius); display: inline-block; margin-top: 5px; }
                    .hsc-gpa-calc-status-pass { background-color: var(--hsc-gpa-calc-success-deep); color: var(--hsc-gpa-calc-white); }
                    .hsc-gpa-calc-status-fail { background-color: var(--hsc-gpa-calc-danger); color: var(--hsc-gpa-calc-white); }
                    .hsc-gpa-calc-status-golden-a-plus { background-color: gold; color: var(--hsc-gpa-calc-body-text); }
                    .hsc-gpa-calc-optional-contribution, .hsc-gpa-calc-disclaimer { font-size: 0.9em; color: #555; text-align: center; margin-top: 15px; }
                    /* Hide course promotions and action buttons in print */
                    #hsc-gpa-calc-course-promotions, .hsc-gpa-calc-action-buttons { display: none !important; }
                </style>
            `);
    printWindow.document.write("</head><body>");
    printWindow.document.write(printContent);
    printWindow.document.write("</body></html>");
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  }

  function hscGpaCalcSaveProgress() {
    // FIX: Capture all inputs
    const inputs = {};
    document.querySelectorAll("input, select").forEach((el) => {
      if (el.id) inputs[el.id] = el.value;
    });

    const data = {
      group: hscGpaCalcCurrentGroup,
      inputType: hscGpaCalcCurrentInputType,
      inputs: inputs, // Save all input values
    };
    sessionStorage.setItem("hscGpaCalcState", JSON.stringify(data));
  }

  function hscGpaCalcSaveResults(resultData) {
    sessionStorage.setItem("hscGpaCalcResults", JSON.stringify(resultData));
  }

  function hscGpaCalcLoadProgress() {
    const savedState = JSON.parse(sessionStorage.getItem("hscGpaCalcState"));
    if (savedState) {
      if (savedState.group) {
        hscGpaCalcGroupDropdown.value = savedState.group;
        hscGpaCalcSwitchGroup(savedState.group);
      }
      if (savedState.inputType) {
        hscGpaCalcInputTypeDropdown.value = savedState.inputType;
        hscGpaCalcSwitchInputType(savedState.inputType);
      }
      // FIX: Restore Input Values
      if (savedState.inputs) {
        for (const [id, value] of Object.entries(savedState.inputs)) {
          const el = document.getElementById(id);
          if (el) el.value = value;
        }
        // FIX: Trigger updates to ensure dynamic logic (exclusion) runs based on loaded values
        hscGpaCalcUpdateScienceSubjects();
        hscGpaCalcUpdateHumanitiesDropdowns();
      }
    } else {
      hscGpaCalcSwitchGroup("science");
      hscGpaCalcSwitchInputType("grade");
    }

    const savedResults = JSON.parse(
      sessionStorage.getItem("hscGpaCalcResults"),
    );
    if (savedResults) {
      hscGpaCalcFinalGpa.textContent = savedResults.gpa;
      hscGpaCalcOverallLetterGrade.textContent = savedResults.grade;
      hscGpaCalcOverallStatus.textContent = savedResults.status;
      hscGpaCalcOverallStatus.className = `hsc-gpa-calc-overall-status ${savedResults.statusClass}`;
      hscGpaCalcOptionalContribution.textContent = savedResults.contribution;

      hscGpaCalcSubjectResultsBody.innerHTML = "";
      savedResults.subjects.forEach((sub) => {
        const row = hscGpaCalcSubjectResultsBody.insertRow();
        row.insertCell().textContent = sub.name;
        row.insertCell().textContent = sub.marks || "-";
        row.insertCell().textContent = sub.grade;
        row.insertCell().textContent = sub.gpaPoint.toFixed(2);
      });

      hscGpaCalcResultDisplay.style.display = "block";
      hscGpaCalcActionButtons.style.display = "flex";
      hscGpaCalcDisplayCoursePromotions(hscGpaCalcCurrentGroup);
    }
  }

  // Initialization
  document.addEventListener("DOMContentLoaded", () => {
    hscGpaCalcGenerateGroupContents();

    hscGpaCalcGroupDropdown.addEventListener("change", (e) =>
      hscGpaCalcSwitchGroup(e.target.value),
    );
    hscGpaCalcInputTypeDropdown.addEventListener("change", (e) =>
      hscGpaCalcSwitchInputType(e.target.value),
    );

    hscGpaCalcCalculateBtn.addEventListener("click", hscGpaCalcCalculate);
    hscGpaCalcResetBtn.addEventListener("click", () => {
      hscGpaCalcShowMessageBox(
        "Confirm Reset",
        "Are you sure? This will clear all data and results.",
        true,
      ).then((ok) => {
        if (ok) {
          document.querySelectorAll("input").forEach((i) => (i.value = ""));
          document
            .querySelectorAll("select.hsc-gpa-calc-input-grade")
            .forEach((s) => (s.value = ""));
          document
            .querySelectorAll("select.hsc-gpa-calc-core-subject-dropdown")
            .forEach((s) => (s.value = ""));
          document
            .querySelectorAll("select.hsc-gpa-calc-optional-subject-dropdown")
            .forEach((s) => (s.value = ""));

          hscGpaCalcResultDisplay.style.display = "none";
          hscGpaCalcActionButtons.style.display = "none";

          sessionStorage.removeItem("hscGpaCalcResults");
          sessionStorage.removeItem("hscGpaCalcState");

          hscGpaCalcHandleOptionalInputs("science", "");
          hscGpaCalcHandleOptionalInputs("humanities", "");
          hscGpaCalcHandleOptionalInputs("business", "");

          hscGpaCalcSwitchGroup("science");
        }
      });
    });

    hscGpaCalcPrintPdfBtn.addEventListener("click", hscGpaCalcPrintResults);
    hscGpaCalcLoadProgress();
  });
})();
