// ==========================
// ظهور العناصر عند التمرير
// ==========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll(".service-card,.review-card,.gallery-grid img").forEach((el) => {

    observer.observe(el);

});

// ==========================
// تكبير الصور عند الضغط
// ==========================

document.querySelectorAll(".gallery-grid img").forEach((img) => {

    img.addEventListener("click", () => {

        window.open(img.src, "_blank");

    });

});

// ==========================
// زر واتساب
// ==========================

const whatsapp = document.querySelector(".floating-whatsapp");

if (whatsapp) {

    whatsapp.addEventListener("click", () => {

        console.log("WhatsApp");

    });

}

// ==========================
// زر الاتصال
// ==========================

const call = document.querySelector(".floating-call");

if (call) {

    call.addEventListener("click", () => {

        console.log("Call");

    });

}

// ==========================
// رسالة ترحيب
// ==========================

window.onload = function () {

    console.log("مرحبًا بك في موقع براقيو");

};