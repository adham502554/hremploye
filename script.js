// عند تقديم نموذج تسجيل الحضور
document.getElementById("attendanceForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const employeeName = document.getElementById("employeeName").value;
  
    if (employeeName) {
      // جلب سجلات الحضور من localStorage
      const attendanceRecords = JSON.parse(localStorage.getItem("attendanceRecords")) || [];
      attendanceRecords.push({
        employeeName: employeeName,
        time: new Date().toLocaleTimeString()
      });
  
      // تخزين السجلات في localStorage
      localStorage.setItem("attendanceRecords", JSON.stringify(attendanceRecords));
  
      // إظهار إشعار
      showNotification("تم تسجيل الحضور بنجاح!");
    } else {
      showNotification("الرجاء إدخال اسم الموظف.");
    }
  });
  
  // عند تقديم نموذج تسجيل الانصراف
  document.getElementById("departureForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const employeeName = document.getElementById("employeeNameDeparture").value;
  
    if (employeeName) {
      // جلب سجلات الانصراف من localStorage
      const departureRecords = JSON.parse(localStorage.getItem("departureRecords")) || [];
      departureRecords.push({
        employeeName: employeeName,
        time: new Date().toLocaleTimeString()
      });
  
      // تخزين السجلات في localStorage
      localStorage.setItem("departureRecords", JSON.stringify(departureRecords));
  
      // إظهار إشعار
      showNotification("تم تسجيل الانصراف بنجاح!");
    } else {
      showNotification("الرجاء إدخال اسم الموظف.");
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
  