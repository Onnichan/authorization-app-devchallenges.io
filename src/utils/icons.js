import AtomEmailIcon from "../components/atoms/Icons/AtomEmailIcon.vue";
import AtomFacebookIcon from "../components/atoms/Icons/AtomFacebookIcon.vue";
import AtomGithubIcon from "../components/atoms/Icons/AtomGithubIcon.vue";
import AtomLockIcon from "../components/atoms/Icons/AtomLockIcon.vue";
import AtomTwitterIcon from "../components/atoms/Icons/AtomTwitterIcon.vue";
import AtomGmailIcon from "../components/atoms/Icons/AtomGmailIcon.vue";

const icons = [
  {
    name: "email",
    icon: AtomEmailIcon,
    endpoint: import.meta.env.VITE_GOOGLE_OAUTH,
  },
  {
    name: "lock",
    icon: AtomLockIcon,
    endpoint: import.meta.env.VITE_GOOGLE_OAUTH,
  },
  {
    name: "facebook",
    icon: AtomFacebookIcon,
    endpoint: import.meta.env.VITE_GOOGLE_OAUTH,
  },
  {
    name: "github",
    icon: AtomGithubIcon,
    endpoint: import.meta.env.VITE_GOOGLE_OAUTH,
  },
  {
    name: "twitter",
    icon: AtomTwitterIcon,
    endpoint: import.meta.env.VITE_GOOGLE_OAUTH,
  },
  {
    name: "gmail",
    icon: AtomGmailIcon,
    endpoint: import.meta.env.VITE_GOOGLE_OAUTH,
  },
];

export default icons;
