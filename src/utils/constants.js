const prod = {
  url: {
    API_URL: 'https://cred-t3-backend.herokuapp.com',
    CARD_API_URL: 'https://cred-t3-backend.herokuapp.com/cards/'
  }
}

const dev = {
  url: {
    API_URL: 'http://localhost:5000',
    CARD_API_URL: 'http://localhost:5000/cards/'
  }
}

export const config = process.env.NODE_ENV === "development" ? dev : prod;
