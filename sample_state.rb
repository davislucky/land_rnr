{
  entities: {
    listings: {
      1: {
        id: 1,
        title: "cheap stay in LA",
        description: "sample text description",
        price: 50.25,
        hostId: 4,
        heating: true,
        dishwasher: false,
        num_rooms: 2,
        selfCheckIn: true
      },
      2: {
        id: 2,
        title: "spacious home in the hamptons",
        description: "sample text description",
        price: 200,
        hostId: 25,
        heating: true,
        dishwasher: false,
        numRooms: 4,
        selfCheckIn: true
      },
      3: {
        id: 3,
        title: "beatufil villa in san jose",
        description: "sample text description",
        price: 1500,
        hostId: 3,
        heating: true,
        dishwasher: false,
        numRooms: 8,
        selfCheckIn: true
      }
    },
    users: {
      11: {
        id: 11,
        username: "blue_macaw",
        email: "bluebird@chirps.com",
        bio: "sample bio text",
        passwordDigest: "13poijasdoif14$:LKJ",
        sessionToken: "urlsafe_base64",
        createdAt: "YYYY-MM-DDTHH:mm:ss.sssZ",
        updatedAt: "YYYY-MM-DDTHH:mm:ss.sssZ"
      },
      25: {
        id: 25,
        username: "cowboysfan34",
        email: "jerryjones@dallas.com",
        bio: "sample bio text",
        passwordDigest: "13poijasdoif14$:LKJ",
        sessionToken: "urlsafe_base64",
        createdAt: "YYYY-MM-DDTHH:mm:ss.sssZ",
        updatedAt: "YYYY-MM-DDTHH:mm:ss.sssZ"
      }
    },
    bookings: {
        1: {
           id: 1, 
           user_id: 2,
           listingId: 4,
           checkIn: "YYYY-MM-DDTHH:mm:ss.sssZ",
           checkOut: "YYYY-MM-DDTHH:mm:ss.sssZ",
           numGuests: 6
        }
    },
    reviews: {
        1: {
            id: 1,
            userId: 45,
            listingId: 72,
            rating: 4.523,
            checkIn: 3,
            accuracy: 4,
            cleanliness: 2,
            location: 5,
            value: 5,
            communication: 5,
            reviewDescription: "sample review text"
        }
    }
  },
  ui: {
    loading: true/false,
    modal: true/false
  },
  errors: {
    login: ["Incorrect username/password combination"],
    bookForm: ["Date cannot be blank"],
  },
  session: { currentUserId: 25 }
}