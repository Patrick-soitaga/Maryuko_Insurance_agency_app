// Navigation menu toggle//

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

// Toggle navigation menu on click//
if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

}

// Close navigation menu on link click (for mobile)//

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});

// Close pages or make pages active on click
const pageLinks = document.querySelectorAll("[data-page]"); // Select all page sections
const pages = document.querySelectorAll(".page")


pageLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = this.getAttribute("data-page");

        // Hide all pages
        pages.forEach(page => page.classList.remove("active"));

        // Show selected page
        document.getElementById(target).classList.add("active");
    });
});


// ======================== Service Pages ========================
const serviceButtons = document.querySelectorAll("[data-service]");
const servicePages = document.querySelectorAll(".service-page");

serviceButtons.forEach(button => {
    button.addEventListener("click", function () {
        const target = this.getAttribute("data-service");

        // Hide all service pages
        servicePages.forEach(page => page.classList.remove("active"));

        // Show selected service page
        const selected = document.getElementById(target);
        if (selected) {
            selected.classList.add("active");
        }
    });
});

// ======================== Certificate Issuance ========================

const businessRadios = document.querySelectorAll('input[name="businessType"]'); // Select the radio buttons for business type
const certificatesPage = document.querySelector(".certificates-page"); // Select the certificate options page
const certIssuancePage = document.getElementById("certIssuance"); // Select the certificate issuance form page

if (businessRadios && certificatesPage && certIssuancePage) {
    businessRadios.forEach(radio => {
        radio.addEventListener("change", () => {
            if (radio.checked) {
                // Hide selection section
                certificatesPage.style.display = "none";
                
                // Show certificate issuance form
                certIssuancePage.style.display = "block";
            }
        });
    });
}



// Back button functionality for certificate issuance form

const backBtn = document.getElementById("backToOptions");
if (backBtn) {
    backBtn.addEventListener("click", () => {
        certIssuancePage.style.display = "none";
        certificatesPage.style.display = "block";
    });
}

// ======================== End of Certificate Issuance ========================
// ======================== Agent Pages ========================

// This section handles the agent account management pages. It allows agents to select different account-related options and displays the corresponding forms while hiding the options menu.
const agentAccLinks = document.querySelectorAll("[data-agent]");
const agentPages = document.querySelectorAll(".agent-forms");

agentAccLinks.forEach(link => {
    link.addEventListener("click", function () {
        const target = this.getAttribute("data-agent");

        // Hide all agent pages
        agentPages.forEach(page => page.classList.remove("active"));

        // Show selected agent page
        const selected = document.getElementById(target);
        if (selected) {
            selected.classList.add("active");
        }
    });
});

// Show account forms and hide options on click
const accOpenLinks = document.querySelectorAll(".agent-options a");
const openingOptions = document.querySelector(".agent-options");
const accForms = document.getElementById("agentForms");

if (accOpenLinks && openingOptions && accForms) {
    accOpenLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            // Hide opening options and show account forms
            openingOptions.style.display = "none";
            // Show account forms
            accForms.style.display = "block";
        }
        );
    });
}

// Back button functionality for agent account forms
const backToAgentOptionsBtn = document.querySelectorAll(".backToAgentOptions");
if (backToAgentOptionsBtn) {
    backToAgentOptionsBtn.forEach(btn => {
        btn.addEventListener("click", () => {
            // Hide account forms and show opening options
            accForms.style.display = "none";
            openingOptions.style.display = "flex";
        });
    });
}



// ======================== End of Agent Pages ========================

// ======================== Support Page ========================
// Whatsapp contact button functionality
const whatsappBtn = document.getElementById("whatsappBtn");
if (whatsappBtn) {
    whatsappBtn.addEventListener("click", () => {
        const phoneNumber = "+254723888851"; // Replace with actual phone number
        const message = "Hello, I need help with my insurance policy.";

        const encodedMessage = encodeURIComponent(message);
        whatsappBtn.href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(whatsappBtn.href, "_blank");
    });
}

// call functionality for support phone number
const callBtn = document.getElementById("callBtn");
if (callBtn) {
    callBtn.addEventListener("click", () => {
        const phoneNumber = "+254723888851"; // Replace with actual phone number
        callBtn.href = `tel:${phoneNumber}`;
        window.open(callBtn.href, "_blank");
    });
}

// Email functionality for support email address
const emailBtn = document.getElementById("emailBtn");
if (emailBtn) {
    emailBtn.addEventListener("click", () => {
        const emailAddress = "dikirrpatrick@gmail.com"; // Replace with actual email address
        emailBtn.href = `mailto:${emailAddress}`;
        window.open(emailBtn.href, "_blank");
    });
}

// live chat button functionality (opens a new window with the live chat page)
const liveChatBtn = document.getElementById("liveChatBtn");
if (liveChatBtn) {
    liveChatBtn.addEventListener("click", () => {
        alert("Live chat is currently unavailable. Please contact us via WhatsApp, phone, or email for assistance.");
        //window.open("livechat.html", "_blank", "width=400,height=600");
    });
}

// visit us button functionality (opens a new window with the location on Google Maps)
const visitUsBtn = document.getElementById("visitUsBtn");
if (visitUsBtn) {
    visitUsBtn.addEventListener("click", () => {
        const location = "Maryuko Insurance Agency, Nairobi, Kenya"; // Replace with actual location
        visitUsBtn.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
        window.open(visitUsBtn.href, "_blank");
    });
}

// faq button functionality (scrolls to the FAQ section on the support page)
const faqBtn = document.getElementById("faqBtn");
if (faqBtn) {
    faqBtn.addEventListener("click", () => {
        const faqSection = document.getElementById("faq");
        if (faqSection) {
            faqSection.scrollIntoView({ behavior: "smooth" });
        }
    });
}       




// ======================== End of Support Page ========================

// footer year update
const yearSpan = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// Making the Hero section dynamic.


const messages = [
    "Protecting What Matters Most", 
    "Your Security is Our Priority", 
    "Comprehensive Insurance Solutions",
    "Peace of Mind for You and Your Loved Ones"];


const heroText = document.getElementById("hero-text");    

let messageIndex = 0;
let charIndex = 0;

function typeEffect(){

if(charIndex < messages[messageIndex].length){

heroText.textContent += messages[messageIndex].charAt(charIndex);

charIndex++;

setTimeout(typeEffect, 80);

}

else{

setTimeout(eraseEffect, 2000);

}

}

function eraseEffect(){

if(charIndex > 0){

heroText.textContent = messages[messageIndex].substring(0, charIndex - 1);

charIndex--;

setTimeout(eraseEffect, 40);

}

else{

messageIndex++;

if(messageIndex >= messages.length){
messageIndex = 0;
}

setTimeout(typeEffect, 500);

}

}

document.addEventListener("DOMContentLoaded", function(){
setTimeout(typeEffect, 500);
});

// Quote section dynamic content

const quoteMessage = [
    "Maryuko Insurance Agency Quotation Portal...", 
    "Get your insurance quote instantly..."
];


const heroQuote = document.getElementById("hero-quote");

let quoteMessageIndex = 0;

if (heroQuote) {

    setInterval(() => {
        heroQuote.textContent = quoteMessage[quoteMessageIndex];
        quoteMessageIndex++;
        if(quoteMessageIndex === quoteMessage.length){
            quoteMessageIndex = 0;
        }
    }, 3000);

}


// ======================== Form validation ========================

// Show/hide additional coverage options based on cover type selection

const comprehensiveOption = document.getElementById("comprehensive");
const thirdPartyOption = document.getElementById("thirdParty");
const tpftOption = document.getElementById("thirdPartyFireTheft");
const riderSection = document.getElementById("riderSection");

// Run only if elements exist (VERY IMPORTANT)
if (comprehensiveOption && thirdPartyOption && tpftOption && riderSection) {

    function toggleRiders() {
        if (comprehensiveOption.checked) {
            riderSection.style.display = "block";
        } else {
            riderSection.style.display = "none";
        }
    }

    // Attach listeners
    comprehensiveOption.addEventListener("change", toggleRiders);
    thirdPartyOption.addEventListener("change", toggleRiders);
    tpftOption.addEventListener("change", toggleRiders);

    // Run once on page load (important)
    toggleRiders();
}

// Premium calculation based on cover type, vehicle age, and vehicle value

const form = document.getElementById("quoteForm");

if(form){
form.addEventListener("submit", function(event){

event.preventDefault();

// Get form values

const vehicleValue = parseFloat(document.getElementById("value").value);
const year = parseInt(document.getElementById("year").value);



const coverType = document.querySelector('input[name="coverType"]:checked').value;
const selectedRiders = document.querySelectorAll('input[name="additionalCoverage"]:checked');

let basePremium = 0; // Default base premium for third party
let riderCost = 0;
let stampDuty = 40; // Fixed stamp duty for all policies
let policyholderLevy = 0.002; // 0.2% of base premium
let trainingLevy = 0.0025; // 0.25% of base premium     
let breakdown = [];

const currentYear = new Date().getFullYear();
let vehicleAge = currentYear - year;

// ================= BASE PREMIUM =================

if(coverType === "thirdParty"){
    basePremium = 7500;
    breakdown.push("Base (Third Party): KES 7,500");
}

else if(coverType === "thirdPartyFireTheft"){
    basePremium = vehicleValue * 0.025;
    breakdown.push("Base (TPFT 2.5%): KES " + basePremium.toLocaleString());
}

else if(coverType === "comprehensive"){

    if(vehicleAge > 15){
        alert("Vehicle too old for comprehensive cover.");
        return;
    }

    if(vehicleValue >= 2500000){
        basePremium = vehicleValue * 0.03;
    } else if(vehicleValue >= 1500000){
        basePremium = vehicleValue * 0.035;
    } else if(vehicleValue >= 1000000){
        basePremium = vehicleValue * 0.0375;
    } else if(vehicleValue >= 500000){
        if (basePremium < 27500) {
            basePremium = 27500; // Ensure minimum premium of KES 27,500
        }else {
            basePremium = vehicleValue * 0.04;
        }
    } else if(vehicleValue >= 400000){
        if (basePremium < 30000) {
            basePremium = 30000; // Ensure minimum premium of KES 30,000
        }else{
                basePremium = vehicleValue * 0.05;
        }
    } else {
        alert("Minimum value is KES 400,000 for comprehensive.");
        return;
    }

    breakdown.push("Base (Comprehensive): KES " + basePremium.toLocaleString());
}

// ================= RIDERS =================

selectedRiders.forEach(rider => {

    if(rider.value === "windscreen"){
        let cost = 5000;
        riderCost += cost;
        breakdown.push("Windscreen: KES " + cost.toLocaleString());
    }

    if(rider.value === "excessProtector"){
        let cost = basePremium * 0.05;
        riderCost += cost;
        breakdown.push("Excess Protector (5%): KES " + cost.toLocaleString());
    }

    if(rider.value === "entertainmentSystem"){
        let cost = 3000;
        riderCost += cost;
        breakdown.push("Entertainment: KES " + cost.toLocaleString());
    }

    if(rider.value === "politicalViolence"){
        let cost = basePremium * 0.0025;
        riderCost += cost;
        breakdown.push("PVT (0.25%): KES " + cost.toLocaleString());
    }

});

// ================= TOTAL =================

let totalPremium = basePremium + riderCost + stampDuty + (basePremium * policyholderLevy) + (basePremium * trainingLevy);

// ================= DISPLAY =================

let output = breakdown.join("<br>");
output += "<hr>";
output += "Stamp Duty: KES " + stampDuty.toLocaleString() + "<br>";
output += "Policyholder Levy (0.2%): KES " + (basePremium * policyholderLevy).toLocaleString() + "<br>";
output += "Training Levy (0.25%): KES " + (basePremium * trainingLevy).toLocaleString() + "<br>";
output += "<strong>Total Premium: KES " + totalPremium.toLocaleString() + "</strong>";

document.getElementById("result").innerHTML = output;

});
}

// ======================== End of form validation ========================

// ======================== Insurance Section ========================