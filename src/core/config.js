export default {
  "id": 19,
  "title": "Lost Item Report",
  "framework": "Express",
  "transport": "api",
  "details": [],
  "projects": [],
  "actions": [],
  "capacity": 0,
  "adminOnly": false,
  "hideForm": false,
  "publicList": false,
  "formNote": "Your details are used only to handle this request.",
  "kind": "lost",
  "eyebrow": "VENUE LOST & FOUND",
  "headline": "Let us help you find it.",
  "description": "Tell the venue team what you lost and where you last saw it. They will have your contact details to follow up.",
  "button": "Submit a lost-item report",
  "fields": [
    {
      "name": "name",
      "label": "Your name",
      "type": "text"
    },
    {
      "name": "email",
      "label": "Email address",
      "type": "email"
    },
    {
      "name": "item",
      "label": "What did you lose?",
      "type": "text"
    },
    {
      "name": "location",
      "label": "Where did you last see it?",
      "type": "text"
    },
    {
      "name": "message",
      "label": "Description and identifying details",
      "type": "textarea"
    }
  ],
  "success": "Your lost-item report is saved.",
  "accent": "#374b68",
  "batch": false
};
