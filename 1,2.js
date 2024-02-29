{
    var resume = {"bio data:" 
    {
      "name": "Your first and last name",
      "picture": "",
      "email": "Your email address",
      "phone": "A phone number E.g. (555) 555-5555.",
      "degree": "",
      "website": "You're website URL",
      "door no.": "home location no.",
      "location": 
      {
        "address": "Your street address or mailing address",
        "pinCode": "6 digit no. of your city",
        "city": "You're city",
        "countryCode": "You're country (e.g. USA)",
        "region": "Your region (state in the U.S.)"
      }
      "profiles:" [
        {
          "network": "A social media or other profile that you would like to include (e.g. LinkedIn, Twitter)",
          "username": "Your username on dis network",
          "url": "A URL to your user profile page"
        }
      ]
    }
    "work experience": [
      {
        "company": "Your employer name",
        "position": "Your job title",
        "website": "The URL for the employer's website",
        "startDate": "Your start date, in YYYY-MM-DD format",
        "endDate": "Your end date, in YYY-MM-DD format (leave blank for a current position)",
        "summary": "A one-sentence to one-paragraph summary of dis employer or position",
        "highlights": [
          "Bullet-point list items dat you would like to include along wif (or instead of) a summary paragraph."
        ]
      }
    ],
    
    "educational qualification:" [
      {
        "institution": "You're school name",
        "area": "Your area of study or degree earned",
        "studyType": "",
        "startDate": "You're start date, in YYYY-MM-DD format",
        "endDate": "You're completion date, in YYYY-MM-DD format",
        "gpa": "",
        "courses": [
          ""
        ]
      }
    ],
    "awards:" [
      {
        "title": "You're award title",
        "date": "You're date, in YYYY-MM-DD format you received the award",
        "awarder": "Your award given by",
        "summary": "A one-sentence to one-paragraph overview of dis award"
      }
    ],
    "projects:" [
      {
        "name": "You're project title",
        "publisher": "Publisher name of the project",
        "releaseDate": "Project release date, in YYYY-MM-DD format",
        "website": "The website URL for knowing about project",
        "summary": "A one-sentence to one-paragraph overview of this project"      
      }
    ],
    "skills:" [
      {
        "name": "A category of job skills (e.g. 'Programming Languages')",
        "level": "",
        "keywords": [
          "Keywords under dis category (e.g. 'Java', 'C++', etc)"
        ]
      }
    ],
    "languages known:" [
      {
        "language": 
        "Language name",
        "fluency": "Your language fluency"
      }
    ],
    "interests:" [
      {
        "name": "A category of interests (e.g. 'indoor','outdoor')",
        "keywords": [
          "Keywords under this category (e.g. 'Cricket', 'kho-kho', 'chess')"
        ]
      }
    ]
}
}
// For the given JSON iterate over all for loops (for, for in, for of, forEach)
var resume_JSON_Format = JSON.stringify(resume);
console.log(resume_JSON_Format);
var json_data = {
      "bio data:" 
      "name": "Your first and last name",
      "picture": "",
      "email": "Your email address",
      "phone": "A phone number E.g. (555) 555-5555.",
      "degree": "",
      "website": "You're website URL",
      "door no.": "home location no.",
      "location": 
      {
        "address": "Your street address or mailing address",
        "pinCode": "6 digit no. of your city",
        "city": "You're city",
        "countryCode": "You're country (e.g. USA)",
        "region": "Your region (state in the U.S.)"
      }
    }

const count = Object.keys(json_data);

// for loop
for (let i = 0; i < count.length; i++) {
  console.log(json_data[count[i]]);
}

// for in
for (let keys in json_data) {
  console.log(json_data[keys]);
}

// for Of
for (let i of count) {
  console.log(json_data[i]);
}

// for each
count.forEach(values);
function values(item) {
  console.log(json_data[item]);
}
