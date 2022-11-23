const UNSPLASH_PREFIX = "https://images.unsplash.com/";
const UNSPLASH_SUFFIX = "&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";

const modifiers = {
  Artist: {
    name: "Artist",
    options: [
      {
        name: "Da Vinci",
        avatar: `${UNSPLASH_PREFIX}photo-1423742774270-6884aac775fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8${UNSPLASH_SUFFIX}`,
      },
      {
        name: "Banksy",
        avatar: `${UNSPLASH_PREFIX}photo-1629116589563-3840fb6adb28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8${UNSPLASH_SUFFIX}`,
      },
    ],
    placement: 0,
    selectedOption: null,
    template: `, by`,
    avatar: `${UNSPLASH_PREFIX}photo-1628359355624-855775b5c9c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8${UNSPLASH_SUFFIX}`,
  },
  Style: {
    name: "Style",
    options: [
      {
        name: "Digital",
        avatar: `${UNSPLASH_PREFIX}photo-1634986666676-ec8fd927c23d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8${UNSPLASH_SUFFIX}`,
      },
      {
        name: "Cartoon",
        avatar: `${UNSPLASH_PREFIX}photo-1620428268482-cf1851a36764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8${UNSPLASH_SUFFIX}`,
      },
    ],
    placement: 0,
    selectedOption: null,
    template: `,`,
    avatar: `${UNSPLASH_PREFIX}photo-1602464729960-f95937746b68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&${UNSPLASH_SUFFIX}`,
  },
};

export default modifiers;
