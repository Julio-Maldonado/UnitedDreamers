import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebookF';

const SOCIAL_DATA = [
  {
    link: 'https://www.facebook.com/julio.maldonado.904',
    label: 'Facebook',
    icon: faFacebook,
    color: '#3b5998',
  }
];

const REGEX_PATTERNS = {
  nameNoSpaces: /^(?=.{1,50}$)[a-z-]+(?:['_.\s][a-z-]+)*$/i,
  emailAddress: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
  phoneNumber: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im,
  anyText: /^[.@&]?[a-zA-Z0-9 ]+[ !.@&()]?[ a-zA-Z0-9!()]+/,
  website: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w\-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)/,
  socialUsername: /[a-z]\d?/gi,
  zipCode: /^\d{5}$|^\d{5}-\d{4}$/,
}

const REQUIRED_INPUTS = {
  first: [
    'firstName',
    'lastName',
    'emailAddress',
    'phoneNumber',
    'companyName'
  ],
  second: [
    'category',
    'description',
    'services'
  ],
  third: [
    'zipCode'
  ]
}

const BUSINESS_TYPES = [
  'Micro Business (1 - 9 employees)',
  'Small Business (10 - 49 employees)',
  'Medium Sized Business (50 - 249 employees)',
  'Large Business (250+ employees)',
  'Startup (seeking funding)',
  'Startup (funded)',
  'Other'
]

const CATEGORIES = [
  'Accounting ',
  'Construction',
  'Consulting',
  'Ecommerce',
  'Education',
  'Cosmetics',
  'Entertainment',
  'Food and Drinks',
  'Health Care',
  'Marketing',
  'Photography',
  'Restaurant',
  'Real Estate',
  'Technology',
  'Other'
]

const REQUIRED_API_FIELDS = [
  'firstName',
  'lastName',
  'emailAddress',
  'phoneNumber',
  'companyName',
  'category',
  'description',
  'services',
  'companyURL',
  'companyFacebookURL',
  'companyInstagramUsername',
  'companyTwitterUsername',
  'zipCode',
  'city',
  'state',
  'country'
]

export {
  BUSINESS_TYPES,
  CATEGORIES,
  REGEX_PATTERNS,
  REQUIRED_INPUTS,
  REQUIRED_API_FIELDS,
  SOCIAL_DATA,
};