const formConfig = {
  planner: [
    { name: "budget", label: "Budget", type: "number" },
    { name: "guests", label: "Number of Guests", type: "number" },
  ],
  performer: [
    { name: "genre", label: "Performance Type (DJ, Singer...)", type: "text" },
    { name: "duration", label: "Duration (hours)", type: "number" },
  ],
  crew: [
    { name: "role", label: "Crew Role", type: "text" },
    { name: "count", label: "Number of People", type: "number" },
  ],
};

export default formConfig;