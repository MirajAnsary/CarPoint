// // Global filter state
// let filters = {
//   kmPlan: "140",
//   segments: [],
//   brands: [],
//   capacity: [],
//   priceRange: { min: 1000, max: 10000 },
// };

// // Mobile filter toggle
// function toggleMobileFilter() {
//   const panel = document.getElementById("filterPanel");
//   const overlay = document.querySelector(".filter-overlay");

//   panel.classList.add("show");
//   overlay.classList.add("show");
//   document.body.style.overflow = "hidden";
// }

// function closeMobileFilter() {
//   const panel = document.getElementById("filterPanel");
//   const overlay = document.querySelector(".filter-overlay");

//   panel.classList.remove("show");
//   overlay.classList.remove("show");
//   document.body.style.overflow = "";
// }

// // Kilometres Plan Selection
// function selectKmPlan(button, value) {
//   // Remove active class from all buttons
//   document
//     .querySelectorAll(".km-btn")
//     .forEach((btn) => btn.classList.remove("active"));

//   // Add active class to clicked button
//   button.classList.add("active");

//   // Update filter state
//   filters.kmPlan = value;
//   console.log("Kilometres Plan Filter:", filters);
// }

// // Segment Filter Handler
// function handleSegmentFilter(checkbox, value) {
//   if (value === "All") {
//     if (checkbox.checked) {
//       // Uncheck all other segment checkboxes
//       document
//         .querySelectorAll('#segmentSection input[type="checkbox"]')
//         .forEach((cb) => {
//           if (cb !== checkbox) cb.checked = false;
//         });
//       filters.segments = ["All"];
//     } else {
//       filters.segments = [];
//     }
//   } else {
//     // Uncheck 'All' if any specific segment is selected
//     const allCheckbox = document.getElementById("segment-all");
//     if (checkbox.checked) {
//       allCheckbox.checked = false;
//       if (!filters.segments.includes(value)) {
//         filters.segments.push(value);
//       }
//     } else {
//       filters.segments = filters.segments.filter((seg) => seg !== value);
//     }
//   }

//   console.log("Segment Filter:", filters);
// }

// // Brand Filter Handler
// function handleBrandFilter(checkbox, value) {
//   if (value === "All") {
//     if (checkbox.checked) {
//       document
//         .querySelectorAll('#brandSection input[type="checkbox"]')
//         .forEach((cb) => {
//           if (cb !== checkbox) cb.checked = false;
//         });
//       filters.brands = ["All"];
//     } else {
//       filters.brands = [];
//     }
//   } else {
//     const allCheckbox = document.getElementById("brand-all");
//     if (checkbox.checked) {
//       allCheckbox.checked = false;
//       if (!filters.brands.includes(value)) {
//         filters.brands.push(value);
//       }
//     } else {
//       filters.brands = filters.brands.filter((brand) => brand !== value);
//     }
//   }

//   console.log("Brand Filter:", filters);
// }

// // Capacity Filter Handler
// function handleCapacityFilter(checkbox, value) {
//   if (checkbox.checked) {
//     if (!filters.capacity.includes(value)) {
//       filters.capacity.push(value);
//     }
//   } else {
//     filters.capacity = filters.capacity.filter((cap) => cap !== value);
//   }

//   console.log("Capacity Filter:", filters);
// }

// // Price Range Handler
// function updatePriceRange() {
//   const minRange = document.getElementById("minRange");
//   const maxRange = document.getElementById("maxRange");
//   const minLabel = document.getElementById("minPriceLabel");
//   const maxLabel = document.getElementById("maxPriceLabel");
//   const track = document.getElementById("rangeTrack");

//   let minVal = parseInt(minRange.value);
//   let maxVal = parseInt(maxRange.value);

//   // Ensure min is not greater than max
//   if (minVal >= maxVal) {
//     minVal = maxVal - 100;
//     minRange.value = minVal;
//   }

//   // Update labels
//   minLabel.textContent = minVal;
//   maxLabel.textContent = maxVal;

//   // Update track visual
//   const minPercent = ((minVal - 1000) / (10000 - 1000)) * 100;
//   const maxPercent = ((maxVal - 1000) / (10000 - 1000)) * 100;

//   track.style.left = minPercent + "%";
//   track.style.width = maxPercent - minPercent + "%";

//   // Update filter state
//   filters.priceRange = { min: minVal, max: maxVal };
//   console.log("Price Range Filter:", filters);
// }

// // Show More Brands
// function showMoreBrands() {
//   alert(
//     "Show more brands functionality would expand the list or open a modal with all brands."
//   );
// }

// // Clear All Filters
// function clearAllFilters() {
//   // Reset all checkboxes
//   document
//     .querySelectorAll('input[type="checkbox"]')
//     .forEach((cb) => (cb.checked = false));

//   // Reset km plan buttons
//   document
//     .querySelectorAll(".km-btn")
//     .forEach((btn) => btn.classList.remove("active"));
//   document.querySelector(".km-btn").classList.add("active");

//   // Reset price range
//   document.getElementById("minRange").value = 1000;
//   document.getElementById("maxRange").value = 10000;
//   updatePriceRange();

//   // Reset filter state
//   filters = {
//     kmPlan: "140",
//     segments: [],
//     brands: [],
//     capacity: [],
//     priceRange: { min: 1000, max: 10000 },
//   };

//   console.log("All filters cleared:", filters);
// }

// // Initialize price range on load
// document.addEventListener("DOMContentLoaded", function () {
//   updatePriceRange();

//   // Close mobile filter when clicking outside
//   document.addEventListener("click", function (e) {
//     const panel = document.getElementById("filterPanel");
//     const toggleButton = document.querySelector(".mobile-filter-toggle");

//     if (
//       window.innerWidth <= 768 &&
//       !panel.contains(e.target) &&
//       !toggleButton.contains(e.target) &&
//       panel.classList.contains("show")
//     ) {
//       closeMobileFilter();
//     }
//   });
// });
// Global filter state
let filters = {
  kmPlan: "140",
  segments: [],
  brands: [],
  capacity: [],
  priceRange: { min: 1000, max: 10000 },
};

// Mobile filter toggle
function toggleMobileFilter() {
  const panel = document.getElementById("filterPanel");
  const overlay = document.querySelector(".filter-overlay");

  panel.classList.add("show");
  overlay.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeMobileFilter() {
  const panel = document.getElementById("filterPanel");
  const overlay = document.querySelector(".filter-overlay");

  panel.classList.remove("show");
  overlay.classList.remove("show");
  document.body.style.overflow = "";
}

// Kilometres Plan Selection
function selectKmPlan(button, value) {
  document.querySelectorAll(".km-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  button.classList.add("active");
  filters.kmPlan = value;
  console.log("Kilometres Plan Filter:", filters);
}

// Segment Filter Handler
function handleSegmentFilter(checkbox, value) {
  if (value === "All") {
    if (checkbox.checked) {
      document
        .querySelectorAll('#segmentSection input[type="checkbox"]')
        .forEach((cb) => {
          if (cb !== checkbox) cb.checked = false;
        });
      filters.segments = ["All"];
    } else {
      filters.segments = [];
    }
  } else {
    const allCheckbox = document.getElementById("segment-all");
    if (checkbox.checked) {
      allCheckbox.checked = false;
      if (!filters.segments.includes(value)) {
        filters.segments.push(value);
      }
    } else {
      filters.segments = filters.segments.filter((seg) => seg !== value);
    }
  }

  console.log("Segment Filter:", filters);
}

// Brand Filter Handler
function handleBrandFilter(checkbox, value) {
  if (value === "All") {
    if (checkbox.checked) {
      document
        .querySelectorAll('#brandSection input[type="checkbox"]')
        .forEach((cb) => {
          if (cb !== checkbox) cb.checked = false;
        });
      filters.brands = ["All"];
    } else {
      filters.brands = [];
    }
  } else {
    const allCheckbox = document.getElementById("brand-all");
    if (checkbox.checked) {
      allCheckbox.checked = false;
      if (!filters.brands.includes(value)) {
        filters.brands.push(value);
      }
    } else {
      filters.brands = filters.brands.filter((brand) => brand !== value);
    }
  }

  console.log("Brand Filter:", filters);
}

// Capacity Filter Handler
function handleCapacityFilter(checkbox, value) {
  if (checkbox.checked) {
    if (!filters.capacity.includes(value)) {
      filters.capacity.push(value);
    }
  } else {
    filters.capacity = filters.capacity.filter((cap) => cap !== value);
  }

  console.log("Capacity Filter:", filters);
}

// Price Range Handler
function updatePriceRange() {
  const minRange = document.getElementById("minRange");
  const maxRange = document.getElementById("maxRange");
  const minLabel = document.getElementById("minPriceLabel");
  const maxLabel = document.getElementById("maxPriceLabel");
  const track = document.getElementById("rangeTrack");

  let minVal = parseInt(minRange.value);
  let maxVal = parseInt(maxRange.value);

  if (minVal >= maxVal) {
    minVal = maxVal - 100;
    minRange.value = minVal;
  }

  minLabel.textContent = minVal;
  maxLabel.textContent = maxVal;

  const minPercent = ((minVal - 1000) / (10000 - 1000)) * 100;
  const maxPercent = ((maxVal - 1000) / (10000 - 1000)) * 100;

  track.style.left = minPercent + "%";
  track.style.width = maxPercent - minPercent + "%";

  filters.priceRange = { min: minVal, max: maxVal };
  console.log("Price Range Filter:", filters);
}

// Show More Brands
function showMoreBrands() {
  alert(
    "Show more brands functionality would expand the list or open a modal with all brands."
  );
}

// Clear All Filters
function clearAllFilters() {
  document.querySelectorAll('input[type="checkbox"]').forEach((cb) => {
    cb.checked = false;
  });

  document.querySelectorAll(".km-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  const defaultKm = document.querySelector(".km-btn");
  if (defaultKm) {
    defaultKm.classList.add("active");
  }

  const minRange = document.getElementById("minRange");
  const maxRange = document.getElementById("maxRange");
  if (minRange && maxRange) {
    minRange.value = 1000;
    maxRange.value = 10000;
    updatePriceRange();
  }

  filters = {
    kmPlan: "140",
    segments: [],
    brands: [],
    capacity: [],
    priceRange: { min: 1000, max: 10000 },
  };

  if (window.innerWidth <= 768) {
    closeMobileFilter();
  }

  console.log("All filters cleared:", filters);
}

// Initialize
document.addEventListener("DOMContentLoaded", function () {
  updatePriceRange();

  // Add event listeners for km buttons
  document.querySelectorAll(".km-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const label = this.querySelector("label");
      if (label) {
        const value = label.textContent.trim().replace(" Kms", "");
        selectKmPlan(this, value);
      }
    });
  });

  // Close mobile filter if clicking outside
  document.addEventListener("click", function (e) {
    const panel = document.getElementById("filterPanel");
    const toggleButton = document.querySelector(".mobile-filter-toggle");

    if (
      window.innerWidth <= 768 &&
      panel.classList.contains("show") &&
      !panel.contains(e.target) &&
      !toggleButton.contains(e.target)
    ) {
      closeMobileFilter();
    }
  });
});
