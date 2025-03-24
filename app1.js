// صفحة تسجيل الدخول
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // لمنع إعادة تحميل الصفحة عند إرسال النموذج

    // الحصول على قيم المدخلات
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // التحقق من البيانات المخزنة في localStorage
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.email === email && user.password === password) {
        // إذا كانت البيانات صحيحة، يتم التوجيه إلى الصفحة الرئيسية
        alert("تم تسجيل الدخول بنجاح!");
        window.location.href = "HR.html"; // استبدال بـ صفحة رئيسية بعد التسجيل
    } else {
        // إذا كانت البيانات غير صحيحة
        alert("البريد الإلكتروني أو كلمة المرور غير صحيحة!");
    }
});
