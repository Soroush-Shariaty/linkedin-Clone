export const data = {
  users: [
    {
      ID: 1,
      profilePhoto: "John.jpg",
      description: "Business Owner",
      name: "John Doe",
      email: "John@gmail.com",
      password: "123456",
      isAdmin: false,
    },
    {
      ID: 2,
      profilePhoto: "Jane1.jpg",
      description: "Freelance web developer",
      name: "Jane Doe",
      email: "Jane@gmail.com",
      password: "123456",
      isAdmin: false,
    },
    {
      ID: 3,
      profilePhoto: "User-img.jpg",
      description: "Front-End Developer",
      name: "Soroush Shariaty",
      email: "Soroush@gmail.com",
      password: "123456",
      isAdmin: true,
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
      Time: "...",
      likeCount: 11,
      Comments: [
        {
          commentOwnerID: 1,
          text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                 vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                  causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
          replies: [
            {
              commentOwnerID: 2,
              text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                        vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                         causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
              replies: [
                {
                  commentOwnerID: 1,
                  text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                                vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                                 causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
                },
                {
                  commentOwnerID: 3,
                  text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                                vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                                 causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
                },
              ],
            },
            {
              commentOwnerID: 3,
              text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                        vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                         causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
              replies: [
                {
                  commentOwnerID: 2,
                  text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                                vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                                 causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
                },
                {
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
      postOwnerID: 2,
      // postPhoto: "../../../public/images/post1.jpg",

      postPhoto: {
        name: "post1.jpg",
        width: 750,
        height: 350,
      },
      description: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
      vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
       causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
      Time: "...",
      likeCount: 43,
      Comments: [
        {
          commentOwnerID: 3,
          text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                 vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                  causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
          replies: [
            {
              commentOwnerID: 2,
              text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                        vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                         causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
              replies: [
                {
                  commentOwnerID: 3,
                  text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                                vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                                 causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
                },
                {
                  commentOwnerID: 2,
                  text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                                vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                                 causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
                },
              ],
            },
            {
              commentOwnerID: 2,
              text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                        vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                         causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
              replies: [
                {
                  commentOwnerID: 1,
                  text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                                vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                                 causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
                },
                {
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
      postId: 3,
      postOwnerID: 3,
      // postPhoto: "../../../public/images/post2.jpg",
      postPhoto: {
        name: "post2.jpg",
        width: 800,
        height: 600,
      },
      description: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
      vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
       causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
      Time: "...",
      likeCount: 121,
      Comments: [
        {
          commentOwnerID: 1,
          text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                 vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                  causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
          replies: [
            {
              commentOwnerID: 2,
              text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                        vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                         causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
              replies: [
                {
                  commentOwnerID: 1,
                  text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                                vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                                 causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
                },
                {
                  commentOwnerID: 2,
                  text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                                vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                                 causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
                },
              ],
            },
            {
              commentOwnerID: 2,
              text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                        vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                         causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
              replies: [
                {
                  commentOwnerID: 3,
                  text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                                vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                                 causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
                },
                {
                  commentOwnerID: 1,
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
      postOwnerID: 2,
      // postPhoto: "../../../public/images/post-pic.jpg",
      postPhoto: {
        name: "post3.jpg",
        width: 600,
        height: 400,
      },
      description: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
      vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
       causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
      Time: "...",
      likeCount: 4,
      Comments: [
        {
          commentOwnerID: 2,
          text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                 vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                  causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
          replies: [
            {
              commentOwnerID: 3,
              text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                        vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                         causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
              replies: [
                {
                  commentOwnerID: 2,
                  text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                                vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                                 causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
                },
                {
                  commentOwnerID: 1,
                  text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                                vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                                 causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
                },
              ],
            },
            {
              commentOwnerID: 1,
              text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                        vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                         causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
              replies: [
                {
                  commentOwnerID: 3,
                  text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                                vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                                 causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
                },
                {
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
      // postPhoto: "../../../public/images/post1.jpg",
      postPhoto: {
        name: "post1.jpg",
        width: 750,
        height: 350,
      },
      description: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
      vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
       causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
      Time: "...",
      likeCount: 1100,
      Comments: [
        {
          commentOwnerID: 3,
          text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                 vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                  causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
          replies: [
            {
              commentOwnerID: 1,
              text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                        vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                         causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
              replies: [
                {
                  commentOwnerID: 2,
                  text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                                vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                                 causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
                },
                {
                  commentOwnerID: 1,
                  text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                                vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                                 causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
                },
              ],
            },
            {
              commentOwnerID: 3,
              text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                        vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                         causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
              replies: [
                {
                  commentOwnerID: 2,
                  text: `Lorem ipsum dolor sit amet, et minim liber patrioque mel,
                                vis latine alienum cu, ex pri summo vivendum similique. Offendit delicata ne has,
                                 causae temporibus est ei. Id usu brute scaevola, sit ei regione tacimates.`,
                },
                {
                  commentOwnerID: 1,
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
  ],
};
