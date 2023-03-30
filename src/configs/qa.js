module.exports = {
  swagLabs: {
    baseUrl: 'https://www.saucedemo.com',

    users: {
      standard: 'standard_user'
    },

    passwords: {
      standard: 'secret_sauce'
    }
  },

  petStore: {
    payload: {
      id: 17,
      category: {
        id: 39,
        name: 'Dog'
      },
      name: 'Dakota',
      photoUrls: ['http://placeimg.com/640/480/animals'],
      tags: [
        {
          id: 83,
          name: 'string'
        }
      ],
      status: 'available'
    }
  }
}
