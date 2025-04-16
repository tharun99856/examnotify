console.log("✅ JavaScript is loaded!");

window.onload = function () {
    const username = localStorage.getItem("username");
    const userState = localStorage.getItem("state");

    if (!username) {
        window.location.href = "login.html";
    } else {
        document.getElementById("username-display").textContent = username;
    }

    document.getElementById("logout-button").addEventListener("click", function () {
        localStorage.clear();
        alert("You have been logged out!");
        window.location.href = "login.html";
    });
};

const exams = {
    MPC: {
        national: [
            { name: "JEE Main", date: "2025-04-25", link: "https://jeemain.nta.ac.in" },
            { name: "BITSAT", date: "2025-05-20", link: "https://www.bitsadmission.com" },
            { name: "VITEEE", date: "2025-05-10", link: "https://viteee.vit.ac.in" },
            { name: "SRMJEEE", date: "2025-04-30", link: "https://www.srmist.edu.in" },
            { name: "KLEEE", date: "2025-05-05", link: "https://www.kluniversity.in" },
            { name: "GITAM GAT", date: "2025-05-15", link: "https://gat.gitam.edu" },
            { name: "COMEDK UGET", date: "2025-05-28", link: "https://www.comedk.org" },
            { name: "Vignan VSAT", date: "2025-04-24", link: "https://www.vignan.ac.in" }
        ],
        state: {
            "Andhra Pradesh": [{ name: "AP EAMCET", date: "2025-05-06", link: "https://cets.apsche.ap.gov.in" }],
            "Telangana": [{ name: "TS EAMCET", date: "2025-05-10", link: "https://eapcet.tsche.ac.in" }],
            "Karnataka": [{ name: "KCET", date: "2025-04-29", link: "https://cetonline.karnataka.gov.in" }],
            "Maharashtra": [{ name: "MHT CET", date: "2025-05-12", link: "https://cetcell.mahacet.org" }],
            "Tamil Nadu": [{ name: "TNEA (Counselling Only)", date: "", link: "https://www.tneaonline.org" }],
            "Kerala": [{ name: "KEAM", date: "2025-05-17", link: "https://cee.kerala.gov.in" }]
        }
    },
    BiPC: {
        national: [
            { name: "NEET UG", link: "https://neet.nta.nic.in/" },
            { name: "AIIMS Nursing", link: "https://aiimsexams.ac.in/" },
            { name: "CUET UG (Biology)", link: "https://cuet.samarth.ac.in/" }
        ],
        state: {
            "Andhra Pradesh": [{ name: "AP EAPCET (BiPC)", link: "https://cets.apsche.ap.gov.in/" }],
            "Telangana": [{ name: "TS EAMCET (BiPC)", link: "https://eamcet.tsche.ac.in/" }],
            "Kerala": [{ name: "KEAM (Medical)", link: "https://cee.kerala.gov.in/" }],
            "Maharashtra": [{ name: "MH CET (Biotech)", link: "https://cetcell.mahacet.org/" }]
        }
    },
    Law: {
        national: [
            { name: "CLAT", link: "https://consortiumofnlus.ac.in/" },
            { name: "AILET", link: "https://nationallawuniversitydelhi.in/" },
            { name: "LSAT India", link: "https://www.discoverlaw.in/lsat-india" },
            { name: "CUET UG (Law)", link: "https://cuet.samarth.ac.in/" }
        ],
        state: {
            "Maharashtra": [{ name: "MH CET Law", link: "https://cetcell.mahacet.org/" }],
            "Uttar Pradesh": [{ name: "LU Law Entrance", link: "https://www.lkouniv.ac.in/" }]
        }
    },
    HotelManagement: {
        national: [
            { name: "NCHM JEE", link: "https://nchmjee.nta.nic.in/" },
            { name: "IIHM eCHAT", link: "https://www.iihm.ac.in/" },
            { name: "CUET UG (Hotel Management)", link: "https://cuet.samarth.ac.in/" }
        ],
        state: {
            "Uttarakhand": [{ name: "UKSEE (Hotel Management)", link: "https://uktech.ac.in/" }],
            "Maharashtra": [{ name: "MH CET Hotel Management", link: "https://cetcell.mahacet.org/" }]
        }
    }
};

function showExamsForStream() {
    const course = document.getElementById("course-select").value;
    const userState = localStorage.getItem("state");

    if (!course) return;

    document.getElementById("state-exam-popup").style.display = 'none';
    document.getElementById("private-exam-popup").style.display = 'none';

    showPrivateExams(exams[course].national);
    showStateExams(exams[course].state, userState);
}

function showPrivateExams(examsList) {
    const list = document.getElementById("private-exam-list");
    list.innerHTML = "";

    examsList.forEach(function (exam) {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${exam.name}</strong><br>
            📅 <em>Exam Date:</em> ${exam.date || "TBD"} <br>
            <button onclick="notifyExam('${exam.name}')">Notify</button>
            <button onclick="showDescription('${exam.name}')">Description</button>
            <button onclick="showMockTest('${exam.name}')">Mock Test</button>
            <hr>
        `;
        list.appendChild(li);
    });

    document.getElementById("private-exam-popup").style.display = 'block';
}

function showStateExams(stateWiseExams, userState) {
    const list = document.getElementById("state-exam-list");
    list.innerHTML = "";

    const states = Object.keys(stateWiseExams);
    if (userState && states.includes(userState)) {
        states.splice(states.indexOf(userState), 1);
        states.unshift(userState);
    }

    states.forEach((state) => {
        const examsForState = stateWiseExams[state];
        if (examsForState) {
            const header = document.createElement("h3");
            header.textContent = state;
            list.appendChild(header);

            examsForState.forEach(function (exam) {
                const li = document.createElement("li");
                li.innerHTML = `
                    <strong>${exam.name}</strong><br>
                    📅 <em>Exam Date:</em> ${exam.date || "TBD"} <br>
                    <button onclick="notifyExam('${exam.name}')">Notify</button>
                    <button onclick="showDescription('${exam.name}')">Description</button>
                    <button onclick="showMockTest('${exam.name}')">Mock Test</button>
                    <hr>
                `;
                list.appendChild(li);
            });
        }
    });

    document.getElementById("state-exam-popup").style.display = 'block';
}

function searchExams() {
    const searchQuery = document.getElementById("search-input").value.toLowerCase();

    const allExams = document.querySelectorAll("#private-exam-list li, #state-exam-list li");

    allExams.forEach(function (exam) {
        const examName = exam.querySelector("strong").textContent.toLowerCase();
        if (examName.includes(searchQuery)) {
            exam.style.display = "block";
        } else {
            exam.style.display = "none";
        }
    });
}

function notifyExam(examName) {
    alert(`You will be notified for ${examName}! We'll remind you via email and mobile.`);
}

function showDescription(examName) {
    window.location.href = `description.html?exam=${examName}`;
}

function showMockTest(examName) {
    window.location.href = `mocktest.html?exam=${examName}`;
}
