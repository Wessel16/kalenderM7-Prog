const monthYear = document.getElementById("monthYear");
            const daysContainer = document.getElementById("days");
            let date = new Date();
            const today = new Date();
    
            function renderCalendar() {
                const year = date.getFullYear();
                const month = date.getMonth();
                monthYear.textContent = date.toLocaleString('nl-NL', { month: 'long', year: 'numeric' });
                daysContainer.innerHTML = "";
    
                const firstDay = new Date(year, month, 1).getDay();
                const lastDate = new Date(year, month + 1, 0).getDate();
                for (let i = 0; i < firstDay; i++) {
                    daysContainer.innerHTML += `<div></div>`;
                }
                for (let i = 1; i <= lastDate; i++) {
                    const isToday = year === today.getFullYear() && month === today.getMonth() && i === today.getDate();
                    daysContainer.innerHTML += `<div class='day ${isToday ? "today" : ""}'>${i}</div>`;
                }
            }
            
            function prevMonth() {
                date.setMonth(date.getMonth() - 1);
                renderCalendar();
            }
    
            function nextMonth() {
                date.setMonth(date.getMonth() + 1);
                renderCalendar();
            }
    
            renderCalendar();