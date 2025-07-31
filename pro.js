// ===== HAMBURGER TOGGLE =====
document.getElementById("hamburger")?.addEventListener("click", function() {
  document.getElementById("navLinks")?.classList.toggle("show");
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger?.addEventListener('click', () => {
  navLinks?.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
});

document.querySelectorAll('#nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks?.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });
});

// ===== SMOOTH SCROLL WITH OFFSET =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    const offset = 80;
    const elementPos = target.offsetTop - offset;
    
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    });
  });
});

// ===== ENABLE SEARCH FUNCTION =====
function enableSearch() {
  const searchInput = document.getElementById('searchInput');
  searchInput?.addEventListener('input', () => {
    const filter = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll('.student-card');
    
    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(filter) ? 'block' : 'none';
    });
  });
}

// ===== FETCH & RENDER STUDENTS FROM JSON =====
fetch('pro.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('studentGrid');
    
    data.forEach(student => {
      const card = document.createElement('div');
      card.className = 'student-card';
      
      card.innerHTML = `
        <div class="card-top">
          <img src="${student.image}" alt="${student.name}" class="student-photo" />
          <h3 class="student-name">${student.name}</h3>
        </div>
        <div class="card-bottom">
          <p><strong>Student ID:</strong> ${student.id}</p>
          <p><strong>Merit:</strong> ${student.merit}</p>
          <p><strong>Blood Group:</strong> ${student.blood}</p>
          <p><strong>Contact:</strong> ${student.contact}</p>
        </div>
      `;
      
      container.appendChild(card);
    });
    
    // ✅ Enable search after all cards are added
    enableSearch();
  })
  .catch(error => {
    console.error("Failed to load student data:", error);
  });
  
  
  // 🔁 Toggle Notice Section
function toggleNotice() {
  const section = document.getElementById("noticeSection");
  section.style.display = section.style.display === "none" ? "block" : "none";
}

// 📥 Load Notices from notice.json
fetch("notice.json")
  .then(response => response.json())
  .then(data => {
    const noticeList = document.getElementById("noticeList");
    
    data.forEach(notice => {
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${notice.caption}</strong><br>
        <a href="${notice.file}" download>📥 See File</a>
      `;
      noticeList.appendChild(li);
    });
  })
  .catch(err => {
    console.error("❌ Failed to load notice.json:", err);
  });
  
  
  // 🔁 Toggle Notice Section
function toggleNotice() {
  const section = document.getElementById("noticeSection");
  
  const isHidden = section.style.display === "none";
  
  // Show/hide section
  section.style.display = isHidden ? "block" : "none";
  
  // Scroll to it smoothly when shown
  if (isHidden) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// 📥 Load Notices from notice.json
fetch("notice.json")
  .then(response => response.json())
  .then(data => {
    const noticeList = document.getElementById("noticeList");
    
    data.forEach(notice => {
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${notice.caption}</strong><br>
        <a href="${notice.file}" download>📥 See File</a>
      `;
      noticeList.appendChild(li);
    });
  })
  .catch(err => {
    console.error("❌ Failed to load notice.json:", err);
  });