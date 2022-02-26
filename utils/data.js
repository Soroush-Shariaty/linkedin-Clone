export const data = {
  users: [
    {
      ID: 1,
      profilePhoto: "John.jpg",
      description: "Business Owner",
      name: "John Doe",
      email: "john@gmail.com",
      password: "123456",
      isAdmin: false,
      backgroundImage: "bg1.jpg",
    },
    {
      ID: 2,
      profilePhoto: "Jane1.jpg",
      description: "Freelance web developer",
      name: "Jane Doe",
      email: "jane@gmail.com",
      password: "123456",
      isAdmin: false,
      backgroundImage: "bg2.jpg",
    },
    {
      ID: 3,
      profilePhoto: "User-img.jpg",
      description: "Front-End Developer",
      name: "Soroush Shariaty",
      email: "soroush@gmail.com",
      password: "123456",
      isAdmin: true,
      backgroundImage: "bg1.jpg",
    },
    {
      ID: 4,
      profilePhoto: "Elena.jpg",
      description: "Nurse",
      name: "Elena Smith",
      email: "elena@gmail.com",
      password: "123456",
      isAdmin: false,
      backgroundImage: "bg3.jpg",
    },
    {
      ID: 5,
      profilePhoto: "William.jpg",
      description: "Assistant Professor",
      name: "William Moore",
      email: "william@gmail.com",
      password: "123456",
      isAdmin: false,
      backgroundImage: "bg4.jpg",
    },
    {
      ID: 6,
      profilePhoto: "James.jpg",
      description: "Petroleum Engineer",
      name: "James McCarthy",
      email: "james@gmail.com",
      password: "123456",
      isAdmin: false,
      backgroundImage: "bg5.jpg",
    },
    {
      ID: 7,
      profilePhoto: "Sara.jpg",
      description: "Psychologist",
      name: "Sara Wembley",
      email: "sara@gmail.com",
      password: "123456",
      isAdmin: false,
      backgroundImage: "bg3.jpg",
    },
    {
      ID: 8,
      profilePhoto: "Madison.jpg",
      description: "Teacher",
      name: "Madison Merchant",
      email: "madison@gmail.com",
      password: "123456",
      isAdmin: false,
      backgroundImage: "bg5.jpg",
    },
    {
      ID: 9,
      profilePhoto: "Antonio.jpg",
      description: "Accountant",
      name: "Antonio Rodriguez",
      email: "antonio@gmail.com",
      password: "123456",
      isAdmin: false,
      backgroundImage: "bg4.jpg",
    },
    {
      ID: 10,
      profilePhoto: "Lisa.jpg",
      description: "Secretary",
      name: "Lisa West",
      email: "lisa@gmail.com",
      password: "123456",
      isAdmin: false,
      backgroundImage: "bg2.jpg",
    },
  ],
  posts: [
    {
      postId: 1,
      postOwnerID: 1,
      // postPhoto: "../../../public/images/post-pic.jpg",

      postPhoto: {
        name: "post2.jpg",
        width: 800,
        height: 600,
      },
      description: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
      vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
       causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
      time: "7h",
      likeCount: 11,
      Comments: [
        {
          commentId: 11,
          time: "1h",
          commentOwnerID: 5,
          text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                 vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                  causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
          replies: [
            {
              commentId: 111,
              time: "2h",
              commentOwnerID: 2,
              text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                        vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                         causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
              replies: [
                {
                  commentId: 1111,
                  time: "2h",
                  commentOwnerID: 1,
                  text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                                vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                                 causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
                },
                {
                  commentId: 1112,
                  time: "2h",
                  commentOwnerID: 3,
                  text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                                vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                                 causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      postId: 2,
      postOwnerID: 4,
      // postPhoto: "../../../public/images/post1.jpg",

      postPhoto: {
        name: "post1.jpg",
        width: 750,
        height: 350,
      },
      description: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
      vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
       causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
      time: "1d",
      likeCount: 43,
      Comments: [
        {
          commentId: 21,
          time: "2h",
          commentOwnerID: 6,
          text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                 vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                  causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
          replies: [
            {
              commentId: 211,
              commentOwnerID: 8,
              time: "3h",
              text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                        vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                         causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
              replies: [
                {
                  commentId: 2111,
                  time: "1h",
                  commentOwnerID: 5,
                  text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                                vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                                 causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
                },
                {
                  commentId: 2112,
                  time: "1h",
                  commentOwnerID: 2,
                  text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                                vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                                 causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
                },
              ],
            },
            {
              commentId: 212,
              time: "2h",
              commentOwnerID: 2,
              text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                        vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                         causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
              replies: [
                {
                  commentId: 2121,
                  time: "5h",
                  commentOwnerID: 6,
                  text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                                vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                                 causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
                },
                {
                  commentId: 2122,
                  time: "7h",
                  commentOwnerID: 3,
                  text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                                vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                                 causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
                },
              ],
            },
          ],
        },
        {
          commentId: 22,
          time: "1d",
          commentOwnerID: 6,
          text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                 vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                  causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
          replies: [
            {
              commentId: 221,
              time: "2h",
              commentOwnerID: 8,
              text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                        vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                         causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
              replies: [
                {
                  time: "2h",
                  commentId: 2211,
                  commentOwnerID: 5,
                  text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                                vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                                 causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
                },
                {
                  time: "4h",
                  commentId: 2212,
                  commentOwnerID: 2,
                  text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                                vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                                 causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      postId: 3,
      postOwnerID: 3,
      postPhoto: {
        name: "post2.jpg",
        width: 800,
        height: 600,
      },
      description: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
      vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
       causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
      time: "3d",
      likeCount: 121,
      Comments: [
        {
          commentId: 31,
          time: "4d",
          commentOwnerID: 1,
          text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                 vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                  causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
          replies: [
            {
              commentId: 311,
              time: "2d",
              commentOwnerID: 4,
              text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                        vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                         causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
              replies: [
                {
                  time: "4d",
                  commentId: 3111,
                  commentOwnerID: 6,
                  text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                                vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                                 causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
                },
                {
                  time: "1d",
                  commentId: 3112,
                  commentOwnerID: 1,
                  text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                                vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                                 causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
                },
              ],
            },
            {
              commentId: 312,
              commentOwnerID: 2,
              time: "12h",
              text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                        vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                         causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
              replies: [
                {
                  commentId: 3121,
                  commentOwnerID: 3,
                  time: "12h",
                  text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                                vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                                 causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
                },
                {
                  commentId: 3122,
                  commentOwnerID: 1,
                  time: "12h",
                  text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                                vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                                 causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      postId: 4,
      postOwnerID: 6,
      // postPhoto: "../../../public/images/post-pic.jpg",
      postPhoto: {
        name: "post3.jpg",
        width: 600,
        height: 400,
      },
      description: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
      vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
       causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
      time: "1m",
      likeCount: 4,
      Comments: [
        {
          commentId: 41,
          time: "12h",
          commentOwnerID: 2,
          text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                 vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                  causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
          replies: [
            {
              commentId: 411,
              time: "10h",
              commentOwnerID: 3,
              text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                        vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                         causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
              replies: [
                {
                  time: "12h",
                  commentId: 4111,
                  commentOwnerID: 2,
                  text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                                vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                                 causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
                },
                {
                  time: "12h",
                  commentId: 4112,
                  commentOwnerID: 7,
                  text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                                vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                                 causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
                },
              ],
            },
            {
              commentId: 412,
              time: "10h",
              commentOwnerID: 4,
              text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                        vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                         causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
              replies: [
                {
                  commentId: 4121,
                  time: "10h",
                  commentOwnerID: 9,
                  text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                                vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                                 causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
                },
                {
                  commentId: 4122,
                  time: "10h",
                  commentOwnerID: 3,
                  text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                                vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                                 causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      postId: 5,
      postOwnerID: 3,
      postPhoto: {
        name: "post1.jpg",
        width: 750,
        height: 350,
      },
      description: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
      vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
       causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
      time: "36d",
      likeCount: 1100,
      Comments: [],
    },
  ],
};
