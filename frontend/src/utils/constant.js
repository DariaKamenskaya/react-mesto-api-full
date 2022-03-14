// export const baseUrl = 'https://mesto.nomoreparties.co/v1/cohort-28';
// export const baseUrl = 'http://localhost:3001';
export const baseUrl = 'https://api.mesto.kamenskaya91.nomoredomains.work';
// export const baseToken = 'c9a5b46a-18cc-468c-aca5-c21309b709fb';
export const baseToken = `Bearer ${localStorage.getItem('jwt')}`;