// Loader Navigation with Section Control
function showLoaderAndGo(sectionId) {
    const loader = document.getElementById("loader");
    const container = document.getElementById("main-container");
  
    loader.classList.add("show");
    container.classList.add("blur");
  
    setTimeout(() => {
      loader.classList.remove("show");
      container.classList.remove("blur");
      goToSection(sectionId);
  
      if (sectionId === "agreement-output") {
        populateAgreement();
      }
    }, 1000);
  }
  
  function goToSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    const nextSection = document.getElementById(sectionId);
    if (nextSection) nextSection.classList.add('active');
  }
  
  // Populate Agreement Preview
  function populateAgreement() {
    document.getElementById("display-landlord-name").innerText =
      document.getElementById("landlord-name").value;
    document.getElementById("display-landlord-contact").innerText =
      "Contact: " + document.getElementById("landlord-contact").value;
    document.getElementById("display-landlord-aadhaar").innerText =
      "Aadhaar: " + document.getElementById("landlord-aadhaar").value;
  
    document.getElementById("display-tenant-name").innerText =
      document.getElementById("tenant-name").value;
    document.getElementById("display-tenant-contact").innerText =
      "Contact: " + document.getElementById("tenant-contact").value;
    document.getElementById("display-tenant-aadhaar").innerText =
      "Aadhaar: " + document.getElementById("tenant-aadhaar").value;
  
    document.getElementById("display-address").innerText =
      document.getElementById("property-address").value;
  
    const startDate = document.getElementById("start-date").value;
    const endDate = document.getElementById("end-date").value;
    document.getElementById("display-dates").innerText = `${startDate} to ${endDate}`;
  
    document.getElementById("display-rent").innerText =
      "₹" + document.getElementById("monthly-rent").value;
  
    // Preview Photos
    const landlordPhoto = document.getElementById("landlord-photo").files[0];
    const tenantPhoto = document.getElementById("tenant-photo").files[0];
  
    if (landlordPhoto) {
      const reader1 = new FileReader();
      reader1.onload = () => {
        document.getElementById("landlord-photo-preview").src = reader1.result;
      };
      reader1.readAsDataURL(landlordPhoto);
    }
  
    if (tenantPhoto) {
      const reader2 = new FileReader();
      reader2.onload = () => {
        document.getElementById("tenant-photo-preview").src = reader2.result;
      };
      reader2.readAsDataURL(tenantPhoto);
    }
  }
  
  // Save as Image
  function saveAgreementAsImage() {
    const container = document.getElementById("agreement-container");
    html2canvas(container).then(canvas => {
      const link = document.createElement("a");
      link.download = "Smart_Rental_Agreement.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  }
  
  // Crypto Payment
  document.getElementById("crypto-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const wallet = document.getElementById("wallet").value.trim();
    const amount = document.getElementById("amount").value;
  
    if (!wallet || !amount) {
      alert("Please fill in all fields.");
      return;
    }
  
    document.getElementById("payment-status").innerText =
      `✅ Payment of ${amount} ETH to ${wallet} submitted! (Simulated)`;
  });
  
  // Civic Authentication Simulation
  document.getElementById("civic-auth-btn").addEventListener("click", () => {
    alert("Civic authentication simulated. (You can integrate real SDK here.)");
  });
  
  // MetaMask Login
  document.getElementById("metamask-login").addEventListener("click", async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        alert("🔐 MetaMask connected: " + accounts[0]);
      } catch (err) {
        alert("❌ Connection denied.");
      }
    } else {
      alert("MetaMask is not installed.");
    }
  });