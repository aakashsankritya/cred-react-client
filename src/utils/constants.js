const prod = {
  url: {
    API_URL: 'https://ccms-backend.herokuapp.com',
    CARD_API_URL: 'https://ccms-backend.herokuapp.com/cards/'
  }
}

const dev = {
  url: {
    API_URL: 'https://ccms-backend.herokuapp.com',
    CARD_API_URL: 'https://ccms-backend.herokuapp.com/cards/'
  }
}

export const config = process.env.NODE_ENV === "development" ? dev : prod;
