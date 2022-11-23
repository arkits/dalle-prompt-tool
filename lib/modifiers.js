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
        name: "Van Gough",
        avatar: `${UNSPLASH_PREFIX}photo-1423742774270-6884aac775fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8${UNSPLASH_SUFFIX}`,
      },
      {
        name: "Picaso",
        avatar: `${UNSPLASH_PREFIX}photo-1423742774270-6884aac775fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8${UNSPLASH_SUFFIX}`,
      },
      {
        name: "Banksy",
        avatar: `${UNSPLASH_PREFIX}photo-1629116589563-3840fb6adb28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8${UNSPLASH_SUFFIX}`,
      },
      {
        name: "Salvador Dali",
        avatar: `${UNSPLASH_PREFIX}photo-1423742774270-6884aac775fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8${UNSPLASH_SUFFIX}`,
      },
      {
        name: "Claude Monet",
        avatar: `${UNSPLASH_PREFIX}photo-1423742774270-6884aac775fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8${UNSPLASH_SUFFIX}`,
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
      {
        name: "Anime",
        avatar: `${UNSPLASH_PREFIX}photo-1620428268482-cf1851a36764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8${UNSPLASH_SUFFIX}`,
      },
      {
        name: "Retro",
        avatar: `${UNSPLASH_PREFIX}photo-1620428268482-cf1851a36764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8${UNSPLASH_SUFFIX}`,
      },
      {
        name: "Cubism",
        avatar: `${UNSPLASH_PREFIX}photo-1620428268482-cf1851a36764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8${UNSPLASH_SUFFIX}`,
      },
      {
        name: "Ukiyo-e",
        avatar: `${UNSPLASH_PREFIX}photo-1620428268482-cf1851a36764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8${UNSPLASH_SUFFIX}`,
      },
      {
        name: "Renaissance",
        avatar: `${UNSPLASH_PREFIX}photo-1620428268482-cf1851a36764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8${UNSPLASH_SUFFIX}`,
      },
    ],
    placement: 0,
    selectedOption: null,
    template: `,`,
    avatar: `${UNSPLASH_PREFIX}photo-1602464729960-f95937746b68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&${UNSPLASH_SUFFIX}`,
  },
  Type: {
    name: "Type",
    options: [
      {
        name: "Detailed",
        avatar: `${UNSPLASH_PREFIX}photo-1620428268482-cf1851a36764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8${UNSPLASH_SUFFIX}`,
      },
      {
        name: "Award-winning",
        avatar: `${UNSPLASH_PREFIX}photo-1620428268482-cf1851a36764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8${UNSPLASH_SUFFIX}`,
      },
    ],
    placement: 0,
    selectedOption: null,
    template: `,`,
    avatar: `${UNSPLASH_PREFIX}reserve/uZYSV4nuQeyq64azfVIn_15130980706_64134efc6e_o.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8${UNSPLASH_SUFFIX}`,
  },
  Quality: {
    name: "Quality",
    options: [
      {
        name: "4k",
        avatar: `${UNSPLASH_PREFIX}photo-1620428268482-cf1851a36764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8${UNSPLASH_SUFFIX}`,
      },
    ],
    placement: 0,
    selectedOption: null,
    template: `,`,
    avatar: `${UNSPLASH_PREFIX}photo-1593019079637-ac824a5e6330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8${UNSPLASH_SUFFIX}`,
  },
  Lighting: {
    name: "Lighting",
    options: [
      {
        name: "Warm",
        avatar: `${UNSPLASH_PREFIX}photo-1620428268482-cf1851a36764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8${UNSPLASH_SUFFIX}`,
      },
    ],
    placement: 0,
    selectedOption: null,
    template: `,`,
    avatar: `${UNSPLASH_PREFIX}photo-1563099045-dd7d9aebaa49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8${UNSPLASH_SUFFIX}`,
  },
  Proximity: {
    name: "Proximity",
    options: [
      {
        name: "Long",
        avatar: `${UNSPLASH_PREFIX}photo-1620428268482-cf1851a36764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8${UNSPLASH_SUFFIX}`,
      },
    ],
    placement: 0,
    selectedOption: null,
    template: `,`,
    avatar: `${UNSPLASH_PREFIX}photo-1522325430955-e2d3bb38c71a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&${UNSPLASH_SUFFIX}`,
  },
  Photography: {
    name: "Photography",
    options: [
      {
        name: "Infrared",
        avatar: `${UNSPLASH_PREFIX}photo-1620428268482-cf1851a36764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8${UNSPLASH_SUFFIX}`,
      },
    ],
    placement: 0,
    selectedOption: null,
    template: `,`,
    avatar: `${UNSPLASH_PREFIX}photo-1520967827346-4d900f73ef4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&${UNSPLASH_SUFFIX}`,
  },
};

export default modifiers;
