// صفحة إنشاء حساب
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // لمنع إعادة تحميل الصفحة عند إرسال النموذج

    // الحصول على قيم المدخلات
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // التحقق من أن البيانات غير فارغة
    if (username && email && password) {
        // حفظ البيانات في localStorage (مؤقتًا)
        localStorage.setItem("user", JSON.stringify({ username, email, password }));

        // عرض رسالة نجاح
        alert("تم إنشاء الحساب بنجاح!");

        // إعادة التوجيه إلى صفحة تسجيل الدخول
        window.location.href = "login.html"; // التوجيه إلى صفحة تسجيل الدخول
    } else {
        alert("يرجى تعبئة جميع الحقول.");
    }
});
// Wait until the page is loaded to ensure elements are available for interaction
document.addEventListener("DOMContentLoaded", function () {
    const chatContainer = document.getElementById('chat-container');
    const openChatBtn = document.getElementById('open-chat-btn');
    const closeChat = document.getElementById('close-chat');
    const chatInput = document.getElementById('chat-input');
    const chatBody = document.getElementById('chat-body');

    // Open the chat when the button is clicked
    openChatBtn.addEventListener('click', function() {
        chatContainer.style.display = 'block';
    });

    // Close the chat when the close button is clicked
    closeChat.addEventListener('click', function() {
        chatContainer.style.display = 'none';
    });

    // Handle sending the message when the Enter key is pressed
    chatInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter' && chatInput.value.trim() !== '') {
            const newMessage = document.createElement('div');
            newMessage.textContent = chatInput.value;
            chatBody.appendChild(newMessage);
            chatInput.value = ''; // Clear the input field
            chatBody.scrollTop = chatBody.scrollHeight; // Scroll to the latest message
        }
    });
});
