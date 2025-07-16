// Counter Animation with Waypoints
function initCounters() {
  $(".counter").waypoint(
    function () {
      $(".counter").each(function () {
        $(this)
          .prop("Counter", 0)
          .animate(
            {
              Counter: $(this).data("target"),
            },
            {
              duration: 2000,
              easing: "swing",
              step: function (now) {
                $(this).text(Math.ceil(now));
              },
            }
          );
      });
    },
    {
      offset: "80%",
      triggerOnce: true,
    }
  );
}

// ✅ Call the function on page load
$(document).ready(function () {
  initCounters();
});
