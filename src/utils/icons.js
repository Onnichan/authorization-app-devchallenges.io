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
    endpoint: "http://localhost:4000/api/v1/auth/google"
  },
  {
    name: "lock",
    icon: AtomLockIcon,
    endpoint: "http://localhost:4000/api/v1/auth/google"
  },
  {
    name: "facebook",
    icon: AtomFacebookIcon,
    endpoint: "http://localhost:4000/api/v1/auth/google"
  },
  {
    name: "github",
    icon: AtomGithubIcon,
    endpoint: "http://localhost:4000/api/v1/auth/google"
  },
  {
    name: "twitter",
    icon: AtomTwitterIcon,
    endpoint: "http://localhost:4000/api/v1/auth/google"
  },
  {
    name: "gmail",
    icon: AtomGmailIcon,
    endpoint: "http://localhost:4000/api/v1/auth/google"
  },
];

export default icons;
