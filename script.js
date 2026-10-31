
// Alternar Abas
function switchTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.remove('active');
  });
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  document.getElementById(`tab-${tabId}`).classList.add('active');
  event.currentTarget.classList.add('active');
}

// Lógica do Timer Pomodoro
let timer;
let timeLeft = 25 * 60;
let isRunning = false;

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  document.getElementById('timer-display').textContent = 
    `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateTimerDisplay();
      } else {
        clearInterval(timer);
        alert('Tempo de estudo finalizado! Hora de uma pausa.');
        resetTimer();
      }
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  timeLeft = 25 * 60;
  updateTimerDisplay();
}

// Tarefas Diárias
function addDailyTask(e) {
  e.preventDefault();
  const taskInput = document.getElementById('daily-task-input');
  const timeInput = document.getElementById('daily-task-time');
  
  const list = document.getElementById('daily-tasks-list');
  const li = document.createElement('li');
  
  li.innerHTML = `
    <span><strong>${timeInput.value}</strong> - ${taskInput.value}</span>
    <button onclick="this.parentElement.remove()"><i class="fa-solid fa-trash"></i></button>
  `;
  
  list.appendChild(li);
  taskInput.value = '';
  timeInput.value = '';
}

// Eventos Mensais
function addMonthlyEvent(e) {
  e.preventDefault();
  const titleInput = document.getElementById('monthly-title-input');
  const dateInput = document.getElementById('monthly-date-input');
  
  const list = document.getElementById('monthly-events-list');
  const li = document.createElement('li');
  
  li.innerHTML = `
    <span><strong>${dateInput.value}</strong>: ${titleInput.value}</span>
    <button onclick="this.parentElement.remove()"><i class="fa-solid fa-trash"></i></button>
  `;
  
  list.appendChild(li);
  titleInput.value = '';
  dateInput.value = '';
}

// Metas Anuais
function addYearlyGoal(e) {
  e.preventDefault();
  const goalInput = document.getElementById('yearly-goal-input');
  
  const list = document.getElementById('yearly-goals-list');
  const li = document.createElement('li');
  
  li.innerHTML = `
    <span><i class="fa-solid fa-bullseye"></i> ${goalInput.value}</span>
    <button onclick="this.parentElement.remove()"><i class="fa-solid fa-trash"></i></button>
  `;
  
  list.appendChild(li);
  goalInput.value = '';
}

// Disciplinas / Matérias
function addSubject(e) {
  e.preventDefault();
  const subjectInput = document.getElementById('subject-name-input');
  
  const list = document.getElementById('subjects-list');
  const li = document.createElement('li');
  
  li.innerHTML = `
    <span><i class="fa-solid fa-book"></i> ${subjectInput.value}</span>
    <button onclick="this.parentElement.remove()"><i class="fa-solid fa-trash"></i></button>
  `;
  
  list.appendChild(li);
  subjectInput.value = '';
}
