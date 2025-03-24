// عند تقديم نموذج طلب الإجازة
document.getElementById("leaveForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const employeeName = document.getElementById("employeeNameLeave").value;
    const leaveType = document.getElementById("leaveType").value;
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
  
    if (employeeName && leaveType && startDate && endDate) {
      // جلب سجلات الإجازات من localStorage
      const leaveRecords = JSON.parse(localStorage.getItem("leaveRecords")) || [];
      leaveRecords.push({
        employeeName: employeeName,
        leaveType: leaveType,
        startDate: startDate,
        endDate: endDate
      });
  
      // تخزين السجلات في localStorage
      localStorage.setItem("leaveRecords", JSON.stringify(leaveRecords));
  
      // إظهار إشعار
      showNotification("تم تقديم طلب الإجازة بنجاح!");
    } else {
      showNotification("الرجاء إدخال جميع البيانات.");
    }
  });
  
  // دالة لعرض الإشعار
  function showNotification(message) {
    const notification = document.getElementById("notification");
    const notificationMessage = document.getElementById("notificationMessage");
  
    notificationMessage.textContent = message;
    notification.classList.add("show");
  
    setTimeout(function() {
      notification.classList.remove("show");
    }, 3000);
  }
  